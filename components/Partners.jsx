"use client";
import React, { useRef, useEffect, useState } from "react";

const sponsors = [
  {
    name: "Nike",
    logo: "/images/logos/nike.png",
    tier: "hero",
    descAr: "المورد الرسمي للأطقم",
    descFr: "Équipementier officiel",
  },
  {
    name: "TGCC",
    logo: "/images/logos/tgcc.png",
    tier: "main",
    descAr: "الراعي الرئيسي",
    descFr: "Sponsor principal",
  },
  {
    name: "Daiko",
    logo: "/images/logos/daiko.avif",
    tier: "main",
    descAr: "شريك استراتيجي",
    descFr: "Partenaire stratégique",
  },
];

const partners = [
  { name: "Marsa Maroc", sector: { ar: "لوجستيك", fr: "Logistique" } },
  { name: "Aïn Ifrane", sector: { ar: "مشروبات", fr: "Boissons" } },
  { name: "Pare-Brise Express", sector: { ar: "خدمات", fr: "Services" } },
  {
    name: "Capital Céramique – Vitra",
    sector: { ar: "بناء", fr: "Construction" },
  },
  { name: "City Club", sector: { ar: "رياضة", fr: "Sport & Santé" } },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function Partners({ currentLang = "ar" }) {
  const isAr = currentLang === "ar";
  const [sectionRef, visible] = useInView(0.1);
  const heroSponsor = sponsors.find((s) => s.tier === "hero");
  const mainSponsors = sponsors.filter((s) => s.tier === "main");

  return (
    <section
      id="partners"
      ref={sectionRef}
      dir={isAr ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden"
      style={{ padding: "clamp(70px, 10vw, 120px) 0" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,230,0,0.25), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#ffe600",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              {isAr ? "— يدعموننا" : "— Ils nous soutiennent"}
            </p>
            <h2
              className={`font-black text-white leading-[0.9] uppercase ${
                isAr
                  ? "font-[family-name:var(--font-cairo)]"
                  : "font-[family-name:var(--font-bebas)]"
              }`}
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {isAr ? (
                <>
                  <span style={{ display: "block" }}>شركاء</span>
                  <span style={{ display: "block", color: "#ffe600" }}>
                    النادي
                  </span>
                </>
              ) : (
                <>
                  <span style={{ display: "block" }}>NOS</span>
                  <span style={{ display: "block", color: "#ffe600" }}>
                    PARTENAIRES
                  </span>
                </>
              )}
            </h2>
          </div>

          <div
            style={{
              flexShrink: 0,
              border: "1px solid rgba(255,230,0,0.2)",
              padding: "20px 32px",
              background:
                "linear-gradient(135deg, rgba(255,230,0,0.08), rgba(255,230,0,0.02))",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <span
              className="font-[family-name:var(--font-bebas)]"
              style={{
                display: "block",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                color: "#ffe600",
                lineHeight: 1,
              }}
            >
              {sponsors.length + partners.length}
            </span>
            <span
              style={{
                display: "block",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.6)",
                marginTop: "4px",
                fontWeight: 700,
              }}
            >
              {isAr ? "شريك رسمي" : "Partenaires officiels"}
            </span>
          </div>
        </div>

        <div
          className="flex items-center gap-4 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.15s",
          }}
        >
          <span
            className="block w-6 h-[2px]"
            style={{ background: "#ffe600" }}
          />
          <span
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#ffe600",
              fontWeight: 700,
            }}
          >
            {isAr ? "الرعاة الرسميون" : "Sponsors officiels"}
          </span>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {heroSponsor && (
            <div className="md:col-span-2">
              <HeroSponsorCard sp={heroSponsor} isAr={isAr} />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            {mainSponsors.map((sp) => (
              <MainSponsorCard key={sp.name} sp={sp} isAr={isAr} />
            ))}
          </div>
        </div>

        <div
          className="flex items-center gap-4 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.35s",
          }}
        >
          <span
            className="block w-6 h-[2px]"
            style={{ background: "#ffe600" }}
          />
          <span
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#ffe600",
              fontWeight: 700,
            }}
          >
            {isAr ? "الشركاء الرسميون" : "Partenaires officiels"}
          </span>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
          }}
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} p={p} isAr={isAr} />
          ))}
        </div>

        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            {isAr ? "المغرب الرياضي الفاسي" : "Maghreb de Fès"}
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            {isAr
              ? "للشراكة: partenariat@masfes.ma"
              : "Partenariat : partenariat@masfes.ma"}
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroSponsorCard({ sp, isAr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        gap: "14px",
        boxShadow: hovered
          ? "0 0 0 2px #ffe600, 0 20px 50px -10px rgba(255,230,0,0.25)"
          : "0 12px 30px -8px rgba(0,0,0,0.5)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          position: "absolute",
          top: "16px",
          insetInlineStart: "16px",
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "#0a0a0a",
          background: "#ffe600",
          padding: "5px 12px",
          borderRadius: "999px",
          fontWeight: 800,
        }}
      >
        {isAr ? sp.descAr : sp.descFr}
      </span>
      <img
        src={sp.logo}
        alt={sp.name}
        style={{ maxHeight: "90px", maxWidth: "240px", objectFit: "contain" }}
      />
    </div>
  );
}

function MainSponsorCard({ sp, isAr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "10px",
        boxShadow: hovered
          ? "0 0 0 2px #ffe600, 0 16px 36px -10px rgba(255,230,0,0.22)"
          : "0 10px 24px -8px rgba(0,0,0,0.45)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontSize: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#9a8b00",
          fontWeight: 800,
        }}
      >
        {isAr ? sp.descAr : sp.descFr}
      </span>
      <img
        src={sp.logo}
        alt={sp.name}
        style={{ maxHeight: "36px", maxWidth: "140px", objectFit: "contain" }}
      />
    </div>
  );
}

function PartnerCard({ p, isAr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        background: "#fff",
        padding: "18px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: isAr ? "flex-end" : "flex-start",
        justifyContent: "space-between",
        minHeight: "92px",
        gap: "8px",
        textAlign: isAr ? "right" : "left",
        boxShadow: hovered
          ? "0 0 0 2px #ffe600, 0 10px 24px -8px rgba(255,230,0,0.2)"
          : "0 6px 16px -6px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontSize: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#9a8b00",
          fontWeight: 800,
        }}
      >
        {isAr ? p.sector.ar : p.sector.fr}
      </span>
      <span
        style={{
          fontSize: "clamp(0.68rem, 1.4vw, 0.8rem)",
          fontWeight: 800,
          color: "#0a0a0a",
          lineHeight: 1.25,
        }}
      >
        {p.name}
      </span>
    </div>
  );
}
