import { useForm } from "react-hook-form";
import AddTag from "../components/AddTag";
import { useState } from "react";
import { useMutation } from "react-query";
import * as apiClient from "../API/api-client";
export type NoteFormData = {
  _id: string;
  userId: string;
  title: string;
  text: string;
  tags: TagsTypeData[];
};

export type TagsTypeData = {
  name: string;
  color: string;
};
const AddNotesForm = () => {
  const { register, handleSubmit } = useForm<NoteFormData>();

  const mutation = useMutation(apiClient.addNote, {
    onSuccess: async () => {
      console.log("OK!");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });
  const onSubmit = handleSubmit((data) => {
    data.tags = tags;
    mutation.mutate(data);
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
      <h2 className="my-4 font-semibold text-gray-1">Add New Note</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <label>
          Title:
          <input
            type="text"
            className="w-full border rounded-md outline-none border-gray-4"
            {...register("title")}
          />
        </label>
        <label>
          Text:
          <textarea
            className="w-full p-3 border rounded-md outline-none min-h-40 max-h-[500px] border-gray-4 "
            {...register("text")}
          />
        </label>

        <div>
          <AddTag
            tags={tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </div>
        <button className="px-3 py-2 mt-2 rounded-md bg-purple hover:bg-purple/85 text-w w-[200px] mx-auto">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddNotesForm;
