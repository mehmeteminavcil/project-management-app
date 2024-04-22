import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import illustration from "../assets/homeillustration.png";
import { LogIn } from "lucide-react";

const Home = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <img src={logo} alt="logo " width={38} height={38} />

          <h1 className="text-2xl font-medium text-black">TaskFlow </h1>
        </div>

        <Link
          to="/signin"
          className="flex items-center gap-2 px-2 py-1 rounded text-w bg-green hover:bg-green/90"
        >
          Sign in
          <LogIn size={20} className="" />
        </Link>
      </div>

      <main className="gap-10 mt-20 md:flex ">
        <div className="flex flex-col justify-center flex-1 mb-20">
          <h1 className="text-5xl font-bold leading-[80px] text-black/80 mb-10">
            Embrace the Flow <br /> with Ease
          </h1>
          <p className="mb-6 font-medium text-gray-2">
            Unlock your potential with intuitive task management <br />
            for seamless productivity and peace of mind.
          </p>
          <div className="flex items-center gap-3">
            <p className=" text-gray-2">Ready to dive in?</p>
            <Link
              to="/signup"
              className="flex items-center gap-2 px-2 py-1 rounded text-w bg-purple w-[105px] hover:bg-purple/90 shadow-xl"
            >
              Sign up
              <LogIn size={20} className="" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img src={illustration} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
