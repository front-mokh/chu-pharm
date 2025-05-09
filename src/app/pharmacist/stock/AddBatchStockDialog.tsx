// AddBatchStockDialog.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextField from "@/components/custom/TextField";
import SelectField from "@/components/custom/SelectField";
import NumberField from "@/components/custom/NumberField";
import DatePickerField from "@/components/custom/DatePickerField"; // Assuming you have this component
import { BatchStockFormInput, batchStockFormSchema } from "./schemas";
import { createBatchAndStockEntry } from "./service";
import { Medication, Supplier } from "@/generated/prisma";

interface AddBatchStockDialogProps {
  medications: Medication[];
  suppliers: Supplier[];
  trigger?: React.ReactNode; // Optional trigger
}

export default function AddBatchStockDialog({
  medications,
  suppliers,
  trigger,
}: AddBatchStockDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BatchStockFormInput>({
    resolver: zodResolver(batchStockFormSchema),
    defaultValues: {
      medicationId: "",
      batchNumber: "",
      expirationDate: undefined, // Let user select
      quantity: undefined,
      supplierId: "",
      entryDate: new Date().toISOString().split("T")[0], // Default to today
      invoiceNumber: "",
      unitPrice: undefined,
    },
  });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const onSubmit = async (values: BatchStockFormInput) => {
    setIsSubmitting(true);
    try {
      // Ensure quantity is a number if provided
      const payload = {
        ...values,
        quantity: Number(values.quantity),
        unitPrice: values.unitPrice ? Number(values.unitPrice) : undefined,
        entryDate: values.entryDate
          ? new Date(values.entryDate).toISOString()
          : new Date().toISOString(),
        expirationDate: new Date(values.expirationDate).toISOString(),
      };

      const result = await createBatchAndStockEntry(payload);
      if (result.success) {
        toast.success("Lot et entrée de stock créés avec succès!");
        handleOpenChange(false);
      } else {
        toast.error("Erreur lors de la création du lot.");
      }
    } catch (error) {
      console.error("Create batch/stock error:", error);
      toast.error(
        "Une erreur serveur est survenue lors de la création du lot."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const medicationOptions = medications.map((med) => ({
    value: med.id,
    label: `${med.commercialName} - ${med.dosage} (${med.dci})`,
  }));

  const supplierOptions = suppliers.map((sup) => ({
    value: sup.id,
    label: sup.name,
  }));

  return (
    <CustomDialog
      trigger={
        trigger || (
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Ajouter un Lot/Stock
          </Button>
        )
      }
      title="Ajouter un Nouveau Lot et Entrée de Stock"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <SelectField
            control={form.control}
            name="medicationId"
            label="Médicament"
            placeholder="Sélectionner un médicament"
            options={medicationOptions}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="batchNumber"
              label="Numéro de Lot"
              placeholder="Ex: B12345X"
            />
            <DatePickerField
              control={form.control}
              name="expirationDate"
              label="Date d'Expiration"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NumberField
              control={form.control}
              name="quantity"
              label="Quantité Entrée"
              placeholder="Ex: 100"
              min={1}
            />
            <SelectField
              control={form.control}
              name="supplierId"
              label="Fournisseur"
              placeholder="Sélectionner un fournisseur"
              options={supplierOptions}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DatePickerField
              control={form.control}
              name="entryDate"
              label="Date d'Entrée (Optionnel)"
            />
            <TextField
              control={form.control}
              name="invoiceNumber"
              label="N° de Facture (Optionnel)"
              placeholder="Ex: INV-2024-001"
            />
            <NumberField
              control={form.control}
              name="unitPrice"
              label="Prix Unitaire (Optionnel)"
              placeholder="Ex: 10.50"
              step={0.01}
              min={0}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enregistrement..." : "Enregistrer le Lot"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
