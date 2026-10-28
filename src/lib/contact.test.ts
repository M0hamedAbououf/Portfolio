import { describe, expect, it, vi } from "vitest";
import { createRateLimiter, handleContact, type ContactMessage } from "./contact";

const valid = {
  name: "Sara Ahmed",
  reach: "sara@example.com",
  message: "We need a bilingual booking site for our clinic.",
  lang: "ar",
};

const allow = () => true;

describe("handleContact", () => {
  it("stores and notifies a valid message", async () => {
    const store = vi.fn<(m: ContactMessage) => Promise<void>>(async () => {});
    const notify = vi.fn<(m: ContactMessage) => Promise<void>>(async () => {});
    const res = await handleContact(valid, "1.1.1.1", { store, notify, allow });
    expect(res.status).toBe(200);
    expect(store).toHaveBeenCalledWith(expect.objectContaining({ name: "Sara Ahmed", lang: "ar" }));
    expect(notify).toHaveBeenCalledOnce();
  });

  it("trims fields before saving", async () => {
    const store = vi.fn<(m: ContactMessage) => Promise<void>>(async () => {});
    await handleContact({ ...valid, name: "  Sara  " }, "1.1.1.1", { store, allow });
    expect(store.mock.calls[0][0].name).toBe("Sara");
  });

  it("rejects short or missing fields and names them", async () => {
    const res = await handleContact({ name: "S", reach: "", message: "hi" }, "1.1.1.1", { store: async () => {}, allow });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual(expect.arrayContaining(["name", "reach", "message"]));
  });

  it("quietly accepts but drops a message when the hidden field is filled", async () => {
    const store = vi.fn<(m: ContactMessage) => Promise<void>>(async () => {});
    const res = await handleContact({ ...valid, website: "spam.example" }, "1.1.1.1", { store, allow });
    expect(res.status).toBe(200);
    expect(store).not.toHaveBeenCalled();
  });

  it("refuses when the sender is over the limit", async () => {
    const res = await handleContact(valid, "1.1.1.1", { store: async () => {}, allow: () => false });
    expect(res.status).toBe(429);
    expect(res.body.error).toBe("rate_limited");
  });

  it("reports not_configured when there is nowhere to send the message", async () => {
    const res = await handleContact(valid, "1.1.1.1", { allow });
    expect(res.status).toBe(503);
    expect(res.body.error).toBe("not_configured");
  });

  it("succeeds when one channel works and the other fails", async () => {
    const res = await handleContact(valid, "1.1.1.1", {
      store: async () => {
        throw new Error("db down");
      },
      notify: async () => {},
      allow,
    });
    expect(res.status).toBe(200);
  });

  it("fails when every configured channel fails", async () => {
    const res = await handleContact(valid, "1.1.1.1", {
      store: async () => {
        throw new Error("db down");
      },
      allow,
    });
    expect(res.status).toBe(502);
  });
});

describe("createRateLimiter", () => {
  it("allows up to the limit inside the window, then blocks, then resets", () => {
    let now = 0;
    const allowed = createRateLimiter(2, 1000, () => now);
    expect(allowed("a")).toBe(true);
    expect(allowed("a")).toBe(true);
    expect(allowed("a")).toBe(false);
    expect(allowed("b")).toBe(true);
    now = 1001;
    expect(allowed("a")).toBe(true);
  });
});
