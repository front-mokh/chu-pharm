/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { BatchStockFormInput, StockExitFormInput } from "./schemas";
import { ExitReason } from "@/generated/prisma";

const STOCK_MANAGEMENT_PATH = "/dashboard/pharmacist/stock";

export async function getAllMedicationBatches() {
  try {
    return await prisma.medicationBatch.findMany({
      include: {
        medication: {
          include: {
            therapeuticClass: true,
          },
        },
        stockEntries: {
          include: {
            supplier: true,
          },
        },
        stockExits: true,
      },
      orderBy: [
        { medication: { commercialName: "asc" } },
        { expirationDate: "asc" },
      ],
    });
  } catch (error) {
    console.error("Failed to fetch medication batches:", error);
    throw new Error("Erreur lors de la récupération des lots de médicaments.");
  }
}

export async function getMedicationBatch(id: string) {
  try {
    return await prisma.medicationBatch.findUnique({
      where: { id },
      include: {
        medication: {
          include: {
            therapeuticClass: true,
          },
        },
        stockEntries: { include: { supplier: true } },
        stockExits: true,
      },
    });
  } catch (error) {
    console.error("Failed to fetch medication batch:", error);
    throw new Error("Erreur lors de la récupération du lot de médicament.");
  }
}
export async function getAllActiveMedications() {
  try {
    return await prisma.medication.findMany({
      where: { isActive: true },
      include: {
        therapeuticClass: true,
      },
      orderBy: { commercialName: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch active medications:", error);
    throw new Error("Erreur lors de la récupération des médicaments actifs.");
  }
}

export async function getAllActiveSuppliers() {
  try {
    return await prisma.supplier.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch active suppliers:", error);
    throw new Error("Erreur lors de la récupération des fournisseurs actifs.");
  }
}

export async function createBatchAndStockEntry(data: BatchStockFormInput) {
  try {
    // Start a transaction to ensure both batch and entry are created together
    return await prisma.$transaction(async (tx) => {
      // First create the batch
      const newBatch = await tx.medicationBatch.create({
        data: {
          medicationId: data.medicationId,
          batchNumber: data.batchNumber,
          expirationDate: new Date(data.expirationDate),
          initialQuantity: data.quantity,
          currentQuantity: data.quantity,
        },
      });

      // Then create the stock entry linked to the batch
      await tx.stockEntry.create({
        data: {
          batchId: newBatch.id,
          supplierId: data.supplierId,
          quantity: data.quantity,
          entryDate: new Date(data.entryDate || new Date()),
          invoiceNumber: data.invoiceNumber,
          unitPrice: data.unitPrice,
        },
      });

      // Return the created batch
      return {
        success: true,
        data: newBatch,
      };
    });
  } catch (error: any) {
    console.error("Failed to create batch and stock entry:", error);

    // Handle unique constraint violations
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("unique_medication_batch")
    ) {
      return {
        success: false,
        error: "Un lot avec ce numéro existe déjà pour ce médicament.",
      };
    }

    return {
      success: false,
      error: `Erreur lors de la création du lot: ${error.message}`,
    };
  } finally {
    revalidatePath(STOCK_MANAGEMENT_PATH);
  }
}

export async function recordStockExit(data: StockExitFormInput) {
  try {
    // First check if batch exists and has enough stock
    const batch = await prisma.medicationBatch.findUnique({
      where: { id: data.batchId },
    });

    if (!batch) {
      return { success: false, error: "Le lot spécifié n'existe pas." };
    }

    if (batch.currentQuantity < data.quantity) {
      return { success: false, error: "Quantité insuffisante en stock." };
    }

    // Start a transaction to ensure both operations complete
    return await prisma.$transaction(async (tx) => {
      // Create the stock exit record
      const newExit = await tx.stockExit.create({
        data: {
          batchId: data.batchId,
          quantity: data.quantity,
          exitDate: new Date(data.exitDate || new Date()),
          reason: data.reason,
        },
      });

      // Update the current quantity in the batch
      await tx.medicationBatch.update({
        where: { id: data.batchId },
        data: {
          currentQuantity: { decrement: data.quantity },
        },
      });

      // If stock is low after update, create an alert
      const updatedBatch = await tx.medicationBatch.findUnique({
        where: { id: data.batchId },
        include: { medication: true },
      });

      if (
        updatedBatch &&
        updatedBatch.currentQuantity <= updatedBatch.medication.minStockLevel
      ) {
        await tx.alert.create({
          data: {
            alertType: "LOW_STOCK",
            message: `Stock bas pour ${updatedBatch.medication.commercialName} ${updatedBatch.medication.dosage} (${updatedBatch.currentQuantity} restants)`,
            medicationId: updatedBatch.medicationId,
            batchId: updatedBatch.id,
          },
        });
      }

      return {
        success: true,
        data: newExit,
      };
    });
  } catch (error: any) {
    console.error("Failed to record stock exit:", error);
    return {
      success: false,
      error: `Erreur lors de l'enregistrement de la sortie: ${error.message}`,
    };
  } finally {
    revalidatePath(STOCK_MANAGEMENT_PATH);
  }
}

// Function to handle automatic exits for expired medications
export async function processExpiredBatches() {
  try {
    const today = new Date();

    // Find batches that are expired but still have stock
    const expiredBatches = await prisma.medicationBatch.findMany({
      where: {
        expirationDate: { lt: today },
        currentQuantity: { gt: 0 },
      },
      include: {
        medication: true,
      },
    });

    // Process each expired batch
    for (const batch of expiredBatches) {
      await prisma.$transaction(async (tx) => {
        // Create a stock exit for the expired quantity
        await tx.stockExit.create({
          data: {
            batchId: batch.id,
            quantity: batch.currentQuantity,
            reason: ExitReason.EXPIRATION,
            exitDate: today,
          },
        });

        // Update the batch to zero quantity
        await tx.medicationBatch.update({
          where: { id: batch.id },
          data: { currentQuantity: 0 },
        });

        // Create an alert about the expired batch
        await tx.alert.create({
          data: {
            alertType: "EXPIRATION",
            message: `Lot expiré: ${batch.medication.commercialName} ${batch.medication.dosage}, lot ${batch.batchNumber}`,
            medicationId: batch.medicationId,
            batchId: batch.id,
          },
        });
      });
    }

    return { success: true, processedCount: expiredBatches.length };
  } catch (error: any) {
    console.error("Failed to process expired batches:", error);
    return { success: false, error: error.message };
  } finally {
    revalidatePath(STOCK_MANAGEMENT_PATH);
  }
}
