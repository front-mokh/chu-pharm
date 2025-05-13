"use client";

import { useMemo } from "react"; // Added useMemo
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Medication,
  MedicationBatch,
  Supplier,
  StockEntry,
  StockExit,
  TherapeuticClass,
  OrderItem,
} from "@/generated/prisma";
import CustomPagination from "@/components/custom/CustomPagination";
import { usePagination } from "@/hooks/use-pagination";

import BatchStockTable from "./BatchStockTable";

export type ClientMedicationBatch = MedicationBatch & {
  medication: Medication & { therapeuticClass: TherapeuticClass };
  stockEntries: Array<StockEntry & { supplier: Supplier }>;
  stockExits: Array<StockExit & { orderItem?: OrderItem | null }>;
};

interface StockManagementClientProps {
  batches: ClientMedicationBatch[];
  medications: Array<Medication & { therapeuticClass: TherapeuticClass }>;
  suppliers: Supplier[];
}

export default function StockManagementPage({
  batches: initialBatches,
}: StockManagementClientProps) {
  // Memoize data transformations to prevent re-computation on every render
  const currentBatches = useMemo(
    () =>
      initialBatches
        .filter((batch) => batch.currentQuantity > 0)
        .sort(
          (a, b) =>
            new Date(a.expirationDate).getTime() -
            new Date(b.expirationDate).getTime()
        ), // Sort by expiration (FEFO)
    [initialBatches]
  );

  const {
    currentPage: currentBatchPage,
    totalPages: totalBatchPages,
    pageItems: pageBatches,
    handlePageChange: handleBatchPageChange,
  } = usePagination(currentBatches, 10);

  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestion des Stocks et des Lots
              </CardTitle>
              <CardDescription>
                Suivez les lots de médicaments, enregistrez les entrées et
                sorties de stock.
              </CardDescription>
            </div>
            {/* Global Add button can be placed here or within the "Current Stock" tab */}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 md:p-6">
          <BatchStockTable
            batches={pageBatches} // Use paginated items
            // Pass all active batches to RecordStockExitDialog inside BatchStockTable for selection context
            allActiveBatches={currentBatches}
          />
          {totalBatchPages > 1 && (
            <div className="pt-4 flex justify-center">
              <CustomPagination
                currentPage={currentBatchPage}
                totalPages={totalBatchPages}
                onPageChange={handleBatchPageChange}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
