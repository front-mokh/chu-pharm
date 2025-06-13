"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  PackageCheck, 
  Truck, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  User,
  Calendar,
  FileText,
  Activity
} from "lucide-react";
import { OrderForValidation } from "../../pharmacist/orders/service";
import { OrderStatus, OrderItemStatus } from "@/generated/prisma";
import { 
  getValidatedOrders, 
  getOrdersInPreparation, 
  getPreparedOrders, 
  getDeliveredOrders,
  startOrderPreparation,
  completeOrderPreparation,
  deliverOrder
} from "../../pharmacist/orders/service";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface PreparatorDashboardProps {
  userId: string;
  userName: string;
}

interface DashboardStats {
  validatedOrders: number;
  inPreparationOrders: number;
  preparedOrders: number;
  deliveredOrders: number;
}

const statusConfig = {
  [OrderStatus.VALIDATED]: {
    label: "Validées",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: CheckCircle
  },
  [OrderStatus.IN_PREPARATION]: {
    label: "En Préparation",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
    icon: Package
  },
  [OrderStatus.PREPARED]: {
    label: "Préparées",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    icon: PackageCheck
  },
  [OrderStatus.DELIVERED]: {
    label: "Livrées",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: Truck
  }
};

export default function PreparatorDashboard({ userId, userName }: PreparatorDashboardProps) {
  const [stats, setStats] = useState<DashboardStats>({
    validatedOrders: 0,
    inPreparationOrders: 0,
    preparedOrders: 0,
    deliveredOrders: 0
  });
  
  const [validatedOrders, setValidatedOrders] = useState<OrderForValidation[]>([]);
  const [inPreparationOrders, setInPreparationOrders] = useState<OrderForValidation[]>([]);
  const [preparedOrders, setPreparedOrders] = useState<OrderForValidation[]>([]);
  const [deliveredOrders, setDeliveredOrders] = useState<OrderForValidation[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const [validated, inPreparation, prepared, delivered] = await Promise.all([
        getValidatedOrders(),
        getOrdersInPreparation(),
        getPreparedOrders(),
        getDeliveredOrders()
      ]);

      setValidatedOrders(validated);
      setInPreparationOrders(inPreparation);
      setPreparedOrders(prepared);
      setDeliveredOrders(delivered);

      setStats({
        validatedOrders: validated.length,
        inPreparationOrders: inPreparation.length,
        preparedOrders: prepared.length,
        deliveredOrders: delivered.length
      });
    } catch (error) {
      console.error("Error fetching preparator data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartPreparation = async (orderId: string) => {
    setActionLoading(orderId);
    try {
      const result = await startOrderPreparation(orderId, userId);
      if (result.success) {
        await fetchData(); // Refresh data
      } else {
        alert(result.error || "Erreur lors du démarrage de la préparation");
      }
    } catch (error) {
      console.error("Error starting preparation:", error);
      alert("Erreur lors du démarrage de la préparation");
    } finally {
      setActionLoading(null);
    }
  };

  const handleCompletePreparation = async (orderId: string, orderItems: any[]) => {
    setActionLoading(orderId);
    try {
      // For simplicity, we'll set prepared quantity equal to validated quantity
      const preparedItems = orderItems
        .filter(item => item.status === OrderItemStatus.VALIDATED || item.status === OrderItemStatus.PARTIALLY_VALIDATED)
        .map(item => ({
          id: item.id,
          preparedQuantity: item.validatedQuantity || 0
        }));

      const result = await completeOrderPreparation(orderId, userId, preparedItems);
      if (result.success) {
        await fetchData(); // Refresh data
      } else {
        alert(result.error || "Erreur lors de la finalisation de la préparation");
      }
    } catch (error) {
      console.error("Error completing preparation:", error);
      alert("Erreur lors de la finalisation de la préparation");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeliverOrder = async (orderId: string) => {
    setActionLoading(orderId);
    try {
      const result = await deliverOrder(orderId, userId);
      if (result.success) {
        await fetchData(); // Refresh data
      } else {
        alert(result.error || "Erreur lors de la livraison");
      }
    } catch (error) {
      console.error("Error delivering order:", error);
      alert("Erreur lors de la livraison");
    } finally {
      setActionLoading(null);
    }
  };

  const getOrderItemsSummary = (order: OrderForValidation) => {
    const totalItems = order.orderItems.length;
    const validatedItems = order.orderItems.filter(item => 
      item.status === OrderItemStatus.VALIDATED || 
      item.status === OrderItemStatus.PARTIALLY_VALIDATED
    ).length;
    
    return { totalItems, validatedItems };
  };

  const OrderCard = ({ 
    order, 
    showAction, 
    actionLabel, 
    actionIcon: ActionIcon,
    onAction 
  }: {
    order: OrderForValidation;
    showAction?: boolean;
    actionLabel?: string;
    actionIcon?: any;
    onAction?: () => void;
  }) => {
    const { totalItems, validatedItems } = getOrderItemsSummary(order);
    const config = statusConfig[order.status];

    return (
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${config.bgColor}`}>
                <config.icon className={`h-5 w-5 ${config.textColor}`} />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">
                  Commande #{order.id.slice(-8)}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 mt-1">
                  <span className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{order.service.name}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(order.createdAt), "dd MMM yyyy", { locale: fr })}</span>
                  </span>
                </CardDescription>
              </div>
            </div>
            <Badge variant="outline" className={`${config.textColor} ${config.bgColor}`}>
              {config.label}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Articles</span>
              <span className="font-medium">{totalItems} article(s)</span>
            </div>
            
            {order.status !== OrderStatus.DELIVERED && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Articles validés</span>
                <span className="font-medium text-green-600">{validatedItems}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Demandé par</span>
              <span className="font-medium">
                {order.createdBy.firstName} {order.createdBy.lastName}
              </span>
            </div>

            {order.notes && (
              <div className="flex items-start space-x-2 text-sm">
                <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <span className="text-muted-foreground">Notes:</span>
                  <p className="text-sm mt-1 text-foreground">{order.notes}</p>
                </div>
              </div>
            )}

            {showAction && actionLabel && ActionIcon && onAction && (
              <Button 
                onClick={onAction}
                className="w-full"
                disabled={actionLoading === order.id}
              >
                {actionLoading === order.id ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Traitement...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <ActionIcon className="h-4 w-4" />
                    <span>{actionLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-lg font-medium">Chargement du tableau de bord...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Tableau de Bord Préparateur
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue {userName}, gérez vos préparations de commandes
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Activity className="h-5 w-5" />
              <span>Dernière mise à jour: {format(new Date(), "HH:mm", { locale: fr })}</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(stats).map(([key, value]) => {
            const statusKey = key.replace('Orders', '').toUpperCase().replace('VALIDATED', 'VALIDATED').replace('INPREPARATION', 'IN_PREPARATION') as keyof typeof statusConfig;
            const config = statusConfig[statusKey];
            
            return (
              <Card key={key} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {config.label}
                      </p>
                      <p className="text-3xl font-bold">{value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${config.bgColor}`}>
                      <config.icon className={`h-6 w-6 ${config.textColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Orders Tabs */}
        <Tabs defaultValue="validated" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white rounded-lg shadow-sm p-1">
            <TabsTrigger value="validated" className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Validées ({stats.validatedOrders})</span>
            </TabsTrigger>
            <TabsTrigger value="inpreparation" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>En Préparation ({stats.inPreparationOrders})</span>
            </TabsTrigger>
            <TabsTrigger value="prepared" className="flex items-center space-x-2">
              <PackageCheck className="h-4 w-4" />
              <span>Préparées ({stats.preparedOrders})</span>
            </TabsTrigger>
            <TabsTrigger value="delivered" className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>Livrées ({stats.deliveredOrders})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="validated" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Commandes Validées</h2>
              {validatedOrders.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Aucune commande validée à préparer</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {validatedOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      showAction
                      actionLabel="Commencer Préparation"
                      actionIcon={Package}
                      onAction={() => handleStartPreparation(order.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="inpreparation" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Commandes en Préparation</h2>
              {inPreparationOrders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Aucune commande en cours de préparation</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {inPreparationOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      showAction
                      actionLabel="Finaliser Préparation"
                      actionIcon={PackageCheck}
                      onAction={() => handleCompletePreparation(order.id, order.orderItems)}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="prepared" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Commandes Préparées</h2>
              {preparedOrders.length === 0 ? (
                <div className="text-center py-12">
                  <PackageCheck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Aucune commande préparée en attente</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {preparedOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      showAction
                      actionLabel="Livrer"
                      actionIcon={Truck}
                      onAction={() => handleDeliverOrder(order.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="delivered" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Commandes Livrées</h2>
              {deliveredOrders.length === 0 ? (
                <div className="text-center py-12">
                  <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Aucune commande livrée récemment</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {deliveredOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}