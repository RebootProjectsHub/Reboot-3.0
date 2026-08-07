import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SiteFooter } from "@/components/site-footer"
import { FaqList } from "@/components/faq-list"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "AI-rådgivning i Oslo",
  description:
    "Reboot hjelper små og mellomstore bedrifter i Nydalen, Oslo med AI-rådgivning: kartlegging, workshops og trygg bruk av kunstig intelligens i hverdagen.",
  path: "/tjenester/ai-radgivning",
})

const pains = [
  "«Konkurrentene våre snakker om AI, men vi har ikke kommet i gang.»",
  "«Vi har prøvd ChatGPT, men bruker det ikke til noe nyttig.»",
  "«Vi er usikre på hva vi kan dele med AI-verktøyene.»",
  "«Ingen hos oss har tid til å følge med på utviklingen.»",
]

const services = [
  {
    span: "lg:col-span-3",
    num: "01",
    title: "AI-kartlegging av bedriften din",
  },
  {
    span: "lg:col-span-3",
    num: "02",
    title: "Workshop og opplæring for teamet",
  },
  {
    span: "lg:col-span-2",
    num: "03",
    title: "Riktige verktøy og trygt oppsett",
  },
  {
    span: "lg:col-span-2",
    num: "04",
    title: "Automatisering av rutineoppgaver",
  },
  {
    span: "lg:col-span-2",
    num: "05",
    title: "Løpende sparring når dere trenger det",
  },
]

const faqItems = [
  {
    question: "Vi har ikke brukt AI i det hele tatt. Er det for sent?",
    answer: (
      <p>
        Nei, tvert imot. Verktøyene er blitt enklere å ta i bruk, og de
        fleste av kundene våre starter helt fra begynnelsen. Etter en
        kartlegging og en workshop er teamet i gang.
      </p>
    ),
    plainAnswer:
      "Nei, tvert imot. Verktøyene er blitt enklere å ta i bruk, og de fleste av kundene våre starter helt fra begynnelsen. Etter en kartlegging og en workshop er teamet i gang.",
  },
  {
    question: "Hva slags bedrifter passer dette for?",
    answer: (
      <p>
        Små og mellomstore bedrifter i alle bransjer. Det viktige er ikke
        bransjen, men at dere har oppgaver som tar tid: tilbud, e-post,
        dokumenter, innhold eller kundeoppfølging.
      </p>
    ),
    plainAnswer:
      "Små og mellomstore bedrifter i alle bransjer. Det viktige er ikke bransjen, men at dere har oppgaver som tar tid: tilbud, e-post, dokumenter, innhold eller kundeoppfølging.",
  },
  {
    question: "Hva med personvern og sikkerhet?",
    answer: (
      <p>
        En del av rådgivningen handler nettopp om dette. Vi setter opp
        verktøyene riktig og lager enkle kjøreregler for hva som kan deles
        med AI, i tråd med GDPR.
      </p>
    ),
    plainAnswer:
      "En del av rådgivningen handler nettopp om dette. Vi setter opp verktøyene riktig og lager enkle kjøreregler for hva som kan deles med AI, i tråd med GDPR.",
  },
  {
    question: "Må vi kjøpe dyre verktøy eller nye systemer?",
    answer: (
      <p>
        Som regel ikke. De fleste kommer langt med abonnement på ett eller
        to verktøy, som ChatGPT eller Claude. Vi anbefaler aldri mer enn
        dere faktisk trenger.
      </p>
    ),
    plainAnswer:
      "Som regel ikke. De fleste kommer langt med abonnement på ett eller to verktøy, som ChatGPT eller Claude. Vi anbefaler aldri mer enn dere faktisk trenger.",
  },
  {
    question: "Hvordan kommer vi i gang?",
    answer: (
      <p>
        Send oss en melding, så tar vi et uforpliktende møte om hvor dere
        står i dag. Så foreslår vi en konkret vei videre.
      </p>
    ),
    plainAnswer:
      "Send oss en melding, så tar vi et uforpliktende møte om hvor dere står i dag. Så foreslår vi en konkret vei videre.",
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

export default function AiRadgivningPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Tjenester", href: "/tjenester" }, { label: "AI-rådgivning" }]} />

      {/* Hero */}
      <section className="relative mx-auto max-w-[860px] px-6 pb-14 pt-16 text-center sm:pb-16 sm:pt-24">
        <span
          aria-hidden
          className="absolute left-[8%] top-10 hidden text-[28px] leading-none text-brand/35 md:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute right-[10%] top-20 hidden text-[22px] leading-none text-brand/30 md:block"
        >
          ✦
        </span>
        <span
          aria-hidden
          className="absolute bottom-6 left-[16%] hidden text-[24px] leading-none text-brand/25 md:block"
        >
          〜
        </span>

        <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
          Rådgivning &amp; kompetanse
        </span>

        <h1 className="mt-4 mb-[22px] text-balance font-heading text-[clamp(38px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          AI-rådgivning for bedrifter i Norge
        </h1>

        <p className="mx-auto max-w-[600px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          Føler du at alle andre har kommet i gang med AI? Vi hjelper små og
          mellomstore bedrifter å finne ut hvor AI faktisk gir verd.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Kontakt oss
          </a>
        </div>
      </section>

      {/* Kjenner du deg igjen? */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 rounded-[var(--radius)] bg-ink px-8 py-12 text-ink-foreground sm:px-12 sm:py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                Vanlige utfordringer
              </span>
              <h2 className="mt-4 text-balance font-heading text-[clamp(28px,3.4vw,40px)] font-normal leading-[1.15] tracking-[-0.02em] text-ink-foreground">
                De fleste starter akkurat her
              </h2>
              <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-[var(--radius)]">
                <Image
                  src="/Felles5.webp"
                  alt="Reboot-teamet kartlegger AI-muligheter ved et whiteboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <ul>
                {pains.map((pain) => (
                  <li
                    key={pain}
                    className="flex items-baseline gap-4 border-b border-ink-foreground/15 py-[22px] font-heading text-[22px] font-normal leading-[1.35] text-ink-foreground first:pt-0"
                  >
                    <span aria-hidden className="shrink-0 text-brand">
                      ✳
                    </span>
                    {pain}
                  </li>
                ))}
              </ul>
              <p className="pt-[22px] text-[15.5px] leading-[1.6] text-ink-foreground/75">
                Da er du i godt selskap. Dette er de vanligste
                utgangspunktene hos kundene våre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
            Praktisk hjelp
          </span>
          <h2 className="mt-4 text-balance font-heading text-[clamp(28px,3.4vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
            AI-rådgivning fra Reboot
          </h2>

          <div className="mt-10 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => (
              <article
                key={service.title}
                className={`flex flex-col rounded-[26px] border-[1.5px] border-border bg-card px-7 pb-8 pt-7 transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-brand ${service.span}`}
              >
                <span className="font-mono text-xs font-bold text-brand">
                  {service.num}
                </span>
                <div className="mt-[18px] mb-5 flex items-center gap-[2px]">
                  <div className="h-1 w-[28px] rounded-full bg-brand" />
                  <div className="h-1 w-[16px] rounded-full bg-brand/25" />
                </div>
                <h3 className="font-heading text-[22px] font-normal leading-[1.2] text-foreground">
                  {service.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Referanse */}
      <section className="px-4 pb-20 sm:px-6 lg:px-10 sm:pb-24">
        <div className="relative mx-auto max-w-[1280px]">
          <div className="relative h-[360px] overflow-hidden rounded-[var(--radius)] sm:h-[460px] lg:h-[520px]">
            <Image
              src="/team-meeting.jpg"
              alt="Reboot-teamet i et møte rundt et bord"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative -mt-10 mx-6 rounded-[26px] border border-border bg-[#fcf2ec] p-8 sm:absolute sm:-bottom-10 sm:left-12 sm:mx-0 sm:mt-0 sm:max-w-[450px]">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand text-brand" />
              ))}
            </div>
            <blockquote className="mt-4 font-heading text-[21px] font-normal leading-[1.4] text-foreground">
              «Godt samarbeid og vi følte vi fikk veldig mye igjen for alt vi investerte i dette. Kan anbefales til alle.»
            </blockquote>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
              <div>
                <p className="text-[15px] font-medium text-foreground">
                  Julian Opedal
                </p>
                <p className="mt-0.5 text-[14px] text-foreground/60">Smartkjøkken</p>
              </div>
              <Link
                href="/referanser"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
              >
                Se referanser
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-center font-heading text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
            FAQ: Bruk av AI som verktøy
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
            ✳
          </span>
          <span
            aria-hidden
            className="absolute bottom-8 right-[8%] hidden text-[30px] leading-none text-foreground/35 lg:block"
          >
            ✦
          </span>

          <h2 className="mx-auto max-w-[620px] text-balance font-heading text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
            Klar for å komme i gang med AI?
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
              Send oss en melding
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
