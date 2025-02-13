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

const WorkSamples = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

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
              <h2 className="mb-4 text-lg font-medium">
                <span className="font-bold">{t.uploadFiles} </span>
                <span className="font-medium">{t.uploadLimit}</span>

                <p className="mt-4 text-sm font-medium text-textSecondary">
                  {t.supportedFiles}
                </p>
              </h2>
              <div className="mt-8 w-full lg:w-fit">
                <Button>
                  <span>{t.addFiles}</span>
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default WorkSamples;
