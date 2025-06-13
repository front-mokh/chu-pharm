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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";
import { OrderForValidation } from "../../../pharmacist/orders/service";
import { formatDate, prettifyEnum } from "@/lib/utils";
import { OrderStatus } from "@/generated/prisma";
import TableWrapper from "@/components/custom/TableWrapper";

interface PendingOrdersTableProps {
  orders: OrderForValidation[];
}

export default function PreparedOrdersTable({
  orders,
}: PendingOrdersTableProps) {
  const getStatusVariant = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PREPARED:
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N° Commande</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Demandeur</TableHead>
            <TableHead className="text-center">Date Soumission</TableHead>
            <TableHead className="text-center">Nb Articles</TableHead>
            <TableHead className="text-center">Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-16 text-center text-muted-foreground"
              >
                Aucune commande en cours de préparation.{" "}
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono">{order.orderNumber}</TableCell>
                <TableCell>{order.service.name}</TableCell>
                <TableCell>{`${order.createdBy.firstName} ${order.createdBy.lastName}`}</TableCell>
                <TableCell className="text-center">
                  {formatDate(order.createdAt)}
                </TableCell>
                <TableCell className="text-center">
                  {order.orderItems.length}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={getStatusVariant(order.status)}
                    className={
                       order.status === OrderStatus.PREPARED
                        ? "bg-orange-100 text-orange-700 border-orange-300"
                        : ""
                    }
                  >
                    {prettifyEnum(order.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link
                                href={`/preparator/orders/${order.id}`}
                    >
                      <Eye className="mr-2 h-4 w-4" /> Voir/livrer
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
