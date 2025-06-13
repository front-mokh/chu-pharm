"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Textarea,
} from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OrderForValidation } from "../../../pharmacist/orders/service";
import { formatDate, prettifyEnum } from "@/lib/utils";
import { OrderStatus, OrderItemStatus } from "@/generated/prisma";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Building2, 
  Package, 
  ClipboardList,
  CheckCircle,
  XCircle,
  AlertCircle,
  Truck,
  Clock,
  FileText,
  BarChart3,
  Play,
  CheckSquare,
  Send,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { 
  startOrderPreparation, 
  completeOrderPreparation, 
  deliverOrder 
} from "../../../pharmacist/orders/service";
import CustomDialog from "@/components/custom/CustomDialog";

interface OrderDetailPageProps {
  order: OrderForValidation;
  currentUserId: string;
}

export default function OrderDetailPage({ order, currentUserId }: OrderDetailPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [preparationNotes, setPreparationNotes] = useState("");
  const [completionNotes, setCompletionNotes] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [preparedQuantities, setPreparedQuantities] = useState<Record<string, number>>({});
  
  // Dialog state management
  const [isPreparationDialogOpen, setIsPreparationDialogOpen] = useState(false);
  const [isCompletionDialogOpen, setIsCompletionDialogOpen] = useState(false);
  const [isDeliveryDialogOpen, setIsDeliveryDialogOpen] = useState(false);
  
  // Initialize prepared quantities with validated quantities
  React.useEffect(() => {
    const initialQuantities: Record<string, number> = {};
    order.orderItems.forEach(item => {
      initialQuantities[item.id] = item.validatedQuantity || 0;
    });
    setPreparedQuantities(initialQuantities);
  }, [order.orderItems]);

  const getStatusVariant = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.SUBMITTED:
        return "secondary";
      case OrderStatus.VALIDATED:
        return "default";
      case OrderStatus.PARTIALLY_VALIDATED:
        return "outline";
      case OrderStatus.IN_PREPARATION:
        return "secondary";
      case OrderStatus.PREPARED:
        return "default";
      case OrderStatus.DELIVERED:
        return "default";
      case OrderStatus.CANCELLED:
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getItemStatusVariant = (status: OrderItemStatus) => {
    switch (status) {
      case OrderItemStatus.VALIDATED:
        return "default";
      case OrderItemStatus.PARTIALLY_VALIDATED:
        return "outline";
      case OrderItemStatus.NOT_AVAILABLE:
        return "destructive";
      case OrderItemStatus.PREPARED:
        return "default";
      case OrderItemStatus.DELIVERED:
        return "default";
      default:
        return "secondary";
    }
  };

  const getItemStatusIcon = (status: OrderItemStatus) => {
    switch (status) {
      case OrderItemStatus.VALIDATED:
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case OrderItemStatus.PARTIALLY_VALIDATED:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case OrderItemStatus.NOT_AVAILABLE:
        return <XCircle className="h-4 w-4 text-red-600" />;
      case OrderItemStatus.PREPARED:
        return <Package className="h-4 w-4 text-blue-600" />;
      case OrderItemStatus.DELIVERED:
        return <Truck className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const handleStartPreparation = async () => {
    setIsLoading(true);
    try {
      const result = await startOrderPreparation(
        order.id,
        currentUserId,
        preparationNotes || undefined
      );

      if (result.success) {
        toast.success(result.message);
        router.refresh();
        setPreparationNotes("");
        setIsPreparationDialogOpen(false);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Erreur lors de la mise en préparation");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompletePreparation = async () => {
    setIsLoading(true);
    try {
      // Prepare the items with their quantities
      const preparedItems = order.orderItems
        .filter(item => item.validatedQuantity && item.validatedQuantity > 0)
        .map(item => ({
          id: item.id,
          preparedQuantity: preparedQuantities[item.id] || 0
        }));

      const result = await completeOrderPreparation(
        order.id,
        currentUserId,
        preparedItems,
        completionNotes || undefined
      );

      if (result.success) {
        toast.success(result.message);
        router.refresh();
        setCompletionNotes("");
        setIsCompletionDialogOpen(false);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Erreur lors de la finalisation de la préparation");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelivery = async () => {
    setIsLoading(true);
    try {
      const result = await deliverOrder(
        order.id,
        currentUserId,
        deliveryNotes || undefined
      );

      if (result.success) {
        toast.success(result.message);
        router.refresh();
        setDeliveryNotes("");
        setIsDeliveryDialogOpen(false);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Erreur lors de la livraison");
    } finally {
      setIsLoading(false);
    }
  };

  const updatePreparedQuantity = (itemId: string, quantity: number) => {
    setPreparedQuantities(prev => ({
      ...prev,
      [itemId]: quantity
    }));
  };

  const totalItems = order.orderItems.length;
  const totalRequestedQuantity = order.orderItems.reduce(
    (sum, item) => sum + item.requestedQuantity,
    0
  );
  const totalValidatedQuantity = order.orderItems.reduce(
    (sum, item) => sum + (item.validatedQuantity || 0),
    0
  );
  const totalPreparedQuantity = order.orderItems.reduce(
    (sum, item) => sum + (item.preparedQuantity || 0),
    0
  );

  // Render the appropriate status change button
  const renderStatusChangeButton = () => {
    switch (order.status) {
      case OrderStatus.VALIDATED:
        return (
          <CustomDialog
            trigger={
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Play className="h-4 w-4 mr-2" />
                Commencer la préparation
              </Button>
            }
            title="Commencer la préparation"
            isOpen={isPreparationDialogOpen}
            onOpenChange={setIsPreparationDialogOpen}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Êtes-vous sûr de vouloir commencer la préparation de cette commande ?
              </p>
              
              <div className="space-y-2">
                <Label htmlFor="preparation-notes">Notes de préparation (optionnel)</Label>
                <Textarea
                  id="preparation-notes"
                  placeholder="Ajoutez des notes sur la préparation..."
                  value={preparationNotes}
                  onChange={(e) => setPreparationNotes(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsPreparationDialogOpen(false)}
                  disabled={isLoading}
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleStartPreparation}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Confirmer
                </Button>
              </div>
            </div>
          </CustomDialog>
        );

      case OrderStatus.IN_PREPARATION:
        return (
          <CustomDialog
            trigger={
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckSquare className="h-4 w-4 mr-2" />
                Finaliser la préparation
              </Button>
            }
            title="Finaliser la préparation"
            isOpen={isCompletionDialogOpen}
            onOpenChange={setIsCompletionDialogOpen}
          >
            <div className="space-y-6 max-h-[60vh] overflow-y-auto">
              <p className="text-muted-foreground">
                Spécifiez les quantités préparées pour chaque article
              </p>
              
              {/* Items preparation form */}
              <div className="space-y-4">
                <h4 className="font-semibold">Quantités préparées</h4>
                {order.orderItems
                  .filter(item => item.validatedQuantity && item.validatedQuantity > 0)
                  .map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{item.medication.commercialName}</p>
                      <p className="text-sm text-muted-foreground">
                        Validée: {item.validatedQuantity}
                      </p>
                    </div>
                    <div className="w-24">
                      <Input
                        type="number"
                        min="0"
                        max={item.validatedQuantity || 0}
                        value={preparedQuantities[item.id] || 0}
                        onChange={(e) => updatePreparedQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="text-center"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="completion-notes">Notes de finalisation (optionnel)</Label>
                <Textarea
                  id="completion-notes"
                  placeholder="Ajoutez des notes sur la finalisation..."
                  value={completionNotes}
                  onChange={(e) => setCompletionNotes(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsCompletionDialogOpen(false)}
                  disabled={isLoading}
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleCompletePreparation}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Finaliser la préparation
                </Button>
              </div>
            </div>
          </CustomDialog>
        );

      case OrderStatus.PREPARED:
        return (
          <CustomDialog
            trigger={
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Send className="h-4 w-4 mr-2" />
                Livrer la commande
              </Button>
            }
            title="Livrer la commande"
            isOpen={isDeliveryDialogOpen}
            onOpenChange={setIsDeliveryDialogOpen}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Êtes-vous sûr de vouloir marquer cette commande comme livrée ?
              </p>
              
              <div className="space-y-2">
                <Label htmlFor="delivery-notes">Notes de livraison (optionnel)</Label>
                <Textarea
                  id="delivery-notes"
                  placeholder="Ajoutez des notes sur la livraison..."
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsDeliveryDialogOpen(false)}
                  disabled={isLoading}
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleDelivery}
                  disabled={isLoading}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Confirmer la livraison
                </Button>
              </div>
            </div>
          </CustomDialog>
        );

      default:
        return null;
    }
  };

  console.log("order", order)
  return (
    <div className="min-h-screen bg-gray-50/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <Card className="shadow-lg">
          {/* Header Section */}
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Commande {order.orderNumber}
                    </CardTitle>
                    <CardDescription className="text-base">
                      Détails de la commande de médicaments
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={getStatusVariant(order.status)} className="text-sm px-3 py-1">
                  {prettifyEnum(order.status)}
                </Badge>
                {renderStatusChangeButton()}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Order Information Cards */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Informations générales</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Service</span>
                    <Building2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-lg font-bold text-blue-900">{order.service.name}</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-700">Demandeur</span>
                    <User className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-green-900">
                    {order.createdBy.firstName} {order.createdBy.lastName}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-700">Date de création</span>
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-lg font-bold text-purple-900">
                    {formatDate(order.createdAt)}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-700">Articles</span>
                    <ClipboardList className="h-4 w-4 text-orange-600" />
                  </div>
                  <p className="text-lg font-bold text-orange-900">{totalItems}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Timeline Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Chronologie</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="w-px h-8 bg-gray-300 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-semibold text-blue-900">Commande créée</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(order.createdAt)} par {order.createdBy.firstName} {order.createdBy.lastName}
                      </p>
                    </div>
                  </div>

                  {order.validatedAt && (
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        {(order.preparedAt || order.deliveredAt) && <div className="w-px h-8 bg-gray-300 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-semibold text-green-900">Commande validée</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(order.validatedAt)}
                          {order.validatedBy && ` par ${order.validatedBy.firstName} ${order.validatedBy.lastName}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {order.preparedAt && (
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        {order.deliveredAt && <div className="w-px h-8 bg-gray-300 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-semibold text-purple-900">Commande préparée</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(order.preparedAt)}
                          {order.preparedBy && ` par ${order.preparedBy.firstName} ${order.preparedBy.lastName}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {order.deliveredAt && (
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-orange-900">Commande livrée</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(order.deliveredAt)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            {/* Summary Statistics */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Résumé des quantités</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-blue-50 p-6 rounded-lg border">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {totalRequestedQuantity}
                  </div>
                  <div className="text-sm font-medium text-blue-700">
                    Quantité demandée
                  </div>
                </div>
                <div className="text-center bg-green-50 p-6 rounded-lg border">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {totalValidatedQuantity}
                  </div>
                  <div className="text-sm font-medium text-green-700">
                    Quantité validée
                  </div>
                </div>
                <div className="text-center bg-purple-50 p-6 rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {totalPreparedQuantity}
                  </div>
                  <div className="text-sm font-medium text-purple-700">
                    Quantité préparée
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Order Items */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Articles de la commande</h3>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Médicament</TableHead>
                      <TableHead className="font-semibold">DCI</TableHead>
                      <TableHead className="font-semibold">Forme</TableHead>
                      <TableHead className="font-semibold">Dosage</TableHead>
                      <TableHead className="text-center font-semibold">Demandée</TableHead>
                      <TableHead className="text-center font-semibold">Validée</TableHead>
                      <TableHead className="text-center font-semibold">Préparée</TableHead>
                      <TableHead className="text-center font-semibold">Stock</TableHead>
                      <TableHead className="text-center font-semibold">Statut</TableHead>
                      <TableHead className="font-semibold">Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.orderItems.map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50/50">
                        <TableCell className="font-medium">
                          {item.medication.commercialName}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.medication.dci}
                        </TableCell>
                        <TableCell>{prettifyEnum(item.medication.form)}</TableCell>
                        <TableCell>{item.medication.dosage}</TableCell>
                        <TableCell className="text-center font-mono font-semibold">
                          {item.requestedQuantity}
                        </TableCell>
                        <TableCell className="text-center font-mono font-semibold text-green-700">
                          {item.validatedQuantity || "-"}
                        </TableCell>
                        <TableCell className="text-center font-mono font-semibold text-purple-700">
                          {item.preparedQuantity || "-"}
                        </TableCell>
                        <TableCell className="text-center font-mono">
                          <span className={`px-2 py-1 rounded text-sm ${
                            (item.totalAvailableStock || 0) > 0 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.totalAvailableStock || 0}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            {getItemStatusIcon(item.status)}
                            <Badge variant={getItemStatusVariant(item.status)} className="text-xs">
                              {prettifyEnum(item.status)}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          {item.notes ? (
                            <span className="text-sm">{item.notes}</span>
                          ) : (
                            <span className="text-muted-foreground text-sm">-</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Notes Section */}
            {order.notes && (
              <>
                <Separator />
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Notes et commentaires</h3>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <div className="whitespace-pre-wrap text-sm text-amber-900 leading-relaxed">
                      {order.notes}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}