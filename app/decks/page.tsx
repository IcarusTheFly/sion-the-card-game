"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DecksListLoader from "./DecksListLoader";
import GetDecks from "../db/GetDecks";
import { useUserDataContext } from "../UserDataContext";
import DecksListNewDeck from "./DecksListNewDeck";
import DeckListFloatingNewDeck from "./DeckListFloatingNewDeck";

export default function DecksPage() {
  const { userData } = useUserDataContext();
  const [decksList, setDecksList] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only attempt to fetch if we have an email. 
    // If userData is still being fetched by the context, we stay in isLoading state.
    if (!userData.email) {
      // We might want to wait a bit to see if session arrives
      const timer = setTimeout(() => {
        if (!userData.email) {
          setDecksList([]);
          setIsLoading(false);
        }
      }, 500);
      return () => clearTimeout(timer);
    }

    setIsLoading(true);
    GetDecks(userData.email).then((decks) => {
      setDecksList(decks as DeckType[]);
      setIsLoading(false);
    });
  }, [userData.email]);

  return (
    <main className="bg-gray-900 text-white flex-grow flex flex-col">
      <section className="px-4 py-8 md:px-8 md:py-12 flex-grow">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Mazos creados</h2>
          {isLoading ? (
            <DecksListLoader />
          ) : (
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {decksList.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={`/decks/${item.id}`}
                      className="group relative aspect-square rounded-md overflow-hidden bg-gray-800 border-2 border-gray-700 hover:border-[#ffd700] transition-all duration-300 shadow-lg"
                      prefetch={false}
                    >
                      {/* Partial Thumbnail Background */}
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                          src={
                            item.strategyCollectionNumber
                              ? `/images/${item.strategyCollectionNumber}.jpg`
                              : "/thumbnails/back.jpg"
                          }
                          alt={item.name}
                          className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                        />
                        {/* Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {item.description}
                        </p>
                        <div className="flex items-center text-[#ffd700] font-bold text-sm">
                          Ver mazo 
                          <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
                {/* Add new deck button at the end */}
                <DecksListNewDeck />
                <DeckListFloatingNewDeck />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
