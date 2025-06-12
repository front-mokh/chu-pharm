import { getAllServices, getAllUsers } from "@/lib/services";
import React from "react";
import UsersPage from "./UsersPage";

export default async function page() {
  const [users, services] = await Promise.all([
    getAllUsers(),
    getAllServices(),
  ]);
  return <UsersPage users={users} services={services} />;
}
