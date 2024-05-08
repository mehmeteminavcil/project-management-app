import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ProjectFormData } from "../forms/ManageProjectForm";

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  imageUrls: string;
};

const AddTeam = () => {
  const {
    register,
    setValue,

    formState: { errors },
  } = useFormContext<ProjectFormData>();

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [team, setTeam] = useState<User[]>([]);

  useEffect(() => {
    register("team", { required: "This Field is required!" });
  }, [register]);

  useEffect(() => {
    setValue("team", team);
  }, [team, setValue]);

  useEffect(() => {
    if (searchTerm === "") {
      setUsers([]);
    }
  }, [searchTerm]);

  const handleSearch = async (searchValue: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/search-user?email=${searchValue}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.slice(0, 5));
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value === "") {
      setUsers([]);
    } else {
      handleSearch(value);
    }
  };

  const handleCheckboxChange = (user: User) => {
    setTeam((prev) =>
      prev.map((prevUser) =>
        prevUser._id === user._id
          ? { ...prevUser, isAdmin: !prevUser.isAdmin }
          : prevUser
      )
    );
  };

  const handleUserDelete = (userId: string) => {
    setTeam((prev) => prev.filter((user) => user._id !== userId));
  };

  const handleUserClick = (user: User) => {
    const userExists = team.some((u) => u._id === user._id);

    if (!userExists) {
      const newUser = { ...user, isAdmin: user.isAdmin || false };
      setTeam((prev) => [...prev, newUser]);
    }

    setUsers([]);
    setSearchTerm("");
  };

  return (
    <div className="flex justify-between gap-10 p-3 my-4 border rounded-md border-gray-5">
      <div className="flex-1 " onMouseLeave={() => setUsers([])}>
        <h2>Search User:</h2>
        <input
          type="text"
          placeholder="search user to assign"
          className="w-full p-2 border rounded-md outline-none border-gray-3"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="relative">
          <ul className="absolute flex flex-col w-full rounded-md bg-w">
            {users?.map((user: User) => (
              <li
                key={user._id}
                className="flex gap-3 p-1 mx-2 my-1 border rounded-md cursor-pointer border-gray-5 hover:bg-green/50 "
                onClick={() => handleUserClick(user)}
              >
                <img src={user.imageUrls} className="rounded-full w-7 h-7" />
                <span className="capitalize">{user.firstName}</span>
                <span className="capitalize">{user.lastName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <h2>
          Assigned Users:{" "}
          {errors.team && (
            <span className="ml-4 text-error">{errors.team.message}</span>
          )}
        </h2>
        <ul className="flex flex-col gap-2 ">
          {team?.map((user: User) => (
            <li
              key={user._id}
              className="flex items-center justify-between p-1 px-2 rounded-md bg-violet/10"
            >
              <div className="flex items-center gap-2">
                <img src={user.imageUrls} className="w-8 h-8 rounded-full" />
                <span className="capitalize">{user.firstName}</span>
                <span className="capitalize">{user.lastName}</span>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center">
                  is Admin:
                  <input
                    type="checkbox"
                    checked={user.isAdmin}
                    onChange={() => handleCheckboxChange(user)}
                  />
                </label>
                <Trash2
                  onClick={() => handleUserDelete(user._id)}
                  size={16}
                  className="cursor-pointer text-error/80"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTeam;
