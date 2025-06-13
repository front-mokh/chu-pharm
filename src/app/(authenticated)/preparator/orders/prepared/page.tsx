

import { getPreparedOrders } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import PreparedOrdersPage from "./PreparedOrdersPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getPreparedOrders();
  return <PreparedOrdersPage orders={orders} />;
}
