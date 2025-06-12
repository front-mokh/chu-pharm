
import ServiceCoordinatorDashboard from './dashboard/ServiceCoordinatorDashboard';

import { auth } from "../../../../auth";
import { prisma } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
export default async function DashboardPage() {
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
  console.log("user", user);
  console.log("userId", userId);
  console.log("service id", user.serviceId);

  return (
    <ServiceCoordinatorDashboard 
      serviceId={user.serviceId}
      userId={userId}
    />
  );
}