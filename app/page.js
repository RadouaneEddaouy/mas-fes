"use client";
import { useState } from "react";
import { Bebas_Neue, Cairo } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MatchCenter from "../components/MatchCenter";
import Squad from "../components/Squad";
import StadiumSection from "../components/StadiumSection";
import Partners from "../components/Partners";
import LeagueTable from "../components/LeagueTable";
import TitlesSection from "../components/TitlesSection";
import LatestResults from "../components/LatestResults";
import PartnerCTA from "../components/PartnerCTA";

import Footer from "../components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const cairo = Cairo({
  weight: ["600", "800", "900"],
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export default function Home() {
  const [lang, setLang] = useState("ar");

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`relative min-h-screen bg-masZinc text-white overflow-x-hidden scroll-smooth ${bebas.variable} ${cairo.variable}`}
    >
      {/* طبقة الزليج الخلفية: ثابتة، تغطي كامل الصفحة، خلف كل المحتوى */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cg fill=%22none%22 stroke=%22white%22 stroke-width=%221.2%22%3E%3Cpath d=%22M60 0 L90 30 L90 90 L60 120 L30 90 L30 30 Z%22/%3E%3Cpath d=%22M0 30 L0 90 L30 90 M0 30 L30 30%22/%3E%3Cpath d=%22M120 30 L120 90 L90 90 M120 30 L90 30%22/%3E%3Cpath d=%22M30 30 L0 0%22/%3E%3Cpath d=%22M90 30 L120 0%22/%3E%3Cpath d=%22M30 90 L0 120%22/%3E%3Cpath d=%22M90 90 L120 120%22/%3E%3Cpath d=%22M55 55 L60 50 L65 55 L60 60 Z%22/%3E%3C/g%3E%3C/svg%3E')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
          opacity: 0.05,
        }}
      />

      {/* محتوى الصفحة: فوق طبقة الزليج */}
      <div className="relative z-10">
        <Header currentLang={lang} changeLang={setLang} />
        <Hero currentLang={lang} />
        <MatchCenter currentLang={lang} />
        <Squad currentLang={lang} />
        <LatestResults currentLang={lang} />
        <LeagueTable currentLang={lang} />
        <TitlesSection currentLang={lang} />
        <StadiumSection currentLang={lang} />
        <Partners currentLang={lang} />
        <PartnerCTA currentLang={lang} />
        <Footer currentLang={lang} />
      </div>
    </main>
  );
}
