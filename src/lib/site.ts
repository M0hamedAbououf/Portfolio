// Vercel provides the production domain at build time, so no manual setting is needed there.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
