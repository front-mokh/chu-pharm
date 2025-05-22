import React from "react";
import StockManagementPage from "./StockManagementPage";
import {
  getAllActiveMedications,
  getAllActiveSuppliers,
  getAllMedicationBatches,
} from "./service";

export default async function page() {
  const [batches, medications, suppliers] = await Promise.all([
    getAllMedicationBatches(),
    getAllActiveMedications(),
    getAllActiveSuppliers(),
  ]);

  return (
    <StockManagementPage
      batches={batches}
      medications={medications}
      suppliers={suppliers}
    />
  );
}
