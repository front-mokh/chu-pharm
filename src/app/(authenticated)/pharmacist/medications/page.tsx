import React from "react";
import { getAllMedications, getAllActiveTherapeuticClasses, getAllActiveSubClasses } from "./service";
import MedicationsPageClient from "./MedicationsPage";
import { unstable_noStore as noStore } from "next/cache";

export default async function MedicationsServerPage() {
  noStore();

  try {
    const [medications, therapeuticClasses, subClasses] = await Promise.all([
      getAllMedications(),
      getAllActiveTherapeuticClasses(), // For dropdowns in forms
      getAllActiveSubClasses(),
    ]);

    return (
      <MedicationsPageClient
        medications={medications}
        therapeuticClasses={therapeuticClasses}
        subClasses={subClasses}
      />
    );
  } catch (error) {
    console.error("Error fetching medication data for page:", error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-semibold text-red-600">
          Erreur de chargement des données
        </h1>
        <p>
          Impossible de récupérer les informations sur les médicaments. Veuillez
          réessayer plus tard.
        </p>
      </div>
    );
  }
}
