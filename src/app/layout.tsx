"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarCmp from "@/components/NavbarCmp";
import { LoginNav } from "@/components/NavbarCmp";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cineverse Movie App",
  description: "Get latest movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {pathname === "/" ? <LoginNav /> : <NavbarCmp />}
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
