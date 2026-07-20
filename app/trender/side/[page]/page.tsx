import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { ArticlesHero } from "@/components/articles-hero"
import { ArticlesList } from "@/components/articles-list"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"
import { posts } from "@/posts"

const PAGE_SIZE = 12

function totalPages() {
  return Math.max(1, Math.ceil(posts.length / PAGE_SIZE))
}

// Pre-render pages 2..N as static routes (/trender/side/2, ...). Page 1 is /trender.
export function generateStaticParams() {
  const pages = []
  for (let n = 2; n <= totalPages(); n++) pages.push({ page: String(n) })
  return pages
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  return pageMetadata({
    title: `Aktuelt – side ${page}`,
    description:
      "Innsikt, tips og trender om webdesign, SEO, UX og digitale løsninger fra teamet i Reboot.",
    path: `/trender/side/${page}`,
    noIndex: true,
  })
}

export default async function AktueltPagedPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const n = Number(page)
  if (!Number.isInteger(n) || n < 2 || n > totalPages()) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ArticlesHero />
      <ArticlesList page={n} />
      <SiteFooter />
    </main>
  )
}
