"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100 group-hover:scale-105 transition-transform">
            <Image 
              src="https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/577741112_122150669804901232_1492367642684869286_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHkB9FTg6qrm5XJhAceBYIGP2fUwSw7paY_Z9TBLDulpmb9b2RDzClZVDORdL1I4_rBU6IRJL0cVJ9DWwnBGlrR&_nc_ohc=Rv63wVyezyMQ7kNvwE3RdRL&_nc_oc=Adq_8u90-Nt5lKmJen8lw-10DW0iuY40haxzjwBoOynexLqBgBhAWbet0T2XP_hhonU&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=dRrHLGJNh6afmuZCrJVsDw&oh=00_Af1cfW2hxOEfmfuqSTHV40sxBXyMg7DeZoL6H7tb0xREnQ&oe=69F11FD9"
              alt="Al Karama Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className={`font-bold text-xl tracking-tight hidden md:block transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
            {lang === 'ar' ? "الكرامة للتمويل" : "Al Karama Finance"}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-sm">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${isScrolled ? "border-primary text-primary hover:bg-primary/5" : "border-white text-white hover:bg-white/20"}`}
          >
            <Globe size={16} />
            <span className="text-sm font-bold uppercase">{lang === "fr" ? "AR" : "FR"}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className={`p-2 rounded-full border ${isScrolled ? "border-primary text-primary" : "border-white text-white"}`}
          >
            <span className="text-sm font-bold uppercase">{lang === "fr" ? "AR" : "FR"}</span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={isScrolled ? "text-gray-800" : "text-white"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full start-0 w-full shadow-2xl animate-fade-in border-t border-gray-100">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-3 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
