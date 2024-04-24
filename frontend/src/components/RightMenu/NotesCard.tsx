import { BookText, Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

type NotesCardProps = {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
  children?: React.ReactNode;
};
const NotesCard = ({
  title,
  text,
  createdAt,
  children,
  _id,
}: NotesCardProps) => {
  return (
    <Link to={`/edit-note/${_id}`}>
      <div className="border border-gray-5 rounded-[10px]   p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookText size={18} color="gray" />
            <span className="ml-[6px] text-xs text-gray-2">{createdAt}</span>
          </div>
          <Ellipsis color="gray" />
        </div>
        <h4 className="my-1 text-sm font-semibold text-gray-1">{title}</h4>
        <p className="text-xs font-medium text-gray-2">{text}</p>
        <div className="flex gap-2 my-2">{children}</div>
      </div>
    </Link>
  );
};

export default NotesCard;
