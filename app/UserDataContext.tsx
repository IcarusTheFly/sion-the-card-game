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

  const createSession = React.useCallback(async (payload: UserPayload) => {
    await createSessionCookie(payload);
  }, []);

  const destroySession = React.useCallback(async () => {
    await destroySessionCookie();
  }, []);

  const fetchSession = React.useCallback(async () => {
    const session = await getSessionCookie();

    if (session) {
      setUserData((prev) => {
        if (
          prev.email !== session.email ||
          prev.username !== session.username
        ) {
          return {
            email: session.email,
            username: session.username,
          };
        }
        return prev;
      });
    } else {
      setUserData((prev) => {
        if (prev.email || prev.username) {
          return { email: "", username: "" };
        }
        return prev;
      });
    }
  }, []);

  const value = React.useMemo(
    () => ({ userData, createSession, destroySession, fetchSession }),
    [userData, createSession, destroySession, fetchSession]
  );

  return (
    <UserDataContext.Provider
      value={value}
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
