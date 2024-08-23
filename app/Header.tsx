"use client";

import Link from "next/link";
import GamepadIcon from "./icons/GamepadIcon";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { useUserDataContext } from "./UserDataContext";
import ButtonSpinner from "./icons/ButtonSpinner";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { userData, destroySession, fetchSession } = useUserDataContext();
  const pathName = usePathname();
  const router = useRouter();
  const links: HeaderLinkType[] = [
    {
      name: "Inicio",
      href: "/",
      isForLoggedUsers: false,
    },
    { name: "Cartas", href: "/cards", isForLoggedUsers: false },
    // TO-DO: Create and protect "decks" page
    { name: "Mazos", href: "/decks", isForLoggedUsers: true },
    { name: "Reglamento", href: "/rules", isForLoggedUsers: false },
  ];

  useEffect(() => {
    fetchSession().then(() => {
      setIsLoading(false);
    });
  }, [fetchSession]);

  useEffect(() => {
    if (userData.username) {
      setUsername(userData.username);
      setIsLoggedIn(true);
    } else {
      setUsername("");
      setIsLoggedIn(false);
    }
  }, [userData]);

  const logout = async () => {
    await destroySession();
    setIsLoggedIn(false);
    fetchSession();
    router.push("/");
  };

  return (
    <header className="flex flex-col items-center justify-between bg-gray-950 px-4 py-4 text-white md:flex-row md:px-6 md:py-4">
      <Link className="flex items-center gap-4" href="/">
        <GamepadIcon className="h-8 w-8" />
        <h1 className="text-2xl font-bold">SION El Juego de Cartas</h1>
      </Link>
      <nav className="mt-4 flex flex-col items-center gap-4 sm:flex-row md:mt-0 md:gap-6">
        <div className="flex items-center gap-4 md:mt-0 md:gap-6">
          {links.map((item) => {
            if (item.isForLoggedUsers && !isLoggedIn) {
              return null;
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-2 focus:no-underline
                    ${
                      (
                        item.href === "/"
                          ? pathName === item.href
                          : pathName.includes(item.href)
                      )
                        ? "text-yellow-400"
                        : "text-white"
                    }
                  `}
                prefetch={false}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Button className="inline-flex items-center justify-center rounded-md border text-base border-[#ffd700] px-4 py-2 text-[#ffd700] bg-gray-950 hover:bg-[#ffd700] hover:text-gray-950 hover:opacity-1 focus:ring-[#ffd700] focus:outline-none">
              <ButtonSpinner size="5" />
            </Button>
          </div>
        ) : !isLoggedIn ? (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              prefetch={false}
            >
              Log In
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* TO-DO: Show profile picture */}
            <Button
              disableRipple
              className="inline-flex items-center justify-center rounded-lg border text-base border-[#ffd700] px-4 py-2 text-[#ffd700] bg-gray-600 focus:outline-none hover:cursor-auto"
            >
              Hola, {username}
            </Button>
            <Button
              onClick={logout}
              className="inline-flex items-center justify-center rounded-md border text-base border-[#ffd700] px-4 py-2 text-[#ffd700] bg-gray-950 hover:bg-[#ffd700] hover:text-gray-950 hover:opacity-1 focus:ring-[#ffd700] focus:outline-none"
            >
              Log Out
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
