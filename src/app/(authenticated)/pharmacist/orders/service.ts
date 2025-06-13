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

export async function getValidatedOrders(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.VALIDATED],
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

export async function getOrdersInPreparation(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.IN_PREPARATION],
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

export async function getPreparedOrders(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.PREPARED],
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

export async function getDeliveredOrders(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.DELIVERED],
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

export async function getCancelledOrders(): Promise<OrderForValidation[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: [OrderStatus.CANCELLED],
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
      revalidatePath(`/pharmacist/orders/pending`);
      revalidatePath("/pharmacist/validated");
      revalidatePath("/pharmacist/dashboard");

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

export async function cancelOrder(
  orderId: string,
  cancelledByUserId: string,
  cancellationReason?: string
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

      // Check if order can be cancelled
      if (![OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED, OrderStatus.VALIDATED].includes(order.status)) {
        return { 
          success: false, 
          error: "Cette commande ne peut plus être annulée." 
        };
      }

      // Update all order items to cancelled status
      const itemCancellationResults = [];
      
      for (const item of order.orderItems) {
        await tx.orderItem.update({
          where: { id: item.id },
          data: {
            status: OrderItemStatus.CANCELLED,
            validatedQuantity: 0, // Reset validated quantity
          },
        });

        itemCancellationResults.push({
          id: item.id,
          medicationName: item.medication.commercialName,
          requestedQuantity: item.requestedQuantity,
          status: OrderItemStatus.CANCELLED,
        });
      }

      // Update the order status to cancelled
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.CANCELLED,
          notes: cancellationReason ? 
            (order.notes ? `${order.notes}\n\nAnnulée: ${cancellationReason}` : `Annulée: ${cancellationReason}`) 
            : order.notes,
        },
      });

      // Revalidate paths
      revalidatePath(`/pharmacist/orders/pending`);
      revalidatePath("/pharmacist/cancelled");
      revalidatePath("/pharmacist/dashboard");

      // Return success with detailed information
      return {
        success: true,
        message: `Commande annulée avec succès. ${itemCancellationResults.length} article(s) annulé(s).`,
        newStatus: OrderStatus.CANCELLED,
        itemResults: itemCancellationResults,
        cancellationReason: cancellationReason,
      };
    });
  } catch (error) {
    console.error("Error cancelling order:", error);
    return { 
      success: false, 
      error: "Erreur lors de l'annulation de la commande. Veuillez réessayer." 
    };
  }
}

export async function startOrderPreparation(
  orderId: string,
  preparedByUserId: string,
  preparationNotes?: string
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

      // Check if order can be moved to preparation
      if (order.status !== OrderStatus.VALIDATED) {
        return { 
          success: false, 
          error: "Seules les commandes validées peuvent être mises en préparation." 
        };
      }

      // Update all validated order items to preparation status
      const itemPreparationResults = [];
      
      for (const item of order.orderItems) {
        if (item.status === OrderItemStatus.VALIDATED || item.status === OrderItemStatus.PARTIALLY_VALIDATED) {
          await tx.orderItem.update({
            where: { id: item.id },
            data: {
              status: item.status === OrderItemStatus.VALIDATED 
                ? OrderItemStatus.VALIDATED 
                : OrderItemStatus.PARTIALLY_VALIDATED, // Keep current status for tracking
            },
          });

          itemPreparationResults.push({
            id: item.id,
            medicationName: item.medication.commercialName,
            validatedQuantity: item.validatedQuantity,
            status: item.status,
          });
        }
      }

      // Update the order notes if provided
      const updatedNotes = preparationNotes 
        ? (order.notes ? `${order.notes}\n\nPréparation: ${preparationNotes}` : `Préparation: ${preparationNotes}`)
        : order.notes;

      // Update the order status to in preparation
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.IN_PREPARATION,
          preparedById: preparedByUserId,
          notes: updatedNotes,
        },
      });

      // Revalidate paths
      revalidatePath(`/preparator/orders/validated`);
      revalidatePath(`/preparator/orders/inpreparation`);
      revalidatePath("/preparator/dashboard");

      return {
        success: true,
        message: `Commande mise en préparation avec succès. ${itemPreparationResults.length} article(s) en préparation.`,
        newStatus: OrderStatus.IN_PREPARATION,
        itemResults: itemPreparationResults,
        preparationNotes: preparationNotes,
      };
    });
  } catch (error) {
    console.error("Error starting order preparation:", error);
    return { 
      success: false, 
      error: "Erreur lors de la mise en préparation de la commande. Veuillez réessayer." 
    };
  }
}

export async function completeOrderPreparation(
  orderId: string,
  preparedByUserId: string,
  preparedItems: Array<{
    id: string;
    preparedQuantity: number;
  }>,
  completionNotes?: string
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

      // Check if order can be completed
      if (order.status !== OrderStatus.IN_PREPARATION) {
        return { 
          success: false, 
          error: "Seules les commandes en préparation peuvent être finalisées." 
        };
      }

      // Update each prepared item
      const itemPreparationResults = [];
      
      for (const preparedItem of preparedItems) {
        const dbItem = order.orderItems.find((i) => i.id === preparedItem.id);
        if (!dbItem) {
          return { 
            success: false, 
            error: `Article de commande ${preparedItem.id} non trouvé.` 
          };
        }

        // Validate prepared quantity
        if (preparedItem.preparedQuantity < 0) {
          return { 
            success: false, 
            error: `La quantité préparée pour ${dbItem.medication.commercialName} ne peut être négative.` 
          };
        }

        const maxQuantity = dbItem.validatedQuantity || 0;
        if (preparedItem.preparedQuantity > maxQuantity) {
          return { 
            success: false, 
            error: `La quantité préparée (${preparedItem.preparedQuantity}) pour ${dbItem.medication.commercialName} ne peut excéder la quantité validée (${maxQuantity}).` 
          };
        }

        // Update the order item with prepared quantity and status
        await tx.orderItem.update({
          where: { id: preparedItem.id },
          data: {
            preparedQuantity: preparedItem.preparedQuantity,
            status: OrderItemStatus.PREPARED,
          },
        });

        itemPreparationResults.push({
          id: preparedItem.id,
          medicationName: dbItem.medication.commercialName,
          validatedQuantity: dbItem.validatedQuantity,
          preparedQuantity: preparedItem.preparedQuantity,
          status: OrderItemStatus.PREPARED,
        });
      }

      // Update the order notes if provided
      const updatedNotes = completionNotes 
        ? (order.notes ? `${order.notes}\n\nPréparation terminée: ${completionNotes}` : `Préparation terminée: ${completionNotes}`)
        : order.notes;

      // Update the order status to prepared
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.PREPARED,
          preparedAt: new Date(),
          preparedById: preparedByUserId,
          notes: updatedNotes,
        },
      });

      // Revalidate paths
      revalidatePath(`/preparator/orders/inpreparation`);
      revalidatePath(`/preparator/orders/prepared`);
      revalidatePath("/preparator/dashboard");

      return {
        success: true,
        message: `Préparation terminée avec succès. ${itemPreparationResults.length} article(s) préparé(s).`,
        newStatus: OrderStatus.PREPARED,
        itemResults: itemPreparationResults,
        completionNotes: completionNotes,
      };
    });
  } catch (error) {
    console.error("Error completing order preparation:", error);
    return { 
      success: false, 
      error: "Erreur lors de la finalisation de la préparation. Veuillez réessayer." 
    };
  }
}


export async function deliverOrder(
  orderId: string,
  deliveredByUserId: string,
  deliveryNotes?: string
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

      // Check if order can be delivered
      if (order.status !== OrderStatus.PREPARED) {
        return { 
          success: false, 
          error: "Seules les commandes préparées peuvent être livrées." 
        };
      }

      // Update all prepared order items to delivered status
      const itemDeliveryResults = [];
      
      for (const item of order.orderItems) {
        if (item.status === OrderItemStatus.PREPARED) {
          await tx.orderItem.update({
            where: { id: item.id },
            data: {
              status: OrderItemStatus.DELIVERED,
            },
          });

          itemDeliveryResults.push({
            id: item.id,
            medicationName: item.medication.commercialName,
            preparedQuantity: item.preparedQuantity,
            status: OrderItemStatus.DELIVERED,
          });
        }
      }

      // Update the order notes if provided
      const updatedNotes = deliveryNotes 
        ? (order.notes ? `${order.notes}\n\nLivraison: ${deliveryNotes}` : `Livraison: ${deliveryNotes}`)
        : order.notes;

      // Update the order status to delivered
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.DELIVERED,
          deliveredAt: new Date(),
          notes: updatedNotes,
        },
      });

      // Revalidate paths
      revalidatePath(`/preparator/orders/prepared`);
      revalidatePath(`/preparator/orders/delivered`);
      revalidatePath("/preparator/dashboard");

      return {
        success: true,
        message: `Commande livrée avec succès. ${itemDeliveryResults.length} article(s) livré(s).`,
        newStatus: OrderStatus.DELIVERED,
        itemResults: itemDeliveryResults,
        deliveryNotes: deliveryNotes,
      };
    });
  } catch (error) {
    console.error("Error delivering order:", error);
    return { 
      success: false, 
      error: "Erreur lors de la livraison de la commande. Veuillez réessayer." 
    };
  }
}