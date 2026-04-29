"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { productData } from "@/data/translations";
import { ArrowLeft, MessageCircle, Phone, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const { t, lang } = useLanguage();

  const product = productData[lang as keyof typeof productData].find((p: any) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Produit non trouvé</h1>
          <Link href="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <Link href="/#products" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-8 group">
          <ArrowLeft size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
          {t.products.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Container */}
          <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <Image 
              src={product.image || "https://images.unsplash.com/photo-1518186239751-d4198428565e?auto=format&fit=crop&q=80&w=800"} 
              alt={product.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 right-10">
               <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg mb-4 inline-block">Finance Islamique</span>
               <h1 className="text-4xl md:text-5xl font-bold text-white">{product.title}</h1>
            </div>
          </div>

          {/* Details Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
                {lang === 'ar' ? 'تفاصيل المنتج' : 'Détails du Produit'}
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                {product.desc}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4 group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase">{t.products.amount_label}</p>
                  <p className="text-xl font-bold text-gray-900">{product.range}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4 group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase">{t.products.duration_label}</p>
                  <p className="text-xl font-bold text-gray-900">{product.duration}</p>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
               <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">{t.products.contact_us}</h3>
               
               <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <a href="https://wa.me/22234408483" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                  <a href={`mailto:alkaramafinance@gmail.com?subject=Demande d'information: ${product.title}`} className="btn-outline !text-primary !border-primary hover:!bg-primary hover:!text-white flex-1">
                    <Mail size={20} />
                    Email
                  </a>
               </div>
               
               <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 justify-center">
                  <Phone size={14} />
                  <span>{lang === 'ar' ? 'أو اتصل بنا مباشرة على: ' : 'Ou appelez-nous directement au : '}</span>
                  <span className="font-bold text-gray-900">+222 34 40 84 83</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
