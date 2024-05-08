import { NotepadText } from "lucide-react";
import { Tag } from "./Tags";
const TaskCard = () => {
  return (
    <div className="flex flex-col p-4 bg-w rounded-[10px] border-gray-5 border gap-[10px]">
      <div className="flex gap-1">
        <Tag tag="Economic" color="purple" />
        <Tag tag="Finance" color="green" />
      </div>
      <div className="flex items-center gap-2 ">
        <NotepadText className="w-4 h-4 text-gray-3" />
        <span className="text-sm font-semibold text-gray-1">
          Manage Finances
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="px-2 capitalize rounded-md py-[2px] text-sm text-gray-1 bg-gray-5">
          mustafa
        </span>
        <span className="px-2 py-[2px] text-sm capitalize rounded-md text-gray-1 bg-gray-5">
          small
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
