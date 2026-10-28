import type { Metadata, Viewport } from "next";
import { Inter, Noto_Kufi_Arabic, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { getDictionary } from "@/content/dictionary";
import { dirOf, isLocale, locales } from "@/content/locales";
import "../globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-arabic" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Runs before paint so the saved theme never flashes the wrong one.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');d.dataset.theme=t==='dark'?'dark':'light'}catch(e){}})()`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s | Mohamed Abououf` },
    description: dict.meta.description,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E0C0A" },
    { media: "(prefers-color-scheme: light)", color: "#F5F0EB" },
  ],
};

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dirOf(lang)}
      data-theme="light"
      className={`${oswald.variable} ${inter.variable} ${kufi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">
          {dict.nav.skip}
        </a>
        <Header lang={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer dict={dict} />
        <RevealObserver />
      </body>
    </html>
  );
}
