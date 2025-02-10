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
import { FaArrowRight } from "react-icons/fa6";

const Organization = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const cards = Array(8).fill({
    image: "/images/meeting.jpg", // Replace with the actual image path
    university: "Stanford University",
    qs: 5,
  });

  const cardsFour = Array(4).fill({
    image: "/images/meeting.jpg", // Replace with the actual image path
    university: "Stanford University",
    qs: 5,
  });

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
        <div className="flex justify-between">
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
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg text-left">
                <div className="space-y-4">
                  {/* Academia Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-textPrimary"
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
                      <div className="text-textSecondary">
                        <div className="mt-2 w-full cursor-pointer rounded-lg bg-bgPrimary py-1 pl-8 hover:text-textPrimary">
                          University
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          School
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Training Course
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Company Section */}
                  <div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-lg font-bold text-textPrimary"
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
                      <div className="text-textSecondary">
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Programming
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Technology
                        </div>
                        <div className="mt-2 cursor-pointer py-1 pl-8 hover:text-textPrimary">
                          Industry
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ml-5 md:w-4/7">
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
              className="px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-lg">
                <div
                  className="mt-4 flex transition-transform duration-500"
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
                      className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary2" : "bg-bgPrimary"}`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  Discover Universities
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="relative max-w-sm rounded-lg bg-white shadow-lg"
                  >
                    {/* Image */}
                    <img
                      src={card.image}
                      alt="University"
                      className="h-56 w-full rounded-t-lg object-cover"
                    />

                    {/* Badge */}
                    <div className="absolute right-3 top-3 rounded bg-white px-3 py-1 text-sm font-bold text-textPrimary shadow-md">
                      QS:{card.qs}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-textPrimary">
                        {card.university}
                      </h3>
                      <a
                        href="/organization/view/1"
                        className="mt-1 flex items-center text-primary font-bold hover:underline"
                      >
                        View University{" "}
                        <span className="ml-1 text-xl">&rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 rounded border border-borderSecondary px-4 py-2 text-textPrimary hover:bg-bgSecondary">
                  <span className="font-bold">SEE ALL</span>
                  <FaArrowRight />
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  Top ranking universities
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-4">
                {cardsFour.map((card, index) => (
                  <div
                    key={index}
                    className="relative max-w-sm rounded-lg bg-white shadow-lg"
                  >
                    {/* Image */}
                    <img
                      src={card.image}
                      alt="University"
                      className="h-56 w-full rounded-t-lg object-cover"
                    />

                    {/* Badge */}
                    <div className="absolute right-3 top-3 rounded bg-white px-3 py-1 text-sm font-bold text-textPrimary shadow-md">
                      QS:{card.qs}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-textPrimary">
                        {card.university}
                      </h3>
                      <a
                        href="/organization/view/1"
                        className="mt-1 flex items-center text-primary font-bold hover:underline"
                      >
                        View University{" "}
                        <span className="ml-1 text-xl">&rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 rounded border border-borderSecondary px-4 py-2 text-textPrimary hover:bg-bgSecondary">
                  <span className="font-bold">SEE ALL</span>
                  <FaArrowRight />
                </button>
              </div>
              
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Organization;
