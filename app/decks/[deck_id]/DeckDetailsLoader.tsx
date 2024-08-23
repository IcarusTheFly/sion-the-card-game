import Image from "next/image";
import BackButton from "./BackButton";

export default function DeckDetailsLoader() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/placeholder_card.svg"
            width={384}
            height={538}
            alt="Loading..."
            className="rounded-lg min-h-[538px] object-cover animate-loading-card"
            priority={true}
          />
        </div>

        <div className="space-y-6">
          <h2 className="animate-loading-card bg-slate-300 rounded-md h-6"></h2>
          <div className="flex items-center gap-2">
            <span className="animate-loading-card bg-gray-800 rounded-md h-6 w-12"></span>
            <span className="animate-loading-card bg-gray-800 rounded-md h-6 w-12"></span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="animate-loading-card bg-slate-300 rounded-md h-10 w-full" />
            <div className="animate-loading-card bg-slate-300 rounded-md h-10 w-full" />
            <div className="animate-loading-card bg-slate-300 rounded-md h-10 w-full" />
            <div className="animate-loading-card bg-slate-300 rounded-md h-10 w-full" />
            <p className="col-span-2 animate-loading-card bg-slate-300 rounded-md h-28 w-full"></p>
            <p className="col-span-2 animate-loading-card bg-slate-300 rounded-md h-28 w-full"></p>
            <div>
              <BackButton url="/cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
