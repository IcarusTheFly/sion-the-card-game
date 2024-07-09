"use client";

import Link from "next/link";
import GamepadIcon from "./icons/GamepadIcon";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathName = usePathname();
  const links: HeaderLinkType[] = [
    {
      name: "Inicio",
      href: "/",
    },

    { name: "Cartas", href: "/cards" },
    // { name: "Mazos", href: "/decks" },
    { name: "Reglamento", href: "/rules" },
  ];

  return (
    <header className="flex flex-col items-center justify-between bg-gray-950 px-4 py-4 text-white md:flex-row md:px-6 md:py-4">
      <Link className="flex items-center gap-4" href="/">
        <GamepadIcon className="h-8 w-8" />
        <h1 className="text-2xl font-bold">SION El Juego de Cartas</h1>
      </Link>
      <nav className="mt-4 flex flex-col items-center gap-4 sm:flex-row md:mt-0 md:gap-6">
        <div className="flex items-center gap-4 md:mt-0 md:gap-6">
          {links.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition duration-200 hover:text-yellow-400 hover:underline hover:underline-offset-2
                    ${pathName === item.href ? "text-yellow-400" : "text-white"}
                  `}
                prefetch={false}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {!isLoggedIn && (
          <div className="flex items-center gap-2">
            {/* TO-DO: Implement log in and show profile picture */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-[#ffd700] px-4 py-2 text-[#ffd700] transition-colors hover:bg-[#ffd700] hover:text-gray-950 focus:ring-[#ffd700]"
              prefetch={false}
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
