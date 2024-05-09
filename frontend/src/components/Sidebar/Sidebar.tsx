import { useState } from "react";
import logo from "../../assets/logo.png";

import { sidebarTasks } from "../../constants";

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
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../../API/api-client";
import { useUser } from "../../contexts/UserContext";
const Sidebar = () => {
  const { data: projectData } = useQuery(
    "getProjectsCard",
    apiClient.getProjectCards
  );

  const { user } = useUser();

  const [navOpen, setNavOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("projects");

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
          text="projects"
          icon={<Folders />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("projects")}
        />
        <SidebarLink
          text="overview"
          icon={<Component />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("overview")}
        />
        <SidebarLink
          text="calendar"
          icon={<CalendarDays />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("calendar")}
        />
        <SidebarLink
          text="analytics"
          icon={<PieChart />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("analytics")}
        />
        <SidebarLink
          text="activity"
          icon={<Signal />}
          navOpen={navOpen}
          activeNav={activeNav}
          handleClick={() => setActiveNav("activity")}
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

            <Link
              to="/add-new-project"
              className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet"
            >
              <Plus width={12} height={12} color="#5577ff" />
            </Link>
          </div>
        )}
        <ul className="flex flex-col gap-[10px] mt-[10px]">
          {projectData?.map((item) => (
            <ProjectsList
              id={item._id}
              key={item._id}
              name={item.name}
              logoUrl={item.logoUrl}
              count={99}
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

            <Link
              to="/add-new-project"
              className="flex items-center justify-center w-4 h-4 rounded-sm bg-lightViolet"
            >
              <Plus width={12} height={12} color="#5577ff" />
            </Link>
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
        name={`${user?.firstName} ${user?.lastName}`}
        profileImageUrl={user?.imageUrls}
        navOpen={navOpen}
      />
    </aside>
  );
};

export default Sidebar;
