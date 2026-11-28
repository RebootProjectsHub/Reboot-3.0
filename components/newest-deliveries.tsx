"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Delivery = {
  name: string
  released: string
  url: string
  domain: string
  image: string
}

// Newest first. Screenshots are the same 5:3 captures used on /referanser.
const deliveries: Delivery[] = [
  {
    name: "Mad Goats",
    released: "November 2026",
    url: "https://madgoats.no/",
    domain: "madgoats.no",
    image: "/referanser/madgoats.webp",
  },
  {
    name: "Frysja 33",
    released: "November 2026",
    url: "https://frysja33.no/",
    domain: "frysja33.no",
    image: "/referanser/frysja-33.webp",
  },
  {
    name: "Kaffehuset",
    released: "Oktober 2026",
    url: "https://www.kaffehusetas.no/",
    domain: "kaffehusetas.no",
    image: "/referanser/kaffehuset.webp",
  },
]

export function NewestDeliveries() {
  const [active, setActive] = useState(0)
  const current = deliveries[active]

  return (
    <section id="nyeste-leveranser" className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 rounded-[var(--radius)] bg-ink px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14 lg:p-12">
          <div className="flex flex-col justify-between gap-10">
            <h2 className="text-balance font-heading text-4xl font-light leading-[1.08] text-ink-foreground md:text-5xl">
              Våre 3 nyeste leveranser
            </h2>

            <ul className="flex flex-col border-b border-ink-foreground/25">
              {deliveries.map((d, i) => {
                const isActive = i === active
                return (
                  <li key={d.name} className="border-t border-ink-foreground/25">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center gap-5 py-5 text-left transition-colors ${
                        isActive ? "text-ink-foreground" : "text-ink-foreground/70"
                      }`}
                    >
                      <span className="font-mono text-xs tracking-[0.14em] text-ink-foreground/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-1 flex-col gap-1">
                        <span className="font-heading text-3xl leading-[1.1]">{d.name}</span>
                        <span className="text-[15px] leading-snug text-ink-foreground/70">
                          {d.released}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`size-3 shrink-0 rounded-full border border-ink-foreground transition-colors ${
                          isActive ? "bg-brand" : "bg-transparent"
                        }`}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <div className="overflow-hidden rounded-[14px] bg-[#5c2a36]">
              <div className="flex h-[34px] items-center gap-[7px] px-3.5">
                <span className="size-2 rounded-full bg-ink-foreground/35" />
                <span className="size-2 rounded-full bg-ink-foreground/35" />
                <span className="size-2 rounded-full bg-ink-foreground/35" />
                <span className="ml-2.5 font-mono text-[11px] text-ink-foreground/75">
                  {current.domain}
                </span>
              </div>
              <div className="relative aspect-[5/3]">
                {deliveries.map((d, i) => (
                  <Image
                    key={d.name}
                    src={d.image}
                    alt={`Forsiden til ${d.domain}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`object-cover object-top transition-opacity duration-300 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={i !== active}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-ink-foreground/30 px-[22px] py-2.5 text-[15px] text-ink-foreground transition-colors hover:border-ink-foreground/50"
              >
                Besøk nettsiden
              </a>
              <a
                href="/referanser"
                className="inline-flex min-h-11 items-center gap-1.5 text-[15px] text-ink-foreground transition-colors hover:text-ink-foreground/70"
              >
                Se flere referanser
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
