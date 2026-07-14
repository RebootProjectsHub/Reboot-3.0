import Image from "next/image"

export function WhoWeAre() {
  return (
    <section id="om-oss" className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink px-6 py-10 text-ink-foreground sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <span
            aria-hidden
            className="absolute left-10 top-[110px] hidden text-[34px] leading-none text-brand-foreground/20 lg:block"
          >
            ✳
          </span>
          <span
            aria-hidden
            className="absolute left-10 top-[160px] hidden text-[30px] leading-none text-brand-foreground/20 lg:block"
          >
            ✦
          </span>
          <span
            aria-hidden
            className="absolute right-10 top-10 z-10 hidden text-[36px] leading-none text-brand/70 md:block"
          >
            〜
          </span>

          <div className="relative grid gap-8 lg:min-h-[520px] lg:grid-cols-2 lg:items-stretch">
            <div className="flex max-w-xl flex-col">
              <Image
                src="/Reboot-cream.svg"
                alt="Reboot"
                width={622}
                height={197.71}
                className="h-7 w-auto self-start"
              />

              <div className="mt-10 lg:mt-auto">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-foreground/70">
                  Hvem er vi i Reboot?
                </p>
                <h2 className="mt-5 text-balance font-heading text-4xl font-light leading-[1.08] md:text-5xl">
                  Et lite team med stor lidenskap for å lage nettsider som
                  faktisk skaper resultater.
                </h2>
                <div className="mt-9">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center rounded-full border border-ink-foreground/30 px-7 py-3.5 text-base font-normal text-ink-foreground transition-colors hover:border-ink-foreground/50"
                  >
                    Kontakt oss
                  </a>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-0.75rem)] lg:aspect-auto lg:h-full">
              <Image
                src="/sable-flow-o-6GhmpELnw-unsplash.jpg"
                alt="Reboot-teamet i en idémyldring rundt en tavle med merkevareelementer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
