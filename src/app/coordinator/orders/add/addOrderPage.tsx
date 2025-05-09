"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2, Plus, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import TextField from "@/components/custom/TextField";
import NumberField from "@/components/custom/NumberField";
import SelectWithSearch from "@/components/custom/SelectWithSearch";

import { createOrderForService } from "../service";
import { OrderFormInput, orderSchema } from "../schemas";
import { Medication } from "@/generated/prisma";

interface AddOrderPageProps {
  medications: Medication[];
  serviceId: string;
  userId: string;
}

export default function AddOrderPage({
  medications,
  serviceId,
  userId,
}: AddOrderPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderFormInput>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      notes: "",
      orderItems: [{ medicationId: "", requestedQuantity: 1, notes: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "orderItems",
  });

  const medicationOptions = (medications ?? []).map((m) => ({
    value: m.id,
    label: `${m.commercialName} (${m.dci})`,
  }));

  const onSubmit = async (values: OrderFormInput) => {
    setIsSubmitting(true);
    try {
      const result = await createOrderForService(serviceId, userId, values);
      if (result.success) {
        toast.success("Commande créée avec succès !");
        form.reset();
      } else {
        toast.error(result.error || "Erreur lors de la création.");
      }
    } catch (err) {
      console.error("Create order error:", err);
      toast.error("Erreur serveur lors de la création.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="h-full shadow-sm border-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
          <CardHeader className="bg-blue-50 rounded-t-lg pb-6">
            <CardTitle className="text-blue-800">Nouvelle Commande</CardTitle>
            <CardDescription className="text-blue-600">
              Ajoutez les médicaments à commander pour votre service.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 flex-grow pt-6">
            <TextField
              control={form.control}
              name="notes"
              label="Remarques générales"
              placeholder="Ajoutez une remarque éventuelle concernant l'ensemble de la commande"
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-700">Médicaments</h3>
              </div>

              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border border-gray-200 hover:border-gray-300 p-4 rounded-md relative bg-white"
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
                        title="Supprimer"
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
                className="flex items-center gap-1 text-blue-600 border-blue-200 hover:bg-blue-50 w-full justify-center"
                onClick={() =>
                  append({ medicationId: "", requestedQuantity: 1, notes: "" })
                }
              >
                <Plus className="w-4 h-4" />
                Ajouter un médicament
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between gap-2 border-t pt-6">
            <Button type="button" variant="ghost" disabled={isSubmitting}>
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Création en cours...
                </>
              ) : (
                "Créer la commande"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}