"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageURL?: string;
    href?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full gap-2 p-3 text-white rounded-md select-none bg-gray-700/10"
      >
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="w-full max-h-[500px] p-3">
          {project.imageURL ? (
            <Image
              src={project.imageURL as string}
              alt="project image"
              width={576}
              height={150}
              className="object-cover rounded-lg opacity-95"
            />
          ) : (
            <div className="w-full max-h-[500px] p-3 rounded-lg bg-zinc-900 h-[150px]" ></div>
          )}
        </div>
        {project.href ? (
          <Link
            href={project.href}
            className="flex px-4 py-2 rounded-lg bg-zinc-900 w-fit"
          >
            Visit <ArrowUpRight className="text-muted-foreground" />
          </Link>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 w-fit">
            Currently working{" "}
            <Laptop  className="text-muted-foreground" />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectCard;
