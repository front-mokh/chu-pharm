import { ExitReason } from "@/generated/prisma";
import * as z from "zod";

// Schema for creating a new batch and stock entry in one operation
export const batchStockFormSchema = z.object({
  medicationId: z
    .string()
    .uuid("L'ID du médicament est invalide")
    .min(1, "Le médicament est obligatoire"),
  batchNumber: z
    .string()
    .min(1, "Le numéro de lot est obligatoire")
    .max(50, "Le numéro de lot ne doit pas dépasser 50 caractères"),
  expirationDate: z
    .string()
    .min(1, "La date d'expiration est obligatoire")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Format de date invalide",
    })
    .refine((val) => new Date(val) > new Date(), {
      message: "La date d'expiration doit être dans le futur",
    }),
  quantity: z
    .number()
    .int("La quantité doit être un nombre entier")
    .positive("La quantité doit être positive"),
  supplierId: z
    .string()
    .uuid("L'ID du fournisseur est invalide")
    .min(1, "Le fournisseur est obligatoire"),
  entryDate: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Format de date invalide",
    })
    .optional(),
  invoiceNumber: z.string().optional(),
  unitPrice: z
    .number()
    .nonnegative("Le prix unitaire ne peut pas être négatif")
    .optional(),
});

export type BatchStockFormInput = z.infer<typeof batchStockFormSchema>;

// Schema for recording a stock exit
export const stockExitFormSchema = z.object({
  batchId: z
    .string()
    .uuid("L'ID du lot est invalide")
    .min(1, "Le lot est obligatoire"),
  quantity: z
    .number()
    .int("La quantité doit être un nombre entier")
    .positive("La quantité doit être positive"),
  exitDate: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Format de date invalide",
    })
    .optional(),
  reason: z.nativeEnum(ExitReason, {
    errorMap: () => ({ message: "La raison de sortie est obligatoire" }),
  }),
  orderItemId: z
    .string()
    .uuid("L'ID de l'élément de commande est invalide")
    .optional(),
});

export type StockExitFormInput = z.infer<typeof stockExitFormSchema>;
