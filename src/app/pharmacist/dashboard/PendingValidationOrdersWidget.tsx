"use client";

import { PendingOrder } from "./service";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate, prettifyEnum } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Edit3 } from "lucide-react";
import { OrderStatus } from "@/generated/prisma";

interface PendingValidationOrdersWidgetProps {
  orders: PendingOrder[];
}

export default function PendingValidationOrdersWidget({
  orders,
}: PendingValidationOrdersWidgetProps) {
  if (!orders || orders.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4 text-center">
        Aucune commande en attente de validation.
      </p>
    );
  }

  const getStatusVariant = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.SUBMITTED:
        return "default"; // Blue/Default
      case OrderStatus.PARTIALLY_VALIDATED:
        return "outline"; // Yellow/Warning
      default:
        return "secondary";
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N° Commande</TableHead>
            <TableHead>Service Demandeur</TableHead>
            <TableHead className="text-center">Date Soumission</TableHead>
            <TableHead className="text-center">Nb Articles</TableHead>
            <TableHead className="text-center">Statut</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-mono">{order.orderNumber}</TableCell>
              <TableCell>{order.serviceName}</TableCell>
              <TableCell className="text-center">
                {formatDate(order.createdAt)}
              </TableCell>
              <TableCell className="text-center">{order.itemCount}</TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={getStatusVariant(order.status)}
                  className={
                    order.status === OrderStatus.SUBMITTED
                      ? "bg-blue-100 text-blue-700"
                      : order.status === OrderStatus.PARTIALLY_VALIDATED
                      ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                      : ""
                  }
                >
                  {prettifyEnum(order.status)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/dashboard/pharmacist/orders/${order.id}/validate`}
                  passHref
                >
                  <Button variant="outline" size="sm">
                    <Edit3 className="h-4 w-4 mr-1" /> Valider
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
