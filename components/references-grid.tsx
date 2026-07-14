import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { references } from "@/cases/references"

function CardMedia({ image, video, name }: { image?: string; video?: string; name: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <Image
          src={image ?? "/placeholder.jpg"}
          alt={`Nettsiden til ${name}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
      )}
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
  const externalOnly = references.filter((ref) => !ref.caseSlug)

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Kundecaser
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withCase.map((ref) => (
            <Link key={ref.name} href={`/ny-nettside/${ref.caseSlug}`} className={cardClass}>
              <CardMedia image={ref.image} video={ref.video} name={ref.name} />
              <CardFooter name={ref.name} external={false} label="Se kundecase" />
            </Link>
          ))}
        </div>

        <p className="mt-16 font-heading text-sm font-medium uppercase tracking-[0.18em] text-brand">
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
                <CardMedia image={ref.image} video={ref.video} name={ref.name} />
                <CardFooter name={ref.name} external label={domain} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
