import { getAllMedications } from "../../../pharmacist/medications/service";
import AddOrderPage from "./addOrderPage";
import { auth } from "../../../../../auth";
import { getUserServiceId } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

export default async function AddOrderPageServer() {
  noStore();

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <div>Utilisateur non connecté.</div>;
  }

  const medications = await getAllMedications();
  const serviceId = await getUserServiceId(userId); // This must fetch the user and return their `serviceId`

  if (!serviceId) {
    return <div>Service non défini pour cet utilisateur.</div>;
  }

  return (
    <AddOrderPage
      medications={medications}
      serviceId={serviceId}
      userId={userId}
    />
  );
}
