/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Box from "~/_components/Box";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "~/app/calendar/translations";
import { VscSettings } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";

function Grades() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [search, setSearch] = useState("");
  const router = useRouter();
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
      <div>
        <Box padding="0">
          <div className="mx-6 flex justify-between pt-8">
            <Text font={"bold"} size={"2xl"}>
              My Grades
            </Text>
            <div className="relative flex w-1/3">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="icon"
                  name="icon"
                  className="block w-full rounded-lg border border-borderPrimary px-8 py-[14px] pl-10 text-sm outline-none focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50" // Add `pl-10` for padding to the left
                  placeholder="Search..."
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
          <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={index}
                onClick={() => router.push("/education/grades/1")}
                className="rounded-2xl border bg-white cursor-pointer p-4 shadow-md transition-shadow hover:shadow-lg"
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
                    Previous Exam Grade: {course.grade}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </>
  );
}

export default Grades;
