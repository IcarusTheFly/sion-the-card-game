"use client";

import { useEffect, useState } from "react";
import GetCards from "../db/GetCards";
import Filters from "./Filters";
import CardsListLoader from "./CardsListLoader";
import CardsListView from "./CardsListView";

export default function CardsPage() {
  const [cardsRawList, setCardsRawList] = useState<CardTypeExtended[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // TO-DO: Play with useMemo and useCallback
  useEffect(() => {
    fetch("/api/cards", { cache: "no-store" })
      .then((res) => res.json())
      .then((cards) => {
        setCardsRawList(cards as CardTypeExtended[]);
      })
      .catch((error) => {
        console.error("Failed to load cards:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const [cardList, setCardList] = useState<CardTypeExtended[]>([]);

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Lista de cartas
          </h2>
          <Filters cardsRawList={cardsRawList} setCardList={setCardList} />
          {isLoading ? (
            <CardsListLoader />
          ) : (
            <CardsListView cardList={cardList} />
          )}
        </div>
      </section>
    </main>
  );
}
