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
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { createTherapeuticClass } from "@/lib/services";

// Updated schema with code field
const createTherapeuticClassSchema = z.object({
  code: z.string()
    .min(2, "Le code doit contenir 2 chiffres")
    .max(2, "Le code doit contenir 2 chiffres")
    .regex(/^\d{2}$/, "Le code doit contenir uniquement 2 chiffres"),
  name: z.string().min(1, "Le nom de la classe thérapeutique est obligatoire"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type CreateTherapeuticClassInput = z.infer<
  typeof createTherapeuticClassSchema
>;

export default function AddTherapeuticClassDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const form = useForm<CreateTherapeuticClassInput>({
    resolver: zodResolver(createTherapeuticClassSchema),
    defaultValues: {
      code: "",
      isActive: true,
    },
  });

  const onSubmit = async (values: CreateTherapeuticClassInput) => {
    setIsSubmitting(true);
    try {
      const result = await createTherapeuticClass(values);
      if (result.success) {
        toast.success("Classe thérapeutique créée avec succès");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error ||
          "Erreur lors de la création de la classe thérapeutique"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la création de la classe thérapeutique");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter une classe thérapeutique
        </Button>
      }
      title="Ajouter une nouvelle classe thérapeutique"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Add the new code field */}
        
          <TextField
            control={form.control}
            name="name"
            label="Nom de la classe thérapeutique"
            placeholder="Nom de la classe thérapeutique"
          />
          <TextField
            control={form.control}
            name="code"
            label="Code (2 chiffres)"
            placeholder="01"
            maxLength={2}
          />
          
          <TextAreaField
            control={form.control}
            name="description"
            label="Description (Optionnelle)"
            placeholder="Description de la classe thérapeutique"
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