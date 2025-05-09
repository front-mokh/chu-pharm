"use client";
import { ReactNode, useState } from "react";
import { Order } from "@/generated/prisma";

import { useRouter } from "next/navigation";
import DeleteConfirmationDialog from "@/components/custom/DeleteConfirmationDialog";
import { deleteOrder } from "./service";
import { showToast } from "@/utils/showToast";

export default function DeleteOrderDialog({
  order,
  trigger,
  onDelete,
}: {
  order: Order;
  trigger: ReactNode;
  onDelete?: () => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteOrder(order.id);
      if (result.success) {
        onDelete?.();
        showToast("success", "Commande supprimé avec succès");
        router.refresh(); // Refresh the page data
      } else {
        showToast(
          "error",
          `Échec de la suppression: ${
            result.error || "Une erreur est survenue"
          }`
        );
      }
    } catch (error) {
      console.error("Error in delete handler:", error);
      showToast("error", "Échec de la suppression de la commande");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DeleteConfirmationDialog
      trigger={trigger}
      title={`Supprimer la commande `}
      description={`Êtes-vous sûr de vouloir supprimer la commande  ? `}
      isDeleting={isDeleting}
      onConfirm={handleDelete}
    />
  );
}
