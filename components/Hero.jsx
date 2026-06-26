"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const newsItems = [
  {
    id: 1,
    img: "match1.webp",
    ar: {
      title: "فوز ثمين خارج الديار على الوداد",
      description:
        "المغرب الفاسي يفوز 1-0 على الوداد الرياضي ويرتقي لـ52 نقطة في صراع محتدم على اللقب.",
    },
    fr: {
      title: "Victoire precieuse a Casablanca",
      description:
        "Le MAS s'impose 1-0 face au Wydad et grimpe a 52 points dans une course au titre relancee.",
    },
  },
  {
    id: 2,
    img: "match2.jpg",
    ar: {
      title: "عثرة قاسية أمام نهضة بركان",
      description:
        "خسارة 2-1 على أرض فاس أمام المنافس القاري، قبل أن يرد الفريق بقوة في الجولة التالية.",
    },
    fr: {
      title: "Revers a domicile face a Berkane",
      description:
        "Defaite 2-1 contre le rival continental, avant une reaction immediate des Tigres.",
    },
  },
  {
    id: 3,
    img: "match5.webp",
    ar: {
      title: "ثلاث نقاط ثمينة أمام الجديدي",
      description:
        "فوز 2-1 على الدفاع الحسني الجديدي في الجولة 25، ليعود الفريق لمقدمة الترتيب.",
    },
    fr: {
      title: "Trois points precieux face a El Jadida",
      description:
        "Victoire 2-1 contre le DHJ lors de la 25e journee, qui relance les Tigres dans la course au titre.",
    },
  },
  {
    id: 4,
    img: "match4.jpg",
    ar: {
      title: "تعادل بالقسط أمام الفتح الرباطي",
      description:
        "تعادل 1-1 خارج الديار، نقطة مهمة للحفاظ على الزخم في سباق اللقب.",
    },
    fr: {
      title: "Partage des points a Rabat",
      description:
        "Match nul 1-1 a l'exterieur, un point precieux pour garder la dynamique intacte.",
    },
  },
];

export default function Hero({ currentLang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAr = currentLang === "ar";

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      <Swiper
        key={currentlang}
        dir={isAr ? "rtl" : "ltr"}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        navigation={{ nextEl: ".custom-next" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide
            key={`${item.id}-${index}`}
            className="relative w-full h-full"
          >
            {item.img && (
              <img
                src={`/images/${item.img}`}
                className="w-full h-full object-cover"
                alt="news"
              />
            )}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.85) 28%, transparent 60%)",
              }}
            />

            <div
              className="hidden md:block absolute left-0 bottom-0 w-[6px] z-[3]"
              style={{ height: "220px", background: "#FFE600" }}
            />

            <div
              className={`absolute z-10 left-0 right-0 bottom-0
                px-6 pb-28 md:px-16 md:pb-24
                ${isAr ? "text-right" : "text-left"}`}
            >
              <div
                className={`max-w-2xl ${isAr ? "mr-0 ml-auto" : "ml-0 mr-auto"}`}
              >
                <div
                  className={`flex items-center gap-2.5 mb-3 md:mb-4 ${
                    isAr ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isAr && (
                    <span
                      className="block w-7 h-[3px] shrink-0"
                      style={{ background: "#FFE600" }}
                    />
                  )}
                  <span
                    className="uppercase font-bold tracking-[2.5px] text-[11px] md:text-sm whitespace-nowrap"
                    style={{ color: "#FFE600" }}
                  >
                    {isAr ? "آخر الأخبار" : "Actualite"}
                  </span>
                  {isAr && (
                    <span
                      className="block w-7 h-[3px] shrink-0"
                      style={{ background: "#FFE600" }}
                    />
                  )}
                </div>

                <h1
                  className={`text-white uppercase mb-3 md:mb-4 ${
                    isAr
                      ? "font-[family-name:var(--font-cairo)] font-black text-3xl md:text-5xl leading-[1.15]"
                      : "font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-[0.92] tracking-wide"
                  }`}
                >
                  {item[currentLang].title}
                </h1>

                <p
                  className={`max-w-xl line-clamp-3 ${
                    isAr
                      ? "font-[family-name:var(--font-cairo)] font-semibold text-sm md:text-lg leading-[1.7] text-gray-200"
                      : "text-sm md:text-lg leading-relaxed text-gray-300"
                  }`}
                >
                  {item[currentLang].description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`absolute z-20 left-0 right-0 bottom-0
          px-6 pb-8 md:px-16 md:pb-14
          flex flex-col gap-4
          ${isAr ? "items-end" : "items-start"} md:items-end`}
      >
        <div className={`flex gap-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <a
            href="https://mas.ticketing.ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="bg-black/70 backdrop-blur-md border border-[#ffe600] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#ffe600] hover:text-black transition flex items-center gap-2.5">
              <img
                src="/images/mas-logo.png"
                className="w-4 h-4 md:w-5 md:h-5"
                alt=""
              />
              <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap">
                {isAr ? "التذاكر" : "Billetterie"}
              </span>
            </button>
          </a>
          <a
            href="#actualites"
            className="bg-[#ffe600] hover:bg-yellow-500 text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full transition flex items-center gap-2.5"
          >
            <img
              src="/images/mas-logo.png"
              className="w-4 h-4 md:w-5 md:h-5"
              alt=""
            />
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap">
              {isAr ? "كل الأخبار" : "Actualites"}
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white">
          <span className="text-xs font-bold tracking-wider whitespace-nowrap">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(newsItems.length).padStart(2, "0")}
          </span>
          <div className="w-[140px] h-[3px] bg-white/25">
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${((activeIndex + 1) / newsItems.length) * 100}%`,
                background: "#FFE600",
              }}
            />
          </div>
          <button className="custom-next text-xs font-bold uppercase tracking-widest hover:text-[#ffe600] cursor-pointer whitespace-nowrap">
            {isAr ? "التالي" : "Suivant"}
          </button>
        </div>
      </div>
    </div>
  );
}
