import { SiteHeader } from "@/components/site-header"
import { ReferencesHero } from "@/components/references-hero"
import { ReferencesGrid, ReferencesMoreProjects } from "@/components/references-grid"
import { ReferencesTestimonials } from "@/components/references-testimonials"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Referanser",
  description:
    "Et utvalg av nettsidene vi har designet, utviklet og drifter — fra små bedrifter til store organisasjoner.",
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
