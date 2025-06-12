import React from "react";
import { getMedicationBatch } from "../service";
import BatchDetailsPage from "./BatchDetailsPage";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const batch = await getMedicationBatch(params.id);

  if (!batch) {
    notFound();
  }
  return <BatchDetailsPage batch={batch} />;
}
