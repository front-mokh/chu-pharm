import DeleteAction from "@/components/custom/DeleteAction";
import DeleteTherapeuticClassDialog from "./DeleteTherapeuticClassDialog";
import TableWrapper from "@/components/custom/TableWrapper";
import UpdateAction from "@/components/custom/UpdateAction";
import UpdateTherapeuticClassDialog from "./UpdateTherapeuticClassDialog";
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
import { TherapeuticClass } from "@/generated/prisma";

export default function TherapeuticClassesTable({
  therapeuticClasses,
}: {
  therapeuticClasses: TherapeuticClass[];
}) {
  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom de la classe</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Date de création</TableHead>
            <TableHead>Date de modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {therapeuticClasses.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center text-muted-foreground"
              >
                Aucune classe thérapeutique trouvée
              </TableCell>
            </TableRow>
          )}
          {therapeuticClasses.map((therapeuticClass) => (
            <TableRow key={therapeuticClass.id}>
              <TableCell className="font-medium">
                {therapeuticClass.name}
              </TableCell>
              <TableCell className="text-center">
                {therapeuticClass.description
                  ? therapeuticClass.description
                  : "/"}
              </TableCell>
              <TableCell>
                {therapeuticClass.isActive ? "Actif" : "Inactif"}
              </TableCell>
              <TableCell>{formatDate(therapeuticClass.createdAt)}</TableCell>
              <TableCell>{formatDate(therapeuticClass.updatedAt)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <UpdateTherapeuticClassDialog
                    trigger={<UpdateAction />}
                    therapeuticClass={therapeuticClass}
                  />
                  <DeleteTherapeuticClassDialog
                    trigger={<DeleteAction />}
                    therapeuticClass={therapeuticClass}
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
