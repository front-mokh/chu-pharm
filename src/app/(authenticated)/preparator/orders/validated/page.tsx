
import { getValidatedOrders } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import ValidatedOrdersPage from "./validatedOrderPage";
export default async function ServerPendingOrdersPage() {
  noStore();

  const orders = await getValidatedOrders();
  return <ValidatedOrdersPage orders={orders} />;
}
