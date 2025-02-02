"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import LanguageSwitcher from "~/_components/LanguageSwitcher";
import Spinner from "~/_components/Spinner";
import { Text } from "~/_components/Text";
import { useInitializeLanguage, useLanguageStore } from "~/APIs/store";
import translations from "./translations";

function ChangePassword() {
  const language = useLanguageStore((state) => state.language);
  console.log("👾 ~ ForgetPassword ~ language:", language);
  const t = translations[language] || translations.en;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useInitializeLanguage(); // Ensure language state is initialized
  const isLoading = useLanguageStore((state) => state.isLoading); // Check if language is loading

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div
        className={`absolute ${language === "ar" ? "right-4" : "left-4"} top-4 flex w-fit justify-end bg-transparent`}
      >
        <LanguageSwitcher />
      </div>
      <div dir={language === "ar" ? "rtl" : "ltr"} className="flex h-screen">
        {/* Left Section */}
        <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-32 scrollbar-hide md:w-1/2 xl:w-3/5">
          <div className="w-4/5 lg:w-2/3 xl:w-1/2">
            <img
              src="/images/opreamIcon.png"
              alt="Opream Icon"
              className="mb-16"
            />
            <Text font={"bold"} size={"4xl"} className="mb-2">
              {t.title}
            </Text>
            <Text className="text-textSecondary">{t.description}</Text>
            <div className="space-y-8 py-8">
              <Input
                theme="gray"
                border="none"
                type="password"
                label={t.createPassword}
                placeholder={t.createPassword}
              />
              <Input
                theme="gray"
                border="none"
                type="password"
                label={t.newPassword}
                placeholder={t.newPassword}
              />
              <Input
                theme="gray"
                border="none"
                type="password"
                label={t.reenterPassword}
                placeholder={t.reenterPassword}
              />
              <Button className="mb-10 py-6" color="primary">
                {t.confirm}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-2/5">
          <img
            src="/images/changePasswordPerson.png"
            alt="Right Side"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
