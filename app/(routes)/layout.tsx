import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Brahmankar",
  description: "Personal Portfolio of Aditya Brahmankar",
  metadataBase: new URL("https://adityab-portfolio.vercel.app/"),
  openGraph: {
    images: "opengraph-image.png"
  }
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
        <NextTopLoader color="#fff" crawl height={2} showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
