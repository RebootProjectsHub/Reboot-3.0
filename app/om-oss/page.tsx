import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
      <Breadcrumbs items={[{ label: "Om oss" }]} />
      <AboutHero />
      <AboutTeamBand />
      <AboutTeamGrid />
      <section className="px-6 pb-12 text-center">
        <p className="mx-auto max-w-[600px] text-pretty text-base leading-relaxed text-foreground/70">
          Venner av huset:{" "}
          <a
            href="https://360review.io"
            target="_blank"
            rel="noopener"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            360review.io
          </a>
          , et verktøy for 360-graders tilbakemelding til ledere.
        </p>
      </section>
      <AboutCta />
      <SiteFooter />
    </main>
  )
}
