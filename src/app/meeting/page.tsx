/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoMdLink } from "react-icons/io";
import { FaExpand } from "react-icons/fa6";
import { RiVoiceprintFill } from "react-icons/ri";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import { RiUserForbidLine } from "react-icons/ri";
import { CiVideoOff, CiVideoOn } from "react-icons/ci";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { BsThreeDots } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import Input from "~/_components/Input";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { BsRecordCircle } from "react-icons/bs";
import { LuShare } from "react-icons/lu";
import { IoMdMic } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHandPaper } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa6";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

function Meeting() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const photos = [
    "images/Ellipse 7.png",
    "images/Ellipse 8.png",
    "images/Ellipse 7.png",
    "images/Ellipse 8.png",
    "images/Ellipse 8.png",
    "images/Ellipse 8.png",
  ];

  const photosMeeting = [
    "/images/meeting.jpg",
    "/images/meeting.jpg",
    "/images/meeting.jpg",
    "/images/meeting.jpg",
  ];
  const [selectedOption, setSelectedOption] = useState("Groups");
  const [activeTab, setActiveTab] = useState("meeting");
  const [screenHeight, setScreenHeight] = useState(0); // Initialize with 0 or a default value

  useEffect(() => {
    // Check if `window` is available to avoid SSR issues
    if (typeof window !== "undefined") {
      // Set the initial screen height
      setScreenHeight(window.innerHeight);

      // Define the resize handler
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          console.log("Screen is larger than md (768px)");
          executeYourFunction();
        }
        // Update screen height whenever the window is resized
        setScreenHeight(window.innerHeight);
      };

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleNavBarMobileClick = (value: any) => {
    setActiveTab(value);
  };

  const executeYourFunction = () => {
    setActiveTab("meeting");
  };

  console.log("👾 ~ Meeting ~ activeTab:", activeTab);
  console.log("👾 ~ Meeting ~ screenHeight:", screenHeight);

  return (
    <>
      <Container>
        <Box className="-mt-10 md:m-0" shadow="none">
          <div className="flex gap-2 md:flex-col lg:flex-row">
            <div className="w-full md:w-full lg:w-2/3">
              {/* Meeting Details */}
              <div className="hidden items-center justify-between md:flex">
                <div className="p-2">
                  <Text font={"bold"} className="text-xl xl:text-2xl">
                    {t.title}
                  </Text>
                  <Text color={"gray"} className="xl:text-md text-sm">
                    {t.date}
                  </Text>
                </div>

                {/* Photos Section */}
                <div className="flex items-center space-x-2" dir="ltr">
                  <div className="flex flex-wrap items-center -space-x-4">
                    {photos.slice(0, 4).map((photo, index) => (
                      <div
                        key={index}
                        className="relative h-[40px] w-[40px] overflow-hidden rounded-full border-2 border-bgPrimary xl:h-[50px] xl:w-[50px]"
                      >
                        <img
                          src={photo}
                          alt={`Profile Photo ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    {photos.length > 4 && (
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-bgFourth text-center text-xl font-medium text-primary2 xl:h-[50px] xl:w-[50px]">
                        +{photos.length - 4}
                      </div>
                    )}
                  </div>
                  {/* Link */}
                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-bgFourth px-6">
                    <IoMdLink className="text-xl text-primary2 xl:text-3xl" />
                    <Text
                      color={"primary2"}
                      className="xl:text-md border-l-2 border-primary2 pl-2 text-sm font-bold"
                    >
                      cem-jnmt-hsu
                    </Text>
                  </div>
                </div>
              </div>
              {activeTab === "meeting" && (
                <div>
                  <div className="relative h-[350px] w-full p-4 md:h-[420px]">
                    <img
                      src="/images/meeting.jpg"
                      alt="meeting photo"
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div className="absolute left-8 top-8 hidden w-[200px] md:block">
                      <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
                        <BsRecordCircle size={25} className="text-error" />
                        <Text font={"semiBold"} className="pl-2 text-white">
                          24:01:45
                        </Text>
                      </div>
                    </div>

                    <div className="absolute right-8 top-8 hidden w-[50px] md:block">
                      <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                      <FaExpand
                        size={25}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                      />
                    </div>

                    <div className="absolute bottom-8 right-8 hidden w-[50px] md:block">
                      <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-white opacity-25"></div>
                      <RiVoiceprintFill
                        size={25}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                      />
                    </div>
                    <div className="absolute left-8 top-8 w-[200px] md:bottom-8 md:top-auto">
                      <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white opacity-25"></div>
                      <Text
                        font={"semiBold"}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
                      >
                        {t.userName}
                      </Text>
                    </div>
                    <CiMicrophoneOff
                      size={40}
                      className="absolute bottom-8 left-8 block rounded-full bg-primary p-1 text-white md:bottom-4 md:top-auto md:hidden md:bg-primary2"
                    />
                  </div>
                  <div className="grid w-full grid-cols-2 gap-4 overflow-x-auto rounded-lg p-4 md:grid-cols-4">
                    {photosMeeting.map((photo, index) => (
                      <div
                        key={index}
                        className="relative h-[180px] w-full md:h-[200px] md:w-full"
                      >
                        {/* Image */}
                        <img
                          src={photo}
                          alt={`Meeting photo ${index + 1}`}
                          className="h-full w-full rounded-xl object-cover"
                        />

                        {/* Icon */}
                        {index % 2 === 0 ? (
                          <CiMicrophoneOff
                            size={35}
                            className="absolute right-4 top-4 rounded-full bg-error p-1 text-white md:bottom-4 md:top-auto"
                          />
                        ) : (
                          <CiMicrophoneOn
                            size={35}
                            className="absolute right-4 top-4 rounded-full bg-primary p-1 text-white md:bottom-4 md:top-auto md:bg-primary2"
                          />
                        )}

                        {/* Text */}
                        <Text
                          font={"semiBold"}
                          className="absolute bottom-4 left-16 -translate-x-1/2 transform rounded-lg bg-black/50 px-3 py-1 text-xs text-white md:text-sm"
                        >
                          {t.userName}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "participants" && (
                <div className="w-full pb-10 pt-8">
                  <div className="flex items-center justify-between">
                    <div className="p-2">
                      <Text font={"bold"} className="text-md xl:text-xl">
                        {t.participants}
                      </Text>
                    </div>

                    <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-bgFourth px-6">
                      <Text
                        color={"primary"}
                        className="xl:text-md text-xs font-bold"
                      >
                        {t.addParticipant}
                      </Text>
                      <RiUserForbidLine className="text-xl text-primary xl:text-2xl" />
                    </div>
                  </div>

                  <div
                    className="mt-4 gap-4 overflow-y-auto"
                    style={{ maxHeight: `${screenHeight - 280}px` }}
                  >
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOn
                          size={35}
                          className="rounded-full p-1 text-xl text-primary"
                        />
                        <CiVideoOff
                          color="red"
                          size={35}
                          className="rounded-full p-1 text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOn
                          size={35}
                          className="rounded-full p-1 text-xl text-primary"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOff
                          size={35}
                          color="red"
                          className="rounded-full p-1 text-xl"
                        />
                        <CiVideoOn
                          size={35}
                          className="rounded-full p-1 text-xl text-primary"
                        />
                      </div>
                    </div>
                    <div className="flex h-20 w-full items-center justify-between px-4">
                      {/* Rounded Photo */}
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <img
                          src="/images/Rectangle 68.png"
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                        text
                      </div>

                      {/* Icons on the Right */}
                      <div className="flex gap-4">
                        <CiMicrophoneOn
                          size={35}
                          className="rounded-full p-1 text-xl text-primary"
                        />
                        <CiVideoOn
                          size={35}
                          className="rounded-full p-1 text-xl text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "messages" && (
                <div className="w-full">
                  <div className="mt-4 flex items-center justify-center gap-6 border-b border-borderPrimary pb-4">
                    <Text size={"2xl"} font={"bold"}>
                      {t.chats}
                    </Text>
                    <RadioGroup.Root
                      className="flex w-4/5 justify-end gap-8 p-2 lg:w-full xl:w-3/5"
                      value={selectedOption}
                      onValueChange={handleOptionChange}
                      aria-labelledby="groups-label"
                    >
                      <RadioGroup.Item
                        key={1}
                        value="Groups"
                        className="group flex h-12 w-fit flex-col items-center justify-center p-4 text-center text-textPrimary transition hover:text-primary focus-visible:outline-none data-[state=checked]:border-b-2 data-[state=checked]:border-primary"
                        aria-labelledby={`1-label`}
                      >
                        <span
                          id="groups-label"
                          className="text-md font-semibold group-data-[state=checked]:text-primary xl:text-xl"
                        >
                          {t.groups}
                        </span>
                      </RadioGroup.Item>
                      <RadioGroup.Item
                        key={2}
                        value="Personal"
                        className="group flex h-12 w-fit flex-col items-center justify-center p-4 text-center text-textPrimary transition hover:text-primary focus-visible:outline-none data-[state=checked]:border-b-2 data-[state=checked]:border-primary"
                        aria-labelledby="personal-label"
                      >
                        <span
                          id="personal-label"
                          className="text-md font-semibold group-data-[state=checked]:text-primary xl:text-xl"
                        >
                          {t.personal}
                        </span>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  </div>
                  <div
                    className="mt-4 gap-4 overflow-y-auto scrollbar-hide"
                    style={{ maxHeight: `${screenHeight - 420}px` }}
                  >
                    {" "}
                    {selectedOption === "Groups" ? (
                      <>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.chatMessage}
                            </Text>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                        <div className="mt-4 flex w-full items-start gap-4 px-4">
                          {/* Rounded Photo */}
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                            <img
                              src="/images/Rectangle 68.png"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Icons on the Right */}
                          <div className="flex w-full flex-col">
                            <div className="flex items-center justify-between">
                              <Text size={"sm"} font={"semiBold"}>
                                {t.userName}
                              </Text>
                              <Text size={"sm"} color={"gray"}>
                                {t.time}
                              </Text>
                            </div>
                            <Text className="text-md break-words text-textSecondary xl:text-xl">
                              {t.personalChatMessage}
                            </Text>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-2 flex justify-center">
                    <BsThreeDots className="text-textSecondary" size={30} />
                  </div>
                  <div className="flex justify-center">
                    <div className="x:w-4/5 my-4 flex h-16 w-full items-center justify-between rounded-full bg-bgSecondary p-4">
                      <div className="flex gap-4">
                        <FiLink className="text-textSecondary" size={30} />
                      </div>
                      <Input placeholder={t.typeMessage} border="none" />{" "}
                      <FiSend
                        className="rounded-full bg-primary p-2 text-white"
                        size={40}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex h-20 items-center justify-center p-4">
                <div className="hidden w-full items-center justify-between md:flex md:w-4/5 lg:w-full xl:w-4/5">
                  <IoVolumeMediumSharp className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                  <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
                    <BsRecordCircle className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                    <LuShare className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                    <IoMdMic className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                    <ImPhoneHangUp className="cursor-pointer rounded-full bg-primary2 p-2 text-5xl text-white lg:text-4xl xl:text-5xl" />
                    <FaVideo className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                    <IoSettingsSharp className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                    <FaHandPaper className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                  </div>
                  <FaExpand className="cursor-pointer rounded-full bg-bgSecondary p-2 text-4xl text-textSecondary lg:p-1 lg:text-3xl xl:p-2 xl:text-4xl" />
                </div>
              </div>
            </div>
            <div className="hidden items-center md:flex md:w-full md:flex-row-reverse lg:block lg:w-1/3">
              <div className="w-1/2 lg:w-full">
                <div className="flex items-center justify-between">
                  <div className="p-2">
                    <Text font={"bold"} className="text-md xl:text-xl">
                      {t.participants}
                    </Text>
                  </div>

                  <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-bgFourth px-6">
                    <Text
                      color={"primary2"}
                      className="xl:text-md text-xs font-bold"
                    >
                      {t.addParticipant}
                    </Text>
                    <RiUserForbidLine className="text-xl text-primary2 xl:text-2xl" />
                  </div>
                </div>

                <div className="mt-4 max-h-[400px] gap-4 overflow-y-auto lg:max-h-[250px]">
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOff
                        size={35}
                        color="red"
                        className="rounded-full p-1 text-xl text-white"
                      />
                      <CiVideoOff
                        color="red"
                        size={35}
                        className="rounded-full p-1 text-xl text-white"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOff
                        size={35}
                        color="red"
                        className="rounded-full p-1 text-xl text-white"
                      />
                      <CiVideoOff
                        color="red"
                        size={35}
                        className="rounded-full p-1 text-xl text-white"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOff
                        size={35}
                        color="red"
                        className="rounded-full p-1 text-xl text-white"
                      />
                      <CiVideoOff
                        color="red"
                        size={35}
                        className="rounded-full p-1 text-xl text-white"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOn
                        size={35}
                        className="rounded-full p-1 text-xl text-primary2"
                      />
                      <CiVideoOff
                        color="red"
                        size={35}
                        className="rounded-full p-1 text-xl text-white"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOff
                        size={35}
                        color="red"
                        className="rounded-full p-1 text-xl text-white"
                      />
                      <CiVideoOn
                        size={35}
                        className="rounded-full p-1 text-xl text-primary2"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOff
                        size={35}
                        color="red"
                        className="rounded-full p-1 text-xl text-white"
                      />
                      <CiVideoOn
                        size={35}
                        className="rounded-full p-1 text-xl text-primary2"
                      />
                    </div>
                  </div>
                  <div className="flex h-20 w-full items-center justify-between px-4">
                    {/* Rounded Photo */}
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src="/images/Rectangle 68.png"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                      text
                    </div>

                    {/* Icons on the Right */}
                    <div className="flex gap-4">
                      <CiMicrophoneOn
                        size={35}
                        className="rounded-full p-1 text-xl text-primary2"
                      />
                      <CiVideoOn
                        size={35}
                        className="rounded-full p-1 text-xl text-primary2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 lg:w-full">
                <div className="mt-4 flex items-center justify-center gap-6 border-b border-borderPrimary pb-4">
                  <Text size={"2xl"} font={"bold"}>
                    {t.chats}
                  </Text>
                  <RadioGroup.Root
                    className="flex w-4/5 rounded-full bg-bgFourth p-2 lg:w-full xl:w-3/5"
                    value={selectedOption}
                    onValueChange={handleOptionChange}
                    aria-labelledby="groups-label"
                  >
                    <RadioGroup.Item
                      key={1}
                      value="Groups"
                      className="group flex h-12 w-1/2 flex-col items-center justify-center rounded-full bg-transparent px-4 text-center text-textPrimary transition hover:border-primary2 hover:text-primary2 focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-75 data-[state=checked]:border-primary data-[state=checked]:bg-primary2"
                      aria-labelledby={`1-label`}
                    >
                      <span
                        id="groups-label"
                        className="text-md font-semibold group-data-[state=checked]:text-white xl:text-xl"
                      >
                        {t.groups}
                      </span>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      key={2}
                      value="Personal"
                      className="group flex h-12 w-1/2 flex-col items-center justify-center rounded-full bg-transparent px-4 text-center text-textPrimary transition hover:border-primary2 hover:text-primary2 focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-75 data-[state=checked]:border-primary data-[state=checked]:bg-primary2"
                      aria-labelledby="personal-label"
                    >
                      <span
                        id="personal-label"
                        className="text-md font-semibold group-data-[state=checked]:text-white xl:text-xl"
                      >
                        {t.personal}
                      </span>
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                </div>
                <div className="mt-4 max-h-[250px] gap-4 overflow-y-auto scrollbar-hide">
                  {selectedOption === "Groups" ? (
                    <>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.chatMessage}
                          </Text>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 flex w-full items-start gap-4 px-4">
                        {/* Rounded Photo */}
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src="/images/Rectangle 68.png"
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Icons on the Right */}
                        <div className="flex w-full flex-col">
                          <div className="flex items-center justify-between">
                            <Text size={"sm"} color={"gray"}>
                              {t.userName}
                            </Text>
                            <Text size={"sm"} color={"gray"}>
                              {t.time}
                            </Text>
                          </div>
                          <Text
                            font={"semiBold"}
                            className="text-md break-words xl:text-xl"
                          >
                            {t.personalChatMessage}
                          </Text>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-2 flex justify-center">
                  <BsThreeDots className="text-textSecondary" size={30} />
                </div>
                <div className="flex justify-center">
                  <div className="x:w-4/5 my-4 flex h-16 w-full items-center justify-between rounded-full bg-bgSecondary p-4">
                    <div className="flex gap-4">
                      <FiLink className="text-textSecondary" size={30} />
                    </div>
                    <Input placeholder={t.typeMessage} border="none" />{" "}
                    <FiSend
                      className="rounded-full bg-primary2 p-2 text-white"
                      size={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>

      <div className="fixed bottom-0 right-0 z-[2001] block h-24 w-full bg-bgPrimary shadow-[0_-4px_6px_rgba(0,0,0,0.1)] drop-shadow-md md:hidden">
        <div className="flex h-24 w-full items-center justify-between px-4 md:hidden">
          <ImPhoneHangUp
            className="cursor-pointer rounded-full bg-error p-2 text-white"
            size={50}
          />
          <IoMdMic
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <FaVideo
            className="cursor-pointer rounded-full text-textSecondary"
            size={30}
          />
          <div className="relative">
            <FaUsers
              onClick={() => handleNavBarMobileClick("participants")}
              className={`cursor-pointer rounded-full ${activeTab === "participants" ? "text-primary" : "text-textSecondary"}`}
              size={30}
            />
            {/* Badge for message count */}
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-error text-xs font-bold text-white">
              5
            </span>
          </div>
          <div className="relative">
            <BiSolidMessageDetail
              onClick={() => handleNavBarMobileClick("messages")}
              className={`cursor-pointer rounded-full ${activeTab === "messages" ? "text-primary" : "text-textSecondary"}`}
              size={30}
            />
            {/* Badge for message count */}
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-error text-xs font-bold text-white">
              2
            </span>
          </div>

          <FaArrowUp
            className="cursor-pointer rounded-md bg-textSecondary p-1 text-white"
            size={25}
          />
        </div>
      </div>
    </>
  );
}

export default Meeting;
