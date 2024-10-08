"use client";

import Link from "next/link";
import GamepadIcon from "./icons/GamepadIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-4 py-6 text-white md:px-6 md:py-8">
      <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-4xl md:flex-row">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link className="flex items-center gap-4" href="/">
            <GamepadIcon className="h-8 w-8" />
            <span className="text-lg font-bold">SION El Juego de Cartas</span>
          </Link>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; 2024 SION El Juego de Cartas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
