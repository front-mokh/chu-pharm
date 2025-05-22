// BatchStockTable.tsx (Updated)
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
import { Badge } from "@/components/ui/badge";
import TableWrapper from "@/components/custom/TableWrapper";
import { formatDate, prettifyEnum } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // For action buttons
import { Eye, MinusCircle, PackageSearch } from "lucide-react"; // Icons

import AddStockExitDialog from "../exits/AddStockExitDialog";
import ViewBatchDetailsDialog from "./ViewBatchDetailsDialog";
import { ClientMedicationBatch } from "./StockManagementPage"; // Use the more precise type
import ViewAction from "@/components/custom/ViewAction";

interface BatchStockTableProps {
  batches: ClientMedicationBatch[];
  allActiveBatches: ClientMedicationBatch[]; // For RecordStockExitDialog context
}

export default function BatchStockTable({
  batches,
  allActiveBatches,
}: BatchStockTableProps) {
  if (!batches) {
    return (
      <div className="text-center py-8">Chargement des données de stock...</div>
    );
  }

  const getBatchStatus = (batch: ClientMedicationBatch) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day for comparison
    const expirationDate = new Date(batch.expirationDate);
    expirationDate.setHours(0, 0, 0, 0); // Normalize expiration date

    const daysUntilExpiration = Math.ceil(
      (expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilExpiration < 0) {
      // Already expired
      return { text: "Expiré", color: "bg-red-600 text-white" };
    } else if (daysUntilExpiration === 0) {
      // Expires today
      return { text: "Expire Aujourd'hui", color: "bg-red-500 text-white" };
    } else if (daysUntilExpiration <= 30) {
      return {
        text: `Expire dans ${daysUntilExpiration}j`,
        color: "bg-amber-500 text-white",
      };
    } else if (daysUntilExpiration <= 90) {
      return {
        text: `Expire dans ${Math.floor(daysUntilExpiration / 30)}m`,
        color: "bg-yellow-400 text-black",
      };
    } else {
      return { text: "Valide", color: "bg-green-100 text-green-800" };
    }
  };

  const getStockLevelStatus = (batch: ClientMedicationBatch) => {
    if (batch.currentQuantity === 0) {
      // Should not appear if filtered correctly in client
      return { text: "Épuisé", color: "bg-red-100 text-red-800" };
    } else if (batch.currentQuantity <= batch.medication.minStockLevel) {
      return { text: "Bas", color: "bg-orange-100 text-orange-800" };
    } else {
      return { text: "Normal", color: "bg-green-100 text-green-800" };
    }
  };

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Médicament</TableHead>
            <TableHead>Lot</TableHead>
            <TableHead className="text-center">Stock Actuel</TableHead>
            <TableHead className="text-center">Stock Initial</TableHead>
            <TableHead className="text-center">
              Date d&apos;Expiration
            </TableHead>
            <TableHead className="text-center">Statut Lot</TableHead>
            <TableHead className="text-right w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {batches.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-24 text-center text-muted-foreground"
              >
                <div className="flex flex-col items-center justify-center">
                  <PackageSearch className="w-12 h-12 mb-2 text-gray-400" />
                  <span>Aucun lot actif en stock trouvé.</span>
                  <span className="text-sm">
                    Essayez d&apos;ajouter un nouveau lot.
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            batches.map((batch) => {
              const batchStatus = getBatchStatus(batch);
              const stockStatus = getStockLevelStatus(batch);

              return (
                <TableRow
                  key={batch.id}
                  className={
                    batchStatus.text === "Expiré" ? "opacity-70 bg-red-50" : ""
                  }
                >
                  <TableCell className="font-medium">
                    <div>
                      <div>{batch.medication.commercialName}</div>
                      <div className="text-xs text-muted-foreground">
                        {batch.medication.dci} |{" "}
                        {prettifyEnum(batch.medication.form)} -{" "}
                        {batch.medication.dosage}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{batch.batchNumber}</TableCell>
                  <TableCell className="text-center">
                    <Badge className={`${stockStatus.color} font-semibold`}>
                      {batch.currentQuantity}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      ({stockStatus.text})
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {batch.initialQuantity}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={batchStatus.color}>
                      {formatDate(batch.expirationDate)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={batchStatus.color}>
                      {batchStatus.text}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-1">
                      <ViewAction
                        href={`/pharmacist/stock/batches/${batch.id}`}
                      />
                      {batch.currentQuantity > 0 && (
                        <AddStockExitDialog
                          batches={allActiveBatches}
                          initialBatchId={batch.id}
                          singleBatchMode={true}
                          trigger={
                            <Button
                              variant="ghost"
                              size="icon"
                              title="Enregistrer une Sortie"
                            >
                              <MinusCircle className="h-4 w-4 text-red-500" />
                            </Button>
                          }
                        />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
