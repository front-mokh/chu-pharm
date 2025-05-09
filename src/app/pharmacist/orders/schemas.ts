import { OrderItemStatus } from "@/generated/prisma"; // Or from '@prisma/client'
import * as z from "zod";

export const orderItemValidationSchema = z.object({
  orderItemId: z.string().uuid(),
  medicationId: z.string().uuid(), // For reference/display
  requestedQuantity: z.number().int().nonnegative(),
  validatedQuantity: z.coerce // coerce because input type="number" can be string
    .number({ invalid_type_error: "La quantité validée doit être un nombre." })
    .int("La quantité validée doit être un entier.")
    .nonnegative("La quantité validée ne peut être négative.")
    .optional(), // Optional initially, but becomes required based on status
  status: z.nativeEnum(OrderItemStatus),
  notes: z.string().optional(),
  currentStock: z.number().int().nonnegative().optional(), // For display/warning, not submitted
});

export type OrderItemValidationInput = z.infer<
  typeof orderItemValidationSchema
>;

export const orderValidationSchema = z
  .object({
    orderId: z.string().uuid(),
    items: z
      .array(orderItemValidationSchema)
      .min(1, "Au moins un article doit être traité."),
    overallNotes: z.string().optional(), // General notes for the order validation
  })
  .refine(
    (data) => {
      // Custom validation: if status is VALIDATED or PARTIALLY_VALIDATED, validatedQuantity must be set
      for (const item of data.items) {
        if (
          item.status === OrderItemStatus.VALIDATED ||
          item.status === OrderItemStatus.PARTIALLY_VALIDATED
        ) {
          if (
            item.validatedQuantity === undefined ||
            item.validatedQuantity === null
          ) {
            // This error won't show up nicely with react-hook-form at item level easily without more complex setup
            return false;
          }
          if (item.validatedQuantity > item.requestedQuantity) {
            // Also hard to show at item level without custom resolver logic for each item
            return false;
          }
        }
        if (
          item.status === OrderItemStatus.NOT_AVAILABLE &&
          item.validatedQuantity &&
          item.validatedQuantity > 0
        ) {
          return false; // Cannot have validated quantity if not available
        }
      }
      return true;
    },
    {
      message:
        "Des erreurs de validation existent dans les articles. Vérifiez les quantités validées pour les statuts VALIDÉ/PARTIELLEMENT VALIDÉ ou si la quantité validée excède la quantité demandée.",
      // This path is for a general form error. For item-specific errors, use superRefine on orderItemValidationSchema or individual field refinements.
      path: ["items"],
    }
  );

export type OrderValidationFormInput = z.infer<typeof orderValidationSchema>;
