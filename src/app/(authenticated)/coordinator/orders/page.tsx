import { getOrdersByService } from "./service";
import OrdersPageClient from "./OrdersPage";
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/db";

export default async function OrdersPageServer() {
  noStore();

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <div className="p-4 text-center text-red-600">
        Utilisateur non authentifié.
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { serviceId: true },
  });

  if (!user?.serviceId) {
    return (
      <div className="p-4 text-center text-red-600">
        Aucun service associé à cet utilisateur.
      </div>
    );
  }

  const orders = await getOrdersByService(user.serviceId);
  console.log("orders", orders);
  console.log("service id", user.serviceId);

  return <OrdersPageClient orders={orders} />;
}