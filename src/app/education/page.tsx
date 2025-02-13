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
import translations from "../market/translations";
import Home from "./sections/1-home/Home";
import Grades from "./sections/2-grade/Grades";
import Courses from "./sections/3-courses/Courses";
import { LuSearch } from "react-icons/lu";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [selected, setSelected] = useState(1);
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

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
                className={`${
                  selected === 1 ? "bg-bgPrimary" : "bg-transparent"
                } flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick(1)}
              >
                <img src="/images/home.png" alt="Home" className="w-[25px]" />
                <Text font={"bold"}>Home</Text>
              </div>
              <div
                className={`${
                  selected === 2 ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick(2)}
              >
                <img src="/images/Grade.png" alt="Grade" className="w-[25px]" />
                <Text font={"bold"}>Grade</Text>
              </div>
              <div
                className={`${
                  selected === 3 ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick(3)}
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
          {selected === 1 && <Home />}
          {selected === 2 && <Grades />}
          {selected === 3 && <Courses />}
        </div>
      </Container>
    </>
  );
};
export default Education;
