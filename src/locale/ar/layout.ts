export default {
  navbar: {
    links: [
      { Home: "بيت" },
      { About: "من نحن" },
      {
        Products: "منتجات",
        items: [
          {
            title: "زيت المحرك",
            description: "زيوت عالية الأداء لأقصى حماية وكفاءة للمحرك.",
          },
          {
            title: "التشحيم",
            description:
              "مواد تشحيم فائقة الجودة لتقليل الاحتكاك وإطالة عمر المعدات.",
          },
          {
            title: "البحرية والطيران",
            description: "حلول متخصصة للسفن البحرية ومحركات الطائرات.",
          },
          {
            title: "صناعي",
            description: "زيوت ومواد تشحيم صناعية موثوقة للعمليات الثقيلة.",
          },
        ],
      },
      { Solutions: "الحلول" },
    ],
    contact: "اتصال",
  },
  cta: {
    title: "هل أنت مستعد لتعزيز عملياتك؟",
    description:
      "تحدث إلى فريقنا لتكتشف كيف يمكن لـ 100 Power تقليل الاحتكاك وخفض التكاليف وتعزيز الكفاءة في جميع عملياتك.",
    button: "التحدث إلى خبير",
  },
  footer: {
    title: "هاندرد باور للتجارة ذ.م.م",
    description:
      "دعم الصناعات بتكنولوجيا التشحيم المتقدمة لتقليل الاحتكاك وإطالة عمر الآلات وحماية الكوكب.",
    links: {
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
    sections: {
      quickLinks: "روابط سريعة",
      products: "المنتجات",
      factoryAddress: "عنوان المصنع",
    },
    nav: {
      home: "الصفحة الرئيسية",
      about: "من نحن",
      solutions: "الحلول",
      products: "المنتجات",
      contact: "اتصال",
    },
    categories: {
      engineAdditives: "مضافات المحرك",
      lubrication: "التشحيم",
      fuelSystem: "نظام الوقود",
      industrial: "تطبيقات صناعية",
    },
    copyright: "©{year} جميع الحقوق محفوظة لشركة هاندرد باور ذ.م.م.",
    developer: "تم التصميم والتطوير بواسطة Ziron Media",
  },
} as const;
