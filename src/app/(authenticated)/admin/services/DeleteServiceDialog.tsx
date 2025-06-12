"use client";
import { ReactNode, useState } from "react";
import { showToast } from "@/utils/showToast";
import { deleteService } from "@/lib/services";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";
import { Service } from "@/generated/prisma";

export default function DeleteServiceDialog({
  service,
  trigger,
}: {
  service: Service;
  trigger: ReactNode;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteService(service.id);

      showToast("success", "Service supprimé avec succès");
    } catch {
      showToast("error", "Échec de la suppression du service");
    }
    setIsDeleting(false);
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title={`Supprimer le service "${service.name}"`}
      description={`Êtes-vous sûr de vouloir supprimer le service ${service.name}?`}
      isDeleting={isDeleting}
      onConfirm={handleDelete}
    />
  );
}
