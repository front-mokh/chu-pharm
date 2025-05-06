"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { updateUser } from "@/lib/services";
import SwitchField from "@/components/custom/SwitchField";
import { Service, User } from "@/generated/prisma";
import TextField from "@/components/custom/TextField";
import SelectField from "@/components/custom/SelectField";
import showToast from "@/utils/showToast";

const updateUserSchema = z.object({
  firstName: z.string().min(1, "Le prénom est obligatoire"),
  lastName: z.string().min(1, "Le nom est obligatoire"),
  email: z.string().email("L'email doit être valide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .optional(),
  role: z.enum([
    "ADMIN",
    "PHARMACIST",
    "SERVICE_COORDINATOR",
    "ORDER_PREPARER",
  ]),
  serviceId: z.string().optional(),
  isActive: z.boolean(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

interface UpdateUserDialogProps {
  trigger: React.ReactNode;
  user: User;
  services: Service[];
}

export function UpdateUserDialog({
  trigger,
  user: userData,
  services,
}: UpdateUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

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

  const form = useForm<UpdateUserInput>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role,
      serviceId: userData.serviceId || undefined,
      isActive: userData.isActive,
    },
  });

  const watchRole = form.watch("role");

  useEffect(() => {
    if (userData) {
      resetForm();
    }
  }, [userData]);

  const resetForm = () => {
    form.reset({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role,
      serviceId: userData.serviceId || undefined,
      isActive: userData.isActive,
    });
    setIsSubmitting(false);
  };

  const onSubmit = async (values: UpdateUserInput) => {
    setIsSubmitting(true);
    try {
      const result = await updateUser(userData.id, values);

      if (result.success) {
        showToast("success", "Utilisateur mis à jour avec succès");
        handleOpenChange(false);
      } else {
        showToast(
          "error",
          result.error || "Erreur lors de la mise à jour de l'utilisateur"
        );
      }
    } catch (error) {
      console.error(error);
      showToast("error", "Erreur lors de la mise à jour de l'utilisateur");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      trigger={trigger}
      title="Modifier l'utilisateur"
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
            label="Mot de passe (Laisser vide pour ne pas modifier)"
            placeholder="Nouveau mot de passe"
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

          <SwitchField
            control={form.control}
            name="isActive"
            label="Utilisateur actif"
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

export default UpdateUserDialog;
