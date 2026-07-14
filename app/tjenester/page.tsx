import { SiteHeader } from "@/components/site-header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesTeamBand } from "@/components/services-team-band"
import { ServicesMaintenance } from "@/components/services-maintenance"
import { ServicesCta } from "@/components/services-cta"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Moderne nettsider, design og digitale tjenester",
  description:
    "Reboot er ekspert på hjemmesider, design og digitale løsninger. Fra strategi og design til utvikling, synlighet og drift – din digitale partner i Oslo.",
  path: "/tjenester",
})

export default function TjenesterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
