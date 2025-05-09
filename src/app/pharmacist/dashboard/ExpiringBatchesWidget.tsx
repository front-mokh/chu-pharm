"use client";

import { ExpiringBatch } from "./service";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { differenceInDays, isPast, isToday } from "date-fns";

interface ExpiringBatchesWidgetProps {
  batches: ExpiringBatch[];
}

export default function ExpiringBatchesWidget({
  batches,
}: ExpiringBatchesWidgetProps) {
  if (!batches || batches.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4 text-center">
        Aucun lot n&apos;expire bientôt.
      </p>
    );
  }

  const getExpirationSeverity = (
    expirationDate: Date
  ): "critical" | "warning" | "info" => {
    const daysLeft = differenceInDays(expirationDate, new Date());
    if (daysLeft < 0 || (isPast(expirationDate) && !isToday(expirationDate)))
      return "critical"; // Already expired
    if (daysLeft <= 7) return "critical"; // Expiring within a week
    if (daysLeft <= 30) return "warning"; // Expiring within 30 days
    return "info"; // Expiring within 60 days (as per query)
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Médicament</TableHead>
            <TableHead>N° Lot</TableHead>
            <TableHead className="text-center">Expire le</TableHead>
            <TableHead className="text-center">Qté Restante</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {batches.map((batch) => {
            const severity = getExpirationSeverity(batch.expirationDate);
            return (
              <TableRow key={batch.id}>
                <TableCell className="font-medium">
                  {batch.medication.commercialName}
                </TableCell>
                <TableCell>{batch.batchNumber}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={
                      severity === "critical"
                        ? "destructive"
                        : severity === "warning"
                        ? "outline"
                        : "default"
                    }
                    className={
                      severity === "critical"
                        ? "bg-red-100 text-red-700"
                        : severity === "warning"
                        ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                        : "" // default uses theme color
                    }
                  >
                    {formatDate(batch.expirationDate)}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  {batch.currentQuantity}
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/dashboard/pharmacist/batches?highlight=${batch.id}`}
                    passHref
                  >
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-1" /> Voir
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
