import { useState } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

import { sidebarNav, sidebarProjects, sidebarTasks } from "../../constants";
import SidebarNavLinks from "./SidebarNavLinks";
import { Plus, Settings } from "lucide-react";
import { TaskList } from "./TaskList";
import { ProjectsList } from "./ProjectList";

const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("Projects");

  return (
    <aside
      className={` border-r  border-[#E6E4F0] h-full flex flex-col ${
        navOpen ? "w-[258px]" : "justify-center items-center w-[90px]"
      } `}
    >
      <div
        className={`flex items-center gap-3   ${
          navOpen ? "m-[30px]" : "my-[30px] w-10 h-10"
        }  cursor-pointer`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <img src={logo} alt="logo " width={38} height={38} />
        {navOpen && (
          <h1 className="text-2xl font-medium text-black">TaskFlow </h1>
        )}
      </div>

      {/* SIDEBAR NAVIGATION */}
      <nav className="flex flex-col px-5">
        {sidebarNav.map((item) => (
          <SidebarNavLinks
            key={item.id}
            name={item.name}
            isActive={activeNav === item.name}
            handleClick={() => setActiveNav(item.name)}
            navOpen={navOpen}
          />
        ))}
      </nav>
      <hr
        className={`border border-gray-5 mx-auto  my-4 ${
          navOpen ? " w-[217px] " : " w-[60px] "
        }`}
      />

      {/* PROJECT LIST */}
      <div className="px-[30px] ">
        {navOpen && (
          <div className="flex items-center justify-between border-gray-5 ">
            <h3 className="text-sm font-medium text-gray-4">PROJECTS</h3>
            <button className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet">
              <Plus width={12} height={12} color="#5577ff" />
            </button>
          </div>
        )}
        <ul className="flex flex-col gap-[10px] mt-[10px]">
          {sidebarProjects.map((item) => (
            <ProjectsList
              id={item.id}
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              count={item.count}
              navOpen={navOpen}
            />
          ))}
        </ul>
      </div>
      <hr
        className={`border border-gray-5 mx-auto  my-4 ${
          navOpen ? " w-[217px] " : " w-[60px] "
        }`}
      />
      {/* TASK LIST */}
      <div className="px-[30px] ">
        {navOpen && (
          <div className="flex items-center justify-between border-gray-5 ">
            <h3 className="text-sm font-medium text-gray-4">TASKS</h3>
            <button className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet">
              <Plus width={12} height={12} color="#5577ff" />
            </button>
          </div>
        )}
        <ul className="flex flex-col gap-[10px] mt-[26px]">
          {sidebarTasks.map((item) => (
            <TaskList
              id={item.id}
              key={item.id}
              title={item.title}
              count={item.count}
              color={item.color}
              colorBg={item.colorBg}
              navOpen={navOpen}
            />
          ))}
        </ul>
      </div>
      <div
        className={`h-[64px] flex  items-center justify-between border rounded-[10px] border-gray-4 p-2  mb-[22px]  mt-auto   mx-2  ${
          !navOpen && " justify-center"
        }`}
      >
        <div className="">
          <img src={user} alt="user" className="" width={48} height={48} />
          <span></span>
        </div>
        {navOpen && (
          <>
            <div className="flex flex-col -ml-4 text-sm">
              <span className="font-medium text-gray-2">Mehmet Emin Avcil</span>
              <span className="font-normal text-gray-3">Free Account</span>
            </div>
            <button className="">
              <Settings color="gray" size={20} />
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
