import RightMenu from "./components/RightMenu";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <Sidebar />
      <Home />
      <RightMenu />
    </div>
  );
};

export default App;
