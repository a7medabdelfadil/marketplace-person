"use client";

import React, { useEffect, useState } from "react";
import { FaCalendar, FaVideo } from "react-icons/fa6";
import Button from "~/_components/Button";
import Container from "~/_components/Container";
import { Calendar } from "~/components/ui/Calendar";
import {
  IoMdArrowDropdown,
  IoMdMic,
  IoMdNotificationsOutline,
} from "react-icons/io";
import {
  MdOutlineKeyboardBackspace,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { Text } from "~/_components/Text";
import Input from "~/_components/Input";
import { IoClose } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { Switch } from "~/components/ui/switch";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiList } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";

const calendars = [
  { name: "Meetings", color: "text-white", bg: "bg-primary" },
  { name: "Tasks", color: "text-white", bg: "bg-pink" },
  { name: "Routine", color: "text-white", bg: "bg-lavender" },
  { name: "Events", color: "text-white", bg: "bg-warning" },
];

const events = [
  {
    title: "Daily Meeting",
    subtitle: "Opream Dev",
    time: "All day",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    title: "Task",
    subtitle: "Ux and Ui",
    time: "07:20 AM",
    bgColor: "bg-pink/10",
    textColor: "text-pink",
  },
  {
    title: "Events",
    subtitle: "Festivals",
    time: "07:20 AM",
    bgColor: "bg-warning/10",
    textColor: "text-warning",
  },
];

const reminders = [
  {
    id: 1,
    title: "Your Subscription",
    action: "Review Now",
    time: "6:38 PM",
  },
  {
    id: 2,
    title: "Your Subscription",
    action: "Review Now",
    time: "6:38 PM",
  },
  {
    id: 3,
    title: "Your Subscription",
    action: "Review Now",
    time: "6:38 PM",
  },
];

const daysOfWeek = ["Time", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  "07:20 AM",
  "08:20 AM",
  "09:20 AM",
  "10:20 AM",
  "11:20 AM",
  "12:20 AM",
];

const initialSchedule = [
  { time: "07:20 AM", day: "Sun", event: "Daily Meeting", category: "blue" },
  { time: "08:20 AM", day: "Mon", event: "Task UX/UI", category: "pink" },
  {
    time: "09:20 AM",
    day: "Thu",
    event: "Events - Festivals",
    category: "yellow",
  },
  {
    time: "11:20 AM",
    day: "Sat",
    event: "Go to Play - Padel",
    category: "purple",
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-primary/10 border-primary w-[700%] text-primary",
  pink: "bg-pink/10 border-pink w-[200%] text-pink",
  yellow: "bg-warning/10 border-warning w-[300%] text-warning",
  purple: "bg-lavender/10 border-lavender w-[100%] text-lavender",
};

function CalendarPage() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [isMeetModalOpen, setIsMeetModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCreateModalMobileOpen, setIsCreateMobileModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Create Meeting");
  const [isOpen, setIsOpen] = useState(true);
  const [isCalendarInMobile, setIsCalendarInMobile] = useState(false);

  const [screenWidth, setScreenWidth] = useState<number>(768); // Set a default value

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
        setIsCreateMobileModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isCreateModalMobileOpen ? (
        <>
          <div
            className="block md:hidden"
            onClick={() => setIsCreateModalOpen(false)}
          >
            <div
              className="w-full rounded-lg bg-bgPrimary p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tabs */}
              <div className="flex rounded-t-lg border-b font-medium text-textPrimary">
                {[
                  "Create Meeting",
                  "Event",
                  "Task",
                  "Appointment Schedule",
                ].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-2 text-center text-xs ${
                      selectedTab === tab
                        ? "border-b-2 border-primary text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Form Fields */}
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <MdOutlineEdit size={25} className="text-textSecondary" />
                  <Input
                    border="gray"
                    theme="gray"
                    type="text"
                    placeholder="Add a title"
                    className="w-full rounded-md bg-bgSecondary"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <RiUserAddLine size={25} className="text-textSecondary" />
                  <Input
                    border="gray"
                    theme="gray"
                    type="text"
                    placeholder="Add required attendees"
                    className="w-full rounded-md bg-bgSecondary"
                  />
                </div>

                <div className="flex w-fit items-center gap-3">
                  <LuCalendarDays size={25} className="text-textSecondary" />
                  <Input
                    border="gray"
                    theme="gray"
                    type="date"
                    className="rounded-md bg-bgSecondary"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <IoTimeOutline size={25} className="text-textSecondary" />
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="w-fit">
                      <Input
                        border="gray"
                        theme="gray"
                        type="time"
                        className="rounded-md bg-bgSecondary p-2"
                      />
                    </div>
                    <FaArrowRightLong
                      size={15}
                      className="text-textSecondary"
                    />
                    <div className="w-fit">
                      <Input
                        border="gray"
                        theme="gray"
                        type="time"
                        className="rounded-md bg-bgSecondary p-2"
                      />
                    </div>
                    <span>1hr</span>
                    <Switch />
                    <span>All day</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker
                    size={25}
                    className="text-textSecondary"
                  />
                  <div className="w-36">
                    <Input
                      border="gray"
                      theme="gray"
                      type="text"
                      placeholder="Add location"
                      className="w-full rounded-md bg-bgSecondary p-2"
                    />
                  </div>
                  <span className="text-textPrimary">Online meeting</span>
                  <Switch />
                </div>

                <div className="flex items-start gap-2">
                  <FiList size={25} className="text-textSecondary" />
                  <textarea
                    placeholder="Add a note (optional)"
                    className="w-full rounded-md border bg-lightGray px-2 pb-20 pt-2 outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Buttons */}
              <Button color="primary" className="mt-4">
                Save
              </Button>
              <Button
                theme="outline"
                className="mt-4"
                onClick={() => setIsCreateModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          {isCalendarInMobile ? (
            <>
              <MdOutlineKeyboardBackspace size={30} className="text-textPrimary cursor-pointer ml-4" />
              <div className="h-fit w-full overflow-x-auto rounded-xl bg-bgPrimary px-4 pt-4 pb-28 md:block">
                  <div className="min-w-[800px] rounded-lg bg-bgPrimary p-4">
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center gap-2">
                        <h2 className="border-r border-borderPrimary pr-4 text-2xl font-bold">
                          Calendar
                        </h2>
                        <span className="font-semibold text-primary">
                          March, 2024
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-0 rounded-lg border">
                      {/* Header Row */}
                      {daysOfWeek.map((day, index) => (
                        <div
                          key={index}
                          className={`bg-bgFourth p-3 text-center font-semibold ${
                            index === 0
                              ? "text-textPrimary"
                              : "text-textSecondary"
                          }`}
                        >
                          {day}
                        </div>
                      ))}

                      {/* Schedule Grid */}
                      {timeSlots.map((time, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                          {/* Time Column */}
                          <div className="h-32 border p-3 text-sm font-semibold text-textSecondary">
                            {time}
                          </div>

                          {/* Day Columns */}
                          {daysOfWeek.slice(1).map((day, colIndex) => {
                            const event = schedule.find(
                              (e) => e.time === time && e.day === day,
                            );
                            return (
                              <div
                                key={colIndex}
                                className="relative flex items-center border"
                              >
                                {event && (
                                  <div
                                    className={`absolute h-10 rounded-r-lg border-l-2 p-2 text-left text-xs ${colorClasses[event.category]}`}
                                  >
                                    {event.event}
                                  </div>
                                )}
                                <span className="absolute right-2 top-2 text-xs text-textSecondary">
                                  {rowIndex}
                                </span>
                              </div>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
            </>
          ) : (
            <Container className="overflow-hidden pb-8">
              <div className="flex gap-4 pb-14 md:pb-0">
                <div className="w-full min-w-[300px] rounded-xl bg-bgPrimary px-4 pb-8 pt-4 md:w-fit">
                  <div className="mb-4 flex items-center gap-2 md:hidden">
                    <h2 className="border-r border-borderPrimary pr-4 text-2xl font-bold">
                      Calendar
                    </h2>
                    <span className="font-semibold text-primary">
                      March, 2024
                    </span>
                  </div>
                  <div className="hidden w-fit md:block">
                    <Button
                      color="primary2"
                      onClick={() => setIsCreateModalOpen(true)}
                      className="mb-4 w-full rounded-xl"
                    >
                      + Create
                    </Button>
                  </div>
                  <div className="flex w-full justify-start gap-3 md:hidden">
                    <div className="w-fit">
                      <Button
                        color="primary"
                        onClick={() => setIsCreateMobileModalOpen(true)}
                        className="mb-4 flex-1 rounded-xl px-4 py-2 text-white"
                      >
                        + Create
                      </Button>
                    </div>

                    <div className="w-fit">
                      <Button
                        theme="outline"
                        color="primary"
                        onClick={() => setIsMeetModalOpen((e) => !e)}
                      >
                        <CiVideoOn size={25} className="text-primary" />
                        Meet Now
                      </Button>
                    </div>
                  </div>
                  <Text
                    font={"semiBold"}
                    size={"xl"}
                    className="my-4 block md:hidden"
                  >
                    Select a Date & Time
                  </Text>
                  <div className="w-full pb-4 md:w-fit">
                    <Calendar />
                  </div>
                  <div className="relative my-4 block md:hidden">
                    <h2 className="mb-4 font-semibold">20 September 2022</h2>
                    <div className="space-y-2">
                      {events.map((event, index) => (
                        <div
                          key={index}
                          className={`rounded-lg p-4 ${event.bgColor} flex items-start justify-between`}
                        >
                          <div>
                            <p className={`font-semibold ${event.textColor}`}>
                              {event.title}
                            </p>
                            <p className={`text text-sm ${event.textColor}`}>
                              {event.subtitle}
                            </p>
                          </div>
                          <span
                            className={`text-sm font-semibold ${event.textColor}`}
                          >
                            {event.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="absolute -top-3 right-2 flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg">
                      <IoCalendarNumberOutline
                        size={18}
                        onClick={() => {
                          setIsCalendarInMobile(true);
                        }}
                      />
                    </button>
                  </div>
                  <div className="w-full rounded-xl border border-borderPrimary/50 bg-bgPrimary p-4 md:shadow-md">
                    <div
                      className="flex cursor-pointer items-center space-x-2 text-textPrimary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <IoMdArrowDropdown
                        size={20}
                        className={`transition-transform ${isOpen ? "rotate-0" : "-rotate-90"}`}
                      />
                      <MdOutlinePermContactCalendar
                        size={20}
                        className="text-primary2"
                      />
                      <span className="text-sm font-medium">My calendars</span>
                    </div>
                    {isOpen && (
                      <ul className="mt-2 space-y-2">
                        {calendars.map((calendar, index) => (
                          <li key={index}>
                            <div className="ml-4 mt-6 flex items-center gap-2">
                              <span
                                className={`h-5 w-5 rounded-full ${calendar.bg} flex items-center justify-center`}
                              >
                                <span
                                  className={`text-lg font-bold ${calendar.color}`}
                                >
                                  &#10003;
                                </span>
                              </span>
                              <Text>{calendar.name}</Text>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-4 w-full rounded-xl bg-bgPrimary p-4 md:shadow-md">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Reminders</h3>
                      <IoMdNotificationsOutline
                        size={25}
                        className="rounded-full bg-primary/10 p-1 text-primary md:bg-primary2/10 md:text-primary2"
                      />
                    </div>
                    <div className="space-y-3">
                      {reminders.map((reminder) => (
                        <div
                          key={reminder.id}
                          className="bg-bg flex items-center justify-between rounded-lg p-2"
                        >
                          <div className="flex items-center space-x-3">
                            <IoMdMic
                              size={40}
                              className="rounded-xl bg-primary/10 p-2 text-primary"
                            />
                            <div>
                              <p className="text-sm font-medium">
                                {reminder.title}
                              </p>
                              <p className="cursor-pointer text-xs text-primary md:text-primary2">
                                {reminder.action}
                              </p>
                            </div>
                          </div>
                          <Text color={"gray"} size={"xs"}>
                            {reminder.time}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden h-fit w-full overflow-x-auto rounded-xl bg-bgPrimary p-4 md:block">
                  <div className="min-w-[800px] rounded-lg bg-bgPrimary p-4">
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center gap-2">
                        <h2 className="border-r border-borderPrimary pr-4 text-2xl font-bold">
                          Calendar
                        </h2>
                        <span className="font-semibold text-primary2">
                          March, 2024
                        </span>
                      </div>
                      <div className="relative flex items-center gap-2">
                        <button
                          onClick={() => setIsMeetModalOpen((e) => !e)}
                          className="flex items-center gap-2 rounded-full border border-borderPrimary/10 px-4 py-2 text-primary2 shadow"
                        >
                          <FaVideo size={25} className="text-primary2" />
                          Meet Now
                        </button>
                        {isMeetModalOpen && (
                          <div
                            className="absolute right-0 top-14 z-[1000] hidden items-center justify-center md:flex"
                            onClick={() => setIsMeetModalOpen(false)}
                          >
                            <div
                              className="w-96 rounded-lg bg-bgPrimary p-6 shadow-lg"
                              onClick={(event) => event.stopPropagation()}
                            >
                              <div className="flex items-center justify-between">
                                <Text
                                  font={"bold"}
                                  size={"2xl"}
                                  className="mb-4"
                                >
                                  Start a meeting now
                                </Text>
                                <IoClose
                                  size={30}
                                  onClick={() => setIsMeetModalOpen(false)}
                                  className="cursor-pointer text-primary2"
                                />
                              </div>
                              {/* Input Fields */}
                              <Input
                                theme="gray"
                                border="gray"
                                type="text"
                                label="Meeting name"
                                placeholder="Write meeting name"
                              />

                              {/* Buttons */}
                              <div className="mt-4 flex flex-col justify-end gap-2">
                                <button className="rounded-lg border border-[#2388FF33] bg-bgPrimary px-4 py-2 font-semibold">
                                  Get a link to share
                                </button>
                                <Button
                                  color="primary2"
                                  className="rounded-lg px-4 py-2"
                                >
                                  Start Meet
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-0 rounded-lg border">
                      {/* Header Row */}
                      {daysOfWeek.map((day, index) => (
                        <div
                          key={index}
                          className={`bg-bgFourth p-3 text-center font-semibold ${
                            index === 0
                              ? "text-textPrimary"
                              : "text-textSecondary"
                          }`}
                        >
                          {day}
                        </div>
                      ))}

                      {/* Schedule Grid */}
                      {timeSlots.map((time, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                          {/* Time Column */}
                          <div className="h-32 border p-3 text-sm font-semibold text-textSecondary">
                            {time}
                          </div>

                          {/* Day Columns */}
                          {daysOfWeek.slice(1).map((day, colIndex) => {
                            const event = schedule.find(
                              (e) => e.time === time && e.day === day,
                            );
                            return (
                              <div
                                key={colIndex}
                                className="relative flex items-center border"
                              >
                                {event && (
                                  <div
                                    className={`absolute h-10 rounded-r-lg border-l-2 p-2 text-left text-xs ${colorClasses[event.category]}`}
                                  >
                                    {event.event}
                                  </div>
                                )}
                                <span className="absolute right-2 top-2 text-xs text-textSecondary">
                                  {rowIndex}
                                </span>
                              </div>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          )}
        </>
        // )
      )}

      {isCreateModalOpen && (
        <div
          className="fixed left-0 right-0 top-20 z-[1000] hidden items-center justify-center bg-black bg-opacity-50 md:inset-0 md:flex"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div
            className="w-4/5 rounded-lg bg-bgPrimary p-6 shadow-lg xl:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tabs */}
            <div className="flex border-b text-textSecondary">
              {["Create Meeting", "Event", "Task", "Appointment Schedule"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`flex-1 p-2 text-center ${
                      selectedTab === tab
                        ? "border-b-2 border-primary text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* Form Fields */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2">
                <MdOutlineEdit size={25} className="text-textSecondary" />
                <Input
                  border="none"
                  type="text"
                  placeholder="Add a title"
                  className="w-full rounded-none bg-bgSecondary"
                />
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <RiUserAddLine size={25} className="text-textSecondary" />
                  <Input
                    border="none"
                    type="text"
                    placeholder="Add required attendees"
                    className="w-full rounded-none bg-bgSecondary pr-28"
                  />
                </div>
                <span className="absolute right-4 ml-2 cursor-pointer font-medium text-primary2">
                  <span className="text-xl font-bold">+</span> Optional
                </span>
              </div>
              <div className="flex w-fit items-center gap-3">
                <LuCalendarDays size={25} className="text-textSecondary" />
                <Input
                  border="none"
                  type="date"
                  className="w-fit rounded-none bg-bgSecondary"
                />
              </div>
              <div className="flex w-fit items-center gap-2">
                <IoTimeOutline size={25} className="text-textSecondary" />
                <div className="flex items-center space-x-2">
                  <div className="w-fit">
                    <Input
                      border="none"
                      type="time"
                      className="rounded-none bg-bgSecondary p-2"
                    />
                  </div>

                  <FaArrowRightLong size={15} className="text-textSecondary" />
                  <div className="w-fit">
                    <Input
                      border="none"
                      type="time"
                      className="rounded-none bg-bgSecondary p-2"
                    />
                  </div>
                  <span>1hr</span>
                  <Switch />
                  <span>All day</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker
                  size={25}
                  className="text-textSecondary"
                />
                <div className="relative w-full">
                  <Input
                    border="none"
                    type="text"
                    placeholder="Add location"
                    className="w-full rounded-none border bg-bgSecondary p-2 pr-52"
                  />
                  <div className="absolute right-4 top-3 ml-2 flex items-center">
                    <span className="mr-2 text-textPrimary">
                      Online meeting
                    </span>
                    <Switch />
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiList size={25} className="mt-2 text-textSecondary" />
                <textarea
                  placeholder="Add a note (optional)"
                  className="w-full rounded border bg-bgSecondary px-2 pb-14 pt-2 outline-none"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="rounded-sm border border-borderPrimary bg-bgPrimary px-8 py-2 transition duration-300 hover:bg-bgSecondary"
              >
                Close
              </button>
              <div className="w-fit">
                <Button color="primary2" className="rounded-sm px-8">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMeetModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsMeetModalOpen(false)}
        >
          <div
            className="w-96 rounded-lg bg-bgPrimary p-6 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Text font={"bold"} size={"2xl"} className="mb-4">
                Start a meeting now
              </Text>
              <IoClose
                size={30}
                onClick={() => setIsMeetModalOpen(false)}
                className="cursor-pointer text-primary"
              />
            </div>

            {/* Input Fields */}
            <Input
              theme="gray"
              border="gray"
              type="text"
              label="Meeting name"
              placeholder="Write meeting name"
            />

            {/* Buttons */}
            <div className="mt-4 flex flex-col justify-end gap-2">
              <Button color="primary" className="rounded-lg px-4 py-2">
                Start Meet
              </Button>
              <button className="rounded-lg border border-primary bg-bgPrimary px-4 py-2 font-semibold text-primary">
                Get a link to share
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CalendarPage;
