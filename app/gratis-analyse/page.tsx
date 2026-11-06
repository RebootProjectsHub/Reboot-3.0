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
    text: "Dukker bedriften din opp når noen spør ChatGPT, Google AI eller Perplexity om det du selger?",
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
  {
    title: "Vi går gjennom nettsiden din manuelt.",
    text: "Ingen automatisk rapport.",
  },
  { title: "Du får analysen på e-post innen to virkedager.", text: "" },
]

// Same real quote as on /tjenester/seo-og-ai-svar.
const testimonial = {
  quote:
    "Vi dukker opp der vi skal nå og flere nye kunder har sagt at de fant oss via ChatGPT.",
  name: "Arild Ramberg",
  company: "Ability Media",
}

const eyebrow =
  "font-mono text-xs uppercase tracking-[0.18em] text-foreground/70"
const h2 =
  "text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl"

export default function GratisAnalysePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero: text left, form right; stacked on mobile with the form under the intro. */}
      <section className="relative px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-10 lg:pb-20">
        <span
          aria-hidden
          className="absolute left-[4%] top-10 hidden text-[30px] leading-none text-brand/40 md:block"
        >
          ✳︎
        </span>
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:pt-6">
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
              Gratis analyse
            </span>
            <h1 className="mt-[18px] mb-6 text-balance font-heading text-[clamp(40px,5vw,64px)] font-normal leading-[1.04] tracking-[-0.02em] text-foreground">
              Gratis analyse av nettsiden din
            </h1>
            <p className="text-pretty text-[19px] leading-[1.6] text-foreground/70">
              Vi sjekker hvordan bedriften din vises i Google og i AI-søk som
              ChatGPT, og sender deg en kort rapport med konkrete forbedringer.
              Uforpliktende, og du får svar innen to virkedager.
            </p>
          </div>
          <FreeAnalysisForm />
        </div>
      </section>

      {/* Client logos */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <p className={`mb-6 text-center ${eyebrow}`}>Noen av kundene våre</p>
          <ClientLogosRow />
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <figure className="mx-auto flex max-w-[820px] flex-col rounded-[var(--radius)] border border-border bg-card p-7 sm:p-9">
          <div className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-brand text-brand" />
            ))}
          </div>
          <blockquote className="mt-4 text-pretty text-xl leading-relaxed text-foreground">
            "{testimonial.quote}"
          </blockquote>
          <figcaption className="mt-6 border-t border-border pt-4">
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </figcaption>
        </figure>
      </section>

      {/* Dette får du */}
      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className={h2}>Dette får du</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-[var(--radius)] border border-border bg-card p-7"
              >
                <h3 className="font-heading text-2xl font-normal leading-tight text-foreground">
                  {b.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-foreground/75">
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className={h2}>Slik fungerer det</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-border pt-6">
                <span className="font-mono text-sm text-brand">0{i + 1}</span>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground">
                  {s.title}
                  {s.text && (
                    <span className="text-foreground/70"> {s.text}</span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Hvorfor gratis + Hvem passer dette for */}
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className={h2}>Hvorfor gratis?</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              Fordi det er den enkleste måten å vise hva vi kan. Noen velger å la
              oss gjøre jobben etterpå. Andre tar rapporten og fikser det selv.
              Begge deler er helt greit, og vi maser ikke.
            </p>
          </div>
          <div className="max-w-xl">
            <h2 className={h2}>Hvem passer dette for</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
              Norske små og mellomstore bedrifter som har en nettside, men ikke
              er sikre på om den jobber for dem.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
