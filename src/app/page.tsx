"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productData } from "@/data/translations";
import { ShieldCheck, TrendingUp, Users, Target, ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";

export default function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-[#f9fafb]">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#165a49] via-[#1f7a63] to-[#289b7e] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-[120px] mix-blend-overlay animate-slow-zoom" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black/20 rounded-full blur-[100px] mix-blend-overlay" />
          <Image
            src="https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/579038242_122150669954901232_3437938905477336518_n.png?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHEF7yZkbVpl5Tdn7b9KKpHQ10VTDhCr7JDXRVMOEKvsibIYvrZNSimCzKBhybb6tYGMi4jnh6T2vbEQU1Fzc5c&_nc_ohc=3ZvDUqcvxdYQ7kNvwGuZU17&_nc_oc=Adr8b6buLrQH6YYtW-C2bcSGySdMYd1HGihItzSOFqb9D_Xw-UkthHeQ7vqx2UnytvI&_nc_zt=23&_nc_ht=scontent.frba3-2.fna&_nc_gid=BXD1JY0fFLu9IJzzkXfXpQ&_nc_ss=7a2a8&oh=00_Af1koXk_27is816hWjhPyicGplstU-u5P6JY59F49nUOyw&oe=69F3BD3A"
            alt="Hero Background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity animate-slow-zoom"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-slide-up">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="btn-primary !bg-white !text-primary hover:!bg-gray-100">
                  {t.hero.cta_contact}
                </a>
                <a href="#products" onClick={(e) => handleScrollTo(e, '#products')} className="btn-outline border-white/40 text-white hover:bg-white/10">
                  {t.hero.cta_products}
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 hidden lg:flex justify-end animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="relative w-96 h-64 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.3)] p-8 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{t.company_name}</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                </div>
                <div className="absolute bottom-8 right-8 text-white font-bold text-2xl">
                  {t.islamic_finance}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">{t.about.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.about.desc}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: <Users size={32} />, ...t.about.cards[0] },
              { icon: <ShieldCheck size={32} />, ...t.about.cards[1] },
              { icon: <TrendingUp size={32} />, ...t.about.cards[2] },
              { icon: <Target size={32} />, ...t.about.cards[3] }
            ].map((card: any, i) => (
              <div key={i} className={`glass-card p-8 rounded-[2rem] reveal reveal-delay-${i % 3 + 1} group`}>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12 reveal">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.map_title}</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.cities}
              </p>
              <div className="flex flex-wrap gap-4">
                 {["Nouakchott", "Nouadhibou", "Rosso", "Kiffa", "Atar", "Zouerate"].map((city) => (
                   <div key={city} className="px-6 py-3 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                     <span className="font-bold text-primary">{city}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3848.330!2d-15.978243!3d18.088711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA1JzE5LjQiTiAxNcKwNTgnNDEuNyJX!5e0!3m2!1sen!2smr!4v1620000000000!5m2!1sen!2smr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section id="products" className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1f7a63_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">
                {t.nav.products}
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{t.products.title}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {productData[lang as keyof typeof productData].map((product: any, index: number) => (
              <div key={index} className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(31,122,99,0.15)] transition-all duration-500 hover:-translate-y-2 reveal reveal-delay-${index % 3 + 1}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={product.image || "https://images.unsplash.com/photo-1518186239751-d4198428565e?auto=format&fit=crop&q=80&w=800"} 
                    alt={product.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-xl mb-1">{product.title}</h4>
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-md font-medium">{t.islamic_finance}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6 h-10 line-clamp-2">{product.desc}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500">{t.products.amount_label}</span>
                      <span className="font-semibold text-primary">{product.range}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{t.products.duration_label}</span>
                      <span className="font-medium text-gray-900">{product.duration}</span>
                    </div>
                  </div>

                  <Link href={`/produits/${product.id}`} className="w-full py-3 bg-gray-50 hover:bg-primary hover:text-white text-gray-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white">
                    {t.products.view_details}
                    <ArrowRight size={16} className={`transition-transform ${lang === 'ar' ? 'rotate-180' : ''} group-hover:translate-x-1`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="glass-card bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 reveal">
            <div className="lg:w-1/3">
              <h2 className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">{t.nav.contact}</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">{t.contact.title}</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.contact.phone}</h4>
                    <p className="text-gray-600">+222 34 40 84 83</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.whatsapp}</h4>
                    <a href="https://wa.me/22234408483" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      +222 34 40 84 83
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.email}</h4>
                    <a href="mailto:alkaramafinance@gmail.com" className="text-primary hover:underline">
                      alkaramafinance@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.name}</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.email}</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.subject}</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option>{t.contact.subjects.financing}</option>
                    <option>{t.contact.subjects.info}</option>
                    <option>{t.contact.subjects.support}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary/20">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
