"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "~/lib/utils";
import { useLanguageStore } from "~/APIs/store";

export type Calendar2Props = React.ComponentProps<typeof DayPicker>;

function Calendar2({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: Calendar2Props) {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-bgPrimary">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("w-full", className)}
        classNames={{
          months: "flex flex-col space-y-4 items-center",
          month: "space-y-4 w-full",
          caption: "flex items-center justify-between w-full pb-2 relative",
          caption_label: "text-lg font-semibold text-textPrimary flex-1 text-center",
          nav: "flex items-center absolute inset-y-0 w-full justify-between px-8",
          nav_button:
            "h-8 w-8 cursor-pointer flex items-center justify-center transition rounded-full",
          nav_button_previous: `bg-bgPrimary text-textSecondary hover:bg-bgSecondary ${
            language === "ar" ? "rotate-180 order-2" : "order-1"
          }`,
          nav_button_next: `bg-primary/10 text-primary2 hover:bg-primary2Hover hover:text-white transition duration-300 ${
            language === "ar" ? "rotate-180 order-1" : "order-2"
          }`,
          table: "w-full border-collapse text-center rounded-xl",
          head_row: "grid grid-cols-7 text-textPrimary px-4 font-medium text-sm",
          head_cell: "w-10 text-center px-4",
          row: "grid grid-cols-7 px-4",
          cell: "relative w-10 h-10 cursor-pointer flex items-center justify-center text-sm rounded-full hover:bg-bgSecondary transition",
          day: "w-full h-full flex items-center justify-center",
          day_selected: "bg-primary2 text-white rounded-full font-bold hover:bg-primary2Hover",
          day_today:
            "rounded-full bg-bgFourth text-primary2 font-bold hover:bg-primary2 hover:text-white",
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

Calendar2.displayName = "Calendar2";

export { Calendar2 };
