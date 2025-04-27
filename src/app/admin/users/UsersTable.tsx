import DeleteAction from "@/components/custom/DeleteAction";
import TableWrapper from "@/components/custom/TableWrapper";
import UpdateAction from "@/components/custom/UpdateAction";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Service, User, UserRole } from "@/generated/prisma";
import { formatDate } from "@/lib/utils";
import React from "react";
import UpdateUserDialog from "./UpdateUserDialog";
import DeleteUserDialog from "./DeleteUserDialog";

export default function UsersTable({
  users,
  services,
}: {
  users: User[];
  services: Service[];
}) {
  const getRoleName = (role: UserRole) => {
    switch (role) {
      case "ADMIN":
        return "Administrateur";
      case "PHARMACIST":
        return "Pharmacien";
      case "SERVICE_COORDINATOR":
        return "Coordinateur de Service";
      case "ORDER_PREPARER":
        return "Préparateur de Commande";
      default:
        return role;
    }
  };

  const getServiceName = (serviceId: string | null) => {
    if (!serviceId) return "/";
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : "/";
  };

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Prénom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rôle</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Date de création</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.lastName}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{getRoleName(user.role)}</TableCell>
              <TableCell>{getServiceName(user.serviceId)}</TableCell>
              <TableCell>{user.isActive ? "Actif" : "Inactif"}</TableCell>
              <TableCell>{formatDate(user.createdAt)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <UpdateUserDialog
                    trigger={<UpdateAction />}
                    user={user}
                    services={services}
                  />
                  <DeleteUserDialog trigger={<DeleteAction />} user={user} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
