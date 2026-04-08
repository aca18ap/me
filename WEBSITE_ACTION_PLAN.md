# Website Action Plan — MVP Sprint

**Goal:** A site you're proud to put on job applications, live by end of this weekend.
**Stack:** Keep vanilla HTML/CSS/JS on GitHub Pages. No framework, no build step.

---

## 1. Vision & Positioning

**Vibe:** *Quietly excellent and modern, with one bold structural move.*
Confident restraint — mostly disciplined whitespace and tight typography, with one memorable layout decision that makes the site stick in the mind.

**Positioning line (working draft — refine in your voice):**
> Alberto Pia — Software Engineer building iOS, Android, and the systems behind them. Currently shipping IoT mobile apps at Fathom3.

**Audience priority:** Recruiters and hiring managers, first scan ~10 seconds. They should know within that scan: who you are, what you do, that you're serious, and how to contact you.

---

## 2. MVP Structure (single-page scrolling)

1. **Hero**
   - Name + one-line positioning
   - Primary CTA: **Download CV** (button)
   - Secondary CTA: **Email me** (button)
   - Tertiary: GitHub + LinkedIn icons
   - One bold structural move (see §4)

2. **Selected Work** — three project cards
   - **RackEye / Fathom3** (mobile, IoT) — **text-led card, no screenshots.** Confident written case study + tech stack + a tasteful typographic or device-frame visual treatment. Lean into it being words-only as a deliberate choice.
   - **Bryant Research NLP pipeline** (ML/data, scale) — full case study with a visual (diagram if no UI exists)
   - **Logbook (named placeholder)** — "Coming soon: *Logbook* — a SwiftUI flight sim logger that draws every route you've flown as great-circle arcs across a world map." Styled to look intentional, not broken. Swap in real card within 1–2 weeks.
   - Each card: title, 2–3 sentence story (problem → approach → outcome), tech chips, link(s)

3. **About** — short and confident
   - T-shaped engineer framing (deep mobile, branches into backend/ML/web)
   - One sentence on the Italy → Qatar → UK arc (it's distinctive, earns its space)
   - One sentence on what you care about as an engineer

4. **Beyond Code** — single tight strip
   - Three tiles: Music · Photography · Aviation
   - One sentence + one image each
   - No carousels, no separate pages, no loaders
   - This replaces three half-finished pages with one working strip

5. **Contact**
   - Email (clickable)
   - Download CV
   - GitHub, LinkedIn
   - That's it

**Cut from MVP:** standalone Photography page, Aviation page, Music page. Files stay in repo, removed from nav. Bring back as proper sub-pages later when content is ready.

---

## 3. Prioritised task list

### Quick fixes (do first — hours, not days)
- [ ] Hide Photography, Aviation, Music from nav (keep files)
- [ ] Replace `index.html` redirect with the new single-page site
- [ ] Add CV PDF to `/assets` and wire up download button
- [ ] Fix any broken asset links and loading spinners that currently show
- [ ] Add favicon
- [ ] Add Open Graph tags + meta description (so links shared on LinkedIn look polished)

### Weekend sprint (the actual MVP build)
- [ ] Build new single-page `index.html` with the five sections above
- [ ] Write hero positioning line in your voice
- [ ] Write three project case studies (~80–120 words each)
- [ ] Gather/produce screenshots: 1 visual per project minimum
- [ ] Write the About paragraph (100–150 words, confident, distinctive)
- [ ] Build the Beyond Code strip with three tiles + one strong image each
- [ ] Implement the chosen "bold move" layout decision (see §4)
- [ ] Mobile responsive pass (you're a mobile dev — table stakes)
- [ ] Lighthouse pass: target 95+ on performance, accessibility, best practices, SEO

### Nice to have (after MVP is live)
- [ ] Proper case study sub-pages for top 1–2 projects (longer write-up, more visuals)
- [ ] Working Photography page with a real lightbox/gallery
- [ ] Working Music page with embedded audio (Bandcamp embed for Take Four)
- [ ] Aviation page with flight sim hours, favourite routes, screenshots from sim
- [ ] Blog / writing section if you ever want one
- [ ] Subtle scroll animations / reveals

---

## 4. The "bold move" — three concrete options

You picked "unusual layout move." Here are three directions; pick one (or remix):

**Option A — Vertical wordmark anchor**
Your full name set very large, rotated 90°, anchored to the left edge of the viewport as you scroll the hero. Acts as a structural spine. Rest of the layout is calm and gridded. Clean signature, very memorable.

**Option B — Asymmetric hero with broken grid**
Hero uses a 12-column grid but your name/title deliberately spans columns 2–9 while the CTA cluster sits in columns 10–12 with extra negative space below. The intentional asymmetry feels confident and editorial.

**Option C — Horizontal project strip inside vertical scroll**
Page scrolls vertically as normal, but the "Selected Work" section is a horizontally-scrolling strip of three big project cards. Forces the recruiter to engage with each one. Mobile-friendly with snap scroll.

My recommendation: **Option C**, because it makes the projects (the most important content) the part of the site that *behaves* differently, which earns the bold move. A and B are about decoration; C is about emphasis.

---

## 4b. Approved copy (drafted — ready to build from)

### Hero
**Headline:** Mobile-first. Full-stack underneath.

**Sub-line:** I build iOS and Android apps that ship to real users — and the systems behind them. Currently sole mobile developer at Fathom3, where I own both platforms end to end.

**CTAs:** [Download CV]  [Get in touch →]  + GitHub · LinkedIn icons

---

### RackEye card (Fathom3 / ASafe)
*Sole iOS & Android Developer — NDA-safe, approved*

> Warehouse racking can fail without warning — and traditional safety inspections are slow, paper-based, and inconsistent. RackEye addresses both. IoT sensors magnetically attach to racking legs across a site, detecting impacts and their intensity in real time. The mobile apps — which I own entirely on iOS and Android — give warehouse teams a live view of every building, zone, and device, and guide inspectors through structured, question-driven racking assessments directly on the warehouse floor. Live on the App Store and Google Play, deployed in commercial warehouses, across multiple shipped major versions.

**Tech chips:** Swift · UIKit · SwiftUI · Kotlin · Jetpack Compose · REST · IoT/BLE

---

### Bryant Research card
*Solo project*

> Bryant Research needed a reliable way to gather and process news at scale — tens of thousands of articles from sources that weren't designed to be scraped. I designed and built an end-to-end pipeline that automated article collection across paywalled and restricted sources, extracted clean article text while stripping ads, navigation, and surrounding noise, and fed the resulting corpus into a classification system that categorised 50,000+ articles by topic and type. The engineering challenge was reliability and precision: getting clean, usable text out of messy real-world web content, consistently, at scale.

**Tech chips:** Python · Django · Selenium · BeautifulSoup · HuggingFace Transformers · BERT

---

### Logbook card (placeholder)
*SwiftUI · MapKit · SwiftData — coming soon*

> A personal flight sim logger that draws every route you've flown as great-circle arcs across a world map. Built in SwiftUI with MapKit.

*(Swap for full write-up once app ships)*

---

### About paragraph
*✅ Approved*

> I'm a software engineer based in Sheffield with a decade of coding experience and a specialism in mobile. Right now I'm the sole developer of iOS and Android apps at Fathom3, where I own both platforms end to end — from architecture decisions to App Store releases. I've applied the same engineering standards to data pipelines, full-stack web products, and ML-adjacent work along the way — which means I'm comfortable anywhere in the stack, but I come back to mobile because that's where I do my best work.
>
> I grew up in three countries — born in Italy, raised in Qatar, now a British citizen — and I think that's made me a better engineer than any framework has. I adapt fast, communicate well across teams, and I've never found a codebase I couldn't get comfortable in.

---

### Beyond Code tiles (all approved)

**Music:** Performing keys and piano since I was seven — Grade 8 Distinction, band member on two released albums, and still the person who ends up at the piano at parties.

**Photography:** I shoot architecture and landscapes whenever I travel — an eye for composition that, honestly, has made me a better UI designer.

**Aviation:** 200+ hours in flight simulation, with a particular obsession for long-haul routes and accurate procedures. One day this becomes a real licence.

---

## 5. Content you need to gather (start now, in parallel)

- [ ] **CV PDF** — latest version, save into `/assets/Alberto_Pia_CV.pdf`
- [ ] **RackEye write-up (words only)** — what the platform does, your role as sole mobile dev, tech stack, scale/impact in non-confidential terms. No screenshots.
- [ ] **Bryant Research write-up** — what the pipeline does, scale (50k+ articles), your contribution, tech stack
- [ ] **Bryant Research visual** — even a stylised diagram of the pipeline works if there's no UI to screenshot
- [ ] **Pick the side project to ship in 1–2 weeks** — name it, scope it, commit to it. Goes on the site as a named "coming soon" card immediately.
- [ ] **Build & ship the side project** — parallel track to MVP launch
- [ ] **Beyond Code images** — one photo for music (Take Four band shot?), one for photography (your single best image), one for aviation (cockpit / flight sim screenshot)
- [ ] **Hero headshot or visual** — current profile photo is fine; consider whether you want a different one

---

## 6. Technical decisions (locked)

- **Stack:** Vanilla HTML/CSS/JS, no framework
- **Hosting:** GitHub Pages (no change)
- **Structure:** Single-page `index.html` for the MVP. Old sub-pages stay in `/pages/` but removed from nav. Easy to revive later.
- **CSS:** One stylesheet, custom properties for colours/spacing/type scale, mobile-first
- **No JS frameworks.** Vanilla JS only for: nav scroll, mobile menu toggle, project strip scroll snap if needed
- **Fonts:** Pick a strong pair this weekend — suggestion: Inter (UI) + a serif display like Fraunces or GT Sectra for the bold move
- **Performance budget:** <100KB total, <1s TTI on 4G

---

## 6b. Side project: Logbook (parallel 1–2 week track)

**Pitch:** A SwiftUI iOS app that logs flight sim sessions and visualises every route you've flown as great-circle arcs across a world map. Built for you, populated with your real 200+ hours.

**Why this one:** Most distinctive of the candidates. Visually striking primary view (map + arcs). Honest, memorable interview story tied to a genuine hobby. Adds an iOS-only, MapKit-flavoured facet that RackEye and Bryant don't cover. Exists nowhere else on the internet.

**MVP scope (do not exceed):**
- One screen: a world map with all logged flights drawn as great-circle arcs
- A second screen / sheet: list of logged flights (date, aircraft, route, duration, notes)
- An "add flight" form: aircraft, ICAO from, ICAO to, duration, notes
- Local storage only (SwiftData or plain JSON file). No backend, no auth, no sync.
- Dark mode default. Considered typography. One accent colour.
- Ships to TestFlight or shows a clean demo video on the portfolio site.

**Out of scope for v1 (resist the urge):**
- Real flight data integration
- Sharing / social features
- Export / import beyond a simple JSON dump
- Detailed per-flight stats screens
- Cross-platform anything

**Definition of done:**
- App builds, runs, and looks intentional on a real iPhone
- The map view is genuinely beautiful (the arcs need real care)
- A 30-second screen recording exists for the portfolio
- A short README on GitHub with one hero screenshot

**Portfolio card swap-in:**
Once shipped, replace the "coming soon" placeholder with: title, the map screenshot as the visual, 2–3 sentence story, tech chips (SwiftUI, MapKit, SwiftData), TestFlight link or video link.

---

## 7. Future iterations (so nothing feels lost)

- **v2 (next 2–4 weeks):** Proper case study sub-pages for RackEye + Bryant. Working Photography gallery. Music page with embedded audio.
- **v3 (when there's time):** Aviation page. Possibly a writing/notes section. Animated transitions between sections.
- **v4 (if you ever feel like it):** Migrate to Astro or 11ty if maintenance gets annoying. Not before.

---

## 8. Definition of Done for MVP

The MVP is done when:
1. A recruiter can land on the site, understand who you are in 10 seconds, and download your CV in two clicks.
2. There are no broken images, failed loads, or empty pages anywhere on the live site.
3. It looks good on a phone.
4. Lighthouse scores are 90+ across the board.
5. You'd be comfortable putting the URL on a job application tomorrow morning.

That's it. Anything else is v2.
