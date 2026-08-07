"use client"

import { useState } from "react"
import { Check, Minus, Plus } from "lucide-react"
import { PricingCarousel } from "@/components/pricing-carousel"

const features = [
  {
    label: "Månedlige oppdateringer",
    description:
      "Vi holder nettsiden din oppdatert med de nyeste versjonene av systemet og programtillegg. Det gjør nettsiden tryggere, raskere og mer stabil.",
  },
  {
    label: "Daglig backup",
    description:
      "Vi tar automatisk kopi av hele nettsiden hver natt. Hvis noe går galt, kan vi raskt gjenopprette den.",
  },
  {
    label: "Hosting",
    description:
      "Nettsiden din lagres og kjøres på raske og sikre servere. Du trenger ikke tenke på teknisk drift eller hvor den «bor».",
  },
  {
    label: "24/7 oppetid-overvåking",
    description:
      "Vi overvåker nettsiden døgnet rundt. Dersom feil oppstår får vi beskjed med en gang og kan gripe inn raskt.",
  },
  {
    label: "Prioritert responstid",
    description:
      "Du havner først i køen når du trenger hjelp. Vi svarer raskt og setter i gang med å hjelpe deg med en gang.",
  },
  {
    label: "Innholdsoppdatering inkludert",
    description:
      "Du har alltid muligheten til å sende oss justeringsønsker, tekster eller bilder du vil ha lagt inn, så ordner vi det for deg uten ekstra kostnad. 2 t/mnd inkludert.",
  },
  {
    label: "Blogg / nyheter",
    description:
      "Mulighet til å publisere artikler, oppdateringer og fagstoff som holder nettsiden levende og relevant over tid.",
  },
  {
    label: "Søkemotoroptimalisering (SEO)",
    description:
      "Vi sikrer det tekniske fundamentet for SEO ved å løpende optimalisere sidehastighet, mobiltilpasning og sikkerhet, og sikrer korrekt indeksering slik at Google, ChatGPT, Copilot og Claude feilfritt kan lese og rangere siden deres.",
  },
]

type Feature = (typeof features)[number]

const packages = [
  {
    name: "Standard",
    price: "990",
    included: [true, true, true, true, true, false, false, false],
  },
  {
    name: "Proff",
    price: "1 490",
    included: [true, true, true, true, true, true, true, false],
    highlighted: true,
  },
  {
    name: "Partner",
    price: "1 990",
    included: [true, true, true, true, true, true, true, true],
  },
]

type Package = (typeof packages)[number]

function PackageCard({
  pkg,
  borderColor,
}: {
  pkg: Package
  /** Overrides the resting border color class. Defaults to the ordinary
   *  border; the mobile slider passes its own constant brand color instead. */
  borderColor?: string
}) {
  const border = borderColor ?? "border-border"
  return (
    <div
      className={`group relative flex h-full flex-col rounded-[26px] border-[1.5px] bg-card px-6 pb-8 pt-[28px] transition-colors duration-200 hover:border-brand sm:px-8 sm:pt-[34px] ${border}`}
    >
      {pkg.highlighted && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          Mest valgt
        </span>
      )}

      <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand">
        {pkg.name}
      </span>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-[13px] text-foreground/60 sm:text-[14.5px]">kr</span>
        <span className="whitespace-nowrap font-heading text-[32px] font-normal leading-none text-foreground sm:text-[46px]">
          {pkg.price}
        </span>
        <span className="text-[13px] text-foreground/60 sm:text-[14.5px]">/mnd</span>
      </div>

      <ul className="mt-6 space-y-2.5 sm:mt-7 sm:space-y-3">
        {features.map((feature, i) => {
          const isIncluded = pkg.included[i]
          return (
            <li
              key={feature.label}
              title={feature.description}
              className={`flex items-center gap-2.5 sm:gap-3 ${isIncluded ? "" : "opacity-50"}`}
            >
              {isIncluded ? (
                <Check className="size-[15px] shrink-0 text-brand sm:size-[17px]" strokeWidth={2.5} />
              ) : (
                <Minus className="size-[15px] shrink-0 text-border sm:size-[17px]" strokeWidth={2.5} />
              )}
              <span className="text-[13.5px] text-foreground/85 sm:text-[14.5px]">
                {feature.label}
              </span>
            </li>
          )
        })}
      </ul>

      <a
        href="/kontakt"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-border bg-foreground/5 px-6 py-3.5 text-base font-normal text-foreground transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground"
      >
        Kom i gang
      </a>
    </div>
  )
}

function FeatureDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto mt-24 max-w-[700px]">
      <h3 className="text-center font-heading text-[22px] font-normal text-foreground">
        Hva er inkludert i pakkene?
      </h3>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {features.map((feature: Feature, i) => {
          const isOpen = openIndex === i
          return (
            <li key={feature.label}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-3.5 text-left"
              >
                <span className="text-[15px] font-medium text-foreground">
                  {feature.label}
                </span>
                <Plus
                  className={`size-4 shrink-0 text-brand transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="pb-4 pr-8 text-[14.5px] leading-[1.6] text-foreground/60">
                  {feature.description}
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function ServicesMaintenance() {
  return (
    <section
      id="vedlikehold-og-support"
      className="scroll-mt-24 border-[1.5px] border-transparent px-4 py-8 sm:px-6 sm:py-20 lg:px-10 lg:py-[90px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[550px] text-center">
          <span className="font-mono text-xs font-normal uppercase tracking-[0.12em] text-brand">
            Hosting, drift &amp; vedlikehold
          </span>
          <h2 className="mt-4 text-balance font-heading text-[clamp(32px,3.8vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
            Vedlikehold og support
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.6] text-foreground/70">
            Vi tar oss av alt det tekniske på ditt nettsted og gir deg rask hjelp når
            du trenger det.
          </p>
        </div>

        <div className="mt-12">
          <PricingCarousel
            initialIndex={Math.max(
              packages.findIndex((p) => p.highlighted),
              0,
            )}
            cards={packages.map((pkg) => ({
              key: pkg.name,
              node: <PackageCard pkg={pkg} borderColor="border-brand" />,
            }))}
          />
          <div className="mx-auto hidden max-w-[1060px] gap-[22px] sm:grid sm:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        <FeatureDetails />
      </div>
    </section>
  )
}
