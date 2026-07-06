import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function Articles() {
  return (
    <section id="aktuelt" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Aktuelt fra Reboot
          </h2>
          <a
            href="#aktuelt"
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary"
          >
            Se flere artikler
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card with image */}
          <article className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/work-cro.jpg"
                alt="Konverteringsoptimalisering"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">Faglig</span>
              <h3 className="mt-3 font-heading text-lg font-normal leading-snug text-foreground">
                Slik øker du konverteringen på nettsiden med CRO
              </h3>
            </div>
          </article>

          {/* Burgundy solid card */}
          <article className="group flex flex-col justify-between rounded-[var(--radius)] bg-ink p-7 text-ink-foreground transition-transform hover:-translate-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-foreground/70">Faglig</span>
            <h3 className="mt-10 font-heading text-2xl font-normal leading-snug">
              Tilgjengelighet er ikke et tillegg – det er et krav
            </h3>
            <ArrowUpRight className="mt-6 size-6 text-ink-foreground/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </article>

          {/* Coral trail solid card */}
          <article className="group flex flex-col justify-between rounded-[var(--radius)] bg-brand/25 p-7 text-foreground transition-transform hover:-translate-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">Faglig</span>
            <h3 className="mt-10 font-heading text-2xl font-normal leading-snug">
              Hva skjer med UX når AI lager innholdet?
            </h3>
            <ArrowUpRight className="mt-6 size-6 text-foreground/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </article>

          {/* Coral solid card */}
          <article className="group flex flex-col justify-between rounded-[var(--radius)] bg-brand p-7 text-brand-foreground transition-transform hover:-translate-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground/80">Aktuelt</span>
            <h3 className="mt-10 font-heading text-2xl font-normal leading-snug">
              Synlighet i AI-søk: dette må du vite i 2026
            </h3>
            <ArrowUpRight className="mt-6 size-6 text-brand-foreground/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </article>
        </div>
      </div>
    </section>
  )
}
