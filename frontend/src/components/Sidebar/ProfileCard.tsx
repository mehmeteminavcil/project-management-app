import { Settings } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../../API/api-client";

type ProfileCardProps = {
  name: string;
  profileImageUrl: string;
  navOpen: boolean;
};

const ProfileCard = ({ name, profileImageUrl, navOpen }: ProfileCardProps) => {
  const [showSettings, setShowSettings] = useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(apiClient.signout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (err) => console.error(`Failed to sign out: ${err}`),
  });

  const handleClick = () => {
    console.log("clicked");
    mutation.mutate();
  };

  return (
    <div
      className={`h-[64px] flex  items-center relative justify-between border rounded-[10px] border-gray-4 p-2  mb-[22px]  mt-auto   mx-2  ${
        !navOpen && " justify-center"
      }`}
    >
      <div className="">
        <img
          src={profileImageUrl}
          alt="user"
          className=""
          width={48}
          height={48}
        />
        <span></span>
      </div>
      {navOpen && (
        <>
          <div className="flex flex-col -ml-4 text-sm">
            <span className="font-medium text-gray-2">{name}</span>
            <span className="font-normal text-gray-3">Free Account</span>
          </div>
          <button className="">
            <Settings
              color="gray"
              size={20}
              onClick={() => setShowSettings(!showSettings)}
            />
          </button>

          {showSettings && (
            <div className="absolute border shadow-lg  flex flex-col p-3 gap-4  border-gray-5 rounded-[10px] w-full right-0 bg-w -top-[126px]">
              <Link to="/profile" className="pb-1 border-b border-gray-5">
                Account Settings
              </Link>
              <button
                type="button"
                className="p-1 rounded-md bg-green text-white w-[50%] hover:bg-green/90"
                onClick={handleClick}
              >
                Sign out
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileCard;
