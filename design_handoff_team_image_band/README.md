# Handoff: Team Image Band (under the hero)

## Overview
A full-width team photo band placed directly **underneath the hero section** on the
reboot homepage. Rather than a plain photo, it uses a rounded image with an
overlapping **quote + rating panel** (a customer testimonial, the 5,0 Google score,
and a link to references) plus two hand-drawn **doodle accents** spilling over the
top corners — so it reads as designed social proof, not a stock image drop.

## About the Design Files
The files in this bundle are a **design reference created in HTML/CSS** — a
prototype of the intended look and behavior, not production code to paste verbatim.
Recreate it in your existing codebase using its own components and conventions.
`team-image-band-reference.html` is plain semantic HTML + a `<style>` block with CSS
custom properties so it maps cleanly onto React/JSX, Vue, Svelte, etc.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and the hover interaction are
final — match them exactly.

## Layout
- Outer wrapper `.team-band`: `position: relative`, `max-width: 1360px`, centered.
  **Not clipped** — so the doodle marks can spill past the photo's rounded corners.
- Photo `.photo`: `width: 100%`, `height: 520px`, `border-radius: 28px`,
  `overflow: hidden`; the `<img>` inside is `object-fit: cover`.
- **Quote + rating panel** is absolutely positioned over the **bottom-left** of the
  photo (`left: 44px; bottom: 44px`).
- **Doodles** are absolutely positioned at the **top-left** (asterisk) and
  **top-right** (plus) of the wrapper.

### Responsive notes
The reference is desktop-width. For narrower viewports: reduce photo height (e.g.
`clamp(320px, 42vw, 520px)`), and on mobile consider moving the panel to sit
**below** the photo (static, full-width) instead of overlapping, so it never covers
faces. Shrink/hide the doodles on small screens.

## Components

### Photo
- The team meeting photo (`team.jpg`, included in this bundle, 1966×1002).
- `border-radius: 28px`, `object-fit: cover`, `height: 520px`.

### Quote + rating panel
- Background `#FCF2EC` (cream), `border-radius: 22px`, `padding: 34px`
- Shadow `0 30px 60px -30px rgba(74,18,32,.5)`, `max-width: 450px`
- Three stacked parts:

  **1. Top row** (`.top`) — flex, `justify-content: space-between`,
  `margin-bottom: 18px`:
  - **Stars** `★★★★★` · color `#F73A3C`, `font-size: 18px`, `letter-spacing: 3px`.
    (Use an icon set's star glyph if you prefer.)
  - **Score** `5,0 på Google` · Hanken Grotesk `13px`/700, color `#4A1220`.

  **2. Quote** (`blockquote`) — the testimonial:
  - Text: `«Veldig fornøyde med vår nye nettside – anbefales på det varmeste.»`
  - Source Serif 4, `21px`, weight `500`, `line-height: 1.35`, color `#4A1220`,
    `margin: 0 0 18px`.
  - **Placeholder copy** — pulled from the site's existing testimonials. Swap in the
    real review you want to feature.

  **3. Footer row** (`.foot`) — flex, `justify-content: space-between`,
  `padding-top: 18px`, `border-top: 1px solid #EAD9C9`:
  - **Attribution** (`.who`): name `Kristine Jørstad Bock` · `14.5px`/700, color
    `#4A1220`; org `OBOS` · `13px`, color `#7A5A62`, `margin-top: 2px`.
  - **Link** `Se referanser →` · color `#F73A3C`, `14.5px`/600, `white-space: nowrap`,
    arrow in a trailing `<span>`. **Points to the references / case-studies page**
    (e.g. `/referanser`, `/prosjekter`, or `/kundecaser` — wire to your actual
    route). Hover: gap grows `8px → 14px` (arrow slides right), `transition: gap .2s`.

### Doodle accents (decorative)
- **Asterisk** `✳` — top-left, `left: -8px; top: -8px`, `font-size: 54px`, color
  `#4A1220`.
- **Plus** `+` — top-right, `right: 34px; top: 10px`, `font-size: 32px`, weight 700,
  color `#F73A3C`.
- Typographic stand-ins matching the hero's doodles; if you have the brand's real
  doodle SVGs, use those instead.

## Interactions & Behavior
- **Link hover:** arrow slides right (gap animation). No other stateful behavior.
- Wire `Se referanser →` to the references/case-studies route.
- The quote + attribution are data — ideally driven from your reviews/CMS so the
  featured testimonial can change. Honor `prefers-reduced-motion` if your site does.

## Design Tokens
| Token | Value | Use |
|---|---|---|
| Cream | `#FCF2EC` | panel bg |
| Ink | `#4A1220` | quote, score, name, asterisk |
| Body | `#7A5A62` | org line |
| Red | `#F73A3C` | stars, link, plus doodle |
| Hairline | `#EAD9C9` | footer divider |
| Radius (photo) | `28px` | |
| Radius (panel) | `22px` | |
| Photo height | `520px` | |
| Max width | `1360px` | |
| Panel shadow | `0 30px 60px -30px rgba(74,18,32,.5)` | |

## Typography
- **Quote:** Source Serif 4 (Google Fonts), weight 500.
- **Everything else:** Hanken Grotesk (Google Fonts), weights 400/700.

## Assets
- `team.jpg` — the team photo (included). Replace with a higher-res export if you
  have one; keep the ~1.96:1 aspect so the `object-fit: cover` crop matches.
- Star + doodle marks are Unicode glyphs; swap for brand SVGs/icon set if desired.

## Files
- `team-image-band-reference.html` — self-contained, openable in a browser.
- `team.jpg` — the photo the reference loads.
