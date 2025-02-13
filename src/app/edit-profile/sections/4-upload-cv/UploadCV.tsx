/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

const UploadCv = () => {
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
          <div className="mt-4 flex justify-center">
            <div className="m-4 flex w-full flex-col-reverse items-center rounded-xl border bg-bgPrimary p-4 px-4 py-8 lg:m-0 lg:w-4/5 lg:flex-row">
              <div>
                <Text font={"bold"} size={"xl"}>
                  {t.lastUpdatedCv}, November 17, 2024
                </Text>
                <div className="mt-6 flex flex-row gap-2 sm:gap-4">
                  <Text className="cursor-pointer font-medium text-primary hover:underline">
                    {t.previewCv}
                  </Text>
                  <Text className="cursor-pointer font-medium text-error hover:underline">
                    {t.delete}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default UploadCv;
