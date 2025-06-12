import { getAllSuppliers } from "@/lib/services";
import React from "react";
import SuppliersPage from "./SuppliersPage";

export default async function page() {
  const suppliers = await getAllSuppliers();
  return <SuppliersPage suppliers={suppliers} />;
}
