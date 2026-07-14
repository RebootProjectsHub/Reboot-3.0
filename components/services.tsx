import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    kicker: "Ny nettside & redesign",
    title: "Ny nettside / redesign",
    body: "Fra bunnen av eller redesign av eksisterende side, leverer vi moderne, raske og skreddersydde nettsider.",
    href: "/tjenester",
  },
  {
    kicker: "Synlighet & vekst",
    title: "SEO og AI-svar",
    body: "Vi sørger for at bedriften din rangerer høyt i tradisjonelt Google-søk, og blir anbefalt når folk spør ChatGPT, Gemini og Claude.",
    href: "/tjenester#seo-og-ai-svar",
  },
  {
    kicker: "AI-hjelp",
    title: "Vi bistår med AI-rådgivning.",
    body: "Enten du trenger konkret hjelp eller en trygg partner innen AI, sørger vi for at bedriften din får mest mulig ut av teknologien.",
    href: "/tjenester#ai-radgivning",
  },
]

export function Services() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-10 lg:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-[22px] sm:grid-cols-3">
          {services.map((item) => (
            <Link
              key={item.kicker}
              href={item.href}
              className="group flex flex-col rounded-[26px] border-[1.5px] border-transparent bg-card pt-9 px-[34px] pb-10 transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-brand"
            >
              <span className="mb-3.5 font-mono text-xs uppercase tracking-[0.13em] text-brand">
                {item.kicker}
              </span>
              <h3 className="font-heading text-[23px] font-normal leading-[1.14] tracking-[-0.01em] text-foreground">
                {item.title}
              </h3>
              <div className="mt-[18px] mb-5 flex items-center gap-[2px]">
                <div className="h-1 w-[28px] rounded-full bg-brand" />
                <div className="h-1 w-[16px] rounded-full bg-brand/25" />
              </div>
              <p className="text-[16.5px] leading-[1.6] text-foreground/70">
                {item.body}
              </p>
              <div className="min-h-7 flex-1" />
              <div className="flex size-[54px] shrink-0 items-center justify-center self-end rounded-full bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                <ArrowUpRight className="size-[22px]" strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
