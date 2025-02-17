/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import Box from "~/_components/Box";
import { useRouter } from "next/navigation";
import Button from "~/_components/Button";
import { FaCheck } from "react-icons/fa6";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { IoArrowBack } from "react-icons/io5";
import translations from "./translations";

const Enroll = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();

  const [search, setSearch] = useState("");

  const learnings = [
    "You will use the fundamentals of Generative AI to practice creating logos, marketing content, and services.",
    "You will learn how to implement an AI Marketing strategy and how to navigate the various strategic internal and external considerations.",
    "You will learn how to review and deploy a chatbot for marketing and customer service.",
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Generative AI and Marketing",
      content: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            "What is Generative AI?",
            "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
            "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            "Core concepts in marketing.",
            "Role of AI in modern marketing strategies.",
            "Overview of traditional vs. AI-driven marketing campaigns.",
          ],
        },
      ],
    },
    {
      title: "Module 2: Content Creation with Generative AI",
      content: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            "What is Generative AI?",
            "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
            "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            "Core concepts in marketing.",
            "Role of AI in modern marketing strategies.",
            "Overview of traditional vs. AI-driven marketing campaigns.",
          ],
        },
      ],
    },
    {
      title: "Module 3: Customer Insights and Data Analysis",
      content: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            "What is Generative AI?",
            "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
            "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            "Core concepts in marketing.",
            "Role of AI in modern marketing strategies.",
            "Overview of traditional vs. AI-driven marketing campaigns.",
          ],
        },
      ],
    },
    {
      title: "Module 4: Automating Marketing Processes",
      content: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            "What is Generative AI?",
            "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
            "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            "Core concepts in marketing.",
            "Role of AI in modern marketing strategies.",
            "Overview of traditional vs. AI-driven marketing campaigns.",
          ],
        },
      ],
    },
  ];

  const [openModule, setOpenModule] = useState<number | null>(0); // Open the first module by default

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index); // Toggle open/close
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  {t.education}
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
                      <LuSearch size={20} className="text-textSecondary" />
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
              <div
                className={`flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education")}
              >
                <img src="/images/home.png" alt="Home" className="w-[25px]" />
                <Text font={"bold"}>{t.home}</Text>
              </div>
              <div
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education/grades")}
              >
                <img src="/images/Grade.png" alt="Grade" className="w-[25px]" />
                <Text font={"bold"}>{t.grade}</Text>
              </div>
              <div
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl bg-bgPrimary py-2 pl-2`}
                onClick={() => router.push("/education/courses")}
              >
                <img
                  src="/images/Courses.png"
                  alt="Service"
                  className="w-[25px]"
                />
                <Text font={"bold"}>{t.courses}</Text>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-4 mb-4 hidden items-center gap-4 lg:flex">
              <Text font={"bold"} size={"xl"}>
                {t.courses}
              </Text>
              <p
                onClick={() => router.push("/education/courses")}
                className="cursor-pointer"
              >
                {t.all}
              </p>
              <p
                onClick={() => router.push("/education/courses/1/enrolled")}
                className="cursor-pointer text-textPrimary"
              >
                {t.enrolled}
              </p>
              <p
                onClick={() => router.push("/education/courses/1/completed")}
                className="cursor-pointer text-textPrimary"
              >
                {t.completed}
              </p>
            </div>

            <Box padding="0" rounded="none" className="pb-40 md:pb-6">
              <div className="flex w-full justify-between px-8 md:hidden">
                <IoArrowBack size={30} onClick={() => router.back()} />
                <Text font={"bold"} size={"xl"}>
                  {t.courseDetails}
                </Text>
                <div></div>
              </div>
              <div className="flex w-full flex-col lg:flex-row">
                <div className="w-full lg:w-3/5">
                  <div className="flex flex-col justify-center rounded-lg bg-bgPrimary p-6">
                    {/* University Logo */}
                    <img
                      src="/images/enroll.png"
                      alt="UVA Darden Logo"
                      className="mb-4 h-10 w-[150px] lg:h-12 lg:w-[200px]"
                    />

                    {/* Course Title */}
                    <Text font={"bold"} size={"3xl"} className="mb-2">
                      Lorem ipsum, dolor sit amet consectetur
                    </Text>

                    {/* Course Description */}
                    <Text color={"gray"} className="mb-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Recusandae dolor omnis, animi mollitia pariatur provident
                      voluptatum ipsam numquam sequi culpa est tenetur debitis
                      id temporibus a dignissimos voluptas voluptate laborum!
                    </Text>

                    {/* Enroll Button */}
                    <div className="w-fit">
                      <Button
                        onClick={() =>
                          router.push("/education/courses/1/enroll/details")
                        }
                      >
                        {t.enrollNow}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mr-8 w-full lg:w-2/5">
                  <div className="relative my-8 w-4/5">
                    <div className="absolute -left-2 bottom-4 z-0 hidden h-48 w-96 -rotate-[20deg] rounded-[50%] border-8 border-primary 2xl:block"></div>
                    <div className="absolute -top-2 right-0 z-0 hidden h-full w-full rounded-b-full rounded-tl-full bg-bgSixth 2xl:block"></div>
                    <div className="relative z-10 mx-8 w-full rounded-md rounded-br-[25%] border border-borderPrimary bg-bgPrimary p-6 lg:mx-0 lg:w-auto lg:shadow-lg 2xl:mx-8 2xl:rounded-2xl">
                      {/* Background Decoration */}

                      {/* Content */}
                      <div className="relative z-20">
                        {/* Rating */}
                        <div className="mb-4">
                          <span className="text-lg font-semibold text-black">
                            4.1
                          </span>
                          <span className="ml-1 text-xl text-primary2">★</span>
                          <Text color={"gray"}>(28 {t.reviews})</Text>
                        </div>

                        {/* Level */}
                        <div className="border-t border-borderPrimary py-3">
                          <Text font={"medium"}>{t.beginnerLevel}</Text>
                        </div>

                        {/* Duration */}
                        <div className="border-t border-borderPrimary py-3">
                          <Text font={"medium"}>1 {t.month}</Text>
                          <Text color={"gray"} size={"sm"}>
                            3 {t.hoursPerWeek}
                          </Text>
                        </div>

                        {/* Language */}
                        <div className="border-t border-borderPrimary py-3">
                          <Text font={"medium"}>{t.english}</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-6 space-y-4">
                {/* Title */}
                <h2 className="text-xl font-bold text-black">
                  {t.whatYouWillLearn}
                </h2>

                {/* List */}
                <ul className="space-y-4">
                  {learnings.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      {/* Check Icon */}

                      <FaCheck className="text-[#373A3C]" />

                      {/* Text */}
                      <Text font={"medium"} color={"gray"}>
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-6 my-6 flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5">
                  <div className="space-y-4 rounded-lg border bg-bgPrimary p-4">
                    {modules.map((module, index) => (
                      <div
                        key={index}
                        className="border-b pb-4 last:border-b-0"
                      >
                        {/* Module Title */}
                        <div
                          onClick={() => toggleModule(index)}
                          className="flex cursor-pointer items-center justify-between"
                        >
                          <Text font={"bold"} size={"lg"}>
                            {module.title}
                          </Text>
                          <span className="text-primary2">
                            {openModule === index ? (
                              <SlArrowDown />
                            ) : (
                              <SlArrowRight />
                            )}
                          </span>
                        </div>

                        {/* Module Content */}
                        {openModule === index && module.content.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {module.content.map((section, secIndex) => (
                              <div key={secIndex}>
                                <Text font={"medium"} className="mb-2">
                                  {section.heading}
                                </Text>
                                <ul className="ml-6 list-disc">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-2/5">
                  <div
                    className={`rounded-lg border bg-bgPrimary p-6 ${language === "ar" ? "md:mr-8" : "md:ml-8"} mt-8 space-y-6 lg:mt-0`}
                  >
                    {/* Instructor Section */}
                    <div>
                      <Text font={"bold"} size={"lg"} className="mb-4">
                        {t.instructor}
                      </Text>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/images/profile.png"
                          alt="Instructor"
                          className="ml-2 h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <Text font={"semiBold"}>{t.instructorName}</Text>
                          <Text color={"gray"} size={"sm"}>
                            {t.totalCourses} • {t.totalLearners}
                          </Text>
                        </div>
                      </div>
                    </div>

                    <hr className="border-borderPrimary" />

                    {/* Offered By Section */}
                    <div>
                      <h3 className="mb-4 text-lg font-bold text-black">
                        {t.offeredBy}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <img
                          src="/images/logo-university.png"
                          alt="University Logo"
                          className="h-12 w-12 rounded object-cover"
                        />
                        <a
                          href="#"
                          className="font-medium transition duration-300 hover:underline"
                        >
                          {t.instructorName}
                        </a>
                      </div>
                    </div>
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
export default Enroll;
