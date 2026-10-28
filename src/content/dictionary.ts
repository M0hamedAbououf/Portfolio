import type { Locale } from "./locales";

export const links = {
  instagram: "https://www.instagram.com/coretex.agency/",
  linkedin: "https://www.linkedin.com/in/mohamed-abou-ouf",
  whatsapp: "https://wa.me/201017670216",
  email: "mohabououf@gmail.com",
  github: "https://github.com/M0hamedAbououf",
  coretex: "https://coretex-tech.vercel.app/",
};

const en = {
  meta: {
    title: "Mohamed Abououf, websites, stores and booking systems",
    description:
      "Communications engineer and co-founder of Coretex. Websites, Shopify stores and booking systems for growing businesses, in Arabic and English.",
  },
  nav: { work: "Work", coretex: "Coretex", about: "About", contact: "Contact", skip: "Skip to content" },
  theme: { light: "Light mode", dark: "Dark mode" },
  langSwitch: { label: "عربي", title: "اقرأ الموقع بالعربية" },
  hero: {
    role: "Communications engineer, co-founder of Coretex",
    title: "Websites, stores and booking systems that bring in customers.",
    lead: "I'm Mohamed. With Coretex, our studio in Cairo, I design, build and run complete systems for growing businesses, in Arabic and English.",
    primary: "Message me on Instagram",
    secondary: "LinkedIn",
    proof: [
      { value: "+150%", label: "conversion, Arab Collective" },
      { value: "6", label: "projects shown here" },
      { value: "EN / ع", label: "every build bilingual" },
    ],
    portraitAlt: "Mohamed Abououf",
  },
  work: {
    title: "Selected work",
    intro: "Client work delivered with Coretex, plus the projects I build to learn.",
    kind: { client: "Coretex client", personal: "Personal project", university: "University project" },
    open: "View project",
  },
  coretex: {
    title: "Coretex",
    lead: "Coretex is a tech studio in Cairo run by four people as one team. The people you talk to are the people who build it, from the first call to a live system.",
    pillars: [
      { name: "Build", text: "Websites, web apps and SaaS products that load fast and convert." },
      { name: "Commerce", text: "Shopify themes, custom apps and conversion work that turn traffic into orders." },
      { name: "Automate", text: "WhatsApp, email and CRM workflows that follow up for you." },
      { name: "Grow", text: "AI assistants, analytics and experiments that improve every month." },
    ],
    site: "Visit the Coretex site",
    instagram: "Coretex on Instagram",
  },
  about: {
    title: "About",
    bio: [
      "I'm a communications and electronics engineer from Port Said. I studied how signals and networks carry information, and now I use the same thinking to build websites and systems that carry a business.",
      "Before co-founding Coretex I worked in information security and network engineering, which is why the things we ship are tested, secure and built to keep running.",
    ],
    timelineTitle: "Experience",
    timeline: [
      { when: "2025", what: "Information Security Analyst", where: "DEPI, Digital Egypt Pioneers Initiative", note: "Threat hunting, detection rules and log analysis." },
      { when: "2024", what: "CCNA training, 120 hours", where: "NTI, Port Said", note: "Routing, switching and network design." },
      { when: "2023", what: "Trainee engineer", where: "SEWS-EG (Sumitomo)", note: "Electrical wiring systems." },
      { when: "2023–24", what: "Programming competitions", where: "ACPC and IEEE", note: "Algorithmic problem solving in teams." },
    ],
    educationTitle: "Education",
    education: "B.Eng. Communications and Electronics, Port Said University, 2021 to present. Grade: Very Good.",
    skillsTitle: "Skills",
    skills: [
      { group: "Web", items: ["Next.js", "React", "TypeScript", "Shopify", "WordPress", "Supabase"] },
      { group: "Programming", items: ["Python", "C++", "C#", "SQL"] },
      { group: "Networks and security", items: ["CCNA", "Linux", "Nmap", "Log analysis"] },
      { group: "Design", items: ["UI/UX", "Motion", "Arabic RTL"] },
    ],
    languages: "Arabic (native), English (fluent)",
  },
  contact: {
    title: "Let's talk about your project",
    lead: "The fastest way to reach me is Instagram or LinkedIn. Or leave a message here and I'll reply within a day.",
    form: {
      name: "Your name",
      reach: "How can I reach you?",
      reachHint: "Email, phone or Instagram handle",
      message: "What do you want to build?",
      send: "Send message",
      sending: "Sending…",
      sent: "Thanks, your message is on its way. I'll reply within a day.",
      invalid: "Please check the highlighted fields.",
      failed: "The message didn't send. Please message me on Instagram or email instead.",
      limited: "Too many messages in a short time. Please try again in a few minutes.",
    },
    direct: "Or reach me directly",
  },
  project: {
    back: "All work",
    need: "What they needed",
    delivered: "What we delivered",
    engineering: "Under the hood",
    results: "Results",
    resultsNote: "September vs August 2026",
    stack: "Built with",
    visit: "Visit the live site",
    next: "Next project",
    year: "Year",
    type: "Type",
  },
  footer: { made: "Designed and built by Mohamed Abououf.", top: "Back to top" },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "محمد أبو عوف، مواقع ومتاجر وأنظمة حجز",
    description:
      "مهندس اتصالات وشريك مؤسس في Coretex. مواقع ومتاجر Shopify وأنظمة حجز للشركات النامية، بالعربية والإنجليزية.",
  },
  nav: { work: "الأعمال", coretex: "Coretex", about: "نبذة", contact: "تواصل", skip: "انتقل إلى المحتوى" },
  theme: { light: "الوضع الفاتح", dark: "الوضع الداكن" },
  langSwitch: { label: "EN", title: "Read the site in English" },
  hero: {
    role: "مهندس اتصالات وشريك مؤسس في Coretex",
    title: "مواقع ومتاجر وأنظمة حجز تجلب لك العملاء.",
    lead: "أنا محمد. مع Coretex، استوديو التقنية الخاص بنا في القاهرة، أصمم وأبني وأدير أنظمة متكاملة للشركات النامية، بالعربية والإنجليزية.",
    primary: "راسلني على إنستجرام",
    secondary: "لينكدإن",
    proof: [
      { value: "‎+150%", label: "معدل تحويل، Arab Collective" },
      { value: "6", label: "مشاريع معروضة هنا" },
      { value: "ع / EN", label: "كل مشروع بلغتين" },
    ],
    portraitAlt: "محمد أبو عوف",
  },
  work: {
    title: "أعمال مختارة",
    intro: "أعمال لعملاء نفذناها مع Coretex، ومشاريع أبنيها لأتعلم.",
    kind: { client: "عميل Coretex", personal: "مشروع شخصي", university: "مشروع جامعي" },
    open: "عرض المشروع",
  },
  coretex: {
    title: "Coretex",
    lead: "Coretex استوديو تقنية في القاهرة يديره أربعة أشخاص كفريق واحد. من تتحدث معهم هم من يبنون مشروعك، من أول مكالمة حتى يعمل النظام.",
    pillars: [
      { name: "البناء", text: "مواقع وتطبيقات ويب ومنتجات SaaS سريعة التحميل وتحقق المبيعات." },
      { name: "التجارة", text: "قوالب Shopify وتطبيقات مخصصة وتحسين للتحويل يحوّل الزيارات إلى طلبات." },
      { name: "الأتمتة", text: "مسارات واتساب وبريد وCRM تتابع العملاء نيابة عنك." },
      { name: "النمو", text: "مساعدات ذكاء اصطناعي وتحليلات وتجارب تتحسن كل شهر." },
    ],
    site: "زر موقع Coretex",
    instagram: "Coretex على إنستجرام",
  },
  about: {
    title: "نبذة",
    bio: [
      "أنا مهندس اتصالات وإلكترونيات من بورسعيد. درست كيف تنقل الإشارات والشبكات المعلومات، وأستخدم اليوم نفس طريقة التفكير لبناء مواقع وأنظمة تحمل أعمال عملائي.",
      "قبل تأسيس Coretex عملت في أمن المعلومات وهندسة الشبكات، ولهذا ما نسلّمه مختبَر وآمن ومبني ليستمر في العمل.",
    ],
    timelineTitle: "الخبرة",
    timeline: [
      { when: "2025", what: "محلل أمن معلومات", where: "مبادرة رواد مصر الرقمية DEPI", note: "تتبع التهديدات وقواعد الرصد وتحليل السجلات." },
      { when: "2024", what: "تدريب CCNA، 120 ساعة", where: "معهد NTI، بورسعيد", note: "التوجيه والتبديل وتصميم الشبكات." },
      { when: "2023", what: "مهندس متدرب", where: "SEWS-EG (سوميتومو)", note: "أنظمة الأسلاك الكهربائية." },
      { when: "2023–24", what: "مسابقات البرمجة", where: "ACPC وIEEE", note: "حل المسائل الخوارزمية ضمن فريق." },
    ],
    educationTitle: "التعليم",
    education: "بكالوريوس هندسة الاتصالات والإلكترونيات، جامعة بورسعيد، من 2021 حتى الآن. التقدير: جيد جداً.",
    skillsTitle: "المهارات",
    skills: [
      { group: "الويب", items: ["Next.js", "React", "TypeScript", "Shopify", "WordPress", "Supabase"] },
      { group: "البرمجة", items: ["Python", "C++", "C#", "SQL"] },
      { group: "الشبكات والأمن", items: ["CCNA", "Linux", "Nmap", "تحليل السجلات"] },
      { group: "التصميم", items: ["UI/UX", "الحركة", "العربية من اليمين لليسار"] },
    ],
    languages: "العربية (اللغة الأم)، الإنجليزية (بطلاقة)",
  },
  contact: {
    title: "لنتحدث عن مشروعك",
    lead: "أسرع طريقة للتواصل معي هي إنستجرام أو لينكدإن. أو اترك رسالتك هنا وسأرد خلال يوم.",
    form: {
      name: "اسمك",
      reach: "كيف أتواصل معك؟",
      reachHint: "بريد إلكتروني أو رقم هاتف أو حساب إنستجرام",
      message: "ماذا تريد أن تبني؟",
      send: "أرسل الرسالة",
      sending: "جارٍ الإرسال…",
      sent: "شكراً، وصلت رسالتك. سأرد عليك خلال يوم.",
      invalid: "من فضلك راجع الحقول المحددة.",
      failed: "لم تُرسل الرسالة. راسلني على إنستجرام أو عبر البريد بدلاً من ذلك.",
      limited: "رسائل كثيرة في وقت قصير. حاول مرة أخرى بعد دقائق.",
    },
    direct: "أو تواصل معي مباشرة",
  },
  project: {
    back: "كل الأعمال",
    need: "ما احتاجه العميل",
    delivered: "ما قدمناه",
    engineering: "من الداخل",
    results: "النتائج",
    resultsNote: "سبتمبر مقارنة بأغسطس 2026",
    stack: "التقنيات",
    visit: "زر الموقع",
    next: "المشروع التالي",
    year: "السنة",
    type: "النوع",
  },
  footer: { made: "تصميم وتطوير محمد أبو عوف.", top: "العودة للأعلى" },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (locale: Locale) => dictionaries[locale];
