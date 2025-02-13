/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import Button from "~/_components/Button";
import translations from "./translations";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [selected, setSelected] = useState("Experienced");

  const levels = [
    { label: t.bachelor },
    { label: t.master },
    { label: t.doctorate },
    { label: t.highSchool },
    { label: t.vocational },
    { label: t.diploma },
  ];

  const degrees = [
    {
      title: t.title,
      university: t.university,
      year: t.year,
    },
  ];



  return (
    <>
      <div className="md:w-4/7 mt-14 w-full bg-bgPrimary">
        <Box
          rounded="none"
          padding="0"
          shadow="none"
          className="-mt-[20px] px-0 pb-[120px] pt-5 md:mb-8 md:px-4 md:pb-[20px]"
        >
          <div className="mx-4 mt-4 flex flex-col items-center justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              {/* Heading */}
              <h2 className="mb-4 text-lg font-bold">
                {t.currentEducationLevel}{" "}
                <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                  {t.selectExpectedDegree}
                </span>
              </h2>

              {/* Career Level Grid */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {levels.map(({ label }) => (
                  <button
                    key={label}
                    className={`rounded-lg border p-4 text-center text-sm font-medium transition-all ${
                      selected === label
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-borderPrimary bg-lightGray hover:bg-bgSecondary"
                    }`}
                    onClick={() => setSelected(label)}
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-semibold">
                {t.universityDegrees}
              </h2>
              <div className="flex flex-col gap-4">
                {degrees.map((degree, index) => (
                  <div
                    key={index}
                    className="flex w-full items-start justify-between rounded-lg border bg-lightGray p-4 shadow-sm transition duration-300 hover:bg-bgSecondary lg:w-1/2"
                  >
                    <div>
                      <p className="font-bold">{degree.title}</p>
                      <p>{degree.university}</p>
                      <p>{degree.year}</p>
                    </div>
                    <button className="text-textSecondary transition duration-300 hover:text-textPrimary">
                      <FiEdit2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-4 mt-8 flex justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.highSchool}</span>
              </h2>
              <div className="w-fit">
                <Button>
                  <span>{t.addHighSchool}</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-8 flex justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.certifications}</span>
              </h2>
              <div className="w-fit">
                <Button>
                  <span>{t.addCertificate}</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-8 flex justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.trainingCourses}</span>
              </h2>
              <div className="w-fit">
                <Button>
                  <span>{t.addTraining}</span>
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Education;
