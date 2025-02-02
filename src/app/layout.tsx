"use client";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import "react-toastify/dist/ReactToastify.css";
import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "../_components/navBar";
import ThemeProvider from "./providers/themeProvider";
import { usePathname } from "next/navigation";
import NavBarMobileTop from "~/_components/navBarMobileTop";
import NavBarMobileBottom from "~/_components/navBarMobileBottom";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forget-password" ||
    pathname === "/reset-password" ||
    pathname === "/change-password";

  const isEditProfile = pathname.includes("/edit-profile");
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Person</title>
        <meta name="description" content="MarketPlace Person" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-bgPrimary md:bg-bgSecondary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {!isAuthPage && (
            <>
              <div className="hidden md:block">
                <NavBar />
              </div>
              <div className="block md:hidden">
                {!isEditProfile && <NavBarMobileTop />}
                <NavBarMobileBottom />
              </div>
            </>
          )}
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
