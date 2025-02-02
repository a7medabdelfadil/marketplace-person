/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiBook3Fill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  en: {
    organization: "Organization",
    education: "Education",
    social: "Social",
    market: "Market",
    more: "More",
    notifications: "Notifications",
    communication: "Communication",
    meeting: "Meeting",
  },
  ar: {
    organization: "المنظمة",
    education: "التعليم",
    social: "اجتماعي",
    market: "السوق",
    more: "المزيد",
    notifications: "الإشعارات",
    communication: "الاتصالات",
    meeting: "الاجتماعات",
  },
  fr: {
    organization: "Organisation",
    education: "Éducation",
    social: "Social",
    market: "Marché",
    more: "Plus",
    notifications: "Notifications",
    communication: "Communication",
    meeting: "Réunions",
  },
  ru: {
    organization: "Организация",
    education: "Образование",
    social: "Социальный",
    market: "Рынок",
    more: "Ещё",
    notifications: "Уведомления",
    communication: "Связь",
    meeting: "Встречи",
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
    <li
      className={`${
        isActive ? "border-primary text-primary" : ""
      } flex h-[85px] w-full cursor-pointer items-center justify-center text-navLinks hover:bg-bgThird hover:text-primary`}
    >
      <Link
        className={`text-md group mt-4 flex w-[40px] flex-col items-center gap-x-3.5 rounded-full border-primary font-sans font-semibold`}
        href={href}
      >
        <Icon className="h-6 w-6" />
        <p className={`${isActive ? "text-primary" : ""} mt-1 text-xs`}>
          {label}
        </p>
      </Link>
    </li>
  );
};

const NavBarMobileBottom = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const url = usePathname();

  const navLinks = [
    { href: "/organization", icon: FaBuildingColumns, label: t.organization },
    { href: "/education", icon: RiBook3Fill, label: t.education },
    { href: "/", icon: IoShareSocialSharp, label: t.social },
    { href: "/market", icon: FaBagShopping, label: t.market },
    { href: "/more", icon: IoIosMore, label: t.more },
  ];

  return (
    <>
      <header>
        <div>
          <div
            dir={"ltr"}
            id="application-sidebar"
            className={`hs-overlay hs-overlay-open:translate-x-0 fixed inset-x-0 bottom-0 z-[60] h-[90px] transform overflow-y-auto border-t border-borderPrimary bg-bgPrimary shadow-[0_-4px_6px_rgba(0,0,0,0.1)] drop-shadow-md transition-all duration-300 ease-in [--auto-close:lg] dark:bg-bgSecondary lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 lg:drop-shadow-none`}
          >
            <nav className={`hs-accordion-group flex w-full`}>
              <ul className="flex w-full justify-evenly">
                {navLinks.map((link) => (
                  <NavBarLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
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

export default NavBarMobileBottom;
