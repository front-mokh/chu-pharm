"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {

  Edit,
  Trash2,
  Send,
  Package,
  User,
  Calendar,
  FileText,
  AlertCircle,
 
} from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { Order, OrderItem, Medication, OrderStatus, OrderItemStatus } from "@/generated/prisma";
import { submitOrder } from "../service";
import DeleteOrderDialog from "../DeleteOrderDialog";

interface OrderDetailPageProps {
  order: Order & {
    orderItems: (OrderItem & { medication: Medication })[];
    service: { id: string; name: string };
    createdBy: { id: string; firstName: string; lastName: string };
    validatedBy?: { id: string; firstName: string; lastName: string } | null;
    preparedBy?: { id: string; firstName: string; lastName: string } | null;
  };
}

const statusLabels: Record<OrderStatus, string> = {
  DRAFT: "Brouillon",
  SUBMITTED: "Soumise",
  VALIDATED: "Validée",
  PARTIALLY_VALIDATED: "Partiellement validée",
  IN_PREPARATION: "En préparation",
  PREPARED: "Préparée",
  DELIVERED: "Livrée",
  CANCELLED: "Annulée",
};

const statusBadgeColor: Record<OrderStatus, string> = {
  DRAFT: "bg-gray-100 text-gray-800",
  SUBMITTED: "bg-blue-100 text-blue-800",
  VALIDATED: "bg-green-100 text-green-800",
  PARTIALLY_VALIDATED: "bg-yellow-100 text-yellow-800",
  IN_PREPARATION: "bg-orange-100 text-orange-800",
  PREPARED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-200 text-green-900",
  CANCELLED: "bg-red-100 text-red-800",
};

const itemStatusLabels: Record<OrderItemStatus, string> = {
  PENDING: "En attente",
  VALIDATED: "Validé",
  PARTIALLY_VALIDATED: "Partiellement validé",
  NOT_AVAILABLE: "Non disponible",
  PREPARED: "Préparé",
  DELIVERED: "Livré",
};

const itemStatusColors: Record<OrderItemStatus, string> = {
  PENDING: "bg-gray-100 text-gray-800",
  VALIDATED: "bg-green-100 text-green-800",
  PARTIALLY_VALIDATED: "bg-yellow-100 text-yellow-800",
  NOT_AVAILABLE: "bg-red-100 text-red-800",
  PREPARED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-200 text-green-900",
};

// Custom compact notes component
const CompactNotesCard = ({ notes }: { notes: string }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="px-4 py-2 border-b border-gray-100">
        <h3 className="flex items-center gap-2 text-sm font-medium text-gray-900">
          <FileText className="w-4 h-4 text-gray-600" />
          Remarques
        </h3>
      </div>
      <div className="p-3">
        <div className="max-h-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
            {notes}
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for item notes with expandable functionality
const ItemNotes = ({ notes }: { notes?: string | null }) => {
  if (!notes) return <span className="text-gray-400">—</span>;
  
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 50;
  const needsExpansion = notes.length > maxLength;

  if (!needsExpansion) {
    return <span className="text-gray-700">{notes}</span>;
  }

  return (
    <div className="space-y-1">
      <p className="text-gray-700 text-sm leading-relaxed">
        {isExpanded ? notes : `${notes.substring(0, maxLength)}...`}
      </p>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-700 p-0 h-auto text-xs font-normal"
      >
        {isExpanded ? "Réduire" : "Voir plus"}
      </Button>
    </div>
  );
};

export default function OrderDetailPage({ order }: OrderDetailPageProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canEdit = order.status === "DRAFT";
  const canSubmit = order.status === "DRAFT" && order.orderItems.length > 0;
  const canDelete = order.status === "DRAFT";

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitOrder(order.id);
      if (result.success) {
        toast.success("Commande soumise avec succès !");
        router.refresh();
      } else {
        toast.error(result.error || "Erreur lors de la soumission.");
      }
    } catch (error) {
      console.error("Submit order error:", error);
      toast.error("Erreur serveur lors de la soumission.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="h-full p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
       
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Commande {order.orderNumber}
            </h1>
            <p className="text-sm text-gray-600">
              Créée le {format(new Date(order.createdAt), "dd MMMM yyyy à HH:mm", { locale: fr })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge className={statusBadgeColor[order.status]}>
            {statusLabels[order.status]}
          </Badge>
          
          {canEdit && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/coordinator/orders/${order.id}/edit`)}
            >
              <Edit className="w-4 h-4 mr-2" />
              Modifier
            </Button>
          )}

          {canSubmit && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  Soumettre
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirmer la soumission</AlertDialogTitle>
                  <AlertDialogDescription>
                    Êtes-vous sûr de vouloir soumettre cette commande ? 
                    Une fois soumise, vous ne pourrez plus la modifier.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction onClick={handleSubmitOrder}>
                    Soumettre
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          {canDelete && (
            <DeleteOrderDialog 
              trigger={
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer
                </Button>
              } 
              order={order} 
            />
          )}
        </div>
      </div>

      {/* Order Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-medium">{order.service.name}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Créée par</p>
                <p className="font-medium">
                  {order.createdBy.firstName} {order.createdBy.lastName}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Articles</p>
                <p className="font-medium">{order.orderItems.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Package className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Quantité totale</p>
                <p className="font-medium">{totalRequestedQuantity}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Notes - Custom compact component */}
      {order.notes && (
        <CompactNotesCard notes={order.notes} />
      )}

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Articles de la commande</CardTitle>
          <CardDescription>
            Liste des médicaments demandés dans cette commande
          </CardDescription>
        </CardHeader>
        <CardContent>
          {order.orderItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Aucun article dans cette commande</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Médicament</TableHead>
                    <TableHead>DCI</TableHead>
                    <TableHead>Forme & Dosage</TableHead>
                    <TableHead className="text-center">Demandé</TableHead>
                    {order.status !== "DRAFT" && order.status !== "SUBMITTED" && (
                      <>
                        <TableHead className="text-center">Validé</TableHead>
                        {(order.status === "PREPARED" || order.status === "DELIVERED") && (
                          <TableHead className="text-center">Préparé</TableHead>
                        )}
                      </>
                    )}
                    <TableHead className="text-center">Statut</TableHead>
                    <TableHead className="min-w-[150px]">Remarques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.orderItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.medication.commercialName}
                      </TableCell>
                      <TableCell>{item.medication.dci}</TableCell>
                      <TableCell>
                        {item.medication.form} - {item.medication.dosage}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.requestedQuantity}
                      </TableCell>
                      {order.status !== "DRAFT" && order.status !== "SUBMITTED" && (
                        <>
                          <TableCell className="text-center">
                            {item.validatedQuantity ?? "—"}
                          </TableCell>
                          {(order.status === "PREPARED" || order.status === "DELIVERED") && (
                            <TableCell className="text-center">
                              {item.preparedQuantity ?? "—"}
                            </TableCell>
                          )}
                        </>
                      )}
                      <TableCell className="text-center">
                        <Badge className={itemStatusColors[item.status]}>
                          {itemStatusLabels[item.status]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <ItemNotes notes={item.notes} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary for validated/prepared orders */}
      {(order.status === "VALIDATED" || order.status === "PARTIALLY_VALIDATED" || 
        order.status === "PREPARED" || order.status === "DELIVERED") && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Résumé des quantités</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Quantité demandée</p>
                <p className="text-2xl font-bold text-blue-600">{totalRequestedQuantity}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Quantité validée</p>
                <p className="text-2xl font-bold text-green-600">{totalValidatedQuantity}</p>
              </div>
              {(order.status === "PREPARED" || order.status === "DELIVERED") && (
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Quantité préparée</p>
                  <p className="text-2xl font-bold text-purple-600">{totalPreparedQuantity}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Validation and Preparation Info */}
      {(order.validatedBy || order.preparedBy) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Historique des actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {order.validatedBy && order.validatedAt && (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Validée par</p>
                  <p className="font-medium">
                    {order.validatedBy.firstName} {order.validatedBy.lastName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(order.validatedAt), "dd MMMM yyyy à HH:mm", { locale: fr })}
                  </p>
                </div>
              </div>
            )}
            
            {order.preparedBy && order.preparedAt && (
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <User className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Préparée par</p>
                  <p className="font-medium">
                    {order.preparedBy.firstName} {order.preparedBy.lastName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(order.preparedAt), "dd MMMM yyyy à HH:mm", { locale: fr })}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}