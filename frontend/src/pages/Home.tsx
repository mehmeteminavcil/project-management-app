import FoldersSection from "../components/FoldersSection";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-body">
      <div className="sticky top-0 z-20 p-5 border-gray-4 bg-body">
        <h2 className="font-medium text-gray-1">Welcome Back! Mehmet Emin</h2>
      </div>
      <div className="flex flex-col gap-10 p-5 overflow-y-auto">Home</div>
    </div>
  );
};

export default Home;
