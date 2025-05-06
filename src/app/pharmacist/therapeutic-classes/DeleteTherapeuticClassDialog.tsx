"use client";

import { useState } from "react";
import { toast } from "sonner";
import { deleteTherapeuticClass } from "@/lib/services";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";
import { TherapeuticClass } from "@/generated/prisma";

interface DeleteTherapeuticClassDialogProps {
  trigger: React.ReactNode;
  therapeuticClass: TherapeuticClass;
}

export function DeleteTherapeuticClassDialog({
  trigger,
  therapeuticClass,
}: DeleteTherapeuticClassDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await deleteTherapeuticClass(therapeuticClass.id);

      if (result.success) {
        toast.success("Classe thérapeutique supprimée avec succès");
      } else {
        toast.error(
          result.error ||
            "Erreur lors de la suppression de la classe thérapeutique"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression de la classe thérapeutique");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      description="Êtes-vous sûr de vouloir supprimer cette classe thérapeutique ? Cette action est irréversible."
      title="Supprimer la classe thérapeutique"
      isDeleting={isSubmitting}
      onConfirm={onSubmit}
    />
  );
}

export default DeleteTherapeuticClassDialog;
