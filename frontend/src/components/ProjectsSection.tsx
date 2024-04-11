import { Clock } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Projects } from "../constants";

const ProjectsSection = () => {
  return (
    <div>
      <div className="flex gap-1 mb-3 ">
        <Clock color="gray" size={22} />
        <h2 className="font-medium text-gray-1">Folders</h2>
      </div>
      <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {Projects.map((item) => (
          <ProjectCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            projectImgUrl={item.projectImgUrl}
            description={item.description}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
