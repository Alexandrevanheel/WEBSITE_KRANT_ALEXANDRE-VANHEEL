import Link from "next/link";

export default function AiSlopPage() {
  return (
    <main className="bg-gray-200 min-h-screen">
      {/* TERUG */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Link href="/" className="text-sm text-gray-500 mb-6 block">
          ← Terug naar overzicht
        </Link>
      </div>

      {/* FULL WIDTH BANNER */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Leidt AI-slop tot de dood van sociale media?
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
              Leidt AI-slop tot de dood van sociale media?
            </h2>

            <p className="mb-4 text-gray-800 leading-relaxed">
              Sociale media slibben de jongste paar maanden angstwekkend snel
              dicht met AI-slop: video’s met mensen die niet bestaan en
              gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in
              2026 naar kijken?
            </p>

            <p className="text-sm text-gray-600 mt-6">
              Dominique Deckmyn — 2 januari 2026
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              De grootste technologische doorbraak van 2025, of toch die met de
              zichtbaarste gevolgen, zijn de videogenerators zoals Sora en Veo,
              waardoor iedereen nu in enkele seconden een realistisch uitziende
              video kan maken over elk onderwerp.
            </p>

            <p className="text-gray-800 leading-relaxed">
              De grote vraag voor 2026 is: willen we daarnaar blijven kijken?
              Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet
              alleen te maken met de enorm toegenomen productie, maar ook met
              wat algoritmes ons aanbevelen.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Platformen zoals YouTube, TikTok en Instagram sturen deze content
              actief naar gebruikers. Mark Zuckerberg stelde dat AI-gegenereerde
              inhoud een nieuw tijdperk in sociale media betekent.
            </p>
          </div>

          {/* KOLOM 3 */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Eerst deelden we ons eigen leven online, daarna volgden we
              influencers en beroemdheden. Nu komen we in een fase waarin
              AI-content centraal staat.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Maar hoe meer AI in onze feed verschijnt, hoe minder we echte
              mensen en echte verhalen zien. Sociale media hadden oorspronkelijk
              een duidelijke functie: verbonden blijven met anderen.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Volgens sommige bedrijven maakt het niet uit of content echt is,
              zolang gebruikers het willen zien. AI kan eindeloos video’s
              genereren die perfect aansluiten bij onze interesses.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Toch reageren niet alle gebruikers hetzelfde. Sommigen klikken weg
              zodra ze merken dat content door AI is gemaakt. De nieuwigheid van
              AI-video’s begint stilaan af te nemen.
            </p>

            <p className="text-gray-800 leading-relaxed">
              In die zin zou je kunnen stellen dat we getuige zijn van een
              verschuiving, of zelfs het begin van het einde van sociale media
              zoals we die kennen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
