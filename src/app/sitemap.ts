import type { MetadataRoute } from "next";
import { locales } from "@/content/locales";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...projects.map((project) => `/work/${project.slug}`)];
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${base}/${lang}${path}`,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])) },
    })),
  );
}
