import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../API/api-client";
import AddTag from "../components/AddTag";

export type TodoFormData = {
  _id: string;
  userId: string;
  title: string;
  tags: TagsTypeData[];
};

export type TagsTypeData = {
  name: string;
  color: string;
};

const AddTodoForm = () => {
  const { register, handleSubmit } = useForm<TodoFormData>();

  const navigate = useNavigate();

  const { mutate } = useMutation(apiClient.addTodo, {
    onSuccess: async () => {
      navigate("/overview");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });

  const onSubmit = handleSubmit((data) => {
    data.tags = tags;
    mutate(data);
  });

  //AddTag component  uses this state and funcitons
  const [tags, setTags] = useState<{ name: string; color: string }[]>([]);
  const handleAddTag = (tag: { name: string; color: string }) => {
    setTags([...tags, tag]);
  };
  const handleRemoveTag = (tag: { name: string; color: string }) => {
    setTags(tags.filter((t) => t.name !== tag.name));
  };

  return (
    <div className="w-full border rounded-md border-gray-5 bg-[#f9f8ff] p-[10px] ">
      <h2 className="my-4 font-semibold text-gray-1">Add New Todo</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <label>
          Todo:
          <input
            type="text"
            className="w-full border rounded-md outline-none border-gray-4"
            {...register("title")}
          />
        </label>

        <div className="flex flex-col gap-6">
          <AddTag
            tags={tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </div>
        <button className="px-3 py-1 mt-2 rounded-md bg-purple hover:bg-purple/85 text-w w-[200px] mx-auto">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
