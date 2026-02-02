"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import GetCardByColNumber from "../../db/GetCardByColNumber";
import CardDetailsLoader from "./CardDetailsLoader";
import CardDetailsNotFound from "./CardDetailsNotFound";
import CardDetailsView from "./CardDetailsView";

export default function CardDetailsPage({
  params,
}: {
  params: Promise<{ card_id: number }>;
}) {
  const [cardDetails, setCardDetails] = useState<CardTypeExtended>();
  const [cardLoading, setCardLoading] = useState<Boolean>(true);
  
  const unwrappedParams = use(params);

  useEffect(() => {
    GetCardByColNumber(unwrappedParams.card_id).then((card) => {
      if (card) {
        setCardDetails(card as CardTypeExtended);
      }
      setCardLoading(false);
    });
  }, [unwrappedParams.card_id]);

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
