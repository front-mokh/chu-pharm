"use client";
import AddTherapeuticClassDialog from "./AddTherapeuticClassDialog";
import CustomPagination from "@/components/custom/CustomPagination";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePagination } from "@/hooks/use-pagination";
import React from "react";
import TherapeuticClassesTable from "./TherapeuticClassesTable";
import { TherapeuticClass } from "@/generated/prisma";

export default function TherapeuticClassesPage({
  therapeuticClasses,
}: {
  therapeuticClasses: TherapeuticClass[];
}) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<TherapeuticClass>(therapeuticClasses, 8);

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gestion des Classes Thérapeutiques</CardTitle>
          <AddTherapeuticClassDialog />
        </CardHeader>
        <CardContent>
          <TherapeuticClassesTable therapeuticClasses={pageItems} />
        </CardContent>
        <CardFooter>
          {totalPages > 1 && (
            <div className="mt-6">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
