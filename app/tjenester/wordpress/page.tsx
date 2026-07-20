import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesCta } from "@/components/services-cta"
import { FaqList } from "@/components/faq-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "WordPress-byrå i Oslo",
  description:
    "Reboot er et WordPress-byrå i Nydalen, Oslo. Vi designer, utvikler og drifter WordPress-nettsider med WooCommerce, Vipps og booking. Fastpris og norsk support.",
  path: "/tjenester/wordpress",
})

const deliverables = [
  {
    title: "Ny nettside på WordPress",
    body: "Skreddersydd design og utvikling fra bunnen av – ingen kjøpte temaer. Du får en rask, sikker nettside som er enkel å oppdatere selv.",
  },
  {
    title: "Redesign av eksisterende side",
    body: "Vi gir eldre WordPress-sider nytt liv med nytt design, bedre ytelse og ryddig kode – uten at du mister innhold eller plasseringene på Google.",
  },
  {
    title: "Nettbutikk med WooCommerce",
    body: "Komplett nettbutikk på WordPress med produkter, betaling, frakt, medlemskap og abonnement – tilpasset norske forhold.",
  },
  {
    title: "Vipps, booking og integrasjoner",
    body: "Vipps-betaling, bookingsystemer og kobling mot verktøyene dere allerede bruker – vi har bygget det for kunder som OBOS og Runner's World.",
  },
  {
    title: "Drift, vedlikehold og support",
    body: "Vi holder WordPress, temaer og plugins oppdatert, tar daglig backup og overvåker siden – med støtteavtale fra 990,- per måned.",
  },
  {
    title: "SEO som synes",
    body: "Teknisk SEO, struktur og innhold som gjør at nettsiden rangerer på Google – og blir anbefalt i AI-søk som ChatGPT og Gemini.",
  },
]

const faqItems = [
  {
    question: "Hva koster en WordPress-nettside?",
    answer: (
      <p>
        En ny nettside hos oss starter på 29 900,-, og vi jobber alltid med
        fastpris – du vet nøyaktig hva det koster før vi starter. Se{" "}
        <a href="/nettside-priser">prisene våre</a> eller{" "}
        <a href="/kontakt">ta kontakt</a> for et konkret tilbud.
      </p>
    ),
    plainAnswer:
      "En ny nettside hos oss starter på 29 900,-, og vi jobber alltid med fastpris – du vet nøyaktig hva det koster før vi starter. Ta kontakt for et konkret tilbud.",
  },
  {
    question: "Kan dere ta over en WordPress-side noen andre har laget?",
    answer: (
      <p>
        Ja. Vi tar jevnlig over drift og videreutvikling av WordPress-sider
        bygget av andre. Vi starter med en gjennomgang av teknisk tilstand,
        sikkerhet og ytelse, og gir deg en tydelig anbefaling om veien videre.
      </p>
    ),
    plainAnswer:
      "Ja. Vi tar jevnlig over drift og videreutvikling av WordPress-sider bygget av andre. Vi starter med en gjennomgang av teknisk tilstand, sikkerhet og ytelse, og gir deg en tydelig anbefaling om veien videre.",
  },
  {
    question: "Kan jeg oppdatere innholdet selv?",
    answer: (
      <p>
        Ja, det er noe av det beste med WordPress. Du får redigeringstilgang og
        opplæring, slik at dere selv kan endre tekster, bilder og sider – uten å
        kunne kode.
      </p>
    ),
    plainAnswer:
      "Ja, det er noe av det beste med WordPress. Du får redigeringstilgang og opplæring, slik at dere selv kan endre tekster, bilder og sider – uten å kunne kode.",
  },
  {
    question: "Hva skjer etter lansering?",
    answer: (
      <p>
        De fleste kundene våre fortsetter med en støtteavtale fra 990,- per
        måned. Da holder vi WordPress, temaer og plugins oppdatert, tar daglig
        backup og overvåker siden døgnet rundt. Les mer om{" "}
        <Link href="/trender/hva-inngar-egentlig-i-en-driftsavtale">
          hva som inngår i en driftsavtale
        </Link>
        .
      </p>
    ),
    plainAnswer:
      "De fleste kundene våre fortsetter med en støtteavtale fra 990,- per måned. Da holder vi WordPress, temaer og plugins oppdatert, tar daglig backup og overvåker siden døgnet rundt.",
  },
  {
    question: "WordPress eller Shopify – hva bør jeg velge?",
    answer: (
      <p>
        For nettbutikker er Shopify en stabil alt-i-ett-løsning, mens WordPress
        med WooCommerce gir mer fleksibilitet og full kontroll. Vi jobber med
        begge og hjelper deg å velge riktig – les{" "}
        <Link href="/trender/shopify-vs-woocommerce-i-2024">
          sammenligningen vår
        </Link>{" "}
        eller se hvordan vi jobber som{" "}
        <Link href="/tjenester/shopify">Shopify-byrå</Link>.
      </p>
    ),
    plainAnswer:
      "For nettbutikker er Shopify en stabil alt-i-ett-løsning, mens WordPress med WooCommerce gir mer fleksibilitet og full kontroll. Vi jobber med begge og hjelper deg å velge riktig.",
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

export default function WordPressPage() {
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
          Nettsider &amp; nettbutikker
        </span>

        <h1 className="mt-[18px] mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          WordPress-byrå i Oslo
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Vi designer, utvikler og drifter WordPress-nettsider for norske
          bedrifter – fra bedriftssider til nettbutikker med WooCommerce, Vipps
          og booking. Fra kontoret vårt i Nydalen får du direkte kontakt med de
          som faktisk bygger siden din.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Få et uforpliktende tilbud
          </a>
          <Link
            href="/ny-nettside/obos"
            className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
          >
            Se en WordPress-løsning vi har laget
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

      {/* Case band: OBOS */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[var(--radius)] bg-ink text-ink-foreground">
            <div className="relative grid lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] lg:min-h-[420px]">
                <Image
                  src="/ny-nettside/obos/hero.jpg"
                  alt="OBOS-bygg sett nedenfra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center px-8 py-10 sm:px-14 sm:py-12 lg:py-20 lg:pl-16 lg:pr-20">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
                  Kundecase · WordPress
                </span>
                <h2 className="mt-5 text-balance font-heading text-[clamp(28px,3.2vw,40px)] font-normal leading-[1.12] tracking-[-0.02em]">
                  Bookingløsning for OBOS
                </h2>
                <p className="mt-5 text-[17px] leading-[1.65] text-ink-foreground/80">
                  For OBOS bygde vi en WordPress-løsning der beboere booker
                  gjesteleiligheter selv – med WooCommerce Bookings og Vipps
                  Hurtigkasse. Et tungvint manuelt system ble til en smidig
                  selvbetjeningsløsning som sparer administrasjonen for mye
                  arbeid.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["WordPress", "WooCommerce", "Vipps", "Bookingsystem"].map(
                    (chip) => (
                      <li
                        key={chip}
                        className="rounded-full bg-ink-foreground/10 px-3.5 py-1.5 text-[13.5px] text-ink-foreground/85"
                      >
                        {chip}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/ny-nettside/obos"
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
            Hvorfor velge oss som WordPress-byrå?
          </h2>
          <ul className="mx-auto mt-8 max-w-[560px] space-y-[14px]">
            {[
              "WordPress er plattformen vi kan best – de aller fleste nettsidene vi bygger står på den",
              "Direkte kontakt med de som bygger siden – ingen mellomledd",
              "Fastpris avtalt før vi starter, ingen overraskelser underveis",
              "Erfaring med Vipps, booking og WooCommerce for norske bedrifter",
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
            Ofte stilte spørsmål om WordPress
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
