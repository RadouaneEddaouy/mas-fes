"use client";
import { useState } from "react";

export default function Header({ currentLang, changeLang }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  const getLinkClass = (path) =>
    `min-w-[110px] text-center px-4 py-2.5 rounded-full text-xs transition-all duration-300 ${
      activeLink === path
        ? "bg-[#ffe600] text-black font-black shadow-[0_0_20px_rgba(255,230,0,0.25)]"
        : "font-bold text-gray-300 hover:text-white"
    }`;

  const navLinks = [
    { id: "#hero", ar: "الرئيسية", en: "HOME" },
    { id: "#squad", ar: "التشكيلة", en: "MAS SQUAD" },
    { id: "#results", ar: "آخر النتائج", en: "LATEST RESULTS" },
    { id: "#history", ar: "الألقاب", en: "LEGACY" },
    { id: "#partners", ar: "شركاؤنا", en: "PARTNERS" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/40 to-transparent py-8">
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between"
        dir="ltr"
      >
        {/* اللوغو */}
        <div className="flex items-center min-w-[150px]">
          <img
            src="/images/mas-logo.png"
            alt="MAS Logo"
            className="w-16 h-16 object-contain filter drop-shadow-[0_0_20px_rgba(255,230,0,0.3)]"
          />
        </div>

        <nav
          dir={currentLang === "ar" ? "rtl" : "ltr"}
          className="hidden md:flex items-center justify-between gap-1 bg-[#121214]/75 backdrop-blur-2xl px-3 py-2.5 rounded-full border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] min-w-[650px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => setActiveLink(link.id)}
              className={`${getLinkClass(link.id)} ${currentLang === "en" ? "text-sm" : "text-xs"}`}
            >
              {currentLang === "ar" ? link.ar : link.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 min-w-[150px] justify-end">
          <div className="hidden lg:flex items-center gap-2.5 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-black font-mono tracking-widest text-gray-400 uppercase">
              Est. 1946
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#121214] border border-white/10 text-[11px] font-black font-mono tracking-wider text-[#ffe600] hover:bg-[#161618] transition-all cursor-pointer min-w-[125px] justify-between shadow-xl"
            >
              <span>
                {currentLang === "ar" ? "العربية (AR)" : "ENGLISH (EN)"}
              </span>
              <span className="text-[9px] text-gray-500">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 w-40 rounded-xl bg-[#121214] border border-white/10 shadow-2xl overflow-hidden z-50 right-0">
                <button
                  onClick={() => {
                    changeLang("ar");
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-xs font-bold text-gray-400 hover:text-[#ffe600] hover:bg-white/5 cursor-pointer flex items-center justify-between"
                >
                  <span>العربية</span>
                  <span className="text-[10px] text-gray-600 font-mono">
                    AR
                  </span>
                </button>
                <button
                  onClick={() => {
                    changeLang("en");
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-xs font-bold text-gray-400 hover:text-[#ffe600] hover:bg-white/5 cursor-pointer flex items-center justify-between"
                >
                  <span>English</span>
                  <span className="text-[10px] text-gray-600 font-mono">
                    EN
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
