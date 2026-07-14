import { SiteHeader } from "@/components/site-header"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Kontakt oss",
  description:
    "Trenger du en ny nettside eller redesign av den gamle? Vi vil gjerne høre fra deg – ta kontakt for en uforpliktende prat.",
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
