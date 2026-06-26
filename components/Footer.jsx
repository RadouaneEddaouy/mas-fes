"use client";
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({ currentLang }) {
  const isAr = currentLang === "ar";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "#hero", ar: "الرئيسية", fr: "Accueil" },
    { id: "#squad", ar: "التشكيلة", fr: "Effectif" },
    { id: "#results", ar: "آخر النتائج", fr: "Resultats" },
    { id: "#history", ar: "تاريخ الألقاب", fr: "Palmares" },
    { id: "#partners", ar: "شركاؤنا", fr: "Partenaires" },
  ];

  return (
    <footer className="w-full bg-[#050507] border-t border-white/10 mt-32 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 flex flex-col gap-4">
            <img
              src="/images/mas-logo.png"
              alt="MAS FES"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-500 text-xs leading-relaxed">
              {isAr
                ? "الموقع الغير الرسمي لنادي المغرب الرياضي الفاسي. قلعة النمور."
                : "Le site non officiel du Maghreb Association Sportive de Fes. La forteresse des Tigres."}
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              {isAr ? "روابط سريعة" : "Liens rapides"}
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  className="text-gray-500 hover:text-[#ffe600] text-xs transition-colors duration-300 uppercase tracking-widest font-bold"
                >
                  {isAr ? link.ar : link.fr}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              {isAr ? "اتصل بنا" : "Contact"}
            </h4>
            <p className="text-gray-500 text-xs mb-2 hover:text-white transition-colors cursor-pointer">
              contact@masfes.ma
            </p>
            <p
              dir="ltr"
              className={`text-gray-500 text-xs hover:text-white transition-colors cursor-pointer ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              +212 0000 000 000
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              {isAr ? "تابعنا" : "Suivez-nous"}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clubmasoff46/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#ffe600] hover:text-black transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/CLUBMASOFF/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#ffe600] hover:text-black transition-all"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://x.com/MAS_Fez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#ffe600] hover:text-black transition-all"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-gray-600 uppercase tracking-widest">
          <p>
            © {currentYear} MAS FES.{" "}
            {isAr ? "جميع الحقوق محفوظة" : "TOUS DROITS RESERVES"}.
          </p>
          <p>
            Developed By{"  "}
            <a
              href="https://www.instagram.com/radouane_eddaouy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffe600] transition-colors underline"
            >
              RADOUANE ED-DAOUY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
