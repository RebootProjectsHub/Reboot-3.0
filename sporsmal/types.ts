/** A page's text, as converted from the brief's markdown. */
export type QaPageContent = {
  /** URL path segment under /sporsmal/. */
  slug: string
  /** Question, used as the on-page <h1> and the <title>. */
  title: string
  /** Meta description, also the one-liner on the /sporsmal/ index. */
  description: string
  /** Body as an HTML string (converted from the brief's markdown). */
  contentHtml: string
  /** The "Vanlige spørsmål" H3s and the paragraph under each, for FAQPage JSON-LD. */
  faq: { question: string; answer: string }[]
}

export type QaImage = {
  /** 1600x1067 WebP hero; a 480x320 `-thumb.webp` sits next to it for the index. */
  src: string
  thumb: string
  /** Norwegian, describing the photo itself rather than the page topic. */
  alt: string
  photographer: string
  /** Unsplash profile and photo page, linked from the credit under the hero. */
  profileUrl: string
  photoUrl: string
}

export type QaPage = QaPageContent & { image: QaImage }
