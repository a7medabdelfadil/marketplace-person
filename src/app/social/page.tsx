"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Star, MessageSquare, Share2, Plus } from "lucide-react";
import Container from "~/_components/Container";
import { IoIosVideocam, IoMdSearch } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

const ProfileCard = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
    <div className="mb-4 rounded-3xl bg-bgPrimary p-4 shadow-xl lg:mb-8 lg:p-6">
      <div className="relative">
        <img
          src="/images/profile-cover.png"
          alt="Cover"
          className="h-24 w-full rounded-2xl object-cover lg:h-32"
        />
        <div className="absolute -bottom-6 left-4 lg:left-6">
          <img
            src="/images/edit-profile.png"
            alt="Profile"
            className="h-12 w-12 rounded-full border-4 border-bgPrimary lg:h-16 lg:w-16"
          />
        </div>
      </div>
      <div className="mt-8">
        <Text font="bold" className="text-lg lg:text-xl">
          Ramy Muhamed
        </Text>
        <Text font={"medium"} color={"gray"} className="text-xs lg:text-sm">
          @ramymuha...
        </Text>
        <div className="mt-4 flex justify-between">
          <div className="text-center">
            <Text font={"bold"} className="text-sm lg:text-base">
              250
            </Text>
            <Text color={"gray"} className="text-xs lg:text-sm">
              {t.post}
            </Text>
          </div>
          <div className="text-center">
            <Text font={"bold"} className="text-sm lg:text-base">
              2022
            </Text>
            <Text color={"gray"} className="text-xs text-gray-500 lg:text-sm">
              {t.followers}
            </Text>
          </div>
          <div className="text-center">
            <Text font={"bold"} className="text-sm lg:text-base">
              590
            </Text>
            <Text color={"gray"} className="text-xs lg:text-sm">
              {t.following}
            </Text>
          </div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-primary2 py-2 text-sm font-medium text-white lg:text-base">
          {t.myProfile}
        </button>
      </div>
    </div>
  );
};
const StoriesSection = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const stories = [
    {
      name: t.createStory,
      image: "/images/myStory.png",
      isCreate: true,
    },
    {
      name: "Aidan Mason",
      image: "/images/team2.jpeg",
      profilePic: "/images/edit-profile.png",
    },
    {
      name: "Marion Welch",
      image: "/images/team.jpeg",
      profilePic: "/images/edit-profile.png",
    },
    {
      name: "Imran Dennis",
      image: "/images/food.png",
      profilePic: "/images/edit-profile.png",
    },
  ];

  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-2 lg:mb-6 lg:gap-4">
      {stories.map((story) => (
        <div key={story.name} className="flex-shrink-0">
          <div className="relative h-36 w-24 rounded-xl lg:h-48 lg:w-32 lg:rounded-2xl xl:h-[216px] xl:w-[136px]">
            <img
              src={story.image}
              alt={story.name}
              className="h-full w-full rounded-xl object-cover lg:rounded-2xl"
            />

            {story.isCreate ? (
              <>
                <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-black/80 p-2 lg:rounded-b-2xl lg:p-4">
                  <p className="text-center text-[10px] text-white lg:text-xs">
                    {t.createStory}
                  </p>
                </div>
                <div className="absolute left-0 right-0 top-0 flex justify-center">
                  <button className="mt-[100px] rounded-full bg-primary2 p-1 lg:mt-[150px] lg:p-2">
                    <Plus className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-black opacity-70 lg:rounded-2xl" />
                <div className="absolute left-2 top-2">
                  <img
                    src={story.profilePic}
                    alt={`${story.name}'s profile`}
                    className="h-6 w-6 rounded-full border-2 border-primary2 lg:h-8 lg:w-8"
                  />
                </div>
                <p className="absolute bottom-2 left-2 right-2 text-[10px] font-medium text-white lg:text-xs">
                  {story.name}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const PostCreator = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
    <div className="mb-4 rounded-lg bg-bgPrimary p-3 lg:mb-6 lg:p-4">
      <div className="mb-3 flex items-center gap-2 lg:mb-4 lg:gap-4">
        <img
          src="/images/edit-profile.png"
          alt="User"
          className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
        />
        <input
          type="text"
          placeholder={t.whatsOnYourMind}
          className="flex-grow rounded-full px-3 py-1.5 text-sm outline-none lg:px-4 lg:py-2 lg:text-base"
        />
      </div>
      <div className="flex justify-between border-t pt-3 text-xs font-semibold text-black lg:pt-4 lg:text-sm">
        <button className="flex items-center gap-1 lg:gap-2">
          <IoIosVideocam size={16} className="lg:h-5 lg:w-5" />
          <span className="hidden sm:inline">{t.liveVideo}</span>
        </button>
        <button className="flex items-center gap-1 lg:gap-2">
          <MdPhotoLibrary size={16} className="lg:h-5 lg:w-5" />
          <span className="hidden sm:inline">{t.photoVideo}</span>
        </button>
        <button className="flex items-center gap-1 lg:gap-2">
          <FaSmileBeam size={16} className="lg:h-5 lg:w-5" />
          <span className="hidden sm:inline">{t.feelingActivity}</span>
        </button>
      </div>
    </div>
  );
};

const Post = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
  <div className="rounded-lg bg-bgPrimary p-3 lg:p-4">
    <div className="mb-3 flex items-center gap-2 lg:mb-4 lg:gap-4">
      <img
        src="/images/postPub.png"
        alt="NYT"
        className="h-10 w-10 rounded-full lg:h-12 lg:w-12"
      />
      <div>
        <h3 className="text-sm font-bold lg:text-base">The New York Times</h3>
        <p className="flex items-center gap-2 text-xs text-gray-500 lg:text-sm">
          5h. <FaEarthAmericas />
        </p>
      </div>
    </div>
    <p className="mb-3 text-sm lg:mb-4 lg:text-base">
      We consulted five design experts and tested gear in a 275-square-foot
      apartment to find the best multifunctional decor to maximize space in a
      tiny bedroom.
    </p>
    <img
      src="/images/post.png"
      alt="Article"
      className="mb-3 w-full rounded-lg lg:mb-4"
    />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-xs font-semibold lg:gap-2 lg:text-sm">
        <Star className="h-4 w-4 text-primary2 lg:h-5 lg:w-5" />
        <span>{t.youAndOthers}</span>
      </div>
      <div className="text-xs font-semibold text-gray-600 lg:text-sm">
        0 {t.comments}
      </div>
    </div>
    <div className="mt-3 flex justify-between border-t pt-3 text-xs lg:mt-4 lg:pt-4 lg:text-sm">
      <button className="flex items-center gap-1 lg:gap-2">
        <Star className="h-4 w-4 lg:h-5 lg:w-5" />
        <span>{t.star}</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <MessageSquare className="h-4 w-4 lg:h-5 lg:w-5" />
        <span>{t.comment}</span>
      </button>
      <button className="flex items-center gap-1 lg:gap-2">
        <Share2 className="h-4 w-4 lg:h-5 lg:w-5" />
        <span>{t.share}</span>
      </button>
    </div>
  </div>
)
};

const Contacts = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
  <div className="rounded-3xl bg-bgPrimary p-3 shadow-2xl lg:p-4">
    <div className="mb-3 flex items-center justify-between lg:mb-4">
      <Text className="text-lg font-bold lg:text-xl">{t.events}</Text>
    </div>
    <div className="mb-3 flex items-center justify-between lg:mb-4">
      <Text className="text-lg font-bold lg:text-xl">{t.contacts}</Text>
      <div className="flex gap-2">
        <button className="rounded-full p-1.5 hover:bg-bgSecondary lg:p-2">
          <IoMdSearch className="h-4 w-4 lg:h-5 lg:w-5" />
        </button>
      </div>
    </div>
    {[
      "Clara Cross",
      "Stephany Dejesus",
      "Rhea Chan",
      "Aidan Mason",
      "Herbert Frank",
      "Imran Dennis",
    ].map((name) => (
      <div
        key={name}
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-bgSecondary lg:gap-3 lg:py-2"
      >
        <img
          src="/images/saving.png"
          alt={name}
          className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
        />
        <span className="text-sm lg:text-base">{name}</span>
      </div>
    ))}
  </div>
);
}

const Saving = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
  <div className="rounded-3xl bg-bgPrimary p-3 shadow-2xl lg:p-4">
    <div className="mb-3 flex items-center justify-between lg:mb-4">
      <h2 className="text-lg font-bold lg:text-xl">{t.yourSaving}</h2>
      <div className="flex gap-2">
        <button className="rounded-full p-1.5 text-xs font-semibold text-gray-500 hover:bg-bgSecondary lg:p-2 lg:text-sm">
          {t.seeAll}
        </button>
      </div>
    </div>
    {[
      "Art And Drawing",
      "Courses",
      "Favorite Posts",
      "Development",
      "Each",
    ].map((name) => (
      <div
        key={name}
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-bgSecondary lg:gap-3 lg:py-2"
      >
        <img
          src="/images/saving.png"
          alt={name}
          className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
        />
        <span className="text-sm lg:text-base">{name}</span>
      </div>
    ))}
  </div>
);
}

function Social() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [showSidebars, setShowSidebars] = useState(false);

  return (
    <Container>
      <div className="container mx-auto px-2 py-3 lg:px-4 lg:py-6">
        {/* Mobile Menu Toggle */}
        <button
          className="mb-4 rounded-lg bg-primary2 p-2 text-white lg:hidden"
          onClick={() => setShowSidebars(!showSidebars)}
        >
          {t.toggleSidebars}
        </button>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Left Sidebar */}
          <div
            className={`${showSidebars ? "block" : "hidden"} lg:col-span-3 lg:block`}
          >
            <ProfileCard />
            <Saving />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <StoriesSection />
            <PostCreator />
            <Post />
          </div>

          {/* Right Sidebar */}
          <div
            className={`${showSidebars ? "block" : "hidden"} lg:col-span-3 lg:block`}
          >
            <Contacts />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Social;
