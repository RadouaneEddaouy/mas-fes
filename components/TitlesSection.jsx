import React from "react";

export default function ProfessionalHonours({ currentLang }) {
  const honours = [
    {
      year: "2011",
      title: { ar: "كأس الكونفدرالية", en: "CAF Confederation Cup" },
      category: "Continental",
    },
    {
      year: "2012",
      title: { ar: "كأس السوبر الأفريقي", en: "CAF Super Cup" },
      category: "Continental",
    },
    {
      year: "1965, 1979, 1983, 1985",
      title: { ar: "البطولة الاحترافية", en: "Moroccan League" },
      category: "National",
    },
    {
      year: "1980, 1988, 2011, 2016",
      title: { ar: "كأس العرش", en: "Moroccan Throne Cup" },
      category: "National",
    },
  ];

  return (
    <section
      id="history"
      className="w-full max-w-7xl mx-auto px-6 py-32 bg-[#0a0a0a]"
    >
      <div className="mb-20 border-l-4 border-[#ffe600] pl-6">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
          {currentLang === "ar" ? "سجل البطولات" : "Legacy"}
        </h2>
        <p className="text-[#ffe600] text-sm tracking-[0.3em] uppercase mt-2 font-bold">
          {currentLang === "ar"
            ? "تاريخ محفور بالذهب"
            : "History etched in gold"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {honours.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0f0f0f] p-10 hover:bg-[#141414] transition-colors duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[#ffe600] font-mono text-xl font-bold">
                {item.year}
              </span>
              <span className="text-white/20 text-xs uppercase tracking-widest">
                {item.category}
              </span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2 group-hover:pl-4 transition-all duration-300">
              {currentLang === "ar" ? item.title.ar : item.title.en}
            </h3>
            <div className="w-12 h-0.5 bg-[#ffe600] mt-4"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
