# Handoff: "Om oss" (About Us) page — reboot.no

## Overview
A public marketing sub-page for the Norwegian digital agency **Reboot** (reboot.no).
It introduces the agency and its four team members. Structure, top to bottom:

1. **Site header** (shared nav — already exists in the codebase)
2. **Hero** — centered eyebrow + headline + intro paragraph
3. **"Hvem er vi i Reboot?" band** — dark burgundy panel with copy, a compact
   stat block, and a full-bleed team photo
4. **Team grid** — four people (photo, role, name, email, phone)
5. **Contact CTA** — cream panel with a primary button + phone link
6. **Site footer** (shared — already exists in the codebase)

All copy is Norwegian (Bokmål) and should stay Norwegian.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype
showing the intended look and behavior, **not production code to copy directly**.
The task is to **recreate this design in reboot.no's existing codebase**
(a Next.js / React app per the design system source repo `RebootProjectsHub/Reboot-3.0`)
using its established components, tokens, and patterns. The `SiteHeader` and
`SiteFooter` already exist in that codebase — reuse them; do not rebuild them from
the prototype.

The prototype is authored as a single self-contained "Design Component"
(`Om oss.dc.html`) that runs in a lightweight runtime (`support.js`). That runtime
is a prototyping tool, **not** part of the production stack — ignore it when
implementing; read the markup and the `renderVals()` logic for structure and values.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, and interactions are
all specified below and pulled from the Reboot design system. Recreate the UI
pixel-accurately using the codebase's existing component library and design tokens.

---

## Design Tokens
These match the Reboot design system (`tokens/*.css`, copied into `_ds_reference/`).
Prefer the codebase's existing CSS custom properties — the values below are for
verification.

### Color
| Token | Hex | Use here |
|---|---|---|
| `--cream-200` (surface-page) | `#F4ECE3` | page background |
| `--cream-100` (text-on-ink) | `#FCF2EC` | text on dark panel; contact panel not this |
| `--cream-100` | `#FCF2EC` | contact CTA panel bg |
| `--cream-300` | `#EFDFCE` | photo placeholder bg |
| `--card` | `#FAEDE0` | team card fill |
| `--pill` (surface-pill) | `#F1E0D3` | hero "OM OSS" badge fill |
| `--ink-900` (surface-ink / text-primary) | `#4A1220` | dark band bg + primary text |
| `--ink-700` (text-secondary) | `#7A5A62` | body/secondary text |
| `--border-default` (cream-400) | `#E7D8C8` | card + panel borders (1.5px) |
| `--red-500` (brand) | `#F73A3C` | CTA, links, kickers, hover accents |
| `--red-600` (brand-hover) | `#DD2A2C` | hover |
| `--red-live` | `#FF5747` | star glyph accent in stats |

Backgrounds are never pure white — warm cream base. The one dark surface is the
burgundy `#4A1220` band.

### Typography
- Display / headings: **Source Serif 4**, weight 500, letter-spacing −0.02em
  (−0.01em on card titles), line-height 1.0–1.2.
- Body / UI: **Hanken Grotesk**, line-height 1.55–1.6.
- Kickers / eyebrows / footer: **Space Mono**, weight 700, uppercase,
  letter-spacing ~0.1–0.18em.

### Spacing / radius
- Section vertical padding: 64–96px desktop.
- Content max-width: 820px (hero), 1180px (all other sections), centered.
- Grid gap: 22px (team grid).
- Radius: `--radius-lg` panels (~26–30px), `--radius-card` team cards, `--radius-md`
  stat cards, `--radius-pill` (999px) badges & buttons, 50% for round team photos.
- Borders 1.5px, low-contrast; used more as a hover trigger than a resting affordance.

---

## Screens / Views

### 1. Hero
- **Purpose:** Introduce the page.
- **Layout:** Centered column, `max-width: 820px`, padding `96px 24px 72px`,
  `text-align: center`. Two low-opacity decorative unicode glyph accents
  (`✳` brand-red 0.4 opacity top-left; `✦` ink 0.35 opacity bottom-right),
  `position: absolute`, `aria-hidden`.
- **Components:**
  - Eyebrow badge **pill**: text "Om oss". Class `rb-badge-pill` — inline-flex,
    padding `8px 16px`, `border-radius: 999px`, bg `--pill` `#F1E0D3`,
    Space Mono 12px/700 uppercase, letter-spacing 0.18em, color `--ink-900`.
  - `h1`: "Bli kjent med Reboot". Source Serif 4, weight 500,
    `font-size: clamp(40px, 5vw, 64px)`, line-height 1.04, tracking −0.02em,
    margin `18px 0 24px`.
  - Intro `p`: 19px, line-height 1.6, color `--ink-700`, `max-width: 600px`,
    centered. Copy: *"Vi er et verdidrevet byrå med lidenskap for teknologi,
    mennesker og veien mot de gode digitale løsningene. Et lite, faglig sterkt
    team som designer, utvikler og drifter nettsider som faktisk skaper
    resultater."*

### 2. "Hvem er vi i Reboot?" band
- **Purpose:** Agency positioning + at-a-glance stats + team photo.
- **Layout:** `max-width: 1180px`, padding `24px 24px 64px`. Inner panel:
  `background: --ink-900`, `color: --text-on-ink`, `border-radius: --radius-lg`,
  `overflow: hidden`, CSS grid `grid-template-columns: 1.1fr 1fr`.
  - Left cell: padding `56px 48px`.
  - Right cell: `position: relative; min-height: 360px`, full-bleed photo
    (`object-fit: cover`), file `assets/team-whiteboard.jpg`.
- **Left cell components:**
  - Kicker: `rb-badge-kicker` colored `--red-live`, text "Hvem er vi i Reboot?".
  - `h2`: "Små detaljer, stor forskjell." Source Serif 4 500,
    `clamp(30px, 3.6vw, 44px)`, line-height 1.1, tracking −0.02em.
  - Two body paragraphs, 17px/1.65, color `color-mix(in srgb, var(--text-on-ink) 82%, transparent)`.
    - P1: *"Her er gjengen bak alle de små detaljene som gjør den store
      forskjellen — fra webdesign og utvikling til rådgivning, SEO og AI-synlighet."*
    - P2: *"Vi holder til i Nydalen i Oslo, og tar deg med gjennom hele reisen —
      én partner for alt innen nettsider."*
  - **Stat block** (see below).
- **Stat block:** three stats. Each stat = a number over a mono uppercase label.
  - Number: Source Serif 4 500, **24px**, line-height 1, flex baseline row.
  - Label: Space Mono 11px, uppercase, letter-spacing 0.08em, color
    `color-mix(... text-on-ink 60% ...)`, margin-top 6px.
  - Stats: `5/5` + red star `★` (`--red-live`, 14px) / label "På Google";
    `80+` / "Leverte prosjekter"; `1:1` / "Kundeoppfølging".
  - **Three selectable layouts** (a prototype tweak — implement the default,
    `cards`, and optionally expose the others):
    - `cards` **(default)**: flex-wrap row, gap 10px; each stat in a box padded
      `12px 16px`, 1.5px border `color-mix(... text-on-ink 22% ...)`,
      `border-radius: --radius-md`, `min-width: 96px`. In the narrow left column
      these wrap to a vertical stack of small cards.
    - `stack`: vertical list, each row separated by a 1.5px top hairline.
    - `plain`: horizontal flex, gap 48px, no borders.

### 3. Team grid
- **Purpose:** Present the four team members.
- **Layout:** `max-width: 1180px`, padding `40px 24px 80px`. Intro block
  (kicker "Møt Reboot-teamet" + `h2` "Menneskene bak nettsidene", `clamp(30px,3.8vw,48px)`),
  margin-bottom 44px. Grid: `repeat(auto-fit, minmax(230px, 1fr))`, gap 22px
  (a 2-column variant with `minmax(340px,1fr)` exists as a tweak).
- **Card:** `background: --card` `#FAEDE0`, 1.5px `--border-default` border,
  `border-radius: --radius-card`, `overflow: hidden`, flex column.
  - **Hover:** border-color → `--brand`, `translateY(-6px)`,
    `box-shadow: --shadow-card-hover`, transition
    `border-color .2s, transform .28s cubic-bezier(.2,.7,.2,1), box-shadow .28s`.
  - **Photo (default `circle`):** 150px round, `margin: 26px auto 0`,
    `border-radius: 50%`, `overflow: hidden`, `object-fit: cover`,
    `object-position: center top`, bg `--cream-300`. (A `rounded`/square-top
    variant exists as a tweak: full-width `aspect-ratio: 1/1`.)
  - **Text block:** padding `22px 22px 26px`, flex column gap 4px.
    - Role: Space Mono 12px/700 uppercase, letter-spacing 0.1em, color `--brand`.
    - Name `h3`: Source Serif 4 500, **19px**, line-height 1.2, tracking −0.01em,
      margin `2px 0 12px`. (19px chosen so "Evgeniia Zhavoronkova" fits one line.)
    - Email link: 15px, color `--text-primary`, weight 500; hover → `--brand`.
    - Phone link: 15px, color `--text-secondary`; hover → `--brand`.
      (Phone visibility is a tweak, default on.)
- **Team data:**
  | Name | Role | Email | Phone | Photo file |
  |---|---|---|---|---|
  | Henrik Moberg | Utvikler / daglig leder | henrik@reboot.no | 97 67 58 48 | `assets/henrik-dev3.jpg` |
  | Maria Reinlie | Rådgiver / koordinator | maria@reboot.no | 99 59 35 06 | `assets/Maria-2.png` |
  | Evgeniia Zhavoronkova | Utvikler | evgeniia@reboot.no | 48 63 09 05 | `assets/Evgeniia-dev1.png` |
  | Silje Walmann | Designer | silje@reboot.no | 46 95 06 27 | `assets/silje-design4.jpg` |
  - `mailto:` and `tel:` (with +47 country code) links on email/phone.

### 4. Contact CTA
- **Purpose:** Prompt the visitor to get in touch.
- **Layout:** `max-width: 1180px`, padding `0 24px 90px`. Inner panel:
  `background: --cream-100` `#FCF2EC`, 1.5px `--border-default` border,
  `border-radius: --radius-lg`, padding `64px 48px`, `text-align: center`.
  Two decorative glyph accents (`✺` brand-red 0.4, `〜` ink 0.35), absolute.
- **Components:**
  - Kicker `rb-badge-kicker`: "Ta kontakt".
  - `h2`: "Vi hører gjerne fra deg", `clamp(30px,3.8vw,46px)`, max-width 620px centered.
  - `p`: 18px, `--text-secondary`, max-width 520px centered. Copy: *"Enten du har
    et konkret prosjekt eller bare en idé — send oss en melding, så svarer vi i
    løpet av dagen."*
  - Actions row (flex, gap 14px, centered, wrap):
    - Primary button `rb-btn rb-btn--primary rb-btn--lg`, "Send oss en melding",
      `href="mailto:hallo@reboot.no"`.
    - Arrow link `rb-link-arrow rb-link-arrow--brand`, "97 67 58 48",
      `href="tel:+4797675848"`, with a trailing **diagonal arrow** (Lucide
      `arrow-up-right`, 16px, currentColor). The link uses the `rb-link-arrow`
      hover: `gap` animates 8px → 14px over `--duration-fast`.

---

## Interactions & Behavior
- **Card hover:** lift + brand-red border + soft shadow (values above). Borders
  are present at rest (transparent-ish `--border-default`) so hover doesn't shift layout.
- **Button hover:** darken + `translateY(-2px)`, ~0.2s; active `translateY(1px)`.
- **Arrow link hover:** flex `gap` grows 8→14px (arrow slides right), ~0.2s.
- **Text link hover:** color → `--brand`.
- No looping/ambient animation. Easing is the signature settle
  `cubic-bezier(.2,.7,.2,1)`, never bouncy.
- **Responsive:** the two 2-column grids (dark band, team grid) should collapse to
  a single column on narrow viewports; hero and CTA are already fluid via `clamp()`
  and `max-width`.

## State Management
Static content page — no client state required beyond the shared header's mobile-menu
toggle (already in the codebase). The three stat layouts / photo shape / phone
visibility / column count are **prototype-only tweaks**; pick the defaults noted
above (stats `cards`, photos `circle`, phone shown, 4 columns) for production, or
wire them to CMS fields if desired.

## Assets
Copied into `assets/` in this bundle:
- Team photos: `henrik-dev3.jpg`, `Maria-2.png`, `Evgeniia-dev1.png`, `silje-design4.jpg`
  (client-provided headshots).
- `team-whiteboard.jpg` — team photo for the dark band (from the Reboot photo library).
- `reboot-wordmark-ink.svg`, `reboot-wordmark-cream.svg` — logos (already in codebase;
  the cream one is used on dark surfaces).
- Icons: Lucide (`arrow-up-right` used here) — use the codebase's existing
  `lucide-react`.
- Decorative accents (`✳ ✦ ✺ 〜 ★`) are unicode glyphs, not assets.

## Files
- `Om oss.dc.html` — the design prototype (markup + `renderVals()` logic near the bottom).
- `support.js` — prototype runtime only; **not** for production.
- `_ds_reference/` — copied Reboot design-system token & component CSS for exact values.
- `assets/` — images & logos listed above.
