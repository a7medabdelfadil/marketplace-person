/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { FaCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import translations from "./translations";

const CareerInterests = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

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
                    {sub && <p className="text-xs text-textSecondary">{sub}</p>}
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
                <span className="font-bold">{t.workLocationQuestion}</span>
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
    </>
  );
};
export default CareerInterests;
