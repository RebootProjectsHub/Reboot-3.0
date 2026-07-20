import { SiteHeader } from "@/components/site-header"
import { PricingHero } from "@/components/pricing-hero"
import { PricingNewSite } from "@/components/pricing-new-site"
import { ServicesMaintenance } from "@/components/services-maintenance"
import { ServicesCta } from "@/components/services-cta"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = {
  ...pageMetadata({
    title: "Nettsidepriser 2026",
    description:
      "Faste, forutsigbare priser på nettside, hosting og vedlikehold. Ny nettside fra 29 900,‑ og støtteavtaler fra 990,‑ per måned. Ingen overraskelser.",
    path: "/nettside-priser",
  }),
  title: { absolute: "Nettsidepriser 2026 | Reboot" },
}

export default function NettsidePriserPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PricingHero />
      <PricingNewSite />
      <ServicesMaintenance />
      <ServicesCta />
      <SiteFooter />
    </main>
  )
}
