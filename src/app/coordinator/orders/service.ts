"use server";

import { prisma } from "@/lib/db";
import { OrderFormInput } from "./schemas";
import { OrderStatus, OrderItemStatus } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const ORDERS_PATH = "/dashboard/coordinator/orders";

export async function updateOrder(id: string, data: OrderFormInput) {
  try {
    // Get the current order to determine status relationships
    const currentOrder = await prisma.order.findUnique({
      where: { id },
      select: { status: true }
    });
    
    if (!currentOrder) {
      return {
        success: false,
        error: "Commande introuvable."
      };
    }
    
    // Determine the proper order status and corresponding item status
    const orderStatus = data.status ?? currentOrder.status;
    let orderItemStatus = OrderItemStatus.PENDING;
    
    // Synchronize item status based on order status
    switch (orderStatus) {
      case OrderStatus.DRAFT:
        orderItemStatus = OrderItemStatus.PENDING;
        break;
      case OrderStatus.VALIDATED:
        orderItemStatus = OrderItemStatus.VALIDATED;
        break;
      case OrderStatus.PARTIALLY_VALIDATED:
        orderItemStatus = OrderItemStatus.PARTIALLY_VALIDATED;
        break;
      case OrderStatus.PREPARED:
        orderItemStatus = OrderItemStatus.PREPARED;
        break;
      case OrderStatus.DELIVERED:
        orderItemStatus = OrderItemStatus.DELIVERED;
        break;
      default:
        // Keep default PENDING for other statuses
        break;
    }

    // Use transaction to ensure data consistency
    const updated = await prisma.$transaction(async (tx) => {
      // First, delete related order items explicitly
      await tx.orderItem.deleteMany({
        where: { orderId: id }
      });

      // Then update the order with new items
      return await tx.order.update({
        where: { id },
        data: {
          notes: data.notes,
          status: orderStatus,
          orderItems: {
            create: data.orderItems.map((item) => ({
              medicationId: item.medicationId,
              requestedQuantity: item.requestedQuantity,
              notes: item.notes,
              status: orderItemStatus,
            })),
          },
        },
      });
    });

    revalidatePath(ORDERS_PATH);
    return { success: true, data: updated };
  } catch (error: any) {
    console.error("Update order error:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la mise à jour de la commande.",
    };
  }
}

export async function createOrderForService(
  serviceId: string,
  userId: string,
  data: OrderFormInput
) {
  try {
    // For new orders, we set consistent status values
    const orderStatus = OrderStatus.DRAFT;
    // For DRAFT orders, items should be in PENDING status
    const itemStatus = OrderItemStatus.PENDING;
    
    // Generate a unique order number with timestamp and random suffix for uniqueness
    const timestamp = Date.now();
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const orderNumber = `ORD-${timestamp}-${randomSuffix}`;
    
    const order = await prisma.order.create({
      data: {
        orderNumber,
        status: orderStatus,
        notes: data.notes,
        serviceId,
        createdById: userId,
        orderItems: {
          create: data.orderItems.map((item) => ({
            medicationId: item.medicationId,
            requestedQuantity: item.requestedQuantity,
            notes: item.notes,
            status: itemStatus,
          })),
        },
      },
      // Include more data in the return value for immediate use
      include: {
        orderItems: {
          include: { medication: true }
        },
        service: true,
        createdBy: true
      }
    });

    revalidatePath(ORDERS_PATH);
    return { success: true, data: order };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erreur création commande:", error);
    return {
      success: false,
      error: error.message ?? "Erreur lors de la création de la commande.",
    };
  }
}

/**
 * Get all orders for a specific service.
 */
export async function getOrdersByService(serviceId: string) {
  return await prisma.order.findMany({
    where: { serviceId },
    include: {
      orderItems: { include: { medication: true } },
      service: true,
      createdBy: true,
      validatedBy: true,
      preparedBy: true
    },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Find orders for the pharmacist to validate (SUBMITTED status)
 */
export async function getOrdersForValidation() {
  return await prisma.order.findMany({
    where: { status: OrderStatus.SUBMITTED },
    include: {
      orderItems: { include: { medication: true } },
      service: true,
      createdBy: true
    },
    orderBy: { createdAt: "asc" }, // Oldest first, for FIFO processing
  });
}

/**
 * Find orders for preparation (VALIDATED or PARTIALLY_VALIDATED status)
 */
export async function getOrdersForPreparation() {
  return await prisma.order.findMany({
    where: { 
      OR: [
        { status: OrderStatus.VALIDATED },
        { status: OrderStatus.PARTIALLY_VALIDATED }
      ]
    },
    include: {
      orderItems: { 
        where: {
          OR: [
            { status: OrderItemStatus.VALIDATED },
            { status: OrderItemStatus.PARTIALLY_VALIDATED }
          ]
        },
        include: { medication: true } 
      },
      service: true,
      validatedBy: true
    },
    orderBy: { validatedAt: "asc" }, // Oldest validated first
  });
}

/**
 * Get a specific order by ID.
 */
export async function getOrderWithItems(id: string) {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      orderItems: {
        include: { medication: true },
      },
      service: true,
      createdBy: true,
    },
  });
}

/**
 * Submit a draft order (change status to SUBMITTED).
 * This also ensures all order items are set to PENDING status.
 */
export async function submitOrder(id: string) {
  try {
    // Update the order and its items in a transaction to ensure consistency
    const updatedOrder = await prisma.$transaction(async (tx) => {
      // First update the order status
      const order = await tx.order.update({
        where: { id },
        data: {
          status: OrderStatus.SUBMITTED,
        },
        include: {
          orderItems: true, // Include items to process them
        },
      });
      
      // Make sure all order items are set to PENDING status when order is submitted
      if (order.orderItems.length > 0) {
        await tx.orderItem.updateMany({
          where: { orderId: id },
          data: { status: OrderItemStatus.PENDING }
        });
      }
      
      return order;
    });
    
    revalidatePath(ORDERS_PATH);
    return { success: true, data: updatedOrder };
  } catch (error: any) {
    console.error("Submit order error:", error);
    return {
      success: false, 
      error: error.message || "Erreur lors de la soumission de la commande."
    };
  }
}

/**
 * Validate an order and update its items with validated quantities
 * This handles both full and partial validation.
 */
export async function validateOrder(
  id: string, 
  pharmacistId: string, 
  validatedItems: Array<{ id: string, validatedQuantity: number, status: OrderItemStatus }>
) {
  try {
    // Calculate if this is a full or partial validation
    let overallStatus = OrderStatus.VALIDATED;
    
    // Check if any items are partially validated or not available
    const hasPartialItems = validatedItems.some(
      item => item.status === OrderItemStatus.PARTIALLY_VALIDATED || 
             item.status === OrderItemStatus.NOT_AVAILABLE
    );
    
    if (hasPartialItems) {
      overallStatus = OrderStatus.PARTIALLY_VALIDATED;
    }
    
    const result = await prisma.$transaction(async (tx) => {
      // Update each order item
      for (const item of validatedItems) {
        await tx.orderItem.update({
          where: { id: item.id },
          data: {
            validatedQuantity: item.validatedQuantity,
            status: item.status
          }
        });
      }
      
      // Update the order status and set the pharmacist
      return await tx.order.update({
        where: { id },
        data: {
          status: overallStatus,
          validatedById: pharmacistId,
          validatedAt: new Date(),
        },
        include: {
          orderItems: {
            include: { medication: true }
          },
          service: true,
          createdBy: true,
          validatedBy: true
        }
      });
    });
    
    revalidatePath(ORDERS_PATH);
    revalidatePath("/dashboard/pharmacist/orders"); // Assuming there's a pharmacist dashboard
    
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Validate order error:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la validation de la commande."
    };
  }
}

/**
 * Mark an order as prepared with the prepared quantities
 */
export async function markOrderAsPrepared(
  id: string,
  preparerId: string,
  preparedItems: Array<{ id: string, preparedQuantity: number }>
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Update each order item
      for (const item of preparedItems) {
        await tx.orderItem.update({
          where: { id: item.id },
          data: {
            preparedQuantity: item.preparedQuantity,
            status: OrderItemStatus.PREPARED
          }
        });
      }
      
      // Update the order status
      return await tx.order.update({
        where: { id },
        data: {
          status: OrderStatus.PREPARED,
          preparedById: preparerId,
          preparedAt: new Date(),
        },
        include: {
          orderItems: {
            include: { medication: true }
          },
          service: true,
          createdBy: true,
          validatedBy: true,
          preparedBy: true
        }
      });
    });
    
    revalidatePath(ORDERS_PATH);
    revalidatePath("/dashboard/pharmacist/orders");
    
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Mark as prepared error:", error);
    return {
      success: false,
      error: error.message || "Erreur lors du marquage de la commande comme préparée."
    };
  }
}

/**
 * Mark an order as delivered and create delivery note
 */
export async function markOrderAsDelivered(id: string) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Create a delivery note
      const timestamp = Date.now();
      const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const noteNumber = `DEL-${timestamp}-${randomSuffix}`;
      
      await tx.deliveryNote.create({
        data: {
          noteNumber,
          orderId: id,
          printedAt: new Date()
        }
      });
      
      // Update all items to delivered
      await tx.orderItem.updateMany({
        where: { orderId: id },
        data: { status: OrderItemStatus.DELIVERED }
      });
      
      // Update the order
      return await tx.order.update({
        where: { id },
        data: {
          status: OrderStatus.DELIVERED,
          deliveredAt: new Date()
        },
        include: {
          orderItems: true,
          deliveryNote: true
        }
      });
    });
    
    revalidatePath(ORDERS_PATH);
    revalidatePath("/dashboard/pharmacist/orders");
    
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Mark as delivered error:", error);
    return {
      success: false,
      error: error.message || "Erreur lors du marquage de la commande comme livrée."
    };
  }
}

export async function deleteOrder(id: string) {
  try {
    // First check if there's a delivery note
    const deliveryNote = await prisma.deliveryNote.findUnique({
      where: { orderId: id },
    });

    if (deliveryNote) {
      return {
        success: false,
        error: "Impossible de supprimer : une note de livraison est liée à cette commande.",
      };
    }

    // Check if there are any stock exits linked to this order's items
    const orderItems = await prisma.orderItem.findMany({
      where: { orderId: id },
      include: { stockExits: true }
    });

    const hasStockExits = orderItems.some(item => item.stockExits.length > 0);
    if (hasStockExits) {
      return {
        success: false,
        error: "Impossible de supprimer : des sorties de stock sont liées aux articles de cette commande.",
      };
    }

    // Use transaction to ensure all related records are deleted properly
    await prisma.$transaction([
      // First delete all order items
      prisma.orderItem.deleteMany({ where: { orderId: id } }),
      // Then delete the order
      prisma.order.delete({ where: { id } })
    ]);

    revalidatePath(ORDERS_PATH);
    return { success: true };
  } catch (error: any) {
    console.error("Delete order error:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la suppression de la commande.",
    };
  }
}