/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdClose,
} from "react-icons/io";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa6";
import Button from "~/_components/Button";
import { IoVideocam } from "react-icons/io5";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { PiUsersThreeBold } from "react-icons/pi";
import { LuBookOpen, LuSearch } from "react-icons/lu";
import translations from "./translations";

const ViewOrganization = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [search, setSearch] = useState("");

  const courses = [
    {
      title: t.businessManagement,
      image: "/images/meeting.jpg",
      link: "#",
    },
    {
      title: t.businessManagement,
      image: "/images/meeting.jpg",
      link: "#",
    },
    {
      title: t.businessManagement,
      image: "/images/meeting.jpg",
      link: "#",
    },
  ];

  const stats = [
    {
      icon: <AiOutlinePieChart className="text-3xl text-textPrimary" />,
      value: "5",
      label: t.ranking,
    },
    {
      icon: <BsStars className="text-3xl text-warning" />,
      value: "97%",
      label: t.numberOfPrograms,
    },
    {
      icon: <PiUsersThreeBold className="text-3xl text-primary" />,
      value: "34+",
      label: t.numberOfStudents,
    },
    {
      icon: <LuBookOpen className="text-3xl text-success" />,
      value: "100+",
      label: t.freeOnlineCourses,
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
    { title: "Courses IIIIIII", image: "/images/coursebord.jpeg" },
    { title: "Courses IIIIIIII", image: "/images/coursebord.jpeg" },
  ];

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
                  {t.organization}
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
                      <LuSearch size={20} className="text-textSecondary" />
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
                        {t.academia}
                      </div>
                    </div>
                    {openSections.academia && (
                      <div className="text-textSecondary">
                        <div className="mt-2 w-full cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.university}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.school}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.trainingCourse}
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
                        {t.company}
                      </div>
                    </div>
                    {openSections.company && (
                      <div className="text-textSecondary">
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.programming}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.technology}
                        </div>
                        <div className="mt-2 cursor-pointer rounded-lg py-1 pl-8 transition duration-300 hover:bg-bgPrimary hover:text-textPrimary">
                          {t.industry}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:w-4/7 ml-0 w-full ${language === "ar" ? "md:mr-5" : "md:ml-5"}`}
          >
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-start">
                <div className="ml-6 flex w-[220px] items-center gap-4 md:w-fit">
                  <Text font={"bold"} size={"xl"} className="hover:underline">
                    {t.university}
                  </Text>
                  <Text>{t.findPrograms}</Text>
                  <Text>{t.topUniversities}</Text>
                  <Text>{t.studentReviews}</Text>
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="px-0 pb-[120px] md:pb-[20px] xl:mb-8 xl:px-4 xl:pt-4"
            >
              <div className="flex flex-col-reverse justify-between bg-bgThird xl:flex-row xl:rounded-xl">
                <div className="w-full p-4 xl:w-1/2 xl:rounded-lg xl:p-14">
                  {/* Title */}
                  <Text
                    font={"bold"}
                    color={"primary"}
                    className="text-2xl xl:text-4xl"
                  >
                    {t.stanfordUniversity}
                  </Text>
                  {/* Description */}
                  <p className="mt-2 text-textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis sit aliquam sit nullam neque ultricies.
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center xl:block">
                    <div className="mt-6 flex w-4/5 flex-wrap items-center justify-center gap-4 xl:w-3/5">
                      {/* Request Meeting Button */}
                      <div className="w-full">
                        <a href="/organization/request-meeting">
                          <Button className="flex items-center gap-2 rounded-sm">
                            {t.requestMeeting}
                            <IoVideocam size={22} />
                          </Button>
                        </a>
                      </div>

                      {/* Secondary Buttons */}
                      <div className="flex w-full items-center gap-4">
                        {/* Apply Button */}
                        <div className="w-full xl:w-fit">
                          <Button
                            onClick={openModal}
                            className="flex items-center gap-2 rounded-sm"
                          >
                            {t.apply}
                            {language == "ar" ? (
                              <FaArrowLeft size={22} className="mx-1" />
                            ) : (
                              <FaArrowRight size={22} className="mx-1" />
                            )}
                          </Button>
                        </div>

                        {/* Watch Video Button */}
                        <button className="flex w-full items-center justify-center gap-2 rounded border border-borderSecondary px-2 py-2 font-semibold text-textPrimary transition duration-300 hover:bg-bgSecondary">
                          {t.watchVideo}
                          <AiOutlinePlaySquare size={20} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full overflow-hidden p-0 xl:w-1/2 xl:rounded-xl">
                  <div
                    className="flex rounded-xl transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="relative w-full flex-shrink-0 overflow-hidden xl:rounded-xl"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-72 w-full object-cover lg:h-80 xl:h-96"
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
                  {t.discoverUniversities}
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
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
                  {t.mostPopularScholarship}
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
                        {t.seeCourseGuide}
                        {language == "ar" ? (
                          <FaArrowLeft size={22} className="mx-1" />
                        ) : (
                          <FaArrowRight size={22} className="mx-1" />
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 rounded border border-borderSecondary px-4 py-2 text-textPrimary hover:bg-bgSecondary">
                  <span className="font-bold">{t.seeAll}</span>
                  {language == "ar" ? (
                    <FaArrowLeft size={22} className="mx-1" />
                  ) : (
                    <FaArrowRight size={22} className="mx-1" />
                  )}
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  {t.meetUniversityAdministration}
                </Text>
                <div className="mt-1 h-2 w-64 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 p-4 md:gap-0 lg:grid-cols-2 xl:grid-cols-4">
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
                  <span className="font-bold">{t.seeAll}</span>
                  {language == "ar" ? (
                    <FaArrowLeft size={22} className="mx-1" />
                  ) : (
                    <FaArrowRight size={22} className="mx-1" />
                  )}
                </button>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  {t.coursesRecord}
                </Text>
                <div className="mt-1 h-2 w-36 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 p-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bgPrimary shadow-lg lg:h-14 lg:w-14">
                          <FaPlay className="text-lg text-primary lg:text-xl" />
                        </div>
                      </div>
                    </div>

                    {/* Course Title and Arrow */}
                    <div className="mt-4 flex w-full items-center justify-between">
                      <Text font={"bold"} size={"lg"} color={"gray"}>
                        {course.title}
                      </Text>
                      <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md hover:bg-primaryHover">
                        {language == "ar" ? (
                          <FaArrowLeft size={22} className="mx-1" />
                        ) : (
                          <FaArrowRight size={22} className="mx-1" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-center">
                <Text font={"semiBold"} size={"2xl"}>
                  {t.mostPopularScholarship}
                </Text>
                <div className="mt-1 h-2 w-48 rounded-full bg-primary"></div>
              </div>
              <div className="mt-8 flex flex-col gap-6 p-4 lg:flex-row">
                <div className="flex w-full flex-col items-center lg:w-1/2">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 rounded-xl bg-bgPrimary p-4 shadow-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      {t.scholarship}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                    >
                      {t.learnMore}{" "}
                      {language == "ar" ? (
                        <FaArrowLeft size={22} className="mx-1" />
                      ) : (
                        <FaArrowRight size={22} className="mx-1" />
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center lg:w-1/2">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 rounded-xl bg-bgPrimary p-4 shadow-md">
                    <h3 className="text-xl font-bold text-gray-800">
                      {t.scholarship}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                    >
                      {t.learnMore}{" "}
                      {language == "ar" ? (
                        <FaArrowLeft size={22} className="mx-1" />
                      ) : (
                        <FaArrowRight size={22} className="mx-1" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
      {isModalOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50">
          {/* Modal Overlay */}
          <div className="absolute inset-0" onClick={closeModal}></div>

          {/* Modal Content */}
          <div className="relative w-11/12 max-w-sm rounded-lg bg-white p-6 shadow-lg">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
            >
              <IoMdClose size={24} />
            </button>

            {/* Modal Header */}
            <Text font="bold" size="xl" className="mb-6">
              {t.letGetStarted}
            </Text>

            {/* Modal Options */}
            <div className="space-y-4">
              <Button className="w-full rounded-md md:bg-primary2 md:hover:bg-primary2Hover">
                {t.firstYearStudent}
              </Button>
              <Button className="w-full rounded-md md:bg-primary2 md:hover:bg-primary2Hover">
                {t.transferStudent}
              </Button>
              <Button className="w-full rounded-md md:bg-primary2 md:hover:bg-primary2Hover">
                {t.educationProfessional}
              </Button>
              <Button className="w-full rounded-md md:bg-primary2 md:hover:bg-primary2Hover">
                {t.parentOrOtherAdult}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ViewOrganization;
