import { CheckCheck, Plus } from "lucide-react";
import TodosCard from "./TodosCard";
import { useQuery } from "react-query";
import * as apiClient from "../../API/api-client";
import { Link } from "react-router-dom";
import { Tag } from "../Tags";

type TodosProps = {
  className?: string;
};

const Todos = ({ className }: TodosProps) => {
  const { data: todosData } = useQuery("fetchTodos", apiClient.fetchTodos);
  return (
    <div className={`${className}  `}>
      <div className="relative flex items-center justify-between pt-6 pb-1 pl-4 pr-6 border-b border-gray-5">
        <div className="flex gap-1 ">
          <CheckCheck size={22} stroke="#56555c" />
          <h3 className="font-medium text-gray-1">Todos</h3>
        </div>
        <Link
          to="/addTodo"
          className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet"
        >
          <Plus width={12} height={12} color="#5577ff" />
        </Link>
      </div>

      <div className="h-full pb-10 pr-2 overflow-hidden">
        <div className="flex flex-col h-full gap-2 pb-12 pl-5 pr-4 mt-3 overflow-auto ">
          {todosData?.map((item) => (
            <TodosCard
              key={item._id}
              isChecked={item.isChecked}
              title={item.title}
              createdAt={item.createdAt}
              handleClick={() => {
                (item.isChecked = !item.isChecked), console.log(item.isChecked);
              }}
            >
              {item.tags?.map((item) => (
                <Tag key={item._id} tag={item.name} color={item.color} />
              ))}
            </TodosCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
