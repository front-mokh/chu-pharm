
import { getDeliveredOrders } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import DeliveredOrdersPage from "./DeliveredOrdersPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getDeliveredOrders();
  return <DeliveredOrdersPage orders={orders} />;
}
