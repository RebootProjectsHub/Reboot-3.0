import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { posts } from "@/posts"

const solidVariants = [
  {
    card: "bg-ink text-ink-foreground",
    kicker: "text-ink-foreground/70",
    arrow: "text-ink-foreground/70 group-hover:text-ink-foreground",
  },
  {
    card: "bg-brand/25 text-foreground",
    kicker: "text-foreground/70",
    arrow: "text-foreground/70 group-hover:text-foreground",
  },
  {
    card: "bg-brand text-brand-foreground",
    kicker: "text-brand-foreground/80",
    arrow: "text-brand-foreground/80 group-hover:text-brand-foreground",
  },
]

export function Articles() {
  const [featured, ...rest] = posts.slice(0, 4)

  return (
    <section id="aktuelt" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Aktuelt fra Reboot
          </h2>
          <a
            href="/trender"
            className="hidden w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            Se flere artikler
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured && (
            <Link
              href={`/trender/${featured.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {featured.category}
                  </span>
                  <time dateTime={featured.dateISO} className="font-mono text-[11px] text-foreground/50">
                    {featured.date}
                  </time>
                </div>
                <h3 className="mt-3 font-heading text-lg font-normal leading-snug text-foreground">
                  {featured.title}
                </h3>
              </div>
            </Link>
          )}

          {rest.map((post, i) => {
            const variant = solidVariants[i % solidVariants.length]
            return (
              <Link
                key={post.slug}
                href={`/trender/${post.slug}`}
                className={`group flex flex-col justify-between rounded-[var(--radius)] p-7 transition-opacity hover:opacity-90 ${variant.card}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-[0.14em] ${variant.kicker}`}
                  >
                    {post.category}
                  </span>
                  <time dateTime={post.dateISO} className={`font-mono text-[11px] ${variant.kicker}`}>
                    {post.date}
                  </time>
                </div>
                <h3 className="mt-10 font-heading text-2xl font-normal leading-snug">
                  {post.title}
                </h3>
                <ArrowUpRight className={`mt-6 size-6 transition-colors ${variant.arrow}`} />
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="/trender"
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary"
          >
            Se flere artikler
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
