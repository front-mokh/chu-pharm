"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, ShoppingCart, Bell } from "lucide-react"; // Or other relevant icons
import { DashboardStats } from "./service";
import Link from "next/link";

interface DashboardStatsCardsProps {
  stats: DashboardStats;
}

const StatCard = ({
  title,
  value,
  icon,
  link,
  description,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  link?: string;
  description?: string;
}) => {
  const content = (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
  return link ? (
    <Link
      href={link}
      className="hover:shadow-md transition-shadow duration-150"
    >
      {content}
    </Link>
  ) : (
    content
  );
};

export default function DashboardStatsCards({
  stats,
}: DashboardStatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Commandes à Valider"
        value={stats.pendingValidationOrdersCount}
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        description="Commandes soumises par les services"
        link="/dashboard/pharmacist/orders/pending" // Link to pending orders list
      />
      <StatCard
        title="Alertes Stock Faible"
        value={stats.lowStockCount}
        icon={<AlertTriangle className="h-4 w-4 text-orange-500" />}
        description="Médicaments sous le seuil minimum"
        link="/dashboard/pharmacist/medications?filter=low_stock"
      />
      <StatCard
        title="Lots Proches Expiration"
        value={stats.expiringSoonCount}
        icon={<Activity className="h-4 w-4 text-red-500" />} // Using Activity as a placeholder for "expiring"
        description="Lots expirant dans les 30 prochains jours"
        link="/dashboard/pharmacist/batches?filter=expiring_soon_30"
      />
      <StatCard
        title="Alertes Non Lues"
        value={stats.unreadAlertsCount}
        icon={<Bell className="h-4 w-4 text-blue-500" />}
        description="Notifications importantes"
        link="/dashboard/pharmacist/alerts" // Assuming an alerts page
      />
    </div>
  );
}
