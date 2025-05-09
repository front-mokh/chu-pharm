"use client";

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderValidationFormInput, orderValidationSchema } from "../../schemas";
import { OrderForValidation, processOrderValidation } from "../../service";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import OrderValidationItem from "./OrderValidationItem";
import { Separator } from "@/components/ui/separator";
import { Loader2, Save } from "lucide-react";
import { User } from "@/generated/prisma"; // Assuming you have a User type from session
import { OrderItemStatus } from "@/generated/prisma";

interface OrderValidationFormProps {
  order: OrderForValidation;
  currentUser: Pick<User, "id">; // Or full User object from session
}

export default function OrderValidationForm({
  order,
  currentUser,
}: OrderValidationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<OrderValidationFormInput>({
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      orderId: order.id,
      items: order.orderItems.map((item) => ({
        orderItemId: item.id,
        medicationId: item.medication.id,
        requestedQuantity: item.requestedQuantity,
        // Set validatedQuantity based on item status, or keep as is from DB if partially validated before
        validatedQuantity:
          item.status === OrderItemStatus.VALIDATED ||
          item.status === OrderItemStatus.PARTIALLY_VALIDATED
            ? item.validatedQuantity ?? undefined
            : undefined,
        status: item.status || OrderItemStatus.PENDING, // Default to PENDING if not set
        notes: item.notes || "",
        currentStock: item.totalAvailableStock, // For display, not part of submission schema
      })),
      overallNotes: order.notes?.startsWith("Validation:")
        ? order.notes.substring("Validation:".length).trim()
        : "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { fields } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = async (data: OrderValidationFormInput) => {
    setIsSubmitting(true);
    try {
      const result = await processOrderValidation(data, currentUser.id);
      if (result.success) {
        toast.success(result.message || "Validation de la commande réussie!");
        // Redirect or update UI
        router.push("/dashboard/pharmacist/orders/pending"); // Go back to pending list
        router.refresh(); // Refresh server components
      } else {
        toast.error(
          result.message || "Erreur lors de la validation de la commande."
        );
      }
    } catch (error) {
      console.error("Order validation submission error:", error);
      toast.error("Une erreur inattendue est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Log form errors for debugging
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("Form Errors:", errors);
      // Check for the global array error message from refine
      if (
        errors.items &&
        !Array.isArray(errors.items) &&
        errors.items.message
      ) {
        toast.error(errors.items.message, { duration: 5000 });
      }
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">
                  Validation Commande N°: {order.orderNumber}
                </CardTitle>
                <CardDescription>
                  Service: {order.service.name} | Demandeur:{" "}
                  {`${order.createdBy.firstName} ${order.createdBy.lastName}`} |
                  Soumise le:{" "}
                  {new Date(order.createdAt).toLocaleDateString("fr-FR")}
                </CardDescription>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Enregistrer Validation
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {fields.map((field, index) => (
              <OrderValidationItem
                key={field.id} // RHF unique id for field array item
                itemIndex={index}
                medicationItem={order.orderItems[index]} // Pass original data for display
              />
            ))}
            <Separator className="my-6" />
            <div>
              <Label htmlFor="overallNotes" className="text-md font-semibold">
                Notes Générales sur la Validation (Optionnel)
              </Label>
              <Textarea
                id="overallNotes"
                {...methods.register("overallNotes")}
                placeholder="Ajoutez des remarques générales concernant cette validation..."
                className="mt-2"
              />
              {errors.overallNotes && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.overallNotes.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t pt-6">
            <Button type="submit" disabled={isSubmitting} size="lg">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Enregistrer la Validation
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
}
