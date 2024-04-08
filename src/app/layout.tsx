"use client";

import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarCmp from "@/components/NavbarCmp";
import { LoginNav } from "@/components/NavbarCmp";
import { usePathname } from "next/navigation";
import { register } from "swiper/element/bundle";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "MovieM8",
  description: "Get latest movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  register();

  let navbarComponent = null;
  if (pathname === "/") {
    navbarComponent = <LoginNav />;
  } else if (pathname !== "/m8") { // Exclude navbar on "/test" route
    navbarComponent = <NavbarCmp />;
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <title>MovieM8</title>
      </head>
      <body style={{ background: "#212121" }} className={inter.className}>
        <ClerkProvider>
          <ChakraProvider>
            {navbarComponent}
            {children}
          </ChakraProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
