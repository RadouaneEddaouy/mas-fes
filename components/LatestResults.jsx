"use client";
import React from "react";

export default function LatestResults({ currentLang }) {
  const isAr = currentLang === "ar";

  const matches = [
    {
      opponent: { ar: "الوداد الرياضي", fr: "Wydad AC" },
      logo: "WAC",
      score: "1 - 0",
      date: { ar: "25 يونيو 2026", fr: "25 JUIN 2026" },
      result: "win",
    },
    {
      opponent: { ar: "نهضة بركان", fr: "RS Berkane" },
      logo: "RSB",
      score: "1 - 2",
      date: { ar: "21 يونيو 2026", fr: "21 JUIN 2026" },
      result: "loss",
    },
    {
      opponent: { ar: "الدفاع الحسني الجديدي", fr: "DH Jadida" },
      logo: "DHJ",
      score: "2 - 1",
      date: { ar: "17 يونيو 2026", fr: "17 JUIN 2026" },
      result: "win",
    },
    {
      opponent: { ar: "الفتح الرباطي", fr: "FUS Rabat" },
      logo: "FUS",
      score: "1 - 1",
      date: { ar: "12 يونيو 2026", fr: "12 JUIN 2026" },
      result: "draw",
    },
  ];

  const resultLabel = (result) => {
    if (isAr)
      return result === "win" ? "فوز" : result === "loss" ? "خسارة" : "تعادل";
    return result === "win"
      ? "Victoire"
      : result === "loss"
        ? "Defaite"
        : "Nul";
  };

  return (
    <section id="results" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
          <span className="text-[#FFE600] text-xs font-bold uppercase tracking-[0.2em]">
            {isAr ? "بوتولا برو" : "Botola Pro"}
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
          {isAr ? "آخر النتائج" : "Derniers resultats"}
        </h2>
        <div className="w-20 h-1.5 bg-[#FFE600] mt-4 rounded-full" />
      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
        {matches.map((match, idx) => (
          <div
            key={idx}
            className="snap-center min-w-[260px] md:min-w-0 group relative bg-[#121214] border border-white/10 p-7 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#FFE600]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 text-center">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
                {isAr ? match.date.ar : match.date.fr}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  MAS
                </div>
                <div className="text-2xl font-[family-name:var(--font-bebas)] text-[#FFE600]">
                  {match.score}
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  {match.logo}
                </div>
              </div>

              <div
                className={`text-white font-bold text-base md:text-lg ${
                  isAr ? "font-[family-name:var(--font-cairo)]" : ""
                }`}
              >
                {isAr ? match.opponent.ar : match.opponent.fr}
              </div>

              <div
                className={`mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  match.result === "win"
                    ? "bg-green-500/20 text-green-400"
                    : match.result === "loss"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {resultLabel(match.result)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
