import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesCta } from "@/components/services-cta"
import { FaqList } from "@/components/faq-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Shopify-byrå i Oslo",
  description:
    "Reboot er et Shopify-byrå i Nydalen, Oslo. Vi designer, bygger og drifter Shopify-nettbutikker med Vipps, BankID og integrasjoner. Fastpris og norsk support.",
  path: "/tjenester/shopify",
})

const deliverables = [
  {
    title: "Ny nettbutikk på Shopify",
    body: "Komplett nettbutikk designet fra bunnen av rundt merkevaren og produktene dine – ikke en ferdig mal med ny logo.",
  },
  {
    title: "Migrering til Shopify",
    body: "Vi flytter nettbutikken din trygt fra WooCommerce, Wix, Squarespace eller andre plattformer – med produkter, kunder og SEO-verdier intakt.",
  },
  {
    title: "Vipps, BankID og integrasjoner",
    body: "Norske betalings- og innloggingsløsninger, frakt, regnskap og lagersystemer – vi kobler Shopify til verktøyene dere allerede bruker.",
  },
  {
    title: "Design som selger",
    body: "Tydelige produktsider, gjennomtenkt handlekurv og rask checkout. Målet er ikke bare en pen butikk, men flere gjennomførte kjøp.",
  },
  {
    title: "Drift, support og videreutvikling",
    body: "Vi blir med videre etter lansering: oppdateringer, ny funksjonalitet og rask hjelp når du trenger det – med støtteavtale fra 990,- per måned.",
  },
  {
    title: "SEO for nettbutikken",
    body: "Teknisk SEO, produkttekster og struktur som gjør at butikken synes på Google – og i AI-søk som ChatGPT og Gemini.",
  },
]

const faqItems = [
  {
    question: "Hva koster en nettbutikk på Shopify?",
    answer: (
      <p>
        Det avhenger av design, antall produkter og hvilke integrasjoner dere
        trenger. Vi jobber alltid med fastpris, så du vet nøyaktig hva det koster
        før vi starter. Ta <a href="/kontakt">kontakt</a> for et konkret tilbud,
        eller se <a href="/nettside-priser">prisene våre</a> for en pekepinn.
      </p>
    ),
    plainAnswer:
      "Det avhenger av design, antall produkter og hvilke integrasjoner dere trenger. Vi jobber alltid med fastpris, så du vet nøyaktig hva det koster før vi starter. Ta kontakt for et konkret tilbud.",
  },
  {
    question: "Kan dere sette opp Vipps og BankID i Shopify?",
    answer: (
      <p>
        Ja. Vi har satt opp både Vipps-betaling og BankID-innlogging i Shopify
        for norske nettbutikker – blant annet for{" "}
        <Link href="/ny-nettside/ditt-apotek-opera">Ditt Apotek</Link>.
      </p>
    ),
    plainAnswer:
      "Ja. Vi har satt opp både Vipps-betaling og BankID-innlogging i Shopify for norske nettbutikker, blant annet for Ditt Apotek.",
  },
  {
    question: "Kan dere flytte en eksisterende nettbutikk til Shopify?",
    answer: (
      <p>
        Ja, vi migrerer nettbutikker fra WooCommerce, Wix, Squarespace og andre
        plattformer. Produkter, kundedata og ordrehistorikk blir med over, og vi
        setter opp videresendinger slik at dere beholder plasseringene på Google.
      </p>
    ),
    plainAnswer:
      "Ja, vi migrerer nettbutikker fra WooCommerce, Wix, Squarespace og andre plattformer. Produkter, kundedata og ordrehistorikk blir med over, og vi setter opp videresendinger slik at dere beholder plasseringene på Google.",
  },
  {
    question: "Hjelper dere med drift etter lansering?",
    answer: (
      <p>
        Ja, de fleste kundene våre fortsetter med en{" "}
        <a href="/tjenester#vedlikehold-og-support">støtteavtale</a> fra 990,- per
        måned. Da tar vi oss av oppdateringer, overvåking og småjusteringer, og du
        havner først i køen når du trenger hjelp.
      </p>
    ),
    plainAnswer:
      "Ja, de fleste kundene våre fortsetter med en støtteavtale fra 990,- per måned. Da tar vi oss av oppdateringer, overvåking og småjusteringer, og du havner først i køen når du trenger hjelp.",
  },
  {
    question: "Shopify eller WooCommerce – hva bør jeg velge?",
    answer: (
      <p>
        Shopify passer best når dere vil ha en stabil alt-i-ett-løsning med lite
        teknisk vedlikehold, mens WooCommerce gir mer fleksibilitet hvis dere
        allerede bruker WordPress. Vi jobber med begge og hjelper dere å velge
        riktig – les gjerne{" "}
        <Link href="/trender/shopify-vs-woocommerce-i-2024">
          sammenligningen vår av Shopify og WooCommerce
        </Link>
        .
      </p>
    ),
    plainAnswer:
      "Shopify passer best når dere vil ha en stabil alt-i-ett-løsning med lite teknisk vedlikehold, mens WooCommerce gir mer fleksibilitet hvis dere allerede bruker WordPress. Vi jobber med begge og hjelper dere å velge riktig.",
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

export default function ShopifyPage() {
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
          Nettbutikk &amp; e-handel
        </span>

        <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          Shopify-byrå i Oslo
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Vi designer, bygger og drifter Shopify-nettbutikker for norske
          bedrifter – med Vipps, BankID og integrasjonene dere trenger. Fra
          kontoret vårt i Nydalen får du direkte kontakt med de som faktisk
          bygger butikken din.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Få et uforpliktende tilbud
          </a>
          <Link
            href="/ny-nettside/ditt-apotek-opera"
            className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
          >
            Se en Shopify-butikk vi har laget
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* What we deliver */}
      <section className="px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[26px] bg-card px-7 pb-8 pt-7"
              >
                <h2 className="font-heading text-[21px] font-normal leading-[1.2] text-foreground">
                  {item.title}
                </h2>
                <div className="mt-3.5 mb-4 flex items-center gap-[2px]">
                  <div className="h-1 w-[28px] rounded-full bg-brand" />
                  <div className="h-1 w-[16px] rounded-full bg-brand/25" />
                </div>
                <p className="text-[15.5px] leading-[1.6] text-foreground/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case band: Ditt Apotek */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink text-ink-foreground">
            <div className="relative grid lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] lg:min-h-[420px]">
                <Image
                  src="/ny-nettside/ditt-apotek-opera/hero.jpg"
                  alt="Ditt Apotek sin fysiske butikk ved Operaen i Bjørvika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center px-8 py-10 sm:px-14 sm:py-12 lg:py-20 lg:pl-16 lg:pr-20">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
                  Kundecase · Shopify
                </span>
                <h2 className="mt-5 text-balance font-heading text-[clamp(28px,3.2vw,40px)] font-normal leading-[1.12] tracking-[-0.02em]">
                  Nettbutikk for Ditt Apotek
                </h2>
                <p className="mt-5 text-[17px] leading-[1.65] text-ink-foreground/80">
                  For Ditt Apotek ved Operaen i Bjørvika bygde vi en
                  Shopify-nettbutikk som håndterer et stort produktvolum, med
                  Vipps-betaling og skreddersydd funksjonalitet. Resultatet ble
                  økt salg – og en butikk de ansatte enkelt drifter selv.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Shopify", "Vipps", "BankID", "Webdesign"].map((chip) => (
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
                    href="/ny-nettside/ditt-apotek-opera"
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

      {/* Why Reboot */}
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-balance text-center font-heading text-[clamp(28px,3.4vw,40px)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
            Hvorfor velge oss som Shopify-byrå?
          </h2>
          <ul className="mx-auto mt-8 max-w-[560px] space-y-[14px]">
            {[
              "Direkte kontakt med de som bygger butikken – ingen mellomledd",
              "Fastpris avtalt før vi starter, ingen overraskelser underveis",
              "Erfaring med norske løsninger som Vipps og BankID",
              "Drift og support etter lansering, med rask responstid",
              "Lokalt byrå i Nydalen i Oslo – møt oss gjerne over en kaffe",
            ].map((point) => (
              <li key={point} className="flex items-start gap-[12px]">
                <Check
                  className="mt-[3px] size-[18px] shrink-0 text-brand"
                  strokeWidth={2.5}
                />
                <span className="text-[16.5px] leading-[1.6] text-foreground/80">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-center font-heading text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
            Ofte stilte spørsmål om Shopify
          </h2>
          <div className="mt-8">
            <FaqList
              items={faqItems.map(({ question, answer }) => ({ question, answer }))}
            />
          </div>
        </div>
      </section>

      <ServicesCta />
      <SiteFooter />
    </main>
  )
}
