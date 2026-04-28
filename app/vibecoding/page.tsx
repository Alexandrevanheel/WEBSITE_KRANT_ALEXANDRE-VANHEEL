import Link from "next/link";

export default function VibecodingPage() {
  return (
    <main className="bg-gray-200 min-h-screen">
      {/* TERUG */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Link href="/" className="text-sm text-gray-500 mb-6 block">
          ← Terug naar overzicht
        </Link>
      </div>

      {/* BANNER */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Vibecoding: zo maak je je eigen apps met AI
          </h1>
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* KOLOM 1 */}
          <div>
            <p className="text-sm text-gray-600 mb-3">De Helpdesk</p>

            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Vibecoding: zo maak je in enkele minuten je eigen apps
            </h2>

            <p className="mb-4 text-gray-800 leading-relaxed">
              Waarom zou je een app gebruiken die geld kost of niet helemaal
              doet wat je nodig hebt? Met vibecoding maak je zelf een app of
              website op maat. Of liever: AI doet dat voor jou.
            </p>

            <p className="mb-4 text-gray-800 leading-relaxed">
              Vibecoding – coderen met AI – zit in een enorme stroomversnelling.
              Dankzij tools zoals ChatGPT en Gemini kan bijna iedereen apps
              bouwen zonder programmeerkennis.
            </p>

            <p className="text-sm text-gray-600 mt-6">
              Dominique Deckmyn — 23 januari 2026
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Een simpel spel maken kan al met één prompt. Vraag bijvoorbeeld:
              “Maak een spel waarbij een dinosaurus een bal moet koppen.” AI
              genereert meteen werkende code in HTML en Javascript.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Die code plak je in een bestand en open je in je browser. Vaak
              werkt het meteen, soms moet je kleine aanpassingen vragen aan de
              AI.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Je kan daarna stap voor stap uitbreiden: score toevoegen, snelheid
              aanpassen, of nieuwe functies zoals geluid. Zo leer je al doende
              hoe apps werken.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Voor complexere apps, zoals een gezinskalender, heb je iets meer
              structuur nodig. Dan werk je met meerdere bestanden en soms met
              een database in de cloud.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Tools zoals Supabase en Vercel helpen om je app online te zetten,
              zodat meerdere gebruikers dezelfde data kunnen gebruiken.
            </p>
          </div>

          {/* KOLOM 3 */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Wie echt ver wil gaan, kan “agentic” werken: AI die zelfstandig je
              code aanpast en verbetert. Dat versnelt het proces enorm.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Met tools zoals ChatGPT Codex kan een app in minuten sterk
              verbeteren, zonder dat je zelf code hoeft te schrijven.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Toch blijft basisinzicht nuttig. Begrijpen wat je bouwt helpt om
              fouten op te lossen en betere apps te maken.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Vibecoding evolueert razendsnel. Wat vroeger uren werk was, kan nu
              met enkele prompts gegenereerd worden.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Daardoor wordt software bouwen toegankelijk voor iedereen — zelfs
              zonder programmeerervaring.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
