"use client";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DatePicker: React.FC<DatePickerProps> = ({ placeholder, onChange, onOpenChanged, open, value }) => {
  return (
    <Popover open={open} onOpenChange={onOpenChanged}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-[240px] justify-start text-left font-normal", !value && "text-muted-foreground")}
        >
          <CalendarIcon />
          {value ? format(value, "PPP") : <span>{placeholder ?? `Pick a date`}</span>}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={value} onSelect={onChange} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

interface DatePickerProps {
  value?: Date;
  open: boolean;
  placeholder?: string;
  onOpenChanged: (open: boolean) => void;
  onChange: (value?: Date) => void;
}

export default DatePicker;
