"use client";

import type { ReactNode } from "react";
import { useLanguageStore } from "~/APIs/store";

const Container = ({
  children,
  className = "",
  mr = true,
}: {
  children?: ReactNode;
  className?: string; // Allow passing custom classes
  mr?: boolean;
}) => {
  const language = useLanguageStore((state) => state.language); // Get the current language

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`m-0 mt-5 transform transition duration-300 ease-in ${
        language === "ar"
          ? `${mr ? "md:ml-[10px]" : ""} md:mr-[130px] lg:mr-[170px]`
          : `md:ml-[130px] ${mr ? "md:mr-[10px]" : ""} lg:ml-[170px]`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
