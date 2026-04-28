import Link from "next/link";

export default function AmodeiPage() {
  return (
    <main className="bg-gray-200 min-h-screen">
      {/* TERUG */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Link href="/" className="text-sm text-gray-500 mb-6 block">
          ← Terug naar overzicht
        </Link>
      </div>

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben
            Spartacus!”-moment van Silicon Valley?
          </h1>
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* KOLOM 1 */}
          <div>
            <p className="text-sm text-gray-600 mb-3">De Technocraat</p>

            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Was het verzet van Dario Amodei een kantelpunt?
            </h2>

            <p className="mb-4 text-gray-800 leading-relaxed">
              Het verzet van Dario Amodei tegen minister van “Oorlog” Pete
              Hegseth, en de rechtszaak waar dat nu op uitdraait, lijkt steeds
              meer op een keerpunt. Al keert Silicon Valley nooit meer terug
              naar vroeger.
            </p>

            <p className="text-sm text-gray-600 mt-6">
              Dominique Deckmyn — 13 maart 2026
            </p>
          </div>

          {/* KOLOM 2 (PURE TEKST) */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Big tech schaarde zich deze week haast eenstemmig achter Dario
              Amodei, de bevlogen en tegendraadse oprichter van Anthropic die de
              confrontatie met Maga aandurft.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Ze doen dat niet via grote publieke verklaringen, maar via
              zogenoemde amicus briefs waarin bedrijven hun steun uitspreken
              voor Anthropic in zijn juridische strijd tegen het Pentagon.
            </p>

            <p className="text-gray-800 leading-relaxed">
              De strafmaatregel van minister Pete Hegseth – het bestempelen van
              Anthropic als “risico voor de toeleveringsketen” – creëert volgens
              hen een cultuur van dwang en stilte waarin kritiek wordt bestraft.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Documenten met deze kritiek zijn indirect ondertekend door
              bedrijven zoals Amazon, Google en Apple via belangenorganisaties.
            </p>
          </div>

          {/* KOLOM 3 (SIDEBAR) */}
          <div>
            <div className="sticky top-20 space-y-6">
              {/* AD 1 */}
              <a href="#" className="block hover:shadow-md transition">
                <div className="bg-white border rounded-lg p-4 text-sm shadow-sm">
                  <p className="text-xs text-gray-500 mb-2">Advertentie</p>
                  <p className="font-semibold">
                    🍔 Proef de beste smashburgers van Antwerpen!
                  </p>
                  <p className="text-gray-600 mt-1">
                    Kom langs bij BurgerLab op 't Zuid — vers, lokaal en mega
                    lekker.
                  </p>
                </div>
              </a>

              {/* AD 2 */}
              <a href="#" className="block hover:shadow-md transition">
                <div className="bg-white border rounded-lg p-4 text-sm shadow-sm">
                  <p className="text-xs text-gray-500 mb-2">Gesponsord</p>
                  <p className="font-semibold">
                    ☕ Nieuwe koffiebar in Antwerpen
                  </p>
                  <p className="text-gray-600 mt-1">
                    Ontdek Brew & Bytes — waar tech en koffie samenkomen.
                  </p>
                </div>
              </a>

              {/* LEES OOK */}
              <div className="bg-gray-100 border-l-4 border-black p-4 rounded-md">
                <p className="text-xs uppercase text-gray-500 mb-2">Lees ook</p>

                <Link
                  href="/ap-opleiding"
                  className="font-semibold hover:underline block"
                >
                  🎓 Waarom de AP-opleiding Grafische en Digitale Media zo sterk
                  is
                </Link>

                <Link
                  href="/vibecoding"
                  className="text-sm text-gray-600 hover:underline block mt-2"
                >
                  Bram overstijns vertelde dat GDM een sterke opleiding is
                  omdat...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
