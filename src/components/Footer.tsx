import type { Dictionary } from "@/content/dictionary";
import { links } from "@/content/dictionary";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p>
          © 2026 {dict.footer.made}
        </p>
        <nav aria-label="Social" className="footer-links">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#main">{dict.footer.top}</a>
        </nav>
      </div>
    </footer>
  );
}
