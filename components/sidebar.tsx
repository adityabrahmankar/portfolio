"use client"

import { useRouter } from "next/navigation"

const Sidebar = () => {
    const router = useRouter();

    return ( 
        <div className="flex flex-row items-center justify-center w-full gap-4">
            <div className="hover:text-violet-200 hover:cursor-pointer text-lg" onClick={() => router.push("/")}>
                Home
            </div>
            <div className="hover:text-violet-200 hover:cursor-pointer text-lg" onClick={() => router.push("/about")}>
                About
            </div>
        </div>
     );
}
 
export default Sidebar;
