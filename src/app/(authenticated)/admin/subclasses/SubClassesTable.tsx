import DeleteAction from "@/components/custom/DeleteAction";
import DeleteSubClassDialog from "./DeleteSubClassDialog";
import TableWrapper from "@/components/custom/TableWrapper";
import UpdateAction from "@/components/custom/UpdateAction";
import UpdateSubClassDialog from "./UpdateSubClassDialog";
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
import { SubClass } from "@/generated/prisma";

export default function SubClassesTable({ subClasses }: { subClasses: SubClass[] }) {
  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Date de création</TableHead>
            <TableHead>Date de modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subClasses.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-muted-foreground">
                Aucune sous-classe trouvée
              </TableCell>
            </TableRow>
          )}
          {subClasses.map((subClass) => (
            <TableRow key={subClass.id}>
              <TableCell className="font-medium">{subClass.name}</TableCell>
              <TableCell className="font-medium">{subClass.code}</TableCell>
              <TableCell>{subClass.description ?? "/"}</TableCell>
              <TableCell>{subClass.isActive ? "Actif" : "Inactif"}</TableCell>
              <TableCell>{formatDate(subClass.createdAt)}</TableCell>
              <TableCell>{formatDate(subClass.updatedAt)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <UpdateSubClassDialog
                    trigger={<UpdateAction />}
                    subClass={subClass}
                  />
                  <DeleteSubClassDialog
                    trigger={<DeleteAction />}
                    subClass={subClass}
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
