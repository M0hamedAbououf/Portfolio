import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locales";
import { LangSwitch } from "./LangSwitch";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const home = `/${lang}`;
  const items = [
    { href: `${home}#work`, label: dict.nav.work },
    { href: `${home}#services`, label: dict.nav.services },
    { href: `${home}/work/coretex`, label: dict.nav.coretex },
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={home} className="brand">
          ABOUOUF
        </Link>
        <nav aria-label="Main" className="nav-links">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <LangSwitch lang={lang} label={dict.langSwitch.label} title={dict.langSwitch.title} />
          <ThemeToggle labels={dict.theme} />
          <MobileMenu items={items} labels={{ open: dict.nav.menu, close: dict.nav.close }} />
        </div>
      </div>
    </header>
  );
}
