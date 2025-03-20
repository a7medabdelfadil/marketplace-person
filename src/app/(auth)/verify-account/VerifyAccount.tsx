"use client";

export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import LanguageSwitcher from "~/_components/LanguageSwitcher";
import Spinner from "~/_components/Spinner";
import { Text } from "~/_components/Text";
import { useInitializeLanguage, useLanguageStore } from "~/APIs/store";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import translations from "./translations";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyOtp, useResendOtp } from "~/APIs/hooks/useAuth";

function VerifyAccount() {
  const router = useRouter();
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "User@gmail.com";

  const [otp, setOtp] = useState("");

  // 🟢 Verify OTP API Hook
  const { mutate, isPending } = useVerifyOtp({
    onSuccess: () => {
      alert("✅ Your email is verified successfully");
      router.push("/sign-in");
    },
    onError: () => {
      alert("❌ Invalid OTP, please try again.");
    },
  });

  // 🟢 Resend OTP API Hook
  const { mutate: resend, isPending: resendPending } = useResendOtp({
    onSuccess: () => {
      alert("✅ OTP has been resent successfully!");
    },
    onError: () => {
      alert("❌ Failed to resend OTP");
    },
  });

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      mutate({ userName: email, otp: otp });
    } else {
      alert("❌ OTP must be 6 digits");
    }
  };

  const handleResend = () => {
    resend({ userName: email });
  };

  useInitializeLanguage();
  const isLoading = useLanguageStore((state) => state.isLoading);

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
            <div className="flex gap-1">
              <Text className="text-textSecondary">{t.description}</Text>
              <Text font={"medium"}>{email}</Text>
            </div>
            <div className="space-y-16 py-8">
              <InputOTP maxLength={6} onChange={handleOtpChange} value={otp}>
                <InputOTPGroup className="flex w-full justify-between">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      data-testid="otp-slot"
                      className="h-16 w-16 rounded-md border border-borderPrimary bg-bgSecondary text-2xl font-semibold"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <Button
                onClick={handleVerify}
                className="mb-10 py-6"
                color="primary"
                disabled={isPending}
              >
                {isPending ? "Verifying..." : t.verifyButton}
              </Button>
              <div className="flex justify-center gap-2">
                <Text>{t.resendText}</Text>
                <button
                  onClick={handleResend}
                  disabled={resendPending}
                  className="font-medium text-primary hover:underline disabled:opacity-50"
                >
                  {resendPending ? "Sending..." : t.resendLink}
                </button>
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

export default VerifyAccount;