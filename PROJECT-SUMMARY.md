# Portfolio project summary

- **Owner:** Mohamed Abououf
- **Project folder on this PC:** `D:\work\portfolio`
- **Written:** 29 October 2026
- **Status:** finished and live

This file records everything done on the portfolio rebuild, every decision made along the way, how the project is set up, and what is still left to do. The same file is in the project folder and on the GitHub branch `project-notes`, together with a PDF copy.

> The GitHub repo `M0hamedAbououf/Portfolio` is **public**. Anyone can read this file on GitHub, so it contains no passwords, keys or tokens.

---

## Contents

1. Quick facts
2. What we did, step by step
3. Design decisions
4. Writing rules for the site text
5. The projects on the site
6. What is on the site, section by section
7. How the code is organised
8. GitHub, branches and Vercel
9. Things kept only on this PC
10. The four design looks you liked
11. Problems we hit and how they were fixed
12. What is left to do
13. How to make common changes yourself
14. Full commit history

---

## 1. Quick facts

| What | Where |
|---|---|
| Live site | https://mohamed-abououf-portfolio.vercel.app |
| English home | https://mohamed-abououf-portfolio.vercel.app/en |
| Arabic home | https://mohamed-abououf-portfolio.vercel.app/ar |
| GitHub repo | https://github.com/M0hamedAbououf/Portfolio (public) |
| Vercel project | https://vercel.com/m0hamedabououfs-projects/portfolio |
| Vercel account | `m0hamedabououfs-projects`, sign in with GitHub |
| Branch that goes live | `main` (every push to `main` publishes the site within about a minute) |
| Working branch | `redesign` (same content as `main`) |
| Old site branch | `old-portfolio` |
| Notes and themes branch | `project-notes` (this summary, the PDF, the four looks) |
| Old site on this PC | `D:\work\portfolio-old` |
| Old GitHub Pages site | turned off (it was m0hamedabououf.github.io/Portfolio) |
| Contact form | hidden; direct links only |
| Link preview picture | `public/preview.jpg` (new, light design) |

**Your links used on the site**

| Link | Address |
|---|---|
| Instagram | https://www.instagram.com/mohamed_abououf/ |
| LinkedIn | https://www.linkedin.com/in/mohamed-abou-ouf |
| WhatsApp | https://wa.me/201017670216 (+20 101 767 0216) |
| Email | mohabououf@gmail.com |
| GitHub | https://github.com/M0hamedAbououf |
| Coretex | https://coretex-tech.vercel.app/ |

---

## 2. What we did, step by step

### Round 1: understanding the job
1. Opened the old portfolio in `D:\work\portfolio`. It was a plain HTML, CSS and JavaScript site with mock projects (website, Shopify, system, automation, UI/UX pages), hosted on GitHub Pages.
2. Searched `D:\work` and the rest of the PC for your real projects and listed them for you.
3. You chose which projects to show and which to leave out (see section 5).
4. Used the Matt Pocock skills you asked for:
   - **grilling:** rounds of numbered questions to agree on every decision.
   - **prototype:** throwaway pages to compare looks.
   - **tdd:** the contact form logic was built test-first.
5. Also used the **impeccable** design skill, the **frontend-design** skill and the **Vercel React best practices** skill.
6. Wrote `PRODUCT.md` (kept on this PC only). It records who the site is for, what it must do and the brand rules.

### Round 2: choosing a look
1. **Round 1 looks** (`prototype/mood.html`): playful, neon and candy colours. You rejected them as too silly.
2. **Round 2 looks** (`prototype/mood-2.html`): calm, one accent colour. You rejected them as too plain and looking AI generated.
3. **Round 3 looks** (`prototype/mood-3.html`): four classy looks with a primary and a secondary colour, each with light and dark mode and Arabic:
   - A: Original colours (bronze)
   - B: Green (palette taken from your picture in `D:\work\New folder`)
   - C: Periwinkle
   - D: Navy and champagne

   You liked all four. We kept all four on this PC and put **look A (bronze)** on the live site.
4. Your photo:
   - The background was cut out with the rembg tool (isnet-general-use model, stored in `D:\u2net`).
   - The photo is now large and blends into the page with no frame or box.

### Round 3: building the real site
1. Rebuilt the whole site in **Next.js 16** on a new branch called `redesign`.
2. Added:
   - English and Arabic, with full right-to-left layout for Arabic
   - A language switch, plus light and dark mode
   - 3D rings around your photo that move slightly
   - Section animations as you scroll
   - A case-study page for each project, with real screenshots
3. Made light mode the default, as you asked.
4. Made it your personal portfolio, not a Coretex portfolio:
   - Client projects say what was delivered to the client.
   - Coretex has its own project page that says you are a co-founder.
   - The next-project button inside each project page uses your site style, not the Coretex style.
5. Arab Collective page: the CRM you built comes first, then the Shopify store work.
6. Fixed facts:
   - Port Said, not Cairo
   - Graduated 2026
   - Your personal Instagram, not the Coretex one
   - 20+ projects
7. Removed the 150% conversion figure everywhere. It must never be shown.
8. Brought back useful things from the old site: the services list, the available-for-work note and the moving services banner (ticker).
9. Added GitHub to the contact links, with a small line icon next to each link.
10. Changed the fonts:
    - Montserrat for titles and Lato for body text
    - Cairo and Tajawal for Arabic
11. Rewrote the intro text. You picked version 1, with the Lato font.
12. Added a phone menu (a button with three lines at the top on phones).
13. Rewrote all Arabic text as an Arabic writer would, not as a translation:
    - Removed the word أبني because it can read as "my son".
    - Removed أعمال مختارة because it sounded translated. The English "Selected work" was also replaced.
    - Showed you formal Arabic and Egyptian Arabic side by side (`prototype/arabic-compare.html`). You chose **Egyptian Arabic**.
14. Removed every apostrophe and quote mark from the site text (I'm, it's, we're, Mohamed's and so on), because they read as AI writing.

### Round 4: going live
1. You found the Vercel and Supabase sign-in inside Claude (`/mcp`) too slow, so we used the existing GitHub to Vercel connection instead.
2. Saved the old site on a new branch `old-portfolio`. It is also still on this PC in `D:\work\portfolio-old`.
3. Merged `redesign` into `main` and pushed. Vercel built it.
4. Turned off the old GitHub Pages site.
5. You found the public address in the Vercel dashboard: `mohamed-abououf-portfolio.vercel.app`.
6. **Problem:** every page showed "not found". The Vercel project still had the old plain-HTML settings.
   - **Fix:** added `vercel.json` telling Vercel this is a Next.js app. After that, every page worked.
7. Checked the live site: English and Arabic homes, project pages, the phone layout, a wrong address showing a proper not-found page, the sitemap and robots files.

### Round 5: final touches
1. **Contact form hidden (option 1).** It was not connected to Supabase, so visitors could type a message and only then be told it did not send.
   - Now the contact section has the heading, one line saying Instagram or LinkedIn is the fastest way to reach you, and the 5 direct links.
   - The form code is still in the project, so it can be turned back on later (section 12).
2. **New link preview picture.** This is the picture that shows when you send the link in WhatsApp, Instagram or LinkedIn.
   - It was dark with the old headline. Now it is light, with the new headline and your photo.
   - The file got a new name, `preview.jpg`, so chat apps fetch the new one.
3. Wrote this summary and its PDF, and saved the four looks to the `project-notes` branch on GitHub.

---

## 3. Design decisions

### Colours (look A, bronze)
| Name | Light mode | Dark mode |
|---|---|---|
| Background | `#f5f0eb` | `#0e0c0a` |
| Main colour (bronze) | `#8a654b` | `#ba957c` |
| Rings around photo | `#d7b79c` | `#ba957c` |
| Text | `#14110e` | `#f3eee9` |
| Soft text | `#5a5550` | `#a39c93` |
| Lines | `#d9cbbd` | `#2c2118` |

- Light mode is the default. The moon or sun button switches mode and the choice is remembered.
- Few colours on purpose: classy, not silly.

### Fonts
| Use | English | Arabic |
|---|---|---|
| Titles | Montserrat | Cairo |
| Body text | Lato | Tajawal |

### Layout and motion
- **Hero (top):**
  - Your role, the big headline, the intro text, two buttons (Instagram and LinkedIn) and the available-for-new-projects note.
  - Three numbers: 20+ projects delivered, 5 services, EN/ع every project bilingual.
  - Your large cut-out photo with the 3D bronze rings.
- **Moving services banner** under the hero.
- **Animations:**
  - Sections fade in as you scroll.
  - The 3D rings pause when they are off screen.
  - All motion turns off for visitors whose device asks for reduced motion.
- **On phones:** a menu button, the photo above the text and one column.

---

## 4. Writing rules for the site text

Follow these whenever the text is changed:

1. It is **your** portfolio, not Coretex. Client projects are labelled Client project and say what was delivered.
2. Never show the 150% conversion figure or any other conversion numbers.
3. Say **20+ projects**.
4. **Port Said**, not Cairo. **Graduated 2026.**
5. Instagram is your personal one: `mohamed_abououf`.
6. No contractions (I'm, it's, we're, don't), no possessive apostrophes (Mohamed's) and no quote marks.
7. Arabic is **Egyptian Arabic**, written naturally, not translated.
8. Never use أبني (it can read as "my son").
9. Avoid template phrases like Selected work or أعمال مختارة.
10. No invented testimonials or claims.

**Current main text (English)**
- Role: Mohamed Abououf, communications engineer
- Headline: Hi, I am Mohamed. I build digital products that work.
- Intro: Websites, online stores, booking systems and CRMs, designed and engineered from start to finish, in Arabic and English. Based in Port Said, working with clients everywhere.
- Work title: Projects I have built
- Contact title: Have a project in mind? Tell me about it
- Contact line: The fastest way to reach me is Instagram or LinkedIn. Send me a message and I will reply within a day.

**Current main text (Arabic)**
- Headline: أهلاً، أنا محمد. بحوّل فكرتك لموقع أو سيستم شغّال صح.
- Work title: شوية من شغلي
- Services title: بعمل إيه؟
- About title: مين أنا؟ and the tagline درست هندسة، وحبّيت البرمجة.
- Contact title: عندك فكرة مشروع؟ احكيلي عنها
- Contact line: أسرع طريقة تكلّمني بيها إنستجرام أو لينكدإن، ابعتلي وهرد عليك خلال 24 ساعة.

---

## 5. The projects on the site

The order on the site is the order in the table.

| # | Project | Type on site | Live link | Built with | Source on this PC |
|---|---|---|---|---|---|
| 1 | Arab Collective | Client project | arabcollective.com | React, TypeScript, Vite, Tailwind, Supabase, Shopify Admin API, Shopify | `D:\work\jana CRM` (CRM) |
| 2 | Coretex | My company, co-founder | coretex-tech.vercel.app | Next.js, React, GSAP, Supabase, Shopify, n8n | Coretex site |
| 3 | Dabah House | Client project | eldabah.com | Next.js, React, TypeScript, Supabase, Resend, Vercel, Cloudflare | `D:\work\dabbah` |
| 4 | Yuva House | Client project | (no public link) | WordPress, PHP, JavaScript, Cloudbeds | `D:\work\hotal` |
| 5 | OFFGRID | Personal project | (no public link yet) | React, TypeScript, Vite, Three.js, Playwright | `D:\work\projects generated\3d-website` |
| 6 | Strike Lane Pro Shop | Personal project | (no public link yet) | JavaScript, HTML, CSS, Supabase | `D:\vibe course` (repo M0hamedAbououf/bowling-store) |
| 7 | Foxi Player | University project (2024) | (desktop app) | Python, Tkinter, VLC, Pillow, pytest | `D:\collage\audio_player` |

**Notes per project**
- **Arab Collective:**
  - The CRM comes first: a gift box builder using live Shopify stock, free Shopify draft orders, saved delivery details and a live feed of gifts and delivery status. It passed the Shopify review for protected customer data.
  - Then the Shopify store and its Design Studio.
  - The card shows only the public store. No conversion numbers.
- **Coretex:** says you are a co-founder and what Coretex provides, plus Coretex OS, the internal platform.
- **Dabah House:**
  - A bilingual booking and payment platform with a private review dashboard and a CSV export that works in Excel with Arabic.
  - The site is moving from the old version to a new live version. The look is final, but some content is still changing.
- **Yuva House:** a custom WordPress theme for an 11-suite boutique hotel.
- **OFFGRID:** a 3D streetwear storefront concept, where the 3D scene surrounds the product photos.
- **Strike Lane:** a demo bowling pro shop with a live catalogue, cart and contact form.
- **Foxi Player:** a desktop audio player made at university.

**Left out on purpose:** True Profit (TP CRM), the Voice Reminder app and the YouTube Shorts pipeline.

**Screenshots used** (in `public/work/`):
- arab-collective: home, home-mobile, design-studio
- coretex: home, home-mobile
- dabah-house: home, home-mobile
- yuva-house: home, home-mobile, suite
- offgrid: home, mobile
- strike-lane: store, mobile
- foxi-player: player

---

## 6. What is on the site, section by section

**Home page** (`/en` and `/ar`):
1. **Top bar:**
   - ABOUOUF logo
   - Work, Services, Coretex, About and Contact links
   - Language button (عربي or EN)
   - Light/dark button
   - On phones, a menu button
2. **Hero:** role, headline, intro, Instagram and LinkedIn buttons, available note, the 3 numbers, your photo with the 3D rings.
3. **Moving services banner.**
4. **Projects:** a card for each of the 7 projects, with a picture, type and short summary. Each card opens its project page.
5. **Services:** 5 services.
6. **About:** your story, a timeline, education, skills and languages.
7. **Contact:** heading, one line, and 5 direct links with icons (Instagram, LinkedIn, WhatsApp, email, GitHub).
8. **Footer:** © 2026, Designed and built by Mohamed Abououf, back to top.

**Project pages** (`/en/work/<name>` and `/ar/work/<name>`):
- Title, type, year and live link
- What they needed
- What we delivered, or the parts of the project
- Under the hood (the engineering)
- Built with
- Pictures
- A next-project card with picture and summary

**Other behaviour**
- Visiting the bare address sends you to `/en` or `/ar`. It goes by the language you chose last, then by your browser language.
- A wrong project address shows a real not-found page.
- The site has a sitemap, a robots file, a site icon and the link preview picture.

---

## 7. How the code is organised

**Tools:**
- Next.js 16.4.3 (App Router, Turbopack, `cacheComponents` and `partialPrefetching` on)
- React Three Fiber and three.js for the rings
- zod for form checks
- Supabase and Resend for the form, which is currently hidden
- vitest for tests

| File or folder | What it holds |
|---|---|
| `src/content/projects.ts` | All 7 projects and their page text, in English and Arabic |
| `src/content/dictionary.ts` | All other site text (both languages) and your links |
| `src/content/locales.ts` | The two languages and how the browser language is picked |
| `src/app/[lang]/page.tsx` | The home page |
| `src/app/[lang]/layout.tsx` | Fonts, page titles, the link preview picture, the theme script, top bar and footer |
| `src/app/[lang]/work/[slug]/page.tsx` | The project pages |
| `src/app/globals.css` | All styling, colours and fonts |
| `src/app/api/contact/route.ts` | The contact form server code (unused while the form is hidden) |
| `src/lib/contact.ts` and `contact.test.ts` | Form rules and their 9 tests |
| `src/lib/site.ts` | Works out the site address from Vercel automatically |
| `src/proxy.ts` | Sends visitors to `/en` or `/ar`; sends wrong project addresses to not-found |
| `src/components/` | Header, phone menu, theme button, language button, 3D rings, contact icons, form, footer, scroll animation |
| `public/me.png` | Your cut-out photo |
| `public/preview.jpg` | The link preview picture |
| `public/work/` | Project screenshots |
| `supabase/migrations/20261029000000_contact_messages.sql` | The database table for the form, ready for later |
| `.env.example` | The settings the form needs (no real values) |
| `vercel.json` | Tells Vercel this is a Next.js app. **Do not delete it**, or every page shows not found again |

---

## 8. GitHub, branches and Vercel

**Branches**
| Branch | What it is |
|---|---|
| `main` | The live site. Pushing here publishes the site. |
| `redesign` | Where the new site was built; same as `main` now. |
| `old-portfolio` | The old plain-HTML portfolio, saved exactly as it was. |
| `project-notes` | This summary (MD and PDF), `PRODUCT.md` and the four design looks. |

**Vercel**
- The Vercel project `portfolio` is connected to the GitHub repo and publishes `main` automatically.
- Public address: `mohamed-abououf-portfolio.vercel.app`.
- Every build also gets a private preview address (they look like `portfolio-xxxx-m0hamedabououfs-projects.vercel.app`). These ask for a Vercel login. That is normal.
- No environment variables are set yet (only needed for the contact form).

**GitHub Pages:** turned off, so the old site is no longer online.

---

## 9. Things kept only on this PC

| What | Where | Why |
|---|---|---|
| Old portfolio, runnable | `D:\work\portfolio-old` | You asked to keep the old one working locally |
| All design looks and comparison pages | `D:\work\portfolio\prototype\` | Design history; the four looks are also on the `project-notes` branch |
| `PRODUCT.md` | `D:\work\portfolio\PRODUCT.md` | Product notes; also on `project-notes` |
| `.impeccable\` | `D:\work\portfolio\.impeccable\` | Design tool working files |
| This summary | `D:\work\portfolio\project-notes\` | Also on `project-notes` |
| Photo background tool model | `D:\u2net` | Used to cut out your photo |
| Original photo (white background) | `D:\work\portfolio-old\assets\Untitled.png` | Source photo; the cut-out is `public\me.png` and `prototype\shots\portrait-cut.png` |

**Files in `prototype\`**
- `mood.html`: round 1 looks (rejected)
- `mood-2.html`: round 2 looks (rejected)
- `mood-3.html`: round 3, the four looks you liked
- `fonts.html`: title font options with Lato
- `arabic-compare.html`: formal Arabic vs Egyptian Arabic
- `shots\`: pictures used by those pages

---

## 10. The four design looks you liked

**File:** `themes/mood-3.html` on the `project-notes` branch, or `prototype\mood-3.html` on this PC.

**How to view:**
- Double-click the file to open it in your browser. It needs the `shots` folder next to it.
- Use the left and right arrows at the bottom to switch looks.
- Each look has light and dark mode and English and Arabic.
- You can also add `?variant=B`, `&lang=ar` or `&theme=dark` to the address.

| Look | Name | Default mode |
|---|---|---|
| A | Original colours (bronze), **the one on the live site** | dark in the prototype (light on the live site) |
| B | Green (palette from your picture) | light |
| C | Periwinkle | light |
| D | Navy and champagne | light |

> These are early mock-ups. They still show some old text (Selected work, the old headline, Cairo, the conversion figure) that was corrected on the real site. Use them for colours and style only.

To switch the live site to another look later, change the colour values in `src/app/globals.css` to match that look.

---

## 11. Problems we hit and how they were fixed

| Problem | Fix |
|---|---|
| A test tool needed a newer Node types package | Installed `@types/node` version 24 |
| Project name cannot start with `_` | Used `next-scaffold` as a temporary name |
| Build error: `dynamicParams` not allowed with `cacheComponents` | Removed it; `src/proxy.ts` handles wrong addresses instead |
| Wrong project addresses showed an empty page instead of not found | `src/proxy.ts` now sends them to a not-found page |
| Page could scroll sideways in Arabic | A hidden anti-spam field was moved off screen in a safer way, and sideways scrolling is clipped |
| The rings were too faint in light mode | Added a separate ring colour |
| The phone menu caused a code warning | Rewrote how the menu remembers if it is open |
| Push failed while offline | Pushed again when the internet was back |
| Vercel and Supabase sign-in inside Claude was too slow | Used the existing GitHub to Vercel link instead |
| Live site showed not found for every page | Added `vercel.json` (Vercel still had the old plain-HTML settings) |
| Contact form could not send | Hid the form; direct links only |
| Chat preview picture was old and dark | New light `preview.jpg` with the new headline |
| Arabic sounded translated, and أبني was unclear | Rewrote in Egyptian Arabic; removed أبني |
| Apostrophes and quotes looked like AI writing | Removed from all site text |

---

## 12. What is left to do

### A. Security (important, do soon)
Some files on this PC have passwords or keys written in plain text:
- `D:\work\dabbah\deployment_guide.md` has the Dabah House admin password.
- The files in `D:\work\jana CRM\summary` have part of a Supabase key and a Shopify access token.

What to do:
1. Change that admin password and create new keys in Supabase and Shopify.
2. Delete the old values from those files, or move the files somewhere private.
3. Never upload those files to GitHub or anywhere else.

### B. Contact form (optional, only if you want it back)
The form is hidden. To turn it on:
1. Make a free account at supabase.com and create a new project.
2. In Supabase, open **SQL Editor**, paste the content of `supabase/migrations/20261029000000_contact_messages.sql`, and press **Run**.
3. In Supabase **Project Settings > API**, copy the **Project URL** and the **service_role** key. The service_role key is secret: never share it or put it in GitHub.
4. In Vercel, open the project, then **Settings > Environment Variables**, and add:
   - `SUPABASE_URL` = the Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = the service_role key
   - `CONTACT_TO_EMAIL` = mohabououf@gmail.com
5. Optional, to get each message by email: make an account at resend.com, create an API key and add it in Vercel as `RESEND_API_KEY`.
6. Put the form back on the home page. This is the reverse of commit `68051ec`.
7. Push to `main`, wait about a minute, and send a test message.

### C. Live demos for personal projects (agreed earlier, not done)
1. Put **OFFGRID** online on Vercel and add its link to its project page.
2. Put **Strike Lane Pro Shop** online on Vercel, make the `bowling-store` GitHub repo public, and add the links.

### D. Small things
1. When the new Dabah House version is fully live, take new screenshots for its project page.
2. Optional: buy your own domain (for example mohamedabououf.com) and connect it in Vercel under **Settings > Domains**.
3. Put the live link in your Instagram bio, LinkedIn profile and CV.
4. If you ever want look B, C or D on the live site, see section 10.
5. If a chat app still shows the old preview picture, it saved the old one. New chats show the new one.

---

## 13. How to make common changes yourself

**See the site on your PC**
```
cd D:\work\portfolio
npm install        (only the first time)
npm run dev
```
Then open http://localhost:3000.

**Change text:** edit `src/content/dictionary.ts` for general text, or `src/content/projects.ts` for project text. Change both `en` and `ar`.

**Add a project:**
1. Add a new entry in `src/content/projects.ts`, copying the shape of an existing one.
2. Put its pictures in `public/work/<project-name>/`.

**Check before publishing**
```
npm test
npm run build
```

**Publish:** commit to `main` and push. Vercel publishes it in about a minute.

**Old site:** open `D:\work\portfolio-old\index.html`, or look at the `old-portfolio` branch on GitHub.

---

## 14. Full commit history

**New site (29 October 2026)**
| Commit | What changed |
|---|---|
| `56b6236` | Replace the link preview picture with one that matches the new site |
| `68051ec` | Hide the contact form and keep the direct links |
| `3f86ad4` | Tell Vercel this project is a Next.js app |
| `6bb8e2a` | Read the site address from Vercel automatically |
| `7c74075` | Remove contractions, possessive apostrophes and quote marks from copy |
| `22c5e95` | Switch the Arabic version to Egyptian Arabic |
| `cffab05` | Rewrite remaining translated-sounding headings |
| `8e278de` | Add a phone menu and rewrite the Arabic copy natively |
| `3f67650` | Use clearer Arabic for build |
| `880b416` | Switch to Lato + Montserrat, new intro, moving services banner |
| `7ac0be3` | Add GitHub and line icons to the contact links |
| `2a79c7c` | Add services, availability and personal Instagram from old portfolio |
| `a59d37a` | Make it a personal portfolio: CRM-first Arab Collective, Coretex page |
| `6fbad12` | Rebuild portfolio in Next.js with bilingual case studies |

**Old site (April 2026, kept on `old-portfolio`)**
| Commit | Date | What changed |
|---|---|---|
| `bd58fbe` | 22 Apr | Fix profile photo container |
| `afb64a6` | 21 Apr | Update profile photo with transparent PNG |
| `9e583fa` | 19 Apr | Fix WhatsApp number (0216 not 1216) |
| `be96931` | 18 Apr | Improve My Story label |
| `4374d77` | 18 Apr | Change My Story from button to plain label |
| `4be9fb6` | 18 Apr | Fix mobile responsiveness |
| `025bb0d` | 18 Apr | Initial commit of ABOUOUF Portfolio |
