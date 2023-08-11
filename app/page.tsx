"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="w-full h-full bg-zinc-900 sm:p-3 md:m-auto">
      <div className="flex flex-col items-start text-white mt-20">
        <div className="flex flex-row items-center justify-center space-x-2 animate-slide-up ">
          <Avatar>
            <AvatarImage src="pic.png" />
          </Avatar>
          <div>Aditya Brahmankar</div>
        </div>
      </div>
    </div>
  );
}
