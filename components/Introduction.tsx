"use client";

import SocialButton from "@/components/SocialButton";
import CryptText from "@/components/snippets/crypt-text";
import {
  Avatar as AvatarComponent,
  AvatarImage as AvatarImageComponent,
} from "@/components/ui/avatar";
import { Socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { Dot, File } from "lucide-react";
import { useRouter } from "next/navigation";

export const Introduction = () => {
  const router = useRouter();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full h-full max-w-3xl gap-6 p-3 "
      >
        <span className="mt-[60px] sm:mt-[100px] w-full flex items-center justify-center text-2xl sm:text-3xl font-semibold text-gray-200 ">
          Hey !👋
        </span>
        <div className="flex flex-col items-start justify-center mt-3 rounded-lg bg-gray-700/10 ">
          <div className="flex flex-row items-center justify-center p-4 space-x-2 text-white">
            <AvatarComponent>
              <AvatarImageComponent src="pic.png" />
            </AvatarComponent>
            <div className="pl-2"> Aditya Brahmankar</div>
          </div>
          <div className="w-auto p-4 text-white">
            I&apos;m Aditya a passionate developer living in Pune, India. My
            work spans across multiple disciplines from full-stack development,
            to product development.{" "}
            <span
              className="cursor-pointer text-muted-foreground/80"
              onClick={() => router.push("/projects")}
            >
              view
            </span>
          </div>
          <div className="flex flex-row items-center select-none text-muted-foreground/100">
            <Dot className="text-green-500 h-14 w-14 animate-pulse brightness-200" />
            Available for new opportunities
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-3">
          {Socials.map((social) => (
            <SocialButton key={social.name} socials={social} />
          ))}
          <div
            className="flex flex-row items-center gap-3 px-4 py-2 text-white rounded-full cursor-pointer select-none bg-black/20 w-fit"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Aditya Brahmankar resume.pdf";
              link.click();
            }}
          >
            <File size={18} />
            Resume
          </div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-white to-zinc-900  rounded-full"></div>
      </motion.div>
    </>
  );
};
