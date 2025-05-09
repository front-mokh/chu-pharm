"use client";
import { useState } from "react";
import { toast } from "sonner";
import { deleteSubClass } from "@/lib/services";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";
import { SubClass } from "@/generated/prisma";

interface DeleteSubClassDialogProps {
  trigger: React.ReactNode;
  subClass: SubClass;
}

export default function DeleteSubClassDialog({ trigger, subClass }: DeleteSubClassDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onConfirm = async () => {
    setIsSubmitting(true);
    try {
      const result = await deleteSubClass(subClass.id);
      if (result.success) {
        toast.success("Sous-classe supprimée avec succès");
      } else {
        toast.error(result.error || "Erreur lors de la suppression de la sous-classe");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression de la sous-classe");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title="Supprimer la sous-classe"
      description="Êtes-vous sûr de vouloir supprimer cette sous-classe ? Cette action est irréversible."
      isDeleting={isSubmitting}
      onConfirm={onConfirm}
    />
  );
}
