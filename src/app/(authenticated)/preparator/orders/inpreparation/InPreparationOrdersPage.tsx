"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomPagination from "@/components/custom/CustomPagination";
import { OrderForValidation } from "../../../pharmacist/orders/service";

import OrdersInPreparationTable from "./InPreparationOrdersTable";
import { unstable_noStore as noStore } from "next/cache";
import { usePagination } from "@/hooks/use-pagination";

const ITEMS_PER_PAGE = 10;

export default function InPreparationOrdersPage({
  orders,
}: {
  orders: OrderForValidation[];
}) {
  noStore();

  const { currentPage, pageItems, totalPages, handlePageChange } =
    usePagination<OrderForValidation>(orders, ITEMS_PER_PAGE);
  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Commandes de médicaments en cours de préparation ({orders.length})
          </CardTitle>
          <CardDescription>
            Liste des commandes de médicaments qui sont en cours de préparation pour les services.           
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-0 md:p-6">
          <OrdersInPreparationTable orders={pageItems} />
        </CardContent>
        {totalPages > 0 && (
          <CardFooter className=" pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
