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
      "Sjekk ut vår prisoversikt for ny hjemmeside til din bedrift. Med våre faste, lave priser ser du nøyaktig hva det koster med en ny nettside.",
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
