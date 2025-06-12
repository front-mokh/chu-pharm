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
import { formatDate, prettifyEnum } from "@/lib/utils";
import { ExitsType } from "../schemas";




export default function StockExitTable({ exits }: { exits: ExitsType[] }) {
  if (!exits) {
    return (
      <div className="text-center py-8">Chargement des sorties de stock...</div>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date de Sortie</TableHead>
            <TableHead>Médicament</TableHead>
            <TableHead>Lot</TableHead>
            <TableHead className="text-center">Quantité</TableHead>
            <TableHead>Raison</TableHead>
            <TableHead>Lié à la Commande</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exits.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-16 text-center text-muted-foreground"
              >
                Aucune sortie de stock enregistrée.
              </TableCell>
            </TableRow>
          ) : (
            exits.map((exit) => (
              <TableRow key={exit.id}>
                <TableCell>{formatDate(exit.exitDate)}</TableCell>
                <TableCell className="font-medium">
                  <div>
                    <div>{exit.batch.medication.commercialName}</div>
                    <div className="text-sm text-muted-foreground">
                      {exit.batch.medication.dosage} -{" "}
                      {prettifyEnum(exit.batch.medication.form)}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{exit.batch.batchNumber}</TableCell>
                <TableCell className="text-center">{exit.quantity}</TableCell>
                <TableCell>{prettifyEnum(exit.reason)}</TableCell>
                <TableCell>
                  {exit.orderItemId
                    ? `Oui (ID: ${exit.orderItemId.substring(0, 8)}...)`
                    : "Non"}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
