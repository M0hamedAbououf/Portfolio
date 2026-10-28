import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  reach: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(2000),
  lang: z.enum(["en", "ar"]).default("en"),
  // Hidden from people; bots fill it in.
  website: z.string().optional(),
});

export type ContactMessage = Omit<z.infer<typeof contactSchema>, "website">;

export interface ContactDeps {
  store?: (message: ContactMessage) => Promise<void>;
  notify?: (message: ContactMessage) => Promise<void>;
  allow: (key: string) => boolean;
}

export interface ContactResult {
  status: number;
  body: { ok: boolean; error?: "invalid" | "rate_limited" | "not_configured" | "failed"; fields?: string[] };
}

export async function handleContact(raw: unknown, ip: string, deps: ContactDeps): Promise<ContactResult> {
  if (!deps.allow(ip)) return { status: 429, body: { ok: false, error: "rate_limited" } };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fields = [...new Set(parsed.error.issues.map((issue) => String(issue.path[0])))];
    return { status: 400, body: { ok: false, error: "invalid", fields } };
  }

  const { website, ...message } = parsed.data;
  if (website) return { status: 200, body: { ok: true } };

  const channels = [deps.store, deps.notify].filter((channel) => channel !== undefined);
  if (channels.length === 0) return { status: 503, body: { ok: false, error: "not_configured" } };

  const outcomes = await Promise.allSettled(channels.map((send) => send(message)));
  outcomes
    .filter((outcome) => outcome.status === "rejected")
    .forEach((outcome) => console.error("contact channel failed", outcome.reason));
  if (outcomes.every((outcome) => outcome.status === "rejected")) {
    return { status: 502, body: { ok: false, error: "failed" } };
  }
  return { status: 200, body: { ok: true } };
}

/** Fixed-window limiter. In-memory, so it is per server instance: a speed bump, not a wall. */
export function createRateLimiter(limit: number, windowMs: number, now: () => number = Date.now) {
  const hits = new Map<string, { count: number; start: number }>();
  return (key: string) => {
    const t = now();
    const entry = hits.get(key);
    if (!entry || t - entry.start > windowMs) {
      hits.set(key, { count: 1, start: t });
      return true;
    }
    entry.count += 1;
    return entry.count <= limit;
  };
}
