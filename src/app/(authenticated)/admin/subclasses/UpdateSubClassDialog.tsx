// File: app/admin/subclasses/UpdateSubClassDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import TextField from "@/components/custom/TextField";
import TextAreaField from "@/components/custom/TextAreaField";
import SwitchField from "@/components/custom/SwitchField";
import { toast } from "sonner";
import {
  updateSubClass,
  getAllTherapeuticClasses,
} from "@/lib/services";
import { SubClass, TherapeuticClass } from "@/generated/prisma";
import SelectWithSearch from "@/components/custom/SelectWithSearch";

const updateSubClassSchema = z.object({
  code: z
    .string()
    .length(1, "Le code doit être une lettre")
    .regex(/^[A-Za-z]$/, "Le code doit être une lettre"),
  name: z.string().min(1, "Le nom est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean(),
  therapeuticClassId: z
    .string()
    .min(1, "Vous devez sélectionner une classe thérapeutique"),
});

export type UpdateSubClassInput = z.infer<
  typeof updateSubClassSchema
>;

interface UpdateSubClassDialogProps {
  trigger: React.ReactNode;
  subClass: SubClass;
}

export default function UpdateSubClassDialog({
  trigger,
  subClass: subClassData,
}: UpdateSubClassDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const form = useForm<UpdateSubClassInput>({
    resolver: zodResolver(updateSubClassSchema),
    defaultValues: {
      code: subClassData.code,
      name: subClassData.name,
      description: subClassData.description || "",
      isActive: subClassData.isActive,
      therapeuticClassId: subClassData.therapeuticClassId,
    },
  });

  // fetch classes once
  useEffect(() => {
    async function fetch() {
      const classes = await getAllTherapeuticClasses();
      setOptions(
        classes.map((c: TherapeuticClass) => ({
          value: c.id,
          label: c.name,
        }))
      );
    }
    fetch();
  }, []);

  // reset form values when dialog opens or data changes
  useEffect(() => {
    if (isOpen) {
      form.reset({
        code: subClassData.code,
        name: subClassData.name,
        description: subClassData.description || "",
        isActive: subClassData.isActive,
        therapeuticClassId: subClassData.therapeuticClassId,
      });
    }
  }, [isOpen, subClassData, form]);

  const onSubmit = async (values: UpdateSubClassInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateSubClass(subClassData.id, values);
      if (result.success) {
        toast.success("Sous-classe mise à jour avec succès");
        setIsOpen(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la mise à jour de la sous-classe"
        );
      }
    } catch {
      toast.error("Erreur lors de la mise à jour de la sous-classe");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={trigger}
      title="Modifier la sous-classe"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
       
          <TextField
            control={form.control}
            name="name"
            label="Nom"
            placeholder="Nom de la sous-classe"
          />
            <TextField
            control={form.control}
            name="code"
            label="Code (1 lettre)"
            placeholder="A"
            maxLength={1}
          />

          <TextAreaField
            control={form.control}
            name="description"
            label="Description (Optionnelle)"
            placeholder="Description"
          />

          <SwitchField
            control={form.control}
            name="isActive"
            label="Active"
          />

          <SelectWithSearch
            control={form.control}
            name="therapeuticClassId"
            label="Classe thérapeutique"
            placeholder="Sélectionnez une classe"
            options={options}
          />

          <div className="flex justify-end gap-2 mt-10">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
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
