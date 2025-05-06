"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { createSupplier } from "@/lib/services";
import { PlusCircle } from "lucide-react";
import TextField from "@/components/custom/TextField";
import TextAreaField from "@/components/custom/TextAreaField";

const createSupplierSchema = z.object({
  name: z.string().min(1, "Le nom du fournisseur est obligatoire"),
  contactName: z.string().optional(),
  email: z
    .string()
    .email("L'email doit être valide")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type CreateSupplierInput = z.infer<typeof createSupplierSchema>;

export default function AddSupplierDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const form = useForm<CreateSupplierInput>({
    resolver: zodResolver(createSupplierSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const onSubmit = async (values: CreateSupplierInput) => {
    setIsSubmitting(true);
    try {
      const result = await createSupplier(values);

      if (result.success) {
        toast.success("Fournisseur créé avec succès");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la création du fournisseur"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la création du fournisseur");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un fournisseur
        </Button>
      }
      title="Ajouter un nouveau fournisseur"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            control={form.control}
            name="name"
            label="Nom du fournisseur"
            placeholder="Nom du fournisseur"
          />

          <TextField
            control={form.control}
            name="contactName"
            label="Nom du contact (Optionnel)"
            placeholder="Nom du contact"
          />

          <div className="grid grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="email"
              label="Email (Optionnel)"
              placeholder="Email"
            />
            <TextField
              control={form.control}
              name="phone"
              label="Téléphone (Optionnel)"
              placeholder="Téléphone"
            />
          </div>

          <TextAreaField
            control={form.control}
            name="address"
            label="Adresse (Optionnelle)"
            placeholder="Adresse du fournisseur"
          />

          <div className="flex justify-end gap-2 mt-10">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Création..." : "Créer"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
