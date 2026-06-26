"use client";
import React from "react";

export default function ProfessionalHonours({ currentLang }) {
  const isAr = currentLang === "ar";

  const honours = [
    {
      years: ["2011"],
      title: { ar: "كأس الكونفدرالية", fr: "Coupe de la Confederation" },
      category: { ar: "قاري", fr: "Continental" },
    },
    {
      years: ["2012"],
      title: { ar: "كأس السوبر الأفريقي", fr: "Super Coupe Africaine" },
      category: { ar: "قاري", fr: "Continental" },
    },
    {
      years: ["1965", "1979", "1983", "1985"],
      title: { ar: "البطولة الاحترافية", fr: "Championnat National" },
      category: { ar: "وطني", fr: "National" },
    },
    {
      years: ["1980", "1988", "2011", "2016"],
      title: { ar: "كأس العرش", fr: "Coupe du Trone" },
      category: { ar: "وطني", fr: "National" },
    },
  ];

  const totalTitles = honours.reduce((sum, h) => sum + h.years.length, 0);

  const TrophyIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 4h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12v3M9 19h6M10 19v-2.5a2 2 0 0 1 .6-1.4l.7-.7a1 1 0 0 1 1.4 0l.7.7a2 2 0 0 1 .6 1.4V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      id="history"
      className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      {/* En-tete */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
          <span className="text-[#FFE600] text-xs font-bold uppercase tracking-[0.2em]">
            {isAr ? "تاريخ محفور بالذهب" : "Une histoire ecrite en or"}
          </span>
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
        </div>
        <h2
          className={`text-white uppercase ${
            isAr
              ? "font-[family-name:var(--font-cairo)] font-black text-3xl md:text-5xl"
              : "font-[family-name:var(--font-bebas)] text-4xl md:text-6xl tracking-wide"
          }`}
        >
          {isAr ? "سجل البطولات" : "Palmares"}
        </h2>
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-4 bg-[#FFE600]/10 border border-[#FFE600]/25 rounded-2xl px-8 py-5">
          <span className="font-[family-name:var(--font-bebas)] text-[#FFE600] text-5xl md:text-6xl leading-none">
            {totalTitles}
          </span>
          <span
            className={`text-white text-sm md:text-base font-bold uppercase tracking-wide leading-tight max-w-[140px] ${
              isAr
                ? "font-[family-name:var(--font-cairo)] text-right"
                : "text-left"
            }`}
          >
            {isAr
              ? "ألقاب رسمية في تاريخ النادي"
              : "Titres officiels dans l'histoire du club"}
          </span>
        </div>
      </div>

      {/* Liste des titres */}
      <div className="flex flex-col gap-4">
        {honours.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center gap-5 bg-[#121214] border border-white/10 hover:border-[#FFE600]/40 rounded-2xl p-6 md:p-7 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 md:w-56 shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#FFE600]/10 flex items-center justify-center shrink-0">
                <TrophyIcon className="w-6 h-6 text-[#FFE600]" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em]">
                  {item.category[currentLang]}
                </span>
                <h3
                  className={`text-white font-bold text-lg ${
                    isAr ? "font-[family-name:var(--font-cairo)]" : ""
                  }`}
                >
                  {item.title[currentLang]}
                </h3>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            <div className="flex flex-wrap gap-2">
              {item.years.map((year) => (
                <span
                  key={year}
                  className="bg-white/5 border border-white/10 text-[#FFE600] font-[family-name:var(--font-bebas)] text-base px-3.5 py-1 rounded-full"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
