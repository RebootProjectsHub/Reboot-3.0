import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { references } from "@/cases/references"
import { getCase } from "@/cases"
import { ScrollVideo } from "@/components/scroll-video"

/** "https://www.example.no/path" -> "example.no". Keeps æøå as written,
 *  which `new URL().hostname` would turn into punycode. */
function displayDomain(url?: string) {
  return url?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")
}

/**
 * Card media: the site screenshot (or scroll video) inside a browser window
 * drawn in CSS. The window stands on a tinted stage and runs flush into the
 * card footer. Screenshots in public/referanser are plain 5:3 captures.
 *
 * With `fill`, a photo or promo video covers the whole media area instead.
 * The browser window is still laid out (invisible) so the card keeps exactly
 * the same height as its framed neighbours and the footers line up.
 */
function CardMedia({
  image,
  video,
  poster,
  name,
  domain,
  fill = false,
}: {
  image?: string
  video?: string
  poster?: string
  name: string
  domain?: string
  fill?: boolean
}) {
  const position = fill ? "object-center" : "object-top"
  const mediaClass = `size-full object-cover ${position} transition-transform duration-500 group-hover:scale-[1.04]`

  const media =
    video && poster ? (
      <ScrollVideo src={video} poster={poster} className={mediaClass} />
    ) : video ? (
      <video src={video} autoPlay loop muted playsInline className={mediaClass} />
    ) : (
      <Image
        src={image ?? "/placeholder.jpg"}
        alt={fill ? "" : `Nettsiden til ${name}`}
        fill
        className={mediaClass}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    )

  return (
    <div className="relative bg-[#e3d2bf] px-5 pt-5 sm:px-7 sm:pt-7">
      <div
        aria-hidden={fill || undefined}
        className={`overflow-hidden rounded-t-[12px] bg-ink ${fill ? "invisible" : ""}`}
      >
        <div className="flex h-7 items-center gap-2.5 px-3">
          <span aria-hidden className="flex shrink-0 gap-[5px]">
            <span className="size-[7px] rounded-full bg-ink-foreground/35" />
            <span className="size-[7px] rounded-full bg-ink-foreground/35" />
            <span className="size-[7px] rounded-full bg-ink-foreground/35" />
          </span>
          {domain && (
            <span className="truncate font-mono text-[10px] tracking-[0.06em] text-ink-foreground/85">
              {domain}
            </span>
          )}
        </div>
        <div className="relative aspect-[5/3] overflow-hidden">{!fill && media}</div>
      </div>
      {fill && <div className="absolute inset-0 overflow-hidden">{media}</div>}
    </div>
  )
}

function CardFooter({
  name,
  external,
  label,
}: {
  name: string
  external: boolean
  label: string
}) {
  return (
    <div className="flex flex-1 items-center justify-between gap-4 p-6">
      <div>
        <h2 className="font-heading text-xl font-normal leading-snug text-foreground">
          {name}
        </h2>
        <p
          className={`mt-1 font-mono text-[11px] uppercase tracking-[0.1em] ${external ? "text-foreground/50" : "text-brand"}`}
        >
          {label}
        </p>
      </div>
      {external ? (
        <ArrowUpRight
          className="size-5 shrink-0 text-foreground/50 transition-colors group-hover:text-brand"
          aria-hidden
        />
      ) : (
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <ArrowRight className="size-4" aria-hidden />
        </span>
      )}
    </div>
  )
}

const cardClass =
  "group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand"

export function ReferencesGrid() {
  const withCase = references.filter((ref) => ref.caseSlug)

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Kundecaser
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withCase.map((ref) => (
            <Link key={ref.name} href={`/ny-nettside/${ref.caseSlug}`} className={cardClass}>
              <CardMedia
                image={ref.image}
                video={ref.video}
                poster={ref.poster}
                name={ref.name}
                domain={ref.urlLabel ?? displayDomain(getCase(ref.caseSlug!)?.url)}
                fill={ref.fill}
              />
              <CardFooter name={ref.name} external={false} label="Se kundecase" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ReferencesMoreProjects() {
  const externalOnly = references.filter((ref) => !ref.caseSlug)

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Flere prosjekter
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {externalOnly.map((ref) => {
            const domain =
              ref.urlLabel ??
              (ref.url ? new URL(ref.url).hostname.replace(/^www\./, "") : "")
            return (
              <a
                key={ref.name}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <CardMedia
                  image={ref.image}
                  video={ref.video}
                  poster={ref.poster}
                  name={ref.name}
                  domain={domain}
                  fill={ref.fill}
                />
                <CardFooter name={ref.name} external label={domain} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
