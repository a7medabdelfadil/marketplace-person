"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "~/lib/utils";
import { useLanguageStore } from "~/APIs/store";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-bgPrimary">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("w-full", className)}
        classNames={{
          months: "flex flex-col space-y-4 items-center",
          month: "space-y-4 w-full",
          caption:
            "flex justify-center gap-2 md:justify-between items-center pb-2 w-full",
          caption_label: "text-lg font-semibold text-textPrimary",
          nav: "flex items-center",
          nav_button:
            "h-8 w-8 cursor-pointer relative flex items-center justify-center transition",
          nav_button_previous: `md:border border-borderPrimary absolute md:left-0 bg-bgPrimary rounded-full md:rounded-none ${language == "ar" ? "md:rounded-l-lg -right-48 md:right-0 rotate-180" : "md:rounded-l-lg -left-48"} text-textSecondary hover:bg-bgSecondary`,
          nav_button_next: `bg-primary/10 md:bg-primary2 text-white rounded-full md:rounded-none ${language == "ar" ? "md:rounded-r-lg rotate-180" : "md:rounded-r-lg"} hover:bg-primaryHover md:hover:bg-primary2Hover`,
          table: "w-full border-collapse text-center rounded-xl md:shadow-md",
          head_row:
            "grid grid-cols-7 text-primary md:text-primary2 px-4 font-semibold text-sm",
          // head_row: "flex justify-center text-primary2 px-4 font-semibold text-sm",
          head_cell: "w-10 text-center px-4",
          row: "grid grid-cols-7 px-4",
          // row: "flex justify-center",
          cell: "relative w-10 h-10 cursor-pointer flex items-center justify-center text-sm rounded-full hover:bg-bgSecondary transition",
          day: "w-full h-full flex items-center justify-center",
          day_selected:
            "bg-primary md:bg-primary2 rounded-full text-white font-bold",
          day_today:
            "border border-primary md:border-primary2 rounded-full bg-primary md:bg-primary2 text-white font-bold",
          day_outside: "text-textSecondary",
          day_disabled: "text-textSecondary opacity-50",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-5 w-5", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight
              className={cn("h-5 w-5 text-primary md:text-white", className)}
              {...props}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
