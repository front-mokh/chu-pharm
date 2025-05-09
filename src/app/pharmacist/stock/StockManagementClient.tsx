// StockManagementClient.tsx (Updated)
"use client";

import { useState, useMemo } from "react"; // Added useMemo
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Medication,
  MedicationBatch,
  Supplier,
  StockEntry,
  StockExit,
  TherapeuticClass,
  OrderItem, // If medication includes it
} from "@/generated/prisma"; // Make sure all types are imported
import CustomPagination from "@/components/custom/CustomPagination";
import { usePagination } from "@/hooks/use-pagination";

import BatchStockTable from "./BatchStockTable";
import StockEntryTable from "./StockEntryTable";
import StockExitTable from "./StockExitTable";
import AddBatchStockDialog from "./AddBatchStockDialog";
import RecordStockExitDialog from "./RecordStockExitDialog"; // Already imported

// Define a more precise type for batches used by the client
export type ClientMedicationBatch = MedicationBatch & {
  medication: Medication & { therapeuticClass: TherapeuticClass };
  stockEntries: Array<StockEntry & { supplier: Supplier }>;
  stockExits: Array<StockExit & { orderItem?: OrderItem | null }>;
};

interface StockManagementClientProps {
  batches: ClientMedicationBatch[];
  medications: Array<Medication & { therapeuticClass: TherapeuticClass }>; // For dropdowns
  suppliers: Supplier[]; // For dropdowns
}

export default function StockManagementClient({
  batches: initialBatches, // Renamed to avoid conflict with paginated batches
  medications,
  suppliers,
}: StockManagementClientProps) {
  const [activeTab, setActiveTab] = useState("current-stock");

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

  const entriesData = useMemo(
    () =>
      initialBatches
        .flatMap((batch) =>
          batch.stockEntries.map((entry) => ({
            ...entry,
            batch: { ...batch, medication: batch.medication }, // Ensure medication is passed
            supplier: entry.supplier, // Already included
          }))
        )
        .sort(
          (a, b) =>
            new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime()
        ), // Sort by most recent entry
    [initialBatches]
  );

  const exitsData = useMemo(
    () =>
      initialBatches
        .flatMap((batch) =>
          batch.stockExits.map((exit) => ({
            ...exit,
            batch: { ...batch, medication: batch.medication }, // Ensure medication is passed
            orderItem: exit.orderItem, // Assuming orderItem is part of the fetched data if linked
          }))
        )
        .sort(
          (a, b) =>
            new Date(b.exitDate).getTime() - new Date(a.exitDate).getTime()
        ), // Sort by most recent exit
    [initialBatches]
  );

  // Pagination for each tab
  const {
    currentPage: currentBatchPage,
    totalPages: totalBatchPages,
    pageItems: pageBatches,
    handlePageChange: handleBatchPageChange,
    setItems: setBatchesForPagination, // To update after new batch creation
  } = usePagination(currentBatches, 10);

  const {
    currentPage: currentEntryPage,
    totalPages: totalEntryPages,
    pageItems: pageEntries,
    handlePageChange: handleEntryPageChange,
  } = usePagination(entriesData, 10);

  const {
    currentPage: currentExitPage,
    totalPages: totalExitPages,
    pageItems: pageExits,
    handlePageChange: handleExitPageChange,
  } = usePagination(exitsData, 10);

  // Effect to update pagination if initialBatches change (e.g., after a successful mutation revalidating data)
  // This relies on Next.js revalidation fetching new initialBatches
  // For client-side only updates without full revalidation, more complex state management would be needed.
  // However, with server actions and revalidatePath, this should mostly work.

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
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-4">
              <TabsTrigger value="current-stock">
                Stock Actuel (Lots)
              </TabsTrigger>
              <TabsTrigger value="stock-entries">
                Historique des Entrées
              </TabsTrigger>
              <TabsTrigger value="stock-exits">
                Historique des Sorties
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current-stock" className="mt-4 space-y-4">
              <div className="flex justify-end">
                <AddBatchStockDialog
                  medications={medications}
                  suppliers={suppliers}
                />
              </div>
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
            </TabsContent>

            <TabsContent value="stock-entries" className="mt-4 space-y-4">
              {/* No primary action button for entries list, it's informational */}
              <StockEntryTable entries={pageEntries} />
              {totalEntryPages > 1 && (
                <div className="pt-4 flex justify-center">
                  <CustomPagination
                    currentPage={currentEntryPage}
                    totalPages={totalEntryPages}
                    onPageChange={handleEntryPageChange}
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="stock-exits" className="mt-4 space-y-4">
              <div className="flex justify-end">
                {/* Allows recording a manual exit by selecting any batch */}
                <RecordStockExitDialog batches={currentBatches} />
              </div>
              <StockExitTable exits={pageExits} />
              {totalExitPages > 1 && (
                <div className="pt-4 flex justify-center">
                  <CustomPagination
                    currentPage={currentExitPage}
                    totalPages={totalExitPages}
                    onPageChange={handleExitPageChange}
                  />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
