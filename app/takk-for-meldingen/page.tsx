import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Takk for meldingen",
  robots: { index: false },
}

export default function TakkForMeldingenPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="relative mx-auto flex w-full max-w-[820px] flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.18em] text-brand">
          Takk!
        </span>
        <h1 className="mt-4 mb-6 text-balance font-heading text-[clamp(36px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          Meldingen er sendt
        </h1>
        <p className="mx-auto mb-9 max-w-[520px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Takk for at du tok kontakt. Vi svarer deg vanligvis i løpet av dagen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Til forsiden
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
