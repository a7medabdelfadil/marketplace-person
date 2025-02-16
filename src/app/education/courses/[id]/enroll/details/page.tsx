// The Structure ->
// Education -> the main page that have the nav bar and change between the sections
// and inside the education this a route /grades/id to show the grades of the course
// why i make sections? because don't repeat the code of navbar
//

/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import translations from "~/app/market/translations";
import Box from "~/_components/Box";
import { useRouter } from "next/navigation";
import Button from "~/_components/Button";
import { FaCheck } from "react-icons/fa6";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";

const EnrollDetails = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();

  const [search, setSearch] = useState("");

  const topics = [
    {
      title: "Topic 1: Introduction to Generative AI and Marketing",
      sections: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            { title: "What is Generative AI?", completed: true },
            {
              title:
                "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
              completed: true,
            },
            {
              title:
                "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
              completed: true,
            },
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            { title: "Core concepts in marketing.", completed: true },
            {
              title: "Role of AI in modern marketing strategies.",
              completed: true,
            },
            {
              title:
                "Overview of traditional vs. AI-driven marketing campaigns.",
              completed: true,
            },
          ],
        },
      ],
    },
    {
      title: "Topic 1: Introduction to Generative AI and Marketing",
      sections: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            { title: "What is Generative AI?", completed: true },
            {
              title:
                "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
              completed: true,
            },
            {
              title:
                "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
              completed: true,
            },
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            { title: "Core concepts in marketing.", completed: true },
            {
              title: "Role of AI in modern marketing strategies.",
              completed: true,
            },
            {
              title:
                "Overview of traditional vs. AI-driven marketing campaigns.",
              completed: true,
            },
          ],
        },
      ],
    },
    {
      title: "Topic 1: Introduction to Generative AI and Marketing",
      sections: [
        {
          heading: "1- Understanding Generative AI",
          items: [
            { title: "What is Generative AI?", completed: true },
            {
              title:
                "Key technologies behind Generative AI: NLP, GANs, and Transformers.",
              completed: true,
            },
            {
              title:
                "Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney, etc.).",
              completed: true,
            },
          ],
        },
        {
          heading: "2- Marketing Fundamentals",
          items: [
            { title: "Core concepts in marketing.", completed: true },
            {
              title: "Role of AI in modern marketing strategies.",
              completed: true,
            },
            {
              title:
                "Overview of traditional vs. AI-driven marketing campaigns.",
              completed: true,
            },
          ],
        },
      ],
    },
    { title: "Final Exam", completed: false, sections: [] },
  ];

  const [openTopic, setOpenTopic] = useState<number | null>(0);
  const [completedTopics, setCompletedTopics] = useState(
    topics.map((topic) => topic.completed),
  );

  const toggleTopic = (index: number) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  const toggleCheckbox = (index: number) => {
    const updatedCompletion = [...completedTopics];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedTopics(updatedCompletion);
  };
  return (
    <>
      <Container mr={false}>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  Education
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
                <Text font={"bold"}>Home</Text>
              </div>
              <div
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => router.push("/education/grades")}
              >
                <img src="/images/Grade.png" alt="Grade" className="w-[25px]" />
                <Text font={"bold"}>Grade</Text>
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
                <Text font={"bold"}>Courses</Text>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-4 mb-4 flex items-center gap-4">
              <Text font={"bold"} size={"xl"}>
                Courses
              </Text>
              <p
                onClick={() => router.push("/education/courses")}
                className="cursor-pointer text-textPrimary"
              >
                All
              </p>
              <p
                onClick={() => router.push("/education/courses/1/enrolled")}
                className="cursor-pointer text-textPrimary"
              >
                Enrolled
              </p>
              <p
                onClick={() => router.push("/education/courses/1/completed")}
                className="cursor-pointer text-textPrimary"
              >
                Completed
              </p>
            </div>
            <Box padding="0" rounded="none">
              <Text font={"bold"} className="mx-6 py-8">
                Generative AI tools in marketing (ChatGPT, DALL-E, MidJourney,
                etc.).
              </Text>
              <div className="flex">
                <div className="w-3/5">
                  <div className="mx-auto max-w-4xl rounded-lg bg-bgPrimary p-6">
                    {/* Video Section */}
                    <div className="mb-6">
                      <div className="relative aspect-video w-full">
                        <video
                          src="/path/to/video.mp4"
                          controls
                          className="h-full w-full rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Download Links */}
                    <div className="mb-6 flex items-center justify-start gap-8">
                      <a
                        href="/path/to/subrip.srt"
                        download
                        className="flex items-center space-x-2 font-medium text-textPrimary hover:underline"
                      >
                        <MdOutlineFileDownload
                          size={30}
                          className="text-whiteOrBlack rounded-lg bg-blackOrWhite p-1"
                        />

                        <span>Download SubRip (.srt) file</span>
                      </a>
                      <a
                        href="/path/to/transcript.txt"
                        download
                        className="flex items-center space-x-2 font-medium text-textPrimary hover:underline"
                      >
                        <MdOutlineFileDownload
                          size={30}
                          className="text-whiteOrBlack rounded-lg bg-blackOrWhite p-1"
                        />

                        <span>Download Text (.txt) file</span>
                      </a>
                    </div>

                    {/* Transcript Section */}
                    <div>
                      <Text font={"bold"} size={"2xl"} className="mb-4">
                        Course Transcript
                      </Text>
                      <Text
                        size={"md"}
                        color={"gray"}
                        font={"medium"}
                        className="leading-relaxed"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="mx-6 rounded-lg border border-borderPrimary bg-bgPrimary p-6">
                    {/* Header */}
                    <h2 className="mb-6 text-2xl font-bold text-black">
                      Generative AI in Marketing Specialization
                    </h2>

                    {/* Topics */}
                    <div className="space-y-4">
                      {topics.map((topic, index) => (
                        <div key={index} className="rounded-lg p-4">
                          {/* Topic Header */}
                          <div className="flex cursor-pointer items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={completedTopics[index]}
                                onChange={() => toggleCheckbox(index)}
                                className="text-whiteOrBlack h-5 w-5 cursor-pointer rounded-full accent-success"
                              />
                              <h3 className="font-semibold text-textPrimary">
                                {topic.title}
                              </h3>
                            </div>
                            {topic.sections?.length > 0 && (
                              <span
                                onClick={() => toggleTopic(index)}
                                className="text-gray-500"
                              >
                                {openTopic === index ? (
                                  <SlArrowDown />
                                ) : (
                                  <SlArrowRight />
                                )}
                              </span>
                            )}
                          </div>

                          {/* Topic Content */}
                          {openTopic === index &&
                            topic.sections?.length > 0 && (
                              <div className="mt-4 space-y-4">
                                {topic.sections.map((section, sectionIndex) => (
                                  <div key={sectionIndex}>
                                    <h4 className="mb-2 font-semibold text-black">
                                      {section.heading}
                                    </h4>
                                    <ul className="ml-8 list-disc space-y-1 text-gray-700">
                                      {section.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="flex items-center space-x-2"
                                        >
                                          <span
                                            className={`h-4 w-4 flex-shrink-0 rounded-full ${
                                              item.completed
                                                ? "bg-success"
                                                : "bg-bgSecondary"
                                            }`}
                                          />
                                          <span>{item.title}</span>
                                        </li>
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
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default EnrollDetails;
