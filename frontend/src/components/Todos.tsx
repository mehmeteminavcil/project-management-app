import { CheckCheck, Plus } from "lucide-react";
import TodosCard from "./TodosCard";

const Todos = () => {
  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-between border-b border-gray-5">
        <div className="flex gap-1">
          <CheckCheck size={22} stroke="#56555c" />
          <h3 className="font-medium text-gray-1">Todos</h3>
        </div>
        <button className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet">
          <Plus width={12} height={12} color="#5577ff" />
        </button>
      </div>
      <div className="flex flex-col h-full gap-2 mt-3 overflow-y-auto">
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
      </div>
    </div>
  );
};

export default Todos;
