// src/components/custom/DatePickerWithRange.tsx (or your preferred custom components path)
"use client";

import * as React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  fromDate?: Date;
  toDate?: Date;
  numberOfMonths?: number;
  className?: string;
}

export default function DateRangePicker({
  date,
  onDateChange,
  placeholder = "Choisir une période",
  disabled,
  fromDate,
  toDate,
  numberOfMonths = 2,
  className, // Pass className to the div wrapper or directly to Button
}: DatePickerWithRangeProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className // Apply className here if it's for the button directly
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: fr })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: fr })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: fr })
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(selectedDateRange) => {
              onDateChange(selectedDateRange);
              // Optional: Close popover after selecting a full range
              // if (selectedDateRange?.from && selectedDateRange?.to) {
              //   setIsOpen(false);
              // }
            }}
            numberOfMonths={numberOfMonths}
            locale={fr}
            disabled={disabled}
            fromDate={fromDate}
            toDate={toDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
