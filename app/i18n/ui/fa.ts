import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "آناتومی آتلیه — یادگیری آناتومی مانند یک هنرمند",
    description:
      "اندام‌های سه‌بعدی و دقیق بدن انسان را به‌صورت تعاملی بررسی کنید.",
    ogTitle: "آناتومی آتلیه — یادگیری آناتومی",
    ogDescription:
      "آناتومی بدن انسان را با مدل‌های سه‌بعدی و تعاملی یاد بگیرید.",
    imageAlt: "مدل سه‌بعدی قلب انسان در Anatomy Atelier",
  },

  brand: {
    tagline: "آناتومی را مانند یک هنرمند یاد بگیر",
    home: "صفحه اصلی آناتومی آتلیه",
  },

  nav: {
    explore: "کاوش",
    systems: "دستگاه‌ها",
    lessons: "درس‌ها",
    library: "کتابخانه",
    notes: "یادداشت‌ها",
  },

  search: {
    placeholder: "جست‌وجوی اندام‌ها و موضوعات…",
  },

  profile: {
    open: "باز کردن پروفایل یادگیرنده",
  },

  language: {
    label: "زبان",
    choose: "انتخاب زبان",
  },

  library: {
    title: "کتابخانه اندام‌ها",
    open: "باز کردن کتابخانه اندام‌ها",
    close: "بستن کتابخانه",
    saved: "اندام‌های ذخیره‌شده",
    viewAll: "مشاهده همه اندام‌ها",
    quoteLine1: "یادگیری",
    quoteLine2: "از کنجکاوی آغاز می‌شود.",
    quoteSign: "به کاوش ادامه بده!",
  },

  tools: {
    label: "ابزارهای نمایش سه‌بعدی",
    rotate: "چرخش",
    zoom: "بزرگ‌نمایی",
    isolate: "جداسازی",
    section: "برش عرضی",
    layers: "لایه‌ها",
    compare: "مقایسه",
    reset: "بازنشانی",
  },

  viewer: {
    title: "نمایشگر تعاملی {organ}",
    canvas:
      "مدل تعاملی سه‌بعدی آناتومی. برای چرخاندن بکشید، برای بزرگ‌نمایی اسکرول کنید و برای مشاهده اطلاعات روی نقاط کلیک کنید.",
    tip: "راهنما",
    tipDrag: "برای چرخاندن بکشید",
    tipScroll: "برای بزرگ‌نمایی اسکرول کنید",
    tipClick: "برای اطلاعات بیشتر روی یک نقطه کلیک کنید",
    loading: "در حال آماده‌سازی {organ}",
    autoRotate: "چرخش خودکار",
    caption: "مدل سه‌بعدی · برای کاوش روی یک نقطه کلیک کنید",
    structures: "ساختارهای این مدل",
  },

  info: {
    kicker: "{organ}",
    keyFacts: "حقایق مهم",
    size: "اندازه",
    weight: "وزن",
    daily: "روزانه",
    location: "محل قرارگیری",
    bloodSupply: "خون‌رسانی",
    function: "عملکرد",
    medical: "اهمیت پزشکی",
    didYouKnow: "آیا می‌دانستید؟",
    viewLesson: "مشاهده درس",
    animate: "انیمیشن",
    quiz: "آزمون",
    compare: "مقایسه",
  },

  compare: {
    title: "مقایسه اندام‌ها",
    comparing: "در حال مقایسه",
    reference: "مرجع",
    primaryRole: "نقش اصلی",
    scale: "مقیاس",
    vs: "در برابر",
    close: "بستن مقایسه",
  },

  cards: {
    resources: "منابع یادگیری {organ}",
    microscopic: "نمای میکروسکوپی",
    compareOrgans: "مقایسه اندام‌ها",
    functionAnimation: "انیمیشن عملکرد",
    clinicalNotes: "یادداشت‌های بالینی",
    whereItWorks: "محل عملکرد",
    commonConditions: "بیماری‌های شایع",
    exploreTissue: "بررسی بافت",
    openComparison: "باز کردن مقایسه",
    playAnimation: "پخش انیمیشن",
    seeAll: "مشاهده همه",
    seeSystem: "مشاهده دستگاه",
    playAria: "پخش انیمیشن عملکرد {organ}",
    systemAria: "مشاهده محل قرارگیری {organ} در بدن",
  },

  quiz: {
    start: "شروع آزمون نام‌گذاری",
    find: "پیدا کنید",
    progress: "{current} از {total}",
    correct: "درست",
    wrong: "تقریباً درست نبود",
    reveal: "این {label} است",
    answer: "{label} با رنگ سبز مشخص شده است",
    done: "آزمون تمام شد",
    score: "{score} از {total} پاسخ درست",
    retry: "دوباره تلاش کنید",
    exit: "خروج از آزمون",
    hint: "نقطه مربوط به ساختار را روی مدل پیدا کنید",
  },

  modal: {
    guided: "کاوش هدایت‌شده",
    close: "بستن",
    continueExploring: "ادامه کاوش",
    quizTitle: "آزمون سریع {organ}",
    motionTitle: "{organ} در حال حرکت",
    bodyTitle: "{organ} در بدن",
    insideTitle: "درون {organ}",
    quizPrompt: "کدام عبارت {organ} را بهتر توصیف می‌کند؟",
    quizA: "نقشی تخصصی در حفظ عملکرد بدن دارد",
    quizB: "کاملاً مستقل از بدن عمل می‌کند",
    quizC: "فقط هنگام خواب فعال است",
    lessonBody:
      "ساختارهای مشخص‌شده را دنبال کنید، مدل را بچرخانید و ارتباط میان شکل و عملکرد را بررسی کنید. این بخش کوتاه برای ایجاد یک درک ماندگار طراحی شده است.",
    systemIntro:
      "{location}. بررسی کنید {organ} چگونه با سایر بخش‌های بدن ارتباط دارد.",
    system: "دستگاه",
    primaryRole: "نقش اصلی",
    bloodSupply: "خون‌رسانی",
  },
};