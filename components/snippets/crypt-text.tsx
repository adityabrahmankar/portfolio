"use client";

import { RotateCcw } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Rubik_Glitch } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Rubik_Glitch({ weight: "400", subsets: ["cyrillic"] });

const getRandomDecryption = (cryptText: string, index: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  return cryptText
    .split("")
    .map((char, i) =>
      i < index || !characters.includes(char)
        ? char
        : characters.charAt(Math.floor(Math.random() * characters.length))
    )
    .join("");
};

const CryptText: React.FC = ({}) => {
  const cryptText = "It is only when you do, you realize you should've done it earlier";
  const [text, setText] = useState<string>(cryptText);
  const [isDecrypting, setIsDecrypting] = useState<boolean>(true);
  const [decryptIndex, setDecryptIndex] = useState<number>(0);

  const handleReset = () => {
    setIsDecrypting(true);
    setDecryptIndex(0);
    setText(cryptText);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isDecrypting) {
      interval = setInterval(() => {
        setDecryptIndex((prevIndex) => prevIndex + 1);
        setText(getRandomDecryption(cryptText, decryptIndex));
      }, 100);
      setTimeout(() => {
        setIsDecrypting(false);
        clearInterval(interval);
        setText(cryptText);
      }, cryptText.length * 40);
    }

    return () => clearInterval(interval);
  }, [cryptText, isDecrypting, decryptIndex]);

  return (
    <div className="relative w-full ">
      <div
        className="absolute bottom-0 right-0 items-center justify-end hidden gap-2 font-semibold w-fit sm:flex"
        onClick={handleReset}
      >
        <RotateCcw size={16} /> Reset
      </div>
      <div className="flex items-center justify-center overflow-hidden select-none">
        <div
          className={cn("text-xl text-gray-100 font-inter  text-center ", font.className)}
        >
          `{text}`
        </div>
      </div>
    </div>
  );
};

export default CryptText;
