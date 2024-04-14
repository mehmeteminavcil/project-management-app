import Notes from "./RightMenu/Notes";
import Todos from "./RightMenu/Todos";

const RightMenu = () => {
  return (
    <div className="w-[353px]  flex flex-col overflow-hidden h-full border-l  border-[#E6E4F0]">
      <Todos className="overflow-hidden h-1/2 " />
      <Notes className="overflow-hidden h-1/2" />
    </div>
  );
};

export default RightMenu;
