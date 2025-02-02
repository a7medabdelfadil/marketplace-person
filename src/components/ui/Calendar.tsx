"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "~/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className="rounded-xl bg-bgPrimary p-4 flex flex-col items-center">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months: "flex flex-col space-y-4 items-center",
          month: "space-y-4",
          caption: "flex justify-between items-center pb-2",
          caption_label: "text-lg font-semibold text-textPrimary",
          nav: "flex items-center",
          nav_button:
            "h-8 w-8 cursor-pointer flex items-center justify-center transition",
          nav_button_previous:
            "border border-borderPrimary bg-bgPrimary rounded-l-lg text-textSecondary hover:bg-bgSecondary",
          nav_button_next:
            " bg-primary2 text-white rounded-r-lg hover:bg-primary2Hover",
          table: "w-full border-collapse text-center rounded-xl shadow-md",
          head_row: "flex justify-center text-primary2 px-4 font-semibold text-sm",
          head_cell: "w-10 text-center px-4",
          row: "flex justify-center",
          cell: "relative w-10 h-10 cursor-pointer flex items-center justify-center text-sm rounded-full hover:bg-bgSecondary transition",
          day: "w-full h-full flex items-center justify-center",
          day_selected: "bg-primary2 text-white font-bold",
          day_today:
            "border border-primary2 rounded-full bg-primary2 text-white font-bold",
          day_outside: "text-textSecondary",
          day_disabled: "text-textSecondary opacity-50",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-5 w-5", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-5 w-5", className)} {...props} />
          ),
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
