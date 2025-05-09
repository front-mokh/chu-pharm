/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {
  MedicationBatchFormInput,
  UpdateMedicationBatchFormInput,
} from "./schemas";
import {
  Medication,
  MedicationBatch,
  Supplier,
  StockEntry,
} from "@/generated/prisma";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const PHARMACIST_BATCHES_PATH = "/dashboard/pharmacist/batches";

export interface MedicationBatchWithDetails extends MedicationBatch {
  medication: Pick<Medication, "id" | "commercialName" | "dci">;
  stockEntries: Array<
    StockEntry & { supplier: Pick<Supplier, "id" | "name"> | null }
  >;
}

export async function getAllMedicationBatches(): Promise<
  MedicationBatchWithDetails[]
> {
  // await ensureAuthorized();
  try {
    return await prisma.medicationBatch.findMany({
      include: {
        medication: {
          select: { id: true, commercialName: true, dci: true },
        },
        stockEntries: {
          // Include initial stock entry details
          include: {
            supplier: {
              select: { id: true, name: true },
            },
          },
          orderBy: { entryDate: "asc" }, // Get the first one ideally
        },
      },
      orderBy: [{ expirationDate: "asc" }, { createdAt: "desc" }],
    });
  } catch (error) {
    console.error("Failed to fetch medication batches:", error);
    throw new Error("Erreur lors de la récupération des lots de médicaments.");
  }
}

export async function getMedicationBatchById(
  id: string
): Promise<MedicationBatchWithDetails | null> {
  // await ensureAuthorized();
  try {
    return await prisma.medicationBatch.findUnique({
      where: { id },
      include: {
        medication: {
          select: { id: true, commercialName: true, dci: true },
        },
        stockEntries: {
          include: {
            supplier: {
              select: { id: true, name: true },
            },
          },
          orderBy: { entryDate: "asc" },
        },
      },
    });
  } catch (error) {
    console.error(`Failed to fetch medication batch ${id}:`, error);
    throw new Error("Erreur lors de la récupération du lot de médicament.");
  }
}

export async function createMedicationBatch(data: MedicationBatchFormInput) {
  // const user = await ensureAuthorized();
  try {
    const {
      medicationId,
      batchNumber,
      expirationDate,
      initialQuantity,
      supplierId,
      unitPrice,
      invoiceNumber,
    } = data;

    // Check if medication and supplier exist
    const medication = await prisma.medication.findUnique({
      where: { id: medicationId },
    });
    if (!medication) {
      return { success: false, error: "Le médicament spécifié n'existe pas." };
    }
    const supplier = await prisma.supplier.findUnique({
      where: { id: supplierId },
    });
    if (!supplier) {
      return { success: false, error: "Le fournisseur spécifié n'existe pas." };
    }

    // Transaction to create batch and initial stock entry
    const newBatch = await prisma.$transaction(async (tx) => {
      const createdBatch = await tx.medicationBatch.create({
        data: {
          medicationId,
          batchNumber,
          expirationDate,
          initialQuantity,
          currentQuantity: initialQuantity, // Set current quantity same as initial
        },
      });

      // Create the initial stock entry for this batch
      await tx.stockEntry.create({
        data: {
          batchId: createdBatch.id,
          quantity: initialQuantity,
          entryDate: new Date(), // Or allow user to specify? For now, system date.
          supplierId,
          unitPrice,
          invoiceNumber,
        },
      });

      // Optionally, update medication's total stock here if you maintain such a field.
      // await tx.medication.update({
      //   where: { id: medicationId },
      //   data: { totalStock: { increment: initialQuantity } }
      // });

      return createdBatch;
    });

    revalidatePath(PHARMACIST_BATCHES_PATH);
    // revalidatePath(PHARMACIST_MEDICATIONS_PATH); // If medication stock is displayed there
    return { success: true, data: newBatch };
  } catch (error: any) {
    console.error("Failed to create medication batch:", error);
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("unique_medication_batch")
    ) {
      return {
        success: false,
        error: `Un lot avec le numéro '${data.batchNumber}' existe déjà pour ce médicament.`,
      };
    }
    return {
      success: false,
      error: `Erreur lors de la création du lot: ${error.message}`,
    };
  }
}

export async function updateMedicationBatch(
  id: string,
  data: Partial<Omit<UpdateMedicationBatchFormInput, "id">>
) {
  // await ensureAuthorized();
  try {
    const batch = await prisma.medicationBatch.findUnique({ where: { id } });
    if (!batch) {
      return { success: false, error: "Lot non trouvé." };
    }

    // Prevent updating batch number if stock movements exist for safety, or if it affects uniqueness.
    // For simplicity, we allow it but rely on unique constraint if medicationId is also part of update.
    // If only batchNumber/expirationDate is changing, ensure it doesn't conflict.
    if (data.batchNumber && data.batchNumber !== batch.batchNumber) {
      const existing = await prisma.medicationBatch.findFirst({
        where: {
          medicationId: batch.medicationId,
          batchNumber: data.batchNumber,
          id: { not: id }, // Exclude current batch
        },
      });
      if (existing) {
        return {
          success: false,
          error: `Un lot avec le numéro '${data.batchNumber}' existe déjà pour ce médicament.`,
        };
      }
    }

    const updatedBatch = await prisma.medicationBatch.update({
      where: { id },
      data: {
        batchNumber: data.batchNumber,
        expirationDate: data.expirationDate,
      },
    });

    revalidatePath(PHARMACIST_BATCHES_PATH);
    revalidatePath(`${PHARMACIST_BATCHES_PATH}/${id}`); // If there's a detail page
    return { success: true, data: updatedBatch };
  } catch (error: any) {
    console.error(`Failed to update medication batch ${id}:`, error);
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("unique_medication_batch")
    ) {
      return {
        success: false,
        error: `Un lot avec le numéro '${data.batchNumber}' existe déjà pour ce médicament.`,
      };
    }
    return {
      success: false,
      error: `Erreur lors de la mise à jour du lot: ${error.message}`,
    };
  }
}

export async function deleteMedicationBatch(id: string) {
  // await ensureAuthorized();
  try {
    // Check if the batch has any stock exits (meaning it has been used)
    const stockExitsCount = await prisma.stockExit.count({
      where: { batchId: id },
    });
    if (stockExitsCount > 0) {
      return {
        success: false,
        error:
          "Impossible de supprimer: ce lot a des sorties de stock enregistrées.",
      };
    }

    // If only stock entries exist (e.g. initial entry), we might allow deletion
    // and also delete related stock entries in a transaction.
    await prisma.$transaction(async (tx) => {
      // Delete related stock entries first
      await tx.stockEntry.deleteMany({
        where: { batchId: id },
      });
      // Then delete the batch
      await tx.medicationBatch.delete({
        where: { id },
      });
      // Optionally, update medication's total stock here if you maintain such a field.
    });

    revalidatePath(PHARMACIST_BATCHES_PATH);
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete medication batch ${id}:`, error);
    if (error.code === "P2025") {
      // Record to delete not found
      return {
        success: false,
        error: "Le lot à supprimer n'a pas été trouvé.",
      };
    }
    return {
      success: false,
      error: `Erreur lors de la suppression du lot: ${error.message}`,
    };
  }
}

// Helper to get active medications for dropdowns
export async function getActiveMedicationsForSelection(): Promise<
  Pick<Medication, "id" | "commercialName" | "dci">[]
> {
  // await ensureAuthorized(); // Or broader access if needed by other roles
  try {
    return await prisma.medication.findMany({
      where: { isActive: true },
      select: { id: true, commercialName: true, dci: true },
      orderBy: { commercialName: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch active medications:", error);
    throw new Error("Erreur lors de la récupération des médicaments actifs.");
  }
}

// Helper to get active suppliers for dropdowns
export async function getActiveSuppliersForSelection(): Promise<
  Pick<Supplier, "id" | "name">[]
> {
  // await ensureAuthorized();
  try {
    return await prisma.supplier.findMany({
      where: { isActive: true },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch active suppliers:", error);
    throw new Error("Erreur lors de la récupération des fournisseurs actifs.");
  }
}
