"use client"

import { useState } from "react"
import { ArrowRight, Check, Plus } from "lucide-react"
import { techPages } from "@/lib/tech-links"

const services = [
  {
    id: "skreddersydd-nettside",
    kicker: "Ny nettside & redesign",
    title: "Skreddersydd nettside",
    body: "Enten du trenger en helt ny side eller vil friske opp den gamle, får du en løsning som er rask, sikker og enkel å oppdatere.",
    variant: "accordion" as const,
    accordionItems: [
      {
        title: "Skreddersydd design for din bedrift",
        description:
          "Ingen ferdige maler. Vi designer fra bunnen av rundt merkevaren, målgruppen og målene deres, slik at nettsiden faktisk skiller seg ut fra konkurrentene.",
      },
      {
        title: "Bygget for å konvertere besøkende til kunder",
        description:
          "Tydelige CTA-er, gjennomtenkte brukerreiser og innhold som svarer på det besøkende faktisk lurer på – slik at flere tar kontakt eller handler.",
      },
      {
        title: "Rask, sikker og moderne",
        description:
          "Bygget på moderne teknologi med fokus på ytelse, sikkerhet og oppetid, og satt opp slik at dere selv enkelt kan oppdatere innhold etterpå.",
      },
    ],
    cta: "Kom i gang",
  },
  {
    id: "seo-og-ai-svar",
    kicker: "Synlighet & søk",
    title: "SEO og AI-svar",
    body: "God rangering på Google er ikke lenger nok. Vi sørger for at dere også dukker opp når folk spør ChatGPT, Claude og Gemini.",
    bullets: [
      "Teknisk SEO og innholdsoptimalisering",
      "Synlighet i AI-svar og answer engines",
      "Lokal synlighet og Google Bedriftsprofil",
      "Måling og rapportering av resultater",
    ],
    variant: "checks" as const,
    cta: "Bli mer synlig",
  },
  {
    id: "ai-radgivning",
    kicker: "AI-hjelp",
    title: "AI-rådgivning",
    body: "AI kan virke overveldende. Vi hjelper deg å forstå hvor AI kan gi bedriften din en fordel og hjelper dere med å få maks ut av teknologien.",
    bullets: [
      "Kartlegging av muligheter i din bedrift",
      "Konkrete løsninger og verktøy i praksis",
      "Løpende sparring når dere trenger det",
    ],
    variant: "checks" as const,
    cta: "Book AI-rådgivning",
  },
  {
    id: "digitale-tjenester",
    kicker: "Skreddersydd utvikling",
    title: "Digitale tjenester",
    body: "Bred erfaring med integrasjoner og tekniske løsninger.",
    bullets: [
      "Shopify",
      "WordPress",
      "Woocommerce",
      "Integrasjoner",
      "Github",
      "Vipps",
      "BankID",
      "API-løsninger",
    ],
    variant: "chips" as const,
    cta: "Kontakt oss",
  },
]

function AccordionList({ items }: { items: { title: string; description: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <ul className="mt-[18px] divide-y divide-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left"
            >
              <span className="text-[14.5px] font-medium text-foreground">{item.title}</span>
              <Plus
                className={`size-4 shrink-0 text-brand transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              />
            </button>
            {isOpen && (
              <p className="pb-3 pr-8 text-[13px] leading-[1.5] text-foreground/60">
                {item.description}
              </p>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function ServiceList({
  bullets,
  variant,
}: {
  bullets: string[]
  variant: "checks" | "steps" | "chips"
}) {
  if (variant === "steps") {
    return (
      <ol className="mt-[18px] space-y-8">
        {bullets.map((bullet, i) => (
          <li key={bullet} className="flex items-center gap-3.5">
            <span className="font-mono text-2xl font-normal leading-none text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[14.5px] text-foreground/85">{bullet}</span>
          </li>
        ))}
      </ol>
    )
  }

  if (variant === "chips") {
    return (
      <ul className="mt-[18px] flex flex-wrap gap-2">
        {bullets.map((bullet) => {
          const href = techPages[bullet]
          return (
            <li key={bullet}>
              {href ? (
                <a
                  href={href}
                  className="inline-block rounded-full border border-brand bg-foreground/5 px-3.5 py-1.5 text-[13.5px] text-foreground/85 transition-colors hover:bg-brand hover:text-white"
                >
                  {bullet}
                </a>
              ) : (
                <span className="inline-block rounded-full border border-transparent bg-foreground/5 px-3.5 py-1.5 text-[13.5px] text-foreground/85">
                  {bullet}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ul className="mt-[18px] space-y-[11px]">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-center gap-[10px]">
          <Check className="size-[17px] shrink-0 text-brand" strokeWidth={2.5} />
          <span className="text-[14.5px] text-foreground/85">{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServicesGrid() {
  return (
    <section className="px-4 pb-14 pt-0 sm:px-6 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-[22px] sm:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.title}
              id={item.id}
              className="flex scroll-mt-24 flex-col rounded-[26px] border-[1.5px] border-transparent bg-card px-[34px] pb-10 pt-9 transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-muted-foreground/40"
            >
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
                {item.kicker}
              </span>
              <h3 className="mt-3.5 font-heading text-[29px] font-normal leading-[1.14] text-foreground">
                {item.title}
              </h3>
              <div className="mt-[18px] mb-5 flex items-center gap-[2px]">
                <div className="h-1 w-[28px] rounded-full bg-brand" />
                <div className="h-1 w-[16px] rounded-full bg-brand/25" />
              </div>
              <p className="text-[16.5px] leading-[1.6] text-foreground/70">
                {item.body}
              </p>
              {item.variant === "accordion" ? (
                <AccordionList items={item.accordionItems} />
              ) : (
                <ServiceList bullets={item.bullets} variant={item.variant} />
              )}
              <div className="min-h-7 flex-1" />
              <a
                href="/kontakt"
                className="mt-6 inline-flex w-fit items-center gap-2 self-end text-base font-semibold text-brand transition-[gap] duration-200 hover:gap-3.5"
              >
                {item.cta}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
