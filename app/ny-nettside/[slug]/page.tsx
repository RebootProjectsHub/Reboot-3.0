import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { CaseLayout } from "@/components/case-layout"
import { SiteFooter } from "@/components/site-footer"
import { cases, getCase } from "@/cases"

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCase(slug)
  if (!caseStudy) return {}
  const path = `/ny-nettside/${caseStudy.slug}`
  const image = caseStudy.image || "/og-image.png"
  const title = caseStudy.metaTitle || caseStudy.name
  const description = caseStudy.metaDescription || caseStudy.tagline
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "nb_NO",
      siteName: "Reboot",
      url: path,
      title: `${title} | Reboot`,
      description,
      images: [{ url: image, alt: caseStudy.imageAlt || caseStudy.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Reboot`,
      description,
      images: [image],
    },
  }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCase(slug)
  if (!caseStudy) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <CaseLayout caseStudy={caseStudy} />
      <SiteFooter />
    </main>
  )
}
