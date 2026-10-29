import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Ny nettside / redesign",
    label: "Hjemmeside & webdesign",
    href: "/tjenester/skreddersydd-nettside",
  },
  {
    number: "02",
    title: "SEO og AI-søk",
    label: "Synlighet & vekst",
    href: "/tjenester/seo-og-ai-svar",
  },
  {
    number: "03",
    title: "AI-rådgivning",
    label: "AI-hjelp",
    href: "/tjenester/ai-radgivning",
  },
]

export function Services() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-10 lg:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col border-b border-border">
          {services.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group flex items-center gap-4 border-t border-border py-5 sm:gap-8 sm:py-8"
            >
              <span className="w-7 shrink-0 font-mono text-xs font-bold text-brand sm:w-11 sm:text-sm">
                {item.number}
              </span>
              <span className="flex-1 font-heading text-lg font-normal leading-[1.2] tracking-[-0.01em] text-foreground transition-colors duration-200 group-hover:text-brand sm:text-[34px] sm:leading-[1.14] sm:tracking-[-0.015em]">
                {item.title}
              </span>
              <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:inline-block">
                {item.label}
              </span>
              <span className="flex size-6 shrink-0 items-center justify-center text-brand transition-colors duration-200 sm:size-10 sm:rounded-full sm:bg-secondary sm:text-foreground sm:group-hover:bg-brand sm:group-hover:text-brand-foreground">
                <ArrowUpRight className="size-full stroke-1 sm:size-[18px] sm:stroke-2" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
