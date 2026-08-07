"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Mobile carousel shared by every pricing grid on the site: horizontal
 * scroll-snap with the centered card shown at full size and its neighbors
 * scaled down, so whichever card is centered always reads as the focal one.
 * Cards are passed pre-rendered so each page keeps its own card markup.
 */
export function PricingCarousel({
  cards,
  initialIndex = 0,
}: {
  cards: { key: string; node: React.ReactNode }[]
  initialIndex?: number
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [centerIndex, setCenterIndex] = useState(initialIndex)

  useEffect(() => {
    const container = scrollRef.current
    const card = cardRefs.current[initialIndex]
    if (!container || !card) return
    container.scrollLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2
    // Run once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[8%] pb-2 pt-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => (
          <div
            key={card.key}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            className="w-[84%] shrink-0 snap-center"
          >
            <div
              className={`origin-center transition-transform duration-300 ${
                i === centerIndex ? "scale-100" : "scale-90"
              }`}
            >
              {card.node}
            </div>
          </div>
        ))}
      </div>

      {/* Indicator pills echo the logo's underline (Progress.svg): a long
          solid brand bar for the active card, shorter faded bars for the
          rest, animating between the two states. */}
      <div className="mt-5 flex items-center justify-center gap-[3px]">
        {cards.map((card, i) => (
          <button
            key={card.key}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Vis kort ${i + 1}`}
            aria-current={i === centerIndex}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
              i === centerIndex ? "w-8 bg-brand" : "w-4 bg-brand/25"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
