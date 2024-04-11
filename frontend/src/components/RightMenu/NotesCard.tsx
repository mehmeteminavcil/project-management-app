import { BookText, Ellipsis } from "lucide-react";
import { Tag } from "../Tags";

const NotesCard = () => {
  return (
    <div className="border border-gray-5 rounded-[10px]   p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BookText size={18} color="gray" />
          <span className="ml-[6px] text-xs text-gray-2">Apr 2,2023</span>
        </div>
        <Ellipsis color="gray" />
      </div>
      <h4 className="my-1 text-sm font-semibold text-gray-1">
        ChatGPT Tricks for bussines marketing
      </h4>
      <p className="text-xs font-medium text-gray-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
        eligendi natus ipsum illum. Dicta voluptatibus amet minus distinctio
        quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a
        eligendi natus ipsum illum. Dicta voluptatibus amet minus distinctio
        quae.
      </p>
      <div className="flex gap-2 my-2">
        <Tag tag="Tech" color="" />
        <Tag tag="Sport" color="yellow" />
        <Tag tag="Ai" />
      </div>
    </div>
  );
};

export default NotesCard;
