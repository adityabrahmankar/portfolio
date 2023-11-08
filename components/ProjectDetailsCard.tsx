"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Tags from "./Tags";

interface ProjectDetailsCardProps {
  project: {
    title: string;
    description: string;
    imageURL?: string;
    href?: string;
    tech?: string[];
  };
}

const ProjectDetailsCard = ({ project }: ProjectDetailsCardProps) => {
  const router = useRouter();
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
            <div className="w-full max-h-[500px] p-3 rounded-lg bg-zinc-900 h-[150px]"></div>
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
            Currently working <Laptop className="text-muted-foreground" />
          </div>
        )}
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-white to-zinc-900  rounded-full"></div>
        <h2 className="text-xl font-semibold">Tech</h2>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-3">
          {project.tech?.map((tech) => (
            <Tags key={tech} name={tech} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetailsCard;
