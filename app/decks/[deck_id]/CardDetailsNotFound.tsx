import BackButton from "./BackButton";

export default function CardDetailsNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold mb-4">Carta no encontrada</h2>
      <p className="text-lg text-gray-400 mb-8">
        Parece que la carta que estás buscando no existe
      </p>
      <BackButton url="/cards" />
    </div>
  );
}
