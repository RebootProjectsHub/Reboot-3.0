import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { CaseStudy } from "@/cases/types"
import { CaseGallery } from "@/components/case-gallery"
import { techPages } from "@/lib/tech-links"

export function CaseLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article>
      <header className="relative mx-auto max-w-[820px] px-6 pb-10 pt-16 text-center sm:pt-20">
        <span
          aria-hidden
          className="absolute left-[4%] top-10 hidden text-[26px] leading-none text-brand/40 md:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute right-[4%] top-14 hidden text-[20px] leading-none text-foreground/35 md:block"
        >
          ✦
        </span>

        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Kundecase
        </span>

        <h1 className="mt-[18px] text-balance font-heading text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          {caseStudy.name}
        </h1>

        <p className="mx-auto mt-4 max-w-[560px] text-pretty text-[19px] leading-[1.6] text-foreground/70">
          {caseStudy.tagline}
        </p>

        {caseStudy.services && (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {caseStudy.services.map((service) => {
              const href = techPages[service]
              return (
                <li key={service}>
                  {href ? (
                    <Link
                      href={href}
                      className="inline-block rounded-full border border-brand bg-foreground/5 px-3.5 py-1.5 text-[13.5px] text-foreground/85 transition-colors hover:bg-brand hover:text-white"
                    >
                      {service}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-full border border-transparent bg-foreground/5 px-3.5 py-1.5 text-[13.5px] text-foreground/85">
                      {service}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        )}

        {caseStudy.url && (
          <p className="mt-6">
            <a
              href={caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
            >
              Besøk nettsiden
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </p>
        )}
      </header>

      <div className="px-4 sm:px-6 lg:px-10">
        <div className="relative mx-auto aspect-[2/1] max-w-[1140px] overflow-hidden rounded-[var(--radius)]">
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
      </div>

      <div className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-[720px] text-[17px] leading-[1.75] text-foreground/80 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] [&_h2]:text-foreground [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:font-heading [&_h3]:text-[21px] [&_h3]:font-normal [&_h3]:leading-[1.3] [&_h3]:text-foreground [&_p]:mb-5 [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2:first-child]:mt-0">
          {caseStudy.content}
        </div>
      </div>

      {caseStudy.quote && (
        <div className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10">
          <figure className="relative mx-auto max-w-[1140px] overflow-hidden rounded-[var(--radius)] bg-ink px-6 py-14 text-center text-ink-foreground sm:px-12">
            <span
              aria-hidden
              className="absolute left-[6%] top-8 hidden text-[30px] leading-none text-ink-foreground/20 lg:block"
            >
              ✳
            </span>
            <blockquote className="mx-auto max-w-[720px] text-balance font-heading text-[clamp(22px,2.6vw,32px)] font-normal leading-[1.3] tracking-[-0.01em]">
              «{caseStudy.quote.text}»
            </blockquote>
            {caseStudy.quote.author && (
              <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-foreground/60">
                {caseStudy.quote.author}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <div className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10">
          <div className="mx-auto max-w-[1140px]">
            <CaseGallery gallery={caseStudy.gallery} />
          </div>
        </div>
      )}

      <div className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            href="/referanser"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle referanser
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-[15px] font-normal text-white transition-colors hover:bg-[#DD2A2C]"
          >
            Vil du ha en lignende nettside?
          </Link>
        </div>
      </div>
    </article>
  )
}
