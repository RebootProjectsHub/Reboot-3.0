import { SiteHeader } from "@/components/site-header"
import { ArticlesHero } from "@/components/articles-hero"
import { ArticlesList } from "@/components/articles-list"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Aktuelt – innsikt om webdesign, SEO og AI",
  description:
    "Artikler og innsikt fra teamet i Reboot om webdesign, SEO, AI og nettbutikk – praktiske råd og erfaringer fra et lite webbyrå i Nydalen i Oslo.",
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
