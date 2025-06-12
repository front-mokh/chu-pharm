// RecordStockExitDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MinusCircle } from "lucide-react";
import { toast } from "sonner";

import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import SelectField from "@/components/custom/SelectField";
import NumberField from "@/components/custom/NumberField";
import DatePickerField from "@/components/custom/DatePickerField";
import TextField from "@/components/custom/TextField"; // For Order Item ID
import { StockExitFormInput, stockExitFormSchema } from "./schemas";
import { recordStockExit } from "./service";
import { Medication, MedicationBatch, ExitReason } from "@/generated/prisma";
import { formatDate, prettifyEnum } from "@/lib/utils";

interface RecordStockExitDialogProps {
  batches: Array<MedicationBatch & { medication: Medication }>; // All active batches
  trigger?: React.ReactNode;
  singleBatchMode?: boolean; // If true, batchId is pre-filled and non-editable
  initialBatchId?: string; // Pre-select this batch
}

const exitReasonOptions = Object.values(ExitReason).map((reason) => ({
  value: reason,
  label: prettifyEnum(reason),
}));

export default function RecordStockExitDialog({
  batches,
  trigger,
  singleBatchMode = false,
  initialBatchId,
}: RecordStockExitDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<
    (MedicationBatch & { medication: Medication }) | null
  >(null);

  const form = useForm<StockExitFormInput>({
    resolver: zodResolver(stockExitFormSchema),
    defaultValues: {
      batchId: initialBatchId || "",
      quantity: undefined,
      exitDate: new Date().toISOString().split("T")[0],
      reason: undefined,
      orderItemId: "",
    },
  });

  const watchedBatchId = form.watch("batchId");

  useEffect(() => {
    if (watchedBatchId) {
      const batch = batches.find((b) => b.id === watchedBatchId);
      setSelectedBatch(batch || null);
    } else {
      setSelectedBatch(null);
    }
  }, [watchedBatchId, batches]);

  useEffect(() => {
    if (isOpen && initialBatchId) {
      form.setValue("batchId", initialBatchId);
      const batch = batches.find((b) => b.id === initialBatchId);
      setSelectedBatch(batch || null);
    }
  }, [isOpen, initialBatchId, batches, form]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset({
        batchId: initialBatchId && singleBatchMode ? initialBatchId : "",
        quantity: undefined,
        exitDate: new Date().toISOString().split("T")[0],
        reason: undefined,
        orderItemId: "",
      });
      setSelectedBatch(null);
    }
  };

  const onSubmit = async (values: StockExitFormInput) => {
    if (selectedBatch && values.quantity > selectedBatch.currentQuantity) {
      form.setError("quantity", {
        type: "manual",
        message: `La quantité ne peut excéder le stock actuel (${selectedBatch.currentQuantity})`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...values,
        quantity: Number(values.quantity),
        exitDate: values.exitDate
          ? new Date(values.exitDate).toISOString()
          : new Date().toISOString(),
        orderItemId: values.orderItemId || undefined, // Ensure it's undefined if empty
      };
      const result = await recordStockExit(payload);
      if (result.success) {
        toast.success("Sortie de stock enregistrée avec succès!");
        handleOpenChange(false);
      } else {
        toast.error("Erreur lors de l'enregistrement de la sortie.");
      }
    } catch (error) {
      console.error("Record stock exit error:", error);
      toast.error("Une erreur serveur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const batchOptions = batches
    .filter((b) => b.currentQuantity > 0) // Only show batches with stock
    .map((batch) => ({
      value: batch.id,
      label: `${batch.medication.commercialName} (${
        batch.medication.dosage
      }) - Lot: ${batch.batchNumber} - Stock: ${
        batch.currentQuantity
      } - Exp: ${formatDate(batch.expirationDate)}`,
    }));

  return (
    <CustomDialog
      trigger={
        trigger || (
          <Button variant="outline">
            <MinusCircle className="mr-2 h-4 w-4" />
            Enregistrer une Sortie
          </Button>
        )
      }
      title={
        singleBatchMode && selectedBatch
          ? `Sortie pour: ${selectedBatch.medication.commercialName} - Lot ${selectedBatch.batchNumber}`
          : "Enregistrer une Sortie de Stock Manuelle"
      }
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <SelectField
            control={form.control}
            name="batchId"
            label="Lot du Médicament"
            placeholder="Sélectionner un lot"
            options={batchOptions}
            disabled={singleBatchMode}
          />
          {selectedBatch && (
            <p className="text-sm text-muted-foreground">
              Stock actuel pour ce lot: {selectedBatch.currentQuantity} unités.
            </p>
          )}
          <NumberField
            control={form.control}
            name="quantity"
            label="Quantité Sortie"
            placeholder="Ex: 10"
            min={1}
            max={selectedBatch?.currentQuantity}
            disabled={!selectedBatch}
          />
          <SelectField
            control={form.control}
            name="reason"
            label="Raison de la Sortie"
            placeholder="Sélectionner une raison"
            options={exitReasonOptions}
          />
          <DatePickerField
            control={form.control}
            name="exitDate"
            label="Date de Sortie (Optionnel)"
          />
          {form.watch("reason") === ExitReason.ORDER_FULFILLMENT && (
            <TextField
              control={form.control}
              name="orderItemId"
              label="ID de l'Article de Commande (Optionnel)"
              placeholder="Coller l'ID si applicable"
            />
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting || !selectedBatch}>
              {isSubmitting ? "Enregistrement..." : "Enregistrer la Sortie"}
            </Button>
          </div>
        </form>
      </Form>
    </CustomDialog>
  );
}
