"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableWrapper from "@/components/custom/TableWrapper";
import { formatDate, formatCurrency } from "@/lib/utils";
import {
  StockEntry,
  Medication,
  MedicationBatch,
  Supplier,
} from "@/generated/prisma";

interface EntriesTableProps {
  entries: Array<
    StockEntry & {
      batch: MedicationBatch & { medication: Medication };
      supplier: Supplier;
    }
  >;
}

export default function StockEntryTable({ entries }: EntriesTableProps) {
  if (!entries) {
    return (
      <div className="text-center py-8">Chargement des entrées de stock...</div>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date d&apos;Entrée</TableHead>
            <TableHead>Médicament</TableHead>
            <TableHead>Lot</TableHead>
            <TableHead>Fournisseur</TableHead>
            <TableHead className="text-center">Quantité</TableHead>
            <TableHead className="text-right">Prix Unitaire</TableHead>
            <TableHead>N° Facture</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-16 text-center text-muted-foreground"
              >
                Aucune entrée de stock enregistrée.
              </TableCell>
            </TableRow>
          ) : (
            entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{formatDate(entry.entryDate)}</TableCell>
                <TableCell className="font-medium">
                  <div>
                    <div>{entry.batch.medication.commercialName}</div>
                    <div className="text-sm text-muted-foreground">
                      {entry.batch.medication.dosage} -{" "}
                      {entry.batch.medication.form}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{entry.batch.batchNumber}</TableCell>
                <TableCell>{entry.supplier.name}</TableCell>
                <TableCell className="text-center">{entry.quantity}</TableCell>
                <TableCell className="text-right">
                  {entry.unitPrice ? formatCurrency(entry.unitPrice) : "-"}
                </TableCell>
                <TableCell>{entry.invoiceNumber || "-"}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
