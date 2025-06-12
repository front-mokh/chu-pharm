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
import TableWrapper from "@/components/custom/TableWrapper"; // Ensure this component exists
import UpdateAction from "@/components/custom/UpdateAction"; // Ensure this component exists
import DeleteAction from "@/components/custom/DeleteAction"; // Ensure this component exists

import {
  Medication,
  TherapeuticClass as PrismaTherapeuticClass,
  SubClass
} from "@/generated/prisma";
import {
  MedicationFormLabels,

} from "@/utils/translations"; 
import UpdateMedicationDialog from "./UpdateMedicationDialog";
import DeleteMedicationDialog from "./DeleteMedicationDialog";

interface MedicationsTableProps {
  medications: Array<Medication & { therapeuticClass: PrismaTherapeuticClass }>;
  therapeuticClasses: PrismaTherapeuticClass[]; // Needed for UpdateDialog's therapeutic class dropdown
  subClasses: SubClass [];
}

export default function MedicationsTable({
  medications,
  therapeuticClasses,
  subClasses,
}: MedicationsTableProps) {
  if (!medications) {
    return (
      <div className="text-center py-8">
        Chargement des données sur les médicaments...
      </div>
    );
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Nom Commercial</TableHead>
            <TableHead>DCI</TableHead>
            <TableHead>Code DCI</TableHead>
            <TableHead>Forme</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead>Classe Thérapeutique</TableHead>
            <TableHead>Sous classe</TableHead>
            <TableHead className="text-center">Stock Min.</TableHead>
            <TableHead className="text-center">Statut</TableHead>
            <TableHead className="text-right w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medications.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={8}
                className="h-16 text-center text-muted-foreground"
              >
                Aucun médicament trouvé.
              </TableCell>
            </TableRow>
          ) : (
            medications.map((medication) => (
              <TableRow key={medication.id}>
                <TableCell className="font-medium">
                  {medication.commercialName}
                </TableCell>
                <TableCell>{medication.dci}</TableCell>
                <TableCell>{medication.codedci}</TableCell>
                <TableCell>{MedicationFormLabels[medication.form]}</TableCell>
                <TableCell>{medication.dosage}</TableCell>
                <TableCell>{medication.therapeuticClass.name}</TableCell>
                <TableCell>{medication.subClass.name}</TableCell>
                <TableCell className="text-center">
                  {medication.minStockLevel}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={medication.isActive ? "default" : "outline"}
                    className={
                      medication.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {medication.isActive ? "Actif" : "Inactif"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <UpdateMedicationDialog
                      trigger={<UpdateAction />}
                      medication={medication}
                      therapeuticClasses={therapeuticClasses}
                      subClasses={subClasses}
                    />
                    <DeleteMedicationDialog
                      trigger={<DeleteAction />}
                      medication={{
                        id: medication.id,
                        commercialName: medication.commercialName,
                      }}
                    />
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
