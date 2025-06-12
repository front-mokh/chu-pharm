"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import TextField from "@/components/custom/TextField";
import TextAreaField from "@/components/custom/TextAreaField";
import { toast } from "sonner";
import { createService } from "@/lib/services";
import { PlusCircle } from "lucide-react";

const createServiceSchema = z.object({
  name: z.string().min(1, "Le nom du service est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;

export default function AddServiceDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const form = useForm<CreateServiceInput>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const onSubmit = async (values: CreateServiceInput) => {
    setIsSubmitting(true);
    try {
      const result = await createService(values);

      if (result.success) {
        toast.success("Service créé avec succès");
        handleOpenChange(false);
      } else {
        toast.error(result.error || "Erreur lors de la création du service");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la création du service");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un service
        </Button>
      }
      title="Ajouter un nouveau service"
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
              {isSubmitting ? "Création..." : "Créer"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
