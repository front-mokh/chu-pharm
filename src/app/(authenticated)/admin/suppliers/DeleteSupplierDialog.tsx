"use client";
import { ReactNode, useState } from "react";
import { showToast } from "@/utils/showToast";
import { deleteSupplier } from "@/lib/services";
import { Supplier } from "@/generated/prisma";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";

export default function DeleteSupplierDialog({
  supplier,
  trigger,
}: {
  supplier: Supplier;
  trigger: ReactNode;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteSupplier(supplier.id);

      showToast("success", "Fournisseur supprimé avec succès");
    } catch {
      showToast("error", "Échec de la suppression du fournisseur");
    }
    setIsDeleting(false);
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title={`Supprimer le fournisseur "${supplier.name}"`}
      description={`Êtes-vous sûr de vouloir supprimer le fournisseur ${supplier.name}?`}
      isDeleting={isDeleting}
      onConfirm={handleDelete}
    />
  );
}
