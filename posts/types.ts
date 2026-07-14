import type { ReactNode } from "react"

export type Post = {
  slug: string
  title: string
  category: string
  /** Display date, e.g. "26. juni 2026" */
  date: string
  /** ISO date used for sorting and <time dateTime> */
  dateISO: string
  /** Short summary used on listing cards and as meta description */
  excerpt: string
  image: string
  imageAlt: string
  /** Body as JSX (hand-authored posts). Provide this or `contentHtml`. */
  content?: ReactNode
  /** Body as an HTML string (bulk-imported posts, rendered build-time). */
  contentHtml?: string
}
