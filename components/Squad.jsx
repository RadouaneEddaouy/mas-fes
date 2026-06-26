"use client";
import React from "react";

export default function Squad({ currentLang }) {
  const isAr = currentLang === "ar";

  const players = [
    {
      number: "16",
      position: { ar: "حارس مرمى", fr: "Gardien" },
      name: { ar: "صلاح الدين شهاب", fr: "Salaheddine Chihab" },
      image: "/images/players/chihab.png",
    },
    {
      number: "9",
      position: { ar: "مهاجم", fr: "Attaquant" },
      name: { ar: "سفيان بنجديدة", fr: "Soufiane Benjdida" },
      image: "/images/players/benjdida.png",
    },
    {
      number: "11",
      position: { ar: "جناح أيسر", fr: "Ailier gauche" },
      name: { ar: "سليمان علوش", fr: "Soulyman Allouch" },
      image: "/images/players/allouch.png",
    },
    {
      number: "17",
      position: { ar: "جناح أيمن", fr: "Ailier droit" },
      name: { ar: "كيفن يامغا", fr: "Kevin Yamga" },
      image: "/images/players/yamga.jpg",
    },
    {
      number: "19",
      position: { ar: "وسط ميدان", fr: "Milieu central" },
      name: { ar: "أنس طاهيري", fr: "Anas Tahiri" },
      image: "/images/players/tahiri.png",
    },
    {
      number: "8",
      position: { ar: "وسط ميدان", fr: "Milieu central" },
      name: { ar: "أشرف هرماش", fr: "Achraf Harmach" },
      image: "/images/players/harmach.png",
      captain: true,
    },
    {
      number: "3",
      position: { ar: "مدافع", fr: "Defenseur central" },
      name: { ar: "عادل رحايلي", fr: "Adil Rhaili" },
      image: "/images/players/rhaili.png",
    },
    {
      number: "21",
      position: { ar: "مدافع", fr: "Arriere gauche" },
      name: { ar: "مروان أوحرو", fr: "Marouane Ouhrou" },
      image: "/images/players/ouhrou.png",
    },
  ];

  return (
    <section id="squad" className="w-full max-w-7xl mx-auto px-6 mt-24">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
          <span className="text-[#FFE600] text-xs font-bold uppercase tracking-[0.2em]">
            {isAr ? "الفريق الأول" : "Premiere equipe"}
          </span>
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
        </div>
        <h2
          className={`text-white uppercase text-center ${
            isAr
              ? "font-[family-name:var(--font-cairo)] font-black text-3xl md:text-5xl"
              : "font-[family-name:var(--font-bebas)] text-4xl md:text-6xl tracking-wide"
          }`}
        >
          {isAr ? "نجوم المغرب الفاسي" : "L'effectif des Tigres"}
        </h2>
        <div className="w-20 h-1.5 bg-[#FFE600] mt-4 rounded-full" />
      </div>

      <div className="flex md:grid md:grid-cols-4 lg:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
        {players.map((player) => (
          <div
            key={player.number}
            className="snap-center min-w-[240px] md:min-w-0 group relative h-80 rounded-3xl overflow-hidden bg-[#121214] border border-white/10 transition-all duration-500 hover:scale-105 hover:border-[#FFE600]/50"
          >
            <img
              src={player.image}
              alt={player.name.fr}
              className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-player.png";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {player.captain && (
              <span
                className={`absolute top-4 ${
                  isAr ? "right-4" : "left-4"
                } bg-[#FFE600] text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full`}
              >
                {isAr ? "القائد" : "Capitaine"}
              </span>
            )}

            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="text-[#FFE600] text-4xl font-[family-name:var(--font-bebas)] opacity-50 group-hover:opacity-100 transition-opacity">
                #{player.number}
              </div>
              <h3
                className={`text-white font-bold text-lg mt-1 truncate ${
                  isAr ? "font-[family-name:var(--font-cairo)]" : ""
                }`}
              >
                {isAr ? player.name.ar : player.name.fr}
              </h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-0.5">
                {isAr ? player.position.ar : player.position.fr}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/effectif"
          className="border border-[#FFE600]/40 hover:bg-[#FFE600] hover:text-black text-[#FFE600] text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition flex items-center gap-2.5"
        >
          {isAr ? "التشكيلة الكاملة" : "Voir l'effectif complet"}
        </a>
      </div>
    </section>
  );
}
