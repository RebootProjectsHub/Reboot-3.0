import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { QaLayout } from "@/components/qa-layout"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"
import { getQaPage, qaPages } from "@/sporsmal"

export function generateStaticParams() {
  return qaPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getQaPage(slug)
  if (!page) return {}
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/sporsmal/${page.slug}`,
  })
}

export default async function QaPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getQaPage(slug)
  if (!page) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Spørsmål og svar", href: "/sporsmal" }, { label: page.title }]} />
      <QaLayout page={page} />
      <SiteFooter />
    </main>
  )
}
