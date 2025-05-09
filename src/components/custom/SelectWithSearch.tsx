// components/custom/SelectWithSearch.tsx
"use client";
import React, { useState } from "react";
import { Control } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface Option {
  value: string;
  label: string;
}

interface SelectWithSearchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
  disabled?: boolean;
}

export default function SelectWithSearch({
  control,
  name,
  label,
  placeholder,
  options,
  disabled = false,
}: SelectWithSearchProps) {
  const [key, setKey] = useState(+new Date());
  const [search, setSearch] = useState("");

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selected = options.find((o) => o.value === field.value);
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select
              key={key}
              onValueChange={field.onChange}
              value={field.value}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder}>
                    {selected ? selected.label : placeholder}
                  </SelectValue>
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                <div className="p-2">
                  <Input
                    className="w-full"
                    placeholder="Rechercher..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {filtered.length > 0 ? (
                  filtered.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-2 text-sm text-center text-muted-foreground">
                    Aucun résultat
                  </div>
                )}

                <SelectSeparator />

                <Button
                  className="w-full px-2"
                  variant="destructive"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setKey(+new Date());
                    setSearch("");
                    field.onChange(null);
                  }}
                >
                  Réinitialiser
                </Button>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
