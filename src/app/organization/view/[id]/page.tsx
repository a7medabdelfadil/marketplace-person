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
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import translations from "~/app/market/translations";
import Button from "~/_components/Button";
import { IoVideocam } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { PiUsersThreeBold } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";

const ViewOrganization = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const courses = [
    {
      title: "Business management",
      image: "/images/meeting.jpg",
      link: "#",
    },
    {
      title: "Business management",
      image: "/images/meeting.jpg",
      link: "#",
    },
    {
      title: "Business management",
      image: "/images/meeting.jpg",
      link: "#",
    },
  ];

  const stats = [
    {
      icon: <AiOutlinePieChart className="text-3xl text-textPrimary" />,
      value: "5",
      label: "Ranking",
    },
    {
      icon: <BsStars className="text-3xl text-warning" />,
      value: "97%",
      label: "Number Of Programs",
    },
    {
      icon: <PiUsersThreeBold className="text-3xl text-primary" />,
      value: "34+",
      label: "Number Of Student",
    },
    {
      icon: <LuBookOpen className="text-3xl text-success" />,
      value: "100+",
      label: "Free Online Courses",
    },
  ];

  const team = [
    {
      name: "Brian Clark",
      role: "CEO & FOUNDER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit amet dol hendrerit pretium nulla sed.",
      image: "/images/team.jpeg",
    },
    {
      name: "Stephanie Powell",
      role: "VP OF FINANCE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit amet dol hendrerit pretium nulla sed.",
      image: "/images/team2.jpeg",
    },
    {
      name: "Christopher White",
      role: "VP OF PRODUCT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit amet dol hendrerit pretium nulla sed.",
      image: "/images/team.jpeg",
    },
    {
      name: "Christopher White",
      role: "VP OF PRODUCT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit amet dol hendrerit pretium nulla sed.",
      image: "/images/team2.jpeg",
    },
  ];

  const coursesRecord = [
    { title: "Courses I", image: "/images/coursebord.jpeg" },
    { title: "Courses II", image: "/images/coursebord.jpeg" },
    { title: "Courses III", image: "/images/coursebord.jpeg" },
    { title: "Courses IIII", image: "/images/coursebord.jpeg" },
    { title: "Courses IIIII", image: "/images/coursebord.jpeg" },
    { title: "Courses IIIIII", image: "/images/coursebord.jpeg" },
  ];

  const cards = Array(8).fill({
    image: "/images/meeting.jpg",
    university: "Stanford University",
    qs: 5,
  });

  const cardsFour = Array(4).fill({
    image: "/images/meeting.jpg",
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
      image: "/images/meeting.jpg",
      title: "Your Path to the Perfect University",
      description:
        "Explore top universities on our website to find the one that aligns with your goals and start your journey to success.",
    },
    {
      image: "/images/meeting.jpg",
      title: "Find Your Dream Campus",
      description:
        "Discover universities with the best facilities, faculty, and learning environment tailored to your ambitions.",
    },
    {
      image: "/images/meeting.jpg",
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
                        <div className="mt-2 w-full cursor-pointer py-1 pl-8 hover:text-textPrimary">
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
                    // color={"primary"}
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
              className="px-0 pb-[120px] pt-4 md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="flex flex-col-reverse lg:flex-row justify-between rounded-xl bg-bgThird">
                <div className="w-full lg:w-1/2 rounded-lg p-14">
                  {/* Title */}
                  <Text font={"bold"} color={"primary"} className="text-2xl lg:text-4xl">
                    Stanford University
                  </Text>
                  {/* Description */}
                  <p className="mt-2 text-textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam neque ultricies.
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 space-y-4">
                    {/* Request Meeting Button */}
                    <div className="w-fit">
                      <Button className="rounded-sm">
                        <a href="/organization/request-meeting">Request Meeting</a>
                        <IoVideocam size={22} />
                      </Button>
                    </div>

                    {/* Secondary Buttons */}
                    <div className="flex items-center gap-4">
                      <div className="w-fit">
                        <Button className="rounded-sm">
                          Apply
                          <IoArrowForwardOutline size={22} />
                        </Button>
                      </div>
                      <button className="flex items-center rounded border border-borderSecondary px-6 py-2 font-semibold text-textPrimary transition duration-300 hover:bg-bgSecondary">
                        Watch Video
                        <AiOutlinePlaySquare size={20} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full p-4 lg:p-0 lg:w-1/2 overflow-hidden rounded-xl">
                  <div
                    className="flex rounded-xl transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="relative w-full flex-shrink-0 overflow-hidden rounded-xl bg-red-500"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-96 w-full object-cover"
                        />
                        {currentSlide === index && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-bgPrimary bg-opacity-75 p-2 shadow-md"
                    onClick={prevSlide}
                  >
                    <IoIosArrowBack size={24} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-bgPrimary bg-opacity-75 p-2 shadow-md"
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
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  Discover Universities
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex h-40 flex-col justify-center gap-4 rounded-lg border border-borderPrimary bg-bgPrimary p-4 shadow"
                  >
                    {/* Icon */}
                    <div className="flex items-center">{stat.icon}</div>
                    {/* Content */}
                    <div>
                      {/* <h3 className="text-xl font-bold text-textPrimary"> */}
                      <Text font={"bold"} size={"2xl"}>
                        {stat.value}
                      </Text>
                      {/* </h3> */}
                      <Text font={"bold"} color={"gray"}>
                        {stat.label}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  Most popular Program
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-6 p-4 lg:grid-cols-2 xl:grid-cols-3">
                {courses.map((course, index) => (
                  <div key={index} className="rounded-xl">
                    {/* Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-56 w-full rounded-t-lg object-cover"
                    />

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-textPrimary">
                        {course.title}
                      </h3>
                      <a
                        href={course.link}
                        className="mt-2 inline-flex items-center text-primary hover:underline"
                      >
                        SEE COURSE GUIDE
                        <IoArrowForwardOutline size={18} className="ml-2" />
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
                  Meet the university Administration{" "}
                </Text>
                <div className="mt-1 h-2 w-64 rounded-full bg-primary"></div>
              </div>
              <div className="grid mt-8 grid-cols-1 p-4 lg:grid-cols-2 xl:grid-cols-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shadow-lg"
                  >
                    {/* Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-96 w-full object-cover"
                    />

                    {/* Overlay Content with Gradient */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm font-medium">{member.role}</p>
                      <p className="mt-2 text-sm">{member.description}</p>
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
                  Courses Record{" "}
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 p-4 lg:grid-cols-2 lg:grid-cols-3">
                {coursesRecord.map((course, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Course Image */}
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-lg object-cover shadow-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                          <FaPlay className="text-xl text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Course Title and Arrow */}
                    <div className="mt-4 flex w-full items-center justify-between">
                      <Text font={"bold"} size={"lg"} color={"gray"}>
                        {course.title}
                      </Text>
                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md hover:bg-primaryHover">
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  Most Popular Scholarship
                </Text>
                <div className="mt-1 h-2 w-48 rounded-full bg-primary"></div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 mt-8 p-4">
                <div className="flex w-1/2 flex-col items-center">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 bg-bgPrimary p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Scholarship
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-primary font-bold hover:underline"
                    >
                      Learn more <span className="ml-2 text-xl">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="flex w-1/2 flex-col items-center">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 bg-bgPrimary p-4 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      Scholarship
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-primary font-bold hover:underline"
                    >
                      Learn more <span className="ml-2 text-xl">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default ViewOrganization;
