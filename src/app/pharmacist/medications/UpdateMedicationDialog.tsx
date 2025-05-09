"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextField from "@/components/custom/TextField";
import SelectField from "@/components/custom/SelectField";
import SwitchField from "@/components/custom/SwitchField";
import { UpdateMedicationFormInput, updateMedicationSchema } from "./schemas";
import { updateMedication } from "./service";
import {
  Medication,
  TherapeuticClass,
  MedicationForm,
  PackagingUnit,
} from "@/generated/prisma";
import { prettifyEnum } from "@/lib/utils";
import NumberField from "@/components/custom/NumberField";

const enumToOptions = (enumObject: Record<string, string>) =>
  Object.values(enumObject).map((value) => ({
    value: value,
    label: prettifyEnum(value),
  }));

interface UpdateMedicationDialogProps {
  trigger: React.ReactNode;
  medication: Medication & { therapeuticClass: TherapeuticClass };
  therapeuticClasses: TherapeuticClass[];
}

export default function UpdateMedicationDialog({
  trigger,
  medication: medicationData,
  therapeuticClasses,
}: UpdateMedicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UpdateMedicationFormInput>({
    resolver: zodResolver(updateMedicationSchema),
    // Default values are set in useEffect when dialog opens and medicationData is available
  });

  useEffect(() => {
    if (medicationData && isOpen) {
      form.reset({
        id: medicationData.id,
        dci: medicationData.dci,
        commercialName: medicationData.commercialName,
        form: medicationData.form,
        dosage: medicationData.dosage,
        packagingUnit: medicationData.packagingUnit,
        unitsPerPackage: medicationData.unitsPerPackage,
        minStockLevel: medicationData.minStockLevel,
        therapeuticClassId: medicationData.therapeuticClassId,
        isActive: medicationData.isActive,
      });
    }
  }, [medicationData, isOpen, form]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    // No need to call form.reset() here as useEffect handles it based on `isOpen`
  };

  const onSubmit = async (values: UpdateMedicationFormInput) => {
    setIsSubmitting(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...updateData } = values;
      const result = await updateMedication(medicationData.id, updateData);

      if (result.success) {
        toast.success("Médicament mis à jour avec succès!");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la mise à jour du médicament."
        );
      }
    } catch (error) {
      console.error("Update medication error:", error);
      toast.error("Une erreur serveur est survenue lors de la mise à jour.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const therapeuticClassOptions = therapeuticClasses.map((tc) => ({
    value: tc.id,
    label: tc.name,
  }));

  const medicationFormOptions = enumToOptions(MedicationForm);
  const packagingUnitOptions = enumToOptions(PackagingUnit);

  return (
    <CustomDialog
      trigger={trigger}
      title={`Modifier: ${medicationData.commercialName}`}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="dci"
              label="DCI"
              placeholder="Ex: Paracétamol"
            />
            <TextField
              control={form.control}
              name="commercialName"
              label="Nom Commercial"
              placeholder="Ex: Doliprane"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              control={form.control}
              name="form"
              label="Forme Pharmaceutique"
              options={medicationFormOptions}
              placeholder="Sélectionner une forme"
            />
            <TextField
              control={form.control}
              name="dosage"
              label="Dosage"
              placeholder="Ex: 500mg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              control={form.control}
              name="packagingUnit"
              label="Unité de Conditionnement"
              options={packagingUnitOptions}
              placeholder="Sélectionner une unité"
            />
            <NumberField
              control={form.control}
              name="unitsPerPackage"
              label="Unités par Conditionnement"
              placeholder="Ex: 30"
              min={1}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              control={form.control}
              name="therapeuticClassId"
              label="Classe Thérapeutique"
              placeholder="Sélectionner une classe"
              options={therapeuticClassOptions}
            />
            <NumberField
              control={form.control}
              name="minStockLevel"
              label="Niveau de Stock Minimum"
              placeholder="Ex: 10"
              min={0}
            />
          </div>

          <SwitchField
            control={form.control}
            name="isActive"
            label="Médicament Actif"
          />

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
              {isSubmitting ? "Mise à jour..." : "Mettre à jour"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
