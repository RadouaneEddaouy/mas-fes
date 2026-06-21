import React from "react";

export default function Partners({ currentLang }) {
  const sponsors = [
    { name: "Daiko", logo: "/images/logos/daiko.avif" },
    { name: "Nike", logo: "/images/logos/nike.png" },
    { name: "TGCC", logo: "/images/logos/tgcc.png" },
  ];

  const partners = [
    "Marsa Maroc",
    "Aïn Ifrane",
    "Pare-Brise Express",
    "Capital Céramique - Vitra",
    "City Club",
  ];

  return (
    <section id="partners" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          {currentLang === "ar" ? "شركاؤنا" : "Our Partners"}
        </h2>
        <p className="text-gray-400 mt-2 text-sm font-medium">
          {currentLang === "ar" ? "يدعموننا" : "They support us"}
        </p>
      </div>

      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsors.map((item, idx) => (
            <div
              key={idx}
              className="h-32 flex items-center justify-center bg-[#121214] border border-white/5 rounded-2xl hover:border-[#ffe600]/30 transition-all p-8"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {partners.map((name, idx) => (
          <div
            key={idx}
            className="h-24 flex items-center justify-center bg-[#121214] border border-white/5 rounded-xl hover:border-[#ffe600]/30 transition-all p-4 cursor-default group"
          >
            <span className="text-gray-600 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
