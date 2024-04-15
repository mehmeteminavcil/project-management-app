import { useForm } from "react-hook-form";

import { Tag } from "../components/Tags";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../API/api-client";
import { Trash } from "lucide-react";
export type TodoFormData = {
  _id: string;
  userId: string;
  title: string;
  tags: TagsTypeData[];
};

export type TagsTypeData = {
  _id: string;
  name: string;
  color: string;
};

const AddTodoForm = () => {
  const { register, handleSubmit } = useForm<TodoFormData>();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.addTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/Overview");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });

  const onSubmit = handleSubmit((data) => {
    data.tags = tags;
    mutation.mutate(data);
  });

  const [tagName, setTagName] = useState<string>("");
  const [tagColor, setTagColor] = useState<string>("pink");
  const [tags, setTags] = useState<{ name: string; color: string }[]>([]);

  const colors = ["green", "pink", "yellow", "blue", "purple", "violet"];

  const handleAddTag = () => {
    if (tagName && tagColor) {
      setTags([...tags, { name: tagName, color: tagColor }]);
      setTagName("");
      setTagColor("");
    }
  };

  const removeTag = (item: { name: string }) => {
    setTags(tags.filter((tag) => tag.name !== item.name));
  };

  return (
    <div>
      <h2 className="my-4 text-xl font-semibold text-gray-1">Add New Todo</h2>
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
          <div className="flex items-center gap-2">
            {tags?.map((item) => (
              <div
                className="flex items-center gap-1 p-1 pr-2 border rounded border-gray-5"
                onClick={() => removeTag(item)}
              >
                <Tag tag={item.name} key={item.name} color={item.color} />
                <Trash className="cursor-pointer text-gray-3" size={16} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 ">
            <input
              type="text"
              placeholder="Enter tag name"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              className="p-1 border rounded-md outline-none border-gray-4"
            />
            <div className="flex justify-between gap-2">
              {colors.map((color, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tagColor"
                    value={color}
                    checked={tagColor === color}
                    onClick={() => {
                      setTagColor(color);
                    }}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5  rounded-full  bg-${color} ${
                      tagColor === color && `scale-125`
                    }`}
                  ></div>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-1 font-bold text-white rounded bg-green hover:bg-green/85"
            >
              Add Tag
            </button>
          </div>
        </div>
        <button className="px-3 py-2 mt-8 rounded-md bg-green hover:bg-green/85 text-w">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
