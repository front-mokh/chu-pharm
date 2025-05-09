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
import UpdateAction from "@/components/custom/UpdateAction";
import DeleteAction from "@/components/custom/DeleteAction";

import { Order, OrderItem, Medication, OrderStatus } from "@/generated/prisma";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import DeleteOrderDialog from "./DeleteOrderDialog";


interface OrdersTableProps {
  orders: Array<Order & { orderItems: (OrderItem & { medication: Medication })[] }>;
}

const statusLabels: Record<OrderStatus, string> = {
  DRAFT: "Brouillon",
  SUBMITTED: "Soumise",
  VALIDATED: "Validée",
  PARTIALLY_VALIDATED: "Partiellement validée",
  IN_PREPARATION: "En préparation",
  PREPARED: "Préparée",
  DELIVERED: "Livrée",
  CANCELLED: "Annulée",
};

const statusBadgeColor: Record<OrderStatus, string> = {
  DRAFT: "bg-gray-100 text-gray-800",
  SUBMITTED: "bg-blue-100 text-blue-800",
  VALIDATED: "bg-green-100 text-green-800",
  PARTIALLY_VALIDATED: "bg-yellow-100 text-yellow-800",
  IN_PREPARATION: "bg-orange-100 text-orange-800",
  PREPARED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-200 text-green-900",
  CANCELLED: "bg-red-100 text-red-800",
};

export default function OrdersTable({ orders }: OrdersTableProps) {
  if (!orders) {
    return (
      <div className="text-center py-8">
        Chargement des commandes en cours...
      </div>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">N° Commande</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>État</TableHead>
            <TableHead>Articles</TableHead>
            <TableHead>Remarques</TableHead>
            <TableHead className="text-right w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-16 text-center text-muted-foreground"
              >
                Aucune commande trouvée.
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>
                  {format(new Date(order.createdAt), "dd MMM yyyy", {
                    locale: fr,
                  })}
                </TableCell>
                <TableCell>
                  <Badge className={statusBadgeColor[order.status]}>
                    {statusLabels[order.status]}
                  </Badge>
                </TableCell>
                <TableCell>{order.orderItems.length}</TableCell>
                <TableCell>{order.notes || "—"}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    
                    <UpdateAction href={`/coordinator/orders/${order.id}/edit`} />
                    <DeleteOrderDialog trigger={<DeleteAction />} order={order} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
