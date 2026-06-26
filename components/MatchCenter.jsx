"use client";
import { useState, useEffect } from "react";

export default function MatchCenter({ currentLang }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const isAr = currentLang === "ar";

  const match = {
    opponent: {
      ar: "الاتحاد الرياضي يعقوب المنصور",
      fr: "US Yacoub El Mansour",
    },
    opponentLogo: "/images/usym.png",
    date: new Date("2026-06-28T18:00:00"),
    venue: { ar: "المركب الرياضي لفاس", fr: "Complexe Sportif de Fes" },
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = match.date - now;

      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const formattedDate = match.date.toLocaleDateString(
    isAr ? "ar-MA" : "fr-FR",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
  const formattedTime = match.date.toLocaleTimeString(
    isAr ? "ar-MA" : "fr-FR",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );

  const units = [
    { value: timeLeft.d, ar: "ايام", fr: "jours" },
    { value: timeLeft.h, ar: "ساعات", fr: "heures" },
    { value: timeLeft.m, ar: "دقائق", fr: "min" },
    { value: timeLeft.s, ar: "ثواني", fr: "sec" },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 mt-8 md:mt-0 z-30">
      <div className="relative bg-[#0a0a0a] border border-[#FFE600]/15 rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]">
        <div className="h-1 w-full bg-[#FFE600]" />

        <div className="p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-1">
            <span className="block w-6 h-[2px] bg-[#FFE600]" />
            <h2
              className={`text-white uppercase tracking-[0.15em] ${
                isAr
                  ? "font-[family-name:var(--font-cairo)] font-extrabold text-base"
                  : "font-[family-name:var(--font-bebas)] text-2xl tracking-[0.1em]"
              }`}
            >
              {isAr ? "مركز المباراة" : "Match center"}
            </h2>
            <span className="block w-6 h-[2px] bg-[#FFE600]" />
          </div>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            {isAr ? "المباراة القادمة" : "Prochain match"}
          </p>

          <div className="flex items-center justify-between px-2 md:px-10 mb-6">
            <div className="flex flex-col items-center gap-2 w-24">
              <img
                src="/images/mas-logo.png"
                alt="MAS Fes"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <span className="text-white font-bold text-xs md:text-sm">
                {isAr ? "المغرب الفاسي" : "MAS Fes"}
              </span>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <span className="text-[#FFE600] font-black text-sm bg-[#FFE600]/10 px-3 py-0.5 rounded-full border border-[#FFE600]/20">
                VS
              </span>
              <p className="text-gray-300 text-[11px] md:text-xs font-bold mt-2 tracking-wide whitespace-nowrap">
                {formattedDate} • {formattedTime}
              </p>
              <p className="text-gray-500 text-[10px] mt-1">
                {match.venue[currentLang]}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 w-24">
              <img
                src={match.opponentLogo}
                alt={match.opponent.fr}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <span className="text-white font-bold text-xs md:text-sm text-center leading-tight">
                {match.opponent[currentLang]}
              </span>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10">
            <div className="flex items-center justify-center gap-3 md:gap-5">
              {units.map((u, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className={`text-[#FFE600] text-3xl md:text-4xl tabular-nums tracking-wide drop-shadow-[0_0_12px_rgba(255,230,0,0.35)] ${
                      isAr
                        ? "font-[family-name:var(--font-cairo)] font-extrabold"
                        : "font-[family-name:var(--font-bebas)] font-normal"
                    }`}
                  >
                    {String(u.value).padStart(2, "0")}
                  </span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {u[currentLang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
