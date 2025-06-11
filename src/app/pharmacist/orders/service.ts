"use server";

import {
  Order,
  OrderItem,
  MedicationBatch,
  OrderStatus,
  OrderItemStatus,
  Medication,
} from "@/generated/prisma";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Updated interface to match your component's expectations
export interface OrderForValidation extends Order {
  service: { id: string; name: string };
  createdBy: { id: string; firstName: string; lastName: string };
  orderItems: Array<
    OrderItem & {
      medication: {
        id: string;
        commercialName: string;
        dci: string;
        form: string;
        dosage: string;
        batches: Array<
          Pick<
            MedicationBatch,
            "id" | "batchNumber" | "expirationDate" | "currentQuantity"
          >
        >;
      };
      totalAvailableStock?: number;
    }
  >;
}

// Function to get order with items (matches your component's expectation)
export async function getOrderWithItems(orderId: string): Promise<OrderForValidation | null> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      service: { 
        select: { 
          id: true,
          name: true 
        } 
      },
      createdBy: { 
        select: { 
          id: true,
          firstName: true, 
          lastName: true 
        } 
      },
      orderItems: {
        include: {
          medication: {
            select: {
              id: true,
              commercialName: true,
              dci: true,
              form: true,
              dosage: true,
              batches: {
                where: {
                  currentQuantity: { gt: 0 },
                  expirationDate: { gte: new Date() },
                },
                orderBy: { expirationDate: "asc" },
                select: {
                  id: true,
                  batchNumber: true,
                  expirationDate: true,
                  currentQuantity: true,
                }
              },
            },
          },
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!order) return null;

  return {
    ...order,
    orderItems: order.orderItems.map((item) => ({
      ...item,
      totalAvailableStock: item.medication.batches.reduce(
        (sum, batch) => sum + batch.currentQuantity,
        0
      ),
    })),
  };
}

// Get all medications function (for your component)
export async function getAllMedications(): Promise<Medication[]> {
  return await prisma.medication.findMany({
    where: { isActive: true },
    orderBy: { commercialName: "asc" },
    include: {
      therapeuticClass: true,
      subClass: true,
      batches: {
        where: {
          currentQuantity: { gt: 0 },
          expirationDate: { gte: new Date() },
        },
      },
    },
  });
}

export async function getPendingOrdersForValidation(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED],
      },
    },
    include: {
      service: { 
        select: { 
          id: true,
          name: true 
        } 
      },
      createdBy: { 
        select: { 
          id: true,
          firstName: true, 
          lastName: true 
        } 
      },
      orderItems: {
        include: {
          medication: {
            select: {
              id: true,
              commercialName: true,
              dci: true,
              form: true,
              dosage: true,
              batches: {
                where: {
                  currentQuantity: { gt: 0 },
                  expirationDate: { gte: new Date() },
                },
                orderBy: { expirationDate: "asc" },
              },
            },
          },
        },
        orderBy: { createdAt: "asc" },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return orders.map((order) => ({
    ...order,
    orderItems: order.orderItems.map((item) => ({
      ...item,
      totalAvailableStock: item.medication.batches.reduce(
        (sum, batch) => sum + batch.currentQuantity,
        0
      ),
    })),
  }));
}

// Fixed validation function
export async function validateOrder(
  orderId: string,
  validatedByUserId: string,
  validatedItems: Array<{
    id: string;
    validatedQuantity: number;
    status: OrderItemStatus;
  }>
) {
  try {
    return await prisma.$transaction(async (tx) => {
      // Get the order with current items
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { 
          orderItems: { 
            include: { 
              medication: {
                select: {
                  id: true,
                  commercialName: true,
                  dci: true,
                }
              } 
            } 
          } 
        },
      });

      if (!order) {
        return { success: false, error: "Commande non trouvée." };
      }

      // Check if order can be validated
      if (![OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED].includes(order.status)) {
        return { 
          success: false, 
          error: "Cette commande n'est plus en attente de validation." 
        };
      }

      // Validate each item
      const itemValidationResults = [];
      
      for (const validatedItem of validatedItems) {
        const dbItem = order.orderItems.find((i) => i.id === validatedItem.id);
        if (!dbItem) {
          return { 
            success: false, 
            error: `Article de commande ${validatedItem.id} non trouvé.` 
          };
        }

        let newValidatedQuantity = validatedItem.validatedQuantity;
        let newStatus = validatedItem.status;

        // Handle different statuses
        if (newStatus === OrderItemStatus.NOT_AVAILABLE) {
          newValidatedQuantity = 0;
        } else {
          // Validate quantity constraints
          if (newValidatedQuantity < 0) {
            return { 
              success: false, 
              error: `La quantité validée pour ${dbItem.medication.commercialName} ne peut être négative.` 
            };
          }
          
          if (newValidatedQuantity > dbItem.requestedQuantity) {
            return { 
              success: false, 
              error: `La quantité validée (${newValidatedQuantity}) pour ${dbItem.medication.commercialName} ne peut excéder la quantité demandée (${dbItem.requestedQuantity}).` 
            };
          }

          // Determine status based on quantity
          if (newValidatedQuantity === 0) {
            newStatus = OrderItemStatus.NOT_AVAILABLE;
          } else if (newValidatedQuantity < dbItem.requestedQuantity) {
            newStatus = OrderItemStatus.PARTIALLY_VALIDATED;
          } else {
            newStatus = OrderItemStatus.VALIDATED;
          }
        }

        // Update the order item
        await tx.orderItem.update({
          where: { id: validatedItem.id },
          data: {
            validatedQuantity: newValidatedQuantity,
            status: newStatus,
          },
        });

        itemValidationResults.push({
          id: validatedItem.id,
          requestedQuantity: dbItem.requestedQuantity,
          validatedQuantity: newValidatedQuantity,
          status: newStatus,
        });
      }

      // Determine overall order status
      const totalItemsValidated = itemValidationResults.filter(
        item => item.status === OrderItemStatus.VALIDATED
      ).length;
      
      const totalItemsPartiallyValidated = itemValidationResults.filter(
        item => item.status === OrderItemStatus.PARTIALLY_VALIDATED
      ).length;
      
      const totalItemsNotAvailable = itemValidationResults.filter(
        item => item.status === OrderItemStatus.NOT_AVAILABLE
      ).length;

      const totalItems = itemValidationResults.length;

      let newOrderStatus: OrderStatus;
      
      if (totalItemsValidated === totalItems) {
        // All items fully validated
        newOrderStatus = OrderStatus.VALIDATED;
      } else if (totalItemsNotAvailable === totalItems) {
        // All items not available - still partially validated (not cancelled)
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      } else if (totalItemsValidated > 0 || totalItemsPartiallyValidated > 0) {
        // Some items validated or partially validated
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      } else {
        // Fallback
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      }

      // Update the order
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: newOrderStatus,
          validatedAt: new Date(),
          validatedById: validatedByUserId,
        },
      });

      // Revalidate paths
      revalidatePath(`/dashboard/pharmacist/orders/pending`);
      revalidatePath(`/dashboard/pharmacist/orders/${orderId}/validate`);
      revalidatePath("/dashboard/pharmacist/dashboard");

      // Return success with detailed information
      return {
        success: true,
        message: `Validation terminée. ${totalItemsValidated} article(s) validé(s), ${totalItemsPartiallyValidated} partiellement validé(s), ${totalItemsNotAvailable} non disponible(s).`,
        newStatus: newOrderStatus,
        itemResults: itemValidationResults,
      };
    });
  } catch (error) {
    console.error("Error validating order:", error);
    return { 
      success: false, 
      error: "Erreur lors de la validation de la commande. Veuillez réessayer." 
    };
  }
}

// Alternative validation function with notes support
export async function validateOrderWithNotes(
  orderId: string,
  validatedByUserId: string,
  validatedItems: Array<{
    id: string;
    validatedQuantity: number;
    status: OrderItemStatus;
    notes?: string;
  }>,
  overallNotes?: string
) {
  try {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { 
          orderItems: { 
            include: { 
              medication: {
                select: {
                  id: true,
                  commercialName: true,
                  dci: true,
                }
              } 
            } 
          } 
        },
      });

      if (!order) {
        return { success: false, error: "Commande non trouvée." };
      }

      if (![OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED].includes(order.status)) {
        return { 
          success: false, 
          error: "Cette commande n'est plus en attente de validation." 
        };
      }

      const itemValidationResults = [];
      
      for (const validatedItem of validatedItems) {
        const dbItem = order.orderItems.find((i) => i.id === validatedItem.id);
        if (!dbItem) {
          return { 
            success: false, 
            error: `Article de commande ${validatedItem.id} non trouvé.` 
          };
        }

        let newValidatedQuantity = validatedItem.validatedQuantity;
        let newStatus = validatedItem.status;

        if (newStatus === OrderItemStatus.NOT_AVAILABLE) {
          newValidatedQuantity = 0;
        } else {
          if (newValidatedQuantity < 0) {
            return { 
              success: false, 
              error: `La quantité validée pour ${dbItem.medication.commercialName} ne peut être négative.` 
            };
          }
          
          if (newValidatedQuantity > dbItem.requestedQuantity) {
            return { 
              success: false, 
              error: `La quantité validée (${newValidatedQuantity}) pour ${dbItem.medication.commercialName} ne peut excéder la quantité demandée (${dbItem.requestedQuantity}).` 
            };
          }

          if (newValidatedQuantity === 0) {
            newStatus = OrderItemStatus.NOT_AVAILABLE;
          } else if (newValidatedQuantity < dbItem.requestedQuantity) {
            newStatus = OrderItemStatus.PARTIALLY_VALIDATED;
          } else {
            newStatus = OrderItemStatus.VALIDATED;
          }
        }

        await tx.orderItem.update({
          where: { id: validatedItem.id },
          data: {
            validatedQuantity: newValidatedQuantity,
            status: newStatus,
            notes: validatedItem.notes,
          },
        });

        itemValidationResults.push({
          id: validatedItem.id,
          requestedQuantity: dbItem.requestedQuantity,
          validatedQuantity: newValidatedQuantity,
          status: newStatus,
        });
      }

      // Determine overall order status
      const totalItemsValidated = itemValidationResults.filter(
        item => item.status === OrderItemStatus.VALIDATED
      ).length;
      
      const totalItemsPartiallyValidated = itemValidationResults.filter(
        item => item.status === OrderItemStatus.PARTIALLY_VALIDATED
      ).length;
      
      const totalItemsNotAvailable = itemValidationResults.filter(
        item => item.status === OrderItemStatus.NOT_AVAILABLE
      ).length;

      const totalItems = itemValidationResults.length;

      let newOrderStatus: OrderStatus;
      
      if (totalItemsValidated === totalItems) {
        newOrderStatus = OrderStatus.VALIDATED;
      } else if (totalItemsNotAvailable === totalItems) {
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      } else if (totalItemsValidated > 0 || totalItemsPartiallyValidated > 0) {
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      } else {
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      }

      // Update order with notes
      const updatedNotes = overallNotes 
        ? (order.notes ? `${order.notes}\n\nValidation: ${overallNotes}` : `Validation: ${overallNotes}`)
        : order.notes;

      await tx.order.update({
        where: { id: orderId },
        data: {
          status: newOrderStatus,
          validatedAt: new Date(),
          validatedById: validatedByUserId,
          notes: updatedNotes,
        },
      });

      revalidatePath(`/dashboard/pharmacist/orders/pending`);
      revalidatePath(`/dashboard/pharmacist/orders/${orderId}/validate`);
      revalidatePath("/dashboard/pharmacist/dashboard");

      return {
        success: true,
        message: `Validation terminée. ${totalItemsValidated} article(s) validé(s), ${totalItemsPartiallyValidated} partiellement validé(s), ${totalItemsNotAvailable} non disponible(s).`,
        newStatus: newOrderStatus,
        itemResults: itemValidationResults,
      };
    });
  } catch (error) {
    console.error("Error validating order with notes:", error);
    return { 
      success: false, 
      error: "Erreur lors de la validation de la commande. Veuillez réessayer." 
    };
  }
}