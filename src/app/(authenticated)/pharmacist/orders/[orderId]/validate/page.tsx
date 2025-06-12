import { getOrderWithItems } from "../../service";
import ValidateOrderPage from "./ValidateOrderPage";
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "../../../../../../../auth";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { UserRole } from "@/generated/prisma";

interface Props {
  params: { id?: string };
}

export default async function ValidateOrderPageServer({ params }: Props) {
  // 1. Retrieve and validate parameter
  const orderId = params.id;
  if (!orderId) {
    notFound();
  }

  noStore();

  // 2. Authentication
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return (
      <div className="p-4 text-center text-red-600">
        Utilisateur non authentifié.
      </div>
    );
  }

  // 3. Get user with role verification
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { 
      id: true,
      role: true,
      serviceId: true,
      firstName: true,
      lastName: true
    },
  });

  if (!user) {
    return (
      <div className="p-4 text-center text-red-600">
        Utilisateur non trouvé.
      </div>
    );
  }

  // 4. Check if user has permission to validate orders
  if (user.role !== UserRole.PHARMACIST && user.role !== UserRole.ADMIN) {
    return (
      <div className="p-6 text-center text-red-600">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Accès non autorisé
        </h2>
        <p className="text-gray-600">
          Seuls les pharmaciens et administrateurs peuvent valider les commandes.
        </p>
      </div>
    );
  }

  // 5. Load the order with error handling
  let order;
  try {
    order = await getOrderWithItems(orderId);
  } catch (err) {
    console.error("Erreur lors du chargement de la commande :", err);
    return (
      <div className="p-4 text-center text-red-600">
        Erreur serveur lors du chargement de la commande.
      </div>
    );
  }

  if (!order) {
    notFound();
  }

  // 6. Check service membership (only if user is not admin)
  if (user.role !== UserRole.ADMIN && order.service.id !== user.serviceId) {
    return (
      <div className="p-6 text-center text-red-600">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Accès non autorisé
        </h2>
        <p className="text-gray-600">
          Cette commande n'appartient pas à votre service.
        </p>
      </div>
    );
  }

  // 7. Check order status - allow both SUBMITTED and PARTIALLY_VALIDATED
  if (!["SUBMITTED", "PARTIALLY_VALIDATED"].includes(order.status)) {
    const statusMessages = {
      "DRAFT": "Cette commande est encore en brouillon.",
      "VALIDATED": "Cette commande a déjà été entièrement validée.",
      "IN_PREPARATION": "Cette commande est en cours de préparation.",
      "PREPARED": "Cette commande a déjà été préparée.",
      "DELIVERED": "Cette commande a déjà été livrée.",
      "CANCELLED": "Cette commande a été annulée.",
    };

    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Validation non disponible
        </h2>
        <p className="text-gray-600 mb-4">
          {statusMessages[order.status as keyof typeof statusMessages] || 
           "Cette commande ne peut pas être validée dans son état actuel."}
        </p>
        <p className="text-sm text-gray-500">
          Statut actuel: {order.status}
        </p>
      </div>
    );
  }

  // 8. Validate that there are items to validate
  if (!order.orderItems || order.orderItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Aucun article à valider
        </h2>
        <p className="text-gray-600">
          Cette commande ne contient aucun article à valider.
        </p>
      </div>
    );
  }

  // 9. Check if user has already validated this order
  if (order.validatedById && order.validatedById !== userId && user.role !== UserRole.ADMIN) {
    const validator = await prisma.user.findUnique({
      where: { id: order.validatedById },
      select: { firstName: true, lastName: true }
    });

    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Commande déjà validée par un autre pharmacien
        </h2>
        <p className="text-gray-600">
          Cette commande a été validée par {validator?.firstName} {validator?.lastName}.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Seul un administrateur peut modifier cette validation.
        </p>
      </div>
    );
  }

  // 10. All checks passed - render the validation component
  return (
    <div className="container mx-auto p-6">
      <ValidateOrderPage 
        order={order} 
        pharmacistId={userId}
        userRole={user.role}
        userName={`${user.firstName} ${user.lastName}`}
      />
    </div>
  );
}