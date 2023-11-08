import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import { projects } from "@/lib/constants";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projects.find(
    (p) => p.title.split(" ").join("%20") === params.slug
  );

  return (
    <div className="w-full h-full max-w-3xl p-3 md:m-auto">
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-10 px-3 mt-[60px] sm:mt-[100px] sm:px-6 pb-20">
        <h1 className="text-3xl text-white">Project</h1>
        <div className="w-full h-[1px] bg-white rounded-full"></div>
        {project && <ProjectDetailsCard project={project} />}
      </div>
    </div>
  );
};

export default ProjectPage;
