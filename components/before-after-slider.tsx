"use client"

import { useState } from "react"
import { ArrowLeftRight } from "lucide-react"

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Før",
  afterAlt = "Etter",
  defaultPosition = 50,
}: {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
  defaultPosition?: number
}) {
  const [position, setPosition] = useState(defaultPosition)

  return (
    <div className="relative my-8 aspect-[1966/1390] w-full overflow-hidden rounded-[26px] border border-border select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterAlt}
        className="pointer-events-none absolute inset-0 size-full object-cover"
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={beforeAlt}
        className="pointer-events-none absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0 size-full bg-[rgba(0,0,0,0.35)]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-white/90"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
          <ArrowLeftRight className="size-4" aria-hidden />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Dra for å sammenligne før og etter"
        className="absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  )
}
