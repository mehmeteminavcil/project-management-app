import RightMenu from "./components/RightMenu";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <Sidebar />
      <div className="flex-1 bg-body">Section</div>
      <RightMenu />
    </div>
  );
};

export default App;
