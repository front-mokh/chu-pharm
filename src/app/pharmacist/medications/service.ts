/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { MedicationFormInput, UpdateMedicationFormInput } from "./schemas";
import { Medication, TherapeuticClass } from "@/generated/prisma"; // Or from '@prisma/client'
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const PHARMACIST_MEDICATIONS_PATH = "/dashboard/pharmacist/medications";

export async function getAllMedications(): Promise<
  Array<Medication & { therapeuticClass: TherapeuticClass }>
> {
  try {
    return await prisma.medication.findMany({
      include: {
        therapeuticClass: true,
      },
      orderBy: { commercialName: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch medications:", error);
    throw new Error("Erreur lors de la récupération des médicaments.");
  }
}

export async function getMedicationById(
  id: string
): Promise<(Medication & { therapeuticClass: TherapeuticClass }) | null> {
  try {
    return await prisma.medication.findUnique({
      where: { id },
      include: { therapeuticClass: true },
    });
  } catch (error) {
    console.error(`Failed to fetch medication ${id}:`, error);
    throw new Error("Erreur lors de la récupération du médicament.");
  }
}

export async function createMedication(data: MedicationFormInput) {
  try {
    const therapeuticClassExists = await prisma.therapeuticClass.findUnique({
      where: { id: data.therapeuticClassId },
    });
    if (!therapeuticClassExists) {
      return {
        success: false,
        error: "La classe thérapeutique spécifiée n'existe pas.",
      };
    }

    const newMedication = await prisma.medication.create({ data });
    revalidatePath(PHARMACIST_MEDICATIONS_PATH);
    return { success: true, data: newMedication };
  } catch (error: any) {
    console.error("Failed to create medication:", error);
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("commercialName_dci_form_dosage")
    ) {
      // Example for a composite unique constraint if you have one
      return {
        success: false,
        error: "Un médicament identique (DCI, nom, forme, dosage) existe déjà.",
      };
    }
    return {
      success: false,
      error: `Erreur lors de la création du médicament: ${error.message}`,
    };
  }
}

export async function updateMedication(
  id: string,
  data: Omit<UpdateMedicationFormInput, "id">
) {
  try {
    if (data.therapeuticClassId) {
      const therapeuticClassExists = await prisma.therapeuticClass.findUnique({
        where: { id: data.therapeuticClassId },
      });
      if (!therapeuticClassExists) {
        return {
          success: false,
          error: "La classe thérapeutique spécifiée n'existe pas.",
        };
      }
    }

    const updatedMedication = await prisma.medication.update({
      where: { id },
      data,
    });
    revalidatePath(PHARMACIST_MEDICATIONS_PATH);
    // Optional: revalidate individual medication page if it exists
    // revalidatePath(`${PHARMACIST_MEDICATIONS_PATH}/${id}`);
    return { success: true, data: updatedMedication };
  } catch (error: any) {
    console.error(`Failed to update medication ${id}:`, error);
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("commercialName_dci_form_dosage")
    ) {
      return {
        success: false,
        error: "Un médicament identique (DCI, nom, forme, dosage) existe déjà.",
      };
    }
    return {
      success: false,
      error: `Erreur lors de la mise à jour du médicament: ${error.message}`,
    };
  }
}

export async function deleteMedication(id: string) {
  try {
    // Basic check: prevent deletion if medication has batches. More checks can be added (e.g., order items).
    const hasBatches = await prisma.medicationBatch.findFirst({
      where: { medicationId: id },
    });
    if (hasBatches) {
      return {
        success: false,
        error:
          "Impossible de supprimer: ce médicament a des lots de stock enregistrés.",
      };
    }
    // Add similar checks for OrderItems if strict deletion policy is needed.
    // const isInOrders = await prisma.orderItem.findFirst({ where: { medicationId: id }});
    // if (isInOrders) {
    //    return { success: false, error: "Impossible de supprimer: ce médicament est présent dans des commandes." };
    // }

    await prisma.medication.delete({ where: { id } });
    revalidatePath(PHARMACIST_MEDICATIONS_PATH);
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete medication ${id}:`, error);
    if (error.code === "P2025") {
      return {
        success: false,
        error: "Le médicament à supprimer n'a pas été trouvé.",
      };
    }
    // Prisma error P2003 indicates a foreign key constraint violation
    if (error.code === "P2003") {
      return {
        success: false,
        error:
          "Impossible de supprimer ce médicament car il est référencé par d'autres enregistrements (ex: lots de stock, commandes).",
      };
    }
    return {
      success: false,
      error: `Erreur lors de la suppression du médicament: ${error.message}`,
    };
  }
}

// This function might already exist in your general services.ts or a therapeuticClass service file.
// Included here for completeness if it's specific to this module's needs.
export async function getAllActiveTherapeuticClasses(): Promise<
  TherapeuticClass[]
> {
  // await ensureAuthorized([UserRole.PHARMACIST, UserRole.ADMIN, UserRole.SERVICE_COORDINATOR]); // Example: Broader access if needed elsewhere
  try {
    return await prisma.therapeuticClass.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch active therapeutic classes:", error);
    throw new Error(
      "Erreur lors de la récupération des classes thérapeutiques actives."
    );
  }
}
