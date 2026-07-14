# Handoff: Hero Section (1A — Centered / Editorial)

## Overview
A redesigned homepage hero for the reboot marketing site, replacing the
conventional "text on the left / illustration on the right" split with a
**centered, type-led editorial** layout: the brand illustration sits up top as a
small mascot, the headline owns the center stage, and a client logo strip anchors
the bottom.

## About the Design Files
The file in this bundle (`hero-section-reference.html`) is a **design reference
created in HTML/CSS** — a prototype showing the intended look and behavior, not
production code to paste in verbatim. Recreate it in your existing codebase using
its own components, layout primitives, and conventions. It is written as plain
semantic HTML + a `<style>` block with CSS custom properties precisely so it maps
cleanly onto whatever framework you're using (React/JSX, Vue, Svelte, etc.).

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and hover interactions are
final — match them exactly.

## Layout

A single full-width hero band, content centered both axes.

- Outer band: `max-width: 1360px`, centered, `min-height: 700px`,
  `padding: 64px 90px 90px`, `overflow: hidden`, `position: relative`.
- Content column: `display: flex; flex-direction: column; align-items: center;
  justify-content: center; text-align: center`.
- Vertical stack order: **mascot → eyebrow pill → headline → subtext → action row**.
  The **client logo strip is absolutely positioned** at the bottom of the band
  (`bottom: 34px`), so it doesn't affect the vertical centering of the main stack.
- Four **ambient doodle marks** are absolutely positioned in the corners as
  decoration.

### Responsive notes
The reference is desktop-width. For narrower viewports: reduce the headline size
(`clamp()` is a good fit, e.g. `clamp(40px, 7vw, 78px)`), reduce band padding,
allow the action row to wrap, and let the logo strip wrap (it already does) or
switch it to `position: static` below the actions on mobile.

## Components

### Mascot (brand illustration)
- `172 × 172`, `border-radius: 22px`, `margin-bottom: 26px`.
- **This is where the reboot net-and-ideas illustration goes.** In the reference
  it's a dashed placeholder box — swap it for the real `<img>` or inline `<svg>`.
  Keep it roughly square at ~172px rendered.

### Eyebrow pill
- Text: `Digitalt byrå · Nydalen, Oslo`
- `display: inline-flex`, `padding: 8px 16px`, `border-radius: 999px`
- Background `#F1E0D3`, color `#4A1220`
- Font: Hanken Grotesk, `12.5px`, weight `700`, `letter-spacing: .12em`,
  `text-transform: uppercase`
- `margin-bottom: 26px`

### Headline (h1)
- Text: `Vi elsker å lage nettsider!`
- Font: Source Serif 4, `78px`, weight `600`
- `line-height: 1.0`, `letter-spacing: -.02em`, `text-wrap: balance`
- Color `#4A1220`, `max-width: 900px`, `margin: 0 0 24px`

### Subtext
- Text: `Vi er et verdidrevet byrå med lidenskap for teknologi, mennesker og veien mot de gode digitale løsningene for våre kunder.`
- Font: Hanken Grotesk, `19px`, `line-height: 1.55`, `text-wrap: pretty`
- Color `#7A5A62`, `max-width: 560px`, `margin: 0 0 34px`

### Action row (flex, gap 22px)
**Primary button** — `Slik kan vi hjelpe deg`
- `padding: 16px 30px`, `border-radius: 999px`
- Background `#F73A3C`, color `#fff`, font `16px`/weight `600`
- Hover: background `#DD2A2C`, `transform: translateY(-2px)`
- Transition: `background .2s, transform .2s`

**Secondary text link** — `Se hva vi jobber med →`
- Color `#4A1220`, font `16px`/weight `600`, arrow in a trailing `<span>`
- Hover: gap grows from `8px` → `14px` (arrow slides right)
- Transition: `gap .2s`

### Client logo strip
- Absolutely positioned bottom-center, `gap: 30px`, wraps.
- Names: `OBOS · Höegh Evi · Ditt Apotek · Romerikes Råeste · Studio Pietra · Cosmica`
- Font: Hanken Grotesk, `14.5px`, weight `600`, color `#4A1220`, `opacity: .5`.
- In the reference these are text; **replace with the real client logo SVGs** if
  you have them (keep them in a single centered flex row).

### Doodle accents (decorative)
- Four absolutely-positioned marks echoing the hand-drawn illustration:
  a burgundy asterisk (`✳`, ~44px, opacity .45), a red plus (`+`, ~30px), a faint
  burgundy sparkle (`✦`, ~38px, opacity .30), and a squiggle (`〜`, ~52px, opacity .35).
- These are typographic stand-ins. If you have the brand's actual doodle SVGs
  (stars, squiggles, fish, lightbulb from the illustration), use those instead —
  scattered at low opacity in the corners.

## Interactions & Behavior
- **Button hover:** color darken + 2px lift.
- **Link hover:** arrow slides right (gap animation).
- No other stateful behavior. Wire the primary button and link to the relevant
  routes/anchors ("Slik kan vi hjelpe deg" → services; "Se hva vi jobber med" →
  projects/cases). Honor `prefers-reduced-motion` if your site does (drop the lift).

## Design Tokens
| Token | Value | Use |
|---|---|---|
| Cream (band bg) | `#FCF2EC` | hero background |
| Ink | `#4A1220` | headline, eyebrow text, link, logos |
| Body | `#7A5A62` | subtext |
| Red | `#F73A3C` | primary button, red plus doodle |
| Red (hover) | `#DD2A2C` | button hover |
| Pill bg | `#F1E0D3` | eyebrow pill |
| Radius (mascot) | `22px` | |
| Radius (pill/button) | `999px` | |
| Band min-height | `700px` | |
| Band max-width | `1360px` | |

## Typography
- **Headline:** Source Serif 4 (Google Fonts), weight 600.
- **Everything else:** Hanken Grotesk (Google Fonts), weights 400/700.
- Load both from Google Fonts, or swap for your codebase's equivalents if already
  self-hosted.

## Assets
- **reboot illustration** (net-and-ideas figure) — goes in the mascot slot.
- **Client logos** (OBOS, Höegh Evi, Ditt Apotek, Romerikes Råeste, Studio Pietra,
  Cosmica) — optional, for the bottom strip.
- **Doodle marks** — currently Unicode glyphs; replace with brand SVG doodles if
  available. No other images required.

## Files
- `hero-section-reference.html` — self-contained, openable in a browser. Source of
  truth for spacing, colors, and hover behavior.
