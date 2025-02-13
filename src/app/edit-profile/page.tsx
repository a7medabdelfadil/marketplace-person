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
import translations from "./translations";
import GeneralInfo from "./sections/1-general-info/GeneralInfo";
import IntroductoryVideos from "./sections/2-introductory-videos/IntroductoryVideos";
import CareerInterests from "./sections/3-career-interests/CareerInterests";
import UploadCv from "./sections/4-upload-cv/UploadCV";
import Experience from "./sections/5-experience/Experience";
import Skills from "./sections/6-skills/Skills";
import Education from "./sections/7-education/Education";
import OnlinePresence from "./sections/8-online-presence/OnlinePresence";
import WorkSamples from "./sections/9-work-samples/WorkSamples";
import Achievements from "./sections/10-achievements/Achievements";

type SelectedIndexType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const EditProfile = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<SelectedIndexType>(
    1,
  );

  const handleItemClick = (index: SelectedIndexType) => {
    setSelectedIndex(index);
  };
  const toggleModal = () => {
    setIsOpenModal((e) => !e);
  };
  const [screenWidth, setScreenWidth] = useState<number>(768);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);

      if (newWidth >= 768) {
        setIsOpenModal(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      id: 1,
      src: "/images/general-info.png",
      alt: "Product",
      text: t.generalInfo,
    },
    {
      id: 2,
      src: "/images/introductory-videos.png",
      alt: "Service",
      text: t.introductoryVideos,
    },
    {
      id: 3,
      src: "/images/career-interests.png",
      alt: "Service",
      text: t.careerInterests,
    },
    {
      id: 4,
      src: "/images/upload-cv.png",
      alt: "Service",
      text: t.uploadCv,
    },
    {
      id: 5,
      src: "/images/experience.png",
      alt: "Service",
      text: t.experience,
    },
    {
      id: 6,
      src: "/images/skills.png",
      alt: "Service",
      text: t.skills,
    },
    {
      id: 7,
      src: "/images/education.png",
      alt: "Service",
      text: t.education,
    },
    {
      id: 8,
      src: "/images/online-presence.png",
      alt: "Service",
      text: t.onlinePresence,
    },
    {
      id: 9,
      src: "/images/work-samples.png",
      alt: "Service",
      text: t.workSamples,
    },
    {
      id: 10,
      src: "/images/achievements.png",
      alt: "Service",
      text: t.achievements,
    },
  ];

  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex flex-col">
          <div className="flex h-20 items-center justify-between md:hidden">
            <FaArrowLeftLong
              size={25}
              className="ml-4 cursor-pointer"
              onClick={() => router.back()}
            />
            <div
              onClick={toggleModal}
              className="flex cursor-pointer items-center gap-2"
            >
              <Text font={"bold"} size={"xl"}>
                {items[selectedIndex - 1]?.text}
              </Text>
              <MdKeyboardArrowDown size={25} />
            </div>
            <div></div>
          </div>
          {isOpenModal ? (
            <div className="fixed top-20 w-full overflow-hidden rounded-md bg-bgPrimary pb-28 scrollbar-hide">
              <ul className="text-sm">
                {items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() =>
                      handleItemClick(item.id as SelectedIndexType)
                    }
                    className={`cursor-pointer border-b last:border-none ${
                      selectedIndex === item.id
                        ? "border-l-4 border-primary font-semibold text-primary"
                        : ""
                    }`}
                  >
                    <Text
                      className={`block px-6 py-6 hover:border-l-4 hover:border-primary hover:bg-bgSecondary hover:font-semibold hover:text-primary`}
                    >
                      {item.text}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex gap-5">
              <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block 2xl:w-1/5">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="mb-2 hidden min-w-[250px] md:block">
                    <Text font={"bold"} className="text-xl md:text-3xl">
                      {t.editProfile}
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
                          <svg
                            className="size-4 flex-shrink-0 text-textSecondary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="icon"
                          name="icon"
                          className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
                          placeholder={t.searchPlaceholder}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {items.map((item) => (
                        <div
                          key={item.id}
                          onClick={() =>
                            handleItemClick(item.id as SelectedIndexType)
                          }
                          className={`${
                            selectedIndex === item.id
                              ? "bg-bgPrimary text-textPrimary"
                              : ""
                          } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-[25px]"
                          />
                          <Text font={"bold"}>{item.text}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {selectedIndex === 1 && <GeneralInfo />}
              {selectedIndex === 2 && <IntroductoryVideos />}
              {selectedIndex === 3 && <CareerInterests />}
              {selectedIndex === 4 && <UploadCv />}
              {selectedIndex === 5 && <Experience />}
              {selectedIndex === 6 && <Skills />}
              {selectedIndex === 7 && <Education />}
              {selectedIndex === 8 && <OnlinePresence />}
              {selectedIndex === 9 && <WorkSamples />}
              {selectedIndex === 10 && <Achievements />}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default EditProfile;
