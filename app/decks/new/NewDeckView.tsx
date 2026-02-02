import CardsListView from "@/app/cards/CardsListView";
import GetCards from "@/app/db/GetCards";
import Filters from "@/app/cards/Filters";
import { Button } from "@nextui-org/button";
import { PlusIcon, MinusIcon } from "lucide-react";
import { useUserDataContext } from "@/app/UserDataContext";
import CreateDeck from "@/app/db/CreateDeck";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardsListLoader from "../CardsListLoader";
import CardTooltip from "../CardTooltip";

export default function DeckDetailsView() {
  const [cardsRawList, setCardsRawList] = useState<CardTypeExtended[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsInDeck, setCardsInDeck] = useState<CardsInDeckType[]>([]);
  const [deckName, setDeckName] = useState("Nuevo Mazo");
  const [deckDescription, setDeckDescription] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState<CardTypeExtended | null>(
    null
  );
  const { userData } = useUserDataContext();
  const router = useRouter();

  const strategyCards = cardsRawList.filter((card) => card.type === "strategy");

  const [cardList, setCardList] = useState<CardTypeExtended[]>([]);

  useEffect(() => {
    fetch("/api/cards", { cache: "no-store" })
      .then((res) => res.json())
      .then((cards) => {
        const typedCards = cards as CardTypeExtended[];
        setCardsRawList(typedCards);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load cards:", error);
        setIsLoading(false);
      });
  }, []);

  const modifyCardQuantity = (
    cardCollectionNumber: string,
    increment: boolean
  ) => {
    const card = cardsRawList.find(
      (c) => c.collectionNumber === cardCollectionNumber
    );

    // If it's a strategy, handle it separately
    if (card?.type === "strategy") {
      if (increment) {
        setSelectedStrategy(card);
      } else if (selectedStrategy?.collectionNumber === cardCollectionNumber) {
        setSelectedStrategy(null);
      }
      return;
    }

    setCardsInDeck((prevCardsInDeck: CardsInDeckType[]) => {
      const existingCardIndex = prevCardsInDeck.findIndex(
        (card) => card.collectionNumber === cardCollectionNumber
      );

      // Clone the array to avoid mutation
      const newDeck = [...prevCardsInDeck];

      if (existingCardIndex !== -1) {
        // Card exists in deck
        const card = newDeck[existingCardIndex];
        if (increment) {
          if (card.quantity < 4) {
            newDeck[existingCardIndex] = { ...card, quantity: card.quantity + 1 };
          }
        } else {
          if (card.quantity > 1) {
            newDeck[existingCardIndex] = { ...card, quantity: card.quantity - 1 };
          } else {
            // Remove card if quantity becomes 0
            newDeck.splice(existingCardIndex, 1);
          }
        }
      } else if (increment) {
        // Add new card to deck
        const cardToAdd = cardsRawList.find(
          (c) => c.collectionNumber === cardCollectionNumber
        );
        if (cardToAdd) {
          newDeck.push({
            id: cardToAdd.id,
            name: cardToAdd.name,
            collectionNumber: cardToAdd.collectionNumber,
            quantity: 1,
          });
        }
      }

      return newDeck;
    });
  };

  const handleSaveDeck = async () => {
    if (!userData.email) {
      alert("Debes estar logueado para guardar un mazo");
      return;
    }

    if (!selectedStrategy) {
      alert("Debes seleccionar exactamente 1 Estrategia para tu mazo");
      return;
    }

    const cardsToSave = cardsInDeck
      .filter((c) => c.quantity > 0)
      .map((c) => ({ id: c.id, quantity: c.quantity }));

    if (cardsToSave.length === 0) {
      alert("El mazo no puede estar vacío");
      return;
    }

    const result = await CreateDeck(
      userData.email,
      deckName,
      deckDescription,
      cardsToSave,
      selectedStrategy.id
    );

    if (result.success) {
      alert("Mazo guardado correctamente");
      router.push("/decks");
    } else {
      alert("Error al guardar el mazo: " + result.message);
    }
  };

  const totalCards =
    cardsInDeck.reduce((acc, card) => acc + card.quantity, 0) +
    (selectedStrategy ? 1 : 0);

  return (
    <main className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[300px_1fr] md:p-8 bg-gray-900 text-white min-h-screen max-w-7xl mx-auto">
      <section className="bg-gray-800 p-4 md:p-6 sticky top-4 self-start h-[calc(100vh-2rem)] rounded-md flex flex-col overflow-hidden border border-gray-700 shadow-2xl">
        <div className="mb-6 flex-shrink-0">
          <h3 className="text-sm font-bold text-[#ffd700] mb-3 uppercase tracking-wider">
            Estrategia <span className="text-red-500">*</span>
          </h3>
          <div className="flex flex-col gap-2">
            {strategyCards.map((card) => (
              <CardTooltip
                key={card.collectionNumber}
                collectionNumber={card.collectionNumber}
                cardName={card.name}
              >
                <button
                  onClick={() => setSelectedStrategy(card)}
                  className={classNames(
                    "flex items-center gap-3 p-2 rounded-md transition-all text-left border w-full",
                    selectedStrategy?.collectionNumber === card.collectionNumber
                      ? "bg-[#ffd700]/20 border-[#ffd700] shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                      : "bg-gray-700/50 border-transparent hover:bg-gray-700 hover:border-gray-600"
                  )}
                >
                  <div className="relative w-10 h-14 flex-shrink-0">
                    <Image
                      src={`/thumbnails/${card.collectionNumber}.jpg`}
                      fill
                      sizes="40px"
                      alt={card.name}
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={classNames(
                        "text-xs font-bold truncate",
                        selectedStrategy?.collectionNumber ===
                          card.collectionNumber
                          ? "text-[#ffd700]"
                          : "text-white"
                      )}
                    >
                      {card.name}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Click para seleccionar
                    </span>
                  </div>
                </button>
              </CardTooltip>
            ))}
          </div>
        </div>

        <h2 className="mb-4 text-lg font-bold flex-shrink-0">Deck Preview ({totalCards})</h2>
        <div className="flex flex-col gap-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          {selectedStrategy && (
            <CardTooltip
              collectionNumber={selectedStrategy.collectionNumber}
              cardName={selectedStrategy.name}
            >
              <div className="flex items-center justify-between bg-[#ffd700]/10 border border-[#ffd700]/30 p-2 rounded-md w-full">
                <span className="text-sm font-bold text-[#ffd700] truncate flex-grow mr-2">
                  [Estrategia] {selectedStrategy.name}
                </span>
                <span className="text-sm font-bold text-[#ffd700]">1</span>
              </div>
            </CardTooltip>
          )}
          {cardsInDeck.map((card) => {
            if (card.quantity > 0) {
              return (
                <CardTooltip
                  key={card.collectionNumber}
                  collectionNumber={card.collectionNumber}
                  cardName={card.name}
                >
                  <div className="flex items-center justify-between bg-gray-700/50 p-2 rounded-md w-full">
                    <span className="text-sm font-medium truncate flex-grow mr-2">
                      {card.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        title="Decrement quantity"
                        onClick={() =>
                          modifyCardQuantity(card.collectionNumber, false)
                        }
                        className="p-1 border border-gray-600 rounded text-red-400 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <MinusIcon size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {card.quantity}
                      </span>
                      <button
                        title="Increment quantity"
                        onClick={() =>
                          modifyCardQuantity(card.collectionNumber, true)
                        }
                        className="p-1 border border-gray-600 rounded text-green-400 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={card.quantity >= 4}
                      >
                        <PlusIcon size={14} />
                      </button>
                    </div>
                  </div>
                </CardTooltip>
              );
            }
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0">
          <Button
            className="w-full bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
            onClick={handleSaveDeck}
          >
            Guardar Mazo
          </Button>
        </div>
      </section>
      <section>
        <div className="mb-6 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-grow">
              <label className="block text-sm font-medium mb-1 text-[#ffd700]">Nombre del Mazo</label>
              <input
                type="text"
                title="Deck name"
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
              />
            </div>
            <div className="flex-[2]">
              <label className="block text-sm font-medium mb-1 text-[#ffd700]">Descripción</label>
              <input
                type="text"
                title="Deck description"
                value={deckDescription}
                onChange={(e) => setDeckDescription(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Mobile save button */}
            <div className="fixed bottom-4 right-4 md:hidden z-50">
              <Button
                className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
                onClick={handleSaveDeck}
              >
                Guardar Mazo
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4 sticky top-0 z-40 bg-gray-900 -mx-4 px-4 md:-mx-8 md:px-8 py-4 border-b border-gray-800">
            <Filters cardsRawList={cardsRawList} setCardList={setCardList} />
          </div>
          {isLoading ? (
            <CardsListLoader />
          ) : (
            <CardsListView
              cardList={cardList}
              modifyCardQuantity={modifyCardQuantity}
              isViewOnly={false}
              cardsInDeck={cardsInDeck}
              selectedStrategyId={selectedStrategy?.id}
              showViewButton={false}
            />
          )}
        </div>
      </section>
    </main>
  );
}
