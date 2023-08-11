"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuItems } from "@/constants";
import useMediaQuery from "@/lib/hooks/use-media-query";


const Navbar = () => {
    const pathname = usePathname();

    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <div className="fixed flex flex-row bottom-0 left-0 right-0 z-20 px-3 py-4 bg-gray-500/10 items-center justify-around  text-white  backdrop-blur-sm ">
                {MenuItems.map((item) => (
                    <Link href={item.href} key={item.title}>
                        <item.icon className={`w-8 h-8 ${pathname === item.href ? "text-blue-500" : "text-muted-foreground"}`}  />
                    </Link>
                ))}
            </div>
        );
    }
    return (
        <header className="hidden fixed top-8 z-20 bg-gray-500/10 px-3 py-2 text-white rounded-full sm:flex backdrop-blur-sm ">
            {MenuItems.map((item) => (
                <Link href={item.href} key={item.title} className={`px-3 py-2 hover:bg-slate-500/10 rounded-full ${pathname === item.href ? "underline underline-offset-4" : ""}`}>
                    {item.title}
                </Link>
            ))}
        </header>
    );
}

export default Navbar;