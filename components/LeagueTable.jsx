"use client";
import React from "react";

export default function LeagueTable({ currentLang }) {
  const isAr = currentLang === "ar";

  const tableData = [
    {
      pos: "01",
      team: { ar: "الجيش الملكي", fr: "AS FAR" },
      played: 27,
      win: 13,
      draw: 14,
      loss: 0,
      gf: 41,
      ga: 17,
      gd: 24,
      pts: 53,
    },
    {
      pos: "02",
      team: { ar: "المغرب الفاسي", fr: "MAS Fes" },
      played: 27,
      win: 14,
      draw: 10,
      loss: 3,
      gf: 36,
      ga: 16,
      gd: 20,
      pts: 52,
    },
    {
      pos: "03",
      team: { ar: "نهضة بركان", fr: "RSB Berkane" },
      played: 27,
      win: 14,
      draw: 9,
      loss: 4,
      gf: 38,
      ga: 24,
      gd: 14,
      pts: 51,
    },
    {
      pos: "04",
      team: { ar: "الرجاء الرياضي", fr: "Raja Casablanca" },
      played: 27,
      win: 14,
      draw: 7,
      loss: 6,
      gf: 34,
      ga: 18,
      gd: 16,
      pts: 49,
    },
    {
      pos: "05",
      team: { ar: "الوداد الرياضي", fr: "Wydad AC" },
      played: 27,
      win: 13,
      draw: 4,
      loss: 10,
      gf: 37,
      ga: 26,
      gd: 11,
      pts: 43,
    },
    {
      pos: "06",
      team: { ar: "الدفاع الحسني الجديدي", fr: "Difaa El Jadida" },
      played: 27,
      win: 9,
      draw: 11,
      loss: 7,
      gf: 26,
      ga: 28,
      gd: -2,
      pts: 38,
    },
    {
      pos: "07",
      team: { ar: "إتحاد طنجة", fr: "Ittihad Tanger" },
      played: 27,
      win: 8,
      draw: 11,
      loss: 8,
      gf: 24,
      ga: 28,
      gd: -4,
      pts: 35,
    },
    {
      pos: "08",
      team: { ar: "الكوكب المراكشي", fr: "Kawkab Marrakech" },
      played: 27,
      win: 8,
      draw: 9,
      loss: 10,
      gf: 25,
      ga: 24,
      gd: 1,
      pts: 33,
    },
    {
      pos: "09",
      team: { ar: "الفتح الرباطي", fr: "FUS Rabat" },
      played: 27,
      win: 8,
      draw: 9,
      loss: 10,
      gf: 28,
      ga: 33,
      gd: -5,
      pts: 33,
    },
    {
      pos: "10",
      team: { ar: "النادي المكناسي", fr: "COD Meknes" },
      played: 27,
      win: 8,
      draw: 8,
      loss: 11,
      gf: 18,
      ga: 27,
      gd: -9,
      pts: 32,
    },
    {
      pos: "11",
      team: { ar: "حسنية أكادير", fr: "Hassania Agadir" },
      played: 27,
      win: 8,
      draw: 7,
      loss: 12,
      gf: 25,
      ga: 35,
      gd: -10,
      pts: 31,
    },
    {
      pos: "12",
      team: { ar: "نهضة الزمامرة", fr: "Renaissance Zemamra" },
      played: 27,
      win: 8,
      draw: 6,
      loss: 13,
      gf: 26,
      ga: 35,
      gd: -9,
      pts: 30,
    },
    {
      pos: "13",
      team: { ar: "أولمبيك الدشيرة", fr: "Olympique Dcheira" },
      played: 27,
      win: 6,
      draw: 8,
      loss: 13,
      gf: 25,
      ga: 36,
      gd: -11,
      pts: 26,
    },
    {
      pos: "14",
      team: {
        ar: "إتحاد يعقوب المنصور",
        fr: "Union Sportive Yacoub El Mansour",
      },
      played: 27,
      win: 6,
      draw: 8,
      loss: 13,
      gf: 30,
      ga: 40,
      gd: -10,
      pts: 26,
    },
    {
      pos: "15",
      team: { ar: "إتحاد تواركة", fr: "Union Touarga" },
      played: 27,
      win: 4,
      draw: 12,
      loss: 11,
      gf: 27,
      ga: 37,
      gd: -10,
      pts: 24,
    },
    {
      pos: "16",
      team: { ar: "أولمبيك آسفي", fr: "OC Safi" },
      played: 27,
      win: 3,
      draw: 11,
      loss: 13,
      gf: 21,
      ga: 37,
      gd: -16,
      pts: 20,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
          <span className="text-[#FFE600] text-xs font-bold uppercase tracking-[0.2em]">
            {isAr ? "الموسم 2025/2026" : "Saison 2025/2026"}
          </span>
          <span className="block w-6 h-[2px] bg-[#FFE600]" />
        </div>
        <h2
          className={`text-white uppercase text-center ${
            isAr
              ? "font-[family-name:var(--font-cairo)] font-black text-2xl md:text-4xl"
              : "font-[family-name:var(--font-bebas)] text-3xl md:text-5xl tracking-wide"
          }`}
        >
          {isAr ? "ترتيب البطولة الاحترافية" : "Classement Botola Pro"}
        </h2>
        <div className="w-20 h-1.5 bg-[#FFE600] mt-4 rounded-full" />
      </div>

      <div className="overflow-x-auto bg-[#121214]/50 border border-white/10 rounded-2xl p-4">
        <table className="w-full text-white text-sm">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2 text-start">
                {isAr ? "النادي" : "Club"}
              </th>
              <th className="py-3 px-2">{isAr ? "لعب" : "MJ"}</th>
              <th className="py-3 px-2">{isAr ? "ف" : "G"}</th>
              <th className="py-3 px-2">{isAr ? "ت" : "N"}</th>
              <th className="py-3 px-2">{isAr ? "خ" : "P"}</th>
              <th className="py-3 px-2">{isAr ? "له" : "BP"}</th>
              <th className="py-3 px-2">{isAr ? "عليه" : "BC"}</th>
              <th className="py-3 px-2">+/-</th>
              <th className="py-3 px-2 text-[#FFE600]">
                {isAr ? "النقاط" : "Pts"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              const isMas = row.team.fr === "MAS Fes";
              return (
                <tr
                  key={row.pos}
                  className={`border-b border-white/5 ${
                    isMas ? "bg-[#FFE600]/10" : ""
                  }`}
                >
                  <td className="py-3 px-2 text-center font-[family-name:var(--font-bebas)] text-base">
                    {row.pos}
                  </td>
                  <td
                    className={`py-3 px-2 font-bold ${
                      isAr ? "font-[family-name:var(--font-cairo)]" : ""
                    } ${isMas ? "text-[#FFE600]" : ""}`}
                  >
                    {isAr ? row.team.ar : row.team.fr}
                  </td>
                  <td className="py-3 px-2 text-center">{row.played}</td>
                  <td className="py-3 px-2 text-center">{row.win}</td>
                  <td className="py-3 px-2 text-center">{row.draw}</td>
                  <td className="py-3 px-2 text-center">{row.loss}</td>
                  <td className="py-3 px-2 text-center">{row.gf}</td>
                  <td className="py-3 px-2 text-center">{row.ga}</td>
                  <td className="py-3 px-2 text-center">
                    {row.gd > 0 ? `+${row.gd}` : row.gd}
                  </td>
                  <td className="py-3 px-2 text-center font-[family-name:var(--font-bebas)] text-base text-[#FFE600]">
                    {row.pts}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 text-[11px] text-center mt-4">
        {isAr
          ? "بعد 27 جولة من البطولة الاحترافية موسم 2025/2026"
          : "Apres 27 journees de la saison 2025/2026"}
      </p>
    </section>
  );
}
