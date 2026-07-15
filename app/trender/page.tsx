import { SiteHeader } from "@/components/site-header"
import { ArticlesHero } from "@/components/articles-hero"
import { ArticlesList } from "@/components/articles-list"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Aktuelt",
  description:
    "Innsikt, tips og trender om webdesign, SEO, UX og digitale løsninger fra teamet i Reboot.",
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
