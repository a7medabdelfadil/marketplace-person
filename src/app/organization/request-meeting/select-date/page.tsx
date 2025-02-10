/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import translations from "~/app/market/translations";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaClock } from "react-icons/fa6";
import { Calendar2 } from "~/components/ui/Calendar2";

const SelectDate = () => {
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
      title: "Academic Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/select-date",
    },
    {
      title: "Career Guidance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Mental Health and Well-being",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Administrative Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Research Guidance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                  Organization
                </Text>
              </div>
            </div>
            <div className="gap-2 pr-2 pt-2">
              <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                <div className="mb-3 hidden md:block">
                  <label htmlFor="icon" className="sr-only">
                    Search for organization
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
                        Academia
                      </div>
                    </div>
                    {openSections.academia && (
                      <div className="text-textSecondary">
                        <div className="mt-2 w-full cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          University
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          School
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Training Course
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
                        Company
                      </div>
                    </div>
                    {openSections.company && (
                      <div className="text-textSecondary">
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Programming
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Technology
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Industry
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-4/7 ml-5 w-full">
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-start">
                <div className="ml-6 flex w-[220px] items-center gap-4 md:w-fit">
                  <Text font={"bold"} size={"xl"} className="hover:underline">
                    University
                  </Text>
                  <Text>Find Programs</Text>
                  <Text>Top Universities</Text>
                  <Text>Student Reviews</Text>
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="flex w-4/5 mx-auto">
                {/* Sidebar */}
                <div className="w-1/3 border-r bg-white">
                  {/* Back Button */}
                  <div className="border p-6">
                  <button className="flex items-center text-purple-600 hover:text-purple-800">
                    <FaArrowLeft className="mr-2" />
                    Back
                  </button>

                  {/* Logo */}
                  <div className="mt-6 text-2xl font-bold text-gray-800">
                    Logo
                  </div>
                  </div>

                  {/* University Services */}
                  <div className="pt-10 border">
                    <h3 className="text-lg font-bold text-gray-800">
                      University Services
                    </h3>
                    <div className="mt-4 text-gray-600">
                      <p className="font-semibold text-gray-800">
                        Academic Support
                      </p>
                      <div className="mt-2 flex items-center">
                        <FaClock className="mr-2 text-gray-600" />
                        <span>30 Minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className=" p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Select a Date & Time
                  </h3>

                  {/* Calendar Placeholder */}
                  <div className="">
                    <Calendar2 />
                  </div>

                  {/* Time Zone */}
                  <div className="mt-4 text-gray-600">
                    <p className="flex items-center">
                      <FaClock className="mr-2" />
                      UTC Time (12:32pm) <span className="ml-2">▼</span>
                    </p>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default SelectDate;
