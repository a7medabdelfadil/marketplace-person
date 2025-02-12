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
import { FaArrowLeft } from "react-icons/fa6";
import { Calendar2 } from "~/components/ui/Calendar2";
import Button from "~/_components/Button";
import { FaRegClock } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const SelectDate = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  const [openSections, setOpenSections] = useState<{
    academia: boolean;
    company: boolean;
  }>({
    academia: true,
    company: true,
  });

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
                        <div
                          onClick={() => router.push("/organization")}
                          className="mt-2 w-full cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary"
                        >
                          University
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          School
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
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
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          Programming
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          Technology
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          Industry
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
              className="px-0 px-4 pb-[120px] md:mb-8 md:pb-[20px] lg:pt-4"
            >
              <div
                className={`mx-auto flex min-h-[700px] w-full flex-col rounded-lg border-borderPrimary/25 lg:border lg:shadow-md xl:flex-row 2xl:w-4/5`}
              >
                {/* Sidebar */}
                <div className="w-full bg-bgPrimary xl:w-1/3 xl:border-r xl:pt-4">
                  {/* Back Button */}
                  <div className="hidden justify-between p-6 xl:flex">
                    <div
                      onClick={() => router.back()}
                      className="-mt-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary2 p-1 hover:bg-primary2Hover"
                    >
                      <FaArrowLeft className="text-white" size={25} />
                    </div>
                    {/* Logo */}
                    <Text font={"bold"} size={"4xl"} className="mr-8">
                      Logo
                    </Text>
                    <div></div>
                  </div>

                  {/* University Services */}
                  <div className="p-0 md:pt-10 lg:p-4 xl:border-t">
                    {/* <h3 className="text-lg font-bold text-gray-800"> */}
                    {/* </h3> */}
                    <Text font={"bold"} size={"xl"}>
                      University Services
                    </Text>
                    <div className="mt-2 flex items-center">
                      <HiOutlineAcademicCap
                        className="mr-1 mt-1 block md:hidden"
                        size={20}
                      />
                      <Text
                        font={"bold"}
                        size={"lg"}
                        className="ml-0 mt-2 text-textPrimary md:text-textSecondary lg:ml-4"
                      >
                        Academic Support
                      </Text>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2 flex items-center">
                        <FaRegClock />
                        <Text
                          font={"bold"}
                          size={"lg"}
                          className="ml-2 text-textPrimary md:text-textSecondary"
                        >
                          30 Minutes
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 flex-1 xl:mt-0 xl:p-6">
                  <Text font={"bold"} size={"xl"}>
                    Select a Date & Time
                  </Text>

                  {/* Calendar Placeholder */}
                  <div className="flex flex-col xl:flex-row">
                    <div
                      className={`mt-8 ${selectedDay ? "w-full xl:w-fit" : "w-full"}`}
                    >
                      <Calendar2
                        selected={selectedDay}
                        onDayClick={handleDayClick}
                        className="w-full"
                      />
                    </div>
                    {selectedDay && (
                      <motion.div
                        className="mt-4 flex-1 px-8"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <h2 className="text-xl font-bold text-textPrimary">
                          {selectedDay.toDateString()}
                        </h2>
                        <div className="mt-4 flex flex-col space-y-4">
                          <Button
                            theme="outline"
                            onClick={() =>
                              router.push(
                                "/organization/request-meeting/select-date/schedule-event",
                              )
                            }
                            color="primary2"
                          >
                            12:30pm
                          </Button>
                          <Button
                            theme="outline"
                            onClick={() =>
                              router.push(
                                "/organization/request-meeting/select-date/schedule-event",
                              )
                            }
                            color="primary2"
                          >
                            1:00pm
                          </Button>
                          <Button
                            theme="outline"
                            onClick={() =>
                              router.push(
                                "/organization/request-meeting/select-date/schedule-event",
                              )
                            }
                            color="primary2"
                          >
                            1:30pm
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Time Zone */}
                  <div className="mt-4 flex flex-col justify-center">
                    <Text font={"bold"} size={"lg"} className="mb-2">
                      Time Zone
                    </Text>
                    <Text className="flex items-center">
                      <BiWorld className="mr-2" size={20} />
                      UTC Time (12:32pm) <span className="ml-2">▼</span>
                    </Text>
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
