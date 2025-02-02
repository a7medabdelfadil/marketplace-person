/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { FaArrowLeftLong, FaCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import translations from "./translations";

const CareerInterests = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal((e) => !e);
  };
  const [screenWidth, setScreenWidth] = useState<number>(768); // Set a default value
  const [selected, setSelected] = useState("Experienced");
  const [selectedOption, setSelectedOption] = useState("Full Time");
  const [selectedEnvironment, setSelectedEnvironment] = useState("On-site");
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryTitles, setCategoryTitles] = useState<string[]>([]);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Egyptian Pound (EGP)");
  const [frequency, setFrequency] = useState("Per Month");
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    /**
     * Handle window resize event
     *
     * When the window is resized, set the screenWidth state to the new value.
     * If the new width is greater than 768px, close the modal.
     */
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);

      // Close the modal if the screen is bigger than md (768px)
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
      src: "/images/general-info.png",
      alt: "Product",
      text: t.generalInfo,
      url: "/edit-profile",
    },
    {
      src: "/images/introductory-videos.png",
      alt: "Service",
      text: t.introductoryVideos,
      url: "/edit-profile/introductory-videos",
    },
    {
      src: "/images/career-interests.png",
      alt: "Service",
      text: t.careerInterests,
      url: "/edit-profile/career-interests",
    },
    {
      src: "/images/upload-cv.png",
      alt: "Service",
      text: t.uploadCv,
      url: "/edit-profile/upload-cv",
    },
    {
      src: "/images/experience.png",
      alt: "Service",
      text: t.experience,
      url: "/edit-profile/experience",
    },
    {
      src: "/images/skills.png",
      alt: "Service",
      text: t.skills,
      url: "/edit-profile/skills",
    },
    {
      src: "/images/education.png",
      alt: "Service",
      text: t.education,
      url: "/edit-profile/education",
    },
    {
      src: "/images/online-presence.png",
      alt: "Service",
      text: t.onlinePresence,
      url: "/edit-profile/online-presence",
    },
    {
      src: "/images/work-samples.png",
      alt: "Service",
      text: t.workSamples,
      url: "/edit-profile/work-samples",
    },
    {
      src: "/images/achievements.png",
      alt: "Service",
      text: t.achievements,
      url: "/edit-profile/achievements",
    },
  ];

  /**
   * Add a location to the list of locations
   */
  const addLocation = () => {
    // Check if the selected location is not empty and the number of locations is less than 5
    if (selectedLocation && locations.length < 5) {
      // Add the selected location to the list of locations
      setLocations([...locations, selectedLocation]);
      // Clear the selected location input field
      setSelectedLocation("");
    }
  };

  /**
   * Handle the key down event for the job title input field
   * @param event The key down event
   */
  const handleKeyDownJob = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the key pressed is Enter and the job title is not empty
    if (event.key === "Enter" && jobTitle.trim() !== "") {
      // Add the job title to the list of job titles
      setJobTitles([...jobTitles, jobTitle.trim()]);
      // Clear the job title input field
      setJobTitle("");
    }
  };

  const handleKeyDownCategory = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Check if the key pressed is Enter and the job title is not empty
    if (event.key === "Enter" && categoryTitle.trim() !== "") {
      // Add the job title to the list of job titles
      setCategoryTitles([...categoryTitles, categoryTitle.trim()]);
      // Clear the job title input field
      setCategoryTitle("");
    }
  };

  const removeJobTitle = (index: number) => {
    setJobTitles(jobTitles.filter((_, i) => i !== index));
  };

  const clearAllJobTitles = () => {
    setJobTitles([]);
  };

  const removeCategoryTitle = (index: number) => {
    setCategoryTitles(categoryTitles.filter((_, i) => i !== index));
  };

  const clearAllCategoryTitles = () => {
    setCategoryTitles([]);
  };

  const options = [
    t.fullTime,
    t.partTime,
    t.freelance,
    t.internship,
    t.shiftWork,
    t.volunteer,
    t.studentActivity,
  ];

  const levels = [
    { label: t.student },
    { label: t.entryLevel },
    { label: t.experienced, sub: t.nonManager },
    { label: t.manager },
    { label: t.seniorManagement, sub: t.eg },
    { label: t.unspecified },
  ];

  const environments = [t.onSite, t.remote, t.hybrid];

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
                {t.careerInterests}
              </Text>
              <MdKeyboardArrowDown size={25} />
            </div>
            <div></div>
          </div>
          {isOpenModal ? (
            <div className="fixed top-20 w-full overflow-hidden rounded-md bg-bgPrimary pb-28 scrollbar-hide">
              <ul className="text-sm">
                {items.map((item, index) => (
                  <li key={index} className="border-b last:border-none">
                    <Link
                      href={item.url}
                      className={`block px-6 py-6 hover:border-l-4 hover:border-primary hover:bg-bgSecondary hover:font-semibold hover:text-primary ${
                        index === 2
                          ? "border-l-4 border-primary font-semibold text-primary"
                          : ""
                      }`}
                    >
                      {item.text}
                    </Link>
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
                    {items.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleButtonClick(item?.url)}
                        className={`${index === 0 ? "mt-0" : "mt-4"} ${index === 2 ? "bg-bgPrimary" : ""} flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
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
              <div className="md:w-4/7 mt-14 w-full bg-bgPrimary">
                <Box
                  rounded="none"
                  padding="0"
                  shadow="none"
                  className="-mt-[20px] px-0 pb-[120px] pt-5 md:mb-8 md:px-4 md:pb-[20px]"
                >
                  <div className="mx-4 mt-4 flex flex-col items-center justify-center lg:mx-0">
                    <div className="w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      {/* Heading */}
                      <h2 className="mb-4 text-lg font-bold">{t.jobLevel}</h2>

                      {/* Career Level Grid */}
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        {levels.map(({ label, sub }) => (
                          <button
                            key={label}
                            className={`rounded-lg border p-4 text-center text-sm font-medium transition-all ${
                              selected === label
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-borderPrimary bg-lightGray hover:bg-bgSecondary"
                            }`}
                            onClick={() => setSelected(label)}
                          >
                            <span>{label}</span>
                            {sub && (
                              <p className="text-xs text-textSecondary">
                                {sub}
                              </p>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-bold">{t.jobLevel}</h2>

                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {options.map((option) => (
                          <button
                            key={option}
                            className={`flex items-center justify-between rounded-lg border p-4 text-sm font-medium transition-all ${
                              selectedOption === option
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-borderPrimary bg-lightGray hover:bg-bgSecondary"
                            }`}
                            onClick={() => setSelectedOption(option)}
                          >
                            <span>{option}</span>
                            {selectedOption === option ? (
                              <FaCheck className="text-primary" />
                            ) : (
                              <FiPlus className="text-textSecondary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-semibold">
                        {t.workEnvironment}
                      </h2>

                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {environments.map((option) => (
                          <button
                            key={option}
                            className={`flex items-center justify-between rounded-lg border p-4 text-sm font-medium transition-all ${
                              selectedEnvironment === option
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-borderPrimary bg-lightGray hover:bg-bgSecondary"
                            }`}
                            onClick={() => setSelectedEnvironment(option)}
                          >
                            <span>{option}</span>
                            {selectedEnvironment === option ? (
                              <FaCheck className="text-primary" />
                            ) : (
                              <FiPlus className="text-textSecondary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-bold">
                        {t.jobTitlesQuestion}
                        <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                          {t.addAtLeastOne}
                        </span>
                      </h2>
                      <div className="relative flex flex-wrap gap-2 rounded-lg p-2">
                        {jobTitles.map((title, index) => (
                          <div
                            key={index}
                            className="flex items-center rounded-lg border border-primary bg-primary/10 px-3 py-1 text-primary"
                          >
                            {title}
                            <button
                              className="ml-2"
                              onClick={() => removeJobTitle(index)}
                            >
                              <IoClose size={15} className="text-primary" />
                            </button>
                          </div>
                        ))}
                        <input
                          type="text"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          onKeyDown={handleKeyDownJob}
                          placeholder={t.addJobTitle}
                          className="flex-1 p-2 outline-none"
                        />
                        {jobTitles.length > 0 && (
                          <button
                            className="absolute right-0 top-0 mt-4"
                            onClick={clearAllJobTitles}
                          >
                            <TiDeleteOutline size={25} />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-bold">
                        {t.jobCategoriesQuestion}
                        <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                          {t.addOneOrMore}
                        </span>
                      </h2>
                      <div className="relative flex flex-wrap gap-2 rounded-lg p-2">
                        {categoryTitles.map((title, index) => (
                          <div
                            key={index}
                            className="flex items-center rounded-lg border border-primary bg-primary/10 px-3 py-1 text-primary"
                          >
                            {title}
                            <button
                              className="ml-2"
                              onClick={() => removeCategoryTitle(index)}
                            >
                              <IoClose size={15} className="text-primary" />
                            </button>
                          </div>
                        ))}
                        <input
                          type="text"
                          value={categoryTitle}
                          onChange={(e) => setCategoryTitle(e.target.value)}
                          onKeyDown={handleKeyDownCategory}
                          placeholder={t.addCategoryTitle}
                          className="flex-1 p-2 outline-none"
                        />
                        {categoryTitles.length > 0 && (
                          <button
                            className="absolute right-0 top-0 mt-4"
                            onClick={clearAllCategoryTitles}
                          >
                            <TiDeleteOutline size={25} />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-medium">
                        <span className="font-bold">{t.salaryQuestion}</span>
                        <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                          {t.addNetSalary}
                        </span>
                      </h2>
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <Input
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder={t.addSalary}
                          border="gray"
                          theme="gray"
                        />
                        <select
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                          className="rounded-lg border bg-lightGray p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>test</option>
                          <option>Egyptian Pound (EGP)</option>
                          <option>US Dollar (USD)</option>
                          <option>Euro (EUR)</option>
                        </select>
                        <select
                          value={frequency}
                          onChange={(e) => setFrequency(e.target.value)}
                          className="rounded-lg border bg-lightGray p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>{t.perMonth}</option>
                          <option>{t.perYear}</option>
                          <option>{t.perWeek}</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-8 w-full rounded-xl border bg-bgPrimary p-6 lg:w-4/5">
                      <h2 className="mb-4 text-lg font-medium">
                        <span className="font-bold">
                          {t.workLocationQuestion}
                        </span>
                        <span className="text-sm font-medium text-textSecondary lg:text-textPrimary">
                          {t.addUpToFive}
                        </span>
                      </h2>
                      <div className="flex gap-4">
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="flex-1 rounded-lg border bg-lightGray p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="" disabled>
                            Country
                          </option>
                          <option>Egypt</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Qatar</option>
                        </select>
                        <div className="w-fit">
                          <Button onClick={addLocation}>{t.addLocation}</Button>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {locations.map((location, index) => (
                          <div
                            key={index}
                            className="rounded-lg border border-primary bg-primary/10 px-3 py-1 text-primary"
                          >
                            {location}
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
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default CareerInterests;
