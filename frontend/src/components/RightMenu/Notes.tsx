import { NotebookPen, Plus } from "lucide-react";
import NotesCard from "./NotesCard";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as apiClient from "../../API/api-client";
import { Tag } from "../Tags";
import { formatDate } from "../../utils";

type NotesProps = {
  className: string;
};
const Notes = ({ className }: NotesProps) => {
  const queryClient = useQueryClient();
  const { data: notesData } = useQuery("fetchNotes", apiClient.fetchNotes);

  const { mutate } = useMutation(apiClient.deleteNote, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("fetchNotes");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (noteId: string) => {
    mutate(noteId);
  };

  return (
    <div className={`${className}  `}>
      <div className="flex items-center justify-between pt-6 pb-1 pl-4 pr-6 border-b border-gray-5">
        <div className="flex items-center gap-1">
          <NotebookPen size={18} stroke="#56555c" />
          <h3 className="font-medium text-gray-1">Notes</h3>
        </div>
        <Link
          to="/addNewNote"
          className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet"
        >
          <Plus width={12} height={12} color="#5577ff" />
        </Link>
      </div>

      <div className="h-full pb-10 pr-2 ">
        <div className="flex flex-col h-full gap-2 pb-12 pl-5 pr-4 mt-3 overflow-auto ">
          {notesData?.map((item) => (
            <NotesCard
              _id={item._id}
              key={item._id}
              title={item.title}
              text={item.text}
              createdAt={formatDate(item.createdAt)}
              handleDelete={() => handleDelete(item._id)}
            >
              {item.tags?.map((tag) => (
                <Tag key={tag._id} tag={tag.name} color={tag.color} />
              ))}
            </NotesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
