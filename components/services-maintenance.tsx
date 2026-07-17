"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Minus, Plus } from "lucide-react"

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

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-[26px] border-[1.5px] bg-card px-6 pb-8 pt-[28px] transition-colors duration-200 hover:border-brand sm:px-8 sm:pt-[34px] ${
        pkg.highlighted ? "border-brand" : "border-border"
      }`}
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
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-normal transition-colors duration-200 ${
          pkg.highlighted
            ? "bg-ink text-ink-foreground hover:bg-brand"
            : "border border-border bg-transparent text-foreground group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground"
        }`}
      >
        Kom i gang
      </a>
    </div>
  )
}

// Mobile carousel: horizontal scroll-snap with the centered card shown at
// full size and its neighbors scaled down, so whichever package is centered
// (not necessarily the "highlighted" one) always reads as the focal card.
function PricingSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const initialIndex = Math.max(
    packages.findIndex((p) => p.highlighted),
    0,
  )
  const [centerIndex, setCenterIndex] = useState(initialIndex)

  useEffect(() => {
    const container = scrollRef.current
    const card = cardRefs.current[initialIndex]
    if (!container || !card) return
    container.scrollLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2
    // Run once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    let raf = 0
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const containerCenter = container.scrollLeft + container.clientWidth / 2
        let closest = 0
        let closestDist = Infinity
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const cardCenter = card.offsetLeft + card.offsetWidth / 2
          const dist = Math.abs(cardCenter - containerCenter)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setCenterIndex(closest)
      })
    }
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      container.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  function scrollToIndex(i: number) {
    const container = scrollRef.current
    const card = cardRefs.current[i]
    if (!container || !card) return
    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <div className="sm:hidden">
      <div
        ref={scrollRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[8%] pb-2 pt-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="w-[84%] shrink-0 snap-center"
          >
            <div
              className={`origin-center transition-transform duration-300 ${
                i === centerIndex ? "scale-100" : "scale-90"
              }`}
            >
              <PackageCard pkg={pkg} />
            </div>
          </div>
        ))}
      </div>

      {/* Indicator pills echo the logo's underline (Progress.svg): a long
          solid brand bar for the active card, shorter faded bars for the
          rest, animating between the two states. */}
      <div className="mt-5 flex items-center justify-center gap-[3px]">
        {packages.map((pkg, i) => (
          <button
            key={pkg.name}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Vis ${pkg.name}`}
            aria-current={i === centerIndex}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
              i === centerIndex ? "w-8 bg-brand" : "w-4 bg-brand/25"
            }`}
          />
        ))}
      </div>
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
      className="scroll-mt-24 border-[1.5px] border-transparent px-4 py-[90px] sm:px-6 lg:px-10"
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
          <PricingSlider />
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
