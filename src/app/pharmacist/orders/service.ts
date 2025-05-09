"use server";

import { OrderValidationFormInput } from "./schemas";
import {
  Order,
  OrderItem,
  MedicationBatch,
  OrderStatus,
  OrderItemStatus,
} from "@/generated/prisma";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export interface OrderForValidation extends Order {
  service: { name: string };
  createdBy: { firstName: string; lastName: string };
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
      // For pre-calculating total available stock for display
      totalAvailableStock?: number;
    }
  >;
}

export async function getPendingOrdersForValidation(): Promise<
  OrderForValidation[]
> {
  const [orders] = await prisma.$transaction([
    prisma.order.findMany({
      where: {
        status: {
          in: [OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED],
        },
      },
      include: {
        service: { select: { name: true } },
        createdBy: { select: { firstName: true, lastName: true } }, // Renamed from createdBy for clarity
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
                  // Fetch batches to calculate available stock
                  where: {
                    currentQuantity: { gt: 0 },
                    expirationDate: { gte: new Date() },
                  }, // Only non-expired with stock
                  orderBy: { expirationDate: "asc" }, // Prioritize soon-to-expire
                },
              },
            },
          },
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    }),
    prisma.order.count({
      where: {
        status: {
          in: [OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED],
        },
      },
    }),
  ]);

  // Calculate total available stock for each medication item for display purposes
  const ordersWithStock = orders.map((order) => ({
    ...order,
    orderItems: order.orderItems.map((item) => ({
      ...item,
      totalAvailableStock: item.medication.batches.reduce(
        (sum, batch) => sum + batch.currentQuantity,
        0
      ),
    })),
  }));

  return ordersWithStock;
}

export async function getOrderForValidationById(
  orderId: string
): Promise<OrderForValidation | null> {
  // const user = await ensurePharmacist();
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      service: { select: { name: true } },
      createdBy: { select: { firstName: true, lastName: true } },
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
  });

  if (!order) return null;
  // Ensure only pharmacists can access orders needing their attention
  // if (order.status !== OrderStatus.SUBMITTED && order.status !== OrderStatus.PARTIALLY_VALIDATED && user.role !== UserRole.ADMIN) {
  //   // Allow admin to view any order, but pharmacist only those needing validation
  //   throw new Error("Order not available for validation or access denied.");
  // }

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

export async function processOrderValidation(
  formData: OrderValidationFormInput,
  validatedByUserId: string
) {
  // const user = await ensurePharmacist(); // user.id will be validatedByUserId
  // if (user.id !== validatedByUserId) throw new Error("User ID mismatch.");

  const { orderId, items: validatedItems, overallNotes } = formData;

  return await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({
      where: { id: orderId },
      include: { orderItems: { include: { medication: true } } },
    });

    if (!order) throw new Error("Commande non trouvée.");
    if (
      order.status !== OrderStatus.SUBMITTED &&
      order.status !== OrderStatus.PARTIALLY_VALIDATED
    ) {
      throw new Error("Cette commande n'est plus en attente de validation.");
    }

    let allItemsFullyValidated = true;
    let anyItemValidated = false;
    let allItemsProcessed = true; // Assume all items in form are all items in order

    for (const validatedItem of validatedItems) {
      const dbItem = order.orderItems.find(
        (i) => i.id === validatedItem.orderItemId
      );
      if (!dbItem)
        throw new Error(
          `Article de commande ${validatedItem.orderItemId} non trouvé.`
        );

      let newValidatedQuantity = validatedItem.validatedQuantity;

      if (validatedItem.status === OrderItemStatus.NOT_AVAILABLE) {
        newValidatedQuantity = 0; // Ensure quantity is 0 if not available
      } else if (validatedItem.status === OrderItemStatus.PENDING) {
        allItemsProcessed = false; // An item is still pending
        allItemsFullyValidated = false;
        // Keep existing validated quantity if any, or null
        newValidatedQuantity = dbItem.validatedQuantity ?? undefined;
      } else {
        // VALIDATED or PARTIALLY_VALIDATED
        if (
          newValidatedQuantity === undefined ||
          newValidatedQuantity === null
        ) {
          throw new Error(
            `Quantité validée manquante pour l'article ${dbItem.medication.commercialName} avec statut ${validatedItem.status}`
          );
        }
        if (newValidatedQuantity > dbItem.requestedQuantity) {
          throw new Error(
            `La quantité validée (${newValidatedQuantity}) pour ${dbItem.medication.commercialName} ne peut excéder la quantité demandée (${dbItem.requestedQuantity}).`
          );
        }
        anyItemValidated = true;
        if (
          newValidatedQuantity < dbItem.requestedQuantity ||
          validatedItem.status === OrderItemStatus.PARTIALLY_VALIDATED
        ) {
          allItemsFullyValidated = false;
        }
      }

      await tx.orderItem.update({
        where: { id: validatedItem.orderItemId },
        data: {
          validatedQuantity: newValidatedQuantity,
          status: validatedItem.status,
          notes: validatedItem.notes, // Pharmacist's notes for the item
        },
      });
    }

    // Determine overall order status
    let newOrderStatus: OrderStatus = order.status; // Default to current
    if (allItemsProcessed) {
      if (allItemsFullyValidated && anyItemValidated) {
        newOrderStatus = OrderStatus.VALIDATED;
      } else if (anyItemValidated) {
        // Some items validated, some not fully or N/A
        newOrderStatus = OrderStatus.PARTIALLY_VALIDATED;
      } else {
        // No items were actually validated (e.g., all marked N/A or kept PENDING)
        // If all items are N/A or PENDING, status might remain SUBMITTED or become something like 'REVIEWED_NO_STOCK'
        // For now, if nothing is validated, it remains as is or becomes PARTIALLY_VALIDATED if at least one action was taken.
        // This logic might need refinement based on exact business rules.
        if (
          validatedItems.every(
            (item) => item.status === OrderItemStatus.NOT_AVAILABLE
          )
        ) {
          newOrderStatus = OrderStatus.PARTIALLY_VALIDATED; // Or a custom status
        } else if (
          validatedItems.some(
            (item) => item.status === OrderItemStatus.PENDING
          ) &&
          !anyItemValidated
        ) {
          newOrderStatus = OrderStatus.SUBMITTED; // No actual validation action taken, still needs work
        } else {
          newOrderStatus = OrderStatus.PARTIALLY_VALIDATED; // Default for mixed scenarios
        }
      }
    } else {
      // Not all items processed (some left PENDING)
      newOrderStatus = OrderStatus.PARTIALLY_VALIDATED; // Or could remain SUBMITTED if no positive validation
    }

    await tx.order.update({
      where: { id: orderId },
      data: {
        status: newOrderStatus,
        validatedAt:
          newOrderStatus === OrderStatus.VALIDATED ||
          newOrderStatus === OrderStatus.PARTIALLY_VALIDATED
            ? new Date()
            : order.validatedAt,
        validatedById:
          newOrderStatus === OrderStatus.VALIDATED ||
          newOrderStatus === OrderStatus.PARTIALLY_VALIDATED
            ? validatedByUserId
            : order.validatedById,
        notes: overallNotes
          ? order.notes
            ? `${order.notes}\nValidation: ${overallNotes}`
            : `Validation: ${overallNotes}`
          : order.notes,
      },
    });

    // TODO: Potentially create Alerts based on validation (e.g., item not available)

    revalidatePath(`/dashboard/pharmacist/orders/pending`);
    revalidatePath(`/dashboard/pharmacist/orders/${orderId}/validate`);
    revalidatePath("/dashboard/pharmacist/dashboard"); // Revalidate dashboard stats

    return {
      success: true,
      message: "Validation de la commande traitée.",
      newStatus: newOrderStatus,
    };
  });
}
