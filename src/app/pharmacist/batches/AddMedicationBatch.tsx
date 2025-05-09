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
import DatePickerField from "@/components/custom/DatePickerField";
import { MedicationBatchFormInput, medicationBatchSchema } from "./schemas";
import { createMedicationBatch } from "./service";
import { Medication, Supplier } from "@/generated/prisma";
import NumberField from "@/components/custom/NumberField";

interface AddMedicationBatchDialogProps {
  medications: Pick<Medication, "id" | "commercialName" | "dci">[];
  suppliers: Pick<Supplier, "id" | "name">[];
  defaultMedicationId?: string; // Optional: if opening from a specific medication context
}

export default function AddMedicationBatchDialog({
  medications,
  suppliers,
  defaultMedicationId,
}: AddMedicationBatchDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MedicationBatchFormInput>({
    resolver: zodResolver(medicationBatchSchema),
    defaultValues: {
      medicationId: defaultMedicationId || "",
      batchNumber: "",
      expirationDate: undefined,
      initialQuantity: undefined,
      supplierId: "",
      unitPrice: undefined,
      invoiceNumber: "",
    },
  });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset({
        // Reset with defaultMedicationId if provided
        medicationId: defaultMedicationId || "",
        batchNumber: "",
        expirationDate: undefined,
        initialQuantity: undefined,
        supplierId: "",
        unitPrice: undefined,
        invoiceNumber: "",
      });
    }
  };

  const onSubmit = async (values: MedicationBatchFormInput) => {
    setIsSubmitting(true);
    try {
      const result = await createMedicationBatch(values);
      if (result.success) {
        toast.success(
          "Lot de médicament et entrée en stock créés avec succès!"
        );
        handleOpenChange(false);
      } else {
        toast.error(result.error || "Erreur lors de la création du lot.");
      }
    } catch (error) {
      console.error("Create medication batch error:", error);
      toast.error("Une erreur serveur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const medicationOptions = medications.map((med) => ({
    value: med.id,
    label: `${med.commercialName} (${med.dci})`,
  }));

  const supplierOptions = suppliers.map((sup) => ({
    value: sup.id,
    label: sup.name,
  }));

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un Lot
        </Button>
      }
      title="Ajouter un nouveau lot de médicament"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <SelectField
            control={form.control}
            name="medicationId"
            label="Médicament"
            placeholder="Sélectionner un médicament"
            options={medicationOptions}
            disabled={!!defaultMedicationId || isSubmitting}
          />
          <TextField
            control={form.control}
            name="batchNumber"
            label="Numéro de Lot"
            placeholder="Ex: AB12345"
          />
          <DatePickerField
            control={form.control}
            name="expirationDate"
            label="Date d'Expiration"
            fromDate={new Date()} // Only future dates
          />
          <NumberField
            control={form.control}
            name="initialQuantity"
            label="Quantité Initiale (Entrée en Stock)"
            placeholder="Ex: 100"
            min={1}
          />
          <h3 className="text-md font-semibold pt-2 border-t mt-4">
            Détails de l&apos;Entrée en Stock Initiale
          </h3>
          <SelectField
            control={form.control}
            name="supplierId"
            label="Fournisseur"
            placeholder="Sélectionner un fournisseur"
            options={supplierOptions}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NumberField
              control={form.control}
              name="unitPrice"
              label="Prix Unitaire (Optionnel)"
              placeholder="Ex: 10.50"
              min={0}
              step={0.01}
            />
            <TextField
              control={form.control}
              name="invoiceNumber"
              label="N° de Facture (Optionnel)"
              placeholder="Ex: INV-2024-001"
            />
          </div>

          <div className="flex justify-end gap-2 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Création..." : "Créer le Lot"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
