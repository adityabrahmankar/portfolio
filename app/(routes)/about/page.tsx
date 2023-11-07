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
        <div className="flex flex-col items-start justify-center mt-3 rounded-lg bg-gray-700/10 ">
          <p className="w-auto p-4 text-white select-none">
            As a mechanical engineering background individual, I have a penchant
            for solving intricate issues using innovative solutions.
            <br /> However, my passion for exploring and learning new
            technologies, particularly in Artificial Intelligence, has become a
            major aspect of my life. I thoroughly enjoy experimenting, tinkering
            and developing new technologies and applications. <br />
            I&apos;m always eager to gain new skills and knowledge and actively
            seek out opportunities to do so.
          </p>
        </div>
      </div>
    </div>
  );
}
