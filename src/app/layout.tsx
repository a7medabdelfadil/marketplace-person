/* eslint-disable @next/next/no-img-element */
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
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
import ProtectedRoute from "~/_components/ProtectedRoute";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const pathname = usePathname();
  const isAuthPage =
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forget-password" ||
    pathname === "/verify-account" ||
    pathname === "/reset-password" ||
    pathname === "/meeting";

  const isEditProfile = pathname.includes("/edit-profile");
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Opream Person</title>
        <meta name="description" content="Opream Person" />
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
              {pathname !== "/ai" && (
                <div className="absolute right-0 top-1/2">
                  <Link
                    href="/ai"
                    className="fixed right-1 top-1/2 z-50 rounded-full bg-[#8F6BFF] p-4 shadow-xl shadow-[#8F6BFF]/50"
                  >
                    <img src="/images/stars.svg" alt="#" />
                  </Link>
                </div>
              )}
              <div className="block md:hidden">
                {!isEditProfile && <NavBarMobileTop />}
                <NavBarMobileBottom />
              </div>
            </>
          )}
          <TRPCReactProvider>
            {isAuthPage ? (
              children
            ) : (
              <ProtectedRoute>{children}</ProtectedRoute>
            )}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="light"
            />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
