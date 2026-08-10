export function PricingVisibilityCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-[90px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] bg-ink px-6 py-12 text-ink-foreground sm:px-12 lg:px-[76px] lg:py-[72px]">
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
              SEO / AI-svar
            </span>
            <h2 className="text-balance font-heading text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.1] tracking-[-0.02em]">
              Synlighet og vekst
            </h2>
            <p className="max-w-[52ch] text-pretty text-[19px] leading-[1.6] text-ink-foreground/80">
              Kundene deres søker ikke bare på Google lenger. Vi hjelper dere å bli
              synlige der de faktisk leter, enten det er i søkeresultatene eller i
              svar fra ChatGPT, Claude og Gemini.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-7 lg:justify-end">
            <a
              href="/tjenester/seo-og-ai-svar#priser"
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
