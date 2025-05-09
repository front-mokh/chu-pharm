import * as z from "zod";
import { OrderStatus, OrderItemStatus } from "@/generated/prisma";

// Schema for order item in create/update forms
export const orderItemSchema = z.object({
  id: z.string().uuid().optional(), // Optional for updates
  medicationId: z.string().uuid("Médicament invalide."),
  requestedQuantity: z.coerce.number().int().min(1, "Quantité ≥ 1 requise"),
  notes: z.string().optional(),
  // The following fields are for validation/preparation processes
  validatedQuantity: z.coerce.number().int().min(0).optional(),
  preparedQuantity: z.coerce.number().int().min(0).optional(),
  status: z.nativeEnum(OrderItemStatus).optional()
});

// Base schema for creating/updating orders
export const orderSchema = z.object({
  notes: z.string().optional(),
  status: z.nativeEnum(OrderStatus).optional(),
  orderItems: z.array(orderItemSchema).min(1, "Ajoutez au moins un article.")
});

// Schema for validation form
export const orderValidationSchema = z.object({
  orderId: z.string().uuid("ID de commande invalide."),
  validatedItems: z.array(
    z.object({
      id: z.string().uuid("ID d'article invalide."),
      validatedQuantity: z.coerce
        .number()
        .int("La quantité doit être un nombre entier.")
        .min(0, "La quantité ne peut pas être négative."),
      status: z.nativeEnum(OrderItemStatus, {
        errorMap: () => ({ message: "Statut invalide." })
      })
    })
  ).min(1, "Validez au moins un article.")
});

// Schema for preparation form
export const orderPreparationSchema = z.object({
  orderId: z.string().uuid("ID de commande invalide."),
  preparedItems: z.array(
    z.object({
      id: z.string().uuid("ID d'article invalide."),
      preparedQuantity: z.coerce
        .number()
        .int("La quantité doit être un nombre entier.")
        .min(0, "La quantité ne peut pas être négative."),
    })
  ).min(1, "Préparez au moins un article.")
});

export type OrderFormInput = z.infer<typeof orderSchema>;
export type OrderItemFormInput = z.infer<typeof orderItemSchema>;
export type OrderValidationInput = z.infer<typeof orderValidationSchema>;
export type OrderPreparationInput = z.infer<typeof orderPreparationSchema>;