"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetCards from "../db/GetCards";
import Filters from "./Filters";
import CardsListLoader from "./CardsListLoader";

export default function CardsPage() {
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
      },
      y: 0,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 50,
    },
  };

  const [cardsRawList, setCardsRawList] = useState<CardTypeExtended[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // TO-DO: Play with useMemo and useCallback
  useEffect(() => {
    GetCards().then((cards) => {
      setCardsRawList(cards as CardTypeExtended[]);
      setIsLoading(false);
    });
  }, []);
  const [cardList, setCardList] = useState(
    cardsRawList.toSorted((a: CardTypeExtended, b: CardTypeExtended) =>
      a.name.localeCompare(b.name)
    )
  );

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Lista de cartas
          </h2>
          <Filters cardsRawList={cardsRawList} setCardList={setCardList} />
          {/* TO-DO: Load images in a compressed format */}
          {isLoading ? (
            <CardsListLoader />
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {cardList.map((item) => {
                return (
                  <motion.div
                    key={item.collectionNumber}
                    className="flex flex-col items-center gap-2"
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
          )}
        </div>
      </section>
    </main>
  );
}
