"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/dictionary";
import type { Locale } from "@/content/locales";

type Status = "idle" | "sending" | "sent" | "invalid" | "failed" | "limited";

export function ContactForm({ lang, copy }: { lang: Locale; copy: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [badFields, setBadFields] = useState<string[]>([]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setBadFields([]);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      const body = (await res.json().catch(() => ({}))) as { fields?: string[] };
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else if (res.status === 400) {
        setBadFields(body.fields ?? []);
        setStatus("invalid");
      } else if (res.status === 429) {
        setStatus("limited");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  const invalid = (name: string) => badFields.includes(name) || undefined;
  const notice = status === "sent" || status === "invalid" || status === "failed" || status === "limited" ? copy[status] : "";

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>
        <span>{copy.name}</span>
        <input name="name" autoComplete="name" required minLength={2} maxLength={80} aria-invalid={invalid("name")} />
      </label>
      <label>
        <span>{copy.reach}</span>
        <input name="reach" required minLength={3} maxLength={120} placeholder={copy.reachHint} aria-invalid={invalid("reach")} />
      </label>
      <label>
        <span>{copy.message}</span>
        <textarea name="message" rows={5} required minLength={10} maxLength={2000} aria-invalid={invalid("message")} />
      </label>
      <label className="trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-foot">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? copy.sending : copy.send}
        </button>
        <p className={`form-notice is-${status}`} role="status" aria-live="polite">
          {notice}
        </p>
      </div>
    </form>
  );
}
