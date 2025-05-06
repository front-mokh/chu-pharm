import DeleteAction from "@/components/custom/DeleteAction";
import DeleteSupplierDialog from "./DeleteSupplierDialog";
import TableWrapper from "@/components/custom/TableWrapper";
import UpdateAction from "@/components/custom/UpdateAction";
import UpdateSupplierDialog from "./UpdateSupplierDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import React from "react";
import { Supplier } from "@/generated/prisma";

export default function SuppliersTable({
  suppliers,
}: {
  suppliers: Supplier[];
}) {
  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom du fournisseur</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Adresse</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Date de création</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-center text-muted-foreground"
              >
                Aucun fournisseur trouvé
              </TableCell>
            </TableRow>
          )}
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell className="font-medium">{supplier.name}</TableCell>
              <TableCell>{supplier.contactName || "/"}</TableCell>
              <TableCell>{supplier.email || "/"}</TableCell>
              <TableCell>{supplier.phone || "/"}</TableCell>
              <TableCell>{supplier.address || "/"}</TableCell>
              <TableCell>{supplier.isActive ? "Actif" : "Inactif"}</TableCell>
              <TableCell>{formatDate(supplier.createdAt)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <UpdateSupplierDialog
                    trigger={<UpdateAction />}
                    supplier={supplier}
                  />
                  <DeleteSupplierDialog
                    trigger={<DeleteAction />}
                    supplier={supplier}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
