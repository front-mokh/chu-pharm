"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Trash2,
  Loader2,
  CheckCircle,
  AlertCircle,
  Eye,
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
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import NumberField from "@/components/custom/NumberField";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import {
  Medication,
  Order,
  OrderItem,
  OrderItemStatus,
} from "@/generated/prisma";
import { validateOrder } from "../../service";
import { formatDate } from "@/lib/utils";

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
  order: Order & {
    orderItems: Array<
      OrderItem & {
        medication: Medication & {
          batches?: Array<{
            id: string;
            batchNumber: string;
            expirationDate: Date;
            currentQuantity: number;
          }>;
        };
        totalAvailableStock?: number;
      }
    >;
    service: { id: string; name: string };
    createdBy: { id: string; firstName: string; lastName: string };
  };
  pharmacistId: string;
}

export default function ValidateOrderPage({
  order,
  pharmacistId,
}: ValidateOrderPageProps) {
  const router = useRouter();
  const [isValidating, setIsValidating] = useState(false);

  const form = useForm<ValidateOrderFormInput>({
    resolver: zodResolver(validateOrderSchema),
    defaultValues: {
      validatedItems: order.orderItems.map((item) => ({
        id: item.id,
        medicationId: item.medicationId,
        requestedQuantity: item.requestedQuantity,
        validatedQuantity: item.requestedQuantity,
        status: OrderItemStatus.VALIDATED,
        medicationName: `${item.medication.commercialName} (${item.medication.dci}) – ${item.medication.dosage} ${item.medication.form}`,
      })),
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "validatedItems",
  });

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
        }, 1_000);
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

  const handleStatusChange = (
    index: number,
    newStatus: OrderItemStatus
  ) => {
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

  const getAvailableStock = (oi: any) => oi.totalAvailableStock || 0;

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

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">
                  Médicaments à valider
                </h3>
                <span className="text-sm text-gray-500">
                  {fields.length} article(s)
                </span>
              </div>

              {fields.length === 0 && (
                <div className="p-6 text-center border border-dashed rounded-md text-gray-500">
                  Aucun médicament à valider.
                </div>
              )}

              <div className="space-y-4">
                {fields.map((field, idx) => {
                  const oi = order.orderItems.find((i) => i.id === field.id)!;
                  const avail = getAvailableStock(oi);

                  return (
                    <div
                      key={field.id}
                      className="border border-gray-200 p-4 rounded-md bg-white"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Médicament info */}
                        <div className="lg:col-span-4">
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Médicament
                          </label>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-900">
                              {field.medicationName}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                toast.info(
                                  "Détails du médicament – À implémenter"
                                )
                              }
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Stock disponible: {avail}
                          </div>
                        </div>

                        {/* Quantités */}
                        <div className="lg:col-span-2">
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Quantité demandée
                          </label>
                          <div className="p-2 bg-gray-50 rounded text-center">
                            {field.requestedQuantity}
                          </div>
                        </div>
                        <div className="lg:col-span-2">
                          <NumberField
                            control={form.control}
                            name={`validatedItems.${idx}.validatedQuantity`}
                            label="Quantité validée"
                            min={0}
                            max={Math.min(field.requestedQuantity, avail)}
                          />
                        </div>

                        {/* Statut */}
                        <div className="lg:col-span-3">
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Statut
                          </label>
                          <Select
                            value={form.watch(
                              `validatedItems.${idx}.status`
                            )}
                            onValueChange={(val) =>
                              handleStatusChange(
                                idx,
                                val as OrderItemStatus
                              )
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={OrderItemStatus.VALIDATED}>
                                Validé
                              </SelectItem>
                              <SelectItem
                                value={OrderItemStatus.PARTIALLY_VALIDATED}
                              >
                                Partiellement validé
                              </SelectItem>
                              <SelectItem
                                value={OrderItemStatus.NOT_AVAILABLE}
                              >
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
                            onClick={() => remove(idx)}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>

                      {/* Avertissement stock & badge */}
                      <div className="mt-3 flex justify-between">
                        {avail < field.requestedQuantity && (
                          <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                            ⚠️ Stock insuffisant ({avail} dispo,{" "}
                            {field.requestedQuantity} demandé)
                          </div>
                        )}
                        <div>{getItemStatusBadge(
                          form.watch(`validatedItems.${idx}.status`)
                        )}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
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