import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionary";
import { isLocale, locales } from "@/content/locales";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(lang)) return {};
  return {
    title: project.name[lang],
    description: project.summary[lang],
    alternates: { canonical: `/${lang}/work/${slug}`, languages: { en: `/en/work/${slug}`, ar: `/ar/work/${slug}` } },
    openGraph: { images: [{ url: project.shots[0].src, width: project.shots[0].width, height: project.shots[0].height }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.project;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [cover, ...rest] = project.shots;
  const wide = rest.filter((shot) => !shot.phone);
  const phone = rest.find((shot) => shot.phone);

  return (
    <article className="case wrap">
      <Link href={`/${lang}#work`} className="case-back">
        {t.back}
      </Link>

      <header className="case-head">
        <div>
          <p className="case-kind">{dict.work.kind[project.kind]}</p>
          <h1>{project.name[lang]}</h1>
          <p className="case-summary">{project.summary[lang]}</p>
        </div>
        <dl className="case-facts">
          <div>
            <dt>{t.year}</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>{t.stack}</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          {project.live ? (
            <a className="btn btn-primary" href={project.live.url} target="_blank" rel="noopener noreferrer">
              {t.visit}
            </a>
          ) : project.status ? (
            <p className="case-status">{project.status[lang]}</p>
          ) : null}
        </dl>
      </header>

      <figure className="case-cover enter">
        <Image src={cover.src} alt={cover.alt[lang]} width={cover.width} height={cover.height} priority sizes="(max-width: 1240px) 100vw, 1180px" />
      </figure>

      {project.results ? (
        <section className="case-results reveal" aria-label={t.results}>
          {project.results.map((result) => (
            <div key={result.value}>
              <strong dir="ltr">{result.value}</strong>
              <span>{result.label[lang]}</span>
            </div>
          ))}
          <p className="muted">{t.resultsNote}</p>
        </section>
      ) : null}

      <div className="case-body">
        <section className="reveal">
          <h2>{project.needTitle?.[lang] ?? t.need}</h2>
          <p>{project.need[lang]}</p>
        </section>
        {(project.parts ?? [{ title: { en: t.delivered, ar: t.delivered }, items: project.delivered }]).map((part) => (
          <section key={part.title.en} className="reveal">
            <h2>{part.title[lang]}</h2>
            <ul className="case-list">
              {part.items.map((item) => (
                <li key={item.en}>{item[lang]}</li>
              ))}
            </ul>
          </section>
        ))}
        {project.engineering.length > 0 ? (
          <section className="reveal">
            <h2>{t.engineering}</h2>
            <ul className="case-list">
              {project.engineering.map((item) => (
                <li key={item.en}>{item[lang]}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {wide.length > 0 || phone ? (
        <div className={`case-gallery${phone ? " has-phone" : ""}`}>
          {wide.map((shot) => (
            <figure key={shot.src} className="reveal">
              <Image src={shot.src} alt={shot.alt[lang]} width={shot.width} height={shot.height} sizes="(max-width: 900px) 100vw, 66vw" />
              <figcaption>{shot.alt[lang]}</figcaption>
            </figure>
          ))}
          {phone ? (
            <figure className="phone reveal">
              <Image src={phone.src} alt={phone.alt[lang]} width={phone.width} height={phone.height} sizes="(max-width: 900px) 70vw, 320px" />
              <figcaption>{phone.alt[lang]}</figcaption>
            </figure>
          ) : null}
        </div>
      ) : null}

      <Link href={`/${lang}/work/${next.slug}`} className="case-next reveal">
        <div className="case-next-text">
          <span>{t.next}</span>
          <strong>{next.name[lang]}</strong>
          <p>{next.summary[lang]}</p>
        </div>
        <div className="case-next-media">
          <Image src={next.shots[0].src} alt="" width={next.shots[0].width} height={next.shots[0].height} sizes="(max-width: 900px) 100vw, 420px" />
        </div>
      </Link>
    </article>
  );
}
