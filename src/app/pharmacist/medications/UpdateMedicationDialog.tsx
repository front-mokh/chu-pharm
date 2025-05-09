"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextField from "@/components/custom/TextField";
import SwitchField from "@/components/custom/SwitchField";
import NumberField from "@/components/custom/NumberField";
import SelectWithSearch from "@/components/custom/SelectWithSearch";

import { UpdateMedicationFormInput, updateMedicationSchema } from "./schemas";
import { updateMedication } from "./service";

import {
  Medication,
  TherapeuticClass,
  MedicationForm,
  PackagingUnit,
  SubClass,
} from "@/generated/prisma";

// import { prettifyEnum } from "@/lib/utils";
import { MedicationFormLabels, PackagingUnitLabels } from "@/utils/translations";
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

interface UpdateMedicationDialogProps {
  trigger: React.ReactNode;
  medication: Medication & { therapeuticClass: TherapeuticClass };
  therapeuticClasses: TherapeuticClass[];
  subClasses: SubClass[];
}

export default function UpdateMedicationDialog({
  trigger,
  medication: medicationData,
  therapeuticClasses,
  subClasses,
}: UpdateMedicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UpdateMedicationFormInput>({
    resolver: zodResolver(updateMedicationSchema),
  });

  useEffect(() => {
    if (medicationData && isOpen) {
      form.reset({
        id: medicationData.id,
        dci: medicationData.dci,
        codedci: medicationData.codedci,
        commercialName: medicationData.commercialName,
        form: medicationData.form,
        dosage: medicationData.dosage,
        packagingUnit: medicationData.packagingUnit,
        unitsPerPackage: medicationData.unitsPerPackage,
        minStockLevel: medicationData.minStockLevel,
        therapeuticClassId: medicationData.therapeuticClassId,
        subClassId: medicationData.subClassId ?? undefined,
        isActive: medicationData.isActive,
      });
    }
  }, [medicationData, isOpen, form]);

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
  };

  const onSubmit = async (values: UpdateMedicationFormInput) => {
    setIsSubmitting(true);
    try {
      const { id, ...updateData } = values;
      const result = await updateMedication(id, updateData);

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

  const subClassOptions = filteredSubClasses.map((sc) => ({
    value: sc.id,
    label: sc.name,
  }));

  const medicationFormOptions = enumToOptionss(MedicationForm, MedicationFormLabels);
  const packagingUnitOptions = enumToOptionss(PackagingUnit, PackagingUnitLabels);

  return (
    <CustomDialog
      trigger={trigger}
      title={`Modifier: ${medicationData.commercialName}`}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* DCI and Code */}
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

          {/* Commercial name + dosage */}
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
              placeholder="Ex: 500mg"
            />
          </div>

          {/* Forme and Packaging */}
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

          {/* Quantities */}
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

          {/* Therapeutic class (full) + subclass (below) */}
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
              options={subClassOptions}
              disabled={!selectedTherapeuticClassId}
            />
          </div>

          {/* Active toggle */}
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