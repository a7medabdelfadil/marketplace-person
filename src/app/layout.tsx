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
import ProtectedRoute from "~/_components/ProtectedRoute";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const isAuthPage = [
    "/sign-up",
    "/sign-in",
    "/forget-password",
    "/reset-password",
    "/change-password",
  ].includes(pathname);

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
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-bgPrimary md:bg-bgSecondary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TRPCReactProvider>
            {isAuthPage ? (
              children
            ) : (
              <ProtectedRoute>
                {!isAuthPage && (
                  <>
                    {/* Desktop NavBar */}
                    <div className="hidden md:block">
                      <NavBar />
                    </div>

                    {/* Mobile NavBar */}
                    <div className="block md:hidden">
                      {!isEditProfile && <NavBarMobileTop />}
                      <NavBarMobileBottom />
                    </div>
                  </>
                )}
                <main>{children}</main>
              </ProtectedRoute>
            )}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
