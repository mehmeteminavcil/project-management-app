import { AlignLeft } from "lucide-react";

type TaskListProps = {
  id?: string | undefined;
  title: string;
  color?: string;
  colorBg?: string;
  count: number;
  navOpen: boolean;
};
export const TaskList = ({
  id,
  title,
  color,
  colorBg,
  count,
  navOpen,
}: TaskListProps) => {
  return (
    <li id={id} className="flex items-center cursor-pointer">
      <div
        className={`w-[22px] h-[24px] ${colorBg} rounded-md flex items-center justify-center`}
      >
        <AlignLeft color={color} width={18} />
      </div>
      {navOpen && (
        <>
          <h3 className="text-sm font-medium ml-[6px] text-gray-4">{title}</h3>
          <span className="ml-auto text-gray-3 font-medium text-[12px]">
            {count}
          </span>
        </>
      )}
    </li>
  );
};
