"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const messages = [
    "De antwerpse politie is opzoek naar dader van steekpartij in park spoor noord",
    "Volg alexandresdesigns op Instagram 📸",
    "Nieuwe tools maken developers sneller dan ooit",
    "Vermijd Antwerpse ring door groot ongeval ter hoogte van Borgerhout",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* BREAKING BAR */}
      <div className="bg-red-600 text-white text-sm py-2 px-6 overflow-hidden flex items-center">
        <span className="font-bold mr-3">BREAKING:</span>
        <span
          className={`transition-all duration-500 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {messages[currentMessage]}
        </span>
      </div>

      {/* HERO */}
      <section className="bg-black text-white py-16 text-center shadow-md w-full">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight">
            HET <span className="italic">NIEUWS_BLAD</span>
          </h1>
          <h2 className="text-2xl mt-3 text-gray-300 tracking-wide">
            VAN ALEXANDRE
          </h2>
        </div>
      </section>

      {/* AD */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="bg-gray-300 text-gray-700 text-center py-6 rounded-md text-sm">
          Advertentie — Jouw advertentie hier
        </div>
      </div>

      {/* FEATURED + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-8">
        {/* FEATURED */}
        <div className="md:col-span-2">
          <div className="bg-gray-200 p-10 rounded-xl shadow-md hover:shadow-xl transition">
            <p className="text-xs text-gray-500 mb-2">Featured • 5 min lezen</p>

            <h2 className="text-3xl font-bold mb-4">
              Grote verschuiving: AI verandert het internet
            </h2>

            <p className="text-gray-700 max-w-2xl">
              Een diepgaande analyse van hoe AI content, platforms en gedrag
              beïnvloedt...
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h3 className="font-bold mb-4 text-sm uppercase text-gray-500">
            Trending
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="hover:underline cursor-pointer">
              🤖 AI tools die iedereen gebruikt in 2026
            </li>
            <li className="hover:underline cursor-pointer">
              ⚡ Waarom vibecoding explodeert
            </li>
            <li className="hover:underline cursor-pointer">
              🧠 De toekomst van AI en werk
            </li>
          </ul>
        </div>
      </section>

      {/* ARTIKELS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI SLOP */}
          <Link
            href="/ai-slop"
            className="group bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 cursor-pointer"
          >
            <span className="text-xs uppercase text-gray-500 tracking-widest">
              Technologie • 4 min lezen
            </span>

            <h3 className="text-xl font-bold mt-2 mb-3 group-hover:underline group-hover:text-black">
              Leidt AI-slop tot de dood van sociale media?
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              AI-slop overspoelt platforms en verandert hoe we content
              consumeren...
            </p>
          </Link>

          {/* VIBECODING */}
          <Link
            href="/vibecoding"
            className="group bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 cursor-pointer"
          >
            <span className="text-xs uppercase text-gray-500 tracking-widest">
              Development • 6 min lezen
            </span>

            <h3 className="text-xl font-bold mt-2 mb-3 group-hover:underline group-hover:text-black">
              Vibecoding: maak je eigen apps
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              Hoe AI developers helpt sneller en creatiever apps te bouwen...
            </p>
          </Link>

          {/* AMODEI */}
          <Link
            href="/amodei"
            className="group bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 cursor-pointer"
          >
            <span className="text-xs uppercase text-gray-500 tracking-widest">
              AI & Ethiek • 5 min lezen
            </span>

            <h3 className="text-xl font-bold mt-2 mb-3 group-hover:underline group-hover:text-black">
              AI en ethiek in Silicon Valley
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              Het debat rond macht, controle en de toekomst van AI...
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
