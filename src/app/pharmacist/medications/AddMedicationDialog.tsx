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
import { MedicationFormInput, medicationSchema } from "./schemas";
import { createMedication } from "./service";
import {
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

interface AddMedicationDialogProps {
  therapeuticClasses: TherapeuticClass[];
}

export default function AddMedicationDialog({
  therapeuticClasses,
}: AddMedicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MedicationFormInput>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      dci: "",
      commercialName: "",
      // form: undefined, // Let user select
      dosage: "",
      // packagingUnit: undefined, // Let user select
      unitsPerPackage: undefined, // Use undefined for coerce.number() to show placeholder
      minStockLevel: 0,
      therapeuticClassId: "",
      isActive: true,
    },
  });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const onSubmit = async (values: MedicationFormInput) => {
    setIsSubmitting(true);
    try {
      const result = await createMedication(values);
      if (result.success) {
        toast.success("Médicament créé avec succès!");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la création du médicament."
        );
      }
    } catch (error) {
      console.error("Create medication error:", error);
      toast.error(
        "Une erreur serveur est survenue lors de la création du médicament."
      );
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
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un médicament
        </Button>
      }
      title="Ajouter un nouveau médicament"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="dci"
              label="DCI (Dénomination Commune Internationale)"
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
              placeholder="Sélectionner une forme"
              options={medicationFormOptions}
            />
            <TextField
              control={form.control}
              name="dosage"
              label="Dosage"
              placeholder="Ex: 500mg, 10mg/5ml"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              control={form.control}
              name="packagingUnit"
              label="Unité de Conditionnement"
              placeholder="Sélectionner une unité"
              options={packagingUnitOptions}
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
              label="Niveau de Stock Minimum (Alertes)"
              placeholder="Ex: 10"
              min={0}
            />
          </div>
          {/* isActive defaults to true, not shown on Add form to simplify, but can be added with SwitchField */}

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
              {isSubmitting ? "Création en cours..." : "Créer le médicament"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
