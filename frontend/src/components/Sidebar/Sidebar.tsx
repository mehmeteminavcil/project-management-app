import { useState } from "react";
import logo from "../../assets/logo.png";

import { sidebarProjects, sidebarTasks } from "../../constants";

import {
  ArrowLeftToLine,
  ArrowRightToLine,
  CalendarDays,
  Component,
  Folders,
  PieChart,
  Plus,
  Signal,
} from "lucide-react";
import { TaskList } from "./TaskList";
import { ProjectsList } from "./ProjectList";
import SidebarLink from "./SidebarLink";
import ProfileCard from "./ProfileCard";
console.log("sidebar rendered");
const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <aside
      className={` border-r  border-[#E6E4F0] h-full flex flex-col relative ${
        navOpen ? "w-[258px]" : "justify-center items-center w-[90px]"
      } `}
    >
      <div
        className={`flex items-center gap-3   ${
          navOpen ? "m-[30px]" : "my-[30px] w-10 h-10"
        }  cursor-pointer`}
      >
        <img src={logo} alt="logo " width={38} height={38} />
        {navOpen && (
          <h1 className="text-2xl font-medium text-black">TaskFlow </h1>
        )}
      </div>

      {/* SIDEBAR NAVIGATION */}
      <nav className="flex flex-col px-5">
        <SidebarLink
          text="Overview"
          icon={<Component />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("Overview")}
        />
        <SidebarLink
          text="Calendar"
          icon={<CalendarDays />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("Calendar")}
        />
        <SidebarLink
          text="Analytics"
          icon={<PieChart />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("Analytics")}
        />
        <SidebarLink
          text="Activity"
          icon={<Signal />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("Activity")}
        />
        <SidebarLink
          text="Projects"
          icon={<Folders />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("Projects")}
        />
      </nav>

      {/* HR */}
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

      {/* HR */}
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
              navOpen={navOpen}
            />
          ))}
        </ul>
      </div>

      <button
        className="absolute text-gray-1 right-3 bottom-28"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? <ArrowLeftToLine /> : <ArrowRightToLine />}
      </button>

      <ProfileCard
        name="Mehmet Emin Avcil"
        profileImageUrl="logo.png"
        navOpen={navOpen}
      />
    </aside>
  );
};

export default Sidebar;
