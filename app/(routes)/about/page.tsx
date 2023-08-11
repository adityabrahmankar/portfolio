"use client";

import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();

    return (
        <div className="bg-zinc-900 w-full h-full flex justify-center">
            About
        </div>
    );
}

export default About;