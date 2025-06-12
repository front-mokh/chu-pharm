"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomPagination from "@/components/custom/CustomPagination"; // Ensure this component exists
import { usePagination } from "@/hooks/use-pagination"; // Ensure this hook exists
import {
  Medication,
  TherapeuticClass as PrismaTherapeuticClass,
  SubClass,
} from "@/generated/prisma";

import MedicationsTable from "./MedicationsTable";
import AddMedicationDialog from "./AddMedicationDialog";

interface MedicationsPageClientProps {
  medications: Array<Medication & { therapeuticClass: PrismaTherapeuticClass }>;
  therapeuticClasses: PrismaTherapeuticClass[];
  subClasses : SubClass[];
}

export default function MedicationsPageClient({
  medications,
  therapeuticClasses,
  subClasses,
}: MedicationsPageClientProps) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<Medication & { therapeuticClass: PrismaTherapeuticClass }>(
      medications,
      10
    );

  return (
    <div className="h-full p-4 md:p-6">
      <Card className="h-full flex flex-col shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestion des Médicaments
              </CardTitle>
              <CardDescription>
                Ajoutez, modifiez, et gérez la liste des médicaments
                disponibles.
              </CardDescription>
            </div>
            <AddMedicationDialog therapeuticClasses={therapeuticClasses} subClasses={subClasses} />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 md:p-6">
          {/* Optional: Add search/filter bar here */}
          <MedicationsTable
            medications={pageItems}
            therapeuticClasses={therapeuticClasses}
            subClasses={subClasses}
          />
        </CardContent>
        {totalPages > 0 && (
          <CardFooter className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {totalPages > 1 && (
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
