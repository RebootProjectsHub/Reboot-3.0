import type { MetadataRoute } from "next"
import { posts } from "@/posts"
import { cases } from "@/cases"

export const dynamic = "force-static"

const BASE = "https://reboot.no"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Trailing slashes to match the canonical URLs (trailingSlash: true).
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/tjenester/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tjenester/shopify/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjenester/wordpress/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjenester/woocommerce/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/nettside-priser/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/referanser/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/om-oss/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/trender/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE}/ny-nettside/${c.slug}/`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const articlePages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/trender/${p.slug}/`,
    lastModified: p.dateISO ? new Date(p.dateISO) : now,
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [...staticPages, ...casePages, ...articlePages]
}
