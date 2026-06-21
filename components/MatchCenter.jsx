"use client";
import { useState, useEffect } from "react";

export default function MatchCenter({ currentLang }) {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00");

  useEffect(() => {
    const targetDate = new Date("2026-06-25T18:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
        );
      } else {
        setTimeLeft("00:00:00:00");
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 mt-8 md:mt-0 z-30">
      <div className="bg-[#16161a]/85 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)] text-center">
        <h2 className="text-white text-lg font-black uppercase tracking-[0.2em] mb-1">
          Match Center
        </h2>
        <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
          {currentLang === "ar" ? "المباراة القادمة" : "Next match"}
        </p>

        <div className="flex items-center justify-between px-2 md:px-8 mb-6">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/mas-logo.png"
              alt="MAS Fes"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-bold text-xs">MAS Fes</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#ffe600] font-black text-sm bg-[#ffe600]/10 px-3 py-0.5 rounded-full border border-[#ffe600]/20">
              VS
            </span>
            <p className="text-gray-300 text-[12px] font-bold mt-2 tracking-wide">
              25 Jun, 2026 • 18:00
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/WAC.png"
              alt="Wydad AC"
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-bold text-xs">Wydad AC</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="text-[#ffe600] text-3xl md:text-4xl font-black font-mono tracking-[0.1em] drop-shadow-[0_0_10px_rgba(255,230,0,0.4)]">
            {timeLeft}
          </div>
        </div>
      </div>
    </section>
  );
}
