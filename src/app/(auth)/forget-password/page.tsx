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
import { useForgetPassword } from "~/APIs/hooks/useAuth";
import { toast } from "react-toastify";

function ForgetPassword() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  useInitializeLanguage();
  const isLoading = useLanguageStore((state) => state.isLoading);

  const [email, setEmail] = useState("");
  const { mutate, status } = useForgetPassword({
    onSuccess: () => {
      toast.success("Check your email for further instructions.");
    },
    onError: () => {
      toast.error("An error occurred. Please try again.");
    },
  });
  
  const isSubmitting = status === "pending";
  

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
                className="bg-bgInput"
                border="none"
                type="email"
                label={t.emailLabel}
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="mb-10 py-6"
                color="primary"
                onClick={() => mutate({ userName: email })}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : t.nextButton}
              </Button>
              <div className="flex justify-center gap-2">
                <Text>{t.rememberPassword}</Text>
                <a
                  href="sign-in"
                  className="font-medium text-primary hover:underline"
                >
                  {t.loginLink}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-2/5">
          <img
            src="/images/forgetPasswordPerson.png"
            alt="Right Side"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
