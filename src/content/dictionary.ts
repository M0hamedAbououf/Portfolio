import type { Locale } from "./locales";

export const links = {
  instagram: "https://www.instagram.com/mohamed_abououf/",
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
    role: "Mohamed Abououf, communications engineer",
    title: "Hi, I'm Mohamed. I build digital products that work.",
    lead: "Websites, online stores, booking systems and CRMs, designed and engineered from start to finish, in Arabic and English. Based in Port Said, working with clients everywhere.",
    primary: "Message me on Instagram",
    secondary: "LinkedIn",
    available: "Available for new projects",
    proof: [
      { value: "20+", label: "projects delivered" },
      { value: "5", label: "services" },
      { value: "EN / ع", label: "every project bilingual" },
    ],
    portraitAlt: "Mohamed Abououf",
  },
  work: {
    title: "Selected work",
    intro: "Client work, the studio I co-founded, and the projects I build to learn.",
    kind: { client: "Client project", company: "My company, co-founder", personal: "Personal project", university: "University project" },
    open: "View project",
  },
  services: {
    title: "What I do",
    items: [
      { name: "Website development", text: "Fast, modern websites built to convert and to grow with the business." },
      { name: "System design", text: "Backends and databases that hold up as the product and its traffic grow." },
      { name: "Automation", text: "Connecting tools through their APIs to save time and remove manual errors." },
      { name: "UI/UX design", text: "Interfaces people enjoy using: clear, calm and easy to learn." },
      { name: "Shopify development", text: "Stores built to sell, with custom themes, apps and integrations." },
    ],
  },
  about: {
    title: "About",
    tagline: "Engineer by training. Builder by passion.",
    bio: [
      "I'm a communications and electronics engineer from Port Said. I studied how signals and networks carry information, and now I use the same thinking to build websites and systems that carry a business.",
      "I graduated in 2026 and co-founded Coretex, a small tech studio in Port Said. My background in information security and network engineering is why the things I ship are tested, secure and built to keep running.",
    ],
    timelineTitle: "Experience",
    timeline: [
      { when: "2025", what: "Information Security Analyst", where: "DEPI, Digital Egypt Pioneers Initiative", note: "Threat hunting, detection rules and log analysis." },
      { when: "2024", what: "CCNA training, 120 hours", where: "NTI, Port Said", note: "Routing, switching and network design." },
      { when: "2023", what: "Trainee engineer", where: "SEWS-EG (Sumitomo)", note: "Electrical wiring systems." },
      { when: "2023–24", what: "Programming competitions", where: "ACPC and IEEE", note: "Algorithmic problem solving in teams." },
    ],
    educationTitle: "Education",
    education: "B.Eng. Communications and Electronics, Port Said University, 2021 to 2026. Grade: Very Good.",
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
    role: "محمد أبو عوف، مهندس اتصالات",
    title: "أهلاً، أنا محمد. أصمّم وأطوّر منتجات رقمية تعمل فعلاً.",
    lead: "مواقع ومتاجر إلكترونية وأنظمة حجز وCRM، أصمّمها وأطوّرها من البداية للنهاية بالعربية والإنجليزية. من بورسعيد، وأعمل مع عملاء في كل مكان.",
    primary: "راسلني على إنستجرام",
    secondary: "لينكدإن",
    available: "متاح لمشاريع جديدة",
    proof: [
      { value: "+20", label: "مشروعاً منجزاً" },
      { value: "5", label: "خدمات" },
      { value: "ع / EN", label: "كل مشروع بلغتين" },
    ],
    portraitAlt: "محمد أبو عوف",
  },
  work: {
    title: "أعمال مختارة",
    intro: "أعمال لعملاء، والاستوديو الذي شاركت في تأسيسه، ومشاريع أطوّرها لأتعلم.",
    kind: { client: "مشروع لعميل", company: "شركتي، شريك مؤسس", personal: "مشروع شخصي", university: "مشروع جامعي" },
    open: "عرض المشروع",
  },
  services: {
    title: "ماذا أقدم",
    items: [
      { name: "تطوير المواقع", text: "مواقع سريعة وحديثة مبنية لتحقق المبيعات وتنمو مع العمل." },
      { name: "تصميم الأنظمة", text: "خوادم وقواعد بيانات تصمد مع نمو المنتج وعدد زواره." },
      { name: "الأتمتة", text: "ربط الأدوات عبر واجهاتها البرمجية لتوفير الوقت وتقليل الأخطاء اليدوية." },
      { name: "تصميم واجهات المستخدم", text: "واجهات يستمتع الناس باستخدامها: واضحة وهادئة وسهلة التعلم." },
      { name: "تطوير متاجر Shopify", text: "متاجر مبنية لتبيع، بقوالب وتطبيقات وتكاملات مخصصة." },
    ],
  },
  about: {
    title: "نبذة",
    tagline: "مهندس بالدراسة، وصانع بالشغف.",
    bio: [
      "أنا مهندس اتصالات وإلكترونيات من بورسعيد. درست كيف تنقل الإشارات والشبكات المعلومات، وأستخدم اليوم نفس طريقة التفكير لبناء مواقع وأنظمة تحمل أعمال عملائي.",
      "تخرجت عام 2026 وشاركت في تأسيس Coretex، استوديو تقنية صغير في بورسعيد. خلفيتي في أمن المعلومات وهندسة الشبكات هي سبب أن ما أسلّمه مختبَر وآمن ومبني ليستمر في العمل.",
    ],
    timelineTitle: "الخبرة",
    timeline: [
      { when: "2025", what: "محلل أمن معلومات", where: "مبادرة رواد مصر الرقمية DEPI", note: "تتبع التهديدات وقواعد الرصد وتحليل السجلات." },
      { when: "2024", what: "تدريب CCNA، 120 ساعة", where: "معهد NTI، بورسعيد", note: "التوجيه والتبديل وتصميم الشبكات." },
      { when: "2023", what: "مهندس متدرب", where: "SEWS-EG (سوميتومو)", note: "أنظمة الأسلاك الكهربائية." },
      { when: "2023–24", what: "مسابقات البرمجة", where: "ACPC وIEEE", note: "حل المسائل الخوارزمية ضمن فريق." },
    ],
    educationTitle: "التعليم",
    education: "بكالوريوس هندسة الاتصالات والإلكترونيات، جامعة بورسعيد، 2021 إلى 2026. التقدير: جيد جداً.",
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
