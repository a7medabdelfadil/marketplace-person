/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import { FaVideo } from "react-icons/fa6";
import translations from "./translations";

const IntroductoryVideos = () => {
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
            <div className="m-4 flex w-full flex-col-reverse items-center rounded-xl border bg-bgPrimary p-4 lg:m-0 lg:w-4/5 lg:flex-row">
              <div className="mx-4 mt-4 w-full text-center md:mt-0 md:text-left lg:ml-6 lg:w-2/3">
                <Text font={"bold"} size={"lg"} className="mt-4">
                  {t.recordVideos}
                </Text>
                <Text className="mt-2" font={"medium"}>
                  {t.recordDescription}
                </Text>
                <div className="w-fit">
                  <Button className="mt-4">
                    <FaVideo className="mr-2" /> {t.recordButton}
                  </Button>
                </div>
              </div>
              <div className="relative w-full lg:w-1/3">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/meeting.jpg"
                    alt="Intro Video"
                    className="h-auto w-full rounded-lg"
                  />
                </div>
                <div className="absolute -left-3 -top-3 rounded-full border-2 border-white bg-[#FFDCDC] p-2">
                  <FaVideo className="text-error" />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default IntroductoryVideos;
