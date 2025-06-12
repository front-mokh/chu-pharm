"use client";

import { useState } from "react";
import { toast } from "sonner";
import { deleteMedication } from "./service";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog"; // Ensure this component exists
import { Medication } from "@/generated/prisma";

interface DeleteMedicationDialogProps {
  trigger: React.ReactNode;
  medication: Pick<Medication, "id" | "commercialName">; // Only need id and name for dialog
}

export function DeleteMedicationDialog({
  trigger,
  medication,
}: DeleteMedicationDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      const result = await deleteMedication(medication.id);
      if (result.success) {
        toast.success(
          `Le médicament "${medication.commercialName}" a été supprimé.`
        );
      } else {
        toast.error(
          result.error || "Erreur lors de la suppression du médicament."
        );
      }
    } catch (error) {
      console.error("Delete medication error:", error);
      toast.error("Une erreur serveur est survenue lors de la suppression.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title={`Supprimer: ${medication.commercialName}`}
      description="Êtes-vous sûr de vouloir supprimer ce médicament ? Cette action est irréversible. La suppression peut échouer si le médicament est lié à des lots de stock ou des commandes existantes."
      isDeleting={isSubmitting}
      onConfirm={handleConfirm}
    />
  );
}

export default DeleteMedicationDialog;
