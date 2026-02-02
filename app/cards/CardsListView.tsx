import { PlusIcon, MinusIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import classNames from "classnames";

export default function CardsListView({
  cardList,
  isViewOnly = true,
  modifyCardQuantity = null,
  cardsInDeck = [],
  selectedStrategyId = null,
  showViewButton = true,
}: {
  cardList: CardTypeExtended[];
  isViewOnly?: boolean;
  modifyCardQuantity?:
    | ((collectionNumber: string, increment: boolean) => void)
    | null;
  cardsInDeck?: CardsInDeckType[];
  selectedStrategyId?: string | null;
  showViewButton?: boolean;
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
  // const [cardsInDeck, setCardsInDeck] = useState(
  //   cardList.map((item) => {
  //     return {
  //       name: item.name,
  //       collectionNumber: item.collectionNumber,
  //       count: 0,
  //     };
  //   })
  // );

  // TO-DO: A useEffect makes more sense than these functions
  const incrementCount = (cardColNumber: string) => {
    if (modifyCardQuantity) {
      modifyCardQuantity(cardColNumber, true);
    }
  };

  const decrementCount = (cardColNumber: string) => {
    if (modifyCardQuantity) {
      modifyCardQuantity(cardColNumber, false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {/* TO-DO: Load images in a compressed format */}
      {cardList.map((item, index) => {
        const cardCountInDeck =
          cardsInDeck.find(
            (card) => card.collectionNumber === item.collectionNumber
          )?.quantity || 0;

        return (
          <div
            key={item.collectionNumber}
            className={classNames(
              "flex flex-col items-center gap-2 p-2 rounded-lg transition-colors",
              item.id === selectedStrategyId ? "bg-[#ffd700]/10 ring-2 ring-[#ffd700]" : ""
            )}
          >
            <div className="relative w-[120px] h-[168px]">
              <Image
                src={`/thumbnails/${item.collectionNumber}.jpg`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={item.name}
                priority={true}
                className="rounded-md object-cover"
              />
              {item.type === "strategy" && (
                <div className="absolute top-1 right-1 bg-[#ffd700] text-gray-950 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase">
                  Estrategia
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-center line-clamp-1">{item.name}</span>
            {isViewOnly ? (
              showViewButton ? (
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
              ) : null
            ) : item.type === "strategy" ? (
              <Button
                size="sm"
                onClick={() => incrementCount(item.collectionNumber)}
                className={classNames(
                  "w-full font-bold transition-all",
                  item.id === selectedStrategyId
                    ? "bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00]"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
                )}
              >
                {item.id === selectedStrategyId ? "Seleccionada" : "Seleccionar"}
              </Button>
            ) : (
              <div className="flex items-center space-x-2 justify-center">
                <Button
                  size="sm"
                  isIconOnly
                  onClick={() => decrementCount(item.collectionNumber)}
                  isDisabled={cardCountInDeck <= 0}
                  className="bg-[#ffd700] text-gray-950 border border-gray-950/20 hover:cursor-pointer hover:bg-[#ffcc00] focus:ring-[#ffd700] disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className="bg-[#ffd700] text-gray-950 border border-gray-950/20 hover:cursor-pointer hover:bg-[#ffcc00] focus:ring-[#ffd700] z-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
