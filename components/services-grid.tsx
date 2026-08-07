import { ArrowUpRight } from "lucide-react"
import { techPages } from "@/lib/tech-links"

const services = [
  {
    id: "skreddersydd-nettside",
    kicker: "Ny nettside & redesign",
    title: "Skreddersydd nettside",
    href: "/tjenester/skreddersydd-nettside",
  },
  {
    id: "seo-og-ai-svar",
    kicker: "Synlighet & søk",
    title: "SEO og AI-svar",
    href: "/tjenester/seo-og-ai-svar",
  },
  {
    id: "ai-radgivning",
    kicker: "AI-hjelp",
    title: "AI-rådgivning",
    href: "/tjenester/ai-radgivning",
  },
]

const digitalTech = [
  "Shopify",
  "WordPress",
  "Woocommerce",
  "Integrasjoner",
  "Github",
  "Vipps",
  "BankID",
  "API-løsninger",
]

const kickerClass = "font-mono text-xs uppercase tracking-[0.12em] text-brand"
const titleClass =
  "mt-3 font-heading text-[29px] font-normal leading-[1.14] text-foreground"
const chipClass =
  "inline-flex rounded-full border bg-foreground/5 px-[18px] py-[9px] text-[14.5px] font-semibold text-foreground/85"

/** The two-segment Reboot line used on cards across the site. */
function RebootLine() {
  return (
    <div className="mt-[18px] flex items-center gap-[2px]">
      <div className="h-1 w-[28px] rounded-full bg-brand" />
      <div className="h-1 w-[16px] rounded-full bg-brand/25" />
    </div>
  )
}

function ArrowCircle() {
  return (
    <span className="inline-flex size-[54px] shrink-0 items-center justify-center self-end rounded-full bg-brand/10 text-foreground transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
      <ArrowUpRight className="size-[22px]" aria-hidden />
    </span>
  )
}

export function ServicesGrid() {
  return (
    <section className="px-4 pb-14 pt-0 sm:px-6 sm:pt-14 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-[22px]">
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.id}
              id={service.id}
              href={service.href}
              className="group flex min-h-[200px] scroll-mt-24 flex-col rounded-[26px] border-[1.5px] border-transparent bg-card px-[34px] pb-[34px] pt-9 transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-brand"
            >
              <span className={kickerClass}>{service.kicker}</span>
              <h3 className={titleClass}>{service.title}</h3>
              <RebootLine />
              <div className="min-h-10 flex-1" />
              <ArrowCircle />
            </a>
          ))}
        </div>

        <div
          id="digitale-tjenester"
          className="grid scroll-mt-24 gap-[22px] rounded-[26px] border-[1.5px] border-transparent bg-card px-[34px] pb-[34px] pt-9 sm:grid-cols-2 lg:gap-x-11"
        >
          <div className="flex flex-col">
            <span className={kickerClass}>Skreddersydd utvikling</span>
            <h3 className={titleClass}>Digitale tjenester</h3>
            <p className="mt-4 text-[16.5px] leading-[1.6] text-foreground/70">
              Bred erfaring med integrasjoner og tekniske løsninger.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[22px]">
            <ul className="flex flex-wrap gap-2.5">
              {digitalTech.map((tech) => {
                const href = techPages[tech]
                return (
                  <li key={tech}>
                    {href ? (
                      <a
                        href={href}
                        className={`${chipClass} border-brand transition-colors duration-200 hover:bg-brand hover:text-white`}
                      >
                        {tech}
                      </a>
                    ) : (
                      <span className={`${chipClass} border-transparent`}>{tech}</span>
                    )}
                  </li>
                )
              })}
            </ul>
            <a href="/kontakt" className="group flex flex-col">
              <ArrowCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
