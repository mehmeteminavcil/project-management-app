import { Ellipsis } from "lucide-react";

type ProjectCardProps = {
  imgUrl: string;
  projectImgUrl: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const ProjectCard = ({
  imgUrl,
  projectImgUrl,
  title,
  description,
  children,
}: ProjectCardProps) => {
  return (
    <div className="p-[10px] border border-gray-5 rounded-[10px] flex flex-col">
      <div className="">
        <img
          src={imgUrl}
          alt="cardbg"
          className="w-full aspect-video h-[112px]"
        />
      </div>
      <div className="relative flex items-center my-3">
        <img src={projectImgUrl} alt="" width={38} height={38} />
        <div className="relative flex flex-col flex-1 ml-2">
          <span className="font-semibold ">{title}</span>
          <span className="text-xs text-gray-2">{description}</span>
          <Ellipsis size={20} color="gray" className="absolute top-0 right-2" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">{children}</div>
    </div>
  );
};

export default ProjectCard;
