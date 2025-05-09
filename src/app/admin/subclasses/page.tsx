import { getAllSubClasses } from "@/lib/services";
import React from "react";
import SubClassesPage from "./SubClassesPage";

export default async function page() {
  const subClasses = await getAllSubClasses();
  return <SubClassesPage subClasses={subClasses} />;
}