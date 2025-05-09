"use client";

import { useState, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextField from "@/components/custom/TextField";
import NumberField from "@/components/custom/NumberField";
import SelectWithSearch from "@/components/custom/SelectWithSearch";
import { MedicationFormLabels, PackagingUnitLabels } from "@/utils/translations";
import {
  MedicationFormInput,
  medicationSchema,
} from "./schemas";
import {
  TherapeuticClass,
  MedicationForm,
  PackagingUnit,
  SubClass,
} from "@/generated/prisma";
// import { prettifyEnum } from "@/lib/utils";
import { createMedication } from "./service";

// const enumToOptions = (enumObject: Record<string, string>) =>
//   Object.values(enumObject).map((value) => ({
//     value,
//     label: prettifyEnum(value),
//   }));

  const enumToOptionss = (
    enumObject: Record<string, string>,
    labelMap?: Record<string, string>
  ) =>
    Object.values(enumObject).map((value) => ({
      value,
      label: labelMap?.[value] ?? value,
    }));

interface AddMedicationDialogProps {
  therapeuticClasses: TherapeuticClass[];
  subClasses: SubClass[];
}

export default function AddMedicationDialog({
  therapeuticClasses,
  subClasses,
}: AddMedicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MedicationFormInput>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      dci: "",
      codedci: "",
      commercialName: "",
      dosage: "",
      unitsPerPackage: undefined,
      minStockLevel: 0,
      therapeuticClassId: "",
      subClassId: undefined,
      isActive: true,
    },
  });

  const selectedTherapeuticClassId = useWatch({
    control: form.control,
    name: "therapeuticClassId",
  });

  const filteredSubClasses = useMemo(
    () =>
      subClasses.filter(
        (sc) => sc.therapeuticClassId === selectedTherapeuticClassId
      ),
    [selectedTherapeuticClassId, subClasses]
  );

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
        toast.error(result.error || "Erreur lors de la création.");
      }
    } catch (error) {
      console.error("Create medication error:", error);
      toast.error("Erreur serveur lors de la création.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const therapeuticClassOptions = therapeuticClasses.map((tc) => ({
    value: tc.id,
    label: tc.name,
  }));

  const subClassOptions = filteredSubClasses.map((sc) => ({
    value: sc.id,
    label: sc.name,
  }));

  const medicationFormOptions = enumToOptionss(MedicationForm, MedicationFormLabels);
  const packagingUnitOptions = enumToOptionss(PackagingUnit, PackagingUnitLabels);

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
          {/* Basic info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="dci"
              label="DCI"
              placeholder="Ex: Paracétamol"
            />
            <TextField
              control={form.control}
              name="codedci"
              label="Code DCI"
              placeholder="Ex: 10M001"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="commercialName"
              label="Nom Commercial"
              placeholder="Ex: Doliprane"
            />
            <TextField
              control={form.control}
              name="dosage"
              label="Dosage"
              placeholder="Ex: 500mg, 10mg/5ml"
            />
          </div>

          {/* Form & Packaging */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectWithSearch
              control={form.control}
              name="form"
              label="Forme Pharmaceutique"
              placeholder="Sélectionner une forme"
              options={medicationFormOptions}
            />
            <SelectWithSearch
              control={form.control}
              name="packagingUnit"
              label="Unité de Conditionnement"
              placeholder="Sélectionner une unité"
              options={packagingUnitOptions}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NumberField
              control={form.control}
              name="unitsPerPackage"
              label="Unités par Conditionnement"
              placeholder="Ex: 30"
              min={1}
            />
            <NumberField
              control={form.control}
              name="minStockLevel"
              label="Stock Minimum (alerte)"
              placeholder="Ex: 10"
              min={0}
            />
          </div>

          {/* Therapeutic class (full width) + subclass (below) */}
          <div className="space-y-4">
            <SelectWithSearch
              control={form.control}
              name="therapeuticClassId"
              label="Classe Thérapeutique"
              placeholder="Sélectionner une classe"
              options={therapeuticClassOptions}
              onValueChange={() => form.setValue("subClassId", undefined)}
            />
            <SelectWithSearch
              control={form.control}
              name="subClassId"
              label="Sous-classe Thérapeutique"
              placeholder={
                selectedTherapeuticClassId
                  ? "Sélectionner une sous-classe"
                  : "Sélectionnez d'abord une classe"
              }
              disabled={!selectedTherapeuticClassId}
              options={subClassOptions}
            />
          </div>

          {/* Submit */}
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