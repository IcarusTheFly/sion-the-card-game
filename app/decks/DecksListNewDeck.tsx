import Link from "next/link";
import AddIcon from "../icons/AddIcon";

export default function DecksListNewDeck() {
  return (
    <Link
      className="border-2 border-dashed border-[#ffd700] rounded-md bg-blue-900 bg-opacity-50 text-xl text-gray-200
      flex flex-col items-center justify-center
      aspect-square transition-colors duration-200
    hover:bg-blue-800 "
      href="/decks/new"
      prefetch={false}
    >
      <AddIcon />
      {/* Add shadow to the text */}
      <h3 className="font-semibold">Nuevo mazo</h3>
    </Link>
  );
}
