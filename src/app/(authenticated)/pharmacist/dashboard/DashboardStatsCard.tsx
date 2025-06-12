"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  AlertTriangle, ShoppingCart, Bell, TrendingUp, Clock } from "lucide-react";
import { DashboardStats } from "./service";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DashboardStatsCardsProps {
  stats: DashboardStats;
}

const StatCard = ({
  title,
  value,
  icon,
  link,
  description,
  trend,
  color = "blue",
  urgent = false,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  link?: string;
  description?: string;
  trend?: { value: number; isPositive: boolean };
  color?: "blue" | "orange" | "red" | "green" | "purple";
  urgent?: boolean;
}) => {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300",
    orange: "from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300",
    red: "from-red-50 to-red-100/50 border-red-200 hover:border-red-300",
    green: "from-green-50 to-green-100/50 border-green-200 hover:border-green-300",
    purple: "from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300",
  };

  const iconColorClasses = {
    blue: "text-blue-600 bg-blue-100",
    orange: "text-orange-600 bg-orange-100",
    red: "text-red-600 bg-red-100",
    green: "text-green-600 bg-green-100",
    purple: "text-purple-600 bg-purple-100",
  };

  const content = (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-gradient-to-br",
      colorClasses[color],
      urgent && "ring-2 ring-red-200 animate-pulse"
    )}>
      {urgent && (
        <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-bl-lg">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
        </div>
      )}
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-semibold text-gray-700 tracking-tight">
          {title}
        </CardTitle>
        <div className={cn(
          "p-2.5 rounded-xl transition-all duration-300",
          iconColorClasses[color]
        )}>
          {icon}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-2">
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold text-gray-900 leading-none">
            {value}
          </div>
          {trend && (
            <div className={cn(
              "flex items-center text-xs font-medium px-2 py-1 rounded-full",
              trend.isPositive 
                ? "text-green-700 bg-green-100" 
                : "text-red-700 bg-red-100"
            )}>
              <TrendingUp className={cn(
                "w-3 h-3 mr-1",
                !trend.isPositive && "rotate-180"
              )} />
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-xs text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
        
        {link && (
          <div className="pt-1">
            <div className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
              Cliquer pour voir détails →
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return link ? (
    <Link href={link} className="group block">
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Commandes à Valider"
        value={stats.pendingValidationOrdersCount}
        icon={<ShoppingCart className="h-5 w-5" />}
        description="Commandes soumises par les services"
        color="blue"
        link="/dashboard/pharmacist/orders/pending"
        urgent={stats.pendingValidationOrdersCount > 10}
        trend={{ value: 12, isPositive: false }}
      />
      
      <StatCard
        title="Alertes Stock Faible"
        value={stats.lowStockCount}
        icon={<AlertTriangle className="h-5 w-5" />}
        description="Médicaments sous le seuil minimum"
        color="orange"
        link="/dashboard/pharmacist/medications?filter=low_stock"
        urgent={stats.lowStockCount > 5}
        trend={{ value: 8, isPositive: false }}
      />
      
      <StatCard
        title="Lots Proches Expiration"
        value={stats.expiringSoonCount}
        icon={<Clock className="h-5 w-5" />}
        description="Lots expirant dans les 30 prochains jours"
        color="red"
        link="/dashboard/pharmacist/batches?filter=expiring_soon_30"
        urgent={stats.expiringSoonCount > 0}
        trend={{ value: 5, isPositive: false }}
      />
      
      <StatCard
        title="Alertes Non Lues"
        value={stats.unreadAlertsCount}
        icon={<Bell className="h-5 w-5" />}
        description="Notifications importantes"
        color="purple"
        link="/dashboard/pharmacist/alerts"
        urgent={stats.unreadAlertsCount > 0}
      />
    </div>
  );
}