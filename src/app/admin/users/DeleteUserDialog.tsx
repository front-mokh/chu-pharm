"use client";
import { ReactNode, useState } from "react";
import { deleteUser } from "@/lib/services";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";
import { User } from "@/generated/prisma";
import showToast from "@/utils/showToast";

export default function DeleteUserDialog({
  user,
  trigger,
}: {
  user: User;
  trigger: ReactNode;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteUser(user.id);

      showToast("success", "Utilisateur supprimé avec succès");
    } catch {
      showToast("error", "Échec de la suppression de l'utilisateur");
    }
    setIsDeleting(false);
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title={`Supprimer l'utilisateur "${user.firstName} ${user.lastName}"`}
      description={`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.firstName} ${user.lastName} (${user.email})?`}
      isDeleting={isDeleting}
      onConfirm={handleDelete}
    />
  );
}
