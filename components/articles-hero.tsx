export function ArticlesHero() {
  return (
    <section className="relative mx-auto max-w-[820px] px-6 pb-20 pt-16 text-center sm:pt-24">
      <span
        aria-hidden
        className="absolute left-[6%] top-10 hidden text-[30px] leading-none text-brand/40 md:block"
      >
        ✳
      </span>
      <span
        aria-hidden
        className="absolute right-[6%] top-14 hidden text-[24px] leading-none text-foreground/35 md:block"
      >
        ✦
      </span>

      <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
        Aktuelt
      </span>

      <h1 className="mt-[18px] mb-6 text-balance font-heading text-[clamp(40px,5vw,64px)] font-normal leading-[1.04] tracking-[-0.02em] text-foreground">
        Aktuelt fra Reboot
      </h1>

      <p className="mx-auto max-w-[560px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
        Artikler, innsikt og nyheter fra teamet. Her kan du lese om webdesign, synlighet, AI og alt
        som skjer hos oss i Nydalen.
      </p>
    </section>
  )
}
