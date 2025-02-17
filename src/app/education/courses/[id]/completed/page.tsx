/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import Box from "~/_components/Box";
import { VscSettings } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import translations from "./translations";

const Enrolled = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();

  const [search, setSearch] = useState("");

  const courses = [
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "70",
      image: "/images/stanford-university.png",
      rating: 4.9,
      reviews: 100,
      level: "Beginner",
      duration: "1 Month (at 3h a week)",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "85",
      image: "/images/stanford-university.png",
      rating: 4.7,
      reviews: 200,
      level: "Intermediate",
      duration: "2 Months (at 4h a week)",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "60",
      image: "/images/stanford-university.png",
      rating: 4.8,
      reviews: 150,
      level: "Advanced",
      duration: "3 Months (at 5h a week)",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "60",
      image: "/images/stanford-university.png",
      rating: 4.8,
      reviews: 150,
      level: "Advanced",
      duration: "3 Months (at 5h a week)",
    },
  ];

  return (
    <>
      <Container mr={false}>
        <div className="flex justify-center gap-5">
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

          <div className="w-full">
            <div className="mx-4 mb-4 hidden items-center gap-4 md:flex">
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
                className="cursor-pointer text-primary underline"
              >
                {t.completed}
              </p>
            </div>
            <Box padding="0" rounded="none" className="pb-28 md:pb-4">
              <div className="mx-6 flex justify-between space-x-4 md:hidden">
                {/* Home Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgPrimary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education")}
                >
                  <img src="/images/home.png" alt="Home" className="h-6 w-6" />
                  <Text font="bold">{t.home}</Text>
                </div>

                {/* Grade Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgPrimary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education/grades")}
                >
                  <img
                    src="/images/Grade.png"
                    alt="Grade"
                    className="h-6 w-6"
                  />
                  <Text font="bold">{t.grade}</Text>
                </div>

                {/* Courses Button */}
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgSecondary px-4 py-2 transition hover:bg-bgSecondary"
                  onClick={() => router.push("/education/courses")}
                >
                  <img
                    src="/images/Courses.png"
                    alt="Courses"
                    className="h-6 w-6"
                  />
                  <Text font="bold">{t.courses}</Text>
                </div>
              </div>
              <div className="mx-6 flex justify-between pt-4">
                <Text font={"bold"} className="hidden md:block" size={"2xl"}>
                  {t.courses}
                </Text>
                <div className="relative flex w-full md:w-1/3">
                  <div className="relative w-full">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      id="icon"
                      name="icon"
                      className="block w-full rounded-lg border border-borderPrimary px-8 py-[14px] pl-10 text-sm outline-none focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                    <LuSearch
                      className="absolute left-3 top-[26px] -translate-y-1/2 text-textSecondary"
                      size={20}
                    />
                  </div>
                  <VscSettings
                    className={`rounded-lg border border-borderPrimary p-2 ${language == "ar" ? "mr-2" : "ml-2"} cursor-pointer text-textSecondary`}
                    size={50}
                  />
                </div>
              </div>
              <Text font={"bold"} size={"2xl"} className="mx-6 mt-4">
                {t.inProgress}
              </Text>
              <div className="grid grid-cols-1 gap-8 p-6 pb-40 lg:grid-cols-2 lg:pb-0 xl:grid-cols-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => router.push("/education/courses/1/enroll")}
                    className="cursor-pointer rounded-2xl border bg-bgPrimary p-4 shadow-md transition-shadow hover:shadow-lg"
                  >
                    {/* Course Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="mb-4 h-32 w-full rounded-xl object-cover"
                    />

                    {/* University Logo */}
                    <div className="mb-2 flex items-center space-x-2">
                      <img
                        src="/images/logo-university.png"
                        alt="University Logo"
                        className="h-6 w-6"
                      />
                      <Text font={"medium"} size={"sm"} color={"gray"}>
                        {course.university}
                      </Text>
                    </div>

                    {/* Course Title */}
                    <Text font={"bold"} size={"lg"} className="mb-2">
                      {course.title}
                    </Text>

                    {/* Rating and Duration */}
                    <div className="mt-4 pt-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="text-xl text-yellow-500">⭐</span>
                        <Text font={"medium"} size={"sm"}>
                          {course.rating}{" "}
                          <span className="text-textSecondary">
                            ({course.reviews} Reviews){" "}
                          </span>
                        </Text>
                      </div>
                      <Text
                        font={"medium"}
                        size={"sm"}
                        className="mt-2"
                        color={"gray"}
                      >
                        {course.level} - {course.duration}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Enrolled;
