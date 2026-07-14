export function AboutHero() {
  return (
    <section className="relative mx-auto max-w-[820px] px-6 py-14 text-center sm:pt-24 sm:pb-16">
      <span
        aria-hidden
        className="absolute left-[6%] top-10 hidden text-[38px] leading-none text-brand/40 md:block"
      >
        ✳
      </span>
      <span
        aria-hidden
        className="absolute bottom-6 right-[6%] hidden text-[34px] leading-none text-foreground/35 md:block"
      >
        ✦
      </span>

      <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
        Om oss
      </span>

      <h1 className="mt-[18px] mb-6 text-balance font-heading text-[clamp(40px,5vw,64px)] font-normal leading-[1.04] tracking-[-0.02em] text-foreground">
        Bli kjent med Reboot
      </h1>

      <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
        Vi er et faglig sterkt team i Nydalen, Oslo som designer, utvikler og drifter nettsider.
      </p>
    </section>
  )
}
