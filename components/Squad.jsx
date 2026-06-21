import React from "react";

export default function Squad({ currentLang }) {
  const players = [
    {
      number: "16",
      position: { ar: "حارس مرمى", en: "Goalkeeper" },
      name: { ar: "صلاح الدين شهاب", en: "Salaheddine Chihab" },
      image: "/images/players/chihab.png",
    },
    {
      number: "9",
      position: { ar: "مهاجم", en: "Centre-Forward" },
      name: { ar: "سفيان بنجديدة", en: "Soufiane Benjdida" },
      image: "/images/players/benjdida.png",
    },
    {
      number: "11",
      position: { ar: "جناح أيسر", en: "Left Winger" },
      name: { ar: "سليمان علوش", en: "Soulyman Allouch" },
      image: "/images/players/allouch.png",
    },
    {
      number: "17",
      position: { ar: "جناح أيمن", en: "Right Winger" },
      name: { ar: "كيفن يامغا", en: "Kevin Yamga" },
      image: "/images/players/yamga.jpg",
    },
    {
      number: "19",
      position: { ar: "وسط ميدان", en: "Central Midfield" },
      name: { ar: "أنس طاهيري", en: "Anas Tahiri" },
      image: "/images/players/tahiri.png",
    },
    {
      number: "8",
      position: { ar: "وسط ميدان", en: "Central Midfield" },
      name: { ar: "أشرف هرماش", en: "Achraf Harmach" },
      image: "/images/players/harmach.png",
    },
    {
      number: "3",
      position: { ar: "مدافع", en: "Centre-Back" },
      name: { ar: "عادل رحايلي", en: "Adil Rhaili" },
      image: "/images/players/rhaili.png",
    },
    {
      number: "21",
      position: { ar: "مدافع", en: "Left-Back" },
      name: { ar: "مروان أوحرو", en: "Marouane Ouhrou" },
      image: "/images/players/ouhrou.png",
    },
  ];

  return (
    <section id="squad" className="w-full max-w-7xl mx-auto px-6 mt-24">
      <div className="flex flex-col items-center mb-16">
        <span className="text-[#ffe600] font-mono text-xs uppercase tracking-widest bg-[#ffe600]/10 px-3 py-1 rounded-full border border-[#ffe600]/20 mb-3">
          {currentLang === "ar" ? "الفريق الأول" : "First Team"}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
          {currentLang === "ar" ? "نجوم المغرب الفاسي" : "MAS Fes Squad"}
        </h2>
        <div className="w-20 h-1.5 bg-[#ffe600] mt-4 rounded-full"></div>
      </div>

      {/* التعديل هنا: استخدام Flex مع تمرير أفقي للموبايل وشبكة للديسكتوب */}
      <div className="flex md:grid md:grid-cols-4 lg:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
        {players.map((player) => (
          <div
            key={player.number}
            className="snap-center min-w-[240px] md:min-w-0 group relative h-80 rounded-3xl overflow-hidden bg-[#121214] border border-white/10 transition-all duration-500 hover:scale-105 hover:border-[#ffe600]/50"
          >
            <img
              src={player.image}
              alt={player.name.en}
              className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-player.png";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="text-[#ffe600] font-black text-3xl font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                #{player.number}
              </div>
              <h3 className="text-white font-bold text-lg mt-1 truncate">
                {currentLang === "ar" ? player.name.ar : player.name.en}
              </h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-0.5">
                {currentLang === "ar" ? player.position.ar : player.position.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
