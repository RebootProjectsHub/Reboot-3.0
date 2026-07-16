"use client"

import { useEffect } from "react"

function flash(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.classList.remove("anchor-highlight")
  // Force a reflow so the animation restarts if the same target is
  // highlighted again (e.g. clicking the same anchor link twice).
  void el.offsetWidth
  el.classList.add("anchor-highlight")
}

/**
 * Renders nothing. Flashes the element matching the URL hash so attention
 * is drawn to it — useful when a link from another page jumps straight
 * into the middle of a long page.
 *
 * A plain <a href="/tjenester#foo"> triggers a full browser navigation, so
 * the hash is already present in the URL before this component even mounts.
 * A Next <Link> to the same URL is a client-side route transition instead,
 * and in that case the hash can lag slightly behind the initial mount (the
 * router applies it as part of its own scroll-into-view handling). Retrying
 * for a short window after mount covers both cases without guessing at
 * Next's internal timing.
 */
export function AnchorHighlight() {
  useEffect(() => {
    let done = false
    let attempts = 0

    function tryFlash() {
      if (done) return
      const hash = window.location.hash.slice(1)
      if (hash && document.getElementById(hash)) {
        flash(hash)
        done = true
        return
      }
      attempts++
      if (attempts < 15) {
        // ~1.5s of retries at 100ms, covers client-side route transitions.
        setTimeout(tryFlash, 100)
      }
    }

    tryFlash()

    function onHashChange() {
      done = false
      attempts = 0
      tryFlash()
    }

    window.addEventListener("hashchange", onHashChange)
    return () => {
      done = true
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return null
}
