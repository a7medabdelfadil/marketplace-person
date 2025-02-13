import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import translations from "./translations";
import { useLanguageStore } from "~/APIs/store";

function GeneralInfo() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [gender, setGender] = useState("male");
  const [maritalStatus, setMaritalStatus] = useState("single");
  return (
    <>
      <div className="md:w-4/7 w-full">
        <div className="-mt-[20px] bg-bgPrimary px-0 pb-[120px] pt-5 md:mb-8 md:px-4 md:pb-[20px]">
          <div className="flex justify-center">
            <div className="m-4 w-full md:m-0 md:w-4/5">
              <div className="flex flex-col items-center gap-4 xl:flex-row xl:items-start">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src="/images/edit-profile.png"
                    alt="Edit Profile Photo"
                    className="h-[100px] w-[100px] rounded-full object-cover xl:h-[140px] xl:w-[140px]"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex flex-col justify-between text-center xl:text-left">
                  <Text font={"bold"} size={"xl"}>
                    {t.profilePhoto}
                  </Text>
                  <Text color={"gray"} font={"semiBold"} className="mt-1">
                    {t.photoRequirements}
                  </Text>

                  {/* Upload Button */}
                  <div className="mt-4 flex w-full justify-center xl:w-1/2 xl:justify-start">
                    <Button>{t.uploadPhoto}</Button>
                  </div>
                </div>
              </div>

              <div className="mt-20 rounded-xl border border-borderPrimary p-4">
                <Text font={"bold"} size={"2xl"}>
                  {t.personalInfo}
                </Text>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row">
                  <Input border="gray" theme="gray" label={t.firstName} />
                  <Input border="gray" theme="gray" label={t.lastName} />
                </div>
                <div className="mt-4">
                  <label className="font-medium">{t.birthdate}</label>
                  <div className="flex flex-col gap-4 lg:flex-row">
                    {/* Dropdown for Day */}
                    <select
                      name="day"
                      id="day"
                      className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/5"
                    >
                      <option value="unselected">{t.day}</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    {/* Dropdown for Month */}
                    <select
                      name="month"
                      id="month"
                      className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/5"
                    >
                      <option value="unselected">{t.month}</option>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, index) => (
                        <option key={index + 1} value={index + 1}>
                          {month}
                        </option>
                      ))}
                    </select>

                    {/* Dropdown for Year */}
                    <select
                      name="year"
                      id="year"
                      className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/5"
                    >
                      <option value="unselected">{t.year}</option>
                      {Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="my-4">
                    <label className="block text-lg font-medium">
                      {t.gender}
                    </label>
                    <div className="mt-2 flex gap-4">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={() => setGender("male")}
                          className="hidden"
                        />
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            gender === "male"
                              ? "border-primary"
                              : "border-textSecondary"
                          }`}
                        >
                          {gender === "male" && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                        {t.male}
                      </label>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={gender === "female"}
                          onChange={() => setGender("female")}
                          className="hidden"
                        />
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            gender === "female"
                              ? "border-primary"
                              : "border-textSecondary"
                          }`}
                        >
                          {gender === "female" && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                        {t.female}
                      </label>
                    </div>
                  </div>

                  {/* Marital Status Section */}
                  <div>
                    <label className="block text-lg font-medium">
                      {t.maritalStatus}
                    </label>
                    <div className="mt-2 flex gap-4">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="unspecified"
                          checked={maritalStatus === "unspecified"}
                          onChange={() => setMaritalStatus("unspecified")}
                          className="hidden"
                        />
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            maritalStatus === "unspecified"
                              ? "border-primary"
                              : "border-textSecondary"
                          }`}
                        >
                          {maritalStatus === "unspecified" && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                        {t.unspecified}
                      </label>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="single"
                          checked={maritalStatus === "single"}
                          onChange={() => setMaritalStatus("single")}
                          className="hidden"
                        />
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            maritalStatus === "single"
                              ? "border-primary"
                              : "border-textSecondary"
                          }`}
                        >
                          {maritalStatus === "single" && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                        {t.single}
                      </label>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="married"
                          checked={maritalStatus === "married"}
                          onChange={() => setMaritalStatus("married")}
                          className="hidden"
                        />
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            maritalStatus === "married"
                              ? "border-primary"
                              : "border-textSecondary"
                          }`}
                        >
                          {maritalStatus === "married" && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                        {t.married}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="nationality" className="font-medium">
                    {t.nationality}
                  </label>
                  <select
                    name="nationality"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">test</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="number-of-dependents" className="font-medium">
                    {t.numDependents}
                  </label>
                  <select
                    name="number-of-dependents"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">Test</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="military-status" className="font-medium">
                    {t.maritalStatus}
                  </label>
                  <select
                    name="military-status"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">test</option>
                  </select>
                </div>
              </div>
              <div className="mt-10 rounded-xl border border-borderPrimary p-4">
                <Text font={"bold"} size={"2xl"}>
                  {t.location}
                </Text>
                <div className="mt-4">
                  <label htmlFor="country" className="font-medium">
                    {t.country}
                  </label>
                  <select
                    name="country"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">test</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="city" className="font-medium">
                    {t.city}
                  </label>
                  <select
                    name="city"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">Test</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="area" className="font-medium">
                    {t.area}
                  </label>
                  <select
                    name="area"
                    id="day"
                    className="mt-1 block w-full rounded-lg border-2 border-borderPrimary/50 bg-lightGray p-4 text-sm text-textPrimary focus:outline-none lg:w-1/2"
                  >
                    <option value="unselected">Test</option>
                  </select>
                </div>
                <div className="mt-4 w-full lg:w-1/2">
                  <Input border="gray" theme="gray" label={t.postalCode} />
                </div>
              </div>
              <div className="mt-10 rounded-xl border border-borderPrimary p-4">
                <Text font={"bold"} size={"2xl"}>
                  {t.contactInfo}
                </Text>
                <div className="mt-4 w-full lg:w-1/2">
                  <Input border="gray" theme="gray" label={t.mobileNumber} />
                </div>
                <div className="mt-4 w-full lg:w-1/2">
                  <Input
                    border="gray"
                    theme="gray"
                    label={t.alternativeNumber}
                  />
                </div>
              </div>
              <div className="mt-10 w-full lg:w-fit">
                <Button>{t.saveChanges}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
