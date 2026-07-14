import Image from "next/image"

const stats = [
  { value: "5/5", suffix: "★", label: "På Google" },
  { value: "80+", label: "Leverte prosjekter" },
  { value: "1:1", label: "Kundeoppfølging" },
]

export function AboutTeamBand() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink text-ink-foreground">
          <span
            aria-hidden
            className="absolute left-8 top-8 hidden text-[34px] leading-none text-ink-foreground/20 lg:block"
          >
            ✦
          </span>
          <span
            aria-hidden
            className="absolute bottom-10 right-10 hidden text-[30px] leading-none text-ink-foreground/20 lg:block"
          >
            ✳
          </span>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-0 lg:items-stretch">
            <div className="flex min-w-0 flex-col justify-center py-10 pl-8 pr-6 sm:py-12 sm:pl-14 sm:pr-10 lg:py-24 lg:pl-20 lg:pr-12">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
                Hvem er vi i Reboot?
              </span>
              <h2 className="mt-5 text-balance font-heading text-[clamp(30px,3.6vw,44px)] font-normal leading-[1.1] tracking-[-0.02em]">
                Ekte folk, ekte kontakt. 
              </h2>
              <p className="mt-6 text-[17px] leading-[1.65] text-ink-foreground/80">
                Hos oss får du direkte kontakt med de som lager og drifter nettsiden din. Ingen mellomledd, ingen chatbot, ingen kø.
              </p>
              <p className="mt-4 text-[17px] leading-[1.65] text-ink-foreground/80">
Vi bruker moderne teknologi der det faktisk gir mening, men det personlige tar vi oss av selv. Vi holder til i Nydalen i Oslo og hjelper deg med alt fra webdesign til SEO.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-24 rounded-2xl px-4 py-3"
                  >
                    <div className="flex items-baseline gap-1 font-heading text-2xl font-normal leading-none">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-sm text-brand">{stat.suffix}</span>
                      )}
                    </div>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-foreground/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src="/sable-flow-o-6GhmpELnw-unsplash2.jpg"
                alt="Reboot-teamet i en idémyldring rundt en tavle"
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
