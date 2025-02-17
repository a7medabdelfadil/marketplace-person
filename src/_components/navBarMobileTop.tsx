/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavBarMobileTop = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const url = usePathname();

  return (
    <>
      <header>
        <div>
          <header
            className={`sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap bg-bgPrimary py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64`}
          >
            <nav
              className="mx-auto flex w-full items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex">
                <div className="md:hidden">
                  <button
                    type="button"
                    className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <IoSearch size={25} />
                  </button>
                </div>
                <Link
                  href="/calendar"
                  className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                >
                  <FaCalendarAlt
                    size={20}
                    className={`${url === "/calendar" ? "text-primary" : ""}`}
                  />
                </Link>
              </div>
              <div className="me-5 lg:me-0 lg:hidden">
                <Link
                  className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
                  href="/"
                  aria-label="Preline"
                >
                  <img src="/images/opreamIcon.png" alt="#" />
                </Link>
              </div>
              <div>
                <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
                  <div className="hidden sm:block"></div>

                  <div className="flex flex-row items-center justify-end gap-2">
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={handleThemeChange}
                      className="mx-1"
                    />

                    <Link
                      href="/notifies"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <IoNotificationsOutline size={25} />
                    </Link>
                    <Link
                      href="/communication"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <IoChatbubblesOutline size={25} />
                    </Link>
                    <Link
                      href="/meeting"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <BsCameraVideo size={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </header>
    </>
  );
};

export default NavBarMobileTop;
