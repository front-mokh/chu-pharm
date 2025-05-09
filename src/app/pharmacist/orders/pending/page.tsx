import { getPendingOrdersForValidation } from "../service";
import { unstable_noStore as noStore } from "next/cache";
import PendingOrdersPage from "./PendingOrdersPage";

export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getPendingOrdersForValidation();
  return <PendingOrdersPage orders={orders} />;
}
