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
import Button from "~/_components/Button";
import translations from "./translations";

const Achievements = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [achievement, setAchievement] = useState("");
  const maxCharacters = 1000;

  return (
    <>
      <div className="md:w-4/7 mt-14 w-full bg-bgPrimary">
        <Box
          rounded="none"
          padding="0"
          shadow="none"
          className="-mt-[20px] px-0 pb-[120px] pt-5 md:mb-8 md:px-4 md:pb-[20px]"
        >
          <div className="mx-4 mt-8 flex justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-2 text-lg font-bold">{t.achievements}</h2>
              <p className="mb-4 text-textSecondary">
                {t.achievementsDescription}
              </p>
              <div className="w-full lg:w-1/2">
                <label className="font-medium" htmlFor="achievement">
                  {t.addAchievements}
                </label>
                <textarea
                  id="achievement"
                  value={achievement}
                  onChange={(e) => setAchievement(e.target.value)}
                  maxLength={maxCharacters}
                  className="mt-2 w-full rounded-lg border p-2 shadow-sm"
                  rows={4}
                  placeholder={t.achievementPlaceholder}
                ></textarea>
              </div>
              <p className="mt-2 text-textSecondary">
                {maxCharacters - achievement.length} {t.charactersRemaining}{" "}
                {maxCharacters})
              </p>
              <div className="w-full lg:w-4/5">
                <div className="mt-10 w-full lg:w-fit">
                  <Button>{t.saveChanges}</Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Achievements;
