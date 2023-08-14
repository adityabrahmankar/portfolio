"use client";

import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Avatar as AvatarComponent, AvatarImage as AvatarImageComponent } from "@/components/ui/avatar";
import { BsDot } from 'react-icons/bs';

export const Introduction = () => {
    return (
        <div className="w-full h-full p-3 md:m-auto max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start justify-center mt-20 bg-gray-700/10 rounded-lg "
            >
                <div className="flex flex-row items-center justify-center space-x-2 text-white p-4">
                    <AvatarComponent>
                        <AvatarImageComponent src="pic.png"/>
                    </AvatarComponent>
                    <div>Aditya Brahmankar</div>
                </div>
                <div className="p-4 text-white w-auto">
                    I am Aditya, a passionate creator living in Pune, India. My work spans across multiple disciplines from product design, to web design and branding.
                </div>
                <div className="flex flex-row items-center text-muted-foreground/100">
                    <BsDot className="text-green-400 w-10 h-10 animate-pulse" />
                    Available for new opportunities
                </div>
            </motion.div>
        </div>
    );
}
