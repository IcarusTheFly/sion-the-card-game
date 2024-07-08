import Image from "next/image";

const loadingItems: Number = 12;

export default function CardsListLoader() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: loadingItems as number }).map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-2">
            <Image
              src={`/placeholder_card.svg`}
              width={120}
              height={180}
              alt="Loading..."
              className="rounded-md min-h-[168px] aspect-[120/168] animate-loading-card"
            />
            <div className="animate-loading-card bg-slate-300 rounded-md h-6 w-1/2"></div>
            <div className="animate-loading-card bg-[#ffd700] rounded-md h-7 w-1/3"></div>
          </div>
        );
      })}
    </div>
  );
}
