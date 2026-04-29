"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { productData } from "@/data/translations";
import { Facebook, Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const { t, lang } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111827] text-gray-300 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-2xl font-bold mb-6">{t.company_name}</h3>
          <p className="mb-8 max-w-sm leading-relaxed text-gray-400">
            {t.about.desc}
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/AlKaramaFinance" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href="mailto:alkaramafinance@gmail.com" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/alkaramafinance" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@alkaramafinance" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">{t.nav.products}</h4>
          <ul className="space-y-4">
            {productData[lang as keyof typeof productData].slice(0, 4).map((product: any) => (
              <li key={product.id}>
                <a href="#products" onClick={(e) => handleLinkClick(e, "#products")} className="hover:text-primary transition-colors text-gray-400">
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">{t.nav.contact}</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-400">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>{t.contact.address}</span>
            </li>
            <li className="flex gap-3 text-gray-400">
              <Phone className="text-primary shrink-0" size={20} />
              <span>+222 34 40 84 83</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Al Karama Finance. {t.footer.rights}</p>
      </div>

      <a 
        href="https://wa.me/22234408483" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float group flex items-center gap-2"
        title={t.footer.contact_us}
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">{t.footer.whatsapp}</span>
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}
