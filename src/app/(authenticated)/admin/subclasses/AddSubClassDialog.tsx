// File: app/admin/subclasses/AddSubClassDialog.tsx
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

import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import {
  createSubClass,
  getAllTherapeuticClasses,
} from "@/lib/services";
import SelectWithSearch from "@/components/custom/SelectWithSearch";
import { TherapeuticClass } from "@/generated/prisma";

const createSubClassSchema = z.object({
  code: z
    .string()
    .length(1, "Le code doit être une lettre")
    .regex(/^[A-Za-z]$/, "Le code doit être une lettre"),
  name: z.string().min(1, "Le nom est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  therapeuticClassId: z
    .string()
    .min(1, "Vous devez sélectionner une classe thérapeutique"),
});

export type CreateSubClassInput = z.infer<typeof createSubClassSchema>;

export default function AddSubClassDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [options, setOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const form = useForm<CreateSubClassInput>({
    resolver: zodResolver(createSubClassSchema),
    defaultValues: {
      code: "",
      name: "",
      description: "",
      isActive: true,
      therapeuticClassId: "",
    },
  });

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

  const onSubmit = async (values: CreateSubClassInput) => {
    setIsSubmitting(true);
    try {
      const result = await createSubClass(values);
      if (result.success) {
        toast.success("Sous-classe créée avec succès");
        setIsOpen(false);
        form.reset();
      } else {
        toast.error(
          result.error || "Erreur lors de la création de la sous-classe"
        );
      }
    } catch {
      toast.error("Erreur lors de la création de la sous-classe");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter une sous-classe
        </Button>
      }
      title="Ajouter une nouvelle sous-classe"
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
              {isSubmitting ? "Création..." : "Créer"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}

