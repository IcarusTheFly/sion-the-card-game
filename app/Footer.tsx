"use client";

import GamepadIcon from "./GamepadIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-4 py-6 text-white md:px-6 md:py-8">
      <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-4xl md:flex-row">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <GamepadIcon className="h-8 w-8" />
            <span className="text-lg font-bold">
              SION El Juego de la Biblia
            </span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; 2024 SION EL Juego de la Biblia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
