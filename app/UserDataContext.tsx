"use client";

import { getSession } from "@/lib";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

// TO-DO: Handle cookie implementation inside this provider
export const UserDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserPayload>({
    email: "",
    username: "",
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setUserData({
          email: session.email,
          username: session.username,
        });
      }
    });
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      "useUserDataContext must be used within a UserDataProvider"
    );
  }
  return context;
};
