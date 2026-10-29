# Mohamed Abououf — portfolio

Personal portfolio in English and Arabic (right-to-left), light and dark mode, with a case-study page for each project.

Live: https://mohamed-abououf-portfolio.vercel.app (Vercel publishes every push to `main`; `vercel.json` must stay, it tells Vercel this is a Next.js app).

Built with Next.js 16 (App Router), React Three Fiber for the hero rings, Supabase (contact messages) and Resend (email alerts). Deployed on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /ar
npm test           # contact form logic (vitest)
npm run build
```

## Contact form setup

Copy `.env.example` to `.env.local` and fill it in. The form works with either channel on its own:

- **Supabase:** run `supabase/migrations/20261029000000_contact_messages.sql` in the project's SQL editor, then set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
- **Resend:** set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.

With neither set, the form answers "not configured" and points visitors to Instagram and email.

The form is currently hidden from the home page (direct links only). To bring it back, set the variables above in Vercel and revert commit `68051ec`.

## Where things live

| Path | What it holds |
|---|---|
| `src/content/projects.ts` | Every project and its case-study text, in both languages |
| `src/content/dictionary.ts` | All other page text and the social links |
| `src/app/[lang]/` | Home page and `work/[slug]` case-study pages |
| `src/proxy.ts` | Sends `/` to `/en` or `/ar` from the browser language |
| `src/lib/contact.ts` | Contact form rules, tested in `contact.test.ts` |
| `public/work/` | Project screenshots |

The previous static version of the site is on the `old-portfolio` branch. The full project summary and the four design looks are on the `project-notes` branch.
