import { ArrowUpRight } from "lucide-react"

export function AboutCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] border-[1.5px] border-border bg-[#fcf2ec] px-6 py-16 text-center sm:px-12">
        <span
          aria-hidden
          className="absolute left-[8%] top-10 hidden text-[38px] leading-none text-brand/40 lg:block"
        >
          ✺
        </span>
        <span
          aria-hidden
          className="absolute bottom-8 right-[8%] hidden text-[40px] leading-none text-foreground/35 lg:block"
        >
          〜
        </span>

        <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
          Ta kontakt
        </span>
        <h2 className="mx-auto mt-4 max-w-[620px] text-balance font-heading text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          Vi hører gjerne fra deg
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-pretty text-lg leading-relaxed text-foreground/70">
          Enten du har et konkret prosjekt eller bare en idé, send oss en melding, så
          svarer vi i løpet av dagen.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Send oss en melding
          </a>
          <a
            href="tel:+4797675848"
            className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
          >
            97 67 58 48
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
