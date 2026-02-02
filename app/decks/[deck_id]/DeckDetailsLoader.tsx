export default function DeckDetailsLoader() {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[300px_1fr] md:p-8 bg-gray-900 text-white min-h-screen max-w-7xl mx-auto">
      {/* Sidebar Loader */}
      <section className="bg-gray-800 p-4 md:p-6 sticky top-4 self-start h-[calc(100vh-2rem)] rounded-md flex flex-col space-y-6">
        <div className="h-8 w-3/4 bg-gray-700 rounded animate-pulse"></div>
        <div className="space-y-3">
          <div className="h-4 w-1/4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-20 w-full bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="space-y-3 pt-4">
          <div className="h-6 w-1/2 bg-gray-700 rounded animate-pulse"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-full bg-gray-700 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Loader */}
      <section className="space-y-8">
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-48 flex flex-col justify-center space-y-4">
          <div className="h-10 w-1/2 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div>
          <div className="h-8 w-1/3 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[120/168] bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-3 w-3/4 bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
