import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { createRateLimiter, handleContact, type ContactDeps, type ContactMessage } from "@/lib/contact";

const allow = createRateLimiter(5, 15 * 60 * 1000);

function storeChannel(): ContactDeps["store"] {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return undefined;
  const supabase = createClient(url, key, { auth: { persistSession: false } });
  return async (message: ContactMessage) => {
    const { error } = await supabase.from("contact_messages").insert(message);
    if (error) throw new Error(error.message);
  };
}

function notifyChannel(): ContactDeps["notify"] {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return undefined;
  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  return async (message: ContactMessage) => {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New message from ${message.name}`,
      replyTo: message.reach.includes("@") && !message.reach.startsWith("@") ? message.reach : undefined,
      text: `${message.name}\nReach: ${message.reach}\nLanguage: ${message.lang}\n\n${message.message}`,
    });
    if (error) throw new Error(error.message);
  };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const raw = await request.json().catch(() => null);
  const result = await handleContact(raw, ip, { store: storeChannel(), notify: notifyChannel(), allow });
  return Response.json(result.body, { status: result.status });
}
