import { CircleUserRound, Clock, FolderRoot, Star, Tags } from "lucide-react";
import { Tag } from "../components/Tags";
import TaskProgressSection from "../components/TaskProgressSection";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../API/api-client";
import { createdDate, formatDate } from "../utils";

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const { data: project } = useQuery(
    ["getProjectById", projectId],
    () => apiClient.getProjectById(projectId || ""),
    { enabled: !!projectId }
  );
  console.log(project);

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-[25px] border-b-2 border-gray-5 ">
        <div className="relative  h-[198px] rounded-[14px]   p-8 overflow-hidden">
          <img
            src={project?.bannerUrl}
            alt=""
            className="absolute top-0 left-0 object-cover w-full h-full -z-10"
          />
          <div className="flex items-end justify-between h-full">
            <div className="flex  gap-[10px]">
              <img
                src={project?.logoUrl}
                alt={project?.name}
                className="w-[45px] h-[45px]"
              />
              <div className="flex flex-col">
                <span className="font-bold text-w ">{project?.name}</span>
                <span className="text-sm font-normal text-white">
                  {project?.title}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase text-gray-1">
                  CREATED
                </span>
                <span className="text-sm ">
                  {project?.createdAt && createdDate(project.createdAt)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase text-gray-1">
                  DEADLINE
                </span>
                <span className="text-sm ">
                  {project?.deadline && formatDate(project.deadline)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 px-2 mt-6">
          <div className="flex flex-col flex-1 gap-3 text-gray-1">
            <div className="flex items-center justify-between ">
              <span className="flex items-center gap-2 mr-24 text-sm text-gray-1">
                <Clock />
                Created At
              </span>
              <span className="text-sm text-gray-1">
                {project?.createdAt && createdDate(project.createdAt)}
              </span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="flex items-center gap-2 mr-24 text-sm text-gray-1">
                <Tags />
                Tags
              </span>
              <span className="flex gap-2">
                {project?.tags?.map((tag) => (
                  <Tag tag={tag.name} color={tag.color} />
                ))}
              </span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="flex items-center gap-2 mr-24 text-sm text-gray-1">
                <CircleUserRound />
                Assign
              </span>
              <span className="px-2 capitalize rounded-md py-[2px] text-sm text-gray-1 bg-gray-5">
                mustafa
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 mr-24 text-sm text-gray-1">
                <FolderRoot />
                Group
              </span>
              <span className="text-sm text-gray-1">
                Team projects - Fashion
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 mr-24 text-sm text-gray-1">
                <Star />
                Priority
              </span>
              <span className="text-sm text-gray-1">Small</span>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-sm font-semibold">Description</span>
            <p className="text-sm text-gray-2">{project?.description}</p>
          </div>
        </div>
      </div>
      <TaskProgressSection />
    </div>
  );
};

export default Project;
