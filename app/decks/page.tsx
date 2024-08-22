"use client";

// import { Button } from "@nextui-org/button";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CardsListLoader from "./CardsListLoader";
import GetDecks from "../db/GetDecks";
import { useUserDataContext } from "../UserDataContext";

export default function DecksPage() {
  const { userData } = useUserDataContext();
  // const cardVariant = {
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.25,
  //     },
  //     y: 0,
  //   },
  //   hidden: {
  //     opacity: 0,
  //     scale: 0.5,
  //     y: 50,
  //   },
  // };

  const [decksList, setDecksList] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // TO-DO: Play with useMemo and useCallback
  useEffect(() => {
    GetDecks(userData.email).then((decks) => {
      setDecksList(decks as DeckType[]);
      setIsLoading(false);
    });
  }, [userData.email]);

  // const [cardList, setCardList] = useState(
  //   cardsRawList.toSorted((a: CardTypeExtended, b: CardTypeExtended) =>
  //     a.name.localeCompare(b.name)
  //   )
  // );

  return (
    <main className="bg-gray-900 text-white flex-grow">
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Mazos creados</h2>
          {/* TO-DO: Load images in a compressed format */}
          {isLoading ? (
            <CardsListLoader />
          ) : (
            <div className="mx-auto max-w-4xl">
              {/* TO-DO: Control huge deck descriptions */}
              {decksList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    <div className="rounded-md bg-gray-700 p-4">
                      {/* <Image src="/placeholder_card.svg" width={300} height={200} alt="Deck" className="mb-4 rounded-md" /> */}
                      <Image
                        src="/images/26.jpg"
                        width={300}
                        height={200}
                        style={{ width: "100%" }}
                        alt={item.name}
                        className="mb-4 rounded-md aspect-[300/300] object-cover object-top"
                      />
                      <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
                      <p className="mb-4 text-sm text-gray-400 sm:min-h-[100px]">
                        {item.description}
                      </p>
                      <Link
                        href={`/decks/${item.id}`}
                        className="inline-flex items-center justify-center rounded-md bg-[#ffd700] px-4 py-2 text-gray-950 transition-colors hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                        prefetch={false}
                      >
                        Ver mazo
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            // <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            //   {decksList.map((item) => {
            //     return (
            //       <motion.div
            //         key={item.collectionNumber}
            //         className="flex flex-col items-center gap-2"
            //         variants={cardVariant}
            //         initial="hidden"
            //         whileInView="visible"
            //         viewport={{ once: true }}
            //       >
            //         <Image
            //           src={`/thumbnails/${item.collectionNumber}.jpg`}
            //           width={120}
            //           height={168}
            //           alt="Card"
            //           priority={true}
            //           className="rounded-md"
            //         />
            //         <span className="text-sm font-medium">{item.name}</span>
            //         <Link
            //           href={`/cards/${item.collectionNumber}`}
            //           prefetch={false}
            //           replace={true}
            //         >
            //           <Button
            //             size="sm"
            //             className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
            //           >
            //             Ver carta
            //           </Button>
            //         </Link>
            //       </motion.div>
            //     );
            //   })}
            // </div>
          )}
        </div>
      </section>
    </main>
  );
}
