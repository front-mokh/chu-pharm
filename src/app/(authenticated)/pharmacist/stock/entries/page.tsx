import React from "react";
import {
  getAllActiveMedications,
  getAllActiveSuppliers,
  getAllMedicationBatches,
} from "../service";
import StockEntriesPage from "./StockEntriesPage";

export default async function page() {
  const medications = await getAllActiveMedications();
  const suppliers = await getAllActiveSuppliers();
  const batches = await getAllMedicationBatches();
  const entries = batches
    .flatMap((batch) =>
      batch.stockEntries.map((entry) => ({
        ...entry,
        batch: { ...batch, medication: batch.medication },
        supplier: entry.supplier,
      }))
    )
    .sort(
      (a, b) =>
        new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime()
    );

  return (
    <StockEntriesPage
      medications={medications}
      suppliers={suppliers}
      entries={entries}
    />
  );
}
