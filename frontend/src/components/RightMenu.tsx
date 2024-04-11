import Todos from "./Todos";

const RightMenu = () => {
  return (
    <div className="w-[353px]  grid grid-cols-1">
      <Todos />
      <div className="">Notes</div>
    </div>
  );
};

export default RightMenu;
