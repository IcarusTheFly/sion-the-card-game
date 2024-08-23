import BackButton from "./BackButton";

export default function DeckDetailsNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold mb-4">Mazo no encontrado</h2>
      <p className="text-lg text-gray-400 mb-8">
        Parece que el mazo que estás buscando no existe
      </p>
      <BackButton url="/decks" />
    </div>
  );
}
