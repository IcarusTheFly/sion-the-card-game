"use client";

import { useEffect, useState, use } from "react";
import GetDeckByID from "../../db/GetDeckByID";
import DeckDetailsLoader from "./DeckDetailsLoader";
import DeckDetailsNotFound from "./DeckDetailsNotFound";
import DeckDetailsView from "./DeckDetailsView";
import { useUserDataContext } from "@/app/UserDataContext";

export default function DeckDetailsPage({
  params,
}: {
  params: Promise<{ deck_id: number }>;
}) {
  const { userData } = useUserDataContext();
  const [deckDetails, setDeckDetails] = useState<DeckTypeExtended>();
  const [deckLoading, setDeckLoading] = useState<boolean>(true);

  const unwrappedParams = use(params);

  useEffect(() => {
    if (!userData.email) return;

    GetDeckByID(userData.email, unwrappedParams.deck_id).then((deck) => {
      if (deck) {
        setDeckDetails(deck as DeckTypeExtended);
      }
      setDeckLoading(false);
    });
  }, [unwrappedParams.deck_id, userData.email]);

  return (
    <main className="bg-gray-900 text-white flex-grow min-h-screen">
      {deckLoading && <DeckDetailsLoader />}
      {!deckLoading && !deckDetails && <DeckDetailsNotFound />}
      {!deckLoading && deckDetails && (
        <DeckDetailsView deckDetails={deckDetails} />
      )}
    </main>
  );
}
