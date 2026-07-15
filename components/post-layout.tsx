import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Post } from "@/posts/types"

export function PostLayout({ post }: { post: Post }) {
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
          {post.category}
        </span>

        <h1 className="mt-[18px] text-balance font-heading text-[clamp(34px,4.5vw,54px)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
          {post.title}
        </h1>

        <p className="mt-5 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground/60">
          <time dateTime={post.dateISO}>{post.date}</time>
        </p>
      </header>

      <div className="px-4 sm:px-6 lg:px-10">
        <div className="relative mx-auto aspect-[2/1] max-w-[1140px] overflow-hidden rounded-[var(--radius)]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
      </div>

      <div className="px-6 py-12 sm:py-16">
        <div
          className="mx-auto max-w-[720px] text-[17px] leading-[1.75] text-foreground/80 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] [&_h2]:text-foreground [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:font-heading [&_h3]:text-[21px] [&_h3]:font-normal [&_h3]:leading-[1.3] [&_h3]:text-foreground [&_p]:mb-5 [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline [&_code]:rounded-md [&_code]:bg-foreground/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[14px] [&_code]:text-foreground [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1.5 [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:font-heading [&_blockquote]:text-[21px] [&_blockquote]:text-foreground [&_figure]:my-9 [&_img]:w-full [&_img]:rounded-[26px] [&_figcaption]:mt-3 [&_figcaption]:text-center [&_figcaption]:font-mono [&_figcaption]:text-[12px] [&_figcaption]:uppercase [&_figcaption]:tracking-[0.08em] [&_figcaption]:text-foreground/50"
        >
          {post.contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : (
            post.content
          )}
        </div>

        <div className="mx-auto mt-14 flex max-w-[720px] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            href="/trender"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle artikler
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-[15px] font-normal text-white transition-colors hover:bg-[#DD2A2C]"
          >
            Snakk med oss
          </Link>
        </div>
      </div>
    </article>
  )
}
