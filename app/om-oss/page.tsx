import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "@/components/about-hero"
import { AboutTeamBand } from "@/components/about-team-band"
import { AboutTeamGrid } from "@/components/about-team-grid"
import { AboutCta } from "@/components/about-cta"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Om oss – lite webbyrå i Nydalen, Oslo",
  description:
    "Møt teamet bak Reboot. Vi er et lite webbyrå i Nydalen, Oslo, der du snakker direkte med de som designer, utvikler og drifter nettsiden din.",
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
