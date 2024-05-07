import { Clock } from "lucide-react";
import ProjectCard from "./ProjectCard";
import * as apiClient from "../API/api-client";
import { useQuery } from "react-query";
import { Tag } from "./Tags";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { data: projectCardData } = useQuery(
    "getProjectsCard",
    apiClient.getProjectCards
  );
  console.log(projectCardData);

  return (
    <div>
      <div className="flex gap-1 mb-3 ">
        <Clock color="gray" size={22} />
        <h2 className="font-medium text-gray-1">Latest Projects</h2>
      </div>
      <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {projectCardData?.map((item) => (
          <Link to={item._id}>
            <ProjectCard
              key={item._id}
              bannerUrl={item.bannerUrl}
              title={item.name}
              projectLogo={item.logoUrl}
              description={item.title}
            >
              {item.tags?.map((tag) => (
                <Tag key={tag._id} tag={tag.name} color={tag.color} />
              ))}
            </ProjectCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
