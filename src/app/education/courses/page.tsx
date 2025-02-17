/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useEffect, useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import Box from "~/_components/Box";
import { VscSettings } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Button from "~/_components/Button";
import translations from "./translations";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [isFilter, setIsFilter] = useState(false);

  const router = useRouter();

  const [search, setSearch] = useState("");
  const handleFilterClick = () => {
    setIsFilter((e) => !e);
  };

  const [screenWidth, setScreenWidth] = useState<number>(768); // Set a default value

  useEffect(() => {
    /**
     * Handle window resize event
     *
     * When the window is resized, set the screenWidth state to the new value.
     * If the new width is greater than 768px, close the modal.
     */
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);

      // Close the modal if the screen is bigger than md (768px)
      if (newWidth >= 768) {
        setIsFilter(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const courses = [
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
    {
      university: "Stanford University",
      title: "Learning JavaScript With Imagination",
      grade: "99%",
      image: "/images/stanford-university.png",
    },
  ];

  return (
    <>
      <Container mr={false}>
        <div className="flex justify-center gap-5">
          <div className="lg:w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
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
            <div className="mx-4 mb-4 hidden items-center gap-4 lg:flex">
              <Text font={"bold"} size={"xl"}>
                {t.courses}
              </Text>
              <p
                onClick={() => router.push("/education/courses")}
                className="cursor-pointer text-primary underline"
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
            <Box padding="0" rounded="none">
              {isFilter ? (
                <div className="w-full">
                  <div className="flex justify-between">
                    <div></div>
                    <Text font={"bold"} size={"xl"}>
                      {t.filter}
                    </Text>
                    <IoClose
                      onClick={handleFilterClick}
                      size={30}
                      className="mx-4"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 p-4">
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.all}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.anyUniversity}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allTrainingDirections}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allStatuses}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allLanguages}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.certificate}</option>
                    </select>
                  </div>
                  <div className="flex gap-4 px-4">
                    <Button onClick={handleFilterClick} theme="outline">
                      {t.reset}
                    </Button>
                    <Button onClick={handleFilterClick}>{t.done}</Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mx-6 flex justify-between space-x-4 md:hidden">
                    {/* Home Button */}
                    <div
                      className="flex cursor-pointer items-center gap-2 rounded-xl bg-bgPrimary px-4 py-2 transition hover:bg-bgSecondary"
                      onClick={() => router.push("/education")}
                    >
                      <img
                        src="/images/home.png"
                        alt="Home"
                        className="h-6 w-6"
                      />
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

                  <div className="mx-6 flex justify-between pb-8 pt-4">
                    <Text
                      className="hidden md:block"
                      font={"bold"}
                      size={"2xl"}
                    >
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
                        onClick={handleFilterClick}
                        className={`rounded-lg border border-borderPrimary p-2 ${language == "ar" ? "mr-2" : "ml-2"} cursor-pointer text-textSecondary`}
                        size={50}
                      />
                    </div>
                  </div>
                  <div className="mx-4 hidden flex-wrap gap-4 p-4 md:flex">
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.anyUniversity}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allTrainingDirections}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allStatuses}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.allLanguages}</option>
                    </select>
                    <select className="curser-pointer flex-1 rounded-lg border border-borderPrimary bg-offWhite px-6 py-4 text-textPrimary outline-none transition duration-300 hover:shadow-md">
                      <option>{t.certificate}</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-8 p-6 pb-40 lg:grid-cols-2 lg:pb-0 xl:grid-cols-4">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          router.push("/education/courses/1/enroll")
                        }
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
                          <p className="text-sm font-medium text-gray-500">
                            {course.university}
                          </p>
                        </div>

                        {/* Course Title */}
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">
                          {course.title}
                        </h3>

                        {/* Grade */}
                        <div className="flex items-center space-x-2">
                          <img src="/images/prize-icon.png" alt="prize photo" />
                          <Text size={"sm"} color={"gray"} font={"medium"}>
                            {t.previousExamGrade}: {course.grade}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Education;
