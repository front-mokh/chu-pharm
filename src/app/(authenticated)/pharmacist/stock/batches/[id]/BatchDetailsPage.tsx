"use client";

import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Medication,
  MedicationBatch,
  StockEntry,
  StockExit,
  Supplier,
} from "@/generated/prisma";
import { formatDate, formatCurrency, prettifyEnum } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableWrapper from "@/components/custom/TableWrapper";
import CustomPagination from "@/components/custom/CustomPagination";
import { usePagination } from "@/hooks/use-pagination";

interface BatchDetailsPageProps {
  batch: MedicationBatch & {
    medication: Medication;
    stockEntries: Array<StockEntry & { supplier: Supplier }>;
    stockExits: Array<StockExit>;
  };
}

export default function BatchDetailsPage({ batch }: BatchDetailsPageProps) {
  // Memoize data to prevent re-computation
  const sortedEntries = useMemo(
    () =>
      [...batch.stockEntries].sort(
        (a, b) =>
          new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime()
      ),
    [batch.stockEntries]
  );

  const sortedExits = useMemo(
    () =>
      [...batch.stockExits].sort(
        (a, b) =>
          new Date(b.exitDate).getTime() - new Date(a.exitDate).getTime()
      ),
    [batch.stockExits]
  );

  // Pagination for entries
  const {
    currentPage: entriesCurrentPage,
    totalPages: entriesTotalPages,
    pageItems: entriesPageItems,
    handlePageChange: handleEntriesPageChange,
  } = usePagination(sortedEntries, 5);

  // Pagination for exits
  const {
    currentPage: exitsCurrentPage,
    totalPages: exitsTotalPages,
    pageItems: exitsPageItems,
    handlePageChange: handleExitsPageChange,
  } = usePagination(sortedExits, 5);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Détails du Lot: {batch.batchNumber}
        </h1>
        <Button variant="outline" onClick={() => window.history.back()}>
          Retour
        </Button>
      </div>

      {/* Batch Information Card */}
      <Card className="shadow-md">
        <CardHeader className="bg-slate-50">
          <CardTitle>Informations sur le Lot</CardTitle>
          <CardDescription>
            Détails du lot {batch.batchNumber} pour{" "}
            {batch.medication.commercialName}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Médicament
                </h3>
                <p className="text-lg font-semibold">
                  {batch.medication.commercialName}
                </p>
                <p className="text-sm text-muted-foreground">
                  DCI: {batch.medication.dci}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Forme & Dosage
                </h3>
                <p>
                  {prettifyEnum(batch.medication.form)} -{" "}
                  {batch.medication.dosage}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Numéro de Lot
                </h3>
                <p>{batch.batchNumber}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Date d&apos;Expiration
                </h3>
                <Badge
                  variant={
                    new Date(batch.expirationDate) < new Date()
                      ? "destructive"
                      : "outline"
                  }
                  className="mt-1 text-base"
                >
                  {formatDate(batch.expirationDate)}
                </Badge>
              </div>

              <div className="flex gap-8">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Quantité Initiale
                  </h3>
                  <p>{batch.initialQuantity}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Quantité Actuelle
                  </h3>
                  <Badge
                    className={`mt-1 text-base ${
                      batch.currentQuantity <= batch.medication.minStockLevel &&
                      batch.currentQuantity > 0
                        ? "bg-amber-100 text-amber-800"
                        : batch.currentQuantity === 0
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {batch.currentQuantity}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Stock Minimum
                  </h3>
                  <p>{batch.medication.minStockLevel}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stock Entries Card */}
      <Card className="shadow-md">
        <CardHeader className="bg-slate-50">
          <CardTitle>Entrées de Stock</CardTitle>
          <CardDescription>
            {batch.stockEntries.length} entrées de stock pour ce lot
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {sortedEntries.length > 0 ? (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Fournisseur</TableHead>
                    <TableHead className="text-center">Quantité</TableHead>
                    <TableHead className="text-right">Prix Unit.</TableHead>
                    <TableHead>Facture</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entriesPageItems.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{formatDate(entry.entryDate)}</TableCell>
                      <TableCell>{entry.supplier.name}</TableCell>
                      <TableCell className="text-center">
                        {entry.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {entry.unitPrice
                          ? formatCurrency(entry.unitPrice)
                          : "-"}
                      </TableCell>
                      <TableCell>{entry.invoiceNumber || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              Aucune entrée de stock pour ce lot.
            </div>
          )}
        </CardContent>
        {entriesTotalPages > 1 && (
          <CardFooter className="flex justify-center border-t pt-4">
            <CustomPagination
              currentPage={entriesCurrentPage}
              totalPages={entriesTotalPages}
              onPageChange={handleEntriesPageChange}
            />
          </CardFooter>
        )}
      </Card>

      {/* Stock Exits Card */}
      <Card className="shadow-md">
        <CardHeader className="bg-slate-50">
          <CardTitle>Sorties de Stock</CardTitle>
          <CardDescription>
            {batch.stockExits.length} sorties de stock pour ce lot
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {sortedExits.length > 0 ? (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-center">Quantité</TableHead>
                    <TableHead>Raison</TableHead>
                    <TableHead>Commande</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exitsPageItems.map((exit) => (
                    <TableRow key={exit.id}>
                      <TableCell>{formatDate(exit.exitDate)}</TableCell>
                      <TableCell className="text-center">
                        {exit.quantity}
                      </TableCell>
                      <TableCell>{prettifyEnum(exit.reason)}</TableCell>
                      <TableCell>
                        {exit.orderItemId
                          ? `Oui (${exit.orderItemId.substring(0, 8)}...)`
                          : "Non"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              Aucune sortie de stock pour ce lot.
            </div>
          )}
        </CardContent>
        {exitsTotalPages > 1 && (
          <CardFooter className="flex justify-center border-t pt-4">
            <CustomPagination
              currentPage={exitsCurrentPage}
              totalPages={exitsTotalPages}
              onPageChange={handleExitsPageChange}
            />
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
