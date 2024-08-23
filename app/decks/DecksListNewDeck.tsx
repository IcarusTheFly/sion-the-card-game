import Link from "next/link";
import AddIcon from "../icons/AddIcon";

export default function DecksListNewDeck() {
  return (
    <Link
      className="border-5 border-dashed border-blue-300 rounded-md bg-[#2d4d9e] bg-opacity-50 p-4 text-lg text-gray-200 flex flex-col items-center justify-center
      aspect-square transition-all
    hover:bg-[#3055b0] hover:bg-opacity-100 hover:text-xl"
      href="/decks/new"
      prefetch={false}
    >
      <AddIcon />
      {/* Add shadow to the text */}
      <h3 className="mb-2 font-bold">Nuevo mazo</h3>
    </Link>
  );
}
