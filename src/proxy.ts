import { NextResponse, type NextRequest } from "next/server";
import { isLocale, pickLocale } from "@/content/locales";
import { projects } from "@/content/projects";

const slugs = new Set(projects.map((project) => project.slug));

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = "", section, slug, ...extra] = pathname.split("/");

  if (isLocale(first)) {
    // A prerendered project shell would answer unknown slugs with a 200; send them to a path no route matches.
    const unknownProject = section === "work" && (!slug || !slugs.has(slug) || extra.length > 0);
    if (unknownProject) return NextResponse.rewrite(new URL(`/${first}/missing-page`, request.url));
    return;
  }

  const remembered = request.cookies.get("lang")?.value ?? "";
  const locale = isLocale(remembered) ? remembered : pickLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, the API and any file with an extension (images, icons, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
