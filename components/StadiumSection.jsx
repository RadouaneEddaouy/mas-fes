import React from "react";

export default function StadiumSection({ currentLang }) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] mt-24 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stadium-fes.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      <div
        className="relative z-10 text-center px-6"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          {currentLang === "ar" ? "قلعة النمور" : "The Tigers' Fortress"}
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
          {currentLang === "ar"
            ? "المركب الرياضي لفاس، ملعبنا الذي يتسع لـ 45,000 مناصر، حيث نصنع التاريخ في كل مباراة."
            : "The Fez Sports Complex, our home with a capacity of 45,000 fans, where we make history every match."}
        </p>

        <div className="inline-block bg-[#ffe600]/10 border border-[#ffe600]/30 px-8 py-4 rounded-2xl">
          <div className="text-[#ffe600] text-3xl md:text-4xl font-black font-mono">
            45,000
          </div>
          <div className="text-white text-xs uppercase tracking-widest mt-1">
            {currentLang === "ar" ? "سعة الملعب" : "Stadium Capacity"}
          </div>
        </div>
      </div>
    </section>
  );
}
