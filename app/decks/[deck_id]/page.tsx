"use client";

import { useEffect, useState } from "react";
import GetDeckByID from "../../db/GetDeckByID";
import CardDetailsLoader from "./DeckDetailsLoader";
import DeckDetailsNotFound from "./DeckDetailsNotFound";
import { useUserDataContext } from "@/app/UserDataContext";

export default function DeckDetailsPage({
  params,
}: {
  params: { deck_id: number };
}) {
  const { userData } = useUserDataContext();
  const [deckDetails, setDeckDetails] = useState<DeckTypeExtended>();
  const [deckLoading, setDeckLoading] = useState<Boolean>(true);

  useEffect(() => {
    GetDeckByID(userData.email, params.deck_id).then((deck) => {
      if (deck) {
        setDeckDetails(deck as DeckTypeExtended);
      }
      setDeckLoading(false);
    });
  }, [params.deck_id, userData.email]);

  return (
    <main className="bg-gray-900 text-white py-8 md:py-12 flex-grow">
      {deckLoading && <CardDetailsLoader />}
      {!deckLoading && !deckDetails && <DeckDetailsNotFound />}
      {!deckLoading && deckDetails && <p>Deck details will appear here</p>}
    </main>
  );
}
