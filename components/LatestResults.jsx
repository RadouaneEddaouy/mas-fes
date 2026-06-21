import React from "react";

export default function LatestResults({ currentLang }) {
  const matches = [
    {
      opponent: { ar: "النادي المكناسي", en: "CODM Meknes" },
      logo: "CODM",
      score: "2 - 0",
      date: "17 JUN 2026",
      result: "win",
    },
    {
      opponent: { ar: "حسنية أكادير", en: "Hassania Agadir" },
      logo: "HUSA",
      score: "1 - 1",
      date: "10 JUN 2026",
      result: "draw",
    },
    {
      opponent: { ar: "الوداد الرياضي", en: "Wydad AC" },
      logo: "WAC",
      score: "3 - 1",
      date: "03 JUN 2026",
      result: "win",
    },
  ];

  return (
    <section id="results" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
          {currentLang === "ar" ? "آخر النتائج" : "Latest Results"}
        </h2>
        <div className="w-20 h-1.5 bg-[#ffe600] mt-4 rounded-full"></div>
      </div>

      {/* التعديل هنا: استخدام Flex للتحكم في التمرير الأفقي */}
      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
        {matches.map((match, idx) => (
          <div
            key={idx}
            className="snap-center min-w-[280px] md:min-w-0 group relative bg-[#121214] border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#ffe600]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffe600]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 text-center">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
                {match.date}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center font-bold text-white">
                  MAS
                </div>
                <div className="text-2xl font-black text-[#ffe600]">
                  {match.score}
                </div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center font-bold text-white">
                  {match.logo}
                </div>
              </div>

              <div className="text-white font-bold text-lg">
                {currentLang === "ar" ? match.opponent.ar : match.opponent.en}
              </div>

              <div
                className={`mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase ${
                  match.result === "win"
                    ? "bg-green-500/20 text-green-400"
                    : match.result === "loss"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {currentLang === "ar"
                  ? match.result === "win"
                    ? "فوز"
                    : match.result === "loss"
                      ? "خسارة"
                      : "تعادل"
                  : match.result === "win"
                    ? "Win"
                    : match.result === "loss"
                      ? "Loss"
                      : "Draw"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
