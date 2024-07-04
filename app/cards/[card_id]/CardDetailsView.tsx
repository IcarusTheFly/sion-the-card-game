import classNames from "classnames";
import Image from "next/image";
import BackButton from "./BackButton";

const parseRarity = (rarity: string) => {
  const rarityMap = new Map([
    ["2", { name: "Púrpura", color: "text-indigo-400" }],
    ["4", { name: "Ónice", color: "text-green-400" }],
    ["6", { name: "Oro", color: "text-yellow-400" }],
    ["8", { name: "Plata", color: "text-gray-400" }],
    ["10", { name: "Cobre", color: "text-orange-400" }],
    ["12", { name: "Común", color: "" }],
  ]);
  return rarityMap.get(rarity) || rarityMap.get("12");
};
const parseType = (type: string) => {
  const typeMap = new Map([
    ["character", "Personaje"],
    ["event", "Evento"],
    ["land", "Lugar"],
    ["object", "Objeto"],
    ["prophecy", "Profecía"],
    ["strategy", "Estrategia"],
    ["unknown", "Desconocido"],
  ]);
  return typeMap.get(type) || typeMap.get("unknown");
};

// TO-DO: Load images in .bmp / .svg format!
export default function CardDetailsView({
  cardDetails,
}: {
  cardDetails: CardTypeExtended;
}) {
  const parsedRarity = parseRarity(cardDetails.rarity);

  console.log(cardDetails);
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={`/images/${cardDetails.collectionNumber}.jpg`}
            width={384}
            height={538}
            alt={cardDetails.name}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{cardDetails.name}</h2>
          <div className="flex items-center gap-2">
            {cardDetails.unique && (
              <span className="text-sm font-medium bg-gray-800 px-2 py-1 rounded-md">
                Única
              </span>
            )}
            {cardDetails.limited && (
              <span className="text-sm font-medium bg-gray-800 px-2 py-1 rounded-md">
                Limitada
              </span>
            )}
            {cardDetails.immune && (
              <span className="text-sm font-medium bg-gray-800 px-2 py-1 rounded-md">
                Inmune
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-400">Rareza</span>
              <p
                className={classNames("text-lg font-bold", parsedRarity?.color)}
              >
                {parsedRarity?.name}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400">Tipo</span>
              <p className="text-lg font-bold">{parseType(cardDetails.type)}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400">Coste</span>
              <p className="text-lg font-bold">{cardDetails.cost || "-"}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400">Facción</span>
              <p className="text-lg font-bold">{cardDetails.faction || "-"}</p>
            </div>
            <p className="text-lg col-span-2">{cardDetails.ability}</p>
            <p className="text-sm col-span-2 italic">{cardDetails.legend}</p>
            <div>
              <BackButton url="/cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
