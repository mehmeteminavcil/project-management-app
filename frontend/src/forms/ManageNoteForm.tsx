import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { NoteFormData, NoteType } from "../types/modelTypes";
import AddTag from "../components/AddTag";

type NoteFormProps = {
  note?: NoteType;
  onSave: (noteFormData: NoteFormData) => void;
  edit?: boolean;
};
const ManageNoteForm = ({ note, onSave, edit }: NoteFormProps) => {
  const { handleSubmit, register, reset } = useForm<NoteFormData>({
    defaultValues: note
      ? {
          _id: note._id,
          title: note.title,
          text: note.text,
        }
      : undefined,
  });

  useEffect(() => {
    if (note) {
      setTags(note.tags);
    }

    reset(note);
  }, [note, reset]);

  const onSubmit = (data: NoteFormData) => {
    data.tags = tags;
    onSave(data);
  };

  //AddTag component  uses this state and funcitons
  const [tags, setTags] = useState<{ name: string; color: string }[]>([]);
  const handleAddTag = (tag: { name: string; color: string }) => {
    setTags([...tags, tag]);
  };
  const handleRemoveTag = (tag: { name: string; color: string }) => {
    setTags(tags.filter((t) => t.name !== tag.name));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="w-full border rounded-md border-gray-5 bg-[#f9f8ff] p-[10px] ">
        <h2 className="my-4 font-semibold text-gray-1">Add New Note</h2>
        <label>
          Title:
          <input
            type="text"
            className="w-full px-3 py-1 font-semibold border rounded-md outline-none border-gray-4"
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
          {edit ? "Update Note" : "Add Note"}
        </button>
      </div>
    </form>
  );
};

export default ManageNoteForm;
