export function PricingVisibilityCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-[90px]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[var(--radius)] border-[1.5px] border-border bg-[#fcf2ec] px-6 py-12 sm:px-12 lg:px-[76px] lg:py-[72px]">
        <span
          aria-hidden
          className="absolute right-12 top-[34px] hidden text-[34px] leading-none text-brand/50 lg:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute bottom-[30px] left-11 hidden text-[22px] leading-none text-brand/35 lg:block"
        >
          ✦
        </span>

        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand">
              Synlighet &amp; vekst
            </span>
            <h2 className="text-balance font-heading text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
              Nettsiden er klar. Blir den funnet?
            </h2>
            <p className="max-w-[46ch] text-pretty text-[19px] leading-[1.6] text-foreground/70">
              Vi sørger for at dere dukker opp i Google-søk og i AI-svar fra ChatGPT,
              Claude og Gemini. SEO-pakker med fastpris fra 4 900,- per måned.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-7 lg:justify-end">
            <a
              href="/tjenester/seo-og-ai-svar"
              className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
            >
              Velg pakken som passer dere
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
