"use client";

import { useEffect, useState } from "react";
import GetCardByColNumber from "../../db/GetCardByColNumber";
import CardDetailsLoader from "./CardDetailsLoader";
import CardDetailsNotFound from "./CardDetailsNotFound";
import CardDetailsView from "./CardDetailsView";

export default function CardDetailsPage({
  params,
}: {
  params: { card_id: number };
}) {
  const [cardDetails, setCardDetails] = useState<CardTypeExtended>();
  const [cardLoading, setCardLoading] = useState<Boolean>(true);

  useEffect(() => {
    GetCardByColNumber(params.card_id).then((card) => {
      if (card) {
        setCardDetails(card as CardTypeExtended);
      }
      setCardLoading(false);
    });
  }, [params.card_id]);

  return (
    <main className="bg-gray-900 text-white py-8 md:py-12 flex-grow">
      {cardLoading && <CardDetailsLoader />}
      {!cardLoading && !cardDetails && <CardDetailsNotFound />}
      {!cardLoading && cardDetails && (
        <CardDetailsView cardDetails={cardDetails} />
      )}
    </main>
  );
}
