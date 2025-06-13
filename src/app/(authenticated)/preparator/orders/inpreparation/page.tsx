

import { getOrdersInPreparation } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import InPreparationOrdersPage from "./InPreparationOrdersPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getOrdersInPreparation();
  return <InPreparationOrdersPage orders={orders} />;
}
