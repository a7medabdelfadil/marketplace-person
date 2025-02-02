/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import translations from "./translations";

const EditProfile = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("male");
  const [maritalStatus, setMaritalStatus] = useState("single");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal((e) => !e);
  };
  const [screenWidth, setScreenWidth] = useState<number>(768); // Set a default value

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);

      if (newWidth >= 768) {
        setIsOpenModal(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      src: "/images/general-info.png",
      alt: "Product",
      text: t.generalInfo,
      url: "/edit-profile",
    },
    {
      src: "/images/introductory-videos.png",
      alt: "Service",
      text: t.introductoryVideos,
      url: "/edit-profile/introductory-videos",
    },
    {
      src: "/images/career-interests.png",
      alt: "Service",
      text: t.careerInterests,
      url: "/edit-profile/career-interests",
    },
    {
      src: "/images/upload-cv.png",
      alt: "Service",
      text: t.uploadCv,
      url: "/edit-profile/upload-cv",
    },
    {
      src: "/images/experience.png",
      alt: "Service",
      text: t.experience,
      url: "/edit-profile/experience",
    },
    {
      src: "/images/skills.png",
      alt: "Service",
      text: t.skills,
      url: "/edit-profile/skills",
    },
    {
      src: "/images/education.png",
      alt: "Service",
      text: t.education,
      url: "/edit-profile/education",
    },
    {
      src: "/images/online-presence.png",
      alt: "Service",
      text: t.onlinePresence,
      url: "/edit-profile/online-presence",
    },
    {
      src: "/images/work-samples.png",
      alt: "Service",
      text: t.workSamples,
      url: "/edit-profile/work-samples",
    },
    {
      src: "/images/achievements.png",
      alt: "Service",
      text: t.achievements,
      url: "/edit-profile/achievements",
    },
  ];

  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex flex-col">
          <div className="flex h-20 items-center justify-between md:hidden">
            <FaArrowLeftLong
              size={25}
              className="ml-4 cursor-pointer"
              onClick={() => router.back()}
            />
            <div
              onClick={toggleModal}
              className="flex cursor-pointer items-center gap-2"
            >
              <Text font={"bold"} size={"xl"}>
                {t.generalInfo}
              </Text>
              <MdKeyboardArrowDown size={25} />
            </div>
            <div></div>
          </div>
          {isOpenModal ? (
            <div className="fixed top-20 w-full overflow-hidden rounded-md bg-bgPrimary pb-28 scrollbar-hide">
              <ul className="text-sm">
                {items.map((item, index) => (
                  <li key={index} className="border-b last:border-none">
                    <Link
                      href={item.url}
                      className={`block px-6 py-6 hover:border-l-4 hover:border-primary hover:bg-bgSecondary hover:font-semibold hover:text-primary ${
                        index === 0
                          ? "border-l-4 border-primary font-semibold text-primary"
                          : ""
                      }`}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex gap-5">
              <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block 2xl:w-1/5">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="mb-2 hidden min-w-[250px] md:block">
                    <Text font={"bold"} className="text-xl md:text-3xl">
                      {t.editProfile}
                    </Text>
                  </div>
                </div>
                <div className="gap-2 pr-2 pt-2">
                  <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                    <div className="mb-3 hidden md:block">
                      <label htmlFor="icon" className="sr-only">
                        {t.searchPlaceholder}
                      </label>
                      <div className="relative min-w-[150px]">
                        <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                          <svg
                            className="size-4 flex-shrink-0 text-textSecondary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="icon"
                          name="icon"
                          className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
                          placeholder={t.searchPlaceholder}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {items.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleButtonClick(item?.url)}
                        className={`${index === 0 ? "mt-0 bg-bgPrimary" : "mt-4"} flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-[25px]"
                        />
                        <Text font={"bold"}>{item.text}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-4/7y w-full">
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
                          <Text
                            color={"gray"}
                            font={"semiBold"}
                            className="mt-1"
                          >
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
                          <Input
                            border="gray"
                            theme="gray"
                            label={t.firstName}
                          />
                          <Input
                            border="gray"
                            theme="gray"
                            label={t.lastName}
                          />
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
                                  onChange={() =>
                                    setMaritalStatus("unspecified")
                                  }
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
                          <label
                            htmlFor="number-of-dependents"
                            className="font-medium"
                          >
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
                          <label
                            htmlFor="military-status"
                            className="font-medium"
                          >
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
                          <Input
                            border="gray"
                            theme="gray"
                            label={t.postalCode}
                          />
                        </div>
                      </div>
                      <div className="mt-10 rounded-xl border border-borderPrimary p-4">
                        <Text font={"bold"} size={"2xl"}>
                          {t.contactInfo}
                        </Text>
                        <div className="mt-4 w-full lg:w-1/2">
                          <Input
                            border="gray"
                            theme="gray"
                            label={t.mobileNumber}
                          />
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
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default EditProfile;
