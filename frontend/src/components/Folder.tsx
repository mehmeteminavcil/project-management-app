import { Ellipsis } from "lucide-react";

type FolderProps = {
  title: string;
  color: string;
  createdAt: string;
};

const Folder = ({ title, color, createdAt }: FolderProps) => {
  return (
    <div className="relative mt-6">
      <div className="z-10 flex flex-col h-[140px] justify-between bg-[#fff] p-[22px] rounded-tl-none  border relative border-gray-5  rounded-2xl">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 10.5714C2 5.83756 5.83756 2 10.5714 2H17.4286C22.1624 2 26 5.83756 26 10.5714V17.4286C26 22.1624 22.1624 26 17.4286 26H10.5714C5.83756 26 2 22.1624 2 17.4286V10.5714ZM10.5714 10.5714H17.4286V17.4286H10.5714V10.5714Z"
              className={`fill-${color}`}
            />
          </svg>
          <h3 className="font-medium text-gray-2">{title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-3">{createdAt}</span>
          <Ellipsis color="gray" />
        </div>
      </div>
      {/* folder shape border change later */}
      <span className="absolute  left-0  -top-6 rounded-l-2xl border-t-[0] border-gray-5 w-[70%] border border-b-[50px]  border-r-[transparent] border-l-[25px] border-r-[55px]"></span>
    </div>
  );
};

export default Folder;
