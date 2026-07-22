import type { ReactNode } from "react"

export type CaseStudy = {
  slug: string
  /** Client name, e.g. "Ved På Døra" */
  name: string
  /** Short project description, e.g. "Design og oppsett av nettside med nettbutikk" */
  tagline: string
  /** SEO <title> (without the "| Reboot" suffix). Aim for ~50 chars so the
   *  full title stays under Google's ~60-char cutoff. Falls back to `name`,
   *  which on its own is too short and generic to rank or inform. */
  metaTitle?: string
  /** SEO meta description, ~140-160 chars. Falls back to `tagline`, which is
   *  far shorter than the ~155 chars Google will display. */
  metaDescription?: string
  /** Live site URL */
  url?: string
  /** Service chips shown in the case hero */
  services?: string[]
  /** Hero image for the case page */
  image: string
  imageAlt: string
  /** Pull quote shown after the body text */
  quote?: { text: string; author?: string }
  /** Screenshot gallery shown after the quote; set video for mp4 items,
   *  portrait for tall mobile screenshots (rendered side by side) */
  gallery?: { src: string; alt: string; video?: boolean; portrait?: boolean }[]
  content: ReactNode
}

export type Reference = {
  name: string
  /** Slug of the imported case page under /ny-nettside/<slug>, if one exists */
  caseSlug?: string
  /** External client website, used when there is no case page */
  url?: string
  /** Display label for the external link; defaults to the URL's hostname */
  urlLabel?: string
  /** Card media — image path or video path (mp4) */
  image?: string
  video?: string
}
