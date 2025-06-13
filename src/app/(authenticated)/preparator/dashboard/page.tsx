import PreparatorDashboard from './PreparatorDashboard';
import { auth } from '../../../../../auth';
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
    select: { 
      id: true,
      firstName: true,
      lastName: true,
      role: true
    },
  });

  if (!user) {
    return (
      <div className="p-4 text-center text-red-600">
        Utilisateur non trouvé.
      </div>
    );
  }

  console.log("preparator user", user);
  console.log("userId", userId);

  return (
    <PreparatorDashboard
      userId={userId}
      userName={`${user.firstName} ${user.lastName}`}
    />
  );
}