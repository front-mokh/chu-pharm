"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePagination } from "@/hooks/use-pagination";
import CustomPagination from "@/components/custom/CustomPagination";
import { Order, OrderItem, Medication } from "@/generated/prisma";
import OrdersTable from "./OrdersTable";

import AddButton from "@/components/custom/AddButton";
interface OrdersPageClientProps {
  orders: Array<Order & { orderItems: (OrderItem & { medication: Medication })[] }>;
}

export default function OrdersPageClient({ orders }: OrdersPageClientProps) {
  const { currentPage, totalPages, pageItems, handlePageChange } = usePagination<
    Order & { orderItems: (OrderItem & { medication: Medication })[] }
  >(orders, 10);

  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold">Commandes du Service</CardTitle>
              <CardDescription>
                Liste des commandes créées par votre service avec leurs médicaments demandés.
              </CardDescription>
            </div>
            <AddButton label="Ajouter une commande" href="/coordinator/orders/add" />
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-0 md:p-6">
          <OrdersTable orders={pageItems} />
        </CardContent>

        {totalPages > 0 && (
          <CardFooter className="pt-6 flex justify-center">
            {totalPages > 1 && (
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}