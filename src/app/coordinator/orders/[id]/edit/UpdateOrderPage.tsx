"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2, Loader2, Save, Plus, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { translateOrderStatus } from "@/utils/translations";
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
import TextField from "@/components/custom/TextField";
import NumberField from "@/components/custom/NumberField";
import SelectWithSearch from "@/components/custom/SelectWithSearch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { 
  Alert,
  AlertTitle,
  AlertDescription 
} from "@/components/ui/alert";

import { OrderFormInput, orderSchema } from "../../schemas";
import { Medication, Order, OrderItem, OrderStatus } from "@/generated/prisma";
import { updateOrder } from "../../service";

interface UpdateOrderPageProps {
  order: Order & { 
    orderItems: (OrderItem & { medication: Medication })[];
    service: { id: string; name: string };
    createdBy: { id: string; firstName: string; lastName: string };
  };
  medications: Medication[];
}

export default function UpdateOrderPage({ order, medications }: UpdateOrderPageProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatusWarning, setShowStatusWarning] = useState(false);
  const [originalStatus] = useState(order.status);

  // Filter out medications that are not active
  const activeMedications = medications.filter(m => m.isActive);

  const form = useForm<OrderFormInput>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      notes: order.notes || "",
      status: order.status,
      orderItems: order.orderItems.map((item) => ({
        medicationId: item.medicationId,
        requestedQuantity: item.requestedQuantity,
        notes: item.notes || "",
      })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "orderItems",
  });

  // Watch for status changes
  const currentStatus = form.watch("status");
  
  // Effect to show warning when status is changed
  useEffect(() => {
    if (currentStatus !== originalStatus) {
      setShowStatusWarning(true);
    } else {
      setShowStatusWarning(false);
    }
  }, [currentStatus, originalStatus]);

  const medicationOptions = activeMedications.map((m) => ({
    value: m.id,
    label: `${m.commercialName} (${m.dci}) - ${m.dosage} ${m.form}`,
  }));

  // Helper to determine if status edit should be allowed
  const canChangeStatus = () => {
    // Prevent changing status once order is beyond DRAFT or SUBMITTED
    return ["DRAFT", "SUBMITTED"].includes(order.status);
  };

  const onSubmit = async (values: OrderFormInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateOrder(order.id, values);
      if (result.success) {
        toast.success("Commande mise à jour avec succès !");
        // Navigate back to order list after a short delay
        setTimeout(() => {
          router.push("/dashboard/coordinator/orders");
          router.refresh();
        }, 1000);
      } else {
        toast.error(result.error || "Erreur lors de la mise à jour.");
      }
    } catch (err) {
      console.error("Update order error:", err);
      toast.error("Erreur serveur lors de la mise à jour.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="h-full shadow-sm border-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
          <CardHeader className="bg-blue-50 rounded-t-lg pb-6">
            <CardTitle className="text-blue-800">Modifier la commande {order.orderNumber}</CardTitle>
            <CardDescription className="text-blue-600">
              Service: {order.service.name} | 
              Créée par: {order.createdBy.firstName} {order.createdBy.lastName} | 
              Status actuel: {order.status}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 flex-grow pt-6">
            {showStatusWarning && (
              <Alert variant="warning" className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Attention</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Le changement de statut modifiera également le statut des articles de commande.
                  Cette action peut avoir des conséquences sur le circuit de validation.
                </AlertDescription>
              </Alert>
            )}

            <TextField
              control={form.control}
              name="notes"
              label="Remarques générales"
              placeholder="Ajoutez une remarque éventuelle"
            />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">Médicaments</h3>
                <span className="text-sm text-gray-500">{fields.length} article(s)</span>
              </div>

              {fields.length === 0 && (
                <div className="p-6 text-center border border-dashed rounded-md text-gray-500">
                  Aucun médicament. Veuillez en ajouter au moins un.
                </div>
              )}

              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border border-gray-200 p-4 rounded-md relative bg-white"
                >
                  <div className="md:col-span-5">
                    <SelectWithSearch
                      control={form.control}
                      name={`orderItems.${index}.medicationId`}
                      label="Médicament"
                      placeholder="Sélectionner un médicament"
                      options={medicationOptions}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <NumberField
                      control={form.control}
                      name={`orderItems.${index}.requestedQuantity`}
                      label="Quantité"
                      placeholder="Ex: 10"
                      min={1}
                    />
                  </div>

                  <div className="md:col-span-4">
                    <TextField
                      control={form.control}
                      name={`orderItems.${index}.notes`}
                      label="Remarque (optionnel)"
                      placeholder="Remarques sur cet item"
                    />
                  </div>

                  <div className="md:col-span-1 flex items-end justify-end h-full">
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-10 self-end"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
                onClick={() =>
                  append({ medicationId: "", requestedQuantity: 1, notes: "" })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Ajouter un médicament
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Statut</label>
              <Select
                onValueChange={(value) => form.setValue("status", value as OrderStatus)}
                defaultValue={order.status}
                disabled={isSubmitting || !canChangeStatus()}
              >
                <SelectTrigger className={!canChangeStatus() ? "bg-gray-100" : ""}>
                  <SelectValue placeholder="Sélectionner un statut" />
                </SelectTrigger>
                <SelectContent>
                  {/* Only show appropriate status options based on workflow */}
                  {canChangeStatus() ? (
                    <>
                      <SelectItem value={OrderStatus.DRAFT}>BROUILLON</SelectItem>
                      <SelectItem value={OrderStatus.SUBMITTED}>SOUMISE</SelectItem>
                    </>
                  ) : (
                    Object.values(OrderStatus).map((status) => (
                      <SelectItem key={status} value={status}>
                        {translateOrderStatus(status)}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {!canChangeStatus() && (
                <p className="text-xs text-gray-500 mt-1">
                  Le statut ne peut être modifié qu&apos;en phase de brouillon ou soumission
                </p>
              )}
              {form.formState.errors.status && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.status.message}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between gap-2 border-t pt-6">
            <Button 
              type="button" 
              variant="ghost" 
              disabled={isSubmitting}
              onClick={() => router.back()}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting || fields.length === 0} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mise à jour...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Mettre à jour
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
