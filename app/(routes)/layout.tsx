"use client";

import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Brahmankar",
  description: "Personal Portfolio of Aditya Brahmankar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("flex w-full justify-center bg-zinc-900", inter.className) }>
        <ToastProvider/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
