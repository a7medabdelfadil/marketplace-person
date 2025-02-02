"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { TbPhotoPlus } from "react-icons/tb";
import { useInitializeLanguage, useLanguageStore } from "~/APIs/store";
import Spinner from "~/_components/Spinner";
import LanguageSwitcher from "~/_components/LanguageSwitcher";
import translations from "./translations";

function Signup() {
  const [isChecked, setIsChecked] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

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
        <div className="flex max-h-screen w-full justify-center overflow-auto bg-bgPrimary py-16 scrollbar-hide md:w-1/2 xl:w-3/5">
          <div className="w-4/5 lg:w-2/3 xl:w-1/2">
            <img
              src="/images/opreamIcon.png"
              alt="Opream Icon"
              className="mb-8"
            />
            <Text font={"bold"} size={"3xl"} className="mb-2">
              {t.createAccount}
            </Text>
            <Text className="mb-8 text-textSecondary">{t.description}</Text>
            <div className="space-y-6 py-8">
              <div>
                <label className="text-start font-medium text-textPrimary">
                  {t.fullName}
                </label>
                <div className="mt-1 flex gap-4">
                  <Input className="bg-bgInput" border="none" placeholder={t.firstName} />
                  <Input className="bg-bgInput" border="none" placeholder={t.lastName} />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="role">
                  {t.role}
                </label>
                <select
                  name="role"
                  id="role"
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="unselected">{t.selectRole}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="rolePerson">
                  {t.rolePerson}
                </label>
                <select
                  name="rolePerson"
                  id="rolePerson"
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="unselected">{t.selectRolePerson}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <Input
                className="bg-bgInput"
                border="none"
                type="email"
                label={t.email}
                placeholder={t.emailPlaceholder}
              />
              <Input
                label={t.password}
                className="bg-bgInput"
                border="none"
                placeholder={t.passwordPlaceholder}
                type="password"
              />
              <Input
                label={t.phone}
                className="bg-bgInput"
                border="none"
                placeholder={t.phonePlaceholder}
                type="number"
              />
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="gender">
                  {t.gender}
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="unselected">{t.selectGender}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <Input
                label={t.nationality}
                className="bg-bgInput"
                border="none"
                placeholder={t.nationalityPlaceholder}
              />
              <div>
                <Input
                  label={t.idPicture}
                  id="product-image"
                  name="product-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div
                  onClick={() =>
                    document.getElementById("product-image")?.click()
                  }
                  className="flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-borderPrimary text-textSecondary"
                >
                  <div className="flex flex-col items-center">
                    <TbPhotoPlus size={50} />
                    {fileName ? (
                      <p className="mt-2 text-textPrimary">{fileName}</p>
                    ) : (
                      <p className="mt-2 text-textSecondary">
                        {t.browseOrDrop}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <label className="flex cursor-pointer items-center">
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
                  <span className="ml-2 text-gray-700">{t.agreeTerms}</span>
                </label>
              </div>
              <Button className="mb-10" color="primary">
                {t.signUp}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-2/5">
          <img
            src="/images/signupPerson.png"
            alt="Right Side"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
