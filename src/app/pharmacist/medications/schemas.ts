import { MedicationForm, PackagingUnit } from "@/generated/prisma"; // Or from '@prisma/client'
import * as z from "zod";

export const medicationSchema = z.object({
  dci: z.string().min(1, "Le DCI est obligatoire"),
  commercialName: z.string().min(1, "Le nom commercial est obligatoire"),
  form: z.nativeEnum(MedicationForm, {
    errorMap: () => ({ message: "La forme pharmaceutique est obligatoire" }),
  }),
  dosage: z.string().min(1, "Le dosage est obligatoire"), // e.g., "10mg", "5ml/100ml"
  packagingUnit: z.nativeEnum(PackagingUnit, {
    errorMap: () => ({ message: "L'unité de conditionnement est obligatoire" }),
  }),
  unitsPerPackage: z.coerce
    .number()
    .int()
    .positive(
      "Le nombre d'unités par conditionnement doit être un entier positif"
    ),
  minStockLevel: z.coerce
    .number()
    .int()
    .min(0, "Le stock minimum ne peut être négatif"),
  therapeuticClassId: z
    .string()
    .uuid("L'ID de la classe thérapeutique est invalide")
    .min(1, "La classe thérapeutique est obligatoire"),
  isActive: z.boolean().default(true), // Default to true for new medications
});

export type MedicationFormInput = z.infer<typeof medicationSchema>;

// Schema for updating, includes ID and makes all fields optional for partial updates if needed,
// but here we expect all fields to be present from the form.
export const updateMedicationSchema = medicationSchema.extend({
  id: z.string().uuid(), // ID is required for identifying the record to update
});

export type UpdateMedicationFormInput = z.infer<typeof updateMedicationSchema>;
