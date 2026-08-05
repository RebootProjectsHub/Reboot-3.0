import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesCta } from "@/components/services-cta"
import { FaqList } from "@/components/faq-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Skreddersydd nettside i Oslo",
  description:
    "Reboot designer og bygger skreddersydde nettsider for norske bedrifter i Nydalen, Oslo. Raske, moderne sider bygget for å konvertere, med fastpris og norsk support.",
  path: "/tjenester/skreddersydd-nettside",
})

const faqItems = [
  {
    question: "Hva koster en ny nettside?",
    answer: (
      <p>
        Det avhenger av omfang, antall sider og funksjonaliteten dere trenger.
        Vi jobber alltid med fastpris, så du vet nøyaktig hva det koster før vi
        starter. De skreddersydde nettsidene våre har en fastpris fra 29 900.
        Ta <a href="/kontakt">kontakt</a> for et konkret tilbud, eller se{" "}
        <a href="/nettside-priser">prisene våre</a> for en pekepinn.
      </p>
    ),
    plainAnswer:
      "Det avhenger av omfang, antall sider og funksjonaliteten dere trenger. Vi jobber alltid med fastpris, så du vet nøyaktig hva det koster før vi starter. De skreddersydde nettsidene våre har en fastpris fra 29 900. Ta kontakt for et konkret tilbud.",
  },
  {
    question: "Hvor lang tid tar det å lage en nettside?",
    answer: (
      <p>
        De fleste prosjektene er ferdige i løpet av noen uker, avhengig av
        omfang og hvor raskt vi får innhold og tilbakemeldinger fra dere. Vi
        avtaler en tidsplan før vi starter, så du vet hva du kan forvente.
      </p>
    ),
    plainAnswer:
      "De fleste prosjektene er ferdige i løpet av noen uker, avhengig av omfang og hvor raskt vi får innhold og tilbakemeldinger fra dere. Vi avtaler en tidsplan før vi starter, så du vet hva du kan forvente.",
  },
  {
    question: "Kan dere redesigne den eksisterende siden i stedet for å bygge ny?",
    answer: (
      <p>
        Ja. Har du en side som funker, men ser datert ut eller er tung å
        drifte, fornyer vi den fra kildekoden i bunn til det visuelle på
        toppen. Ofte beholder vi det som fungerer og bygger om resten, så du
        slipper å starte helt på nytt.
      </p>
    ),
    plainAnswer:
      "Ja. Har du en side som funker, men ser datert ut eller er tung å drifte, fornyer vi den fra kildekoden i bunn til det visuelle på toppen. Ofte beholder vi det som fungerer og bygger om resten, så du slipper å starte helt på nytt.",
  },
  {
    question: "Hvilke plattformer bygger dere på?",
    answer: (
      <p>
        Vi bygger skreddersydde nettsider i moderne kode, og jobber også med{" "}
        <Link href="/tjenester/wordpress">WordPress</Link> og{" "}
        <Link href="/tjenester/shopify">Shopify</Link> når det passer bedre
        for behovet deres. Vi hjelper dere å velge riktig plattform før vi
        starter.
      </p>
    ),
    plainAnswer:
      "Vi bygger skreddersydde nettsider i moderne kode, og jobber også med WordPress og Shopify når det passer bedre for behovet deres. Vi hjelper dere å velge riktig plattform før vi starter.",
  },
  {
    question: "Kan jeg oppdatere innholdet selv etterpå?",
    answer: (
      <p>
        Ja. Du får redigeringstilgang og kan endre tekst, bilder og nyheter
        selv, uten å gå via oss for hver lille justering. Vil du heller at vi
        tar oss av det, ordner vi det gjennom en støtteavtale.
      </p>
    ),
    plainAnswer:
      "Ja. Du får redigeringstilgang og kan endre tekst, bilder og nyheter selv, uten å gå via oss for hver lille justering. Vil du heller at vi tar oss av det, ordner vi det gjennom en støtteavtale.",
  },
  {
    question: "Hjelper dere med drift etter lansering?",
    answer: (
      <p>
        Ja, de fleste kundene våre fortsetter med en{" "}
        <a href="/tjenester#vedlikehold-og-support">støtteavtale</a> fra 990
        per måned. Da tar vi oss av oppdateringer, backup, overvåking og
        småjusteringer, og du havner først i køen når du trenger hjelp.
      </p>
    ),
    plainAnswer:
      "Ja, de fleste kundene våre fortsetter med en støtteavtale fra 990 per måned. Da tar vi oss av oppdateringer, backup, overvåking og småjusteringer, og du havner først i køen når du trenger hjelp.",
  },
  {
    question: "Blir siden synlig på Google og i AI-søk?",
    answer: (
      <p>
        Ja. Vi bygger siden SEO-optimalisert fra bunnen, med teknisk struktur
        og tekster som gjør at dere blir funnet både på Google og i AI-søk som
        ChatGPT, Claude og Gemini. Vil dere satse tyngre på synlighet, hjelper
        vi med det som{" "}
        <a href="/tjenester#seo-og-ai-svar">en egen tjeneste</a>.
      </p>
    ),
    plainAnswer:
      "Ja. Vi bygger siden SEO-optimalisert fra bunnen, med teknisk struktur og tekster som gjør at dere blir funnet både på Google og i AI-søk som ChatGPT, Claude og Gemini. Vil dere satse tyngre på synlighet, hjelper vi med det som en egen tjeneste.",
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

export default function SkreddersyddNettsidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="relative mx-auto max-w-[820px] px-6 pb-14 pt-16 text-center sm:pb-16 sm:pt-24">
        <span
          aria-hidden
          className="absolute left-[6%] top-10 hidden text-[26px] leading-none text-brand/45 md:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute right-[6%] top-14 hidden text-[20px] leading-none text-foreground/35 md:block"
        >
          ✦
        </span>

        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Ny nettside &amp; redesign
        </span>

        <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          Skreddersydd nettside i Oslo
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Raske, moderne nettsider som gjør besøkende til kunder. Ny side fra
          bunnen, eller nytt liv til den du har.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Få et uforpliktende tilbud
          </a>
          <Link
            href="/nettside-priser"
            className="inline-flex items-center text-base font-medium text-foreground/70 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
          >
            Se priser
          </Link>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 pb-14 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden rounded-[26px] lg:row-span-2">
              <Image
                src="/sable-flow-o-6GhmpELnw-unsplash2.jpg"
                alt="Reboot-teamet i en idémyldring rundt en tavle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 40 44"
                className="absolute -bottom-3 -right-3 hidden h-11 w-10 text-brand md:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 11 C12 8, 18 6, 15 3" strokeWidth="1.75" />
                <path d="M23 11 C20 8, 26 6, 23 3" strokeWidth="1.75" />
                <path
                  d="M9 19 H29 V20 C29 22, 24 23, 19 23 C14 23, 9 22, 9 20 Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                  stroke="none"
                />
                <path
                  d="M9 20 C9 22, 14 23, 19 23 C24 23, 29 22, 29 20"
                  strokeWidth="1.5"
                />
                <path d="M7 17 H31 V27 C31 32, 27 35, 22 35 H16 C11 35, 7 32, 7 27 Z" />
                <path d="M31 20 H34 C37 20, 37 27, 34 27 H31" />
                <path d="M5 40 H33" />
              </svg>
            </div>

            {/* SEO og AI-søk */}
            <div className="relative overflow-hidden rounded-[26px] bg-ink px-7 py-8 text-ink-foreground sm:px-8">
              <span
                aria-hidden
                className="absolute right-6 top-6 text-[20px] leading-none text-ink-foreground/25"
              >
                ✦
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                SEO og AI-søk
              </span>
              <h3 className="mt-4 font-heading text-[21px] font-normal leading-[1.2]">
                Synlig fra dag én
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-foreground/75">
                Vi bygger inn synlighet fra start, så dere blir funnet både
                hos Google og når folk spør ChatGPT eller Gemini.
              </p>
            </div>

            {/* Bygget for å konvertere */}
            <div className="rounded-[26px] border border-border bg-card px-7 py-8 sm:px-8">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                Rask og sikker
              </span>
              <h3 className="mt-4 font-heading text-[21px] font-normal leading-[1.2] text-foreground">
                Bygget for å konvertere
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-foreground/70">
                Struktur og tekst som leder besøkende dit du vil ha dem, på
                en side du oppdaterer selv.
              </p>
            </div>

            {/* Ny side eller redesign */}
            <div className="rounded-[26px] border border-border bg-card px-7 py-8 sm:px-8">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                Ny nettside &amp; redesign
              </span>
              <h3 className="mt-4 font-heading text-[21px] font-normal leading-[1.2] text-foreground">
                Ny side eller redesign
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-foreground/70">
                Fra bunnen av eller redesign av eksisterende side, leverer vi
                moderne, raske og skreddersydde nettsider.
              </p>
              <a
                href="/kontakt"
                className="mt-5 inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
              >
                Kontakt oss
              </a>
            </div>

            {/* Anmeldelse */}
            <div className="rounded-[26px] bg-brand/25 px-7 py-8 sm:px-8">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-[1.6] text-foreground">
                «Vi er veldig fornøyde med vår nye nettside, anbefales på det
                varmeste!»
              </blockquote>
              <p className="mt-4 text-[14px] font-medium text-foreground">
                Kristine Jærstad Bock
              </p>
              <p className="text-[13px] text-foreground/60">OBOS</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/45">
                5,0 på Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16 pt-14 sm:pt-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-center font-heading text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
            Ofte stilte spørsmål om skreddersydde nettsider
          </h2>
          <div className="mt-8">
            <FaqList
              items={faqItems.map(({ question, answer }) => ({ question, answer }))}
            />
          </div>
        </div>
      </section>

      {/* Case band: Höegh Evi */}
      <section className="px-4 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink text-ink-foreground">
            <div className="relative grid lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] lg:min-h-[420px]">
                <Image
                  src="/ny-nettside/hoegh-evi/hero.webp"
                  alt="Nettsiden til Höegh Evi på ulike enheter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center px-8 py-10 sm:px-14 sm:py-12 lg:py-20 lg:pl-16 lg:pr-20">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                  Kundecase · Skreddersydd nettside
                </span>
                <h2 className="mt-5 text-balance font-heading text-[clamp(28px,3.2vw,40px)] font-normal leading-[1.12] tracking-[-0.02em]">
                  Nettside for Höegh Evi
                </h2>
                                <blockquote className="mt-6 text-[17px] italic leading-[1.6] text-ink-foreground/70">
                  «Takk for utmerket arbeid. Reboot har vært gjennomgående
                  positive og løsningsorienterte!»
                  <footer className="mt-2 not-italic text-[13.5px] text-ink-foreground/55">
                    Per Øystein Feet, Global Operations &amp; Infrastructure,
                    Höegh Evi
                  </footer>
                </blockquote>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["WordPress", "Webdesign", "Hosting & drift"].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-ink-foreground/10 px-3.5 py-1.5 text-[13.5px] text-ink-foreground/85"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/ny-nettside/hoegh-evi"
                    className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
                  >
                    Les hele caset
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCta />
      <SiteFooter />
    </main>
  )
}
