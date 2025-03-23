/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { useSignup } from "~/APIs/hooks/useAuth";
import { type SignupPayload } from "~/APIs/features/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import countryCodes from "constants/CountryCodes";

function Signup() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<SignupPayload & { countryCode: string }>({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    gender: "Male", // default
    nationality: "",
    role: "Personal",
    rolePerson: "Student",
    identityImage: null,
    countryCode: "+1", // default
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName || form.firstName.length < 3) {
      newErrors.firstName = "First name is required (min 3 letters)";
    }
    if (!form.lastName || form.lastName.length < 3) {
      newErrors.lastName = "Last name is required (min 3 letters)";
    }
    if (!form.userName || form.userName.length < 3) {
      newErrors.userName = "Username is required (min 3, no spaces)";
    }
    if (!form.email) {
      newErrors.email = "Email is required";
    }
    if (
      !form.password ||
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include at least one letter and one number";
    }
    if (!form.phone) {
      newErrors.phone = "Phone is required";
    }
    if (!form.nationality) {
      newErrors.nationality = "Nationality is required";
    }
    if (!form.identityImage) {
      newErrors.identityImage = "Identity image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { mutate, isPending } = useSignup({
    onSuccess: () => {
      router.push(`/verify-account?email=${encodeURIComponent(form.email)}&redirect=sign-in`);
      toast.success(`Code Verification is sent to ${form.email}`);
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || "Signup Failed";
      toast.error(`❌ ${message}`);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setForm({ ...form, identityImage: file });
    }
  };

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  const handleSubmit = () => {
    if (!validateForm()) return;
    if (!isChecked) {
      toast.error("You must agree to the terms");
      return;
    }
    const { countryCode, ...finalPayload } = {
      ...form,
      phone: `${form.countryCode}${form.phone}`,
    };
    mutate(finalPayload);
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
                  <div className="flex-1">
                    <Input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleInputChange}
                      className="bg-bgInput"
                      border="none"
                      placeholder={t.firstName}
                    />
                    {errors.firstName && (
                      <Text color="error" className="mt-1 text-sm">
                        {errors.firstName}
                      </Text>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleInputChange}
                      className="bg-bgInput"
                      border="none"
                      placeholder={t.lastName}
                    />
                    {errors.lastName && (
                      <Text color="error" className="mt-1 text-sm">
                        {errors.lastName}
                      </Text>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Input
                  name="userName"
                  value={form.userName}
                  onChange={handleInputChange}
                  label={t.username}
                  className="bg-bgInput"
                  border="none"
                  placeholder={t.username}
                />
                {errors.userName && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.userName}
                  </Text>
                )}
                {/* <label className="mt-6 font-semibold" htmlFor="role">
                  {t.role}
                </label>
                <select
                  value={form.role}
                  name="role"
                  id="role"
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="Personal">Personal</option>
                  <option value="Organization">Organization</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.role && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.role}
                  </Text>
                )} */}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="rolePerson">
                  {t.rolePerson}
                </label>
                <select
                  value={form.rolePerson}
                  name="rolePerson"
                  id="rolePerson"
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="Student">Student</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
                {errors.rolePerson && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.rolePerson}
                  </Text>
                )}
              </div>
              <div>
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="bg-bgInput"
                  border="none"
                  type="email"
                  label={t.email}
                  placeholder={t.emailPlaceholder}
                />
                {errors.email && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.email}
                  </Text>
                )}
              </div>
              <div>
                <Input
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  label={t.password}
                  className="bg-bgInput"
                  border="none"
                  placeholder={t.passwordPlaceholder}
                  type="password"
                />
                {errors.password && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.password}
                  </Text>
                )}
              </div>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="font-semibold">{t.countryCode}</label>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-3 text-sm text-textPrimary focus:outline-none"
                  >
                    {Object.entries(countryCodes).map(([country, dial]) => (
                      <option key={country} value={`+${dial}`}>
                        {country} (+{dial})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-2/3">
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    label={t.phone}
                    className="bg-bgInput"
                    border="none"
                    placeholder={t.phonePlaceholder}
                  />
                  {errors.phone && (
                    <Text color="error" className="mt-1 text-sm">
                      {errors.phone}
                    </Text>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="gender">
                  {t.gender}
                </label>
                <select
                  value={form.gender}
                  name="gender"
                  id="gender"
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-2 border-bgInput bg-bgInput p-4 text-sm text-textPrimary focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.gender}
                  </Text>
                )}
              </div>
              <div>
                <Input
                  name="nationality"
                  value={form.nationality}
                  onChange={handleInputChange}
                  label={t.nationality}
                  className="bg-bgInput"
                  border="none"
                  placeholder={t.nationalityPlaceholder}
                />
                {errors.nationality && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.nationality}
                  </Text>
                )}
              </div>
              <div>
                <Input
                  onChange={handleFileChange}
                  label={t.idPicture}
                  id="product-image"
                  name="product-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
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
                {errors.identityImage && (
                  <Text color="error" className="mt-1 text-sm">
                    {errors.identityImage}
                  </Text>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <label className="flex cursor-pointer items-center">
                  <Input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                  />
                  <div
                    className={`min-h-6 min-w-6 ml-2 rounded border-2 ${
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
                  <Text color={"gray"} className="ml-2 min-w-[300px]">
                    {t.agreeTerms}
                  </Text>
                </label>
              </div>
              <Button
                disabled={isPending}
                onClick={handleSubmit}
                className="mb-10"
                color="primary"
              >
                {isPending ? "Loading..." : t.signUp}
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
