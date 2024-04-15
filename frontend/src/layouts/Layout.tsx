import RightMenu from "../components/RightMenu";
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <Sidebar />
      <div className="flex-1 p-3">{children}</div>
      <RightMenu />
    </div>
  );
};

export default Layout;
