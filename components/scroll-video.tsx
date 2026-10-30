"use client"

import { useEffect, useRef } from "react"

type Props = {
  src: string
  /** First frame of the video, shown before playback and after it ends */
  poster: string
  className?: string
}

/**
 * Scrolling site capture shown in a reference card. The whole file is
 * downloaded before playback starts so the end can never stall on a slow
 * connection. It plays once when the card is in view, then rewinds to the
 * first frame and stays there.
 */
export function ScrollVideo({ src, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const controller = new AbortController()
    let objectUrl: string | undefined
    let inView = false
    let ready = false
    let started = false

    const tryPlay = () => {
      if (started || !inView || !ready) return
      started = true
      void video.play().catch(() => {})
    }

    fetch(src, { signal: controller.signal })
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob)
        video.src = objectUrl
        ready = true
        tryPlay()
      })
      .catch(() => {
        if (controller.signal.aborted) return
        // Fall back to streaming the file directly.
        video.src = src
        ready = true
        tryPlay()
      })

    const onEnded = () => {
      video.currentTime = 0
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        tryPlay()
      },
      { threshold: 0.4 },
    )

    video.addEventListener("ended", onEnded)
    observer.observe(video)

    return () => {
      controller.abort()
      video.removeEventListener("ended", onEnded)
      observer.disconnect()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src])

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      playsInline
      preload="none"
      className={className}
    />
  )
}
