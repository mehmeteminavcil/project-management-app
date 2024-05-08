import { Ellipsis, Plus } from "lucide-react";
import TaskCard from "./TaskCard";

const TaskProgressSection = () => {
  return (
    <div className="h-full px-5 pt-10 bg-body">
      <h2>Tasks</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-2 border-gray-5">
            <div className="flex items-center gap-1">
              <span className="block w-3 h-3 rounded-sm bg-gray-1"></span>
              <span className="text-sm font-semibold text-gray-1">Open</span>
            </div>
            <div className="flex items-center gap-1">
              <Plus className="w-4 h-4 p-1 rounded-sm bg-gray-4" />
              <Ellipsis className="w-4 cursor-pointer text-gray-1" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 ">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-2 border-gray-5">
            <div className="flex items-center gap-1">
              <span className="block w-3 h-3 rounded-sm bg-violet"></span>
              <span className="text-sm font-semibold text-gray-1">
                In Progress
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Plus className="w-4 h-4 p-1 rounded-sm bg-gray-4" />
              <Ellipsis className="w-4 cursor-pointer text-gray-1" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 ">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-2 border-gray-5">
            <div className="flex items-center gap-1">
              <span className="block w-3 h-3 rounded-sm bg-green"></span>
              <span className="text-sm font-semibold text-gray-1">Done</span>
            </div>
            <div className="flex items-center gap-1">
              <Plus className="w-4 h-4 p-1 rounded-sm bg-gray-4" />
              <Ellipsis className="w-4 cursor-pointer text-gray-1" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 ">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskProgressSection;
