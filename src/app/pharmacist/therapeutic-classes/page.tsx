import { getAllTherapeuticClasses } from "@/lib/services";
import React from "react";
import TherapeuticClassesPage from "./TherapeuticClassesPage";

export default async function page() {
  const therapeuticClasses = await getAllTherapeuticClasses();
  return <TherapeuticClassesPage therapeuticClasses={therapeuticClasses} />;
}
