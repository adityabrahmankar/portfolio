import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@/components/ui/toast";
import { Next13ProgressBar } from "next13-progressbar";

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
      <body
        className={cn(
          "flex w-full justify-center bg-zinc-900 grainy ",
          inter.className
        )}
      >
        <Next13ProgressBar
          height="3px"
          color="#fff"
          startPosition={0.5}
          stopDelayMs={200}
          showOnShallow
          options={{ showSpinner: false }}
        />
        <ToastProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
