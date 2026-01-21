"use client";

import { useState } from "react";
import NewDeckView from "./NewDeckView";

export default function DeckDetailsPage({
  params,
}: {
  params: { deck_id: number };
}) {
  const [deckDetails, setDeckDetails] = useState<DeckTypeExtended>();
  const [deckLoading, setDeckLoading] = useState<Boolean>(true);

  return (
    <main className="bg-gray-900 text-white py-8 md:py-12 flex-grow">
      <NewDeckView />
    </main>
  );
}
