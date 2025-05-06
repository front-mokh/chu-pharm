"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { toast } from "sonner";
import { updateSupplier } from "@/lib/services";
import { Supplier } from "@/generated/prisma";
import TextField from "@/components/custom/TextField";
import SwitchField from "@/components/custom/SwitchField";
import TextAreaField from "@/components/custom/TextAreaField";

const updateSupplierSchema = z.object({
  name: z.string().min(1, "Le nom du fournisseur est obligatoire"),
  contactName: z.string().optional(),
  email: z
    .string()
    .email("L'email doit être valide")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().optional(),
  isActive: z.boolean(),
});

export type UpdateSupplierInput = z.infer<typeof updateSupplierSchema>;

interface UpdateSupplierDialogProps {
  trigger: React.ReactNode;
  supplier: Supplier;
}

export function UpdateSupplierDialog({
  trigger,
  supplier: supplierData,
}: UpdateSupplierDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const form = useForm<UpdateSupplierInput>({
    resolver: zodResolver(updateSupplierSchema),
    defaultValues: {
      name: supplierData.name,
      contactName: supplierData.contactName || undefined,
      email: supplierData.email || undefined,
      phone: supplierData.phone || undefined,
      address: supplierData.address || undefined,
      isActive: supplierData.isActive,
    },
  });

  useEffect(() => {
    if (supplierData) {
      resetForm();
    }
  }, [supplierData]);

  const resetForm = () => {
    form.reset({
      name: supplierData.name,
      contactName: supplierData.contactName || undefined,
      email: supplierData.email || undefined,
      phone: supplierData.phone || undefined,
      address: supplierData.address || undefined,
      isActive: supplierData.isActive,
    });
    setIsSubmitting(false);
  };

  const onSubmit = async (values: UpdateSupplierInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateSupplier(supplierData.id, values);

      if (result.success) {
        toast.success("Fournisseur mis à jour avec succès");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la mise à jour du fournisseur"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour du fournisseur");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={trigger}
      title="Modifier le fournisseur"
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

          <SwitchField
            control={form.control}
            name="isActive"
            label="Fournisseur actif"
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
              {isSubmitting ? "Mise à jour..." : "Mettre à jour"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}

export default UpdateSupplierDialog;
