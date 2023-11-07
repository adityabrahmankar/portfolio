"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuItems } from "@/lib/constants";
import useMediaQuery from "@/lib/use-mediaquery";

const Navbar = () => {
  const pathname = usePathname();

  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-around px-3 py-4 text-white bg-gray-500/10 backdrop-blur-sm ">
        {MenuItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <item.icon
              className={`w-8 h-8 ${
                pathname === item.href ? "text-muted" : "text-muted-foreground"
              }`}
            />
          </Link>
        ))}
      </div>
    );
  }
  return (
    <header className="fixed z-20 hidden px-3 py-2 text-white rounded-full top-8 bg-gray-500/10 sm:flex backdrop-blur-sm ">
      {MenuItems.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={`px-3 py-2 hover:bg-slate-500/10 rounded-full ${
            pathname === item.href ? "underline underline-offset-4" : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Navbar;
