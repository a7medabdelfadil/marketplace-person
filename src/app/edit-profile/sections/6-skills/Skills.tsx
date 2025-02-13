/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import translations from "./translations";

const Skills = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState<string[]>([]);

  const addSkill = () => {
    if (skill.trim() !== "" && skills.length < 30) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const clearAllSkills = () => {
    setSkills([]);
  };

  const addLang = () => {
    if (lang.trim() !== "" && langs.length < 30) {
      setLangs([...langs, lang.trim()]);
      setLang("");
    }
  };

  const removeLang = (index: number) => {
    setLangs(langs.filter((_, i) => i !== index));
  };

  const clearAllLangs = () => {
    setLangs([]);
  };

  const handleKeyDownSkill = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addSkill();
    }
  };

  const handleKeyDownLang = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addLang();
    }
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
            <div className="relative flex w-full flex-col rounded-xl border bg-bgPrimary p-4 px-4 py-8 lg:m-0 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.addSkillsQuestion}</span>{" "}
                <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                  {t.addUpTo30}
                </span>
              </h2>
              <div className="flex justify-between">
                <div className="relative mr-4 flex w-full flex-wrap gap-2 rounded-lg border p-2 pr-8">
                  {skills.map((s, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-lg border border-primary bg-primary/10 px-3 py-1 text-primary"
                    >
                      {s}
                      <button
                        className="ml-2 font-bold text-primary"
                        onClick={() => removeSkill(index)}
                      >
                        <IoClose size={15} />
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyDown={handleKeyDownSkill}
                    placeholder={t.typeSkillPlaceholder}
                    className="w-full flex-1 p-2 outline-none"
                  />
                  <button
                    className="absolute right-2 top-3"
                    onClick={clearAllSkills}
                  >
                    <TiDeleteOutline size={25} />
                  </button>
                </div>
                <div className="mt-1 hidden w-fit lg:block">
                  <Button onClick={addSkill}>{t.addSkillButton}</Button>
                </div>
              </div>
              <div className="mt-4 block w-fit lg:hidden">
                <Button onClick={addSkill}>{t.add}</Button>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-12 flex justify-center lg:mx-0">
            <div className="relative flex w-full flex-col rounded-xl border bg-bgPrimary p-4 px-4 py-8 lg:m-0 lg:w-4/5">
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.addLanguagesQuestion}</span>{" "}
                <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                  {t.addMoreThanOne}
                </span>
              </h2>
              <div className="flex justify-between">
                <div className="relative mr-4 flex w-full flex-wrap gap-2 rounded-lg border p-2 pr-8">
                  {langs.map((s, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-lg border border-primary bg-primary/10 px-3 py-1 text-primary"
                    >
                      {s}
                      <button
                        className="ml-2 font-bold text-primary"
                        onClick={() => removeLang(index)}
                      >
                        <IoClose size={15} />
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    onKeyDown={handleKeyDownLang}
                    placeholder={t.typeLanguagePlaceholder}
                    className="w-full flex-1 p-2 outline-none"
                  />
                  <button
                    className="absolute right-2 top-3"
                    onClick={clearAllLangs}
                  >
                    <TiDeleteOutline size={25} />
                  </button>
                </div>
                <div className="mt-1 hidden lg:block">
                  <Button onClick={addLang}>{t.addLanguageButton}</Button>
                </div>
              </div>
              <div className="mt-4 block w-fit lg:hidden">
                <Button onClick={addLang}>{t.add}</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Skills;
