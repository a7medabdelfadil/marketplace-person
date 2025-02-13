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
import Input from "~/_components/Input";
import translations from "./translations";

const OnlinePresence = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [profiles, setProfiles] = useState({
    LinkedIn: "linkedin.com/in/username",
    Facebook: "Facebook.com/in/username",
    Twitter: "Twitter.com/in/username",
    Instagram: "Instagram.com/in/username",
    Behance: "Behance.com/in/username",
    GitHub: "GitHub.com/in/username",
    stackOverflow: "Stack Overflow.com/in/username",
    YouTube: "YouTube.com/in/username",
    Blog: "Your Blog",
    Website: "Your Personal Website",
    Other: "Your Personal Website",
  });

  const handleChange = (platform: any, value: any) => {
    setProfiles({ ...profiles, [platform]: value });
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
          <div className="mx-4 mt-4 flex flex-col items-center justify-center lg:mx-0">
            <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
              <h2 className="mb-4 text-lg font-semibold">
                {t.yourOnlinePresence}
              </h2>
              <div className="flex flex-col gap-4">
                {Object.entries(profiles).map(([platform, link], index) => (
                  <div key={index} className="flex items-center gap-4">
                    <label className="w-1/4 font-medium text-textSecondary">
                      {t.profiles[platform as keyof typeof t.profiles] ||
                        platform}
                    </label>
                    <Input
                      border="gray"
                      theme="gray"
                      value={link}
                      onChange={(e) => handleChange(platform, e.target.value)}
                      className="flex-1 rounded-lg border p-2 text-textSecondary shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-4 flex justify-center lg:mx-0">
            <div className="w-full lg:w-4/5">
              <div className="mt-10 w-full lg:w-fit">
                <Button>{t.saveChanges}</Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
export default OnlinePresence;
