/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { MdKeyboardArrowDown } from "react-icons/md";
// import { useLogout } from "~/APIs/hooks/useAuth";

const translations = {
  en: {
    userName: "Alex Rawles",
    userRole: "Learner",
    signedInAs: "Signed in as",
    profile: "Profile",
    signOut: "Sign Out",
    searchPlaceholder: "Search for Market",
    notifications: "Notifications",
    calendar: "Calendar",
    theme: "Dark Mode",
    language: "Language",
  },
  ar: {
    userName: "أليكس رولز",
    userRole: "متعلم",
    signedInAs: "مسجل الدخول باسم",
    profile: "الملف الشخصي",
    signOut: "تسجيل خروج",
    searchPlaceholder: "ابحث عن السوق",
    notifications: "الإشعارات",
    calendar: "التقويم",
    theme: "الوضع الداكن",
    language: "اللغة",
  },
  fr: {
    userName: "Alex Rawles",
    userRole: "Apprenant",
    signedInAs: "Connecté en tant que",
    profile: "Profil",
    signOut: "Déconnexion",
    searchPlaceholder: "Rechercher sur le marché",
    notifications: "Notifications",
    calendar: "Calendrier",
    theme: "Mode sombre",
    language: "Langue",
  },
  ru: {
    userName: "Алекс Роулз",
    userRole: "Ученик",
    signedInAs: "Вошли как",
    profile: "Профиль",
    signOut: "Выход",
    searchPlaceholder: "Поиск по рынку",
    notifications: "Уведомления",
    calendar: "Календарь",
    theme: "Тёмный режим",
    language: "Язык",
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
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();
  const url = usePathname();
  const [profile, setProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const logout = useLogout();

  // const handleLogout = () => {
  //   logout();
  //   window.location.href = "/login";
  // };
  const toggleProfile = () => {
    setProfile((prev) => !prev);
  };
  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const getLocalizedLabel = (key: string) => {
    return localizedLabels[language]?.[key] || key;
  };

  const clickProfile = () => {
    router.push("/edit-profile")
  }

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
                          onClick={toggleProfile}
                          id="dropdown-trigger"
                          type="button"
                          className="focus:ring-none outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex items-center gap-3 sm:justify-center">
                            <img
                              className="mx-1 h-12 w-12 rounded-full ring-2 ring-bgSecondary sm:rounded-lg"
                              src="/images/profile.png"
                              alt="User Avatar"
                            />
                            <div className="hidden sm:flex sm:flex-col sm:items-start">
                              <span className="font-semibold text-textPrimary">
                                {t.userName}
                              </span>
                              <span className="text-sm text-textSecondary">
                                {t.userRole}
                              </span>
                            </div>
                            <MdKeyboardArrowDown
                              size={20}
                              className="hidden text-textSecondary transition-transform duration-200 sm:block"
                            />
                          </div>
                        </button>
                      </DropdownMenu.Trigger>

                      {profile && (
                        <DropdownMenu.Content
                          className={`absolute ${language == "ar" ? "-left-36" : "right-0"} top-1 z-10 mt-2 min-w-[250px] rounded-lg bg-bgPrimary p-3 text-textPrimary shadow-md`}
                          aria-labelledby="dropdown-trigger"
                          align="end"
                          sideOffset={5}
                        >
                          {/* Header */}
                          <div className="mb-3 border-b border-bgSecondary pb-3">
                            <p className="text-sm text-textSecondary">
                              {t.signedInAs}
                            </p>
                          </div>

                          {/* Links */}
                          <div className="space-y-2">
                            <DropdownMenu.Item asChild>
                              <button
                                className="flex w-full items-center gap-x-3 rounded-md px-3 py-2 text-sm text-textPrimary outline-none ring-0 hover:bg-bgSecondary hover:text-primary"
                                onClick={() => clickProfile()}
                              >
                                <svg
                                  className="h-4 w-4 flex-shrink-0"
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
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                {t.profile}
                              </button>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item asChild>
                              <a
                                // onClick={() => handleLogout()}
                                href="/sign-in"
                                className="flex items-center gap-x-3 rounded-md px-3 py-2 text-sm text-error outline-none hover:bg-error hover:text-white"
                              >
                                {t.signOut}
                              </a>
                            </DropdownMenu.Item>
                          </div>
                        </DropdownMenu.Content>
                      )}
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
