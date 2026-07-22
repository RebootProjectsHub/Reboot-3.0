import { SiteHeader } from "@/components/site-header"
import { ReferencesHero } from "@/components/references-hero"
import { ReferencesGrid, ReferencesMoreProjects } from "@/components/references-grid"
import { ReferencesTestimonials } from "@/components/references-testimonials"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Referanser – kundecaser og nettsider vi har levert",
  description:
    "Se hva vi har levert for kunder som OBOS, NAF, Höegh Evi og Ditt Apotek. Nettsider, nettbutikker og digitale løsninger som skaper resultater.",
  path: "/referanser",
})

export default function ReferanserPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ReferencesHero />
      <ReferencesGrid />
      <ReferencesTestimonials />
      <ReferencesMoreProjects />
      <SiteFooter />
    </main>
  )
}
