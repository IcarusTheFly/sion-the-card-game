import { Dispatch, SetStateAction, useEffect, useState } from "react";

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

type FiltersProps = {
  cardsRawList: CardTypeExtended[];
  setCardList: Dispatch<SetStateAction<CardTypeExtended[]>>;
};

export default function Filters({ cardsRawList, setCardList }: FiltersProps) {
  const [searchByFilter, setSearchByFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState(
    Array.from(sortByFilterList.keys())[0]
  );

  useEffect(() => {
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
          console.error("Error sorting cards:", error);
          return 0;
        }
        return a.name.localeCompare(b.name);
      }
    );
    setCardList(sortedCardList);
  }, [searchByFilter, sortByFilter, cardsRawList]);

  return (
    <div className="mb-12 flex flex-col sm:flex-row sm:justify-end gap-8">
      <div className="flex gap-2 items-center justify-end">
        <label className="text-sm text-[#ffd700]" htmlFor="searchBy">
          Buscar
        </label>
        <div className="mt-1 relative">
          <input
            className="w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none sm:text-sm md:w-full rounded-md"
            id="searchBy"
            name="searchBy"
            placeholder="Filtrar por texto..."
            onChange={(e) => setSearchByFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end">
        <label className="text-sm text-[#ffd700]" htmlFor="sortBy">
          Ordenar por
        </label>
        <div className="mt-1 relative">
          <select
            className="w-[250px] pl-3 pr-10 py-2 text-base border-gray-300 bg-slate-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:w-full rounded-md"
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
  );
}
