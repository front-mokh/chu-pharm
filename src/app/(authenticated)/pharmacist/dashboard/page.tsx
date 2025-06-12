import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  getDashboardStats,
  getLowStockMedications,
  getExpiringBatches,
  getPendingValidationOrders,
  //   getUnreadAlerts,
} from "./service";

import DashboardStatsCards from "./DashboardStatsCard";
import LowStockMedicationsWidget from "./LowStockMedicationWidget";
import ExpiringBatchesWidget from "./ExpiringBatchesWidget";
import PendingValidationOrdersWidget from "./PendingValidationOrdersWidget";

// export const metadata = {
//   title: "Tableau de Bord Pharmacien - CHU Pharm",
// };

export default async function PharmacistDashboardPage() {
  noStore(); // Ensure data is fresh on each visit

  const [
    stats,
    lowStockItems,
    expiringItems,
    pendingOrders,
    // unreadAlertsData,
  ] = await Promise.all([
    getDashboardStats(),
    getLowStockMedications(5),
    getExpiringBatches(5, 60), // Expiring within 60 days
    getPendingValidationOrders(5),
    // getUnreadAlerts(5),
  ]);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Tableau de Bord Pharmacien
        </h1>
        {/* Global actions can go here, e.g., "Nouvelle Entrée de Stock" */}
      </div>

      <DashboardStatsCards stats={stats} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">
              Commandes en Attente de Validation
            </CardTitle>
            <Link href="/dashboard/pharmacist/orders/pending">
              <Button variant="outline" size="sm">
                Voir Tout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <PendingValidationOrdersWidget orders={pendingOrders} />
          </CardContent>
        </Card>

        <Card className="col-span-full lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">
              Médicaments en Stock Faible
            </CardTitle>
            <Link href="/dashboard/pharmacist/medications?filter=low_stock">
              <Button variant="outline" size="sm">
                Gérer Stock <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <LowStockMedicationsWidget medications={lowStockItems} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        {" "}
        {/* Single column for expiring batches or more detailed alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">
              Lots Proches de l&apos;Expiration (60j)
            </CardTitle>
            <Link href="/dashboard/pharmacist/batches?filter=expiring_soon">
              <Button variant="outline" size="sm">
                Voir Lots <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <ExpiringBatchesWidget batches={expiringItems} />
          </CardContent>
        </Card>
        {/* Add a dedicated Alerts Widget here if needed, using getUnreadAlerts */}
      </div>
    </div>
  );
}
