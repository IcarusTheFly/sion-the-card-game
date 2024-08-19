"use client";

import {
  createSessionCookie,
  destroySessionCookie,
  getSessionCookie,
} from "@/lib/session";
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

  const createSession = async (payload: UserPayload) => {
    await createSessionCookie(payload);
  };

  const destroySession = async () => {
    destroySessionCookie();
  };

  const fetchSession = async () => {
    const session = await getSessionCookie();
    if (session) {
      if (
        userData.email !== session.email ||
        userData.username !== session.username
      ) {
        setUserData({
          email: session.email,
          username: session.username,
        });
      }
    } else {
      if (userData.email || userData.username) {
        setUserData({ email: "", username: "" });
      }
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <UserDataContext.Provider
      value={{ userData, createSession, destroySession, fetchSession }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

// Create a custom hook to use the UserDataContext
export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      "useUserDataContext must be used within a UserDataProvider"
    );
  }
  return context;
};
