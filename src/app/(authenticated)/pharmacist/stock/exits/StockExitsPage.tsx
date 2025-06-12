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

import { ExitsType } from "../schemas";
import { Medication, MedicationBatch } from "@/generated/prisma";
import StockExitTable from "./StockExitTable";
import AddStockExitDialog from "./AddStockExitDialog";

export default function StockExitsPage({
  batches,
  exits,
}: {
  batches: (MedicationBatch & { medication: Medication })[];
  exits: ExitsType[];
}) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<ExitsType>(exits, 10);

  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestion des Sorties de Stock
              </CardTitle>
              <CardDescription>
                Ajoutez, modifiez, et gérez la liste des sorties de stock
              </CardDescription>
            </div>

            <AddStockExitDialog batches={batches} />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 md:p-6">
          <StockExitTable exits={pageItems} />
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
