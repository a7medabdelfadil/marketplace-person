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
import { useSignin } from "~/APIs/hooks/useAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("password123");
  const [isChecked, setIsChecked] = useState(false);

  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const isLoadingLang = useLanguageStore((state) => state.isLoading);

  useInitializeLanguage();

  const signinMutation = useSignin({
    onSuccess: (res) => {
      console.log("Signin Response:", res);

      const token = res?.data?.access_token;
      const refreshToken = res?.data?.refresh_token;

      if (token) {
        Cookies.set("token", token, { expires: 7 });
        Cookies.set("refresh_token", refreshToken, { expires: 7 });
      }

      toast.success("✅ Login successful!");
      router.push("/");
    },
    onError: (err: any) => {
      console.log("Signin Error:", err?.response);
      toast.error(err?.response?.data?.message || "Login failed");
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signinMutation.mutate({
      userName: email,
      password: password,
    });
  };

  if (isLoadingLang) {
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
        <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-40 scrollbar-hide md:w-1/2 xl:w-2/3">
          <div className="w-4/5 lg:w-2/3 xl:w-1/2">
            <img
              src="/images/opreamIcon.png"
              alt="Opream Icon"
              className="mb-8"
            />
            <Text font={"bold"} size={"4xl"} className="mb-2">
              {t.welcomeBack}
            </Text>
            <div className="flex gap-2">
              <Text className="mb-8 text-textSecondary">
                {t.dontHaveAccount}
              </Text>
              <a
                href="/sign-up"
                className="font-medium text-primary hover:underline"
              >
                {t.signUp}
              </a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 py-8">
              <Input
                className="bg-bgInput"
                border="none"
                label={t.emailOrUsername}
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label={t.passwordLabel}
                className="bg-bgInput"
                border="none"
                placeholder={t.passwordPlaceholder}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center space-x-3">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div
                    className={`h-6 w-6 rounded border-2 ${
                      isChecked
                        ? "border-primary bg-primary"
                        : "border-gray-400"
                    } flex items-center justify-center`}
                  >
                    {isChecked && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="mx-2 text-gray-700">{t.rememberMe}</span>
                </label>
                <a
                  href="/forget-password"
                  className="text-sm text-primary hover:underline"
                >
                  {t.forgetPassword}
                </a>
              </div>

              {signinMutation.isError && (
                <Text className="text-red-500">{t.loginError}</Text>
              )}

              <Button
                type="submit"
                className="mb-10 py-6"
                data-testid="login-button"
                color="primary"
                disabled={signinMutation.isPending}
              >
                {signinMutation.isPending ? t.loggingIn : t.loginButton}
              </Button>
            </form>
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-1/3">
          <img
            src="/images/signinPerson.png"
            alt="Right Side"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default SignIn;
