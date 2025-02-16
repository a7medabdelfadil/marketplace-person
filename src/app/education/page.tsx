// The Structure ->
// Education -> the main page that have the nav bar and change between the sections
// and inside the education this a route /grades/id to show the grades of the course
// why i make sections? because don't repeat the code of navbar
//

/* eslint-disable @next/next/no-img-element */
"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import translations from "../market/translations";
import { LuSearch } from "react-icons/lu";
import { CalendarIcon, CheckCircleIcon, RocketIcon, UsersIcon } from "lucide-react";
import CourseCard from "~/_components/CourseCard";
import Box from "~/_components/Box";
import { Calendar } from "~/components/ui/Calendar";
import { useRouter } from "next/navigation";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [search, setSearch] = useState("");
  const router = useRouter();
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

  const cardData = [
    {
      title: "Today's productivity",
      value: "10/8",
      percentage: "+55%",
      gradient: "bg-gradient-to-b from-[#2388FF33] to-[#919191]",
      icon: <RocketIcon className="text-white" />,
    },
    {
      title: "Monthly productivity",
      value: "620/598",
      percentage: "+95%",
      gradient: "bg-gradient-to-b from-[#9854CB] to-[#1D192B1F]",
      icon: <CalendarIcon className="text-white" />,
    },
    {
      title: "Meetings attended",
      value: "85/85",
      percentage: "+100%",
      gradient: "bg-gradient-to-b from-[#27104E] to-[#19213D14]",
      icon: <UsersIcon className="text-white" />,
    },
    {
      title: "Task done weekly",
      value: "29/30",
      percentage: "+101%",
      gradient: "bg-gradient-to-b from-[#24D366] to-[#0D0D0D59]",
      icon: <CheckCircleIcon className="text-white" />,
    },
  ];

  const timelineData = [
    {
      title: "Daily Standup Call",
      time: "9:00 AM",
      description: "Discuss team tasks for the day.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: true,
    },
    {
      title: "Brand Identity Meeting",
      time: "11:00 AM",
      description: "Discuss brand identity guidelines for the print media.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: false,
    },
    {
      title: "Brand Identity Meeting",
      time: "11:00 AM",
      description: "Discuss brand identity guidelines for the print media.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: false,
    },
    {
      title: "Brand Identity Meeting",
      time: "11:00 AM",
      description: "Discuss brand identity guidelines for the print media.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: false,
    },
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
                className={`bg-bgPrimary flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
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
                className={`mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
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
          <Box
            rounded="none"
            padding="0"
            className="-mt-[90px] px-0 pb-[120px] pt-20 md:mb-8 md:px-4 md:pb-[20px]"
          >
            <div className="flex h-full">
              <div className="w-3/5">
                <div className="mx-4 mt-14 flex items-center justify-between rounded-2xl bg-bgFifth px-6 py-2 shadow">
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
                <div className="mx-6 rounded-2xl bg-bgPrimary p-6 shadow-md">
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
                  <LineChart width={700} height={300} data={data}>
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
              <div className="w-2/5 pt-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-bgPrimary p-4 shadow-md"
                    >
                      <div>
                        <Text size="sm" color="gray" font={"bold"}>
                          {card.title}
                        </Text>
                        <Text size="lg" font="semiBold">
                          {card.value}{" "}
                          <span className="text-sm text-textSecondary">
                            {card.percentage}
                          </span>
                        </Text>
                      </div>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.gradient}`}
                      >
                        {card.icon}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Calendar />
                </div>
                <div className="relative ml-6">
                  {/* Line */}
                  <div className="absolute left-[11px] top-10 h-full w-0.5 bg-primary"></div>

                  {timelineData.map((event, index) => (
                    <div key={index} className="relative mb-8 flex items-start">
                      {/* Circle */}
                      <div className="absolute mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-bgPrimary">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                      </div>

                      {/* Card */}
                      <div   className="relative ml-8 mt-4 w-full h-full bg-primary flex-1 rounded-xl px-4 pt-4 shadow-lg bg-cover bg-center"

                       style={{
                        backgroundImage: `url('/images/educationbg.png')`,
                      }}>
                        <Text
                          size="lg"
                          font="semiBold"
                          className="z-[2] text-white"
                        >
                          {event.title}
                        </Text>
                        <Text size="sm" className="z-[2] text-white">
                          {event.description}
                        </Text>
                        <div className="z-[2] mt-2 flex items-center space-x-2">
                          {event.participants.map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt="Participant"
                              className="h-8 w-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <Text
                          size="sm"
                          font="bold"
                          className="mt-2 text-right text-white"
                        >
                          {event.time}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};
export default Education;
