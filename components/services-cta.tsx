import { ArrowUpRight } from "lucide-react"

export function ServicesCta() {
  return (
    <section className="px-4 pb-[80px] pt-16 sm:px-6 lg:px-10 lg:pb-[100px]">
      <div className="relative mx-auto max-w-[1280px] px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-[620px] text-balance font-heading text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          Klar for å komme i gang?
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-pretty text-lg leading-relaxed text-foreground/70">
          Send oss en melding, så svarer vi i løpet av dagen. Uforpliktende,
          selvfølgelig.
        </p>

        {/* Repeated on six pages, and the bare phone number was ending up in
            the /nettside-priser snippet ("…Send oss en melding97 67 58 48"). */}
        <div data-nosnippet className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full border border-foreground/20 px-[30px] py-4 text-base font-normal text-foreground transition-colors duration-200 hover:bg-secondary"
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
