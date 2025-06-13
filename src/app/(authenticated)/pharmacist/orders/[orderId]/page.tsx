import { getOrderWithItems } from "@/app/(authenticated)/pharmacist/orders/service";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import OrderDetailPage from "./OrderDetailsPage";

interface PageProps {
  params: Promise<{
    orderId: string; // Note: changed from 'id' to 'orderId' to match your file structure
  }>;
}

export default async function ServerOrderDetailPage({ params }: PageProps) {
  noStore();
  
  // Await the params since they're now a Promise
  const { orderId } = await params;
  
  const order = await getOrderWithItems(orderId);
  
  if (!order) {
    notFound();
  }
  
  return <OrderDetailPage order={order} />;
}