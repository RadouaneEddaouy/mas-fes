import React from "react";

export default function Hero({ currentLang }) {
  const content = {
    ar: {
      title: "الموقع  الغير الرسمي لنادي المغرب الرياضي الفاسي",
      subtitle: "The Unofficial MAS Fes Website",
      tag: "النمور الصفر | The Yellow Tigers",
      btnPrimary:
        "شراء تذاكر المباراة القادمة | Buy Tickets (mas.ticketing.ma)",
      btnSecondary: "استكشف تشكيلة الفريق | Explore Squad",
    },
    en: {
      title: "The Unofficial Website of Maghreb Athletic de Fès",
      subtitle: "The Unofficial MAS Fes Website",
      tag: "The Yellow Tigers | النمور الصفر",
      btnPrimary:
        "Buy Tickets | شراء تذاكر المباراة القادمة (mas.ticketing.ma)",
      btnSecondary: "Explore Squad | استكشف تشكيلة الفريق",
    },
  };

  const t = content[currentLang];
  const isAr = currentLang === "ar";

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden pt-32 pb-20"
    >
      <div
        className="absolute inset-0 bg-[url('/images/mas-players.jpg')] bg-cover bg-center bg-no-repeat"
        onError={(e) => {
          e.target.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200')";
        }}
      ></div>

      <div className="absolute inset-0 bg-[#09090b]/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-[52px] font-black text-white tracking-tight leading-tight max-w-4xl">
          {t.title}
        </h1>

        <div
          className="flex items-center justify-center gap-2 mt-4 mb-2 w-full"
          dir={isAr ? "rtl" : "ltr"}
        >
          <span className="w-[3px] h-5 md:h-6 bg-[#ffe600] rounded-full block shadow-[0_0_10px_rgba(255,230,0,0.5)] shrink-0"></span>

          <span className="text-white text-xl md:text-2xl font-black tracking-wide leading-none">
            {t.subtitle}
          </span>
        </div>

        <p className="text-[#ffe600] text-xs md:text-sm font-bold tracking-wide mt-2 mb-10">
          {t.tag}
        </p>

        <div className="flex flex-col gap-4 w-full max-w-lg px-4">
          <a
            href="https://mas.ticketing.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3.5 bg-[#ffe600] text-black font-black text-xs md:text-sm uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(255,230,0,0.45)] hover:shadow-[0_0_40px_rgba(255,230,0,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer"
          >
            {t.btnPrimary}
          </a>

          <a
            href="#squad"
            className="w-full px-6 py-3.5 bg-white/5 text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-center cursor-pointer"
          >
            {t.btnSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
