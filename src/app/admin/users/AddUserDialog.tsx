"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { createUser } from "@/lib/services";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import TextField from "@/components/custom/TextField";
import SelectField from "@/components/custom/SelectField";
import { Service } from "@/generated/prisma";

const createUserSchema = z.object({
  firstName: z.string().min(1, "Le prénom est obligatoire"),
  lastName: z.string().min(1, "Le nom est obligatoire"),
  email: z.string().email("L'email doit être valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  role: z.enum([
    "ADMIN",
    "PHARMACIST",
    "SERVICE_COORDINATOR",
    "ORDER_PREPARER",
  ]),
  serviceId: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

interface AddUserDialogProps {
  services: Service[];
}

export default function AddUserDialog({ services }: AddUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const form = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const watchRole = form.watch("role");

  const roleOptions = [
    { label: "Administrateur", value: "ADMIN" },
    { label: "Pharmacien", value: "PHARMACIST" },
    { label: "Coordinateur de Service", value: "SERVICE_COORDINATOR" },
    { label: "Préparateur de Commande", value: "ORDER_PREPARER" },
  ];

  const serviceOptions = services.map((service) => ({
    label: service.name,
    value: service.id,
  }));

  const onSubmit = async (values: CreateUserInput) => {
    setIsSubmitting(true);
    try {
      const result = await createUser(values);

      if (result.success) {
        toast.success("Utilisateur créé avec succès");
        handleOpenChange(false);
      } else {
        toast.error(
          result.error || "Erreur lors de la création de l'utilisateur"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la création de l'utilisateur");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un utilisateur
        </Button>
      }
      title="Ajouter un nouvel utilisateur"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              control={form.control}
              name="firstName"
              label="Prénom"
              placeholder="Prénom"
            />
            <TextField
              control={form.control}
              name="lastName"
              label="Nom"
              placeholder="Nom"
            />
          </div>

          <TextField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Email"
          />

          <TextField
            control={form.control}
            name="password"
            label="Mot de passe"
            placeholder="Mot de passe"
          />

          <SelectField
            control={form.control}
            name="role"
            label="Rôle"
            placeholder="Sélectionner un rôle"
            options={roleOptions}
          />

          {watchRole === "SERVICE_COORDINATOR" && (
            <SelectField
              control={form.control}
              name="serviceId"
              label="Service"
              placeholder="Sélectionner un service"
              options={serviceOptions}
            />
          )}

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
