"use server";

import { Medication, MedicationBatch, Order, Alert } from "@/generated/prisma";
import { OrderStatus } from "@/generated/prisma"; // Prisma enum
import { prisma } from "@/lib/db";
import { endOfDay, startOfDay, addDays } from "date-fns";

export interface DashboardStats {
  totalMedications: number;
  lowStockCount: number;
  expiringSoonCount: number; // Batches expiring within 30 days
  pendingValidationOrdersCount: number;
  unreadAlertsCount: number;
}

export interface LowStockMedication
  extends Pick<Medication, "id" | "commercialName" | "dci" | "minStockLevel"> {
  currentStock: number;
}

export interface ExpiringBatch
  extends Pick<
    MedicationBatch,
    "id" | "batchNumber" | "expirationDate" | "currentQuantity"
  > {
  medication: Pick<Medication, "id" | "commercialName">;
}

export interface PendingOrder
  extends Pick<Order, "id" | "orderNumber" | "createdAt" | "status"> {
  serviceName: string;
  itemCount: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  // await ensureAuthorized();

  const today = new Date();
  const thirtyDaysFromNow = addDays(today, 30);

  const [
    totalMedications,
    lowStockMedications,
    expiringSoonBatches,
    pendingValidationOrders,
    unreadAlerts,
  ] = await prisma.$transaction([
    prisma.medication.count({ where: { isActive: true } }),
    prisma.medication.findMany({
      where: {
        isActive: true,
        batches: {
          some: {
            // This logic needs to sum currentQuantity from batches and compare with minStockLevel
            // This is complex for a direct Prisma query without raw SQL or view.
            // For now, we count medications that have *any* batch and then filter in code,
            // or fetch all and sum. A more performant way would be a raw query or a view.
            // Simplified: count medications whose minStockLevel > 0 (implying they are tracked)
          },
        },
      },
      include: {
        batches: {
          select: { currentQuantity: true },
        },
      },
    }),
    prisma.medicationBatch.count({
      where: {
        currentQuantity: { gt: 0 },
        expirationDate: {
          gte: startOfDay(today), // Not yet past today
          lt: endOfDay(thirtyDaysFromNow), // Up to 30 days from now
        },
      },
    }),
    prisma.order.count({
      where: {
        status: {
          in: [OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED],
        }, // Statuses requiring pharmacist action
      },
    }),
    prisma.alert.count({
      where: { isRead: false, alertType: { not: "SYSTEM" } },
    }), // Non-system, unread alerts
  ]);

  // Calculate actual low stock count
  const lowStockCount = lowStockMedications.filter((med) => {
    const currentTotalStock = med.batches.reduce(
      (sum, batch) => sum + batch.currentQuantity,
      0
    );
    return currentTotalStock < med.minStockLevel;
  }).length;

  return {
    totalMedications,
    lowStockCount: lowStockCount,
    expiringSoonCount: expiringSoonBatches,
    pendingValidationOrdersCount: pendingValidationOrders,
    unreadAlertsCount: unreadAlerts,
  };
}

export async function getLowStockMedications(
  limit: number = 5
): Promise<LowStockMedication[]> {
  // await ensureAuthorized();
  const medications = await prisma.medication.findMany({
    where: {
      isActive: true,
      minStockLevel: { gt: 0 }, // Only consider medications with a defined min stock level
    },
    include: {
      batches: {
        where: { currentQuantity: { gt: 0 } }, // Only consider batches with stock
        select: { currentQuantity: true },
      },
    },
  });

  const lowStockItems: LowStockMedication[] = medications
    .map((med) => {
      const currentStock = med.batches.reduce(
        (sum, batch) => sum + batch.currentQuantity,
        0
      );
      return {
        id: med.id,
        commercialName: med.commercialName,
        dci: med.dci,
        minStockLevel: med.minStockLevel,
        currentStock,
      };
    })
    .filter((med) => med.currentStock < med.minStockLevel)
    .sort(
      (a, b) =>
        a.currentStock / a.minStockLevel - b.currentStock / b.minStockLevel
    ); // Sort by severity

  return lowStockItems.slice(0, limit);
}

export async function getExpiringBatches(
  limit: number = 5,
  daysThreshold: number = 60
): Promise<ExpiringBatch[]> {
  // await ensureAuthorized();
  const today = startOfDay(new Date());
  const expirationCutoff = addDays(today, daysThreshold);

  const batches = await prisma.medicationBatch.findMany({
    where: {
      currentQuantity: { gt: 0 },
      expirationDate: {
        gte: today,
        lt: expirationCutoff,
      },
    },
    include: {
      medication: {
        select: { id: true, commercialName: true },
      },
    },
    orderBy: {
      expirationDate: "asc",
    },
    take: limit,
  });

  return batches.map((b) => ({
    id: b.id,
    batchNumber: b.batchNumber,
    expirationDate: b.expirationDate,
    currentQuantity: b.currentQuantity,
    medication: b.medication,
  }));
}

export async function getPendingValidationOrders(
  limit: number = 5
): Promise<PendingOrder[]> {
  // await ensureAuthorized();
  const orders = await prisma.order.findMany({
    where: {
      status: { in: [OrderStatus.SUBMITTED, OrderStatus.PARTIALLY_VALIDATED] },
    },
    include: {
      service: {
        select: { name: true },
      },
      _count: {
        // Get count of order items
        select: { orderItems: true },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    take: limit,
  });

  return orders.map((order) => ({
    id: order.id,
    orderNumber: order.orderNumber,
    createdAt: order.createdAt,
    status: order.status,
    serviceName: order.service.name,
    itemCount: order._count.orderItems,
  }));
}

// Placeholder for fetching unread alerts - you might have a more specific Alert service
export async function getUnreadAlerts(limit: number = 5): Promise<Alert[]> {
  // await ensureAuthorized();
  return prisma.alert.findMany({
    where: { isRead: false, alertType: { not: "SYSTEM" } }, // Example: exclude general system alerts if any
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
