
import { getValidatedOrders } from "../service";
import { unstable_noStore as noStore } from "next/cache";
import ValidatedOrdersPage from "./ValidatedOrdersPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getValidatedOrders();
  return <ValidatedOrdersPage orders={orders} />;
}
