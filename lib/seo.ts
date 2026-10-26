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
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt = "Reboot",
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  /** Dimensions and alt of `image`; the defaults describe /og-image.png. */
  imageWidth?: number
  imageHeight?: number
  imageAlt?: string
  /** Set for paginated/duplicate-content routes that shouldn't be indexed. */
  noIndex?: boolean
}): Metadata {
  const fullTitle = `${title} | Reboot`
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      locale: "nb_NO",
      siteName: "Reboot",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
