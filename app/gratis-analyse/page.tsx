import Image from "next/image"
import { Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ClientLogosRow } from "@/components/client-logos"
import { FreeAnalysisForm } from "@/components/free-analysis-form"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Gratis analyse av nettsiden din",
  description:
    "Vi sjekker synligheten din i Google og AI-søk som ChatGPT, og sender deg konkrete forbedringer. Uforpliktende, svar innen to virkedager.",
  path: "/gratis-analyse",
})

const benefits = [
  {
    title: "Synlighet i AI-søk.",
    text: "Dukker bedriften din opp når noen spør ChatGPT, Google AI eller Copilot om det du selger?",
  },
  {
    title: "Teknisk helse.",
    text: "Hastighet, mobilvisning, sikkerhet og det Google faktisk ser når den leser siden din.",
  },
  {
    title: "Hva som bør gjøres først.",
    text: "Tre til fem konkrete tiltak, prioritert etter effekt.",
  },
]

const steps = [
  { title: "Fyll inn skjemaet.", text: "Det tar under ett minutt." },
  { title: "Vi analyserer nettsiden din med AI og kvalitetssikrer funnene.", text: "" },
  { title: "Du får analysen på e-post innen to virkedager.", text: "" },
]

const team = [
  { name: "Henrik", photo: "/henrik-dev3.jpg" },
  { name: "Maria", photo: "/Maria-2.webp" },
  { name: "Evgeniia", photo: "/Evgeniia-dev1.webp" },
]

// Same real quote as on /tjenester/seo-og-ai-svar.
const testimonial = {
  quote: "Vi dukker opp der vi skal nå og flere nye kunder har sagt at de fant oss via ChatGPT.",
  name: "Arild Ramberg",
  company: "Ability Media",
}

const h2 =
  "text-balance font-heading text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground md:text-[52px]"
const eyebrow = "font-mono text-xs uppercase tracking-[0.18em]"

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-2.5 rounded-full bg-foreground/10 ${className}`} />
}

export default function GratisAnalysePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero: centred title, then the form as a full-width dark box */}
      <section className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pb-20">
        <span
          aria-hidden
          className="absolute right-[6%] top-10 hidden text-[34px] leading-none text-brand/45 md:block"
        >
          ✳︎
        </span>
        <div className="mx-auto grid max-w-[1280px] gap-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <span className={`inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 ${eyebrow} text-foreground`}>
              ChatGPT
              <span className="size-2 rounded-full bg-brand" aria-hidden />
              Google
            </span>
            <h1 className="text-balance font-heading text-[clamp(40px,4.8vw,60px)] font-normal leading-none tracking-[-0.02em] text-foreground">
              Gratis analyse av nettsiden din
            </h1>
            <p className="max-w-[640px] text-pretty text-[18px] leading-[1.55] text-foreground/75">
              Vi sjekker hvordan bedriften din vises i Google og i AI-søk som
              ChatGPT, og sender deg en kort rapport med konkrete forbedringer.
              Uforpliktende, og du får svar innen to virkedager.
            </p>
          </div>

          <FreeAnalysisForm />
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-border px-4 py-9 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <p className={`${eyebrow} whitespace-nowrap text-foreground/60`}>Noen av kundene våre</p>
          <ClientLogosRow />
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative px-4 pb-20 pt-24 sm:px-6 lg:px-10 lg:pt-28">
        <span
          aria-hidden
          className="absolute right-[8%] top-14 hidden text-[30px] font-bold leading-none text-brand/20 md:block"
        >
          ✺
        </span>
        <figure className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <span aria-hidden className="h-12 font-heading text-[120px] italic leading-[.5] text-brand">
            "
          </span>
          <blockquote className="text-balance font-heading text-[clamp(24px,2.6vw,36px)] font-normal leading-[1.3] tracking-[-0.02em] text-foreground">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-7 grid justify-items-center gap-1">
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {testimonial.company}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[13px] text-brand">
              <Star className="size-3.5 fill-brand text-brand" aria-hidden />
              5,0 på Google
            </p>
          </figcaption>
        </figure>
      </section>

      {/* Dette får du: photo left, three items right */}
      <section className="px-4 pb-28 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Image
              src="/SEO-Reboot-1.webp"
              alt="Mobil som viser Googles AI-oversikt om Reboot"
              width={1600}
              height={841}
              className="aspect-[4/4.2] w-full rounded-[var(--radius)] object-cover object-[60%_50%]"
            />
            <p className={`mt-3.5 ${eyebrow} tracking-[0.1em] text-foreground/55`}>
              Googles AI-oversikt ved søk på Reboot
            </p>
          </div>
          <div>
            <h2 className={h2}>Dette får du</h2>
            <ol className="mt-10 grid">
              {benefits.map((b, i) => (
                <li
                  key={b.title}
                  className={`flex gap-6 border-t border-border py-7 ${i === benefits.length - 1 ? "border-b" : ""}`}
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm text-ink-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-normal leading-tight text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-foreground/75">{b.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Slik fungerer det: dark band */}
      <section className="rounded-t-[48px] bg-ink px-4 py-16 text-ink-foreground sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={`${h2} text-ink-foreground`}>Slik fungerer det</h2>
            <div className="flex items-center gap-3.5">
              <div className="flex">
                {team.map((m, i) => (
                  <Image
                    key={m.name}
                    src={m.photo}
                    alt={m.name}
                    width={48}
                    height={48}
                    className={`size-12 rounded-full border-[3px] border-ink object-cover ${i > 0 ? "-ml-3" : ""}`}
                  />
                ))}
              </div>
              <span className="max-w-[200px] text-sm leading-snug text-ink-foreground/70">
                Du får svar fra en av oss
              </span>
            </div>
          </div>

          <ol className="mt-12 grid lg:mt-16 lg:grid-cols-3 lg:gap-10">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative border-t border-ink-foreground/20 py-7 lg:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -top-1.5 left-0 hidden size-[11px] rounded-full bg-brand lg:block"
                />
                <span className="block font-mono text-5xl leading-none text-brand">0{i + 1}</span>
                <h3 className="mb-2 mt-5 font-heading text-[26px] font-normal leading-tight">
                  {s.title}
                </h3>
                {s.text && (
                  <p className="text-[17px] leading-relaxed text-ink-foreground/70">{s.text}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Helt uforpliktende + Hvem passer dette for, with a preview of the report */}
      <section className="px-4 pb-24 pt-20 sm:px-6 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className={h2}>Helt uforpliktende</h2>
            <p className="mt-6 max-w-[520px] text-pretty text-[19px] leading-[1.6] text-foreground/80">
              Analysen er gratis fordi det er den enkleste måten å vise hva vi
              kan. Noen velger å la oss gjøre jobben etterpå. Andre tar rapporten
              og fikser det selv. Begge deler er helt greit, og vi maser ikke.
            </p>
            <div className="mt-10 border-t border-border pt-7">
              <h2 className="font-heading text-[26px] font-normal leading-tight text-foreground">
                Hvem passer dette for
              </h2>
              <p className="mt-2.5 max-w-[520px] text-pretty text-[19px] leading-[1.6] text-foreground">
                Norske små og mellomstore bedrifter som har en nettside, men ikke
                er sikre på om den jobber for dem.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[520px] lg:justify-self-end">
            {/* Illustrative report preview: the content lines are placeholders */}
            <div className="grid gap-5 rounded-[var(--radius)] border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3 border-b border-foreground/10 pb-4">
                  <div>
                    <p className={`mb-1 ${eyebrow} tracking-[0.16em] text-foreground/55`}>
                      Slik ser rapporten ut
                    </p>
                    <p className="font-heading text-[22px] leading-tight text-foreground">
                      Analyse: www.dinbedrift.no
                    </p>
                  </div>
                  <Image
                    src="/Reboot3.svg"
                    alt="Reboot"
                    width={200}
                    height={52}
                    className="h-5 w-auto opacity-90"
                  />
                </div>

                <div className="grid gap-2.5">
                  <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <span className="text-[15px] font-medium">Synlighet i AI-søk</span>
                    <span className="rounded-full bg-background px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em]">
                      ChatGPT · Google AI · Copilot
                    </span>
                  </div>
                  <Skeleton className="w-[92%]" />
                  <Skeleton className="w-[64%]" />
                </div>

                <div className="grid gap-2.5">
                  <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <span className="text-[15px] font-medium">Teknisk helse</span>
                    <span className="rounded-full bg-background px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em]">
                      Hastighet · Mobil · Sikkerhet
                    </span>
                  </div>
                  <Skeleton className="w-[84%]" />
                  <Skeleton className="w-[48%]" />
                </div>

                <div className="grid gap-3 rounded-[18px] bg-background px-5 py-[18px]">
                  <span className="text-[15px] font-medium">Hva som bør gjøres først</span>
                  {["w-full", "max-w-[78%]", "max-w-[60%]"].map((w, i) => (
                    <div key={w} className="flex items-center gap-3">
                      <span className="inline-flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand font-mono text-[11px] text-[var(--white)]">
                        {i + 1}
                      </span>
                      <Skeleton className={`flex-1 ${w}`} />
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
