# Handoff: Google-rating CTA in hero (replaces «Våre referanser»)

## Overview

The hero's secondary CTA («Våre referanser», a text link right of the primary
button) is replaced with a **Google-rating lockup** flexing Reboot's 5,0-star
Google rating. Chosen variant (from a 20-option exploration): a circular badge
containing a serif «5,0», with five brand-red stars and a «Se anmeldelsene på
Google» link line beside it. The whole lockup is one link to Reboot's Google
reviews.

Target codebase: `RebootProjectsHub/Reboot-3.0` (Next.js marketing site,
`components/hero.tsx` / `design_handoff_hero_section`).

## About the Design Files

The files in this bundle are **design references created in HTML** — they show
intended look and behavior, and are not production code to copy directly.
Recreate the lockup in the target codebase's existing environment (Next.js /
React, Tailwind or the CSS conventions already used in `hero.tsx`) using its
established patterns and tokens.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and sizes are final and use
the Reboot Design System tokens. Recreate pixel-perfectly.

## Screens / Views

### Hero CTA row

- **Purpose:** primary action «Se våre tjenester» + social proof/secondary
  action in one row, centered under the hero subhead.
- **Layout:** `display: flex; align-items: center; justify-content: center;
  gap: 26px; flex-wrap: wrap;`. Primary button first, rating lockup second
  (right). No other elements in the row.

### Component: Google-rating lockup (one `<a>`)

Anchor:
- `display: inline-flex; align-items: center; gap: 14px;`
- `text-decoration: none; text-align: left;`
- `href` → Reboot's Google Business reviews URL (opens in new tab in prod:
  `target="_blank" rel="noopener"`)
- `aria-label="5,0 av 5 stjerner på Google – se anmeldelsene"`

Circle badge (left):
- 48×48 px, `border-radius: 50%`
- Background: 10% brand red over card cream —
  `color-mix(in srgb, #F73A3C 10%, #FBF6EF)` ≈ `#FAE3DC`
- Content: text «5,0» — Source Serif 4, 17px, weight 600,
  letter-spacing −0.02em, color ink `#4A1220`, centered

Text stack (right), `display: flex; flex-direction: column; align-items:
flex-start; gap: 3px;`:
1. Stars: unicode `★★★★★` (`&#9733;` ×5), color brand red `#F73A3C`,
   font-size 13px, letter-spacing 2px, line-height 1, `aria-hidden="true"`
2. Link line: «Se anmeldelsene på Google» — Hanken Grotesk, 13px, weight 500,
   line-height 1.2, color ink-70 `#6E4A54`

## Interactions & Behavior

- Entire lockup is a single link → Google reviews.
- Resting state has no border/shadow.
- Hover (recommended, matches DS circle-affordance behavior): the circle
  inverts to solid brand red `#F73A3C` with white/cream «5,0»; transition
  `background 0.2s ease, color 0.2s ease`. Optionally the link line shifts to
  brand red. Keep it subtle — no lift, no underline.
- Active: none beyond browser default.
- Responsive: the CTA row wraps (`flex-wrap: wrap`); on narrow screens the
  lockup drops below the button, still centered.

## State Management

None — purely static markup and CSS.

## Design Tokens

- `--brand` / red: `#F73A3C` (production alternate `#FF5747` exists as
  `--red-live`; the handoff specs canonicalize on `#F73A3C`)
- `--ink-900`: `#4A1220` (score text)
- `--ink-700`: `#6E4A54` (link line)
- `--card` cream: `#FBF6EF` (circle mix base)
- Fonts: Source Serif 4 (score), Hanken Grotesk (link line)
  — if the gelica Typekit family ships, substitute accordingly
- Circle: 48px; row gap 26px; lockup internal gap 14px; text-stack gap 3px
- Stars: unicode ★, 13px, letter-spacing 2px

## Assets

None required. Stars are unicode glyphs (`&#9733;`), the «5,0» is text, the
circle is CSS. No Google logo is used — the rating is claimed in text only.

## Files

- `Hero.dc.html` — hero design reference with the chosen lockup in place
  (see the CTA row inside the `Hero` section)
- `Rating options.dc.html` — the full exploration (rounds 1–4, ids 1a–4e);
  the chosen variant is `4c`
