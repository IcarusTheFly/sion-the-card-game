import { PlusIcon, MinusIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react";

export default function CardsListView({
  cardList,
  isViewOnly = true,
  modifyCardQuantity = null,
}: {
  cardList: CardTypeExtended[];
  isViewOnly?: boolean;
  modifyCardQuantity?:
    | ((collectionNumber: string, increment: boolean) => void)
    | null;
}) {
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

  // TO-DO: Make it only suitable in case of deck view - We don't need this in the card list view
  const [cardsInDeck, setCardsInDeck] = useState(
    cardList.map((item) => {
      return {
        name: item.name,
        collectionNumber: item.collectionNumber,
        count: 0,
      };
    })
  );

  // TO-DO: A useEffect makes more sense than these functions
  const incrementCount = (cardColNumber: string) => {
    if (modifyCardQuantity) {
      modifyCardQuantity(cardColNumber, true);
    }
    // setCardsInDeck((prevCardsInDeck) => {
    //   return prevCardsInDeck.map((card) => {
    //     if (card.collectionNumber === cardColNumber && card.count < 4) {
    //       return { ...card, count: card.count + 1 };
    //     }
    //     return card;
    //   });
    // });
  };

  const decrementCount = (cardColNumber: string) => {
    if (modifyCardQuantity) {
      modifyCardQuantity(cardColNumber, false);
    }
    setCardsInDeck((prevCardsInDeck) => {
      return prevCardsInDeck.map((card) => {
        if (card.collectionNumber === cardColNumber && card.count > 0) {
          return { ...card, count: card.count - 1 };
        }
        return card;
      });
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {/* TO-DO: Load images in a compressed format */}
      {cardList.map((item) => {
        const cardCountInDeck =
          cardsInDeck.find(
            (card) => card.collectionNumber === item.collectionNumber
          )?.count || 0;

        return (
          <motion.div
            key={item.collectionNumber}
            className="flex flex-col items-center gap-2"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={`/thumbnails/${item.collectionNumber}.jpg`}
              width={120}
              height={168}
              alt="Card"
              priority={true}
              className="rounded-md"
            />
            <span className="text-sm font-medium">{item.name}</span>
            {isViewOnly ? (
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
            ) : (
              <div className="flex items-center space-x-2 justify-center">
                <Button
                  size="sm"
                  isIconOnly
                  onClick={() => decrementCount(item.collectionNumber)}
                  isDisabled={cardCountInDeck <= 0}
                  className="bg-[#ffd700] text-gray-950 hover:cursor-default hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <span className="text-xl font-bold">{cardCountInDeck}</span>
                <Button
                  size="sm"
                  isIconOnly
                  onClick={() => incrementCount(item.collectionNumber)}
                  // onClick={() => modifyCardQuantity(item.collectionNumber)}
                  isDisabled={cardCountInDeck >= 4}
                  className="bg-[#ffd700] text-gray-950 hover:cursor-default hover:bg-[#ffcc00] focus:ring-[#ffd700] z-100"
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
