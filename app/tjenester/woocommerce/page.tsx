import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesCta } from "@/components/services-cta"
import { FaqList } from "@/components/faq-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "WooCommerce-byrå i Oslo",
  description:
    "Reboot er et WooCommerce-byrå i Nydalen, Oslo. Vi bygger nettbutikker på WordPress med Vipps, medlemskap, abonnement og booking. Fastpris og norsk support.",
  path: "/tjenester/woocommerce",
})

const useCases = [
  {
    kicker: "Produkter",
    title: "Nettbutikk",
    body: "Klassisk netthandel med produktsider, handlekurv og rask checkout. Koblet til Vipps, Google Shopping og Prisjakt.",
    image: "/ny-nettside/ved-pa-dora/hero.jpg",
    caseHref: "/ny-nettside/ved-pa-dora",
    caseLabel: "Se case: Ved På Døra",
  },
  {
    kicker: "Medlemskap & abonnement",
    title: "Abonnement",
    body: "Med WooCommerce Memberships og Subscriptions kan du selge medlemskap, abonnement og tilgang til innhold.",
    image: "/ny-nettside/runners-world/hero.jpg",
    caseHref: "/ny-nettside/runners-world",
    caseLabel: "Se case: Runner's World",
  },
  {
    kicker: "Booking & utleie",
    title: "Bookingløsning",
    body: "WooCommerce Bookings gjør nettbutikken til et bookingsystem. For OBOS bygde vi en portal for utleie av leiligheter med betaling via Vipps Hurtigkasse.",
    image: "/work-obos.png",
    caseHref: "/ny-nettside/obos",
    caseLabel: "Se caset: OBOS",
  },
]

const included = [
  "Skreddersydd design",
  "Vipps og kortbetaling i samme kasse",
  "Frakt-integrasjoner og ordreflyt",
  "Produktimport og opplæring i admin",
  "Sikkerhet, backup og overvåking",
  "Teknisk SEO for produktsider",
  "Full redigeringstilgang",
  "Drift og support fra 990,- per måned",
]

const faqItems = [
  {
    question: "Hva koster en nettbutikk med WooCommerce?",
    answer: (
      <p>
        Det avhenger av design, antall produkter og hvilke integrasjoner dere
        trenger. Vi jobber alltid med fastpris, så du vet nøyaktig hva det
        koster før vi starter. Se <a href="/nettside-priser">prisene våre</a>{" "}
        eller <a href="/kontakt">ta kontakt</a> for et konkret tilbud.
      </p>
    ),
    plainAnswer:
      "Det avhenger av design, antall produkter og hvilke integrasjoner dere trenger. Vi jobber alltid med fastpris, så du vet nøyaktig hva det koster før vi starter. Ta kontakt for et konkret tilbud.",
  },
  {
    question: "Trenger jeg WordPress for å bruke WooCommerce?",
    answer: (
      <p>
        Ja, WooCommerce er en utvidelse av WordPress. Det er en fordel: du får
        nettbutikk og nettside i samme system, med full kontroll over design og
        innhold. Les mer om hvordan vi jobber som{" "}
        <Link href="/tjenester/wordpress">WordPress-byrå</Link>.
      </p>
    ),
    plainAnswer:
      "Ja, WooCommerce er en utvidelse av WordPress. Det er en fordel: du får nettbutikk og nettside i samme system, med full kontroll over design og innhold.",
  },
  {
    question: "Fungerer Vipps med WooCommerce?",
    answer: (
      <p>
        Ja, WooCommerce har en egen Vipps-integrasjon, og vi har satt den opp
        for en rekke norske nettbutikker. Du kan også kombinere Vipps med
        kortbetaling i samme kasse. Les mer i artikkelen vår om{" "}
        <Link href="/trender/nettside-med-vipps-betaling">
          Vipps-betaling på nettsiden
        </Link>
        .
      </p>
    ),
    plainAnswer:
      "Ja, WooCommerce har en egen Vipps-integrasjon, og vi har satt den opp for en rekke norske nettbutikker. Du kan også kombinere Vipps med kortbetaling i samme kasse.",
  },
  {
    question: "Kan WooCommerce håndtere medlemskap, abonnement og booking?",
    answer: (
      <p>
        Ja. Med utvidelser som Memberships, Subscriptions og Bookings dekker
        WooCommerce langt mer enn klassisk netthandel – vi har bygget
        medlemsløsninger for{" "}
        <Link href="/ny-nettside/runners-world">Runner's World</Link> og en
        bookingportal for <Link href="/ny-nettside/obos">OBOS</Link> på
        akkurat dette.
      </p>
    ),
    plainAnswer:
      "Ja. Med utvidelser som Memberships, Subscriptions og Bookings dekker WooCommerce langt mer enn klassisk netthandel – vi har bygget medlemsløsninger og bookingportaler på akkurat dette.",
  },
  {
    question: "WooCommerce eller Shopify – hva bør jeg velge?",
    answer: (
      <p>
        WooCommerce gir mest fleksibilitet og full kontroll, særlig hvis dere
        allerede bruker WordPress. Shopify er en enklere alt-i-ett-løsning med
        mindre teknisk vedlikehold. Vi jobber med begge – les{" "}
        <Link href="/trender/shopify-vs-woocommerce-i-2024">
          sammenligningen vår
        </Link>{" "}
        eller se hvordan vi jobber som{" "}
        <Link href="/tjenester/shopify">Shopify-byrå</Link>.
      </p>
    ),
    plainAnswer:
      "WooCommerce gir mest fleksibilitet og full kontroll, særlig hvis dere allerede bruker WordPress. Shopify er en enklere alt-i-ett-løsning med mindre teknisk vedlikehold. Vi jobber med begge og hjelper dere å velge.",
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

export default function WooCommercePage() {
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
          Nettbutikk på WordPress
        </span>

        <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          WooCommerce-byrå i Oslo
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Vi er eksperter på Woocommerce og alle mulighetene denne plattformen byr på, med alt fra nettbutikk til abonnement og bookingløsninger.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Få et uforpliktende tilbud
          </a>
        </div>
      </section>

      {/* Use cases, each anchored in a real project */}
      <section
        id="bruksomrader"
        className="scroll-mt-24 px-4 pt-7 pb-14 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Ulike Woocommerce-løsninger
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={useCase.image}
                    alt={useCase.caseLabel}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.13em] text-brand">
                    {useCase.kicker}
                  </span>
                  <h3 className="mt-3 font-heading text-[21px] font-normal leading-[1.25] text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-foreground/70">
                    {useCase.body}
                  </p>
                  <div className="min-h-4 flex-1" />
                  <Link
                    href={useCase.caseHref}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
                  >
                    {useCase.caseLabel}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[var(--radius)] border-[1.5px] border-border bg-[#fcf2ec] px-8 py-12 sm:px-12 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
                  Alt inkludert
                </span>
                <h2 className="mt-4 text-balance font-heading text-[clamp(26px,3vw,38px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
                  Nettbutikk med fokus på høy konvertering
                </h2>
                <p className="mt-4 text-[16.5px] leading-[1.65] text-foreground/70">
                  Vi leverer nettbutikker som kommer komplett med konverterings-optimalisering, betalingsløsning, frakt og kobling til regnskapssystem.
                </p>
              </div>
              <ul className="grid content-center gap-x-8 gap-y-[14px] sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-[10px]">
                    <Check
                      className="mt-[3px] size-[17px] shrink-0 text-brand"
                      strokeWidth={2.5}
                    />
                    <span className="text-[15px] leading-[1.55] text-foreground/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform choice band */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] bg-ink px-8 mt-7 py-12 text-ink-foreground sm:px-12 sm:py-14">
          <span
            aria-hidden
            className="absolute right-[6%] top-8 hidden text-[30px] leading-none text-ink-foreground/20 lg:block"
          >
            ✦
          </span>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-balance font-heading text-[clamp(26px,3vw,38px)] font-normal leading-[1.15] tracking-[-0.02em]">
              Usikker på om WooCommerce er riktig valg?
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16.5px] leading-[1.65] text-ink-foreground/80">
              WooCommerce er bygget på{" "}
              <Link
                href="/tjenester/wordpress"
                className="text-brand underline-offset-4 hover:underline"
              >
                WordPress
              </Link>{" "}
              og gir full kontroll og fleksibilitet. Vil dere heller ha en
              alt-i-ett-løsning med mindre teknisk vedlikehold, tilbyr vi også
              {" "}
              <Link
                href="/tjenester/shopify"
                className="text-brand underline-offset-4 hover:underline"
              >
                Shopify
              </Link>
              . Vi hjelper dere å velge riktig – uforpliktende.
            </p>
            <div className="mt-7">
              <Link
                href="/trender/shopify-vs-woocommerce-i-2024"
                className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
              >
                Les sammenligningen: Shopify vs. WooCommerce
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-center font-heading text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
            Ofte stilte spørsmål om WooCommerce
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
