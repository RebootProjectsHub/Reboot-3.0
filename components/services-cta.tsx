import { ArrowUpRight } from "lucide-react"

export function ServicesCta() {
  return (
    <section className="px-4 py-[80px] sm:px-6 lg:px-10 lg:pb-[100px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] border-[1.5px] border-border bg-[#fcf2ec] px-6 py-16 text-center sm:px-12">
        <span
          aria-hidden
          className="absolute left-[8%] top-10 hidden text-[38px] leading-none text-brand/40 lg:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute bottom-8 right-[8%] hidden text-[30px] leading-none text-foreground/35 lg:block"
        >
          ✦
        </span>

        <h2 className="mx-auto max-w-[620px] text-balance font-heading text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          Klar for å komme i gang?
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-pretty text-lg leading-relaxed text-foreground/70">
          Send oss en melding, så svarer vi i løpet av dagen. Uforpliktende,
          selvfølgelig.
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
