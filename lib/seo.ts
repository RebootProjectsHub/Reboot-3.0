import type { Metadata } from "next"

/**
 * Builds per-page metadata with a canonical URL and Open Graph / Twitter tags
 * that reuse the default share image. Pass a page-specific title (without the
 * "| Reboot" suffix — the title template in the root layout appends it),
 * description, and the page's path (e.g. "/tjenester").
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const fullTitle = `${title} | Reboot`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "nb_NO",
      siteName: "Reboot",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: "Reboot" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
