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
    </main>
  )
}
