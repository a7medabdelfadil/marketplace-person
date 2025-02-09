/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import translations from "../market/translations";

const Organization = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const [openSections, setOpenSections] = useState<{
    academia: boolean;
    company: boolean;
  }>({
    academia: true,
    company: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/service.png",
      title: "Your Path to the Perfect University",
      description:
        "Explore top universities on our website to find the one that aligns with your goals and start your journey to success.",
    },
    {
      image: "/images/service.png",
      title: "Find Your Dream Campus",
      description:
        "Discover universities with the best facilities, faculty, and learning environment tailored to your ambitions.",
    },
    {
      image: "/images/service.png",
      title: "Shape Your Future",
      description:
        "Choose a university that supports your career aspirations and personal growth with top-tier programs and resources.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Container mr={false}>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  Organization
                </Text>
              </div>
            </div>
            <div className="gap-2 pr-2 pt-2">
              <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                <div className="mb-3 hidden md:block">
                  <label htmlFor="icon" className="sr-only">
                    Search for organization
                  </label>
                  <div className="relative min-w-[150px]">
                    <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                      <svg
                        className="size-4 flex-shrink-0 text-gray-400"
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
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="w-64 rounded-lg p-4 text-left">
                <div className="space-y-4">
                  {/* Academia Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-black"
                      onClick={() => toggleSection("academia")}
                    >
                      <div className="flex items-center gap-2">
                        {openSections.academia ? (
                          <IoIosArrowDown
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        ) : (
                          <IoIosArrowForward
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        )}
                        <img src="/images/academia.png" alt="academia" />
                        Academia
                      </div>
                    </div>
                    {openSections.academia && (
                      <div className="ml-6 mt-2 space-y-2 text-gray-600">
                        <div className="cursor-pointer hover:text-black">
                          University
                        </div>
                        <div className="cursor-pointer hover:text-black">
                          School
                        </div>
                        <div className="cursor-pointer hover:text-black">
                          Training Course
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Company Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-black"
                      onClick={() => toggleSection("company")}
                    >
                      <div className="flex items-center gap-2">
                        {openSections.academia ? (
                          <IoIosArrowDown
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        ) : (
                          <IoIosArrowForward
                            size={14}
                            className="ml-auto text-textSecondary"
                          />
                        )}
                        <img src="/images/company.png" alt="academia" />
                        Company
                      </div>
                    </div>
                    {openSections.company && (
                      <div className="ml-6 mt-2 space-y-2 text-gray-600">
                        <div className="cursor-pointer hover:text-black">
                          Programming
                        </div>
                        <div className="cursor-pointer hover:text-black">
                          Technology
                        </div>
                        <div className="cursor-pointer hover:text-black">
                          Industry
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-start">
                <div className="ml-6 flex w-[220px] items-center gap-4 md:w-fit">
                  <Text
                    font={"bold"}
                    color={"primary"}
                    size={"xl"}
                    className="hover:underline"
                  >
                    University
                  </Text>
                  <Text>Find Programs</Text>
                  <Text>Top Universities</Text>
                  <Text>Student Reviews</Text>
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="h-[1000px] px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="relative w-full flex-shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-96 w-full object-cover"
                      />
                      {currentSlide === index && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center text-white">
                          <h2 className="text-3xl font-bold">{slide.title}</h2>
                          <p className="mt-2 text-lg">{slide.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-75 p-2 shadow-md"
                  onClick={prevSlide}
                >
                  <IoIosArrowBack size={24} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-75 p-2 shadow-md"
                  onClick={nextSlide}
                >
                  <IoIosArrowForward size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Organization;
