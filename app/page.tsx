/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hNZxPbbrjRl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Component() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
        <section className="px-4 py-8 md:px-8 md:py-12 min-h-96 flex items-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl tracking-wide">Bienvenido a <span className="bg-gradient-to-r from-[#ff1a1a] via-[#ff823f] to-[#ffcc00] text-transparent bg-clip-text">SION El Juego de la Biblia</span></h2>
            <p className="mb-8 text-lg md:text-xl">
              Adéntrate en el mundo de la Biblia como nunca antes lo habías hecho. Descubre lugares fascinantes que fueron testigos de sucesos
              trascendentales en la historia de la humanidad y crea tu mazo definitivo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-6 py-3 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                prefetch={false}
              >
                Empieza a jugar
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-[#ffd700] px-6 py-3 text-[#ffd700] transition-colors hover:bg-[#ffd700] hover:text-gray-950 focus:ring-[#ffd700]"
                prefetch={false}
              >
                Aprende más
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Mazos populares</h2>
            {/* TO-DO: Control huge deck descriptions */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-gray-700 p-4">
                {/* <Image src="/placeholder.svg" width={300} height={200} alt="Deck" className="mb-4 rounded-md" /> */}
                <Image src="/images/026.jpg" width={300} height={200} alt="Deck" className="mb-4 rounded-md aspect-[300/300] object-cover object-top" />
                <h3 className="mb-2 text-lg font-bold">Santidad</h3>
                <p className="mb-4 text-sm text-gray-400 sm:min-h-[100px]">Este mazo está lleno de siervos fieles de Dios, que ocupan puestos de responsabilidad en los que median entre el Creador y el ser humano.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                  prefetch={false}
                >
                  Ver mazo
                </Link>
              </div>
              <div className="rounded-md bg-gray-700 p-4">
                <Image src="/images/001.jpg" width={300} height={200} alt="Deck" className="mb-4 rounded-md aspect-[300/300] object-cover object-top" />
                <h3 className="mb-2 text-lg font-bold">Descendencia</h3>
                <p className="mb-4 text-sm text-gray-400 sm:min-h-[100px]">Mazo en la que abundan los personajes descendientes de Abrahán, que conducen a la descendencia prometida (el Mesías)</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                  prefetch={false}
                >
                  Ver mazo
                </Link>
              </div>
              <div className="rounded-md bg-gray-700 p-4">
                <Image src="/images/049.jpg" width={300} height={200} alt="Deck" className="mb-4 rounded-md aspect-[300/300] object-cover object-top" />
                <h3 className="mb-2 text-lg font-bold">Corrupción</h3>
                <p className="mb-4 text-sm text-gray-400 sm:min-h-[100px]">Corrupción está habitado por aquellos que obstruyen la justicia y la verdad. Cuál víbora, son expertos en diezmar a la población con su ponzoña.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                  prefetch={false}
                >
                  Ver mazo
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Cartas populares</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/035.jpg" width={120} height={180} alt="Card" className="rounded-md aspect-[120/180] object-cover" />
                <span className="text-sm font-medium">Abel</span>
                <Button size="sm" className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]">
                  Ver carta
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/017.jpg" width={120} height={180} alt="Card" className="rounded-md aspect-[120/180] object-cover" />
                <span className="text-sm font-medium">Escudo de la fe</span>
                <Button size="sm" className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]">
                Ver carta
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/054.jpg" width={120} height={180} alt="Card" className="rounded-md aspect-[120/180] object-cover" />
                <span className="text-sm font-medium">Prisión</span>
                <Button size="sm" className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]">
                  Ver carta
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/020.jpg" width={120} height={180} alt="Card" className="rounded-md aspect-[120/180] object-cover" />
                <span className="text-sm font-medium">León dorado</span>
                <Button size="sm" className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]">
                Ver carta
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}