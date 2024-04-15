import { Check } from "lucide-react";

type TodosCardProps = {
  title: string;
  isChecked: boolean;
  createdAt: string;
  children?: React.ReactNode;
  handleClick: () => void;
};

const TodosCard = ({
  title,
  isChecked,
  createdAt,
  children,
  handleClick,
}: TodosCardProps) => {
  return (
    <div className="border border-gray-5 rounded-[10px]   bg-[#f9f8ff] p-[10px]">
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center ">
          <input
            type="checkbox"
            name="todoCheck"
            id="todoCheck"
            className="hidden"
            defaultChecked={isChecked}
          />
          <label
            htmlFor="todoCheck"
            className="w-4 h-4 border-[2px] rounded-[4px] border-gray-4 overflow-hidden "
            onClick={handleClick}
          >
            {isChecked && (
              <Check
                size={14}
                className="absolute top-0 rounded-[4px] left-0 w-4 h-4 bg-violet "
                stroke="white"
              />
            )}
          </label>
        </div>
        <div className="overflow-auto max-h-14">
          <p
            className={`text-sm font-medium text-black  ${
              isChecked && "text-purple line-through "
            }`}
          >
            {title}
          </p>
        </div>
      </div>

      <div className="mt-[10px] flex justify-between items-center gap-4">
        <div className="flex gap-1 overflow-x-hidden">{children}</div>
        <span className="flex-shrink-0 text-xs text-gray-3">{createdAt}</span>
      </div>
    </div>
  );
};

export default TodosCard;
