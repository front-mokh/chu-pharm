"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { OrderValidationFormInput } from "../../schemas";
import { OrderForValidation } from "../../service"; // Full type for item data
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { OrderItemStatus, MedicationForm } from "@/generated/prisma";
import { prettifyEnum } from "@/lib/utils";
import { CheckCircle, HelpCircle, PackageX, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface OrderValidationItemProps {
  itemIndex: number;
  medicationItem: OrderForValidation["orderItems"][0];
}

const statusOptions = [
  {
    value: OrderItemStatus.PENDING,
    label: "En Attente",
    icon: <HelpCircle className="mr-2 h-4 w-4 text-gray-500" />,
  },
  {
    value: OrderItemStatus.VALIDATED,
    label: "Validé",
    icon: <CheckCircle className="mr-2 h-4 w-4 text-green-500" />,
  },
  {
    value: OrderItemStatus.PARTIALLY_VALIDATED,
    label: "Validé Partiellement",
    icon: <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />,
  },
  {
    value: OrderItemStatus.NOT_AVAILABLE,
    label: "Non Disponible",
    icon: <PackageX className="mr-2 h-4 w-4 text-red-500" />,
  },
];

export default function OrderValidationItem({
  itemIndex,
  medicationItem,
}: OrderValidationItemProps) {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<OrderValidationFormInput>();

  const itemPathPrefix = `items.${itemIndex}` as const;
  const currentItemStatus = watch(`${itemPathPrefix}.status`);
  const validatedQuantity = watch(`${itemPathPrefix}.validatedQuantity`);

  const requestedQuantity = medicationItem.requestedQuantity;
  const totalAvailableStock = medicationItem.totalAvailableStock || 0;

  // Determine if validatedQuantity input should be enabled
  const isQuantityInputDisabled =
    currentItemStatus === OrderItemStatus.NOT_AVAILABLE ||
    currentItemStatus === OrderItemStatus.PENDING;

  // Warning if validated quantity exceeds available stock
  const showStockWarning =
    (currentItemStatus === OrderItemStatus.VALIDATED ||
      currentItemStatus === OrderItemStatus.PARTIALLY_VALIDATED) &&
    validatedQuantity !== undefined &&
    validatedQuantity > totalAvailableStock;

  const itemErrors = errors.items?.[itemIndex];

  return (
    <Card className="mb-4 border border-border">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">
              {medicationItem.medication.commercialName}
            </CardTitle>
            <CardDescription>
              {medicationItem.medication.dci} -{" "}
              {prettifyEnum(medicationItem.medication.form as MedicationForm)} -{" "}
              {medicationItem.medication.dosage}
            </CardDescription>
          </div>
          <Badge
            variant={totalAvailableStock > 0 ? "secondary" : "destructive"}
            className="whitespace-nowrap"
          >
            Stock Dispo: {totalAvailableStock}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        <div className="md:col-span-2">
          <Label htmlFor={`${itemPathPrefix}.requestedQuantity`}>Demandé</Label>
          <Input
            id={`${itemPathPrefix}.requestedQuantity`}
            value={requestedQuantity}
            readOnly
            disabled
            className="mt-1 bg-slate-50"
          />
        </div>

        <Controller
          name={`${itemPathPrefix}.status`}
          control={control}
          render={({ field }) => (
            <div className="md:col-span-3">
              <Label htmlFor={`${itemPathPrefix}.statusField`}>
                Statut Validation
              </Label>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value} // Should be pre-filled by defaultValues in main form
                value={field.value}
                disabled={field.disabled}
              >
                <SelectTrigger
                  id={`${itemPathPrefix}.statusField`}
                  className="mt-1"
                >
                  <SelectValue placeholder="Choisir un statut..." />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <div className="flex items-center">
                        {opt.icon} {opt.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {itemErrors?.status && (
                <p className="text-sm text-red-500 mt-1">
                  {itemErrors.status.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="md:col-span-2">
          <Label htmlFor={`${itemPathPrefix}.validatedQuantity`}>
            Quantité Validée
          </Label>
          <Controller
            name={`${itemPathPrefix}.validatedQuantity`}
            control={control}
            render={({ field }) => (
              <Input
                id={`${itemPathPrefix}.validatedQuantity`}
                type="number"
                placeholder="Qté"
                className="mt-1"
                {...field}
                value={field.value ?? ""} // Handle undefined for input type=number
                onChange={(e) =>
                  field.onChange(
                    e.target.value === ""
                      ? undefined
                      : parseInt(e.target.value, 10)
                  )
                }
                disabled={isQuantityInputDisabled || field.disabled}
                min="0"
                max={requestedQuantity} // Cannot validate more than requested
              />
            )}
          />
          {itemErrors?.validatedQuantity && (
            <p className="text-sm text-red-500 mt-1">
              {itemErrors.validatedQuantity.message}
            </p>
          )}
          {showStockWarning && (
            <p className="text-xs text-orange-600 mt-1 flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" /> Stock disponible (
              {totalAvailableStock}) insuffisant.
            </p>
          )}
        </div>

        <div className="md:col-span-5">
          <Label htmlFor={`${itemPathPrefix}.notes`}>
            Notes Pharmacien (Optionnel)
          </Label>
          <Controller
            name={`${itemPathPrefix}.notes`}
            control={control}
            render={({ field }) => (
              <Textarea
                id={`${itemPathPrefix}.notes`}
                placeholder="Ex: Remplacé par..., Stock partiel disponible..."
                className="mt-1 min-h-[60px]"
                {...field}
                value={field.value ?? ""}
              />
            )}
          />
          {itemErrors?.notes && (
            <p className="text-sm text-red-500 mt-1">
              {itemErrors.notes.message}
            </p>
          )}
        </div>
      </CardContent>
      {/* Hidden fields if necessary, but schema should carry them */}
      <Controller
        name={`${itemPathPrefix}.orderItemId`}
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name={`${itemPathPrefix}.medicationId`}
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />
      <Controller
        name={`${itemPathPrefix}.requestedQuantity`}
        control={control}
        render={({ field }) => <input type="hidden" {...field} />}
      />
    </Card>
  );
}
