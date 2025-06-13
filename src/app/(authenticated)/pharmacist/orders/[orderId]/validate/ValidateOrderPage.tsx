"use client";

import React, { useState, useMemo } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Trash2,
  Loader2,
  CheckCircle,
  AlertCircle,
  Eye,
  Package,
  ChevronDown,
  ChevronRight,
  List,
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
import NumberField from "../../../../../../components/custom/NumberField";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../../../../../components/ui/select";
import { Badge } from "../../../../../../components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "../../../../../../components/ui/alert";

import {
  Medication,
  Order,
  OrderItem,
  OrderItemStatus,
} from "../../../../../../generated/prisma";
import { validateOrder } from "../../service";
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

// Separate component for order item validation
interface OrderItemValidationProps {
  field: {
    id: string;
    medicationId: string;
    requestedQuantity: number;
    validatedQuantity: number;
    status: OrderItemStatus;
    medicationName: string;
  };
  index: number;
  orderItem: OrderItemWithMedication;
  form: any;
  onStatusChange: (index: number, newStatus: OrderItemStatus) => void;
  onRemove: (index: number) => void;
}

function OrderItemValidation({
  field,
  index,
  orderItem,
  form,
  onStatusChange,
  onRemove,
}: OrderItemValidationProps) {
  const availableStock = orderItem.totalAvailableStock || 0;
  const medication = orderItem.medication;

  const getItemStatusBadge = (status: OrderItemStatus) => {
    switch (status) {
      case OrderItemStatus.VALIDATED:
        return <Badge className="bg-green-100 text-green-700">Validé</Badge>;
      case OrderItemStatus.PARTIALLY_VALIDATED:
        return (
          <Badge className="bg-yellow-100 text-yellow-700">
            Partiellement validé
          </Badge>
        );
      case OrderItemStatus.NOT_AVAILABLE:
        return <Badge className="bg-red-100 text-red-700">Non disponible</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Médicament info - Enhanced */}
        <div className="lg:col-span-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Médicament
          </label>
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">
                  {medication.commercialName}
                </div>
                <div className="text-xs text-gray-600">
                  DCI: {medication.dci}
                </div>
                <div className="text-xs text-gray-600">
                  {medication.dosage} - {medication.form}
                </div>
                {medication.manufacturer && (
                  <div className="text-xs text-gray-500">
                    Fabricant: {medication.manufacturer}
                  </div>
                )}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() =>
                  toast.info(`Détails de ${medication.commercialName} – À implémenter`)
                }
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Stock info with better visibility */}
            <div className={`text-xs p-2 rounded ${
              availableStock >= field.requestedQuantity 
                ? 'bg-green-50 text-green-700' 
                : 'bg-red-50 text-red-700'
            }`}>
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3" />
                Stock disponible: {availableStock}
              </div>
            </div>
          </div>
        </div>

        {/* Quantités */}
        <div className="lg:col-span-2">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Quantité demandée
          </label>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-center font-medium text-blue-800">
            {field.requestedQuantity}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <NumberField
            control={form.control}
            name={`validatedItems.${index}.validatedQuantity`}
            label="Quantité validée"
            min={0}
            max={Math.min(field.requestedQuantity, availableStock)}
          />
        </div>

        {/* Statut */}
        <div className="lg:col-span-3">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Statut
          </label>
          <Select
            value={form.watch(`validatedItems.${index}.status`)}
            onValueChange={(val) =>
              onStatusChange(index, val as OrderItemStatus)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={OrderItemStatus.VALIDATED}>
                Validé
              </SelectItem>
              <SelectItem value={OrderItemStatus.PARTIALLY_VALIDATED}>
                Partiellement validé
              </SelectItem>
              <SelectItem value={OrderItemStatus.NOT_AVAILABLE}>
                Non disponible
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Supprimer */}
        <div className="lg:col-span-1 flex items-end justify-end">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onRemove(index)}
            className="hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </div>
      </div>

      {/* Avertissement stock & badge */}
      <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-2">
          {availableStock < field.requestedQuantity && (
            <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              ⚠️ Stock insuffisant ({availableStock} dispo, {field.requestedQuantity} demandé)
            </div>
          )}
          
          {/* Show batch info if available */}
          {medication.batches && medication.batches.length > 0 && (
            <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
              {medication.batches.length} lot(s) disponible(s)
            </div>
          )}
        </div>
        
        <div>
          {getItemStatusBadge(form.watch(`validatedItems.${index}.status`))}
        </div>
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
  const [showMedications, setShowMedications] = useState(true);

  // Debug: Log the order data to console
  // console.log("Order data:", order);
  // console.log("Order items:", order.orderItems);

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
          router.push("/dashboard/pharmacist/orders");
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

  const handleStatusChange = (index: number, newStatus: OrderItemStatus) => {
    const current = form.getValues(`validatedItems.${index}`);
    if (newStatus === OrderItemStatus.NOT_AVAILABLE) {
      form.setValue(`validatedItems.${index}.validatedQuantity`, 0);
    } else if (
      newStatus === OrderItemStatus.VALIDATED &&
      current.validatedQuantity === 0
    ) {
      form.setValue(
        `validatedItems.${index}.validatedQuantity`,
        current.requestedQuantity
      );
    }
    form.setValue(`validatedItems.${index}.status`, newStatus);
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

  return (
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
                            <th className="text-center py-3 px-4 font-medium text-gray-700 text-sm">
                              Statut
                            </th>
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
                              <td className="py-3 px-4 text-center">
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
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Debug Information - Remove this after fixing */}
              {/* <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h5 className="font-medium text-gray-700 mb-2">Debug Info:</h5>
                <div className="text-xs space-y-1">
                  <div>Fields count: {fields.length}</div>
                  <div>Order items count: {order.orderItems.length}</div>
                  <div>Field IDs: {fields.map(f => f.id).join(', ')}</div>
                  <div>Order item IDs: {order.orderItems.map(item => item.id).join(', ')}</div>
                </div>
              </div> */}

              {/* Validation Section */}
              {/* <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Validation des médicaments
                  </h4>
                  <span className="text-sm text-gray-500">
                    Modifiez les quantités et statuts ci-dessous
                  </span>
                </div>
                
                <div className="space-y-4">
                  {fields.map((field, idx) => {
                    console.log(`Processing field ${idx}:`, field);
                    
                    // Use the map instead of find for better reliability
                    const orderItem = orderItemsMap.get(field.id);
                    console.log(`Found order item for ${field.id}:`, orderItem);
                    
                    if (!orderItem) {
                      console.error(`Order item not found for field id: ${field.id}`);
                      console.error('Available order item IDs:', Array.from(orderItemsMap.keys()));
                      
                      return (
                        <div key={field.id} className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-700 text-sm">
                            ⚠️ Erreur: Médicament non trouvé (Field ID: {field.id})
                          </p>
                          <div className="text-red-600 text-xs mt-2 space-y-1">
                            <div>Available IDs: {Array.from(orderItemsMap.keys()).join(', ')}</div>
                            <div>Field ID: {field.id}</div>
                            <div>Field type: {typeof field.id}</div>
                            <div>Fields length: {fields.length}</div>
                            <div>Map size: {orderItemsMap.size}</div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <OrderItemValidation
                        key={field.id}
                        field={field}
                        index={idx}
                        orderItem={orderItem}
                        form={form}
                        onStatusChange={handleStatusChange}
                        onRemove={remove}
                      />
                    );
                  })}
                </div>
              </div> */}
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
            <Button
              type="button"
              variant="ghost"
              disabled={isValidating}
              onClick={() => router.back()}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={isValidating || fields.length === 0}
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
  );
}