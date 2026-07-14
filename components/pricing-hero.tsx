export function PricingHero() {
  return (
    <section className="relative mx-auto max-w-[820px] px-6 pb-10 pt-16 text-center sm:pt-24">
      <span
        aria-hidden
        className="absolute left-[6%] top-10 hidden text-[26px] leading-none text-brand/45 md:block"
      >
        ✳
      </span>
      <span
        aria-hidden
        className="absolute right-[6%] top-14 hidden text-[20px] leading-none text-foreground/35 md:block"
      >
        ✦
      </span>

      <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
        Priser
      </span>

      <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(40px,5.5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
        Nettsidepriser 2026
      </h1>

      <p className="mx-auto max-w-[560px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
        Med våre faste, lave priser ser du nøyaktig hva det koster med en ny
        nettside.
      </p>
    </section>
  )
}
