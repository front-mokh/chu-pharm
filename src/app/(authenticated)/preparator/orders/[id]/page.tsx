import { getOrderWithItems } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import OrderDetailPage from "./OrderDetailPage";
interface PageProps {
  params: {
    id: string;
  };
}

export default async function ServerOrderDetailPage({ params }: PageProps) {
  noStore();
  
  const order = await getOrderWithItems(params.id);
  
  if (!order) {
    notFound();
  }

  return <OrderDetailPage order={order} />;
}