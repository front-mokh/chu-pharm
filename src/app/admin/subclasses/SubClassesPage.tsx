"use client";
import AddSubClassDialog from "./AddSubClassDialog";
import CustomPagination from "@/components/custom/CustomPagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { usePagination } from "@/hooks/use-pagination";
import React from "react";
import SubClassesTable from "./SubClassesTable";
import { SubClass } from "@/generated/prisma";

export default function SubClassesPage({ subClasses }: { subClasses: SubClass[] }) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<SubClass>(subClasses, 8);

  return (
    <div className="h-full">
      <Card className="h-full">
     <CardHeader className="flex flex-row items-center justify-between">
               <CardTitle>Gestion des Sous-Classes</CardTitle>
          <AddSubClassDialog />
        </CardHeader>
        <CardContent>
          <SubClassesTable subClasses={pageItems} />
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