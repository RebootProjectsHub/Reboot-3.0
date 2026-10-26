import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { articleProseClass } from "@/components/post-layout"
import type { QaPage } from "@/sporsmal/types"

/** Same article shell as PostLayout, minus the date and featured image. */
export function QaLayout({ page }: { page: QaPage }) {
  return (
    <article>
      <header className="relative mx-auto max-w-[820px] px-6 pb-4 pt-16 text-center sm:pt-20">
        <span
          aria-hidden
          className="absolute left-[4%] top-10 hidden text-[26px] leading-none text-brand/40 md:block"
        >
          ✳︎
        </span>
        <span
          aria-hidden
          className="absolute right-[4%] top-14 hidden text-[20px] leading-none text-foreground/35 md:block"
        >
          ✦︎
        </span>

        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
          Spørsmål og svar
        </span>

        <h1 className="mt-[18px] text-balance font-heading text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          {page.title}
        </h1>
      </header>

      <div className="px-6 py-12 sm:py-16">
        <div className={articleProseClass} dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

        <div className="mx-auto mt-14 flex max-w-[720px] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            href="/sporsmal"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle spørsmål
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-[15px] font-normal text-white transition-colors hover:bg-[#DD2A2C]"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </article>
  )
}
