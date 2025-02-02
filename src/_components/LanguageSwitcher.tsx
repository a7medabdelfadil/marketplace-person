/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  type Language,
  useLanguageStore,
  useInitializeLanguage,
} from "~/APIs/store";

const LanguageSwitcher = () => {
  useInitializeLanguage(); // Initialize language state from localStorage

  const language = useLanguageStore((state) => state.language); // Get current language
  const setLanguage = useLanguageStore((state) => state.setLanguage); // Function to update language
  const isLoading = useLanguageStore((state) => state.isLoading); // Track loading state

  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const options = [
    { value: "en", label: "EN", img: "/images/en.png" },
    { value: "ar", label: "AR", img: "/images/ar.png" },
    { value: "fr", label: "FR", img: "/images/fr.png" },
    { value: "ru", label: "RU", img: "/images/ru.png" },
  ];

  const handleSelect = (value: Language) => {
    setLanguage(value);
    setIsOpen(false); // Close dropdown after selection
  };

  // Don't render until initialization is complete
  if (isLoading) return null;

  return (
    <div
      className="relative inline-flex w-fit items-center rounded-lg bg-bgSecondary p-2 shadow-md"
      aria-label="Language Switcher"
    >
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={options.find((opt) => opt.value === language)?.img}
          alt="Current Language"
          className="h-6 w-6 rounded-full"
        />
        <span className="text-sm font-medium text-textPrimary">
          {options.find((opt) => opt.value === language)?.label}
        </span>
        <svg
          className="ml-1 h-5 w-5 text-textPrimary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-bgPrimary shadow-lg"
          role="menu"
        >
          <ul className="py-1">
            {options.map(({ value, label, img }) => (
              <li
                key={value}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-bgSecondary"
                onClick={() => handleSelect(value as Language)}
              >
                <img
                  src={img}
                  alt={`${label} flag`}
                  className="h-5 w-5 rounded-full"
                />
                <span className="text-sm font-medium text-textPrimary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
