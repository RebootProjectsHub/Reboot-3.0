import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    kicker: "Ny nettside & redesign",
    title: "Ny nettside / redesign",
    body: "Fra bunnen av eller redesign av eksisterende side, leverer vi moderne, raske og skreddersydde nettsider.",
    href: "/tjenester#skreddersydd-nettside",
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
              className="group flex flex-row items-center justify-between gap-4 rounded-[20px] border-[1.5px] border-transparent bg-card px-5 py-4 transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-brand sm:flex-col sm:items-stretch sm:justify-start sm:gap-0 sm:rounded-[26px] sm:px-[34px] sm:pb-10 sm:pt-9"
            >
              <div className="min-w-0">
                <span className="mb-1 block font-mono text-xs uppercase tracking-[0.13em] text-brand sm:mb-3.5">
                  {item.kicker}
                </span>
                <h3 className="font-heading text-[17px] font-normal leading-[1.25] tracking-[-0.01em] text-foreground sm:text-[23px] sm:leading-[1.14]">
                  {item.title}
                </h3>
              </div>
              <div className="mt-[18px] mb-5 hidden items-center gap-[2px] sm:flex">
                <div className="h-1 w-[28px] rounded-full bg-brand" />
                <div className="h-1 w-[16px] rounded-full bg-brand/25" />
              </div>
              <p className="hidden text-[16.5px] leading-[1.6] text-foreground/70 sm:block">
                {item.body}
              </p>
              <div className="hidden min-h-7 flex-1 sm:block" />
              <div className="flex size-11 shrink-0 items-center justify-center text-brand transition-colors duration-200 sm:size-[54px] sm:self-end sm:rounded-full sm:bg-brand/10 sm:group-hover:bg-brand sm:group-hover:text-brand-foreground">
                <ArrowUpRight className="size-6 stroke-1 sm:size-[22px] sm:stroke-2" strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
