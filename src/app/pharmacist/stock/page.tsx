// StockManagementPage.tsx (Server Component)
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

import {
  getAllMedicationBatches,
  getAllActiveMedications,
  getAllActiveSuppliers,
} from "./service";
import StockManagementPage from "./StockManagementPage";

export default async function page() {
  noStore();

  try {
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
  } catch (error) {
    console.error("Error fetching stock management data:", error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-semibold text-red-600">
          Erreur de chargement des données
        </h1>
        <p>
          Impossible de récupérer les informations sur les stocks. Veuillez
          réessayer plus tard.
        </p>
      </div>
    );
  }
}
