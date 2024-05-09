// UserContext.tsx

import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../API/api-client";
import { User } from "../components/AddTeam";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
});

export const useUser = () => useContext(UserContext);
type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const { data: userData, isLoading } = useQuery("getUser", apiClient.getUser);
  const [user, setUser] = useState<User | null>(null);

  // Update user state when userData changes
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
