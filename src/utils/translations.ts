import { OrderStatus } from "@/generated/prisma";

export const MedicationFormLabels: Record<string, string> = {
    TABLET: "Comprimé",
    CAPSULE: "Gélule",
    SYRUP: "Sirop",
    POWDER: "Poudre",
    INJECTION: "Injectable",
    CREAM: "Crème",
    OINTMENT: "Pommade",
    PATCH: "Patch",
    DROPS: "Gouttes",
    INHALER: "Inhalateur",
    SUPPOSITORY: "Suppositoire",
    OTHER: "Autre",
  };


  export const PackagingUnitLabels: Record<string, string> = {
    FLACON: "Flacon",
    TUBE: "Tube",
    BOITE: "Boîte",
    AMPOULE: "Ampoule",
    BLISTER: "Blister",
    SACHET: "Sachet",
    FLACON_POUDRE: "Flacon de poudre",
    PILULIER: "Pilulier",
  };
  

  export function translateOrderStatus(status: OrderStatus): string {
    const statusMap: Record<OrderStatus, string> = {
      DRAFT: "BROUILLON",
      SUBMITTED: "SOUMISE",
      VALIDATED: "VALIDÉE",
      PARTIALLY_VALIDATED: "PARTIELLEMENT VALIDÉE",
      IN_PREPARATION: "EN PRÉPARATION",
      PREPARED: "PRÉPARÉE",
      DELIVERED: "LIVRÉE",
      CANCELLED: "ANNULÉE"
    };
    
    return statusMap[status] || status;
  }