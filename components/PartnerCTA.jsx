"use client";
import React from "react";

export default function PartnerCTA({ currentLang }) {
  const isAr = currentLang === "ar";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 mt-10 md:mt-32 mb-24">
      <div
        dir={isAr ? "rtl" : "ltr"}
        className="relative w-full"
        style={{ minHeight: "340px" }}
      >
        <div
          className="absolute inset-0 rounded-[2rem] overflow-hidden"
          style={{
            background:
              "linear-gradient(110deg, #1a1605 0%, #0a0a0a 55%, #0a0a0a 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cg fill=%22none%22 stroke=%22%23FFE600%22 stroke-width=%221.2%22%3E%3Cpath d=%22M60 0 L90 30 L90 90 L60 120 L30 90 L30 30 Z%22/%3E%3Cpath d=%22M0 30 L0 90 L30 90 M0 30 L30 30%22/%3E%3Cpath d=%22M120 30 L120 90 L90 90 M120 30 L90 30%22/%3E%3Cpath d=%22M30 30 L0 0%22/%3E%3Cpath d=%22M90 30 L120 0%22/%3E%3Cpath d=%22M30 90 L0 120%22/%3E%3Cpath d=%22M90 90 L120 120%22/%3E%3Cpath d=%22M55 55 L60 50 L65 55 L60 60 Z%22/%3E%3C/g%3E%3C/svg%3E')",
              backgroundRepeat: "repeat",
              backgroundSize: "120px 120px",
              opacity: 0.12,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isAr
                ? "radial-gradient(circle at 25% 50%, rgba(255,230,0,0.1), transparent 60%)"
                : "radial-gradient(circle at 75% 50%, rgba(255,230,0,0.1), transparent 60%)",
            }}
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch min-h-[340px]">
          <div className="relative w-full md:w-[40%] shrink-0 h-[200px] md:h-[300px]">
            <img
              src="/images/CTAplayer2.png"
              alt={isAr ? "لاعبة المغرب الفاسي" : "Joueuse MAS Fes"}
              className={`absolute z-10 w-auto object-contain bottom-0 h-[85%] md:h-[115%] max-h-[170px] md:max-h-[320px] ${
                isAr ? "right-0" : "left-0"
              }`}
              style={{
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.5))",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <img
              src="/images/CTAplayer1.png"
              alt={isAr ? "لاعب المغرب الفاسي" : "Joueur MAS Fes"}
              className={`absolute z-20 w-auto object-contain bottom-0 h-[95%] md:h-[145%] max-h-[190px] md:max-h-[460px] ${
                isAr ? "left-[5%]" : "right-[5%]"
              }`}
              style={{
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.55))",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 md:px-4 py-10 md:py-12 relative z-0">
            <h2
              className={`text-white uppercase mb-4 ${
                isAr
                  ? "font-[family-name:var(--font-cairo)] font-black text-2xl md:text-4xl leading-tight"
                  : "font-[family-name:var(--font-bebas)] text-3xl md:text-5xl leading-[1.05] tracking-wide"
              }`}
            >
              {isAr ? (
                <>
                  كن شريكاً{" "}
                  <span style={{ color: "#FFE600" }}>للمغرب الفاسي</span>
                </>
              ) : (
                <>
                  Devenez{" "}
                  <span style={{ color: "#FFE600" }}>partenaire du MAS</span>
                </>
              )}
            </h2>

            <p
              className={`text-gray-300 max-w-md mb-6 ${
                isAr
                  ? "font-[family-name:var(--font-cairo)] font-semibold text-sm md:text-base leading-relaxed"
                  : "text-sm md:text-base leading-relaxed"
              }`}
            >
              {isAr
                ? "انضم إلى شبكة شركاء النادي واستفد من فرص الظهور والارتباط بهوية المغرب الرياضي الفاسي وجماهيره."
                : "Rejoignez le reseau de partenaires du club et profitez d'une visibilite forte aux couleurs du Maghreb de Fes."}
            </p>

            <a
              href="#partners-contact"
              className="inline-flex items-center gap-3 group w-fit"
            >
              <span
                className="w-11 h-11 rounded-full border border-[#FFE600]/50 flex items-center justify-center text-[#FFE600] group-hover:bg-[#FFE600] group-hover:text-black transition-all"
                style={{ transform: isAr ? "scaleX(-1)" : "none" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 7L7 17M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-[#FFE600] transition-colors">
                {isAr ? "اقرأ المزيد" : "En savoir plus"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
