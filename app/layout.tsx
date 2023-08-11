import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

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
      <body className={cn("flex w-full justify-center", inter.className) }>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
