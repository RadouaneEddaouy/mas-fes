import React from "react";

export default function LeagueTable({ currentLang }) {
  const tableData = [
    {
      pos: "01",
      team: { ar: "المغرب الفاسي", en: "MAS Fez" },
      played: 25,
      win: 13,
      draw: 10,
      loss: 2,
      gf: 34,
      ga: 14,
      gd: 20,
      pts: 49,
    },
    {
      pos: "02",
      team: { ar: "الجيش الملكي", en: "AS FAR" },
      played: 25,
      win: 13,
      draw: 10,
      loss: 2,
      gf: 37,
      ga: 15,
      gd: 22,
      pts: 49,
    },
    {
      pos: "03",
      team: { ar: "نهضة بركان", en: "RS Berkane" },
      played: 25,
      win: 13,
      draw: 8,
      loss: 4,
      gf: 34,
      ga: 21,
      gd: 13,
      pts: 47,
    },
    {
      pos: "04",
      team: { ar: "الرجاء الرياضي", en: "Raja CA" },
      played: 25,
      win: 13,
      draw: 7,
      loss: 5,
      gf: 31,
      ga: 15,
      gd: 16,
      pts: 46,
    },
    {
      pos: "05",
      team: { ar: "الوداد الرياضي", en: "Wydad AC" },
      played: 25,
      win: 13,
      draw: 4,
      loss: 8,
      gf: 37,
      ga: 24,
      gd: 13,
      pts: 43,
    },
    {
      pos: "06",
      team: { ar: "الفتح الرباطي", en: "FUS Rabat" },
      played: 25,
      win: 9,
      draw: 6,
      loss: 8,
      gf: 28,
      ga: 29,
      gd: -1,
      pts: 33,
    },
    {
      pos: "07",
      team: { ar: "إتحاد طنجة", en: "IRT Tanger" },
      played: 25,
      win: 7,
      draw: 11,
      loss: 7,
      gf: 23,
      ga: 26,
      gd: -3,
      pts: 32,
    },
    {
      pos: "08",
      team: { ar: "الدفاع الحسني الجديدي", en: "DHJ El Jadida" },
      played: 25,
      win: 7,
      draw: 11,
      loss: 7,
      gf: 23,
      ga: 27,
      gd: -4,
      pts: 32,
    },
    {
      pos: "09",
      team: { ar: "النادي المكناسي", en: "CODM Meknes" },
      played: 25,
      win: 8,
      draw: 7,
      loss: 10,
      gf: 17,
      ga: 25,
      gd: -8,
      pts: 31,
    },
    {
      pos: "10",
      team: { ar: "الكوكب المراكشي", en: "KAC Marrakech" },
      played: 25,
      win: 9,
      draw: 3,
      loss: 9,
      gf: 23,
      ga: 22,
      gd: 1,
      pts: 30,
    },
    {
      pos: "11",
      team: { ar: "نهضة الزمامرة", en: "RCAZ Zemamra" },
      played: 25,
      win: 8,
      draw: 5,
      loss: 12,
      gf: 25,
      ga: 33,
      gd: -8,
      pts: 29,
    },
    {
      pos: "12",
      team: { ar: "حسنية أكادير", en: "HUSA Agadir" },
      played: 25,
      win: 7,
      draw: 6,
      loss: 12,
      gf: 24,
      ga: 35,
      gd: -11,
      pts: 27,
    },
    {
      pos: "13",
      team: { ar: "إتحاد تواركة", en: "UTS Touarga" },
      played: 25,
      win: 4,
      draw: 12,
      loss: 9,
      gf: 26,
      ga: 34,
      gd: -8,
      pts: 24,
    },
    {
      pos: "14",
      team: { ar: "أولمبيك الدشيرة", en: "OD Dcheira" },
      played: 25,
      win: 4,
      draw: 8,
      loss: 13,
      gf: 21,
      ga: 36,
      gd: -15,
      pts: 20,
    },
    {
      pos: "15",
      team: { ar: "إتحاد يعقوب المنصور", en: "UYM Rabat" },
      played: 25,
      win: 4,
      draw: 8,
      loss: 13,
      gf: 27,
      ga: 39,
      gd: -12,
      pts: 20,
    },
    {
      pos: "16",
      team: { ar: "أولمبيك آسفي", en: "OCS Safi" },
      played: 25,
      win: 3,
      draw: 10,
      loss: 12,
      gf: 20,
      ga: 35,
      gd: -15,
      pts: 19,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-widest text-center">
        {currentLang === "ar"
          ? "ترتيب البطولة الاحترافية"
          : "Botola Pro Standings"}
      </h2>
      <div className="overflow-x-auto bg-[#121214]/50 border border-white/10 rounded-2xl p-4">
        <table className="w-full text-white text-sm">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2 text-start">
                {currentLang === "ar" ? "النادي" : "Club"}
              </th>
              <th className="py-3 px-2">
                {currentLang === "ar" ? "لعب" : "P"}
              </th>
              <th className="py-3 px-2">{currentLang === "ar" ? "ف" : "W"}</th>
              <th className="py-3 px-2">{currentLang === "ar" ? "ت" : "D"}</th>
              <th className="py-3 px-2">{currentLang === "ar" ? "خ" : "L"}</th>
              <th className="py-3 px-2">
                {currentLang === "ar" ? "له" : "GF"}
              </th>
              <th className="py-3 px-2">
                {currentLang === "ar" ? "عليه" : "GA"}
              </th>
              <th className="py-3 px-2">+/-</th>
              <th className="py-3 px-2 text-[#ffe600]">
                {currentLang === "ar" ? "النقاط" : "PTS"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.pos}
                className={`border-b border-white/5 ${row.team.ar === "المغرب الفاسي" ? "bg-[#ffe600]/10" : ""}`}
              >
                <td className="py-3 px-2 text-center font-mono">{row.pos}</td>
                <td className="py-3 px-2 font-bold">
                  {currentLang === "ar" ? row.team.ar : row.team.en}
                </td>
                <td className="py-3 px-2 text-center">{row.played}</td>
                <td className="py-3 px-2 text-center">{row.win}</td>
                <td className="py-3 px-2 text-center">{row.draw}</td>
                <td className="py-3 px-2 text-center">{row.loss}</td>
                <td className="py-3 px-2 text-center">{row.gf}</td>
                <td className="py-3 px-2 text-center">{row.ga}</td>
                <td className="py-3 px-2 text-center">{row.gd}</td>
                <td className="py-3 px-2 text-center font-black text-[#ffe600]">
                  {row.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
