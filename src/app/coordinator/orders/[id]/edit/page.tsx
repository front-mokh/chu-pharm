import { getOrderWithItems } from "../../service";
import { getAllMedications } from "@/app/pharmacist/medications/service";
import UpdateOrderPage from "./UpdateOrderPage";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  params: { id: string };
}

export default async function UpdateOrderPageServer({ params }: Props) {
  noStore();

  const order = await getOrderWithItems(params.id);
  const medications = await getAllMedications();

  if (!order) {
    return <div>Commande introuvable.</div>;
  }

  return <UpdateOrderPage order={order} medications={medications} />;
}