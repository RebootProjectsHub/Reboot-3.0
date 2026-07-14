# Handoff: «Våre tjenester» subpage — reboot.no

## Overview
A new services subpage for reboot.no, replacing the old `/tjenester` page. It presents Reboot's five service areas, the fixed price for a new website, the three maintenance/support packages (Standard / Proff / Partner), and a contact CTA. Visual language matches the new 2026 front-page design (Reboot 3.0).

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, **not production code to copy directly**. The task is to recreate this design in the target codebase (`RebootProjectsHub/Reboot-3.0`, a Next.js marketing site) using its established patterns, components and tokens. The design was built against the Reboot design system extracted from that repo (see `design_handoff_hero_section/`, `design_handoff_services_section/`, `design_handoff_team_image_band/` in the repo for sibling specs using the same tokens).

- `Våre tjenester.dc.html` — the full page design (open in a browser; ignore the `support.js` / `<x-dc>` runtime scaffolding — the markup and inline styles inside are the reference)
- `tokens/` — the exact token stylesheets the design consumes (colors, typography, spacing, fonts)
- `components.css` — the component classes referenced by the design (`rb-card--service`, `rb-badge-kicker`, `rb-link-arrow`, `rb-btn`, …)

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, copy and hover behavior are final and should be recreated pixel-perfectly. All copy is final Norwegian (Bokmål) unless the client revises it.

> Font note: headings use **Source Serif 4**, body **Hanken Grotesk**, labels **Space Mono** (Google Fonts). If the production "gelica" Typekit family becomes available, it substitutes per the design-system guidance.

## Page structure (top to bottom)

All content sits in a centered container, `max-width: 1140px`, `padding: 0 24px`. Page background `#F4ECE3` (`--cream-200`). Body text color `#4A1220` (`--ink-900`).

### 1. Hero
- Centered. Padding `100px 24px 40px`.
- Pill badge «Våre tjenester» — Space Mono 12px, 700, uppercase, letter-spacing 0.18em, bg `#F1E0D3`, pill radius, padding 8px 16px.
- H1 «Fra idé til daglig drift» — Source Serif 4, 64px, 600, line-height 1.05, letter-spacing −0.02em, max-width 720px.
- Subhead — Hanken Grotesk 19px, line-height 1.6, color `#7A5A62`, max-width 560px, margin-top 22px: «Vi designer, utvikler og drifter moderne nettsider for bedrifter i alle størrelser – med fokus på synlighet i Google og i AI-svar.»
- Decorative unicode doodles: `✳` (26px, `#F73A3C`, opacity 0.45, top-left) and `✦` (20px, opacity 0.35, top-right), absolutely positioned.

### 2. Services grid ("Tjenester")
- 2×2 CSS grid, `gap: 22px`, `align-items: stretch`. Section padding `48px 24px 24px`.
- Each cell is a **service card** (class `rb-card--service` in `components.css`):
  - bg `#FAEDE0` (`--card`), radius 26px, padding `36px 34px 40px`, border 1.5px **transparent** at rest.
  - Hover: `translateY(-6px)`, border-color `#F73A3C`, shadow `0 26px 46px -26px rgba(69,16,30,0.4)`, 0.28s `cubic-bezier(.2,.7,.2,1)`.
  - Contents, top to bottom:
    1. Kicker — Space Mono 12px, 700, uppercase, letter-spacing 0.12em, color `#F73A3C`.
    2. Title — Source Serif 4, 29px, 600, line-height 1.14, margin-top 14px.
    3. Accent bar — 46×4px, radius 2px, `#F73A3C`, margin `18px 0 20px`.
    4. Body — Hanken Grotesk 16.5px, line-height 1.6, color `#7A5A62`.
    5. Bullet list — margin-top 18px, column gap 11px; each row: marker + text (14.5px), flex gap 10px, align center. **Marker style is a product decision with 4 approved variants** (see "Bullet marker variants" below); default is the Lucide `check` icon, 17px, `#F73A3C`.
    6. Spacer (flex: 1, min 28px).
    7. CTA — arrow-link «Snakk med oss» (class `rb-link-arrow`): Hanken Grotesk 16px 600, color `#F73A3C`, trailing Lucide `arrow-right` 16px; hover animates flex gap 8px → 14px (0.2s). Links to `mailto:hallo@reboot.no` in the prototype — wire to the contact page/form in production.

Card copy (exact):

| Kicker | Title | Body | Bullets |
|---|---|---|---|
| Ny nettside & redesign | Nettsider som skaper resultater | Fra bunnen av eller redesign av eksisterende side – vi leverer moderne, raske og skreddersydde nettsider på WordPress, Shopify eller skreddersydd kode. | Skreddersydd design for din bedrift · SEO-optimalisert fra dag én · Rask, sikker og mobilvennlig |
| Synlighet & søk | SEO og AI-svar | Vi sørger for at bedriften din rangerer høyt i tradisjonelt Google-søk, og blir anbefalt når folk spør ChatGPT, Gemini og Claude. | Teknisk SEO og innholdsoptimalisering · Synlighet i AI-svar og answer engines · Lokal synlighet og Google Bedriftsprofil |
| AI-hjelp | AI-rådgivning | Enten du trenger konkret hjelp eller en trygg partner innen AI, sørger vi for at bedriften din får mest mulig ut av teknologien. | Kartlegging av muligheter i din bedrift · Konkrete løsninger og verktøy i praksis · Kurs og opplæring for teamet ditt |
| Skreddersydd utvikling | Digitale tjenester | Trenger du mer enn en standard nettside? Vi utvikler skreddersydde løsninger som gjør hverdagen enklere for deg og kundene dine. | Nettbutikk med Vipps og BankID · Booking- og medlemsløsninger · Integrasjoner mot systemene dere allerede bruker |

#### Bullet marker variants (`punktstil`)
Implemented as a switchable prop in the prototype; ship whichever the client saves as default:
- `hake` (default) — Lucide `check`, 17px, `#F73A3C`
- `linje` — single pill bar 18×5px, radius 3px, `#F73A3C` (echoes the card accent bar)
- `progresjonslinje` — two-segment pill from the logo's progress line: 12×5px `#F73A3C` + 5×5px `#4A1220`, gap 3px, radius 3px (source asset: `Progress.svg`, two rounded-pill paths)
- `doodle` — unicode `✳`, 15px, `#F73A3C`

### 3. Fastpris band ("Hva koster en nettside?")
- Two-column grid `1fr 1fr`, gap 72px, vertically centered. Section padding `72px 24px 80px`.
- Left: image, aspect 4:3, radius 28px. **Placeholder in the prototype** (an `<image-slot>` element, id `img-nettside`) — the client supplies the real photo; warm, naturally-lit office/project photography per brand.
- Right column (flex column, gap 18px, left-aligned):
  - Kicker «Fastpris» (same kicker style as cards)
  - H2 «Hva koster en nettside?» — Source Serif 4, 48px, 600, line-height 1.1
  - Price «29 900,-» — Source Serif 4, 46px, 600, color `#F73A3C`
  - Body (16.5px, `#7A5A62`): «Vi mener prising skal være enkel og forutsigbar. Våre skreddersydde og SEO-optimaliserte nettsider har en fastpris – og de fleste som tar kontakt med oss havner nettopp der. Har du enklere eller mer omfattende behov, tilpasser vi løsningen og prisen deretter.»
  - Primary button «Få et tilbud» — pill, bg `#F73A3C`, white text, Hanken Grotesk 16px 600, padding 13px 26px; hover: bg `#DD2A2C` + `translateY(-2px)`; active `translateY(1px)`.

### 4. Vedlikehold og support (pricing)
- Full-bleed band, bg `#FDF6EF` (`--cream-50`), padding `90px 24px`.
- Centered intro: kicker «Hosting, drift & vedlikehold», H2 «Vedlikehold og support» (48px), subhead (max-width 550px): «Vi tar oss av alt det tekniske på ditt nettsted og gir deg rask hjelp når du trenger det.»
- **Two approved presentations** (prototype prop `prisvisning`; ship the one the client saves as default — currently `kort`):

**A. `kort` — three package cards** (grid `repeat(3, 1fr)`, gap 22px, max-width 1060px):
- Card: bg `#FAEDE0`, radius 26px, padding `34px 32px 32px`, border 1.5px `#E7D8C8`.
- Highlighted package (client-selectable; currently **Proff**): border `#F73A3C`, shadow `0 30px 60px -30px rgba(74,18,32,0.5)`, floating pill «Mest valgt» (Space Mono 11px 700 uppercase, bg `#F73A3C`, white, centered on top edge).
- Card contents: package kicker (red, mono) → price row (`kr` 14.5px muted / price Source Serif 4 46px 600 / `/mnd` muted) → feature list (rows: icon 17px + label 14.5px, gap 12px; included = `check` `#F73A3C`; excluded = `minus` `#E7D8C8` at 50% row opacity) → CTA button full-width bottom («Kom i gang»; primary variant on highlighted card, outline on others).
- Feature explanations appear as tooltips on hover (native `title` in the prototype; consider the site's tooltip pattern in production).

**B. `tabell` — comparison table** (max-width 1000px, columns `1.5fr 1fr 1fr 1fr`):
- Header row: empty label cell + per package: mono kicker name + `kr {price} /mnd` (price Source Serif 4 36px).
- Feature rows: 17px vertical padding, 1px top border `#E7D8C8`; label (16.5px) + Lucide `info` icon 15px `#7A5A62` @55% (tooltip on hover); centered `check` (`#4A1220`, 18px) per included column, `minus` `#E7D8C8` when excluded.

**Package data (source of truth: old site TablePress table):**

| Feature | Standard kr 990/mnd | Proff kr 1 490/mnd | Partner kr 1 990/mnd |
|---|---|---|---|
| Månedlige oppdateringer | ✓ | ✓ | ✓ |
| Daglig backup | ✓ | ✓ | ✓ |
| Hosting | ✓ | ✓ | ✓ |
| 24/7 oppetid-overvåking | ✓ | ✓ | ✓ |
| Prioritert responstid | ✓ | ✓ | ✓ |
| Innholdsoppdatering inkludert | — | ✓ | ✓ |
| Blogg / nyheter | — | ✓ | ✓ |
| Søkemotoroptimalisering (SEO) | — | — | ✓ |

Tooltip copy (exact, per feature):
- **Månedlige oppdateringer:** Vi holder nettsiden din oppdatert med de nyeste versjonene av systemet og programtillegg. Det gjør nettsiden tryggere, raskere og mer stabil.
- **Daglig backup:** Vi tar automatisk kopi av hele nettsiden hver natt. Hvis noe går galt, kan vi raskt gjenopprette den.
- **Hosting:** Nettsiden din lagres og kjøres på raske og sikre servere. Du trenger ikke tenke på teknisk drift eller hvor den «bor».
- **24/7 oppetid-overvåking:** Vi overvåker nettsiden døgnet rundt. Dersom feil oppstår får vi beskjed med en gang og kan gripe inn raskt.
- **Prioritert responstid:** Du havner først i køen når du trenger hjelp. Vi svarer raskt og setter i gang med å hjelpe deg med en gang.
- **Innholdsoppdatering inkludert:** Send oss justeringsønsker, tekster eller bilder du vil ha lagt inn, så ordner vi det for deg uten ekstra kostnad. 2 t/mnd inkludert.
- **Blogg / nyheter:** Mulighet til å publisere artikler, oppdateringer og fagstoff som holder nettsiden levende og relevant over tid.
- **Søkemotoroptimalisering (SEO):** Vi optimaliserer løpende sidehastighet, mobiltilpasning og sikkerhet, og sikrer korrekt indeksering slik at Google feilfritt kan lese og rangere siden deres.

### 5. Contact CTA
- Container-width ink panel: bg `#4A1220`, radius 26px, padding `80px 48px`, centered, text `#FCF2EC`. Section padding `80px 24px 100px`.
- H2 «Klar for å komme i gang?» (48px serif) → body «Send oss en melding, så svarer vi i løpet av dagen. Uforpliktende, selvfølgelig.» (16.5px @80% opacity, max-width 460px) → primary button «Kontakt oss».
- Doodles `✳` / `✦` in corners, cream at 15–20% opacity.

## Interactions & Behavior
- Service cards: lift/border/shadow hover (see above). Whole card is not a link; only the «Snakk med oss» arrow-link is interactive.
- Arrow-links: flex-gap grows 8px → 14px on hover, 0.2s ease.
- Buttons: hover darken + `translateY(-2px)` (0.2s); active `translateY(1px)`.
- Pricing feature tooltips on hover of the feature label.
- All CTAs point at `mailto:hallo@reboot.no` in the prototype — route to the site's contact section/form in production.
- No looping/ambient animation anywhere (brand rule).
- Responsive behavior is **not specified** in the prototype (desktop 1140px design). Follow the site's existing breakpoint patterns: grids collapse to one column, hero H1 scales down, pricing table becomes cards or scrolls horizontally (the old site shrank the table; the card view is the better mobile answer). Tooltips: old site hid them on <690px — use tap-friendly disclosure instead if kept.

## State Management
Static marketing page — no client state beyond:
- Which pricing presentation is rendered (build-time/CMS choice, not runtime UI)
- Tooltip open state
- Contact CTA navigation

## Design Tokens
Colors: `--cream-50 #FDF6EF`, `--cream-200 #F4ECE3` (page bg), `--cream-300 #EFDFCE`, `--cream-400 #E7D8C8` (borders), `--card #FAEDE0`, `--pill #F1E0D3`, `--ink-900 #4A1220` (text + dark panel), `--ink-700 #7A5A62` (secondary text), `--red-500 #F73A3C` (brand/CTA), `--red-600 #DD2A2C` (hover).
Type: Source Serif 4 (headings: 64/48/46/36/29px, 600, lh 1.05–1.14, tracking −0.01 to −0.02em); Hanken Grotesk (body: 19/16.5/16/14.5px, lh 1.55–1.6); Space Mono (labels 11–13px, 700, uppercase, tracking 0.12–0.18em).
Spacing: section padding 48–100px vertical; grid gaps 22px (cards) / 72px (split sections); card padding 34–36px.
Radii: cards 26px, panels 22px, photos 28px, pills/buttons 999px.
Shadows: hover `0 26px 46px -26px rgba(69,16,30,0.4)`; highlighted pricing card `0 30px 60px -30px rgba(74,18,32,0.5)`.
Motion: 0.2s ease (buttons/links), 0.28s `cubic-bezier(.2,.7,.2,1)` (cards).
Full definitions in `tokens/` and `components.css` in this bundle.

## Assets
- Icons: Lucide (`check`, `minus`, `info`, `arrow-right`) — `lucide-react` is already a dependency in the repo.
- Doodle accents: unicode glyphs `✳ ✦` (swap for brand doodle SVGs if available).
- `Progress.svg` (included) — the two-segment logo line, source for the `progresjonslinje` bullet variant.
- Photography: one image needed (fastpris band, 4:3, radius 28px) — supplied by client; prototype uses a drag-and-drop placeholder.

## Files
- `Våre tjenester.dc.html` — full page design reference
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css`
- `components.css` — component classes used by the design
- `Progress.svg` — logo line asset
