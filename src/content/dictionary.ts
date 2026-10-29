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
  nav: {
    work: "Work",
    services: "Services",
    coretex: "Coretex",
    about: "About",
    contact: "Contact",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close menu",
  },
  theme: { light: "Light mode", dark: "Dark mode" },
  langSwitch: { label: "عربي", title: "اقرأ الموقع بالعربية" },
  hero: {
    role: "Mohamed Abououf, communications engineer",
    title: "Hi, I am Mohamed. I build digital products that work.",
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
    title: "Projects I have built",
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
      "I am a communications and electronics engineer from Port Said. I studied how signals and networks carry information, and now I use the same thinking to build websites and systems that carry a business.",
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
    title: "Have a project in mind? Tell me about it",
    lead: "The fastest way to reach me is Instagram or LinkedIn. Or leave a message here and I will reply within a day.",
    form: {
      name: "Your name",
      reach: "How can I reach you?",
      reachHint: "Email, phone or Instagram handle",
      message: "What do you want to build?",
      send: "Send message",
      sending: "Sending…",
      sent: "Thanks, your message is on its way. I will reply within a day.",
      invalid: "Please check the highlighted fields.",
      failed: "The message did not send. Please message me on Instagram or email instead.",
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
    title: "محمد أبو عوف | مواقع ومتاجر وأنظمة حجز",
    description:
      "مهندس اتصالات وشريك مؤسس في Coretex. بصمّم وبنفّذ مواقع ومتاجر Shopify وأنظمة حجز للشركات، عربي وإنجليزي.",
  },
  nav: {
    work: "شغلي",
    services: "بعمل إيه",
    coretex: "Coretex",
    about: "مين أنا",
    contact: "كلّمني",
    skip: "روح للمحتوى",
    menu: "القائمة",
    close: "اقفل القائمة",
  },
  theme: { light: "الوضع الفاتح", dark: "الوضع الغامق" },
  langSwitch: { label: "EN", title: "Read the site in English" },
  hero: {
    role: "محمد أبو عوف، مهندس اتصالات",
    title: "أهلاً، أنا محمد. بحوّل فكرتك لموقع أو سيستم شغّال صح.",
    lead: "بصمّم وبنفّذ مواقع ومتاجر أونلاين وأنظمة حجز وسيستمات لإدارة العملاء، وبفضل معاك من أول فكرة لحد ما المشروع يوصل لعملائك، عربي وإنجليزي. أنا من بورسعيد، وبشتغل مع عملاء من جوه مصر وبرّه.",
    primary: "كلّمني على إنستجرام",
    secondary: "لينكدإن",
    available: "فاضي لمشاريع جديدة دلوقتي",
    proof: [
      { value: "+20", label: "مشروع خلّصته" },
      { value: "5", label: "خدمات بقدّمها" },
      { value: "ع / EN", label: "عربي وإنجليزي في كل مشروع" },
    ],
    portraitAlt: "محمد أبو عوف",
  },
  work: {
    title: "شوية من شغلي",
    intro: "مشاريع عملتها لعملائي، والشركة اللي أسّستها مع شركائي، وتجارب شخصية بتعلّم منها.",
    kind: { client: "مشروع لعميل", company: "شركتي (شريك مؤسس)", personal: "مشروع شخصي", university: "مشروع في الجامعة" },
    open: "تفاصيل المشروع",
  },
  services: {
    title: "بعمل إيه؟",
    items: [
      { name: "تطوير المواقع", text: "مواقع سريعة وشكلها حلو بتجيبلك عملاء، وبتكبر معاك كل ما شغلك يكبر." },
      { name: "تصميم الأنظمة", text: "سيرفرات وقواعد بيانات قوية، متتأثرش لو الزوار زادوا أو المشروع كبر." },
      { name: "الأتمتة", text: "بربط الأدوات اللي بتستخدمها ببعض، فالحاجات المتكررة تتعمل لوحدها والغلط يقلّ." },
      { name: "تصميم تجربة المستخدم", text: "واجهات واضحة ومريحة، اللي يفتحها يفهمها من أول مرة." },
      { name: "متاجر Shopify", text: "متاجر جاهزة تبيع من أول يوم، بتصميمات وتطبيقات على مقاس شغلك." },
    ],
  },
  about: {
    title: "مين أنا؟",
    tagline: "درست هندسة، وحبّيت البرمجة.",
    bio: [
      "أنا مهندس اتصالات وإلكترونيات من بورسعيد. درست إزاي البيانات بتتنقل في الشبكات بسرعة وأمان، ودلوقتي بستخدم الخبرة دي في إني أعمل مواقع وسيستمات عملائي بيعتمدوا عليها في شغلهم كل يوم.",
      "اتخرّجت سنة 2026، وأسّست Coretex مع شركائي، وهي شركة تقنية ناشئة في بورسعيد. ولأني اشتغلت في أمن المعلومات والشبكات، بهتم إن كل حاجة بسلّمها تكون متجرّبة وآمنة، وتفضل شغّالة من غير مشاكل لسنين.",
    ],
    timelineTitle: "خبراتي",
    timeline: [
      { when: "2025", what: "محلل أمن معلومات", where: "مبادرة رواد مصر الرقمية (DEPI)", note: "رصد التهديدات وكتابة قواعد اكتشافها وتحليل سجلات الأنظمة." },
      { when: "2024", what: "تدريب CCNA لمدة 120 ساعة", where: "المعهد القومي للاتصالات (NTI)، بورسعيد", note: "توجيه البيانات وتحويلها وتصميم الشبكات." },
      { when: "2023", what: "مهندس متدرّب", where: "SEWS-EG (سوميتومو)", note: "أنظمة الضفاير الكهربائية للعربيات." },
      { when: "2023–24", what: "مسابقات برمجة", where: "ACPC وIEEE", note: "حل مسائل خوارزميات مع فريق." },
    ],
    educationTitle: "دراستي",
    education: "بكالوريوس هندسة إلكترونيات واتصالات، جامعة بورسعيد (2021–2026)، بتقدير جيد جداً.",
    skillsTitle: "مهاراتي",
    skills: [
      { group: "الويب", items: ["Next.js", "React", "TypeScript", "Shopify", "WordPress", "Supabase"] },
      { group: "البرمجة", items: ["Python", "C++", "C#", "SQL"] },
      { group: "الشبكات والأمن", items: ["CCNA", "Linux", "Nmap", "تحليل السجلات"] },
      { group: "التصميم", items: ["UI/UX", "الأنيميشن", "واجهات عربي (RTL)"] },
    ],
    languages: "اللغات: العربي (لغتي الأم)، والإنجليزي (بطلاقة).",
  },
  contact: {
    title: "عندك فكرة مشروع؟ احكيلي عنها",
    lead: "لو عايز رد أسرع ابعتلي على إنستجرام أو لينكدإن، أو سيب رسالتك هنا وهرد عليك خلال 24 ساعة.",
    form: {
      name: "اسمك",
      reach: "أكلّمك إزاي؟",
      reachHint: "إيميل أو رقم موبايل أو حساب إنستجرام",
      message: "قولّي عايز تعمل إيه",
      send: "ابعت",
      sending: "بيتبعت…",
      sent: "رسالتك وصلت، شكراً! هرد عليك خلال 24 ساعة.",
      invalid: "راجع الخانات اللي متعلّم عليها.",
      failed: "الرسالة متبعتتش. كلّمني على إنستجرام أو ابعتلي إيميل بدل كده.",
      limited: "بعتّ رسايل كتير في وقت قصير. جرّب تاني بعد شوية.",
    },
    direct: "تقدر تكلّمني على",
  },
  project: {
    back: "ارجع لشغلي",
    need: "العميل كان محتاج إيه؟",
    delivered: "عملنا إيه؟",
    engineering: "التفاصيل التقنية",
    results: "النتايج",
    resultsNote: "سبتمبر مقارنة بأغسطس 2026",
    stack: "التقنيات اللي استخدمناها",
    visit: "افتح الموقع",
    next: "المشروع اللي بعده",
    year: "السنة",
    type: "النوع",
  },
  footer: { made: "تصميم وتنفيذ: محمد أبو عوف.", top: "اطلع لفوق" },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (locale: Locale) => dictionaries[locale];
