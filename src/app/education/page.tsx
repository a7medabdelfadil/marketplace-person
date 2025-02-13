/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import translations from "../market/translations";
import CourseCard from "~/_components/CourseCard";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [selected, setSelected] = useState("home");
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

  const courses = [
    {
      image: "/images/course_thumb.png",
      profilePhoto: "/images/profile.png",
      title: "Learning JavaScript With Imagination",
      instructor: "David Millar",
      rating: 4.8,
      category: "Development",
      progress: 90,
      lessons: 5,
      duration: "11h 20m",
      students: 22,
    },
    {
      image: "/images/course_thumb.png",
      profilePhoto: "/images/profile.png",
      title: "The Complete Graphic Design for Beginners",
      instructor: "Wilson",
      rating: 4.5,
      category: "Design",
      progress: 90,
      lessons: 60,
      duration: "70h 45m",
      students: 202,
    },
  ];

  const data = [
    { name: "Sun", thisWeek: 2, lastWeek: 1 },
    { name: "Mon", thisWeek: 4, lastWeek: 3 },
    { name: "Tue", thisWeek: 6, lastWeek: 5 },
    { name: "Wed", thisWeek: 5, lastWeek: 4 },
    { name: "Thu", thisWeek: 8, lastWeek: 6 },
    { name: "Fri", thisWeek: 10, lastWeek: 8 },
    { name: "Sat", thisWeek: 7, lastWeek: 5 },
  ];

  const [activeTab, setActiveTab] = useState("Attendance Hours");

  return (
    <>
      <Container mr={false}>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  {t.marketPlace}
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
                        className="size-4 flex-shrink-0 text-gray-400"
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
              <div
                className={`${
                  selected === "home" ? "bg-bgPrimary" : "bg-transparent"
                } flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("home")}
              >
                <img src="/images/home.png" alt="Home" className="w-[25px]" />
                <Text font={"bold"}>Home</Text>
              </div>
              <div
                className={`${
                  selected === "grade" ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("grade")}
              >
                <img src="/images/Grade.png" alt="Grade" className="w-[25px]" />
                <Text font={"bold"}>Grade</Text>
              </div>
              <div
                className={`${
                  selected === "courses" ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("courses")}
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
          <Box
            rounded="none"
            padding="0"
            className="-mt-[90px] h-[1000px] px-0 pb-[120px] pt-20 md:mb-8 md:px-4 md:pb-[20px]"
          >
            <div className="flex h-full">
              <div className="w-3/5">
                <div className="bg-bgFifth mx-4 mt-14 flex items-center justify-between rounded-2xl px-6 py-2 shadow">
                  <div>
                    <Text size="2xl" font="semiBold" color="default">
                      Today Task
                    </Text>
                    <Text
                      size="md"
                      font="default"
                      color="gray"
                      className="mt-2"
                    >
                      Check your daily tasks and schedules
                    </Text>
                    <div className="w-fit">
                      <button className="mt-4 rounded-xl bg-primary px-2 py-1 font-medium text-white">
                        Today&apos;s schedule
                      </button>
                    </div>
                  </div>
                  <div className="relative -top-14">
                    <img
                      src="/images/Time management.png"
                      alt="Illustration"
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between px-4">
                    <Text size="2xl" font="semiBold">
                      My Courses
                    </Text>
                    <Text
                      size="sm"
                      font="semiBold"
                      color="primary"
                      className="cursor-pointer underline"
                    >
                      See All
                    </Text>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {courses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md">
                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-textPrimary">
                      Your statistics
                    </h2>
                    <div className="relative">
                      <button className="flex items-center gap-2 rounded-lg bg-bgSecondary px-4 py-2 text-sm font-medium text-textPrimary shadow-md">
                        Weekly
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-textSecondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="mb-6 flex gap-6 border-b border-borderPrimary">
                    <button
                      className={`pb-2 ${
                        activeTab === "Attendance Hours"
                          ? "border-b-2 border-primary text-primary"
                          : "text-textSecondary"
                      }`}
                      onClick={() => setActiveTab("Attendance Hours")}
                    >
                      Attendance Hours
                    </button>
                    <button
                      className={`pb-2 ${
                        activeTab === "My Courses"
                          ? "border-b-2 border-primary text-primary"
                          : "text-textSecondary"
                      }`}
                      onClick={() => setActiveTab("My Courses")}
                    >
                      My Courses
                    </button>
                  </div>

                  {/* Chart */}
                  <LineChart width={600} height={300} data={data}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="thisWeek"
                      stroke="#000"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="lastWeek"
                      stroke="#3498db"
                      strokeWidth={2}
                    />
                  </LineChart>
                </div>
              </div>
              <div className="w-2/5 bg-bgFourth">test</div>
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};
export default Education;
