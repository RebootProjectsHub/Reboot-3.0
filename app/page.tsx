import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TeamBand } from "@/components/team-band"
import { ClientLogosMobile } from "@/components/client-logos"
import { WhatWeDo } from "@/components/what-we-do"
import { Services } from "@/components/services"
import { WhoWeAre } from "@/components/who-we-are"
import { Projects } from "@/components/projects"
import { WorkWithUs } from "@/components/work-with-us"
import { Testimonials } from "@/components/testimonials"
import { Articles } from "@/components/articles"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"
import { VideoBubble } from "@/components/video-bubble"
import { pageMetadata } from "@/lib/seo"

export const metadata = {
  ...pageMetadata({
    title: "Én partner for alt innen nettsider",
    description:
      "Moderne nettsider med fokus på synlighet på Google og i AI-søk. Designet og utviklet i Nydalen, Oslo.",
    path: "/",
  }),
  // Keep the brand-first wording on the homepage instead of the "%s | Reboot" template.
  title: { absolute: "Reboot | Én partner for alt innen nettsider" },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <TeamBand />
      <ClientLogosMobile />
      <WhatWeDo />
      <Services />
      <WhoWeAre />
      <Projects />
      <WorkWithUs />
      <Testimonials />
      <Articles />
      <Cta />
      <SiteFooter />
      <VideoBubble />
    </main>
  )
}
