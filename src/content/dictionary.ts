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
    title: "محمد أبو عوف | مواقع ومتاجر وأنظمة حجز",
    description:
      "مهندس اتصالات وشريك مؤسس في Coretex. أصمّم وأطوّر المواقع ومتاجر Shopify وأنظمة الحجز للشركات، بالعربية والإنجليزية.",
  },
  nav: {
    work: "أعمالي",
    services: "خدماتي",
    coretex: "Coretex",
    about: "عني",
    contact: "تواصل معي",
    skip: "تخطَّ إلى المحتوى",
    menu: "القائمة",
    close: "إغلاق القائمة",
  },
  theme: { light: "الوضع الفاتح", dark: "الوضع الداكن" },
  langSwitch: { label: "EN", title: "Read the site in English" },
  hero: {
    role: "محمد أبو عوف، مهندس اتصالات",
    title: "أهلاً، أنا محمد. أصمّم وأطوّر حلولاً رقمية تخدم عملك فعلاً.",
    lead: "مواقع ومتاجر إلكترونية وأنظمة حجز وإدارة عملاء، أتولّاها من الفكرة حتى الإطلاق، بالعربية والإنجليزية. مقيم في بورسعيد، وأعمل مع عملاء من كل مكان.",
    primary: "راسلني على إنستجرام",
    secondary: "لينكدإن",
    available: "متاح لاستقبال مشاريع جديدة",
    proof: [
      { value: "+20", label: "مشروعاً نفّذته" },
      { value: "5", label: "مجالات أعمل بها" },
      { value: "ع / EN", label: "كل مشروع باللغتين" },
    ],
    portraitAlt: "محمد أبو عوف",
  },
  work: {
    title: "أعمال مختارة",
    intro: "مشاريع نفّذتها لعملاء، والشركة التي شاركت في تأسيسها، وتجارب أطوّرها لأتعلّم أكثر.",
    kind: { client: "مشروع لعميل", company: "شركتي (شريك مؤسس)", personal: "مشروع شخصي", university: "مشروع جامعي" },
    open: "شاهد المشروع",
  },
  services: {
    title: "خدماتي",
    items: [
      { name: "تطوير المواقع", text: "مواقع سريعة وعصرية، مصمّمة لتجذب العملاء وتكبر مع نمو عملك." },
      { name: "تصميم الأنظمة", text: "بنية خلفية وقواعد بيانات متينة تتحمّل نمو المشروع وزيادة الزوار." },
      { name: "الأتمتة", text: "أربط أدواتك ببعضها لتوفّر وقتك وتتخلّص من الأخطاء اليدوية." },
      { name: "تصميم تجربة المستخدم", text: "واجهات واضحة ومريحة، يفهمها المستخدم من أول مرة." },
      { name: "متاجر Shopify", text: "متاجر مصمّمة للبيع، بقوالب وتطبيقات وتكاملات حسب احتياجك." },
    ],
  },
  about: {
    title: "عني",
    tagline: "مهندس بالدراسة، ومطوّر بالشغف.",
    bio: [
      "أنا مهندس اتصالات وإلكترونيات من بورسعيد. تعلّمت في دراستي كيف تنتقل البيانات عبر الشبكات بكفاءة وأمان، وأطبّق العقلية نفسها اليوم في تطوير المواقع والأنظمة التي يعتمد عليها عملائي.",
      "تخرّجت عام 2026، وشاركت في تأسيس Coretex، شركة تقنية ناشئة في بورسعيد. وبحكم خلفيتي في أمن المعلومات والشبكات، أحرص أن يكون كل ما أسلّمه مُختبَراً وآمناً ومصمّماً ليدوم.",
    ],
    timelineTitle: "الخبرات",
    timeline: [
      { when: "2025", what: "محلل أمن معلومات", where: "مبادرة رواد مصر الرقمية (DEPI)", note: "رصد التهديدات وكتابة قواعد الاكتشاف وتحليل سجلات الأنظمة." },
      { when: "2024", what: "تدريب CCNA لمدة 120 ساعة", where: "المعهد القومي للاتصالات (NTI)، بورسعيد", note: "توجيه البيانات وتحويلها وتصميم الشبكات." },
      { when: "2023", what: "مهندس متدرّب", where: "SEWS-EG (سوميتومو)", note: "أنظمة الضفائر الكهربائية." },
      { when: "2023–24", what: "مسابقات البرمجة", where: "ACPC وIEEE", note: "حلّ مسائل خوارزمية ضمن فريق." },
    ],
    educationTitle: "التعليم",
    education: "بكالوريوس هندسة الإلكترونيات والاتصالات، جامعة بورسعيد (2021–2026)، بتقدير جيد جداً.",
    skillsTitle: "المهارات",
    skills: [
      { group: "الويب", items: ["Next.js", "React", "TypeScript", "Shopify", "WordPress", "Supabase"] },
      { group: "البرمجة", items: ["Python", "C++", "C#", "SQL"] },
      { group: "الشبكات والأمن", items: ["CCNA", "Linux", "Nmap", "تحليل السجلات"] },
      { group: "التصميم", items: ["UI/UX", "الحركة والتفاعل", "واجهات عربية (RTL)"] },
    ],
    languages: "اللغات: العربية (اللغة الأم)، والإنجليزية (بطلاقة).",
  },
  contact: {
    title: "لديك فكرة مشروع؟ لنتحدث عنها",
    lead: "أسرع طريقة للتواصل معي هي إنستجرام أو لينكدإن، أو اترك رسالتك هنا وسأردّ عليك خلال يوم.",
    form: {
      name: "الاسم",
      reach: "كيف أتواصل معك؟",
      reachHint: "البريد الإلكتروني أو رقم الهاتف أو حساب إنستجرام",
      message: "حدّثني عن مشروعك",
      send: "إرسال",
      sending: "جارٍ الإرسال…",
      sent: "وصلتني رسالتك، شكراً لك! سأردّ عليك خلال يوم.",
      invalid: "يرجى مراجعة الحقول المحدّدة.",
      failed: "تعذّر إرسال الرسالة. يمكنك مراسلتي على إنستجرام أو عبر البريد الإلكتروني.",
      limited: "أرسلت رسائل كثيرة في وقت قصير. حاول مرة أخرى بعد دقائق.",
    },
    direct: "أو تواصل معي مباشرة",
  },
  project: {
    back: "كل الأعمال",
    need: "احتياج العميل",
    delivered: "ما قدّمناه",
    engineering: "التفاصيل التقنية",
    results: "النتائج",
    resultsNote: "سبتمبر مقارنة بأغسطس 2026",
    stack: "التقنيات المستخدمة",
    visit: "زيارة الموقع",
    next: "المشروع التالي",
    year: "السنة",
    type: "النوع",
  },
  footer: { made: "تصميم وتطوير: محمد أبو عوف.", top: "إلى الأعلى" },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (locale: Locale) => dictionaries[locale];
