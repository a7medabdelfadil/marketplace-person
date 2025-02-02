"use client";

import React, { useState } from "react";
import { FaChevronDown, FaRegCalendar } from "react-icons/fa6";
import Button from "~/_components/Button";
import Container from "~/_components/Container";
import { Calendar } from "~/components/ui/Calendar";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Text } from "~/_components/Text";

const calendars = [
  { name: "Meetings", color: "text-white", bg: "bg-primary" },
  { name: "Tasks", color: "text-white", bg: "bg-pink-400" },
  { name: "Routine", color: "text-white", bg: "bg-lavender" },
  { name: "Events", color: "text-white", bg: "bg-warning" },
];

function CalendarPage() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Container>
        <div className="flex gap-4">
          <div className="h-[750px] w-1/5 rounded-xl bg-bgPrimary p-4">
            <div className="w-fit">
              <Button color="primary2" className="mb-4 rounded-xl">
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
                    <li
                      key={index}
                    >
                      <div className="mt-6 flex items-center ml-4 gap-2">
                      <span
                        className={`h-5 w-5 rounded-full ${calendar.bg} flex items-center justify-center`}
                      >
                        <span className={`text-lg font-bold ${calendar.color}`}>
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
          </div>
          <div className="h-[750px] w-4/5 rounded-xl bg-bgPrimary p-4"></div>
        </div>
      </Container>
    </>
  );
}

export default CalendarPage;
