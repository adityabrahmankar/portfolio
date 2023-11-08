import AboutMe from "@/components/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aditya Brahmankar",
  description: "Personal Portfolio of Aditya Brahmankar",
};

export default function About() {
  return (
    <div className="w-full h-full max-w-3xl p-3 md:m-auto">
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-10 px-3 mt-[60px] sm:mt-[100px] sm:px-6">
        <h1 className="text-3xl text-white">About</h1>
        <div className="w-full h-[1px] bg-white rounded-full"></div>
        <AboutMe />
      </div>
    </div>
  );
}
