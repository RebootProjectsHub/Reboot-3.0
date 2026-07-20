import { SiteHeader } from "@/components/site-header"
import { ArticlesHero } from "@/components/articles-hero"
import { ArticlesList } from "@/components/articles-list"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Aktuelt",
  description:
    "Artikler og innsikt fra teamet i Reboot om webdesign, SEO og AI. Les hva som skjer hos oss i Nydalen.",
  path: "/trender",
})

export default function AktueltPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ArticlesHero />
      <ArticlesList page={1} />
      <SiteFooter />
    </main>
  )
}
