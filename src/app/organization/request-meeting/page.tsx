/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { useRouter } from "next/navigation";
import translations from "./translations";

const RequestMeeting = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [openSections, setOpenSections] = useState<{
    academia: boolean;
    company: boolean;
  }>({
    academia: true,
    company: true,
  });
  const services = [
    {
      title: t.academicSupport,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
    {
      title: t.careerGuidance,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
    {
      title: t.mentalHealth,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
    {
      title: t.administrativeSupport,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
    {
      title: t.researchGuidance,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
  ];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex justify-between">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  {t.organization}
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
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg text-left">
                <div className="space-y-4">
                  {/* Academia Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-textPrimary"
                      onClick={() => toggleSection("academia")}
                    >
                      <div className="flex items-center gap-2">
                        {openSections.academia ? (
                          <IoIosArrowDown
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        ) : (
                          <IoIosArrowForward
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        )}
                        <img src="/images/academia.png" alt="academia" />
                        {t.academia}
                      </div>
                    </div>
                    {openSections.academia && (
                      <div className="text-start text-textSecondary">
                        <div className="mt-2 w-full cursor-pointer rounded-lg bg-bgPrimary px-4 py-1 pl-8 hover:text-textPrimary">
                          {t.university}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg px-4 py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.school}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg px-4 py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.trainingCourse}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Company Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-textPrimary"
                      onClick={() => toggleSection("company")}
                    >
                      <div className="flex items-center gap-2">
                        {openSections.academia ? (
                          <IoIosArrowDown
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        ) : (
                          <IoIosArrowForward
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        )}
                        <img src="/images/company.png" alt="academia" />
                        {t.company}
                      </div>
                    </div>
                    {openSections.company && (
                      <div className="text-start text-textSecondary">
                        <div className="mt-2 cursor-pointer rounded-lg px-4 py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.programming}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg px-4 py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.technology}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg px-4 py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.industry}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:w-4/7 ml-0 w-full ${language === "ar" ? "md:mr-5" : "md:ml-5"}`}
          >
            <div className="hidden items-center md:flex">
              <div className="mb-4 flex w-full justify-start">
                <div className="ml-6 flex w-[220px] items-center gap-4 md:w-fit">
                  <Text font={"bold"} size={"xl"} className="hover:underline">
                    {t.university}
                  </Text>
                  <Text>{t.findPrograms}</Text>
                  <Text>{t.topUniversities}</Text>
                  <Text>{t.studentReviews}</Text>
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="mx-auto w-full p-4 md:p-8 lg:w-4/5">
                {/* Title */}
                <div className="mb-8 flex items-center justify-center">
                  <div className="flex w-full flex-col items-center justify-center md:w-1/3">
                    <Text font={"bold"} size={"xl"}>
                      {t.universityServices}
                    </Text>
                    <Text
                      font={"medium"}
                      size={"md"}
                      color={"gray"}
                      className="mt-4 text-center"
                    >
                      {t.welcomeScheduling}
                    </Text>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer items-start rounded-lg border-t p-6 hover:bg-bgSecondary"
                      onClick={() => {
                        if (service.url)
                          router.push(
                            "/organization/request-meeting/select-date",
                          );
                      }}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-borderPrimary"></div>
                      </div>

                      {/* Content */}
                      <div className="mx-4">
                        <Text font={"bold"} size={"lg"}>
                          {service.title}
                        </Text>
                        <Text font={"bold"} color={"gray"} size={"sm"}>
                          {service.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default RequestMeeting;
