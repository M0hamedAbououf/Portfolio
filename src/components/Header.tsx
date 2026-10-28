import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locales";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const home = `/${lang}`;
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={home} className="brand">
          ABOUOUF
        </Link>
        <nav aria-label="Main" className="nav-links">
          <Link href={`${home}#work`}>{dict.nav.work}</Link>
          <Link href={`${home}#coretex`}>{dict.nav.coretex}</Link>
          <Link href={`${home}#about`}>{dict.nav.about}</Link>
          <Link href={`${home}#contact`}>{dict.nav.contact}</Link>
        </nav>
        <div className="header-tools">
          <LangSwitch lang={lang} label={dict.langSwitch.label} title={dict.langSwitch.title} />
          <ThemeToggle labels={dict.theme} />
        </div>
      </div>
    </header>
  );
}
