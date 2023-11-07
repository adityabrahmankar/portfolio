import { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects | Aditya Brahmankar",
  description: "Personal Portfolio of Aditya Brahmankar",
};

export default function Projects() {
  return (
    <div className="w-full h-full max-w-3xl p-3 md:m-auto">
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-10 px-3 mt-[60px] sm:mt-[100px] sm:px-6 pb-20">
        <h1 className="text-3xl text-white">Projects</h1>
        <div className="w-full h-[1px] bg-white rounded-full"></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
