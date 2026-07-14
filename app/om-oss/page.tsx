import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "@/components/about-hero"
import { AboutTeamBand } from "@/components/about-team-band"
import { AboutTeamGrid } from "@/components/about-team-grid"
import { AboutCta } from "@/components/about-cta"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Om oss",
  description:
    "Møt teamet bak Reboot – et lite, dedikert webbyrå i Nydalen, Oslo som designer, utvikler og drifter moderne nettsider for bedrifter.",
  path: "/om-oss",
})

export default function OmOssPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <AboutHero />
      <AboutTeamBand />
      <AboutTeamGrid />
      <AboutCta />
      <SiteFooter />
    </main>
  )
}
