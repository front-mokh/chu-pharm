
import { getCancelledOrders } from "../service";
import { unstable_noStore as noStore } from "next/cache";
import CancelledOrdersPage from "./CancelledOrdersPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getCancelledOrders();
  return <CancelledOrdersPage orders={orders} />;
}
