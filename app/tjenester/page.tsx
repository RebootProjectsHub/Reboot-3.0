import { SiteHeader } from "@/components/site-header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesTeamBand } from "@/components/services-team-band"
import { ServicesMaintenance } from "@/components/services-maintenance"
import { ServicesCta } from "@/components/services-cta"
import { SiteFooter } from "@/components/site-footer"
import { AnchorHighlight } from "@/components/anchor-highlight"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Moderne nettsider, design og digitale tjenester",
  description:
    "Nettsider, SEO og AI‑rådgivning fra et lite team i Oslo. Vi bygger raske, moderne nettsider og sørger for at dere blir funnet, både på Google og i AI‑søk.",
  path: "/tjenester",
})

export default function TjenesterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnchorHighlight />
      <SiteHeader />
      <ServicesHero />
      <ServicesGrid />
      <ServicesTeamBand />
      <ServicesMaintenance />
      <ServicesCta />
      <SiteFooter />
    </main>
  )
}
