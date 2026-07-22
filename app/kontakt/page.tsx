import { SiteHeader } from "@/components/site-header"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Kontakt oss – få et uforpliktende tilbud",
  description:
    "Trenger du ny nettside, nettbutikk eller hjelp med drift? Ta kontakt med Reboot i Nydalen, Oslo for en uforpliktende prat – vi svarer i løpet av dagen.",
  path: "/kontakt",
})

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ContactHero />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
