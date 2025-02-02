/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Spinner from "./Spinner";
import { Switch } from "~/components/ui/switch";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Cookie from "js-cookie";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiBook3Fill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { Text } from "./Text";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useInitializeLanguage, useLanguageStore } from "~/APIs/store";
import LanguageSwitcher from "./LanguageSwitcher";

const translations = {
  en: {
    name: "Alex Rawles",
    role: "Leaner",
    searchPlaceholder: "Search for Market",
  },
  ar: {
    name: "أليكس رولز",
    role: "متعلم",
    searchPlaceholder: "ابحث عن السوق",
  },
  fr: {
    name: "Alex Rawles",
    role: "Apprenant",
    searchPlaceholder: "Rechercher sur le marché",
  },
  ru: {
    name: "Алекс Роулз",
    role: "Ученик",
    searchPlaceholder: "Поиск по рынку",
  },
};

interface NavBarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}

const NavBarLink = ({ href, icon: Icon, label, url }: NavBarLinkProps) => {
  const isActive = url === href;
  return (
    <li className="mt-4">
      <Link
        href={href}
        className={`text-md group flex flex-col items-center gap-2 rounded-full font-sans font-semibold transition-all duration-200`}
      >
        <div
          className={`rounded-full px-6 py-3 transition-transform duration-200 group-hover:scale-110 lg:px-8 ${isActive ? "bg-bgThird" : "bg-bgPrimary group-hover:bg-bgThird"}`}
        >
          <Icon
            className={`text-md h-5 w-5 md:w-6 lg:h-6 ${isActive ? "text-primary2" : "text-navLinks group-hover:text-primary2"}`}
          />
        </div>

        <p
          className={`mt-1 text-sm transition-all duration-200 ${isActive ? "text-primary2" : "text-textPrimary group-hover:text-primary2"}`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

type NavKey = (typeof navLinks)[number]["key"];
type LocalizedLabels = Record<
  "en" | "ar" | "fr" | "ru",
  Record<NavKey, string>
>;

const navLinks = [
  { href: "/", icon: IoShareSocialSharp, key: "social" },
  { href: "/organization", icon: FaBuildingColumns, key: "organization" },
  { href: "/education", icon: RiBook3Fill, key: "education" },
  { href: "/market", icon: FaBagShopping, key: "market" },
  { href: "/communication", icon: FaUsers, key: "communication" },
  { href: "/meeting", icon: FaVideo, key: "meeting" },
];

const localizedLabels: LocalizedLabels = {
  en: {
    social: "Social",
    organization: "Organization",
    education: "Education",
    market: "Market",
    communication: "Communication",
    meeting: "Meeting",
  },
  ar: {
    social: "اجتماعي",
    organization: "منظمة",
    education: "تعليم",
    market: "سوق",
    communication: "اتصال",
    meeting: "اجتماع",
  },
  fr: {
    social: "Social",
    organization: "Organisation",
    education: "Éducation",
    market: "Marché",
    communication: "Communication",
    meeting: "Réunion",
  },
  ru: {
    social: "Социальный",
    organization: "Организация",
    education: "Образование",
    market: "Рынок",
    communication: "Коммуникация",
    meeting: "Встреча",
  },
};

const NavBar = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const url = usePathname();

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const getLocalizedLabel = (key: string) => {
    return localizedLabels[language]?.[key] || key;
  };

  useInitializeLanguage(); // Ensure language state is initialized
  const isLoading = useLanguageStore((state) => state.isLoading); // Check if language is loading

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <header dir={language === "ar" ? "rtl" : "ltr"}>
        <div>
          <header
            className={`sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap bg-bgPrimary py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64`}
          >
            <nav
              className="mx-auto flex w-full basis-full items-center px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
                <div className="hidden sm:block"></div>
                <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center lg:flex">
                  <div className="mb-3 hidden md:block">
                    <label htmlFor="icon" className="sr-only">
                      Search
                    </label>
                    <div className="relative md:min-w-80">
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
                <div className="flex flex-row items-center justify-end gap-2">
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={handleThemeChange}
                    className="mx-1"
                  />
                  <Link
                    href="/calendar"
                    className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <FaCalendarAlt size={20} />
                  </Link>
                  <Link
                    href="/notifies"
                    className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <IoMdNotifications size={25} />
                  </Link>
                  <LanguageSwitcher />
                  <div className="hs-dropdown relative flex items-center justify-center rounded-full border border-borderPrimary p-2 [--placement:bottom-right] hover:bg-bgSecondary">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button
                          id="hs-dropdown-with-header"
                          type="button"
                          className="flex items-center justify-center gap-x-2 rounded-full text-sm font-semibold outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="inline-block h-[38px] w-[38px] rounded-full ring-2 ring-bgSecondary"
                              src="/images/productOwnder.png"
                              alt="User Avatar"
                            />
                            <div className="flex flex-col">
                              <Text>{t.name}</Text>
                              <Text color={"gray"}>({t.role})</Text>
                            </div>
                            <IoIosArrowDropdownCircle size={25} />
                          </div>
                        </button>
                      </DropdownMenu.Trigger>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div
            dir={language === "ar" ? "rtl" : "ltr"}
            id="application-sidebar"
            className={`hs-overlay hs-overlay-open:translate-x-0 fixed inset-y-0 start-0 z-[60] w-[120px] transform overflow-y-auto bg-bgPrimary drop-shadow-2xl transition-all duration-300 ease-in [--auto-close:lg] lg:bottom-0 lg:end-auto lg:block lg:w-[150px] lg:translate-x-0 lg:drop-shadow-none`}
          >
            <div className="px-8 pt-4">
              <Link href="/">
                <img
                  className="-translate-7 w-[150px] translate-y-3"
                  src="/images/opreamIcon.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <nav
              className="hs-accordion-group flex w-full flex-col p-6"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1.5">
                {navLinks.map(({ href, icon, key }) => (
                  <NavBarLink
                    key={href}
                    href={href}
                    icon={icon}
                    label={getLocalizedLabel(key)}
                    url={url}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
