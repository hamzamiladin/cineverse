"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarCmp from "@/components/NavbarCmp";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavbarCmp />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
