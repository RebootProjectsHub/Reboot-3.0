import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { pageMetadata } from "@/lib/seo"
import { qaPages } from "@/sporsmal"

export const metadata = pageMetadata({
  title: "Spørsmål og svar om nettsider, drift og synlighet",
  description:
    "Ærlige svar på det små bedrifter lurer på før de kjøper nettside eller driftsavtale: pris, tidsbruk, vedlikehold, e-post, hastighet, SEO og synlighet i ChatGPT.",
  path: "/sporsmal",
})

export default function SporsmalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Spørsmål og svar" }]} />

      <section className="relative mx-auto max-w-[820px] px-6 pb-14 pt-16 text-center sm:pt-24">
        <span
          aria-hidden
          className="absolute left-[6%] top-10 hidden text-[30px] leading-none text-brand/40 md:block"
        >
          ✳︎
        </span>
        <span
          aria-hidden
          className="absolute right-[6%] top-14 hidden text-[24px] leading-none text-foreground/35 md:block"
        >
          ✦︎
        </span>

        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Spørsmål og svar
        </span>

        <h1 className="mt-[18px] mb-6 text-balance font-heading text-[clamp(40px,5vw,64px)] font-normal leading-[1.04] tracking-[-0.02em] text-foreground">
          Det kundene våre spør om
        </h1>

        <p className="mx-auto max-w-[560px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Ærlige svar på det små bedrifter lurer på før de kjøper nettside eller driftsavtale.
        </p>
      </section>

      <section className="px-6 pb-24">
        <ul className="mx-auto max-w-[820px] divide-y divide-border border-y border-border">
          {qaPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/sporsmal/${page.slug}`}
                className="group flex items-start justify-between gap-6 py-6"
              >
                <span>
                  <span className="block font-heading text-[22px] leading-[1.3] text-foreground transition-colors group-hover:text-brand">
                    {page.title}
                  </span>
                  <span className="mt-2 block text-[15.5px] leading-[1.6] text-foreground/70">
                    {page.description}
                  </span>
                </span>
                <ArrowRight
                  className="mt-1.5 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  )
}
