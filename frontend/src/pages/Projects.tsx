import FoldersSection from "../components/FoldersSection";
import ProjectsSection from "../components/ProjectsSection";

const Projects = () => {
  return (
    <div className="flex flex-col h-full gap-10 pr-2 overflow-auto">
      <FoldersSection />
      <ProjectsSection />
    </div>
  );
};

export default Projects;
