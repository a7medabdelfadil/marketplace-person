"use client";

import React, { useState } from "react";
import { FaVideo } from "react-icons/fa6";
import Button from "~/_components/Button";
import Container from "~/_components/Container";
import { Calendar } from "~/components/ui/Calendar";
import {
  IoMdArrowDropdown,
  IoMdMic,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Text } from "~/_components/Text";
import Input from "~/_components/Input";
import { IoClose } from "react-icons/io5";

const calendars = [
  { name: "Meetings", color: "text-white", bg: "bg-primary" },
  { name: "Tasks", color: "text-white", bg: "bg-pink" },
  { name: "Routine", color: "text-white", bg: "bg-lavender" },
  { name: "Events", color: "text-white", bg: "bg-warning" },
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
  { time: "09:20 AM", day: "Sun", event: "Daily Meeting", category: "blue" },
  { time: "10:20 AM", day: "Mon", event: "Task UX/UI", category: "pink" },
  {
    time: "10:20 AM",
    day: "Thu",
    event: "Events - Festivals",
    category: "yellow",
  },
  {
    time: "11:20 AM",
    day: "Fri",
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
  blue: "bg-primary/10 border-primary",
  pink: "bg-pink/10 border-pink",
  yellow: "bg-warning/10 border-warning",
  purple: "bg-lavender/10 border-lavender",
};

function CalendarPage() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [isMeetModalOpen, setIsMeetModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Container>
        <div className="flex gap-4">
          <div className="w-1/5 rounded-xl bg-bgPrimary px-4 pb-8 pt-4">
            <div className="w-fit">
              <Button color="primary2" className="mb-4 w-full rounded-xl">
                + Create
              </Button>
            </div>
            <Calendar />
            <div className="w-full rounded-xl border border-borderPrimary/50 bg-bgPrimary p-4 shadow-md">
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
            <div className="mt-4 w-full rounded-xl bg-bgPrimary p-4 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Reminders</h3>
                <IoMdNotificationsOutline
                  size={25}
                  className="rounded-full bg-primary2/10 p-1 text-primary2"
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
                        <p className="text-sm font-medium">{reminder.title}</p>
                        <p className="cursor-pointer text-xs text-primary2">
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
          <div className="h-fit w-4/5 rounded-xl bg-bgPrimary p-4">
            <div className="rounded-lg bg-bgPrimary p-4">
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
                      className="absolute right-0 top-14 z-[1000] flex items-center justify-center"
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

              <div className="grid grid-cols-8 gap-0 overflow-hidden rounded-lg border">
                {/* Header Row */}
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className={`bg-bgFourth p-3 text-center font-semibold ${
                      index === 0 ? "text-textPrimary" : "text-textSecondary"
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
                              className={`relative h-10 w-full rounded-r-lg border-l-2 p-2 text-left text-xs ${colorClasses[event.category]}`}
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
    </>
  );
}

export default CalendarPage;
