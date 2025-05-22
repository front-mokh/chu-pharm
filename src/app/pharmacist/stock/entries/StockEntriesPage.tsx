"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomPagination from "@/components/custom/CustomPagination"; // Ensure this component exists
import { usePagination } from "@/hooks/use-pagination"; // Ensure this hook exists

import { EntriesType } from "../schemas";
import StockEntryTable from "./StockEntryTable";
import AddBatchStockDialog from "../AddBatchStockDialog";
import { Medication, Supplier } from "@/generated/prisma";

export default function StockEntriesPage({
  medications,
  suppliers,
  entries,
}: {
  medications: Medication[];
  suppliers: Supplier[];
  entries: EntriesType[];
}) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<EntriesType>(entries, 10);

  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestion des Entrées de Stock
              </CardTitle>
              <CardDescription>
                Ajoutez, modifiez, et gérez la liste des entrées de stock
              </CardDescription>
            </div>
            <AddBatchStockDialog
              medications={medications}
              suppliers={suppliers}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 md:p-6">
          <StockEntryTable entries={pageItems} />
        </CardContent>
        {totalPages > 0 && (
          <CardFooter className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
