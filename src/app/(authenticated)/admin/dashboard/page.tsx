import AdminDashboard from './AdminDashboard';
import { auth } from '../../../../../auth';
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

  return (
    <AdminDashboard userId={userId} />
  );
}