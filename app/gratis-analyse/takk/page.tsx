import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Takk for forespørselen",
  robots: { index: false },
}

const team = [
  { name: "Henrik", photo: "/henrik-dev3.jpg" },
  { name: "Maria", photo: "/Maria-2.webp" },
  { name: "Evgeniia", photo: "/Evgeniia-dev1.webp" },
]

export default function GratisAnalyseTakkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="relative mx-auto flex w-full max-w-[820px] flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <span
          aria-hidden
          className="absolute left-[5%] top-14 hidden text-[34px] leading-none text-brand/45 md:block"
        >
          ✳︎
        </span>
        <span
          aria-hidden
          className="absolute right-[7%] top-[120px] hidden text-[26px] leading-none text-foreground/30 md:block"
        >
          ✦︎
        </span>

        <span className="inline-flex size-[72px] items-center justify-center rounded-full bg-brand text-[var(--white)]">
          <Check className="size-8" strokeWidth={2.4} aria-hidden />
        </span>
        <h1 className="mb-5 mt-7 font-heading text-[clamp(64px,9vw,96px)] font-normal leading-[.95] tracking-[-0.02em] text-foreground">
          Takk!
        </h1>
        <p className="mx-auto max-w-[520px] text-pretty text-[20px] leading-[1.55] text-foreground/70">
          Vi har mottatt forespørselen og sender analysen til deg innen to
          virkedager.
        </p>

        <div className="mt-12 flex w-full max-w-[560px] flex-col items-start gap-4 rounded-[var(--radius)] border border-border bg-card px-6 py-6 text-left sm:flex-row sm:items-center sm:gap-5 sm:px-8">
          <div className="flex shrink-0">
            {team.map((m, i) => (
              <Image
                key={m.name}
                src={m.photo}
                alt={m.name}
                width={48}
                height={48}
                className={`size-12 rounded-full border-[3px] border-card object-cover ${i > 0 ? "-ml-3" : ""}`}
              />
            ))}
          </div>
          <div>
            <p className="font-medium text-foreground">Du får analysen på e-post fra en av oss.</p>
            <p className="mt-1 text-sm text-foreground/60">
              Sjekk søppelposten om den ikke dukker opp.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex h-14 items-center gap-2.5 rounded-full bg-ink px-[30px] text-base text-ink-foreground transition-colors duration-200 hover:bg-brand hover:text-[var(--white)]"
        >
          <ArrowLeft className="size-[18px]" aria-hidden />
          Til forsiden
        </Link>
      </section>
      <SiteFooter />
    </main>
  )
}
