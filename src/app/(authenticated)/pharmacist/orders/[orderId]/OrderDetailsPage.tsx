"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderForValidation } from "../../../pharmacist/orders/service";
import { formatDate, prettifyEnum } from "@/lib/utils";
import { OrderStatus, OrderItemStatus } from "@/generated/prisma";
import { 
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
  BarChart3
} from "lucide-react";

interface OrderDetailPageProps {
  order: OrderForValidation;
}

export default function OrderDetailPage({ order }: OrderDetailPageProps) {
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

            {/* Status Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Statut de la commande</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusVariant(order.status)} className="text-sm">
                        {prettifyEnum(order.status)}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Créée le:</span>
                        <span className="font-medium">{formatDate(order.createdAt)}</span>
                      </div>
                      
                      {order.validatedAt && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Validée le:</span>
                          <span className="font-medium">{formatDate(order.validatedAt)}</span>
                        </div>
                      )}
                      
                      {order.preparedAt && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Préparée le:</span>
                          <span className="font-medium">{formatDate(order.preparedAt)}</span>
                        </div>
                      )}
                      
                      {order.deliveredAt && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Livrée le:</span>
                          <span className="font-medium">{formatDate(order.deliveredAt)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Personnel impliqué</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Créée par:</span>
                        <span className="font-medium">
                          {order.createdBy.firstName} {order.createdBy.lastName}
                        </span>
                      </div>
                      
                      {order.validatedBy && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Validée par:</span>
                          <span className="font-medium">
                            {order.validatedBy.firstName} {order.validatedBy.lastName}
                          </span>
                        </div>
                      )}
                      
                      {order.preparedBy && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Préparée par:</span>
                          <span className="font-medium">
                            {order.preparedBy.firstName} {order.preparedBy.lastName}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
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