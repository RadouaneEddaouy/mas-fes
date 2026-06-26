"use client";
import { useState, useEffect } from "react";

export default function Header({ currentLang, changeLang }) {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isAr = currentLang === "ar";

  const navLinks = [
    { id: "#hero", ar: "الرئيسية", fr: "Accueil" },
    { id: "#squad", ar: "التشكيلة", fr: "Effectif" },
    { id: "#results", ar: "آخر النتائج", fr: "Resultats" },
    { id: "#history", ar: "الألقاب", fr: "Palmares" },
    { id: "#partners", ar: "شركاؤنا", fr: "Partenaires" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.id))
      .filter(Boolean);

    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });

        if (intersecting.size === 0) return;

        const topMost = sections.find((section) =>
          intersecting.has(section.id),
        );
        if (topMost) setActiveLink(`#${topMost.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const LangSwitcher = ({ className = "" }) => (
    <div className={`flex items-center gap-2 font-bold text-sm ${className}`}>
      <button
        onClick={() => changeLang("fr")}
        className={`transition-colors ${
          !isAr ? "text-[#FFE600]" : "text-gray-400 hover:text-white"
        }`}
      >
        FR
      </button>
      <span className="text-gray-600">/</span>
      <button
        onClick={() => changeLang("ar")}
        className={`transition-colors ${
          isAr ? "text-[#FFE600]" : "text-gray-400 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl py-3 border-b border-white/10"
          : "bg-gradient-to-b from-black/60 to-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        {/* Logo + nom du club */}
        <a
          href="#hero"
          onClick={() => setActiveLink("#hero")}
          className="flex items-center gap-3 shrink-0"
        >
          <img
            src="/images/mas-logo.png"
            alt="MAS Fes"
            className="w-10 h-10 md:w-11 md:h-11 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`text-white font-bold tracking-wide ${
                isAr
                  ? "text-xs md:text-sm"
                  : "text-[10px] md:text-xs uppercase tracking-widest"
              }`}
            >
              {isAr ? "المغرب الرياضي الفاسي" : "Maghreb de Fes"}
            </span>
            <span className="text-[9px] md:text-[10px] text-[#FFE600] font-semibold tracking-[1.5px] md:tracking-[2px] uppercase">
              {isAr ? "تأسس 1946" : "Fonde en 1946"}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={() => setActiveLink(link.id)}
              className={`relative text-sm font-bold uppercase tracking-wider transition-colors duration-200 py-2 ${
                activeLink === link.id
                  ? "text-[#FFE600]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {isAr ? link.ar : link.fr}
              <span
                className={`absolute ${isAr ? "right-0" : "left-0"} -bottom-0.5 h-[2px] bg-[#FFE600] transition-all duration-300 ${
                  activeLink === link.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <LangSwitcher />
          <span className="w-px h-5 bg-white/15" />
          <a
            href="https://mas.ticketing.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFE600] hover:bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition"
          >
            {isAr ? "التذاكر" : "Billetterie"}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <LangSwitcher />
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label={isAr ? "فتح القائمة" : "Ouvrir le menu"}
            className="flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className="block w-7 h-[2px] bg-white" />
            <span className="block w-7 h-[2px] bg-white" />
            <span
              className="block w-5 h-[2px] bg-white"
              style={
                isAr ? { alignSelf: "flex-start" } : { alignSelf: "flex-end" }
              }
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        <div
          className={`absolute top-0 h-full w-[78%] max-w-[340px]
            bg-[#0a0a0a]
            flex flex-col
            transition-transform duration-300 ease-out
            ${
              isAr
                ? "left-0 border-r border-white/10"
                : "right-0 border-l border-white/10"
            }
            ${
              drawerOpen
                ? "translate-x-0"
                : isAr
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/mas-logo.png"
                alt="MAS Fes"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-bold text-sm">
                {isAr ? "القائمة" : "Menu"}
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label={isAr ? "إغلاق القائمة" : "Fermer le menu"}
              className="text-white/70 hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  setDrawerOpen(false);
                }}
                className={`py-4 border-b border-white/5 text-base font-bold uppercase tracking-wider transition-colors ${
                  activeLink === link.id ? "text-[#FFE600]" : "text-white/85"
                } ${isAr ? "text-right" : "text-left"}`}
              >
                {isAr ? link.ar : link.fr}
              </a>
            ))}
          </nav>

          <div className="mt-auto px-6 py-6 border-t border-white/10">
            <a
              href="https://mas.ticketing.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#FFE600] hover:bg-yellow-400 text-black text-sm font-bold uppercase tracking-widest px-5 py-3.5 rounded-full transition"
            >
              {isAr ? "التذاكر" : "Billetterie"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
