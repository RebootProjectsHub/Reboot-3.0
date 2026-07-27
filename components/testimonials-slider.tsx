"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

type Testimonial = { quote: string; name: string; role: string }

// Mobile-only scroll-snap slider with indicator pills echoing the logo's
// underline (Progress.svg), same motif as the pricing slider.
export function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [centerIndex, setCenterIndex] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    let raf = 0
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const containerCenter = container.scrollLeft + container.clientWidth / 2
        let closest = 0
        let closestDist = Infinity
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const cardCenter = card.offsetLeft + card.offsetWidth / 2
          const dist = Math.abs(cardCenter - containerCenter)
          if (dist < closestDist) {
            closestDist = dist
            closest = i
          }
        })
        setCenterIndex(closest)
      })
    }
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      container.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  function scrollToIndex(i: number) {
    const container = scrollRef.current
    const card = cardRefs.current[i]
    if (!container || !card) return
    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <div className="sm:hidden">
      <div
        ref={scrollRef}
        className="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="flex w-[85%] shrink-0 snap-center flex-col rounded-[var(--radius)] border border-border bg-card p-7"
          >
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand text-brand" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-[3px]">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Vis omtale fra ${t.name}`}
              aria-current={i === centerIndex}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
                i === centerIndex ? "w-8 bg-brand" : "w-4 bg-brand/25"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
