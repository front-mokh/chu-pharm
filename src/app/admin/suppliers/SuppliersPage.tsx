"use client";
import AddSupplierDialog from "./AddSupplierDialog";
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
import SuppliersTable from "./SuppliersTable";
import { Supplier } from "@/generated/prisma";

export default function SuppliersPage({
  suppliers,
}: {
  suppliers: Supplier[];
}) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<Supplier>(suppliers, 8);

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gestion des Fournisseurs</CardTitle>
          <AddSupplierDialog />
        </CardHeader>
        <CardContent>
          <SuppliersTable suppliers={pageItems} />
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
