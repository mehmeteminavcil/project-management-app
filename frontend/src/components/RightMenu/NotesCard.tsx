import { BookText, Edit, Ellipsis, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type NotesCardProps = {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
  children?: React.ReactNode;
  handleDelete: () => void;
};
const NotesCard = ({
  title,
  text,
  createdAt,
  children,
  _id,
  handleDelete,
}: NotesCardProps) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className="border border-gray-5 rounded-[10px] relative  p-4"
      onMouseLeave={() => setShowEdit(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BookText size={18} color="gray" />
          <span className="ml-[6px] text-xs text-gray-2">{createdAt}</span>
        </div>
        <Ellipsis
          className="cursor-pointer text-gray-1"
          onClick={() => setShowEdit(!showEdit)}
        />
      </div>
      <h4 className="my-1 text-sm font-semibold text-gray-1">{title}</h4>
      <p className="text-xs font-medium text-gray-2">{text}</p>
      <div className="flex gap-2 my-2">{children}</div>
      {showEdit && (
        <div className="absolute border shadow-lg  flex flex-col p-2  top-10    border-gray-5 rounded-[10px]  right-3 bg-w ">
          <Link
            to={`/edit-note/${_id}`}
            className="flex items-center gap-2 text-sm text-gray-1 hover:text-green"
          >
            {" "}
            <Edit size={14} />
            Edit
          </Link>

          <button
            className="flex items-center gap-2 text-sm text-gray-1 hover:text-error "
            onClick={handleDelete}
          >
            {" "}
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default NotesCard;
