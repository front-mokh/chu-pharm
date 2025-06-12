import React from "react";
import { getAllMedicationBatches } from "../service";
import StockExitsPage from "./StockExitsPage";

export default async function page() {
  const batches = await getAllMedicationBatches();
  const exits = batches
    .flatMap((batch) =>
      batch.stockExits.map((exit) => ({
        ...exit,
        batch: { ...batch, medication: batch.medication },
      }))
    )
    .sort(
      (a, b) => new Date(b.exitDate).getTime() - new Date(a.exitDate).getTime()
    );

  return <StockExitsPage batches={batches} exits={exits} />;
}
