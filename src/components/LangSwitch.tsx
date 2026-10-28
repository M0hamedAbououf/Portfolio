"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/locales";

export function LangSwitch({ lang, label, title }: { lang: Locale; label: string; title: string }) {
  const pathname = usePathname();
  const other: Locale = lang === "en" ? "ar" : "en";
  const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);

  return (
    <Link
      href={href}
      className="tool lang-switch"
      title={title}
      hrefLang={other}
      lang={other}
      onClick={() => {
        document.cookie = `lang=${other}; path=/; max-age=31536000; samesite=lax`;
      }}
    >
      {label}
    </Link>
  );
}
