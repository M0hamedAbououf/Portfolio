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
      ar: "سيستم لإدارة الإنفلونسرز (CRM) بيبعتلهم هدايا على طول من مخزون المتجر، ومتجر على Shopify فيه استوديو العميل بيصمّم فيه القطعة بتاعته بنفسه.",
    },
    highlight: { en: "CRM + Shopify", ar: "CRM + Shopify" },
    live: { url: "https://arabcollective.com", label: "arabcollective.com" },
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Shopify Admin API", "Shopify"],
    need: {
      en: "Arab Collective, an Arab-heritage streetwear brand selling worldwide, needed two things: one place to manage its influencers and send them PR gifts straight from store stock, and a store that turns visits into orders in English and Arabic.",
      ar: "Arab Collective براند هدوم مستوحى من التراث العربي، وبيبيع لناس في كل حتة في العالم. كان محتاج حاجتين: مكان واحد يدير منه الإنفلونسرز ويبعتلهم هدايا من مخزون المتجر على طول، ومتجر يخلّي اللي بيدخل يشتري، عربي وإنجليزي.",
    },
    delivered: [],
    parts: [
      {
        title: { en: "The influencer CRM I built", ar: "اللي طوّرته أنا: سيستم إدارة الإنفلونسرز" },
        items: [
          {
            en: "A roster of influencers across the Gulf, the Levant and North Africa, with their campaigns and results: revenue, clicks and return on spend.",
            ar: "قاعدة بيانات للإنفلونسرز في الخليج والشام وشمال أفريقيا، فيها حملاتهم ونتايجها: المبيعات والكليكات والعائد من كل حملة.",
          },
          {
            en: "A gift box builder that pulls live stock from the Shopify store by collection. Pick the items and sizes, and the gift goes out as a free Shopify draft order.",
            ar: "أداة لتجهيز بوكسات الهدايا بتعرض مخزون Shopify الحقيقي متقسّم حسب الكولكشنز. الفريق يختار القطع والمقاسات، فيتعمل أوردر مجاني على Shopify لوحده.",
          },
          {
            en: "Delivery address and phone fill in from the database, and any correction can be saved back to the influencer's profile.",
            ar: "العنوان ورقم الموبايل بيتملوا لوحدهم من قاعدة البيانات، وأي تعديل بيتحفظ في ملف الإنفلونسر على طول.",
          },
          {
            en: "Every gift is logged, and the dashboard shows a live feed of gifts sent with the courier and delivery status.",
            ar: "كل هدية بتتسجّل، ولوحة التحكم بتعرض الهدايا اللي اتبعتت أول بأول مع شركة الشحن وحالة التوصيل.",
          },
        ],
      },
      {
        title: { en: "What we did on the Shopify store", ar: "اللي عملناه في متجر Shopify" },
        items: [
          {
            en: "A conversion-focused Shopify store, built to sell from the first visit.",
            ar: "متجر على Shopify معمول عشان يخلّي الزائر يشتري من أول زيارة.",
          },
          {
            en: "A five-step Design Studio: pick the item, choose colour and size, place the print, add the design, then review.",
            ar: "استوديو تصميم من 5 خطوات: تختار القطعة، بعدين اللون والمقاس، بعدين مكان الطباعة، بعدين تحط تصميمك، وفي الآخر تراجع.",
          },
          {
            en: "English and Arabic storefront with language and currency selectors for customers abroad.",
            ar: "المتجر عربي وإنجليزي، وفيه اختيار للغة والعملة للعملاء اللي برّه مصر.",
          },
        ],
      },
    ],
    engineering: [
      {
        en: "The CRM is built for catalogues of 500+ products: collections load first, products load on demand and stay cached, and one search covers the whole store.",
        ar: "السيستم معمول يستحمل أكتر من 500 منتج من غير ما يهنّج: الكولكشنز بتظهر الأول، والمنتجات بتحمّل لما تحتاجها وتفضل محفوظة، وفيه بحث واحد على المتجر كله.",
      },
      {
        en: "Gifts are private draft orders, so they never appear on the public store.",
        ar: "الهدايا بتتعمل كأوردرات داخلية (درافت)، فمش بتظهر خالص في المتجر للناس.",
      },
      {
        en: "Cleared Shopify's protected customer data review so gift orders can carry delivery details.",
        ar: "خدت موافقة Shopify على بيانات العملاء المحمية، عشان أوردرات الهدايا تقدر تشيل عناوين التوصيل.",
      },
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
      ar: "شركة التقنية اللي أسّستها في بورسعيد مع 3 شركاء. بنعمل أنظمة حجز ومتاجر أونلاين وتطبيقات ويب وأنظمة CRM وأتمتة بالذكاء الاصطناعي.",
    },
    highlight: { en: "Co-founder", ar: "شريك مؤسس" },
    live: { url: "https://coretex-tech.vercel.app/", label: "coretex-tech.vercel.app" },
    stack: ["Next.js", "React", "GSAP", "Supabase", "Shopify", "n8n"],
    needTitle: { en: "Why I co-founded it", ar: "ليه أسّسناها؟" },
    need: {
      en: "I'm one of Coretex's four co-founders. We started it so a growing business can get the whole system from one team, where the people you talk to are the people who build it.",
      ar: "أنا واحد من 4 مؤسسين لـ Coretex. أسّسناها عشان أي شركة بتكبر تاخد السيستم بتاعها كامل من فريق واحد، واللي بتتكلم معاهم هما نفسهم اللي بينفّذوا مشروعك.",
    },
    delivered: [],
    parts: [
      {
        title: { en: "What we provide", ar: "بنقدّم إيه؟" },
        items: [
          {
            en: "Build: websites, web apps and SaaS products that load fast and convert.",
            ar: "التطوير: مواقع وتطبيقات ويب ومنتجات SaaS سريعة ومعمولة عشان تبيع.",
          },
          {
            en: "Commerce: Shopify themes, custom apps and conversion work that turn traffic into orders.",
            ar: "التجارة الإلكترونية: تصميمات Shopify وتطبيقات مخصوصة وتحسين مستمر بيحوّل الزوار لأوردرات.",
          },
          {
            en: "Automate: WhatsApp, email and CRM workflows that follow up with customers for you.",
            ar: "الأتمتة: رسايل واتساب وإيميلات وسيستمات CRM بتتابع عملاءك بدالك.",
          },
          {
            en: "Grow: AI assistants, analytics and experiments that improve every month.",
            ar: "النمو: مساعدين بالذكاء الاصطناعي وتحليلات وتجارب نتايجها بتتحسن كل شهر.",
          },
        ],
      },
      {
        title: { en: "How a build runs", ar: "بنشتغل إزاي؟" },
        items: [
          {
            en: "A free fit call, then a clear plan with a fixed scope and one quick win live in the first week.",
            ar: "بنبدأ بمكالمة تعارف ببلاش، بعدين خطة واضحة ومحددة، وبتشوف أول نتيجة حقيقية في أول أسبوع.",
          },
          {
            en: "Weekly demos on real links during the build, so the client sees progress instead of status reports.",
            ar: "كل أسبوع بنوريك الشغل على لينكات حقيقية، عشان تشوف التقدم بنفسك مش مجرد تقارير.",
          },
          {
            en: "Launch, then 30 days of care: we measure, fix what the data shows and train the team.",
            ar: "بعد ما الموقع يشتغل بنفضل معاك 30 يوم: بنقيس، ونصلّح اللي الأرقام بتقول عليه، وندرّب فريقك.",
          },
        ],
      },
    ],
    engineering: [
      {
        en: "The Coretex site itself is bilingual with real Arabic right-to-left, light and dark themes and an animated 3D mark.",
        ar: "موقع Coretex نفسه عربي وإنجليزي، والعربي فيه مكتوب من اليمين للشمال صح، وفيه وضع فاتح وغامق ولوجو 3D بيتحرك.",
      },
      {
        en: "Coretex OS, our own internal platform for leads, tasks, content and performance, with role-based access and live updates.",
        ar: "Coretex OS: المنصة الداخلية بتاعتنا لإدارة العملاء المحتملين والمهام والمحتوى والأداء، بصلاحيات لكل واحد وتحديث لحظي.",
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
      ar: "منصة حجز عربي وإنجليزي، العميل بيحجز ويدفع ويرفع صورة الإيصال في كام خطوة، والفريق بيتابع كل حجز لحظة بلحظة.",
    },
    highlight: { en: "Live", ar: "شغّال دلوقتي" },
    live: { url: "https://eldabah.com", label: "eldabah.com" },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Resend", "Vercel", "Cloudflare"],
    need: {
      en: "Bookings were arriving through direct messages. The client needed one place where people book a plan, pay with local methods and send proof, and where the team can review every request.",
      ar: "الحجوزات كانت بتيجي على الرسايل الخاصة وبتتوه وسطها. العميل كان محتاج مكان واحد الناس تحجز فيه وتدفع بطرق الدفع المصرية وتبعت إثبات الدفع، والفريق يراجع فيه كل طلب.",
    },
    delivered: [
      {
        en: "A booking flow with InstaPay and Vodafone Cash QR codes and receipt upload. Receipts are compressed in the browser before they are sent.",
        ar: "خطوات حجز فيها QR للدفع بإنستاباي وفودافون كاش ورفع الإيصال، وصورة الإيصال بتتصغّر قبل ما تتبعت.",
      },
      {
        en: "Every booking is saved as pending and both admins get an email straight away.",
        ar: "كل حجز بيتحفظ على إنه «تحت المراجعة»، والاتنين المسؤولين بيوصلهم إيميل على طول.",
      },
      {
        en: "A private dashboard with live updates, search and filters, receipt previews, status changes (pending, verified, rejected) and a CSV export that opens correctly in Excel with Arabic.",
        ar: "لوحة تحكم خاصة بتتحدّث لحظياً، فيها بحث وفلاتر ومعاينة للإيصالات وتغيير لحالة الحجز (تحت المراجعة، اتأكد، اترفض)، وتصدير ملف CSV العربي فيه بيظهر مظبوط على Excel.",
      },
      {
        en: "Arabic-first design with an English option and light and dark themes.",
        ar: "الموقع عربي في الأساس، وفيه نسخة إنجليزي ووضع فاتح وغامق.",
      },
    ],
    engineering: [
      {
        en: "Every form is checked on the server and limited to 5 requests per 15 minutes per visitor.",
        ar: "كل فورم بيتراجع على السيرفر، وكل زائر ليه 5 طلبات بس كل ربع ساعة.",
      },
      {
        en: "Admin pages are protected by role-based sign-in; receipts open through links that expire after five minutes.",
        ar: "صفحات الأدمن محمية بتسجيل دخول حسب الصلاحية، والإيصالات بتتفتح بلينكات بتنتهي بعد 5 دقايق.",
      },
      {
        en: "The sending domain is set up with SPF and DKIM so emails reach the inbox.",
        ar: "الدومين بتاع الإيميل مظبوط بـ SPF وDKIM، عشان الرسايل توصل الإنبوكس مش السبام.",
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
      ar: "ثيم ووردبريس معمول مخصوص لفندق بوتيك فيه 11 جناح في القاهرة الجديدة، والحجز بيتم من الموقع على طول.",
    },
    highlight: { en: "11 suites", ar: "11 جناح" },
    status: { en: "Launching soon", ar: "قريب" },
    stack: ["WordPress", "PHP", "JavaScript", "Cloudbeds"],
    need: {
      en: "A new eleven-suite retreat in New Cairo needed a website as calm as the place itself, one that takes bookings directly instead of through travel sites.",
      ar: "فندق جديد فيه 11 جناح في القاهرة الجديدة، كان عايز موقع هادي شبه المكان نفسه، ويستقبل الحجوزات على طول من غير مواقع الحجز.",
    },
    delivered: [
      {
        en: "A custom WordPress theme: home, suites with a page for each one, restaurant, pool and lounge, about and contact.",
        ar: "ثيم ووردبريس مخصوص فيه: الرئيسية، والأجنحة وكل جناح ليه صفحة لوحده، والمطعم، والبيسين واللاونج، وصفحتين «مين إحنا» و«كلّمنا».",
      },
      {
        en: "Cloudbeds booking built in: book buttons, a date bar and a booking window, all managed from the WordPress admin.",
        ar: "ربطنا سيستم الحجز Cloudbeds بالموقع: زراير الحجز وشريط التواريخ وشاشة الحجز، وكله بيتدار من لوحة ووردبريس.",
      },
      {
        en: "Enquiry and newsletter forms with spam protection.",
        ar: "فورمز للاستفسار والاشتراك في النيوزليتر، ومحمية من السبام.",
      },
      {
        en: "A step-by-step launch plan for going live.",
        ar: "خطة إطلاق مفصّلة خطوة بخطوة.",
      },
    ],
    engineering: [
      {
        en: "Structured data for the hotel, its rooms and its restaurant, so search engines understand the property.",
        ar: "بيانات منظّمة للفندق وغرفه ومطعمه، بتساعد جوجل يفهم المكان ويعرضه أحسن.",
      },
      {
        en: "Self-hosted fonts and plain JavaScript keep the theme light and fast.",
        ar: "خطوط متخزّنة على الموقع نفسه وجافاسكريبت خفيف، عشان الموقع يفضل سريع.",
      },
      {
        en: "Right-to-left support for Arabic built into the theme.",
        ar: "دعم كامل للعربي من اليمين للشمال جوه الثيم.",
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
      ar: "فكرة لمتجر هدوم، فيه مشهد 3D بيتحرك حوالين صور المنتجات من غير ما يغطّيها.",
    },
    highlight: { en: "Three.js", ar: "Three.js" },
    stack: ["React", "TypeScript", "Vite", "Three.js", "Playwright"],
    need: {
      en: "A personal experiment: can a store use real-time 3D without hiding the products? Here the 3D lives around the photos, never inside them.",
      ar: "تجربة شخصية كنت عايز أجاوب فيها على سؤال: ينفع المتجر يستخدم 3D من غير ما يشتّت الناس عن المنتجات؟ والحل كان إن المشهد يتحرك حوالين الصور مش جواها.",
    },
    delivered: [
      {
        en: "Twelve products with colours and sizes, filters, search, sorting and a quick view with a size guide.",
        ar: "12 منتج بألوان ومقاسات مختلفة، وفلاتر وبحث وترتيب، وشاشة عرض سريع فيها جدول المقاسات.",
      },
      {
        en: "A bag that merges matching items, limits quantities and works out free shipping. The bag and wishlist are kept between visits.",
        ar: "سلة بتجمع القطع المتشابهة وتظبط الكميات وتحسب الشحن المجاني، وبتحفظ السلة والمفضلة للزيارة الجاية.",
      },
      {
        en: "A demo checkout that ends with an order confirmation.",
        ar: "خطوات شرا تجريبية بتخلص بتأكيد الأوردر.",
      },
      {
        en: "A live 3D hero that follows the pointer.",
        ar: "مشهد 3D في أول الصفحة بيتحرك مع الماوس.",
      },
    ],
    engineering: [
      {
        en: "11 end-to-end tests with Playwright, including a 320px phone width and a fallback when 3D is unavailable.",
        ar: "‏11 اختبار أوتوماتيك بـ Playwright، منهم اختبار على شاشة موبايل عرضها 320 بكسل، وبديل بيشتغل لو الجهاز مش بيدعم 3D.",
      },
      {
        en: "Motion respects reduced-motion settings and pauses when it is off screen.",
        ar: "الحركة بتقف لو الشخص مفعّل «تقليل الحركة» على جهازه، ولما المشهد يخرج من الشاشة.",
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
      ar: "متجر تجريبي لأدوات البولينج، فيه كتالوج وسلة وفورم تواصل مربوط بـ Supabase.",
    },
    highlight: { en: "18 tests", ar: "18 اختبار" },
    stack: ["JavaScript", "HTML", "CSS", "Supabase", "Node test runner"],
    need: {
      en: "A practice project: a small store built without a framework, with logic clean enough to move to a server later.",
      ar: "مشروع للتدريب: متجر صغير مكتوب من غير أي فريمورك، والكود منظّم وسهل ينتقل لسيرفر بعدين.",
    },
    delivered: [
      {
        en: "Products load from Supabase, with a built-in list as a fallback.",
        ar: "المنتجات بتحمّل من Supabase، وفيه لستة احتياطي جاهزة جوه الموقع.",
      },
      {
        en: "Filter by category, search and price, and sort the results.",
        ar: "فلترة بالقسم والسعر، وبحث وترتيب للنتايج.",
      },
      {
        en: "A cart that respects stock and works out shipping (free over $100) and tax.",
        ar: "سلة بتراعي الكمية الموجودة وبتحسب الشحن (ببلاش فوق 100 دولار) والضريبة.",
      },
      {
        en: "A contact form that saves each message to Supabase.",
        ar: "فورم تواصل بيحفظ كل رسالة في Supabase.",
      },
    ],
    engineering: [
      {
        en: "Cart, catalogue and contact logic are separate from the page and covered by 18 unit tests.",
        ar: "منطق السلة والكتالوج والتواصل منفصل عن الواجهة، وعليه 18 اختبار.",
      },
      {
        en: "Database tables are protected with row-level security.",
        ar: "جداول قاعدة البيانات محمية بسياسات أمان على مستوى كل صف (RLS).",
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
      ar: "مشغّل فيديو وصوت للكمبيوتر بـ Python، تقدر تتحكم فيه في السرعة وتقدّم وترجع 5 ثواني، وفيه اختصارات للكيبورد. رجعت كتبته تاني بعد كده بكود منظّم ومتجرّب.",
    },
    highlight: { en: "27 tests", ar: "27 اختبار" },
    stack: ["Python", "Tkinter", "VLC", "Pillow", "pytest"],
    need: {
      en: "A university project at Port Said University's Faculty of Engineering (Electronics and Communications), built with Youssef Khaled and supervised by Dr. Islam Shaalan.",
      ar: "مشروع في الجامعة، في قسم هندسة الإلكترونيات والاتصالات بكلية الهندسة جامعة بورسعيد. عملته مع زميلي يوسف خالد تحت إشراف د. إسلام شعلان.",
    },
    delivered: [
      {
        en: "Play, pause, 5-second skips, speed from 0.5x to 4x and volume control.",
        ar: "تشغيل وإيقاف، وتقديم ورجوع 5 ثواني، وسرعة من 0.5x لحد 4x، وتحكم في الصوت.",
      },
      {
        en: "Keyboard shortcuts, fullscreen and a redesigned window in Foxi's turquoise and navy.",
        ar: "اختصارات للكيبورد، وملء الشاشة، وشكل جديد للبرنامج بألوان Foxi التركواز والكحلي.",
      },
      {
        en: "Smooth custom-drawn buttons and sliders.",
        ar: "زراير وأشرطة تحكم مرسومة مخصوص بحواف ناعمة.",
      },
    ],
    engineering: [
      {
        en: "Rebuilt from one 174-line file into a small package where the playback rules are separate from the window and from VLC.",
        ar: "رجعت كتبته من فايل واحد فيه 174 سطر لباكدج منظّمة، بتفصل قواعد التشغيل عن الواجهة وعن VLC.",
      },
      {
        en: "27 automated tests run against a fake engine, so they don't need VLC installed.",
        ar: "‏27 اختبار أوتوماتيك شغّالين على محرك وهمي، فمش محتاج تنزّل VLC عشان تشغّلهم.",
      },
    ],
    shots: [
      { src: "/work/foxi-player/player.jpg", width: 1201, height: 740, alt: { en: "Foxi Player window", ar: "نافذة Foxi Player" } },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
