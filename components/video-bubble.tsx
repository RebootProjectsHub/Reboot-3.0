"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Pause, Play, Volume2, VolumeX, X } from "lucide-react"

export function VideoBubble() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  if (dismissed) return null

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <>
      {!open && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Se video fra Reboot"
            className="block size-20 cursor-pointer overflow-hidden rounded-full ring-2 ring-brand ring-offset-4 ring-offset-background transition-transform duration-200 hover:scale-105 sm:size-24"
          >
            <video
              src="/reboot-intro-kort-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
            />
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Lukk video"
            className="absolute -right-1 -top-1 inline-flex size-6 cursor-default items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-[#DD2A2C]"
          >
            <X className="size-3.5" strokeWidth={2.5} aria-hidden />
          </button>
        </div>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--ink)_35%,black)]/80 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-[26px] bg-ink"
          >
            <video
              ref={videoRef}
              src="/Reboot-velkommen.mp4"
              autoPlay
              playsInline
              muted={muted}
              onClick={togglePlay}
              onTimeUpdate={(e) => {
                const v = e.currentTarget
                setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
              }}
              onEnded={() => setOpen(false)}
              className="size-full cursor-pointer object-cover"
            />

            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--ink)_35%,black)]/90 to-transparent p-5 pb-12">
              <h3 className="font-heading text-lg font-normal text-ink-foreground">
                Hei fra oss i Reboot
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-foreground/80">
                Vurderer dere ny nettside? Be om et uforpliktende tilbud og få en
                løsning skreddersydd deres behov.
              </p>
              <a
                href="mailto:hallo@reboot.no"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink-foreground/15 px-4 py-2 text-sm font-medium text-ink-foreground backdrop-blur-sm transition-[background-color,gap] duration-200 hover:gap-2.5 hover:bg-ink-foreground/25"
              >
                Kom i gang
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Lukk video"
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-ink-foreground/15 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink-foreground/25"
            >
              <X className="size-4" strokeWidth={2.5} aria-hidden />
            </button>

            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_35%,black)]/90 to-transparent p-4 pt-12">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Spill av video"}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-foreground/15 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink-foreground/25"
              >
                {playing ? (
                  <Pause className="size-4" aria-hidden />
                ) : (
                  <Play className="size-4" aria-hidden />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Skru på lyd" : "Demp lyd"}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-foreground/15 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink-foreground/25"
              >
                {muted ? (
                  <VolumeX className="size-4" aria-hidden />
                ) : (
                  <Volume2 className="size-4" aria-hidden />
                )}
              </button>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink-foreground/20">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
