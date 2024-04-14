import { Link } from "react-router-dom";
import {
  CalendarDays,
  Component,
  Folders,
  PieChart,
  Signal,
} from "lucide-react";

type NavLinksProps = {
  name: string;
  iconUrl?: string;
  isActive: boolean;
  handleClick: () => void;
  navOpen: boolean;
};
const SidebarNavLinks = ({
  name,
  isActive,
  handleClick,
  navOpen,
}: NavLinksProps) => {
  return (
    <Link
      to={`/${name}`}
      className={`h-[50px] flex px-3 gap-2  rounded-[10px] cursor-pointer transition-all items-center ${
        isActive ? "bg-violet" : " hover:bg-violet/10"
      }`}
      onClick={handleClick}
    >
      <span className="flex items-center font-medium">
        {name === "Overview" && (
          <Component color={`${isActive ? "white" : "#9896a3"}`} />
        )}
        {name === "Calendar" && (
          <CalendarDays color={`${isActive ? "white" : "#9896a3"}`} />
        )}
        {name === "Analytics" && (
          <PieChart color={`${isActive ? "white" : "#9896a3"}`} />
        )}
        {name === "Activity" && (
          <Signal color={`${isActive ? "white" : "#9896a3"}`} />
        )}
        {name === "Projects" && (
          <Folders color={`${isActive ? "white" : "#9896a3"}`} />
        )}
      </span>

      {navOpen && (
        <span
          className={`font-medium  text-gray-3 ${isActive && " text-white"} `}
        >
          {name}
        </span>
      )}
    </Link>
  );
};

export default SidebarNavLinks;
