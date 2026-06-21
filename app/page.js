"use client";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MatchCenter from "../components/MatchCenter";
import Squad from "../components/Squad";
import StadiumSection from "../components/StadiumSection";
import Partners from "../components/Partners";
import LeagueTable from "../components/LeagueTable";
import TitlesSection from "../components/TitlesSection";
import LatestResults from "../components/LatestResults";

import Footer from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState("ar");

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen bg-masZinc text-white overflow-x-hidden scroll-smooth"
    >
      <Header currentLang={lang} changeLang={setLang} />
      <Hero currentLang={lang} />
      <MatchCenter currentLang={lang} />
      <Squad currentLang={lang} />
      <LatestResults currentLang={lang} />
      <LeagueTable currentLang={lang} />
      <TitlesSection currentLang={lang} />
      <StadiumSection currentLang={lang} />
      <Partners currentLang={lang} />
      <Footer currentLang={lang} />
    </main>
  );
}
