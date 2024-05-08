import { Link } from "react-router-dom";

type SidebarLinkProps = {
  icon: React.ReactNode;
  text: string;
  navOpen: boolean;
  activeNav: string;
  handleClick: () => void;
};

const SidebarLink = ({
  icon,
  text,
  navOpen,
  activeNav,
  handleClick,
}: SidebarLinkProps) => {
  return (
    <Link
      to={`/${text}`}
      className={`h-[50px] flex px-3 gap-2  rounded-[10px] cursor-pointer transition-all items-center  ${
        activeNav === text ? "bg-violet" : "hover:bg-violet/10"
      }`}
      onClick={handleClick}
    >
      <span
        className={`flex items-center font-medium text-gray-3 ${
          activeNav === text && "text-white"
        } `}
      >
        {icon}
      </span>

      {navOpen && (
        <span
          className={`font-medium  text-gray-3 capitalize ${
            activeNav === text && " text-white"
          } `}
        >
          {text}
        </span>
      )}
    </Link>
  );
};

export default SidebarLink;
