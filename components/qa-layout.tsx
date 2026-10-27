import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { articleProseClass } from "@/components/post-layout"
import { qaVisuals } from "@/components/qa-visuals"
import type { QaPage } from "@/sporsmal/types"

/** Same article shell as PostLayout, minus the date, plus an Unsplash credit. */
export function QaLayout({ page }: { page: QaPage }) {
  const visual = qaVisuals[page.slug]
  let before = page.contentHtml
  let after = ""
  if (visual) {
    const at = page.contentHtml.indexOf(`<h2>${visual.beforeHeading}</h2>`)
    if (at === -1) throw new Error(`Heading "${visual.beforeHeading}" not found on ${page.slug}`)
    before = page.contentHtml.slice(0, at)
    after = page.contentHtml.slice(at)
  }

  return (
    <article>
      <header className="relative mx-auto max-w-[820px] px-6 pb-10 pt-16 text-center sm:pt-20">
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

        <h1 className="mt-[18px] text-balance font-heading text-[clamp(34px,4.5vw,54px)] font-extrabold leading-[1.1] text-foreground">
          {page.title}
        </h1>
      </header>

      <figure className="px-4 sm:px-6 lg:px-10">
        <div className="relative mx-auto aspect-[2/1] max-w-[1140px] overflow-hidden rounded-[var(--radius)]">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            width={1600}
            height={1067}
            priority
            className="h-full w-full object-cover"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
        <figcaption className="mx-auto mt-3 max-w-[1140px] text-right font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/50 [&_a]:underline-offset-4 [&_a:hover]:text-brand [&_a:hover]:underline">
          Foto:{" "}
          <a href={page.image.profileUrl} target="_blank" rel="noopener noreferrer">
            {page.image.photographer}
          </a>{" "}
          /{" "}
          <a href={page.image.photoUrl} target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
        </figcaption>
      </figure>

      <div className="px-6 py-12 sm:py-16">
        <div className={articleProseClass} dangerouslySetInnerHTML={{ __html: before }} />
        {visual && (
          <>
            <visual.Visual />
            <div className={articleProseClass} dangerouslySetInnerHTML={{ __html: after }} />
          </>
        )}

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
