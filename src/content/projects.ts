import type { Locale } from "./locales";

type Text = Record<Locale, string>;

export type ProjectKind = "client" | "company" | "personal" | "university";

export interface Shot {
  src: string;
  width: number;
  height: number;
  alt: Text;
  phone?: boolean;
}

/** A titled group of delivered work, used when one project had separate parts. */
export interface Part {
  title: Text;
  items: Text[];
}

export interface Project {
  slug: string;
  name: Text;
  kind: ProjectKind;
  year: string;
  summary: Text;
  highlight: Text;
  live?: { url: string; label: string };
  status?: Text;
  stack: string[];
  /** Replaces the default "What they needed" heading. */
  needTitle?: Text;
  need: Text;
  delivered: Text[];
  /** When set, shown instead of `delivered`, one column per part. */
  parts?: Part[];
  engineering: Text[];
  results?: { value: string; label: Text }[];
  shots: Shot[];
}

export const projects: Project[] = [
  {
    slug: "arab-collective",
    name: { en: "Arab Collective", ar: "Arab Collective" },
    kind: "client",
    year: "2026",
    summary: {
      en: "An influencer CRM that sends PR gifts straight from Shopify stock, and a Shopify store with a Design Studio where customers create their own piece.",
      ar: "نظام CRM للمؤثرين يرسل الهدايا مباشرة من مخزون Shopify، ومتجر Shopify باستوديو تصميم يتيح للعملاء تصميم قطعتهم بأنفسهم.",
    },
    highlight: { en: "+150% conversion", ar: "‎+150% تحويل" },
    live: { url: "https://arabcollective.com", label: "arabcollective.com" },
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Shopify Admin API", "Shopify"],
    need: {
      en: "Arab Collective, an Arab-heritage streetwear brand selling worldwide, needed two things: one place to manage its influencers and send them PR gifts straight from store stock, and a store that turns visits into orders in English and Arabic.",
      ar: "احتاجت Arab Collective، علامة ملابس مستوحاة من التراث العربي تبيع حول العالم، شيئين: مكاناً واحداً لإدارة المؤثرين وإرسال هدايا لهم مباشرة من مخزون المتجر، ومتجراً يحوّل الزيارات إلى طلبات بالعربية والإنجليزية.",
    },
    delivered: [],
    parts: [
      {
        title: { en: "The influencer CRM I built", ar: "نظام CRM للمؤثرين الذي بنيته" },
        items: [
          {
            en: "A roster of influencers across the Gulf, the Levant and North Africa, with their campaigns and results: revenue, clicks and return on spend.",
            ar: "قائمة بالمؤثرين في الخليج والشام وشمال أفريقيا، مع حملاتهم ونتائجهم: الإيرادات والنقرات والعائد على الإنفاق.",
          },
          {
            en: "A gift box builder that pulls live stock from the Shopify store by collection. Pick the items and sizes, and the gift goes out as a free Shopify draft order.",
            ar: "أداة لتجهيز صندوق الهدايا تسحب المخزون الحي من متجر Shopify حسب المجموعة. اختر القطع والمقاسات، فتُرسل الهدية كطلب مسودة مجاني في Shopify.",
          },
          {
            en: "Delivery address and phone fill in from the database, and any correction can be saved back to the influencer's profile.",
            ar: "يُملأ عنوان التوصيل والهاتف تلقائياً من قاعدة البيانات، ويمكن حفظ أي تعديل في ملف المؤثر.",
          },
          {
            en: "Every gift is logged, and the dashboard shows a live feed of gifts sent with the courier and delivery status.",
            ar: "تُسجَّل كل هدية، وتعرض لوحة التحكم سجلاً حياً بالهدايا المرسلة مع شركة الشحن وحالة التوصيل.",
          },
        ],
      },
      {
        title: { en: "What we did on the Shopify store", ar: "ما قدمناه في متجر Shopify" },
        items: [
          {
            en: "A conversion-focused Shopify store, built to sell from the first visit.",
            ar: "متجر Shopify مصمم لرفع معدل التحويل، ليبيع من أول زيارة.",
          },
          {
            en: "A five-step Design Studio: pick the item, choose colour and size, place the print, add the design, then review.",
            ar: "استوديو تصميم من خمس خطوات: اختيار القطعة، ثم اللون والمقاس، ثم مكان الطباعة، ثم إضافة التصميم، ثم المراجعة.",
          },
          {
            en: "English and Arabic storefront with language and currency selectors for customers abroad.",
            ar: "واجهة متجر بالعربية والإنجليزية مع اختيار اللغة والعملة للعملاء خارج مصر.",
          },
        ],
      },
    ],
    engineering: [
      {
        en: "The CRM is built for catalogues of 500+ products: collections load first, products load on demand and stay cached, and one search covers the whole store.",
        ar: "النظام مبني لكتالوجات تتجاوز 500 منتج: تُحمَّل المجموعات أولاً، ثم المنتجات عند الطلب وتبقى محفوظة، مع بحث واحد يغطي المتجر كله.",
      },
      {
        en: "Gifts are private draft orders, so they never appear on the public store.",
        ar: "الهدايا طلبات مسودة خاصة، فلا تظهر أبداً في المتجر العام.",
      },
      {
        en: "Cleared Shopify's protected customer data review so gift orders can carry delivery details.",
        ar: "اجتزت مراجعة Shopify لبيانات العملاء المحمية لتحمل طلبات الهدايا بيانات التوصيل.",
      },
    ],
    results: [
      { value: "+150%", label: { en: "conversion rate", ar: "معدل التحويل" } },
      { value: "+147.5%", label: { en: "add-to-cart rate", ar: "معدل الإضافة إلى السلة" } },
      { value: "+75.6%", label: { en: "revenue per visitor", ar: "الإيراد لكل زائر" } },
    ],
    shots: [
      { src: "/work/arab-collective/home.jpg", width: 1440, height: 900, alt: { en: "Arab Collective home page", ar: "الصفحة الرئيسية لمتجر Arab Collective" } },
      { src: "/work/arab-collective/design-studio.jpg", width: 1440, height: 900, alt: { en: "The Design Studio, step one: choose the item", ar: "استوديو التصميم، الخطوة الأولى: اختيار القطعة" } },
      { src: "/work/arab-collective/home-mobile.jpg", width: 600, height: 1022, alt: { en: "The store on a phone", ar: "المتجر على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "coretex",
    name: { en: "Coretex", ar: "Coretex" },
    kind: "company",
    year: "2026",
    summary: {
      en: "The tech studio I co-founded in Port Said with three partners: booking systems, online stores, web apps, CRM and AI automations.",
      ar: "استوديو التقنية الذي شاركت في تأسيسه في بورسعيد مع ثلاثة شركاء: أنظمة حجز ومتاجر إلكترونية وتطبيقات ويب وأنظمة CRM وأتمتة بالذكاء الاصطناعي.",
    },
    highlight: { en: "Co-founder", ar: "شريك مؤسس" },
    live: { url: "https://coretex-tech.vercel.app/", label: "coretex-tech.vercel.app" },
    stack: ["Next.js", "React", "GSAP", "Supabase", "Shopify", "n8n"],
    needTitle: { en: "Why I co-founded it", ar: "لماذا شاركت في تأسيسها" },
    need: {
      en: "I'm one of Coretex's four co-founders. We started it so a growing business can get the whole system from one team, where the people you talk to are the people who build it.",
      ar: "أنا واحد من أربعة شركاء مؤسسين لـ Coretex. أسسناها ليحصل أي عمل نامٍ على النظام كاملاً من فريق واحد، يكون فيه من تتحدث معهم هم من يبنون مشروعك.",
    },
    delivered: [],
    parts: [
      {
        title: { en: "What we provide", ar: "ما نقدمه" },
        items: [
          {
            en: "Build: websites, web apps and SaaS products that load fast and convert.",
            ar: "البناء: مواقع وتطبيقات ويب ومنتجات SaaS سريعة التحميل وتحقق المبيعات.",
          },
          {
            en: "Commerce: Shopify themes, custom apps and conversion work that turn traffic into orders.",
            ar: "التجارة: قوالب Shopify وتطبيقات مخصصة وتحسين للتحويل يحوّل الزيارات إلى طلبات.",
          },
          {
            en: "Automate: WhatsApp, email and CRM workflows that follow up with customers for you.",
            ar: "الأتمتة: مسارات واتساب وبريد وCRM تتابع العملاء نيابة عنك.",
          },
          {
            en: "Grow: AI assistants, analytics and experiments that improve every month.",
            ar: "النمو: مساعدات ذكاء اصطناعي وتحليلات وتجارب تتحسن كل شهر.",
          },
        ],
      },
      {
        title: { en: "How a build runs", ar: "كيف ننفذ المشروع" },
        items: [
          {
            en: "A free fit call, then a clear plan with a fixed scope and one quick win live in the first week.",
            ar: "مكالمة تعارف مجانية، ثم خطة واضحة بنطاق محدد ونتيجة سريعة تعمل في الأسبوع الأول.",
          },
          {
            en: "Weekly demos on real links during the build, so the client sees progress instead of status reports.",
            ar: "عروض أسبوعية على روابط حقيقية أثناء التنفيذ، ليرى العميل التقدم بدلاً من التقارير.",
          },
          {
            en: "Launch, then 30 days of care: we measure, fix what the data shows and train the team.",
            ar: "الإطلاق، ثم ثلاثون يوماً من المتابعة: نقيس ونصلح ما تكشفه البيانات وندرّب الفريق.",
          },
        ],
      },
    ],
    engineering: [
      {
        en: "The Coretex site itself is bilingual with real Arabic right-to-left, light and dark themes and an animated 3D mark.",
        ar: "موقع Coretex نفسه ثنائي اللغة بعربية حقيقية من اليمين لليسار، مع وضعين فاتح وداكن وشعار ثلاثي الأبعاد متحرك.",
      },
      {
        en: "Coretex OS, our own internal platform for leads, tasks, content and performance, with role-based access and live updates.",
        ar: "Coretex OS، منصتنا الداخلية لإدارة العملاء المحتملين والمهام والمحتوى والأداء، بصلاحيات حسب الدور وتحديثات لحظية.",
      },
    ],
    shots: [
      { src: "/work/coretex/home.jpg", width: 1440, height: 900, alt: { en: "The Coretex website", ar: "موقع Coretex" } },
      { src: "/work/coretex/home-mobile.jpg", width: 600, height: 1022, alt: { en: "Coretex on a phone", ar: "Coretex على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "dabah-house",
    name: { en: "Dabah House", ar: "Dabah House" },
    kind: "client",
    year: "2026",
    summary: {
      en: "Bilingual booking platform: clients book, pay and send proof in one flow, and the team reviews every booking live.",
      ar: "منصة حجز ثنائية اللغة: يحجز العميل ويدفع ويرسل الإثبات في خطوة واحدة، ويراجع الفريق كل حجز لحظياً.",
    },
    highlight: { en: "Live", ar: "يعمل الآن" },
    live: { url: "https://eldabah.com", label: "eldabah.com" },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Resend", "Vercel", "Cloudflare"],
    need: {
      en: "Bookings were arriving through direct messages. The client needed one place where people book a plan, pay with local methods and send proof, and where the team can review every request.",
      ar: "كانت الحجوزات تصل عبر الرسائل المباشرة. احتاج العميل مكاناً واحداً يحجز فيه الناس الخدمة ويدفعون بوسائل الدفع المحلية ويرسلون الإثبات، ويراجع فيه الفريق كل طلب.",
    },
    delivered: [
      {
        en: "A booking flow with InstaPay and Vodafone Cash QR codes and receipt upload. Receipts are compressed in the browser before they are sent.",
        ar: "مسار حجز برموز QR لإنستاباي وفودافون كاش ورفع إيصال الدفع، مع ضغط الإيصال داخل المتصفح قبل إرساله.",
      },
      {
        en: "Every booking is saved as pending and both admins get an email straight away.",
        ar: "يُحفظ كل حجز كطلب قيد المراجعة، ويصل بريد فوري لكلا المسؤولَين.",
      },
      {
        en: "A private dashboard with live updates, search and filters, receipt previews, status changes (pending, verified, rejected) and a CSV export that opens correctly in Excel with Arabic.",
        ar: "لوحة تحكم خاصة بتحديثات لحظية وبحث وفلاتر ومعاينة الإيصالات وتغيير الحالة (قيد المراجعة، مؤكد، مرفوض)، وتصدير CSV يفتح بالعربية بشكل صحيح في Excel.",
      },
      {
        en: "Arabic-first design with an English option and light and dark themes.",
        ar: "تصميم بالعربية أولاً مع خيار الإنجليزية ووضعين فاتح وداكن.",
      },
    ],
    engineering: [
      {
        en: "Every form is checked on the server and limited to 5 requests per 15 minutes per visitor.",
        ar: "يُتحقق من كل نموذج على الخادم، بحد خمسة طلبات كل خمس عشرة دقيقة لكل زائر.",
      },
      {
        en: "Admin pages are protected by role-based sign-in; receipts open through links that expire after five minutes.",
        ar: "صفحات الإدارة محمية بتسجيل دخول حسب الصلاحية، والإيصالات تُفتح بروابط تنتهي بعد خمس دقائق.",
      },
      {
        en: "The sending domain is set up with SPF and DKIM so emails reach the inbox.",
        ar: "نطاق الإرسال مضبوط بسجلات SPF وDKIM لتصل الرسائل إلى صندوق الوارد.",
      },
    ],
    shots: [
      { src: "/work/dabah-house/home.jpg", width: 1440, height: 900, alt: { en: "Dabah House home page with the booking calendar", ar: "الصفحة الرئيسية لـ Dabah House مع تقويم الحجز" } },
      { src: "/work/dabah-house/home-mobile.jpg", width: 600, height: 1022, alt: { en: "Dabah House on a phone", ar: "Dabah House على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "yuva-house",
    name: { en: "Yuva House", ar: "Yuva House" },
    kind: "client",
    year: "2026",
    summary: {
      en: "Custom WordPress theme for an eleven-suite boutique retreat in New Cairo, with direct booking.",
      ar: "قالب ووردبريس مخصص لفندق بوتيك من أحد عشر جناحاً في القاهرة الجديدة، مع حجز مباشر.",
    },
    highlight: { en: "11 suites", ar: "11 جناحاً" },
    status: { en: "Launching soon", ar: "يُطلق قريباً" },
    stack: ["WordPress", "PHP", "JavaScript", "Cloudbeds"],
    need: {
      en: "A new eleven-suite retreat in New Cairo needed a website as calm as the place itself, one that takes bookings directly instead of through travel sites.",
      ar: "احتاج فندق جديد من أحد عشر جناحاً في القاهرة الجديدة موقعاً هادئاً كالمكان نفسه، يستقبل الحجوزات مباشرة بدلاً من مواقع السفر.",
    },
    delivered: [
      {
        en: "A custom WordPress theme: home, suites with a page for each one, restaurant, pool and lounge, about and contact.",
        ar: "قالب ووردبريس مخصص: الرئيسية، والأجنحة مع صفحة لكل جناح، والمطعم، والمسبح والاستراحة، ومن نحن، وتواصل معنا.",
      },
      {
        en: "Cloudbeds booking built in: book buttons, a date bar and a booking window, all managed from the WordPress admin.",
        ar: "نظام الحجز Cloudbeds مدمج: أزرار الحجز وشريط التواريخ ونافذة الحجز، وكلها تُدار من لوحة ووردبريس.",
      },
      {
        en: "Enquiry and newsletter forms with spam protection.",
        ar: "نماذج استفسار ونشرة بريدية محمية من الرسائل المزعجة.",
      },
      {
        en: "A step-by-step launch plan for going live.",
        ar: "خطة إطلاق مفصلة خطوة بخطوة.",
      },
    ],
    engineering: [
      {
        en: "Structured data for the hotel, its rooms and its restaurant, so search engines understand the property.",
        ar: "بيانات منظَّمة للفندق وغرفه ومطعمه ليفهم محرك البحث طبيعة المكان.",
      },
      {
        en: "Self-hosted fonts and plain JavaScript keep the theme light and fast.",
        ar: "خطوط مستضافة ذاتياً وجافاسكربت خفيف يحافظان على سرعة القالب.",
      },
      {
        en: "Right-to-left support for Arabic built into the theme.",
        ar: "دعم الكتابة من اليمين لليسار للعربية مدمج في القالب.",
      },
    ],
    shots: [
      { src: "/work/yuva-house/home.jpg", width: 1440, height: 900, alt: { en: "Yuva House home page", ar: "الصفحة الرئيسية لـ Yuva House" } },
      { src: "/work/yuva-house/suite.jpg", width: 1440, height: 900, alt: { en: "A suite page", ar: "صفحة أحد الأجنحة" } },
      { src: "/work/yuva-house/home-mobile.jpg", width: 600, height: 1300, alt: { en: "Yuva House on a phone", ar: "Yuva House على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "offgrid",
    name: { en: "OFFGRID", ar: "OFFGRID" },
    kind: "personal",
    year: "2026",
    summary: {
      en: "A streetwear storefront concept where a live 3D scene surrounds flat product photography.",
      ar: "تصور لمتجر ملابس يحيط فيه مشهد ثلاثي الأبعاد حي بصور المنتجات المسطحة.",
    },
    highlight: { en: "Three.js", ar: "Three.js" },
    stack: ["React", "TypeScript", "Vite", "Three.js", "Playwright"],
    need: {
      en: "A personal experiment: can a store use real-time 3D without hiding the products? Here the 3D lives around the photos, never inside them.",
      ar: "تجربة شخصية: هل يمكن لمتجر أن يستخدم الأبعاد الثلاثية دون أن يخفي المنتجات؟ هنا يعيش المشهد حول الصور، لا بداخلها.",
    },
    delivered: [
      {
        en: "Twelve products with colours and sizes, filters, search, sorting and a quick view with a size guide.",
        ar: "اثنا عشر منتجاً بألوان ومقاسات، مع فلاتر وبحث وترتيب وعرض سريع بدليل المقاسات.",
      },
      {
        en: "A bag that merges matching items, limits quantities and works out free shipping. The bag and wishlist are kept between visits.",
        ar: "سلة تدمج القطع المتطابقة وتضبط الكميات وتحسب الشحن المجاني، وتُحفظ السلة والمفضلة بين الزيارات.",
      },
      {
        en: "A demo checkout that ends with an order confirmation.",
        ar: "إتمام شراء تجريبي ينتهي بتأكيد الطلب.",
      },
      {
        en: "A live 3D hero that follows the pointer.",
        ar: "واجهة ثلاثية الأبعاد حية تتبع حركة المؤشر.",
      },
    ],
    engineering: [
      {
        en: "11 end-to-end tests with Playwright, including a 320px phone width and a fallback when 3D is unavailable.",
        ar: "‏11 اختباراً شاملاً بـ Playwright، منها عرض هاتف 320 بكسل وبديل عند عدم توفر الأبعاد الثلاثية.",
      },
      {
        en: "Motion respects reduced-motion settings and pauses when it is off screen.",
        ar: "الحركة تحترم إعداد تقليل الحركة وتتوقف عندما تكون خارج الشاشة.",
      },
    ],
    shots: [
      { src: "/work/offgrid/home.jpg", width: 1440, height: 900, alt: { en: "OFFGRID storefront", ar: "واجهة متجر OFFGRID" } },
      { src: "/work/offgrid/mobile.jpg", width: 600, height: 1300, alt: { en: "OFFGRID on a phone", ar: "OFFGRID على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "strike-lane",
    name: { en: "Strike Lane Pro Shop", ar: "Strike Lane Pro Shop" },
    kind: "personal",
    year: "2026",
    summary: {
      en: "A demo bowling pro shop with a live catalogue, cart and contact form backed by Supabase.",
      ar: "متجر تجريبي لمعدات البولينج بكتالوج حي وسلة ونموذج تواصل مدعوم بـ Supabase.",
    },
    highlight: { en: "18 tests", ar: "18 اختباراً" },
    stack: ["JavaScript", "HTML", "CSS", "Supabase", "Node test runner"],
    need: {
      en: "A practice project: a small store built without a framework, with logic clean enough to move to a server later.",
      ar: "مشروع تدريبي: متجر صغير بلا إطار عمل، بمنطق نظيف يسهل نقله إلى خادم لاحقاً.",
    },
    delivered: [
      {
        en: "Products load from Supabase, with a built-in list as a fallback.",
        ar: "تُحمَّل المنتجات من Supabase، مع قائمة احتياطية مدمجة.",
      },
      {
        en: "Filter by category, search and price, and sort the results.",
        ar: "فلترة حسب الفئة والبحث والسعر، مع ترتيب النتائج.",
      },
      {
        en: "A cart that respects stock and works out shipping (free over $100) and tax.",
        ar: "سلة تحترم المخزون وتحسب الشحن (مجاني فوق 100 دولار) والضريبة.",
      },
      {
        en: "A contact form that saves each message to Supabase.",
        ar: "نموذج تواصل يحفظ كل رسالة في Supabase.",
      },
    ],
    engineering: [
      {
        en: "Cart, catalogue and contact logic are separate from the page and covered by 18 unit tests.",
        ar: "منطق السلة والكتالوج والتواصل منفصل عن الصفحة ومغطى بـ 18 اختباراً.",
      },
      {
        en: "Database tables are protected with row-level security.",
        ar: "جداول قاعدة البيانات محمية بسياسات الأمان على مستوى الصف.",
      },
    ],
    shots: [
      { src: "/work/strike-lane/store.jpg", width: 1440, height: 900, alt: { en: "Strike Lane catalogue with filters", ar: "كتالوج Strike Lane مع الفلاتر" } },
      { src: "/work/strike-lane/mobile.jpg", width: 600, height: 1022, alt: { en: "Strike Lane on a phone", ar: "Strike Lane على الهاتف" }, phone: true },
    ],
  },
  {
    slug: "foxi-player",
    name: { en: "Foxi Player", ar: "Foxi Player" },
    kind: "university",
    year: "2024",
    summary: {
      en: "Desktop media player in Python with speed control, 5-second skips and keyboard shortcuts, rebuilt with tested playback logic.",
      ar: "مشغل وسائط لسطح المكتب بلغة Python مع التحكم في السرعة والتقديم خمس ثوانٍ واختصارات لوحة المفاتيح، أعيد بناؤه بمنطق تشغيل مختبَر.",
    },
    highlight: { en: "27 tests", ar: "27 اختباراً" },
    stack: ["Python", "Tkinter", "VLC", "Pillow", "pytest"],
    need: {
      en: "A university project at Port Said University's Faculty of Engineering (Electronics and Communications), built with Youssef Khaled and supervised by Dr. Islam Shaalan.",
      ar: "مشروع جامعي في كلية الهندسة بجامعة بورسعيد (قسم الإلكترونيات والاتصالات)، نفذته مع يوسف خالد تحت إشراف د. إسلام شعلان.",
    },
    delivered: [
      {
        en: "Play, pause, 5-second skips, speed from 0.5x to 4x and volume control.",
        ar: "تشغيل وإيقاف وتقديم خمس ثوانٍ، وسرعة من 0.5x حتى 4x، والتحكم في الصوت.",
      },
      {
        en: "Keyboard shortcuts, fullscreen and a redesigned window in Foxi's turquoise and navy.",
        ar: "اختصارات لوحة المفاتيح وملء الشاشة ونافذة معاد تصميمها بألوان Foxi الفيروزية والكحلية.",
      },
      {
        en: "Smooth custom-drawn buttons and sliders.",
        ar: "أزرار ومنزلقات مرسومة خصيصاً بحواف ناعمة.",
      },
    ],
    engineering: [
      {
        en: "Rebuilt from one 174-line file into a small package where the playback rules are separate from the window and from VLC.",
        ar: "أعيد بناؤه من ملف واحد من 174 سطراً إلى حزمة صغيرة تفصل قواعد التشغيل عن النافذة وعن VLC.",
      },
      {
        en: "27 automated tests run against a fake engine, so they don't need VLC installed.",
        ar: "‏27 اختباراً آلياً تعمل على محرك بديل، فلا تحتاج إلى تثبيت VLC.",
      },
    ],
    shots: [
      { src: "/work/foxi-player/player.jpg", width: 1201, height: 740, alt: { en: "Foxi Player window", ar: "نافذة Foxi Player" } },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
