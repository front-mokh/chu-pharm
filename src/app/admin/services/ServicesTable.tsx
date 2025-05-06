import DeleteAction from "@/components/custom/DeleteAction";
import DeleteServiceDialog from "./DeleteServiceDialog";
import TableWrapper from "@/components/custom/TableWrapper";
import UpdateAction from "@/components/custom/UpdateAction";
import UpdateServiceDialog from "./UpdateServiceDialog";
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
import { Service } from "@/generated/prisma";

export default function ServicesTable({ services }: { services: Service[] }) {
  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom du service</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Date de création</TableHead>
            <TableHead>Date de modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center text-muted-foreground"
              >
                Aucun service trouvé
              </TableCell>
            </TableRow>
          )}
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell className="text-center">
                {service.description ? service.description : "/"}
              </TableCell>
              <TableCell>{service.isActive ? "Actif" : "Inactif"}</TableCell>
              <TableCell>{formatDate(service.createdAt)}</TableCell>
              <TableCell>{formatDate(service.updatedAt)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <UpdateServiceDialog
                    trigger={<UpdateAction />}
                    service={service}
                  />
                  <DeleteServiceDialog
                    trigger={<DeleteAction />}
                    service={service}
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
