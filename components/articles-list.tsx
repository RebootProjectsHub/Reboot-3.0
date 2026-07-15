import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { posts } from "@/posts"

const PAGE_SIZE = 12

// Static, path-based pagination (works with static export / GitHub Pages):
// page 1 lives at /trender, the rest at /trender/side/<n>.
function pageHref(n: number): string {
  return n <= 1 ? "/trender" : `/trender/side/${n}`
}

export function ArticlesList({ page }: { page: number }) {
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pagePosts = posts.slice(start, start + PAGE_SIZE)

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/trender/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.dateISO}
                    className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/50"
                  >
                    {post.date}
                  </time>
                </div>
                <h2 className="mt-3 font-heading text-xl font-normal leading-snug text-foreground">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Sidenavigasjon"
            className="mt-12 flex items-center justify-center gap-2"
          >
            <Link
              href={currentPage > 1 ? pageHref(currentPage - 1) : "#"}
              aria-disabled={currentPage === 1}
              className={`inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors ${
                currentPage === 1
                  ? "pointer-events-none opacity-30"
                  : "hover:border-brand hover:text-brand"
              }`}
            >
              <ChevronLeft className="size-4" aria-hidden />
            </Link>

            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1
              const isCurrent = n === currentPage
              return (
                <Link
                  key={n}
                  href={pageHref(n)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex size-10 items-center justify-center rounded-full font-mono text-[13px] transition-colors ${
                    isCurrent
                      ? "bg-brand text-white"
                      : "border border-border text-foreground/70 hover:border-brand hover:text-brand"
                  }`}
                >
                  {n}
                </Link>
              )
            })}

            <Link
              href={currentPage < totalPages ? pageHref(currentPage + 1) : "#"}
              aria-disabled={currentPage === totalPages}
              className={`inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-30"
                  : "hover:border-brand hover:text-brand"
              }`}
            >
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </nav>
        )}
      </div>
    </section>
  )
}
