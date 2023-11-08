"use client";

import { Socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { File } from "lucide-react";
import SocialButton from "./SocialButton";


type Props = {};

const AboutMe = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full gap-4 p-3 text-white rounded-md select-none bg-gray-700/10"
    >
      <p className="w-auto p-4 text-white select-none">
        As a mechanical engineering background individual, I have a penchant for
        solving intricate issues using innovative solutions.
        <br />
        <br /> However, my passion for exploring and learning new technologies,
        particularly in Artificial Intelligence, has become a major aspect of my
        life. I thoroughly enjoy experimenting, tinkering and developing new
        technologies and applications. <br />
        I&apos;m always eager to gain new skills and knowledge and actively seek
        out opportunities to do so.
      </p>
      <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-white to-zinc-900  rounded-full"></div>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-3">
        {Socials.map((social) => (
          <SocialButton key={social.name} socials={social} />
        ))}
        <div className="flex flex-row items-center gap-3 px-4 py-2 text-white rounded-full cursor-pointer select-none bg-black/20 w-fit" onClick={() => window.open("/resume.pdf", "_blank", "noopener noreferrer")}>
            <File size={18} />
            Resume
          </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
