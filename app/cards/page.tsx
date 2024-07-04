"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetCards from "../db/GetCards";

type CardTypeStrings = {
  title: string;
  name: string;
  legend: string;
  type: string;
  rarity: string;
  cost: string;
  ability: string;
  expansion: string;
  designer: string;
  language: string;
  collectionNumber: string;
  faction: string;
};

type CardTypeBooleans = {
  unique: boolean;
  limited: boolean;
  immune: boolean;
};

type CardTypeExtended = CardTypeStrings & CardTypeBooleans;

const cardTypeStringsKeys = {
  title: true,
  name: true,
  legend: true,
  type: true,
  rarity: true,
  cost: true,
  ability: true,
  expansion: true,
  designer: true,
  language: true,
  collectionNumber: true,
  faction: true,
};

const cardTypeBooleansKeys = {
  unique: true,
  limited: true,
  immune: true,
};

function isCardTypeExtendedKeyString(
  key: string
): key is keyof CardTypeStrings {
  return key in cardTypeStringsKeys;
}

function isCardTypeExtendedKeyBoolean(
  key: string
): key is keyof CardTypeBooleans {
  return key in cardTypeBooleansKeys;
}

export default function Cards() {
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
  const sortByFilterList = new Map([
    ["name", "Nombre"],
    ["legend", "Leyenda"],
    ["type", "Tipo"],
    ["rarity", "Rareza"],
    ["unique", "Única"],
    ["cost", "Coste"],
    ["limited", "Limitada"],
    ["immune", "Inmune"],
    ["ability", "Habilidad"],
    ["collectionNumber", "Número de Colección"],
    ["faction", "Facción"],
  ]);
  const [searchByFilter, setSearchByFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState(
    Array.from(sortByFilterList.keys())[0]
  );

  const [cardsRawList, setCardsRawList] = useState<CardTypeExtended[]>([]);
  // TO-DO: Play with useMemo and useCallback
  useEffect(() => {
    // Collect the cards from the DB
    GetCards().then((cards) => {
      setCardsRawList(cards as CardTypeExtended[]);
    });
  }, []);
  const [cardList, setCardList] = useState(
    cardsRawList.toSorted((a: CardTypeExtended, b: CardTypeExtended) =>
      a.name.localeCompare(b.name)
    )
  );

  useEffect(() => {
    // TO-DO: Move it to a function
    const filteredCardList: CardTypeExtended[] = cardsRawList.filter((card) => {
      if (searchByFilter === "") {
        return true;
      }

      try {
        for (const key in cardTypeStringsKeys) {
          if (
            card[key as keyof CardTypeStrings]
              .toLowerCase()
              .includes(searchByFilter.toLowerCase())
          ) {
            return true;
          }
        }
      } catch (error) {
        console.error("Error searching cards:", error);
        return false;
      }
      return false;
    });

    const sortedCardList: CardTypeExtended[] = filteredCardList.toSorted(
      (a: CardTypeExtended, b: CardTypeExtended) => {
        try {
          if (isCardTypeExtendedKeyString(sortByFilter)) {
            return a[sortByFilter].localeCompare(b[sortByFilter]);
          } else if (isCardTypeExtendedKeyBoolean(sortByFilter)) {
            return a[sortByFilter] === b[sortByFilter]
              ? 0
              : a[sortByFilter]
              ? -1
              : 1;
          }
        } catch (error) {
          console.error("Error sortingcards:", error);
          return 0;
        }
        return a.name.localeCompare(b.name);
      }
    );
    setCardList(sortedCardList);
  }, [searchByFilter, sortByFilter, cardsRawList]);

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Listado de cartas
          </h2>
          {/* Filters */}
          <div className="mb-12 flex flex-col sm:flex-row sm:justify-end gap-8">
            <div className="flex gap-2 items-center justify-end">
              <label
                className="block text-sm text-[#ffd700]"
                htmlFor="searchBy"
              >
                Buscar
              </label>
              <div className="mt-1 relative">
                <input
                  className="block w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none sm:text-sm md:w-full rounded-md"
                  id="searchBy"
                  name="searchBy"
                  placeholder="Filtrar por texto..."
                  onChange={(e) => setSearchByFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <label className="block text-sm text-[#ffd700]" htmlFor="sortBy">
                Ordenar por
              </label>
              <div className="mt-1 relative">
                <select
                  className="block w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:w-full rounded-md"
                  id="sortBy"
                  name="sortBy"
                  defaultValue={Array.from(sortByFilterList.keys())[0]}
                  onChange={(e) => setSortByFilter(e.target.value)}
                >
                  {Array.from(sortByFilterList.keys()).map((option: string) => (
                    <option key={option} value={option}>
                      {sortByFilterList.get(option)}
                    </option>
                  ))}
                </select>
                {/* TO-DO: Add sort icon */}
                {/* TO-DO: Sort by ASC and DESC*/}
              </div>
            </div>
          </div>

          {/* TO-DO: Load images in a compressed format */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {cardList.map((item) => {
              return (
                <motion.div
                  key={item.collectionNumber}
                  className="flex flex-col items-center gap-2"
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  {/* <Image src="/placeholder_card.svg" width={120} height={180} alt="Card" priority={true} className="rounded-md aspect-[120/180] object-cover" /> */}
                  <Image
                    src={`/images/${item.collectionNumber}.jpg`}
                    width={120}
                    height={180}
                    alt="Card"
                    priority={true}
                    className="rounded-md aspect-[120/180] object-cover"
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                  <Link
                    href={`/cards/${item.collectionNumber}`}
                    prefetch={false}
                    replace={true}
                  >
                    <Button
                      size="sm"
                      className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                    >
                      Ver carta
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
