export const translations = {
  fr: {
    nav: { home: "Accueil", products: "Produits", about: "À Propos", contact: "Contact" },
    hero: {
      title: "Votre partenaire en finance islamique",
      subtitle: "Al Karama Finance soutient vos projets avec des solutions de financement éthiques et inclusives en Mauritanie.",
      cta_products: "Découvrir nos produits",
      cta_contact: "Demander un financement",
    },
    about: {
      title: "À Propos",
      desc: "Al Karama Finance est une institution mauritanienne de microfinance islamique agréée par la Banque Centrale depuis 2018. Elle propose des services d'inclusion financière à travers le pays.",
      cards: [
        { title: "Inclusion financière", desc: "Rendre les services accessibles à tous." },
        { title: "Finance islamique", desc: "Zéro intérêt (Riba), partage équitable." },
        { title: "Soutien aux entrepreneurs", desc: "Accompagner les petites entreprises." },
        { title: "Réduction de la pauvreté", desc: "Impact social positif et durable." }
      ],
      map_title: "Notre présence nationale",
      cities: "Nouakchott, Nouadhibou, Rosso, Kiffa, Atar, Zouerate"
    },
    products: {
      title: "Nos Produits Financiers",
      view_details: "Voir détails"
    },
    contact: {
      title: "Contactez-nous",
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
      subjects: {
        financing: "Demande de financement",
        info: "Information",
        support: "Support"
      }
    },
    footer: {
      rights: "Tous droits réservés.",
      contact_us: "Contactez-nous sur WhatsApp",
    }
  },
  ar: {
    nav: { home: "الرئيسية", products: "منتجاتنا", about: "من نحن", contact: "اتصل بنا" },
    hero: {
      title: "شريككم في التمويل الإسلامي",
      subtitle: "الكرامة للتمويل تدعم مشاريعكم بحلول تمويلية أخلاقية وشاملة في موريتانيا.",
      cta_products: "اكتشف منتجاتنا",
      cta_contact: "طلب تمويل",
    },
    about: {
      title: "من نحن",
      desc: "الكرامة للتمويل هي مؤسسة موريتانية للتمويل الأصغر الإسلامي مرخصة من البنك المركزي منذ 2018. تقدم خدمات الشمول المالي في جميع أنحاء البلاد.",
      cards: [
        { title: "الشمول المالي", desc: "جعل الخدمات في متناول الجميع." },
        { title: "التمويل الإسلامي", desc: "بدون فوائد ربوية، مشاركة عادلة." },
        { title: "دعم رواد الأعمال", desc: "مواكبة المشاريع الصغيرة." },
        { title: "الحد من الفقر", desc: "تأثير اجتماعي إيجابي ومستدام." }
      ],
      map_title: "حضورنا الوطني",
      cities: "نواكشوط، نواذيبو، روصو، كيفه، أطار، زويرات"
    },
    products: {
      title: "منتجاتنا التمويلية",
      view_details: "التفاصيل"
    },
    contact: {
      title: "اتصل بنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال الرسالة",
      subjects: {
        financing: "طلب تمويل",
        info: "معلومات",
        support: "دعم فني"
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      contact_us: "تواصل معنا عبر واتساب",
    }
  }
};

export const productData = {
  fr: [
    { id: "bidayati", title: "BIDAYATI", desc: "Pour le démarrage d'activités génératrices de revenus.", range: "10,000 - 100,000 MRU", duration: "12 - 24 mois", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
    { id: "seyidati", title: "SEYIDATI", desc: "Dédié aux femmes entrepreneures en Mauritanie.", range: "5,000 - 50,000 MRU", duration: "6 - 18 mois", image: "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/593349950_122156835014901232_7456827543257320349_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFzkyNz_LfDAP392Rtazjo6-VPQFdW2DLX5U9AV1bYMtaDGMiPrjYX_iKc29WpTQs4BVTF3hCVMI-VTjLVosFB_&_nc_ohc=6LgtXDV7dtoQ7kNvwFL8chv&_nc_oc=Adqkzrc1kEBrG2T7b0s2TTYfP8tgjf10Hnj7tb57fDXcqbJp4PI262HGcgMACVsIqIM&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=ecHpaW4fkAVMlxirmmB75Q&_nc_ss=7a2a8&oh=00_Af27IL1DTpAQ3iQrY612xvvxexJT7uPHbdeBNE_pfAOzwQ&oe=69F429DF" },
    { id: "boutique-bolema", title: "BOUTIQUE BOLEMA", desc: "Soutien aux petits commerces de proximité.", range: "20,000 - 200,000 MRU", duration: "12 - 36 mois", image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" },
    { id: "temwili", title: "TEMWILI", desc: "Financement pour l'expansion des PME.", range: "50,000 - 500,000 MRU", duration: "24 - 48 mois", image: "https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/627405293_122167992746901232_4965438734714951069_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH7SKVnEWZmduuZhZobCSWEpyUTTzFLJAWnJRNPMUskBdtvalvPvzV-shphDP1smJ8YsmtK9HwkBvM5oH5xkzoa&_nc_ohc=MVZlx3njtRMQ7kNvwF3nMxm&_nc_oc=AdpMYuVfsk3wxC_Dtar4MkCqCqtk6KT7ZLGW5E5c7LRXnFgjhL7GLrqiuq0tB90BJ6c&_nc_zt=23&_nc_ht=scontent.frba2-1.fna&_nc_gid=dTj0dN9_y0_A2hZ1SsnMOg&_nc_ss=7a2a8&oh=00_Af1B_5sT1oSILZta9KJBWapYnAXcl9Oqv2H_qNjkfrb9vg&oe=69F427EA" },
    { id: "ziraati", title: "ZIRAATI", desc: "Crédit agricole pour les agriculteurs et éleveurs.", range: "15,000 - 150,000 MRU", duration: "Cycles saisonniers", image: "https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/652227075_122174727968901232_4508966418652174430_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFi7sk3NdpKWg3ZCnr-bmpcTQTdaAun2xJNBN1oC6fbEnmppqmhnBqzYcHCecOKqIJRvYd4Zq-uGHSGJHhX6W2x&_nc_ohc=llwerElRu3AQ7kNvwEdSuus&_nc_oc=AdrDGX-tKRTPAh7Jbmk18KFb70q0hWHab8ZdN-DNmXpPLp3ffmjBvS7hGmlcguG6WLI&_nc_zt=23&_nc_ht=scontent.frba2-2.fna&_nc_gid=2aXzmLHryDsMUey94NlEYQ&_nc_ss=7a2a8&oh=00_Af1QB-22XrEBoXAVynmNwIm-y8oL5O14JhXqjrwwcBt0sg&oe=69F436D0" },
    { id: "semek-credit", title: "SEMEK CREDIT", desc: "Financement ciblé pour le secteur de la pêche.", range: "30,000 - 300,000 MRU", duration: "12 - 24 mois", image: "https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/670575118_122179882316901232_1731606116844905801_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEvx20cN-ki6e93K4EHxBhvE6L0iCSaOa4TovSIJJo5roN_UH0mrh-ZnLWy-QWkJWLkSjOR6fOlU8iJD6aEHCCv&_nc_ohc=L7FEcB6xdKIQ7kNvwHlawZG&_nc_oc=AdrSjwsbpgOTzyExAowJSsRkeh5wFWjibnvWVVZJ2f7zTXG5GiC9xqDhOd6VEKZ02-Q&_nc_zt=23&_nc_ht=scontent.frba2-1.fna&_nc_gid=LA1NS54cTjWwU8tkjxV3Lw&_nc_ss=7a2a8&oh=00_Af29FFj3wXt6zX2tnCrXT2EI-TLmjKy-sjEkL_3jiiEAXQ&oe=69F42BCF" },
    { id: "dari", title: "DARI", desc: "Solutions de financement pour l'habitat social.", range: "100,000 - 1,000,000 MRU", duration: "36 - 120 mois", image: "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/677290372_122180958806901232_2181730425811337895_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH4qvez4D2N3YiwBtimNaqF2ja34EM5zivaNrfgQznOKwQK2kPckg_hcOP-TqRnD1fK51u_Bo0beYJQf7TXnQaK&_nc_ohc=wg0HuZxn5rAQ7kNvwHWK_2c&_nc_oc=Adpoqdop4T-vT2JrQRaCRqZWzxiwpCaoL3nkKfKgBoenEcfaRQwoYoXDVlDWkywCOR8&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=rNvRMsLYjOQlYL0g2YGpMA&_nc_ss=7a2a8&oh=00_Af21slgkwP0G2HjH36lAOYMrIrPZG7Sb6oQixwcsC_Vdog&oe=69F42238" },
    { id: "medrasati", title: "MEDRASATI", desc: "Prêts pour l'éducation et la formation professionnelle.", range: "5,000 - 30,000 MRU", duration: "6 - 12 mois", image: "/madrasti.png" },
  ],
  ar: [
    { id: "bidayati", title: "بداياتي", desc: "لبدء الأنشطة المدرة للدخل.", range: "10,000 - 100,000 أوقية", duration: "12 - 24 شهر", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
    { id: "seyidati", title: "سيدتي", desc: "مخصص للنساء المقاولات في موريتانيا.", range: "5,000 - 50,000 أوقية", duration: "6 - 18 شهر", image: "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/593349950_122156835014901232_7456827543257320349_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFzkyNz_LfDAP392Rtazjo6-VPQFdW2DLX5U9AV1bYMtaDGMiPrjYX_iKc29WpTQs4BVTF3hCVMI-VTjLVosFB_&_nc_ohc=6LgtXDV7dtoQ7kNvwFL8chv&_nc_oc=Adqkzrc1kEBrG2T7b0s2TTYfP8tgjf10Hnj7tb57fDXcqbJp4PI262HGcgMACVsIqIM&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=ecHpaW4fkAVMlxirmmB75Q&_nc_ss=7a2a8&oh=00_Af27IL1DTpAQ3iQrY612xvvxexJT7uPHbdeBNE_pfAOzwQ&oe=69F429DF" },
    { id: "boutique-bolema", title: "بوتيك بولمة", desc: "دعم المتاجر الصغيرة المحلية.", range: "20,000 - 200,000 أوقية", duration: "12 - 36 شهر", image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" },
    { id: "temwili", title: "تمويلي", desc: "تمويل لتوسيع المؤسسات الصغيرة والمتوسطة.", range: "50,000 - 500,000 أوقية", duration: "24 - 48 شهر", image: "https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/627405293_122167992746901232_4965438734714951069_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH7SKVnEWZmduuZhZobCSWEpyUTTzFLJAWnJRNPMUskBdtvalvPvzV-shphDP1smJ8YsmtK9HwkBvM5oH5xkzoa&_nc_ohc=MVZlx3njtRMQ7kNvwF3nMxm&_nc_oc=AdpMYuVfsk3wxC_Dtar4MkCqCqtk6KT7ZLGW5E5c7LRXnFgjhL7GLrqiuq0tB90BJ6c&_nc_zt=23&_nc_ht=scontent.frba2-1.fna&_nc_gid=dTj0dN9_y0_A2hZ1SsnMOg&_nc_ss=7a2a8&oh=00_Af1B_5sT1oSILZta9KJBWapYnAXcl9Oqv2H_qNjkfrb9vg&oe=69F427EA" },
    { id: "ziraati", title: "زراعتي", desc: "قرض زراعي للمزارعين والمنمين.", range: "15,000 - 150,000 أوقية", duration: "دورات موسمية", image: "https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/652227075_122174727968901232_4508966418652174430_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFi7sk3NdpKWg3ZCnr-bmpcTQTdaAun2xJNBN1oC6fbEnmppqmhnBqzYcHCecOKqIJRvYd4Zq-uGHSGJHhX6W2x&_nc_ohc=llwerElRu3AQ7kNvwEdSuus&_nc_oc=AdrDGX-tKRTPAh7Jbmk18KFb70q0hWHab8ZdN-DNmXpPLp3ffmjBvS7hGmlcguG6WLI&_nc_zt=23&_nc_ht=scontent.frba2-2.fna&_nc_gid=2aXzmLHryDsMUey94NlEYQ&_nc_ss=7a2a8&oh=00_Af1QB-22XrEBoXAVynmNwIm-y8oL5O14JhXqjrwwcBt0sg&oe=69F436D0" },
    { id: "semek-credit", title: "سمك كريديت", desc: "تمويل مستهدف لقطاع الصيد.", range: "30,000 - 300,000 أوقية", duration: "12 - 24 شهر", image: "https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/670575118_122179882316901232_1731606116844905801_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEvx20cN-ki6e93K4EHxBhvE6L0iCSaOa4TovSIJJo5roN_UH0mrh-ZnLWy-QWkJWLkSjOR6fOlU8iJD6aEHCCv&_nc_ohc=L7FEcB6xdKIQ7kNvwHlawZG&_nc_oc=AdrSjwsbpgOTzyExAowJSsRkeh5wFWjibnvWVVZJ2f7zTXG5GiC9xqDhOd6VEKZ02-Q&_nc_zt=23&_nc_ht=scontent.frba2-1.fna&_nc_gid=LA1NS54cTjWwU8tkjxV3Lw&_nc_ss=7a2a8&oh=00_Af29FFj3wXt6zX2tnCrXT2EI-TLmjKy-sjEkL_3jiiEAXQ&oe=69F42BCF" },
    { id: "dari", title: "داري", desc: "حلول تمويل السكن الاجتماعي.", range: "100,000 - 1,000,000 أوقية", duration: "36 - 120 شهر", image: "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/677290372_122180958806901232_2181730425811337895_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH4qvez4D2N3YiwBtimNaqF2ja34EM5zivaNrfgQznOKwQK2kPckg_hcOP-TqRnD1fK51u_Bo0beYJQf7TXnQaK&_nc_ohc=wg0HuZxn5rAQ7kNvwHWK_2c&_nc_oc=Adpoqdop4T-vT2JrQRaCRqZWzxiwpCaoL3nkKfKgBoenEcfaRQwoYoXDVlDWkywCOR8&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=rNvRMsLYjOQlYL0g2YGpMA&_nc_ss=7a2a8&oh=00_Af21slgkwP0G2HjH36lAOYMrIrPZG7Sb6oQixwcsC_Vdog&oe=69F42238" },
    { id: "medrasati", title: "مدرستي", desc: "قروض للتعليم والتدريب المهني.", range: "5,000 - 30,000 أوقية", duration: "6 - 12 شهر", image: "/madrasti.png" },
  ]
};
