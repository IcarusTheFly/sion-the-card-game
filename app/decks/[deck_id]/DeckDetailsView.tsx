import Image from "next/image";
import CardTooltip from "../CardTooltip";
import classNames from "classnames";
import CardsListView from "@/app/cards/CardsListView";

export default function DeckDetailsView({
  deckDetails,
}: {
  deckDetails: DeckTypeExtended;
}) {
  const totalCards =
    deckDetails.cards.reduce((acc, card) => acc + card.quantity, 0) +
    (deckDetails.strategyCollectionNumber ? 1 : 0);

  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[300px_1fr] md:p-8 bg-gray-900 text-white min-h-screen max-w-7xl mx-auto">
      {/* Sidebar - View Mode */}
      <section className="bg-gray-800 p-4 md:p-6 sticky top-4 self-start h-[calc(100vh-2rem)] rounded-md flex flex-col overflow-hidden border border-gray-700 shadow-2xl">
        <h2 className="mb-4 text-xl font-bold border-b border-gray-700 pb-2 flex-shrink-0">
          Resumen del Mazo
        </h2>

        <div className="mb-6 flex-shrink-0">
          <h3 className="text-sm font-bold text-[#ffd700] mb-3 uppercase tracking-wider">
            Estrategia
          </h3>
          {deckDetails.strategyCollectionNumber && (
            <CardTooltip
              collectionNumber={deckDetails.strategyCollectionNumber}
              cardName="Estrategia"
            >
              <div className="flex items-center gap-3 p-3 rounded-md bg-[#ffd700]/10 border border-[#ffd700]/30 w-full shadow-[0_0_10px_rgba(255,215,0,0.1)] cursor-help">
                <div className="relative w-10 h-14 flex-shrink-0">
                  <Image
                    src={`/thumbnails/${deckDetails.strategyCollectionNumber}.jpg`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Estrategia"
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#ffd700]">
                    Seleccionada
                  </span>
                  <span className="text-[10px] text-gray-400 italic">
                    Pasa el cursor para ver
                  </span>
                </div>
              </div>
            </CardTooltip>
          )}
        </div>

        <h3 className="mb-4 text-lg font-bold flex-shrink-0">
          Cartas ({totalCards})
        </h3>
        
        <div className="flex flex-col gap-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          {deckDetails.cards.map((card) => (
            <CardTooltip
              key={card.collectionNumber}
              collectionNumber={card.collectionNumber}
              cardName={card.name}
              placement="right-start"
            >
              <div className="flex items-center justify-between bg-gray-700/30 hover:bg-gray-700/60 p-2.5 rounded-md w-full transition-all border border-gray-600/50 hover:border-[#ffd700]/50 cursor-help group/item">
                <span className="text-sm font-medium truncate flex-grow mr-2 group-hover/item:text-white text-gray-300 transition-colors">
                  {card.name}
                </span>
                <span className="text-sm font-bold text-[#ffd700] bg-gray-900/80 px-2 py-0.5 rounded border border-[#ffd700]/20">
                  x{card.quantity}
                </span>
              </div>
            </CardTooltip>
          ))}
        </div>
      </section>

      {/* Main Content - Deck Info */}
      <section className="space-y-8">
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl relative overflow-hidden group">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 opacity-5 -mr-20 -mt-20">
              {deckDetails.strategyCollectionNumber && (
                <Image 
                  src={`/images/${deckDetails.strategyCollectionNumber}.jpg`}
                  fill
                  alt=""
                  className="object-contain"
                />
              )}
           </div>

          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              {deckDetails.name}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl italic">
              "{deckDetails.description}"
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#ffd700]">
            <span className="w-8 h-1 bg-[#ffd700] rounded-full inline-block"></span>
            Composición del Mazo
          </h2>
          
          <CardsListView 
            cardList={deckDetails.cards} 
            isViewOnly={true}
            showViewButton={false}
            cardsInDeck={deckDetails.cards.map(c => ({
              id: c.id,
              name: c.name,
              collectionNumber: c.collectionNumber,
              quantity: c.quantity
            }))}
          />
        </div>
      </section>
    </div>
  );
}
