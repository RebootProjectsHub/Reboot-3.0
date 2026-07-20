import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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

const services = [
  {
    title: "Ny nettside på WordPress",
    body: "Skreddersydd design og utvikling fra bunnen av – ingen kjøpte temaer. Du får en rask, sikker nettside som er enkel å oppdatere selv.",
  },
  {
    title: "Redesign og overtakelse",
    body: "Vi gir eldre WordPress-sider nytt liv med nytt design og bedre ytelse, og tar gjerne over drift av sider andre har bygget – uten at du mister innhold eller Google-plasseringer.",
  },
  {
    title: "Nettbutikk med WooCommerce",
    body: "Komplett nettbutikk med produkter, betaling, frakt, medlemskap og abonnement – tilpasset norske forhold.",
  },
  {
    title: "Vipps, booking og integrasjoner",
    body: "Vipps-betaling, bookingsystemer og kobling mot verktøyene dere allerede bruker – vi har bygget alt fra bookingportaler til medlemsløsninger.",
  },
  {
    title: "Drift, vedlikehold og support",
    body: "Vi holder WordPress, temaer og plugins oppdatert, tar daglig backup og overvåker siden døgnet rundt – med støtteavtale fra 990,- per måned.",
  },
  {
    title: "SEO som synes",
    body: "Teknisk SEO, struktur og innhold som gjør at nettsiden rangerer på Google – og blir anbefalt i AI-søk som ChatGPT og Gemini.",
  },
]

const projects = [
  {
    kicker: "OBOS",
    title: "Bookingportal med WooCommerce og Vipps Hurtigkasse",
    image: "/work-obos.png",
    href: "/ny-nettside/obos",
  },
  {
    kicker: "Runner's World",
    title: "Medlemssider med WooCommerce Memberships og abonnement",
    image: "/ny-nettside/runners-world/hero.jpg",
    href: "/ny-nettside/runners-world",
  },
  {
    kicker: "Ved På Døra",
    title: "Nettbutikk med skreddersydde integrasjoner",
    image: "/ny-nettside/ved-pa-dora/hero.jpg",
    href: "/ny-nettside/ved-pa-dora",
  },
  {
    kicker: "Höegh EVI",
    title: "Teknisk arkitektur, hosting og drift",
    image: "/work-hoegh.png",
    href: "/ny-nettside/hoegh-evi",
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
        med <Link href="/tjenester/woocommerce">WooCommerce</Link> gir mer
        fleksibilitet og full kontroll. Vi jobber med begge og hjelper deg å
        velge riktig – les{" "}
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
          WordPress er ryggraden i mye av det vi bygger. Fra landingssider til
          bookingportaler og nettbutikker: vi designer, utvikler og drifter
          løsninger som varer.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Fortell oss om ditt prosjekt
          </a>
        </div>
      </section>

      {/* Editorial intro with stats */}
      <section className="px-4 pt-7 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[var(--radius)] bg-card px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <h2 className="text-balance font-heading text-[clamp(26px,3vw,38px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
                Vi bruker Wordpress for de fleste av våre leveranser
              </h2>
              <div>
                <p className="text-[17px] leading-[1.7] text-foreground/75">
                  Det er en grunn til at vi stadig vender tilbake til WordPress:
                  det gir kundene våre en nettside de selv kan oppdatere, et
                  økosystem som ikke låser dem til ett byrå og fleksibilitet
                  et helt skreddersydd oppsett.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-foreground/75">
                  Vi tilpasser oss hver eneste bedrift vi jobber for. Noen ønsker å bruke ferdigbygde temaer for å spare kostnader, mens andre ønsker et skreddersydd bygd opp fra bunnen får å realisere en spesifikk visjon.
                </p>
                <div className="mt-8 flex flex-wrap gap-10">
                  <div>
                    <div className="font-heading text-3xl font-normal leading-none text-foreground">
                      80+
                    </div>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/60">
                      Leverte prosjekter
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 font-heading text-3xl font-normal leading-none text-foreground">
                      5/5
                      <span className="text-base text-brand">★</span>
                    </div>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/60">
                      På Google
                    </p>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-normal leading-none text-foreground">
                      990,-
                    </div>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/60">
                      Drift per måned
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered services list */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
                Hva vi hjelper deg med
              </span>
              <h2 className="mt-4 text-balance font-heading text-[clamp(28px,3.4vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
                WordPress-tjenester fra A til Å
              </h2>
              <div className="relative mt-14 aspect-[1500/1091] overflow-hidden rounded-[var(--radius)]">
                <Image
                  src="/Reboot-Norge-ipad-scaled.jpg"
                  alt="WordPress-administrasjonspanel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
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

      {/* WordPress case showcase */}
      <section id="prosjekter" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
              WordPress-prosjekter vi har levert
            </h2>
            <a
              href="/referanser"
              className="hidden w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary md:inline-flex"
            >
              Se flere prosjekter
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-brand">
                    {project.kicker}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-normal leading-snug text-foreground">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <a
              href="/referanser"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary"
            >
              Se flere prosjekter
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* OBOS quote */}
      <section className="px-4 py-6 sm:px-6 lg:px-10">
        <figure className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[var(--radius)] bg-ink px-6 py-14 text-center text-ink-foreground sm:px-12">
          <span
            aria-hidden
            className="absolute left-[6%] top-8 hidden text-[30px] leading-none text-ink-foreground/20 lg:block"
          >
            ✳
          </span>
          <blockquote className="mx-auto max-w-[720px] text-balance font-heading text-[clamp(22px,2.6vw,32px)] font-normal leading-[1.3] tracking-[-0.01em]">
            «Hele prosessen med oppsett og administrasjon har vært en effektiv
            og produktiv opplevelse, og vi er veldig fornøyde med samarbeidet
            med vår driftspartner.»
          </blockquote>
          <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-foreground/60">
            Kristine Jørstad Bock, OBOS Nyegaardskvartalet
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="px-6 py-14 sm:py-16">
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
