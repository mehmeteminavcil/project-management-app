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
};

const AddTeam = () => {
  const { register, setValue } = useFormContext<ProjectFormData>();

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [team, setTeam] = useState<User[]>([]);

  useEffect(() => {
    register("team");
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
    <div className="flex justify-between p-3 my-4 border rounded-md border-gray-5">
      <div>
        <div>
          <h2>Search User:</h2>
          <input
            type="text"
            placeholder="search user to assign"
            className="border rounded-md border-gray-3"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div>
          <ul>
            {users?.map((user: User) => (
              <li
                key={user._id}
                className="flex gap-3"
                onClick={() => handleUserClick(user)}
              >
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Assigned users:</h2>
        <ul>
          {team?.map((user: User) => (
            <li key={user._id} className="flex gap-3">
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>

              <span>
                is Admin:
                <input
                  type="checkbox"
                  checked={user.isAdmin}
                  onChange={() => handleCheckboxChange(user)}
                />
              </span>
              <Trash2 onClick={() => handleUserDelete(user._id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTeam;
