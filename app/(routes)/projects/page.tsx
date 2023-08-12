"use client";

import { Avatar as AvatarComponent, AvatarImage as AvatarImageComponent } from "@/components/ui/avatar";
import { BsDot } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="w-full h-full p-3 md:m-auto max-w-3xl">
      <div className="flex flex-col items-start justify-center mt-20 ">
        <div className="flex flex-row items-center justify-center space-x-2 text-2xl underline underline-offset-4 text-white p-4">
          Projects
        </div>
      </div>
    </div>
  );
}