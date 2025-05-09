import * as z from "zod";

export const orderItemSchema = z.object({
  medicationId: z.string().uuid("Médicament invalide."),
  requestedQuantity: z.coerce.number().int().min(1, "Quantité ≥ 1 requise"),
  notes: z.string().optional(),
});

export const orderSchema = z.object({
  notes: z.string().optional(),
  orderItems: z.array(orderItemSchema).min(1, "Ajoutez au moins un article."),
});

export type OrderFormInput = z.infer<typeof orderSchema>;
export type OrderItemFormInput = z.infer<typeof orderItemSchema>;
