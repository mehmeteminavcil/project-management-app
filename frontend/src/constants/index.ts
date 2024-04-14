import {
  activity,
  analytics,
  calendar,
  imgUrl,
  overview,
  project1,
  project2,
  project3,
  projects,
  projectUrl,
} from "../assets/index";

export const sidebarNav = [
  {
    id: 1,
    name: "Overview",
    iconUrl: overview,
    isActive: false,
  },
  {
    id: 2,
    name: "Calendar",
    iconUrl: calendar,
    isActive: false,
  },
  {
    id: 3,
    name: "Analytics",
    iconUrl: analytics,
    isActive: false,
  },
  {
    id: 4,
    name: "Activity",
    iconUrl: activity,
    isActive: false,
  },
  {
    id: 5,
    name: "Projects",
    iconUrl: projects,
    isActive: true,
  },
];

export const sidebarProjects = [
  {
    id: "1",
    title: "Overview",
    imgUrl: project1,
    count: 23,
  },
  {
    id: "2",
    title: "Calendar",
    imgUrl: project2,
    count: 345,
  },
  {
    id: "3",
    title: "Analytics",
    imgUrl: project3,
    count: 568,
  },
];

export const sidebarTasks = [
  {
    id: "1",
    title: "Manage Finances",
    count: 52,
    color: "pink",
  },
  {
    id: "2",
    title: "Integrate ChatGPT",
    count: 15,
    color: "blue",
  },
  {
    id: "3",
    title: "Advertise Website",
    count: 5,
    color: "purple",
  },
  {
    id: "4",
    title: "Invest in DOGE",
    count: 2,
    color: "green",
  },
];

export const Folders = [
  {
    id: "1",
    title: "Manage Finances",
    color: "pink",
    createdAt: "Apr 2, 2023",
  },
  {
    id: "2",
    title: "Integrate ChatGPT",
    color: "green",
    createdAt: "Apr 2, 2023",
  },
  {
    id: "3",
    title: "Advertise Website",
    color: "yellow",
    createdAt: "Apr 2, 2023",
  },
  {
    id: "4",
    title: "Invest in DOGE",
    color: "blue",
    createdAt: "Apr 2, 2023",
  },
];

export const Projects = [
  {
    id: "1",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
  {
    id: "2",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
  {
    id: "3",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
  {
    id: "4",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
  {
    id: "5",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
  {
    id: "6",
    imgUrl: imgUrl,
    projectImgUrl: projectUrl,
    title: "Cloth",
    description: "Small and Consices heading",
    color: "#fd71af",
    colorBg: "bg-lightPink",
    tag: [
      { id: "1", tag: "Ecommerce", color: "green" },
      { id: "2", tag: "Ai", color: "pink" },
      { id: "3", tag: "Sport", color: "purple" },
    ],
  },
];
