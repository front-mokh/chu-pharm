"use client";
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
import UsersTable from "./UsersTable";
import AddUserDialog from "./AddUserDialog";
import { Service, User } from "@/generated/prisma";

export default function UsersPage({
  users,
  services,
}: {
  users: User[];
  services: Service[];
}) {
  const { currentPage, totalPages, pageItems, handlePageChange } =
    usePagination<User>(users, 8);

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Gestion des Utilisateurs</CardTitle>
          <AddUserDialog services={services} />
        </CardHeader>
        <CardContent>
          <UsersTable users={pageItems} services={services} />
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
