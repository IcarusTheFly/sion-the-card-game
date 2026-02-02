import Image from "next/image";

const loadingItems: number = 6;

export default function DecksListLoader() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: loadingItems }).map((_, index) => {
        return (
          <div
            key={index}
            className="aspect-square rounded-md bg-gray-800 border-2 border-gray-700 animate-pulse flex flex-col p-6 justify-end"
          >
            <div className="h-6 w-3/4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-1/4 bg-gray-700 rounded"></div>
          </div>
        );
      })}
    </div>
  );
}
