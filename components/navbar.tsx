"use client";
import { m } from "framer-motion";
import Link from "next/link";

import { MenuItems } from "@/lib/constants";
import useMediaQuery from "@/lib/use-mediaquery";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname);

  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-around px-3 py-4 text-white bg-gray-500/10 backdrop-blur-sm ">
        {MenuItems.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            onClick={() => setActiveTab(item.href)}
            className={`${
              activeTab === item.href ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === item.href && (
              <m.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon />
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
          onClick={() => setActiveTab(item.href)}
          className={`${
            activeTab === item.href ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === item.href && (
            <m.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Navbar;
