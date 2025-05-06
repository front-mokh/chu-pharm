import { getAllServices } from "@/lib/services";
import React from "react";
import ServicesPage from "./ServicesPage";

export default async function page() {
  const services = await getAllServices();
  return <ServicesPage services={services} />;
}
