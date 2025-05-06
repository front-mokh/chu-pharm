// Complete this component

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
import { updateTherapeuticClass } from "@/lib/services";
import { TherapeuticClass } from "@/generated/prisma";

const updateTherapeuticClassSchema = z.object({
  name: z.string().min(1, "Le nom de la classe thérapeutique est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean(),
});

export type UpdateTherapeuticClassInput = z.infer<
  typeof updateTherapeuticClassSchema
>;

interface UpdateTherapeuticClassDialogProps {
  trigger: React.ReactNode;
  therapeuticClass: TherapeuticClass;
}

export function UpdateTherapeuticClassDialog({
  trigger,
  therapeuticClass: therapeuticClassData,
}: UpdateTherapeuticClassDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const form = useForm<UpdateTherapeuticClassInput>({
    resolver: zodResolver(updateTherapeuticClassSchema),
    defaultValues: {
      name: therapeuticClassData.name,
      description: therapeuticClassData.description || undefined,
      isActive: therapeuticClassData.isActive,
    },
  });

  useEffect(() => {
    if (therapeuticClassData) {
      resetForm();
    }
  }, [therapeuticClassData]);

  const resetForm = () => {
    form.reset({
      name: therapeuticClassData.name,
      description: therapeuticClassData.description || undefined,
      isActive: therapeuticClassData.isActive,
    });
    setIsSubmitting(false);
  };

  const onSubmit = async (values: UpdateTherapeuticClassInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateTherapeuticClass(
        therapeuticClassData.id,
        values
      );

      if (result.success) {
        toast.success("Classe thérapeutique mise à jour avec succès");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error ||
            "Erreur lors de la mise à jour de la classe thérapeutique"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour de la classe thérapeutique");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={trigger}
      title="Modifier la classe thérapeutique"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            control={form.control}
            name="name"
            label="Nom de la classe thérapeutique"
            placeholder="Nom de la classe thérapeutique"
          />

          <TextAreaField
            control={form.control}
            name="description"
            label="Description (Optionnelle)"
            placeholder="Description de la classe thérapeutique"
          />

          <SwitchField
            control={form.control}
            name="isActive"
            label="Classe thérapeutique active"
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

export default UpdateTherapeuticClassDialog;
