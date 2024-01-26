import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


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
          GeistSans.className
        )}
      >
        <NextTopLoader color="#fff" crawl height={2} showSpinner={false} />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
