"use client"

import { useEffect, useRef, useState } from "react"
import type { CaseStudy } from "@/cases/types"

type GalleryItem = NonNullable<CaseStudy["gallery"]>[number]

export function CaseGallery({ gallery }: { gallery: GalleryItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
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
        itemRefs.current.forEach((item, i) => {
          if (!item) return
          const itemCenter = item.offsetLeft + item.offsetWidth / 2
          const dist = Math.abs(itemCenter - containerCenter)
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
    const item = itemRefs.current[i]
    if (!container || !item) return
    container.scrollTo({
      left: item.offsetLeft - (container.clientWidth - item.offsetWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Mobile: edge-to-edge scroll-snap slider. Landscape shots/videos keep
          their own aspect ratio (self-start, no forced height) instead of
          being stretched to match the portrait screenshots' fixed height. */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((shot, i) => (
            <div
              key={shot.src}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              className="w-[85%] shrink-0 snap-center"
            >
              {shot.video ? (
                <video
                  src={shot.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={shot.alt}
                  className="w-full self-start rounded-[26px] border border-border"
                />
              ) : shot.portrait ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-[380px] w-auto rounded-[26px] border border-border object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full self-start rounded-[26px] border border-border"
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress-bar indicators (same motif as the pricing slider, echoing
            the logo's underline). */}
        {gallery.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-[3px]">
            {gallery.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Vis bilde ${i + 1}`}
                aria-current={i === centerIndex}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
                  i === centerIndex ? "w-8 bg-brand" : "w-4 bg-brand/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop/tablet: original wrapped layout, unchanged. */}
      <div className="hidden items-stretch justify-center gap-5 sm:flex sm:flex-wrap">
        {gallery.map((shot) =>
          shot.video ? (
            <video
              key={shot.src}
              src={shot.src}
              autoPlay
              loop
              muted
              playsInline
              aria-label={shot.alt}
              className="w-full self-start rounded-[26px] border border-border"
            />
          ) : shot.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="h-[540px] w-auto rounded-[26px] border border-border object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="w-full self-start rounded-[26px] border border-border"
            />
          ),
        )}
      </div>
    </>
  )
}
