"use server";

import { prisma } from "@/lib/db";
import { OrderFormInput } from "./schemas";
import { OrderStatus } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const ORDERS_PATH = "/dashboard/coordinator/orders";


export async function createOrderForService(
  serviceId: string,
  userId: string,
  data: OrderFormInput
) {
  try {
    const order = await prisma.order.create({
      data: {
        orderNumber: `ORD-${Date.now()}`,
        status: OrderStatus.DRAFT,
        notes: data.notes,
        serviceId,
        createdById: userId,
        orderItems: {
          create: data.orderItems.map((item) => ({
            medicationId: item.medicationId,
            requestedQuantity: item.requestedQuantity,
            notes: item.notes,
            status: "PENDING",
          })),
        },
      },
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
    },
    orderBy: { createdAt: "desc" },
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
 */
export async function submitOrder(id: string) {
  return await prisma.order.update({
    where: { id },
    data: {
      status: OrderStatus.SUBMITTED,
    },
  });
}
