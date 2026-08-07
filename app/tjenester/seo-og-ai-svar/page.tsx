import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { FaqList } from "@/components/faq-list"
import { PricingCarousel } from "@/components/pricing-carousel"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "SEO og AI-svar i Oslo",
  description:
    "Reboot er et SEO-byrå i Nydalen, Oslo. Vi jobber med teknisk SEO og synlighet i AI-søk som ChatGPT og Gemini, i tillegg til Google. Fastpris og norsk support.",
  path: "/tjenester/seo-og-ai-svar",
})

const services = [
  {
    title: "Teknisk SEO og innholdsoptimalisering",
    body: "Hastighet, struktur og indeksering i orden og innhold spisset mot det kundene dine faktisk søker etter.",
  },
  {
    title: "Synlighet i AI-svar og chatbots",
    body: "Vi strukturerer innholdet slik at ChatGPT, Claude og Gemini finner, forstår og anbefaler bedriften din.",
  },
  {
    title: "Lokal synlighet og Google Bedriftsprofil",
    body: "Oppsett og vedlikehold av bedriftsprofilen, slik at dere vises på kart og i lokale søk.",
  },
  {
    title: "Måling og rapportering av resultater",
    body: "En kort månedlig rapport som viser hva som fungerer og hva vi gjør videre.",
  },
]

const whyAiPoints = [
  {
    title: "Folk googler mindre og spør mer",
    body: "Folk skriver ikke lenger søkeord. De stiller spørsmål og stoler på svaret de får.",
  },
  {
    title: "AI-svar siterer få kilder",
    body: "Der Google viser ti blå lenker, trekker et AI-svar frem to eller tre. Vi hjelper deg å bli én av dem.",
  },
  {
    title: "Godt SEO-arbeid teller dobbelt",
    body: "Riktig grunnarbeid løfter dere i både Google-søk og AI-svar.",
  },
]

const packages = [
  {
    name: "Light",
    price: "4 900",
    body: "Bli mer synlig i både Google og AI-svar.",
    features: ["Google Bedriftsprofil", "Månedlig rapport", "Synlighet i AI-svar", "Innholdsproduksjon"],
  },
  {
    name: "Medium",
    price: "11 900",
    body: "Se resultater raskere og bli værende i toppen.",
    features: [
      "Alt i Light",
      "Innholdsoptimalisering",
      "Produksjon av artikler og fagstoff",
      "Nye landingssider",
    ],
    highlighted: true,
  },
  {
    name: "Komplett",
    price: "19 900",
    body: "Flere veier inn til nettsiden, ikke bare søk.",
    features: [
      "Alt i Medium",
      "Større SEO-team",
      "Utvidet innholdsproduksjon",
      "Utvidet nettverk for trafikk",
    ],
  },
]

type Package = (typeof packages)[number]

function SeoPackageCard({
  pkg,
  borderColor,
}: {
  pkg: Package
  /** Overrides the resting border color class. Defaults to the ordinary
   *  border; the mobile slider passes its own constant brand color instead. */
  borderColor?: string
}) {
  const border = borderColor ?? "border-border"
  return (
    <div
      className={`group relative flex h-full flex-col rounded-[26px] border-[1.5px] bg-card px-6 pb-8 pt-[28px] transition-colors duration-200 hover:border-brand sm:px-8 sm:pt-[34px] ${border}`}
    >
      {pkg.highlighted && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          Mest valgt
        </span>
      )}

      <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand">
        {pkg.name}
      </span>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-[13px] text-foreground/60 sm:text-[14.5px]">kr</span>
        <span className="whitespace-nowrap font-heading text-[32px] font-normal leading-none text-foreground sm:text-[46px]">
          {pkg.price}
        </span>
        <span className="text-[13px] text-foreground/60 sm:text-[14.5px]">/mnd</span>
      </div>
      <p className="mt-3 text-[14.5px] leading-[1.5] text-foreground/70">{pkg.body}</p>

      <ul className="mt-6 space-y-2.5 border-t border-border pt-6 sm:mt-7 sm:space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 sm:gap-3">
            <Check className="size-[15px] shrink-0 text-brand sm:size-[17px]" strokeWidth={2.5} />
            <span className="text-[13.5px] text-foreground/85 sm:text-[14.5px]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex-1" />
      <a
        href="/kontakt"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-border bg-foreground/5 px-6 py-3.5 text-base font-normal text-foreground transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground"
      >
        Kom i gang
      </a>
    </div>
  )
}

const faqItems = [
  {
    question: "Hvor raskt ser vi resultater?",
    answer: (
      <p>
        SEO er langsiktig arbeid. De fleste ser tydelig bevegelse etter tre
        til seks måneder, og lokale søk og bedriftsprofil gir ofte effekt
        raskere.
      </p>
    ),
    plainAnswer:
      "SEO er langsiktig arbeid. De fleste ser tydelig bevegelse etter tre til seks måneder, og lokale søk og bedriftsprofil gir ofte effekt raskere.",
  },
  {
    question: "Hva er synlighet i AI-svar?",
    answer: (
      <p>
        Når noen spør ChatGPT, Claude eller Gemini om anbefalinger, henter
        modellene svar fra nettsider de forstår og stoler på. Vi jobber med
        struktur, innhold og omtale slik at bedriften din blir en av kildene
        som trekkes frem.
      </p>
    ),
    plainAnswer:
      "Når noen spør ChatGPT, Claude eller Gemini om anbefalinger, henter modellene svar fra nettsider de forstår og stoler på. Vi jobber med struktur, innhold og omtale slik at bedriften din blir en av kildene som trekkes frem.",
  },
  {
    question: "Er vi bundet til en lang avtale?",
    answer: (
      <p>
        Nei. Alle pakker er løpende med tre måneders oppsigelse. Vi vil at
        dere blir fordi det virker, ikke fordi kontrakten sier det.
      </p>
    ),
    plainAnswer:
      "Nei. Alle pakker er løpende med tre måneders oppsigelse. Vi vil at dere blir fordi det virker, ikke fordi kontrakten sier det.",
  },
  {
    question: "Hva inneholder den gratis synlighetsanalysen?",
    answer: (
      <p>
        Vi sjekker hvordan dere ligger an i Google-søk, lokale søk og
        AI-svar og sender en kort rapport med de tre viktigste grepene. Helt
        uforpliktende.
      </p>
    ),
    plainAnswer:
      "Vi sjekker hvordan dere ligger an i Google-søk, lokale søk og AI-svar, og sender en kort rapport med de tre viktigste grepene. Helt uforpliktende.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.plainAnswer },
  })),
}

export default function SeoOgAiSvarPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Tjenester", href: "/tjenester" }, { label: "SEO og AI-søk" }]} />

      {/* Hero */}
      <section className="relative mx-auto max-w-[820px] px-6 pb-14 pt-16 text-center sm:pb-16 sm:pt-24">
        <span
          aria-hidden
          className="absolute left-[6%] top-10 hidden text-[26px] leading-none text-brand/45 md:block"
        >
          ✳︎
        </span>
        <span
          aria-hidden
          className="absolute right-[6%] top-14 hidden text-[20px] leading-none text-foreground/35 md:block"
        >
          ✦︎
        </span>

        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Synlighet &amp; søk
        </span>

        <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          SEO og AI-søk
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          God rangering på Google er ikke lenger nok. Vi sørger for at dere
          også dukker opp når folk spør ChatGPT, Claude og Gemini.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Få gratis synlighetsanalyse
          </a>
        </div>
      </section>

      {/* Editorial intro with stats */}
      <section className="px-4 pt-7 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink px-8 py-12 text-ink-foreground sm:px-12 sm:py-14 lg:px-16">
            <span
              aria-hidden
              className="absolute right-8 top-8 hidden text-[30px] leading-none text-ink-foreground/20 lg:block"
            >
              ✦︎
            </span>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <h2 className="text-balance font-heading text-[clamp(26px,3vw,38px)] font-normal leading-[1.15] tracking-[-0.02em] text-ink-foreground">
                Bli funnet der kundene faktisk leter
              </h2>
              <div>
                <p className="text-[17px] leading-[1.7] text-ink-foreground/80">
                  Søk er i endring. Kundene dine googler fortsatt, men stadig
                  flere spør ChatGPT, Claude eller Gemini rett ut hvem de bør
                  velge.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-ink-foreground/80">
                  Vi jobber med begge deler samtidig: teknisk SEO og innhold
                  som løfter dere på Google, og struktur som gjør at
                  AI-modellene forstår og anbefaler bedriften din.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-8 border-t border-ink-foreground/15 pt-10 sm:grid-cols-3">
              {whyAiPoints.map((point, i) => (
                <div key={point.title}>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-ink-foreground/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-medium text-ink-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-foreground/70">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbered services list */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
            Spesialister på synlighet
          </span>
          <h2 className="mt-4 max-w-[720px] text-balance font-heading text-[clamp(28px,3.4vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
            SEO-tjenester fra Reboot
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] lg:sticky lg:top-24">
              <Image
                src="/team-whiteboard.jpg"
                alt="Reboot-teamet planlegger synlighetsarbeid ved et whiteboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <span
                aria-hidden
                className="absolute -bottom-3 -right-3 hidden text-[46px] leading-none text-brand md:block"
              >
                ✦︎
              </span>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {services.map((service, i) => (
                <li key={service.title} className="flex gap-6 py-7 sm:gap-10">
                  <span className="font-mono text-xl font-normal leading-[1.3] text-brand sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-[20px] font-normal leading-[1.25] text-foreground sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[15.5px] leading-[1.65] text-foreground/70">
                      {service.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
            Synlighet &amp; vekst
          </span>
          <h2 className="mt-4 text-balance font-heading text-[clamp(28px,3.4vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
            Velg pakken som passer dere
          </h2>
          <p className="mt-3 max-w-[56ch] text-[17px] leading-[1.6] text-foreground/70">
            Vi tar oss av synlighet i både Google og AI-svar. Valg av pakke avgjør hvor raskt dere ser resultater og hvor godt posisjonene sitter over tid.
          </p>

          <div className="mt-10">
            <PricingCarousel
              initialIndex={Math.max(
                packages.findIndex((p) => p.highlighted),
                0,
              )}
              cards={packages.map((pkg) => ({
                key: pkg.name,
                node: <SeoPackageCard pkg={pkg} borderColor="border-brand" />,
              }))}
            />
            <div className="hidden gap-[22px] sm:grid sm:grid-cols-3">
              {packages.map((pkg) => (
                <SeoPackageCard key={pkg.name} pkg={pkg} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referanse */}
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-[60px]">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
              <Image
                src="/SEO-Reboot-1.jpg"
                alt="Reboot-teamet i et møte rundt et bord"
                width={1200}
                height={900}
                className="size-full object-cover"
              />
            </div>
            <span
              aria-hidden
              className="absolute -left-2 -top-2 hidden text-[40px] leading-none text-foreground/50 md:block"
            >
              ✳︎
            </span>
          </div>
          <div>
            <blockquote className="text-balance font-heading text-[clamp(22px,2.6vw,28px)] leading-[1.35] tracking-[-0.01em] text-foreground">
              «Vi har nå veldig gode posisjoner på relevante søk og
              nye kunder forteller at de fant oss via ChatGPT.»
            </blockquote>
            <p className="mt-6 font-medium text-foreground">
              Christina Håland
            </p>
            <p className="mt-0.5 text-[14.5px] text-foreground/60">Ved På Døra</p>
            <div className="mt-6">
              <Link
                href="/referanser"
                className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
              >
                Se referanser
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pt-7 pb-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-center font-heading text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
            Ofte stilte spørsmål om SEO og AI-svar
          </h2>
          <div className="mt-8">
            <FaqList
              items={faqItems.map(({ question, answer }) => ({ question, answer }))}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-[80px] pt-16 sm:px-6 lg:px-10 lg:pb-[100px]">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] border-[1.5px] border-border bg-[#fcf2ec] px-6 py-16 text-center sm:px-12">
          <span
            aria-hidden
            className="absolute left-[8%] top-10 hidden text-[38px] leading-none text-brand/40 lg:block"
          >
            ✳︎
          </span>
          <span
            aria-hidden
            className="absolute bottom-8 right-[8%] hidden text-[30px] leading-none text-foreground/35 lg:block"
          >
            ✦︎
          </span>

          <h2 className="mx-auto max-w-[620px] text-balance font-heading text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
            Klar for å bli mer synlig?
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
              Få gratis synlighetsanalyse
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

      <SiteFooter />
    </main>
  )
}
