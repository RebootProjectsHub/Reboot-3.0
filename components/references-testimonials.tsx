"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cases } from "@/cases"

const reviews = cases
  .filter((c) => c.quote)
  .map((c) => ({
    slug: c.slug,
    name: c.name,
    text: c.quote!.text,
    author: c.quote!.author,
  }))

export function ReferencesTestimonials() {
  const [index, setIndex] = useState(0)

  if (reviews.length === 0) return null

  const review = reviews[index]

  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }

  function next() {
    setIndex((i) => (i + 1) % reviews.length)
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[var(--radius)] border border-ink-foreground/15 bg-ink px-6 py-14 text-ink-foreground sm:px-12 sm:py-16">
          <figure className="mx-auto max-w-[720px] text-center">
            <div className="flex justify-center" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-brand text-brand" />
              ))}
            </div>

            <blockquote
              key={review.slug}
              className="mt-7 min-h-[100px] text-balance font-heading text-[clamp(19px,2.6vw,27px)] font-normal leading-[1.4] text-ink-foreground sm:min-h-[80px]"
            >
              «{review.text}»
            </blockquote>

            <figcaption className="mt-7">
              <p className="font-semibold text-ink-foreground">{review.author}</p>
              <Link
                href={`/ny-nettside/${review.slug}`}
                className="mt-1 inline-block text-sm text-brand underline-offset-4 hover:underline"
              >
                Se kundecase: {review.name}
              </Link>
            </figcaption>
          </figure>

          {reviews.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prev}
                aria-label="Forrige omtale"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronLeft className="size-4" aria-hidden />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((r, i) => (
                  <button
                    key={r.slug}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Vis omtale fra ${r.name}`}
                    aria-current={i === index}
                    className={`size-2 rounded-full transition-colors duration-200 ${
                      i === index ? "bg-brand" : "bg-ink-foreground/25"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Neste omtale"
                className="inline-flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
