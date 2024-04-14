import { FolderMinus } from "lucide-react";
import Folder from "./Folder";
import { Folders } from "../constants";

const FoldersSection = () => {
  return (
    <div>
      <div className="flex gap-1 mb-3 ">
        <FolderMinus color="gray" size={22} />
        <h2 className="font-medium text-gray-1">Folders</h2>
      </div>
      <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {Folders.map((item) => (
          <Folder key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoldersSection;
