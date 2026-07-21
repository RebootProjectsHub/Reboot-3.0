# Handoff: «Kontakt oss» navbar CTA (variant 3b, ✦)

## Overview
A refreshed «Kontakt oss» call-to-action button for the site header on reboot.no. It keeps the current dark ink pill (which balances the wordmark on the opposite side of the navbar) and adds one brand note: the red ✦ doodle glyph before the label, plus a darken + lift hover.

## About the Design Files
`reference.html` in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the Reboot-3.0 codebase** (`RebootProjectsHub/Reboot-3.0`, Next.js + shadcn) using its established patterns — most naturally as the header CTA rendered through `components/ui/button.tsx`, either via the existing dark/ink variant or a small extension of it.

## Fidelity
**High-fidelity.** All values below are final — recreate pixel-perfectly.

## The Component
One component, one placement: the CTA at the right edge of the sticky site header.

- **Element**: `<a href="/kontakt">` (link, not `<button>`)
- **Layout**: `display: inline-flex; align-items: center; gap: 9px`
- **Background**: ink `#4A1220`
- **Text color**: cream `#FCF2EC`
- **Typography**: Hanken Grotesk 600, 15px, normal case («Kontakt oss» — sentence case per brand rules). Note: if the site still ships the Typekit "gelica" family for UI text, use the site's existing UI font instead — the font is not part of this change.
- **Padding**: 13px 24px
- **Border radius**: 999px (full pill)
- **Doodle glyph**: unicode `✦` (`&#10022;`) in a `<span aria-hidden="true">`, color brand red `#F73A3C`, font-size 16px, line-height 1. It is decorative — must be `aria-hidden`.

## Interactions & Behavior
- **Hover**: `transform: translateY(-2px)` + background darkens to `#3A0E19`. Transition: `transform 0.2s ease, background-color 0.2s ease`.
- **Active/press**: `transform: translateY(1px)` (matches the shadcn `active:translate-y-px` convention already in `components/ui/button.tsx`).
- **Focus**: use the codebase's existing focus ring (`--ring` / brand red).
- Navigates to the contact page; no other state.

## State Management
None — stateless link.

## Design Tokens
| Token | Value | Use |
|---|---|---|
| `--ink-900` | `#4A1220` | button background |
| ink hover | `#3A0E19` | hover background (ink-900 darkened ~8%) |
| `--cream-100` | `#FCF2EC` | label text |
| `--red-500` | `#F73A3C` | ✦ glyph |
| radius | `999px` | pill |
| duration | `0.2s ease` | hover transition |

If the codebase's live values differ slightly (e.g. `#4A1522`, `#FF5747`), prefer the codebase's existing tokens — this design uses the 2026 design-handoff canonical values.

## Assets
None. The ✦ is a unicode glyph, consistent with the doodle accents in the existing hero/section handoffs. If the brand's real doodle SVGs exist, an SVG ✦ may be substituted at the same size/color.

## Files
- `reference.html` — standalone, working reference of the button with hover/active states. Open in a browser to inspect.
