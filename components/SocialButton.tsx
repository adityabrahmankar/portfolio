import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SocialButtonProps {
  socials: {
    name: string;
    href: string;
    icon: LucideIcon;
  };
}
const SocialButton = ({ socials }: SocialButtonProps) => {
  return (
    <Link
      href={socials.href}
      className="flex flex-row items-center gap-3 px-4 py-2 text-white rounded-full cursor-pointer select-none bg-black/20 w-fit"
    >
      <socials.icon size={18} />
      {socials.name}
    </Link>
  );
};

export default SocialButton;
