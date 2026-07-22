import type { ReactNode } from "react"

export type Post = {
  slug: string
  /** Article headline, used as the on-page <h1> and listing card title. */
  title: string
  /** SEO <title> override (without the "| Reboot" suffix), for when `title`
   *  is too long for Google's ~60-char cutoff. The <h1> keeps using `title`. */
  metaTitle?: string
  category: string
  /** Display date, e.g. "26. juni 2026" */
  date: string
  /** ISO date used for sorting and <time dateTime> */
  dateISO: string
  /** Meta description (meta/OG/Twitter only — not rendered on the site).
   *  Aim for ~120-160 chars and always end on a complete sentence. */
  excerpt: string
  image: string
  imageAlt: string
  /** Body as JSX (hand-authored posts). Provide this or `contentHtml`. */
  content?: ReactNode
  /** Body as an HTML string (bulk-imported posts, rendered build-time). */
  contentHtml?: string
}
