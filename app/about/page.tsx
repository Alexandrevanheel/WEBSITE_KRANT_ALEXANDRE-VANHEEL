import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f5f5f2] min-h-screen px-6 py-12">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Titel */}
        <h1 className="text-center text-4xl font-serif mb-16 tracking-wide">
          NEWSPAPER
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Artikel 1 */}
            <Link href="/ai-slop">
              <div className="bg-white p-6 hover:shadow-lg transition cursor-pointer">
                <p className="text-xs text-gray-400 mb-2">FEATURED</p>
                <h2 className="text-2xl font-serif mb-4">
                  Leidt AI-slop tot de dood van sociale media?
                </h2>
                <p className="text-gray-600">
                  AI-content overspoelt sociale media. Blijven we dit kijken?
                </p>
              </div>
            </Link>

            {/* Artikel 2 */}
            <Link href="/vibecoding">
              <div className="bg-white p-6 hover:shadow-lg transition cursor-pointer">
                <p className="text-xs text-gray-400 mb-2">TECH</p>
                <h2 className="text-2xl font-serif mb-4">
                  Vibecoding: programmeren met AI
                </h2>
                <p className="text-gray-600">
                  Hoe AI coding toegankelijk maakt voor iedereen.
                </p>
              </div>
            </Link>

            {/* Artikel 3 */}
            <Link href="/verzet-dario">
              <div className="bg-white p-6 hover:shadow-lg transition cursor-pointer">
                <p className="text-xs text-gray-400 mb-2">AI</p>
                <h2 className="text-2xl font-serif mb-4">
                  Dario Amodei en het AI-verzet
                </h2>
                <p className="text-gray-600">
                  Grote spelers nemen standpunten in rond AI.
                </p>
              </div>
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white p-8 flex flex-col justify-center">
            <p className="text-xs text-gray-400 mb-2">LATEST</p>

            <h2 className="text-3xl font-serif mb-6">UX/UI Analyse Project</h2>

            <p className="text-gray-600 mb-6">
              In deze website analyseer ik drie artikels op basis van UX en UI
              principes. Elk artikel werd herwerkt naar een betere digitale
              ervaring.
            </p>

            <p className="text-gray-400 text-sm">
              Door Alexandre Vanheel — 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
