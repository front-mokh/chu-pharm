"use client";
import AddServiceDialog from "./AddServiceDialog";
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
import ServicesTable from "./ServicesTable";
import { Service } from "@/generated/prisma";

export default function ServicesPage({ services }: { services: Service[] }) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<Service>(services, 8);

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gestion des Services</CardTitle>
          <AddServiceDialog />
        </CardHeader>
        <CardContent>
          <ServicesTable services={pageItems} />
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
