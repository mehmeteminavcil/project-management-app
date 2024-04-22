import { CheckCheck, Plus } from "lucide-react";
import TodosCard from "./TodosCard";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as apiClient from "../../API/api-client";
import { Tag } from "../Tags";
import AddTodoForm from "../../forms/AddTodoForm";
import { useState } from "react";

type TodosProps = {
  className?: string;
};

const removeTime = (timestamp: string) => {
  const index = timestamp.indexOf("T");
  const dateOnly = timestamp.substring(0, index);
  return dateOnly;
};

const Todos = ({ className }: TodosProps) => {
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  const { data: todosData } = useQuery("fetchTodos", apiClient.fetchTodos);

  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.updateTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("fetchTodos");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });

  const handleCheck = (item: string) => {
    mutation.mutate(item);
  };

  const deleteMutation = useMutation(apiClient.deleteTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("fetchTodos");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });

  const handleDelete = (item: string) => {
    deleteMutation.mutate(item);
  };

  return (
    <div className={`${className}  `}>
      <div className="relative flex items-center justify-between pt-6 pb-1 pl-4 pr-6 border-b border-gray-5">
        <div className="flex gap-1 ">
          <CheckCheck size={22} stroke="#56555c" />
          <h3 className="font-medium text-gray-1">Todos</h3>
        </div>
        <button
          className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet"
          onClick={() => setAddTodoOpen(!addTodoOpen)}
        >
          <Plus width={12} height={12} color="#5577ff" />
        </button>
      </div>

      <div className="h-full pb-10 pr-2 overflow-hidden">
        <div className="flex flex-col h-full gap-2 pb-12 pl-5 pr-4 mt-3 overflow-auto ">
          {addTodoOpen && <AddTodoForm />}
          {todosData?.map((item) => (
            <TodosCard
              key={item._id}
              isChecked={item.isChecked}
              title={item.title}
              createdAt={removeTime(item.createdAt)}
              handleCheck={() => handleCheck(item._id)}
              handleDelete={() => handleDelete(item._id)}
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
