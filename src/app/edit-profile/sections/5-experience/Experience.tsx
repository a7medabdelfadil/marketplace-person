/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import translations from "./translations";

const Experience = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [experience, setExperience] = useState("1 year");
  const [experiences, setExperiences] = useState<string[]>([]);

  const addExperience = () => {
    setExperiences([...experiences, `Experience ${experiences.length + 1}`]);
  };

  return (
    <>
      <div className="md:w-4/7 mt-14 w-full bg-bgPrimary">
        <Box
          rounded="none"
          padding="0"
          shadow="none"
          className="-mt-[20px] px-0 pb-[120px] pt-5 md:mb-8 md:px-4 md:pb-[20px]"
        >
          <div className="mx-4 mt-4 flex justify-center lg:mx-0">
            <div className="flex w-full flex-col rounded-xl border bg-bgPrimary p-4 px-4 py-8 lg:m-0 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.yearsExperience}</span>
              </h2>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full flex-1 rounded-lg border bg-lightGray p-2 focus:outline-none focus:ring-2 focus:ring-primary lg:w-1/2"
              >
                <option>{t.oneYear}</option>
                <option>{t.twoYears}</option>
                <option>{t.threeYears}</option>
                <option>{t.fourYears}</option>
                <option>{t.fivePlusYears}</option>
              </select>
            </div>
          </div>
          <div className="mx-4 mt-8 flex justify-center lg:mx-0">
            <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.workExperienceQuestion}</span>{" "}
                <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                  {t.workExperienceQuestion}
                </span>
              </h2>
              <div className="w-full lg:w-fit">
                <Button onClick={addExperience}>
                  <span>{t.addExperience}</span>
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Experience;
