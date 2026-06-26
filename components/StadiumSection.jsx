"use client";
import React, { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

export default function StadiumSection({ currentLang = "ar" }) {
  const isAr = currentLang === "ar";
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const count1 = useCountUp(45000, 2200, visible);
  const count2 = useCountUp(1989, 1800, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stadium"
      dir={isAr ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(520px, 70vh, 720px)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/stadium-fes.webp')",
          transform: "scale(1.04)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, #ffe600 0%, rgba(255,230,0,0.3) 60%, transparent 100%)",
        }}
      />

      <div
        className="absolute z-10"
        style={{
          top: "clamp(28px, 5vw, 48px)",
          ...(isAr
            ? { right: "clamp(24px, 5vw, 60px)" }
            : { left: "clamp(24px, 5vw, 60px)" }),
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#ffe600",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          {isAr ? "الملعب الرسمي" : "Stade Officiel"}
        </p>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          {isAr ? "قلعة" : "La Forteresse"}
          <br />
          <span style={{ color: "#ffe600" }}>
            {isAr ? "النمور" : "des Tigres"}
          </span>
        </h2>
      </div>

      <div
        className="absolute z-10"
        style={{
          top: "clamp(28px, 5vw, 48px)",
          ...(isAr
            ? { left: "clamp(24px, 5vw, 60px)" }
            : { right: "clamp(24px, 5vw, 60px)" }),
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.3s",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "10px 18px",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {isAr ? "المركب الرياضي" : "Complexe Sportif"}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "0.05em",
              marginTop: "2px",
            }}
          >
            {isAr ? "فاس، المغرب" : "Fès, Maroc"}
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.6s",
        }}
      >
        <span
          style={{
            fontSize: "clamp(6rem, 20vw, 18rem)",
            fontWeight: 900,
            color: "#ffe600",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
            opacity: 0.05,
          }}
        >
          MAS
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
        }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,230,0,0.4), transparent)",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "rgba(0,0,0,0.75)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <StatBlock
            value={visible ? count1.toLocaleString() : "0"}
            label={isAr ? "مقعد" : "Places"}
            accent
            isAr={isAr}
            borderEnd
          />
          <StatBlock
            value={visible ? count2.toString() : "0"}
            label={isAr ? "سنة الإنشاء" : "Année de construction"}
            isAr={isAr}
            borderEnd
          />
          <StatBlock
            value={isAr ? "فـاس" : "Fès"}
            label={isAr ? "المدينة" : "Ville"}
            isAr={isAr}
            borderEnd
            text
          />
          <StatBlock
            value={isAr ? "عشب طبيعي" : "Gazon naturel"}
            label={isAr ? "نوع الأرضية" : "Surface"}
            isAr={isAr}
            text
          />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label, accent, isAr, borderEnd, text }) {
  return (
    <div
      style={{
        padding: "clamp(16px, 3vw, 28px) clamp(12px, 2.5vw, 28px)",
        borderInlineEnd: borderEnd ? "1px solid rgba(255,255,255,0.1)" : "none",
        textAlign: isAr ? "right" : "left",
        position: "relative",
      }}
    >
      {accent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            ...(isAr ? { right: 0 } : { left: 0 }),
            width: "2px",
            height: "100%",
            background: "#ffe600",
          }}
        />
      )}
      <div
        style={{
          fontSize: text
            ? "clamp(0.95rem, 2vw, 1.3rem)"
            : "clamp(1.4rem, 3.5vw, 2.2rem)",
          fontWeight: 900,
          color: accent ? "#ffe600" : "#ffffff",
          lineHeight: 1.1,
          letterSpacing: text ? "0.02em" : "-0.02em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.4)",
          fontWeight: 600,
          marginTop: "6px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
