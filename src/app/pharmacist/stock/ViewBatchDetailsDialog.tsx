// ViewBatchDetailsDialog.tsx
"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import {
  Medication,
  MedicationBatch,
  StockEntry,
  StockExit,
  Supplier,
} from "@/generated/prisma";
import { formatDate, formatCurrency, prettifyEnum } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableWrapper from "@/components/custom/TableWrapper";

interface ViewBatchDetailsDialogProps {
  batch: MedicationBatch & {
    medication: Medication;
    stockEntries: Array<StockEntry & { supplier: Supplier }>;
    stockExits: Array<StockExit>;
  };
  trigger?: React.ReactNode;
}

export default function ViewBatchDetailsDialog({
  batch,
  trigger,
}: ViewBatchDetailsDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  return (
    <CustomDialog
      trigger={
        trigger || (
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        )
      }
      title={`Détails du Lot: ${batch.batchNumber} - ${batch.medication.commercialName}`}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <ScrollArea className="max-h-[70vh] p-1">
        <div className="space-y-6">
          {/* Batch Information */}
          <section>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">
              Informations sur le Lot
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <strong>Médicament:</strong> {batch.medication.commercialName} (
                {batch.medication.dci})
              </div>
              <div>
                <strong>Forme & Dosage:</strong>{" "}
                {prettifyEnum(batch.medication.form)} -{" "}
                {batch.medication.dosage}
              </div>
              <div>
                <strong>Numéro de Lot:</strong> {batch.batchNumber}
              </div>
              <div>
                <strong>Date d&apos;Expiration:</strong>{" "}
                <Badge
                  variant={
                    new Date(batch.expirationDate) < new Date()
                      ? "destructive"
                      : "outline"
                  }
                >
                  {formatDate(batch.expirationDate)}
                </Badge>
              </div>
              <div>
                <strong>Quantité Initiale:</strong> {batch.initialQuantity}
              </div>
              <div>
                <strong>Quantité Actuelle:</strong>{" "}
                <Badge
                  className={
                    batch.currentQuantity <= batch.medication.minStockLevel &&
                    batch.currentQuantity > 0
                      ? "bg-amber-100 text-amber-800"
                      : batch.currentQuantity === 0
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }
                >
                  {batch.currentQuantity}
                </Badge>
              </div>
              <div>
                <strong>Stock Minimum (Médicament):</strong>{" "}
                {batch.medication.minStockLevel}
              </div>
            </div>
          </section>

          {/* Stock Entries */}
          <section>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">
              Entrées de Stock Associées ({batch.stockEntries.length})
            </h3>
            {batch.stockEntries.length > 0 ? (
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
                    {batch.stockEntries.map((entry) => (
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
              <p className="text-sm text-muted-foreground">
                Aucune entrée de stock pour ce lot.
              </p>
            )}
          </section>

          {/* Stock Exits */}
          <section>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">
              Sorties de Stock Associées ({batch.stockExits.length})
            </h3>
            {batch.stockExits.length > 0 ? (
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
                    {batch.stockExits.map((exit) => (
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
              <p className="text-sm text-muted-foreground">
                Aucune sortie de stock pour ce lot.
              </p>
            )}
          </section>
        </div>
      </ScrollArea>
      <div className="flex justify-end pt-6">
        <Button variant="outline" onClick={() => handleOpenChange(false)}>
          Fermer
        </Button>
      </div>
    </CustomDialog>
  );
}
