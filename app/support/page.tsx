import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SupportForm } from "@/components/support-form"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Support",
  description:
    "Kunde hos Reboot? Meld inn feil, endringer eller spørsmål om nettsiden din her, så tar vi tak i saken så raskt vi kan.",
  path: "/support",
  noIndex: true,
})

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Support" }]} />

      <section className="relative mx-auto max-w-[820px] px-6 pb-4 pt-16 text-center sm:pt-24">
        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Kundesupport
        </span>

        <h1 className="mt-[18px] mb-6 text-balance font-heading text-[clamp(40px,5vw,64px)] font-normal leading-[1.04] tracking-[-0.02em] text-foreground">
          Hvordan kan vi hjelpe?
        </h1>

        <p className="mx-auto max-w-[560px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Meld inn feil, ønskede endringer eller spørsmål om nettsiden din. Jo mer
          detaljer du gir oss, jo raskere kan vi løse saken.
        </p>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-[760px]">
          <SupportForm />
          <p className="mt-6 text-center text-[15px] text-foreground/60">
            Er nettsiden nede og det haster? Ring oss på{" "}
            <a href="tel:+4797675848" className="text-foreground hover:text-brand">
              97 67 58 48
            </a>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
