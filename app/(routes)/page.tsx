import { Introduction } from "@/components/Introduction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aditya Brahmankar",
  description: "Personal Portfolio of Aditya Brahmankar",
};

export default function Home() {
  return (
    <>
      <Introduction />
    </>
  );
}
