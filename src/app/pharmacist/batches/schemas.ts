import * as z from "zod";

export const medicationBatchSchema = z.object({
  medicationId: z
    .string()
    .uuid("L'ID du médicament est invalide")
    .min(1, "Le médicament est obligatoire"),
  batchNumber: z.string().min(1, "Le numéro de lot est obligatoire"),
  expirationDate: z
    .date({
      required_error: "La date d'expiration est obligatoire.",
      invalid_type_error: "Format de date invalide.",
    })
    .min(
      new Date(new Date().setDate(new Date().getDate() + 1)),
      "La date d'expiration doit être future."
    ), // Must be a future date
  initialQuantity: z.coerce
    .number()
    .int()
    .positive("La quantité initiale doit être un entier positif"),
  // currentQuantity will be set to initialQuantity on creation
  supplierId: z
    .string()
    .uuid("L'ID du fournisseur est invalide")
    .min(1, "Le fournisseur est obligatoire pour l'entrée en stock initiale."),
  unitPrice: z.coerce
    .number()
    .nonnegative("Le prix unitaire ne peut être négatif.")
    .optional(),
  invoiceNumber: z.string().optional(),
});

export type MedicationBatchFormInput = z.infer<typeof medicationBatchSchema>;

export const updateMedicationBatchSchema = z.object({
  id: z.string().uuid(), // Batch ID
  batchNumber: z.string().min(1, "Le numéro de lot est obligatoire").optional(), // Optional if not changing
  expirationDate: z
    .date({
      required_error: "La date d'expiration est obligatoire.",
      invalid_type_error: "Format de date invalide.",
    })
    .min(
      new Date(new Date().setDate(new Date().getDate() + 1)),
      "La date d'expiration doit être future."
    )
    .optional(), // Optional
  // initialQuantity and currentQuantity are generally not updated directly via form after creation.
  // Adjustments would go through stock movements.
});

export type UpdateMedicationBatchFormInput = z.infer<
  typeof updateMedicationBatchSchema
>;
