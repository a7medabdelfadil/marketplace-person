import React from "react";
import { Text } from "./Text";
import { LuBookText } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { PiGraduationCapLight } from "react-icons/pi";

const CourseCard = ({ course }: any) => {
  return (
    <div className="flex flex-col rounded-2xl bg-bgPrimary shadow-md">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-lg p-4">
        <img
          src={course.image}
          alt={course.title}
          className="h-50 w-full object-cover"
        />
      </div>

      {/* Body Section */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-bgFourth px-3 py-1 text-sm text-textPrimary">
            {course.category}
          </span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-bgSecondary font-medium">
            <div
              className="h-full bg-primary"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <span className="text-sm">{course.progress}%</span>
        </div>
        <Text size="lg" font="semiBold" color="default" className="h-14">
          {course.title}
        </Text>
        <div className="flex items-center gap-2">
          <img
            src={course.profilePhoto}
            className="mt-1 h-6 w-6 rounded-full"
            alt="Profile Photo"
          />
          <Text size="sm" font="default" color="gray" className="mt-2">
            {course.instructor}{" "}
            <span className="text-warning">★ {course.rating} Reviews</span>
          </Text>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-4 flex justify-between items-center border-t-2 border-borderPrimary p-4 pt-2 text-sm text-textPrimary">
        <div className="flex items-center gap-1">
          <LuBookText size={20} className="text-textSecondary" />
          <Text>{course.lessons}</Text>
        </div>
        <span className="text-textSecondary">•</span>
        <div className="flex items-center gap-1">
          <FaRegClock size={20} className="text-textSecondary" />
          <Text>{course.duration}</Text>
        </div>
        <span className="text-textSecondary">•</span>
        <div className="flex items-center gap-1">
          <PiGraduationCapLight size={20} className="text-textSecondary" />
          <Text>{course.students}</Text>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
