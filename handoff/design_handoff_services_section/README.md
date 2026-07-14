# Handoff: Services Section ("Hva jobber vi med?")

## Overview
Redesign of the three service cards on the reboot marketing site — the row under
the "Hva jobber vi med?" heading (Ny nettside & redesign / SEO / AI-rådgivning).
This handoff covers **only the three cards**, not the heading/intro above them.

## About the Design Files
The files in this bundle are a **design reference created in HTML/CSS** — a
prototype showing the intended look and behavior, not production code to paste in
verbatim. Recreate this design in your existing codebase using its own patterns,
components, and conventions. `services-section-reference.html` is written as plain
semantic HTML + a `<style>` block with CSS custom properties precisely so it maps
cleanly onto whatever framework you're using (React/JSX, Vue, Svelte, etc.).

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and hover interactions are
final. Match them exactly.

## The Component: Service Cards

### Layout
- A responsive **grid of 3 equal columns**: `grid-template-columns: repeat(3, 1fr)`,
  `gap: 22px`, `align-items: stretch` (all cards equal height regardless of copy length).
- Container `max-width: 1180px`, centered. Section padding `72px 64px` (adjust to
  match your page — the important values are the grid gap and the card internals).
- Suggested responsive behavior: collapse to 1 column below ~720px (stack), 2
  columns is optional at tablet. The reference doesn't implement breakpoints; use
  your site's existing ones.

### Card structure (top → bottom)
1. **Kicker label** — category, e.g. "Ny nettside & redesign"
2. **Heading** (`h3`)
3. **Accent bar** — short red underline
4. **Body paragraph**
5. **Spacer** (`flex: 1`) — pushes the icon to the bottom
6. **Arrow icon** — circle, bottom-right aligned

The spacer + `flex-direction: column` is what pins the arrow to the bottom-right
and keeps it aligned across cards of differing text length.

### Card styling
- Background `#FAEDE0`
- Border `1.5px solid transparent` (transparent by default so the hover border
  doesn't shift layout)
- Border radius `26px`
- Padding `36px 34px 40px`
- Transition: `transform .28s cubic-bezier(.2,.7,.2,1), box-shadow .28s, border-color .28s`

### Hover state (on the whole card)
- `transform: translateY(-6px)` — subtle lift
- `box-shadow: 0 26px 46px -26px rgba(69,16,30,.4)`
- `border-color: #F3323E` (the red border appears)
- The **icon circle fills red and the arrow turns white** (see below)

### Kicker label
- Font: Hanken Grotesk, `12px`, weight `700`
- `letter-spacing: .13em`, `text-transform: uppercase`
- Color `#F3323E` (red)
- `margin-bottom: 14px`

### Heading (h3)
- Font: Source Serif 4, `29px`, weight `600`
- `line-height: 1.14`, `letter-spacing: -.01em`
- Color `#45101E` (burgundy ink)
- `margin: 0`

### Accent bar
- `width: 46px`, `height: 4px`, `border-radius: 2px`
- Background `#F3323E`
- `margin: 18px 0 20px`

### Body paragraph
- Font: Hanken Grotesk, `16.5px`, weight `400`
- `line-height: 1.6`
- Color `#7B5A55` (muted brown)
- `margin: 0`

### Arrow icon (circle)
- `align-self: flex-end` (bottom-right)
- `54px × 54px`, `border-radius: 50%`
- Default: background `#F4E1D2`, icon color `#45101E`
- Hover (card): background `#F3323E`, icon color `#fff`
- `transition: background .22s, color .22s`
- Icon glyph: **Lucide `arrow-up-right`**, rendered at 22px, `stroke-width: 2`,
  `stroke="currentColor"` (so the color swap works automatically). If your codebase
  already uses lucide-react / lucide-vue, use `<ArrowUpRight />` instead of the
  inline SVG. Inline SVG source:
  ```html
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
  </svg>
  ```

## Content (exact copy — Norwegian)

**Card 1**
- Kicker: `Ny nettside & redesign`
- Heading: `Vi bygger og fornyer nettsider for bedrifter`
- Body: `Fra bunnen av eller redesign av eksisterende side — moderne, raskt og skreddersydd.`

**Card 2**
- Kicker: `SEO`
- Heading: `Bli funnet — på Google og i AI-svar`
- Body: `Vi optimaliserer innholdet ditt for tradisjonelt søk og AI-genererte svar fra ChatGPT, Gemini og Claude.`

**Card 3**
- Kicker: `AI-rådgivning`
- Heading: `Bygget noe med AI? Vi gjør det klart for verden.`
- Body: `Vi hjelper deg fra AI-prototype til ferdig, driftssikker nettside — pluss AI-synlighetssjekk og automatisering for bedriften din.`

## Interactions & Behavior
- **Hover** is the only interaction: whole-card hover triggers the lift, shadow,
  red border, and icon fill (all described above). No click behavior is defined
  here — if these cards should link somewhere, wrap each in an `<a>` and keep the
  hover styles on the card.
- Respect `prefers-reduced-motion` if your site does — drop the `translateY` for
  users who opt out.

## Design Tokens
| Token | Value | Use |
|---|---|---|
| Cream (page bg) | `#FDF6EF` | section background |
| Card bg | `#FAEDE0` | card fill |
| Ink | `#45101E` | headings, default arrow |
| Body | `#7B5A55` | paragraph text |
| Red | `#F3323E` | kicker, accent bar, hover border, icon-hover fill |
| Icon bg | `#F4E1D2` | default arrow circle |
| Radius (card) | `26px` | |
| Radius (icon) | `50%` | |
| Grid gap | `22px` | |
| Card padding | `36px 34px 40px` | |
| Ease | `cubic-bezier(.2,.7,.2,1)` | card lift |

## Typography
- **Headings:** Source Serif 4 (Google Fonts), weight 600
- **Everything else:** Hanken Grotesk (Google Fonts), weights 400/700
- Load both from Google Fonts, or swap for your codebase's equivalents if these
  are already self-hosted.

## Assets
- No images. Only the Lucide `arrow-up-right` icon (inline SVG or your icon library).

## Files
- `services-section-reference.html` — self-contained, openable in a browser.
  This is the source of truth for spacing, colors, and hover behavior.
