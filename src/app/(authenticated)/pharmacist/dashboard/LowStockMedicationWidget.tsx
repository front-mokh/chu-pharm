"use client";

import { LowStockMedication } from "./service";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface LowStockMedicationsWidgetProps {
  medications: LowStockMedication[];
}

export default function LowStockMedicationsWidget({
  medications,
}: LowStockMedicationsWidgetProps) {
  if (!medications || medications.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4 text-center">
        Aucun médicament en stock faible actuellement.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Médicament</TableHead>
            <TableHead className="text-center">Stock Actuel</TableHead>
            <TableHead className="text-center">Stock Min.</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medications.map((med) => (
            <TableRow key={med.id}>
              <TableCell>
                <div className="font-medium">{med.commercialName}</div>
                <div className="text-xs text-muted-foreground">{med.dci}</div>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    med.currentStock < med.minStockLevel
                      ? "destructive"
                      : "default"
                  }
                >
                  {med.currentStock}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{med.minStockLevel}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/dashboard/pharmacist/medications/${med.id}/stock`}
                  passHref
                >
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-1" /> Voir
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
