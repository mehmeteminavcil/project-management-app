import { CheckCheck, Plus } from "lucide-react";
import TodosCard from "./TodosCard";

type TodosProps = {
  className?: string;
};
const Todos = ({ className }: TodosProps) => {
  return (
    <div className={`${className}  `}>
      <div className="relative flex items-center justify-between pt-6 pb-1 pl-4 pr-6 border-b border-gray-5">
        <div className="flex gap-1 ">
          <CheckCheck size={22} stroke="#56555c" />
          <h3 className="font-medium text-gray-1">Todos</h3>
        </div>
        <button className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet">
          <Plus width={12} height={12} color="#5577ff" />
        </button>
      </div>

      <div className="h-full pb-10 pr-2 overflow-hidden">
        <div className="flex flex-col h-full gap-2 pb-12 pl-5 pr-4 mt-3 overflow-auto ">
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
          <TodosCard />
        </div>
      </div>
    </div>
  );
};

export default Todos;
