"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "~/_components/Container";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { FaHeartbeat } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
const AIChat = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
    <Container className="flex h-[800px]">
      {/* Sidebar */}
      <div className="w-80 bg-bgPrimary">
        <div className="p-4">
          <div className="flex w-full items-center py-4">
            <button className="flex w-full items-center gap-2 rounded-lg bg-primary px-3 py-3 font-medium text-white shadow-lg">
              <FiPlus color="white" size={20} /> {t.startNewChat}
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex space-x-4 text-sm font-semibold">
            <button className="text-xl font-semibold">{t.history}</button>
          </div>

          {/* Chat list */}
          <div className="space-y-2">
            <div className="flex cursor-pointer items-center rounded-lg p-2 hover:bg-gray-100">
              <div className="mr-3 h-10 w-10">
                <img
                  src="/images/chatProf.png"
                  className="h-10 w-10 rounded-full"
                  alt="#"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="mr-2 font-medium">Hello</span>
                  <span className="text-xs text-gray-500">
                    <HiOutlineDotsHorizontal size={17} className="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex flex-1 flex-col">
        {/* Messages area */}
        <div className="grid h-full items-center overflow-y-auto bg-bgPrimary bg-cover bg-fixed p-4">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="mb-2 text-[48px] font-semibold text-gray-800">
              {t.welcomeTo}
              <span className="border-l-2 border-primary bg-gradient-to-r from-[#9BCCEC] via-[#C6E1E4] to-white p-3">
                {t.aiAssistant}
              </span>
            </h1>
            <p className="text-sm font-medium text-black sm:text-base">
              {t.aiPowerMessage}
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-1 flex-col items-center justify-center space-y-8">
            {/* Buttons Section */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="grid h-[170px] w-[250px] rounded-lg bg-bgPrimary px-6 py-3 shadow transition duration-200">
                <img src="/images/mic.svg" alt="#" />
                <p className="flex w-full items-center justify-between">
                  {t.chatWithAiBot}{" "}
                  {language === "ar" ? (
                    <IoIosArrowRoundBack size={20} />
                  ) : (
                    <IoIosArrowRoundForward size={20} />
                  )}
                </p>
              </button>
              <button className="grid h-[170px] w-[250px] rounded-lg bg-bgPrimary px-6 py-3 shadow transition duration-200">
                <img src="/images/msg.svg" alt="#" />
                <p className="flex w-full items-center justify-between">
                  {t.talkWithAiBot}{" "}
                  {language === "ar" ? (
                    <IoIosArrowRoundBack size={20} />
                  ) : (
                    <IoIosArrowRoundForward size={20} />
                  )}
                </p>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex w-[800px] max-w-md items-center rounded-2xl bg-bgSecondary px-4 py-3">
              <input
                type="text"
                placeholder="Type Something..."
                className="flex-grow rounded-2xl bg-bgSecondary px-4 py-1 focus:outline-none"
              />
              <button className="ml-2 text-blue-500 transition duration-200 hover:text-blue-600">
                <TbSend size={22} />
              </button>
            </div>
          </div>

          {/* Categories Footer */}
          <footer className="flex justify-center space-x-12 py-6">
            {/* Example of 4 category items */}
            <div className={`flex ${language === "ar" ? "ml-12" : ""} flex-col items-center`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB341] text-xl font-bold text-white shadow-xl shadow-[#FFB341]/50">
                <FaHeartbeat />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {t.health}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3EE358] text-xl font-bold text-white shadow-xl shadow-[#3EE358]/50">
                <IoCloudDoneSharp />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {t.dailyLife}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3BC6F2] text-xl font-bold text-white shadow-xl shadow-[#3BC6F2]/50">
                <FaFigma />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {t.design}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8941FF] text-xl font-bold text-white shadow-xl shadow-[#8941FF]/50">
                <MdOutlineLightMode />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {t.business}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default AIChat;
