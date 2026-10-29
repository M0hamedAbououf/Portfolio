"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Item {
  href: string;
  label: string;
}

export function MobileMenu({ items, labels }: { items: Item[]; labels: { open: string; close: string } }) {
  const pathname = usePathname();
  // Remember the page the menu was opened on, so moving to another page closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((was: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  // Lock page scroll and listen for Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.documentElement.classList.add("menu-open");
    addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="tool menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-label={labels.open}>
        <ul>
          {items.map((item, i) => (
            <li key={item.href} style={{ transitionDelay: open ? `${60 + i * 50}ms` : "0ms" }}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
