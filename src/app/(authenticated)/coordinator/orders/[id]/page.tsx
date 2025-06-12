import { getOrderWithItems} from "../service";
import OrderDetailPage from "./OrderDetailPage";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function OrderDetailPageServer({ params }: Props) {
  noStore();
  
  const order = await getOrderWithItems(params.id);

  if (!order) {
    notFound();
  }

  return <OrderDetailPage order={order} />;
}