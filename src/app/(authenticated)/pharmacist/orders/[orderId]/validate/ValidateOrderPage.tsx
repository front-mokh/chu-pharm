"use client";

import React, { useState, useMemo } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Package,
  ChevronDown,
  ChevronRight,
  List,
  X,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";
import { Form } from "../../../../../../components/ui/form";
import { Badge } from "../../../../../../components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "../../../../../../components/ui/alert";
import { Textarea } from "../../../../../../components/ui/textarea";
import CustomDialog from "@/components/custom/CustomDialog";


import {
  Medication,
  Order,
  OrderItem,
  OrderItemStatus,
} from "../../../../../../generated/prisma";
import { validateOrder } from "../../service";
import { cancelOrder } from "../../service";
import { formatDate } from "../../../../../../lib/utils";

// Enhanced type definitions
interface MedicationWithBatches extends Medication {
  batches: Array<{
    id: string;
    batchNumber: string;
    expirationDate: Date;
    currentQuantity: number;
  }>;
}

interface OrderItemWithMedication extends OrderItem {
  medication: MedicationWithBatches;
  totalAvailableStock: number;
}

interface OrderWithDetails extends Order {
  orderItems: OrderItemWithMedication[];
  service: { id: string; name: string };
  createdBy: { id: string; firstName: string; lastName: string };
}

const validateOrderSchema = z.object({
  validatedItems: z
    .array(
      z.object({
        id: z.string(),
        medicationId: z.string(),
        requestedQuantity: z.number(),
        validatedQuantity: z
          .number()
          .min(0, "La quantité doit être ≥ 0"),
        status: z.nativeEnum(OrderItemStatus),
        medicationName: z.string(),
      })
    )
    .min(1, "Au moins un médicament doit être validé"),
});

type ValidateOrderFormInput = z.infer<typeof validateOrderSchema>;

interface ValidateOrderPageProps {
  order: OrderWithDetails;
  pharmacistId: string;
}

// Enhanced Cancel Order Dialog Content Component
interface CancelOrderContentProps {
  onConfirm: (reason: string) => void;
  isLoading: boolean;
  orderNumber: string;
  onClose: () => void;
}

function CancelOrderContent({ 
  onConfirm, 
  isLoading, 
  orderNumber,
  onClose 
}: CancelOrderContentProps) {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    onConfirm(reason.trim());
  };

  return (
    <div className="space-y-6">
      {/* Warning Section */}
      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-red-800 mb-1">
            Attention : Action irréversible
          </h4>
          <p className="text-sm text-red-700">
            Vous êtes sur le point d'annuler définitivement la commande{" "}
            <span className="font-semibold">{orderNumber}</span>. 
            Cette action ne peut pas être annulée.
          </p>
        </div>
      </div>

      {/* Reason Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          Raison de l'annulation
          <span className="text-gray-400 font-normal ml-1">(optionnel)</span>
        </label>
        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Expliquez pourquoi cette commande est annulée (ex: stock insuffisant, médicament périmé, erreur de commande...)"
          className="min-h-[100px] resize-none"
          disabled={isLoading}
        />
        <p className="text-xs text-gray-500">
          Cette information sera enregistrée dans l'historique de la commande.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isLoading}
          className="flex-1 sm:flex-none"
        >
          Annuler
        </Button>
        <Button
          type="button"
          variant="destructive"
          onClick={handleConfirm}
          disabled={isLoading}
          className="flex-1 sm:flex-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Annulation en cours...
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 mr-2" />
              Confirmer l'annulation
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default function ValidateOrderPage({
  order,
  pharmacistId,
}: ValidateOrderPageProps) {
  const router = useRouter();
  const [isValidating, setIsValidating] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showMedications, setShowMedications] = useState(true);

  // Create a lookup map for better performance and reliability
  const orderItemsMap = useMemo(() => {
    const map = new Map();
    order.orderItems.forEach(item => {
      map.set(item.id, item);
      console.log(`Added to map: ${item.id}`, item);
    });
    console.log('Created order items map:', map);
    return map;
  }, [order.orderItems]);

  const form = useForm<ValidateOrderFormInput>({
    resolver: zodResolver(validateOrderSchema),
    defaultValues: {
      validatedItems: order.orderItems.map((item) => {
        console.log('Processing order item for form:', item);
        
        // Enhanced medication name with more details
        const medicationName = item.medication 
          ? `${item.medication.commercialName} (${item.medication.dci}) – ${item.medication.dosage} ${item.medication.form}`
          : `Médicament ID: ${item.medicationId}`;
          
        const formItem = {
          id: item.id,
          medicationId: item.medicationId,
          requestedQuantity: item.requestedQuantity,
          validatedQuantity: item.requestedQuantity,
          status: OrderItemStatus.VALIDATED,
          medicationName,
        };
        
        console.log('Created form item:', formItem);
        return formItem;
      }),
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "validatedItems",
  });

  console.log('Form fields:', fields);
  console.log('Order items map keys:', Array.from(orderItemsMap.keys()));

  const onSubmit = async (values: ValidateOrderFormInput) => {
    setIsValidating(true);
    try {
      const validatedItems = values.validatedItems.map((item) => ({
        id: item.id,
        validatedQuantity: item.validatedQuantity,
        status: item.status,
      }));

      const result = await validateOrder(
        order.id,
        pharmacistId,
        validatedItems
      );

      if (result.success) {
        toast.success("Commande validée avec succès !");
        setTimeout(() => {
          router.push("/pharmacist/orders/pending");
          router.refresh();
        }, 1000);
      } else {
        toast.error(result.error || "Erreur lors de la validation.");
      }
    } catch (err) {
      console.error("Validate order error:", err);
      toast.error("Erreur serveur lors de la validation.");
    } finally {
      setIsValidating(false);
    }
  };

  // Handle order cancellation
  const handleCancelOrder = async (reason: string) => {
    setIsCancelling(true);
    try {
      const result = await cancelOrder(
        order.id,
        pharmacistId,
        reason || undefined
      );

      if (result.success) {
        toast.success("Commande annulée avec succès !");
        setShowCancelDialog(false);
        setTimeout(() => {
          router.push("/pharmacist/orders/pending");
          router.refresh();
        }, 1000);
      } else {
        toast.error(result.error || "Erreur lors de l'annulation.");
      }
    } catch (err) {
      console.error("Cancel order error:", err);
      toast.error("Erreur serveur lors de l'annulation.");
    } finally {
      setIsCancelling(false);
    }
  };

  const handleCloseCancelDialog = () => {
    if (!isCancelling) {
      setShowCancelDialog(false);
    }
  };

  const isPartialValidation = () => {
    const items = form.getValues("validatedItems");
    return items.some(
      (i) =>
        i.status === OrderItemStatus.PARTIALLY_VALIDATED ||
        i.status === OrderItemStatus.NOT_AVAILABLE ||
        i.validatedQuantity < i.requestedQuantity
    );
  };

  // Calculate totals for display
  const totalItems = order.orderItems.length;
  const totalRequestedQuantity = order.orderItems.reduce((sum, item) => sum + item.requestedQuantity, 0);

  // Check if any action is in progress
  const isActionInProgress = isValidating || isCancelling;

  return (
    <>
      <Card className="h-full shadow-sm border-gray-200">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <CardHeader className="bg-green-50 rounded-t-lg pb-6">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Validation de la commande {order.orderNumber}
              </CardTitle>
              <CardDescription className="text-green-600">
                Service: {order.service.name} | Demandeur:{" "}
                {order.createdBy.firstName} {order.createdBy.lastName} | Soumise
                le: {formatDate(order.createdAt)}
              </CardDescription>
              
              {/* Summary stats */}
              <div className="flex gap-4 mt-2 text-sm">
                <span className="bg-white px-2 py-1 rounded text-green-700">
                  {totalItems} médicament(s) différent(s)
                </span>
                <span className="bg-white px-2 py-1 rounded text-green-700">
                  {totalRequestedQuantity} unité(s) demandée(s)
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 flex-grow pt-6">
              {order.notes && (
                <Alert className="bg-blue-50 border-blue-200">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-800">
                    Remarques de la commande
                  </AlertTitle>
                  <AlertDescription className="text-blue-700">
                    {order.notes}
                  </AlertDescription>
                </Alert>
              )}

              {/* Collapsible Medications Summary */}
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors"
                  onClick={() => setShowMedications(!showMedications)}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {showMedications ? (
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      )}
                      <List className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Médicaments soumis
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cliquez pour {showMedications ? 'masquer' : 'afficher'} la liste des médicaments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-700">
                        {fields.length} médicament{fields.length > 1 ? 's' : ''}
                      </div>
                      <div className="text-xs text-gray-500">
                        {fields.reduce((sum, field) => sum + field.requestedQuantity, 0)} unités au total
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                {showMedications && (
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    {fields.length === 0 ? (
                      <div className="p-8 text-center">
                        <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">Aucun médicament à valider</p>
                        <p className="text-gray-400 text-sm mt-1">
                          Cette commande ne contient aucun article.
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                                #
                              </th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                                Médicament
                              </th>
                              <th className="text-center py-3 px-4 font-medium text-gray-700 text-sm">
                                Quantité demandée
                              </th>
                              {/* <th className="text-center py-3 px-4 font-medium text-gray-700 text-sm">
                                Statut
                              </th> */}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {fields.map((field, idx) => (
                              <tr key={field.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4">
                                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-blue-700">
                                      {idx + 1}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="max-w-md">
                                    <div className="font-medium text-gray-900 text-sm leading-tight">
                                      {field.medicationName}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      ID: {field.medicationId.slice(0, 8)}...
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                  <div className="inline-flex items-center justify-center w-12 h-8 bg-green-100 text-green-800 rounded-full font-semibold text-sm">
                                    {field.requestedQuantity}
                                  </div>
                                </td>
                                {/* <td className="py-3 px-4 text-center">
                                  <Badge className={
                                    field.status === 'VALIDATED' 
                                      ? 'bg-green-100 text-green-700' 
                                      : field.status === 'PARTIALLY_VALIDATED'
                                      ? 'bg-yellow-100 text-yellow-700'
                                      : 'bg-red-100 text-red-700'
                                  }>
                                    {field.status === 'VALIDATED' && 'Validé'}
                                    {field.status === 'PARTIALLY_VALIDATED' && 'Partiel'}
                                    {field.status === 'NOT_AVAILABLE' && 'Indisponible'}
                                  </Badge>
                                </td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {isPartialValidation() && (
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">
                    Validation partielle détectée
                  </AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Certains articles ont été modifiés ou marqués comme non
                    disponibles. Cette commande sera partiellement validée.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-6">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  disabled={isActionInProgress}
                  onClick={() => router.back()}
                >
                  Retour
                </Button>
                
                {/* Enhanced Cancel Button with CustomDialog */}
                <CustomDialog
                  trigger={
                    <Button
                      type="button"
                      variant="destructive"
                      disabled={isActionInProgress}
                      className="flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Annuler la commande
                    </Button>
                  }
                  title="Annulation de la commande"
                  isOpen={showCancelDialog}
                  onOpenChange={setShowCancelDialog}
                >
                  <CancelOrderContent
                    onConfirm={handleCancelOrder}
                    isLoading={isCancelling}
                    orderNumber={order.orderNumber}
                    onClose={handleCloseCancelDialog}
                  />
                </CustomDialog>
              </div>
              
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700"
                disabled={isActionInProgress || fields.length === 0}
              >
                {isValidating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Validation en cours...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {isPartialValidation()
                      ? "Valider partiellement"
                      : "Valider la commande"}
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}