import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { HeroArt } from "@/components/HeroArt";
import { getDictionary, links } from "@/content/dictionary";
import { isLocale } from "@/content/locales";
import { projects } from "@/content/projects";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-role enter">{dict.hero.role}</p>
          <h1 id="hero-title" className="hero-title enter" style={{ animationDelay: "80ms" }}>
            {dict.hero.title}
          </h1>
          <p className="hero-lead enter" style={{ animationDelay: "160ms" }}>
            {dict.hero.lead}
          </p>
          <div className="hero-actions enter" style={{ animationDelay: "240ms" }}>
            <a className="btn btn-primary" href={links.instagram} target="_blank" rel="noopener noreferrer">
              {dict.hero.primary}
            </a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              {dict.hero.secondary}
            </a>
          </div>
          <dl className="hero-proof enter" style={{ animationDelay: "360ms" }}>
            {dict.hero.proof.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd dir="ltr">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-figure enter" style={{ animationDelay: "120ms" }}>
          <div className="hero-glow" aria-hidden="true" />
          <HeroArt />
          <Image
            className="hero-portrait"
            src="/me.png"
            alt={dict.hero.portraitAlt}
            width={472}
            height={650}
            priority
            sizes="(max-width: 900px) 80vw, 40vw"
          />
        </div>
      </section>

      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-head reveal">
          <h2 id="work-title">{dict.work.title}</h2>
          <p>{dict.work.intro}</p>
        </div>
        <div className="work-grid">
          {projects.map((project) => {
            const cover = project.shots[0];
            return (
              <Link key={project.slug} href={`/${lang}/work/${project.slug}`} className="work-card reveal">
                <div className="work-media">
                  <Image src={cover.src} alt={cover.alt[lang]} width={cover.width} height={cover.height} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="work-row">
                  <h3>{project.name[lang]}</h3>
                  <span className="work-highlight">{project.highlight[lang]}</span>
                </div>
                <p>{project.summary[lang]}</p>
                <span className="work-kind">
                  {dict.work.kind[project.kind]}, {project.year}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="about" className="section wrap about" aria-labelledby="about-title">
        <div className="about-bio reveal">
          <h2 id="about-title">{dict.about.title}</h2>
          {dict.about.bio.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <h3>{dict.about.educationTitle}</h3>
          <p>{dict.about.education}</p>
          <p className="muted">{dict.about.languages}</p>
        </div>
        <div className="about-side">
          <div className="reveal">
            <h3>{dict.about.timelineTitle}</h3>
            <ol className="timeline">
              {dict.about.timeline.map((item) => (
                <li key={item.what}>
                  <span className="timeline-when" dir="ltr">
                    {item.when}
                  </span>
                  <div>
                    <strong>{item.what}</strong>
                    <span className="timeline-where">{item.where}</span>
                    <p>{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal">
            <h3>{dict.about.skillsTitle}</h3>
            <dl className="skills">
              {dict.about.skills.map((group) => (
                <div key={group.group}>
                  <dt>{group.group}</dt>
                  <dd>
                    {group.items.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
        <div className="contact-copy reveal">
          <h2 id="contact-title">{dict.contact.title}</h2>
          <p>{dict.contact.lead}</p>
          <h3>{dict.contact.direct}</h3>
          <ul className="direct-links">
            <li>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram <span dir="ltr">@{links.instagram.split("/").filter(Boolean).pop()}</span>
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp <span dir="ltr">+20 101 767 0216</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`}>
                <span dir="ltr">{links.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="reveal">
          <ContactForm lang={lang} copy={dict.contact.form} />
        </div>
      </section>
    </>
  );
}
