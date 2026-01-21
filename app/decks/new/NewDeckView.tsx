import CardsListView from "@/app/cards/CardsListView";
import GetCards from "@/app/db/GetCards";
import { Button } from "@nextui-org/button";
// import { Label } from "@nextui-org/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@nextui-org/select";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardsListLoader from "../CardsListLoader";

export default function DeckDetailsView() {
  const [cardsRawList, setCardsRawList] = useState<CardTypeExtended[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsInDeck, setCardsInDeck] = useState<CardsInDeckType[]>([]);

  const [cardList, setCardList] = useState(
    cardsRawList.toSorted((a: CardTypeExtended, b: CardTypeExtended) =>
      a.name.localeCompare(b.name)
    )
  );

  useEffect(() => {
    GetCards().then((cards) => {
      // TO-DO: Add filters
      // setCardsRawList(cards as CardTypeExtended[]);
      setCardList(cards as CardTypeExtended[]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setCardsInDeck(
      cardList.map((item) => {
        return {
          name: item.name,
          collectionNumber: item.collectionNumber,
          quantity: 0,
        };
      })
    );
  }, [cardList]);

  const modifyCardQuantity = (
    cardCollectionNumber: string,
    increment: boolean
  ) => {
    setCardsInDeck((prevCardsInDeck: CardsInDeckType[]) => {
      return prevCardsInDeck.map((card) => {
        if (card.collectionNumber === cardCollectionNumber) {
          if (increment && card.quantity < 4) {
            return { ...card, quantity: card.quantity + 1 };
          } else if (!increment && card.quantity > 0) {
            return { ...card, quantity: card.quantity - 1 };
          }
        }
        return card;
      });
    });
    // TO-DO: SHOULD WE GET A CONTEXT FOR DECK STATUS???
    // setCardsInDeck((prevState: CardInDeckType[]) => {
    //   return prevState.map((item) => {
    //     if (item.collectionNumber === card.collectionNumber) {
    //       return { ...item, quantity: quantity };
    //     }
    //     return item;
    //   });
    // });
  };

  return (
    <main className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[300px_1fr] md:p-8 bg-gray-900 text-white">
      <section className="bg-gray-800 p-4 md:p-6">
        <h2 className="mb-4 text-lg font-bold">Deck Preview</h2>
        <div className="grid grid-cols-2 gap-4">
          {cardsInDeck.map((card) => {
            if (card.quantity > 0) {
              return (
                <div
                  key={card.collectionNumber}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{card.name}</span>
                  <span className="text-sm font-medium"> x{card.quantity}</span>
                </div>
              );
            }
          })}
          {/* <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Card Name</span>
            <span className="text-sm font-medium">2x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Card Name</span>
            <span className="text-sm font-medium">1x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Card Name</span>
            <span className="text-sm font-medium">4x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Card Name</span>
            <span className="text-sm font-medium">2x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Card Name</span>
            <span className="text-sm font-medium">1x</span>
          </div> */}
        </div>
      </section>
      <section>
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-lg font-bold">Card Selection</h2>
          <div className="fixed bottom-4 right-4 md:static md:bottom-auto md:right-auto">
            <Button className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700] z-50">
              Save Deck
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]">
          <div className="space-y-4">
            {/* <div className="grid gap-2">
              <label htmlFor="search" className="text-white">
                Search
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search for a card..."
                className="w-full bg-gray-800 text-white"
              />
            </div> */}
            {/* <div className="grid gap-2">
              <label htmlFor="type" className="text-white">
                Card Type
              </label>
              <Select
                id="type"
                defaultValue="all"
                className="bg-gray-800 text-white"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="creature">Creature</SelectItem>
                  <SelectItem value="spell">Spell</SelectItem>
                  <SelectItem value="artifact">Artifact</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            {/* <div className="grid gap-2">
              <Label htmlFor="rarity" className="text-white">
                Rarity
              </Label>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cost" className="text-white">
                Mana Cost
              </Label>
              <Select
                id="cost"
                defaultValue="all"
                className="bg-gray-800 text-white"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
          {isLoading ? (
            <CardsListLoader />
          ) : (
            <CardsListView
              cardList={cardList}
              modifyCardQuantity={modifyCardQuantity}
              isViewOnly={false}
            />
          )}
          {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/placeholder.svg"
                width={120}
                height={180}
                alt="Card"
                className="rounded-md"
                style={{ aspectRatio: "120/180", objectFit: "cover" }}
              />
              <span className="text-sm font-medium">Card Name</span>
              <Button
                size="sm"
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
              >
                Add to Deck
              </Button>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
