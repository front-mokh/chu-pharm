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
import { updateService } from "@/lib/services";
import { Service } from "@/generated/prisma";

const updateServiceSchema = z.object({
  name: z.string().min(1, "Le nom du service est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean(),
});

export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;

interface UpdateServiceDialogProps {
  trigger: React.ReactNode;
  service: Service;
}

export function UpdateServiceDialog({
  trigger,
  service: serviceData,
}: UpdateServiceDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const form = useForm<UpdateServiceInput>({
    resolver: zodResolver(updateServiceSchema),
    defaultValues: {
      name: serviceData.name,
      description: serviceData.description || undefined,
      isActive: serviceData.isActive,
    },
  });

  useEffect(() => {
    if (serviceData) {
      resetForm();
    }
  }, [serviceData]);

  const resetForm = () => {
    form.reset({
      name: serviceData.name,
      description: serviceData.description || undefined,
      isActive: serviceData.isActive,
    });
    setIsSubmitting(false);
  };

  const onSubmit = async (values: UpdateServiceInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateService(serviceData.id, values);

      if (result.success) {
        toast.success("Service mis à jour avec succès");
        handleOpenChange(false);
      } else {
        toast.error(result.error || "Erreur lors de la mise à jour du service");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour du service");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={trigger}
      title="Modifier le service"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            control={form.control}
            name="name"
            label="Nom du service"
            placeholder="Nom du service"
          />

          <TextAreaField
            control={form.control}
            name="description"
            label="Description (Optionnelle)"
            placeholder="Description du service"
          />

          <SwitchField
            control={form.control}
            name="isActive"
            label="Service actif"
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

export default UpdateServiceDialog;
