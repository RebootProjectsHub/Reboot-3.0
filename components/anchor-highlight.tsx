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
 * Renders nothing. On mount (i.e. whenever this page is navigated to) and
 * on any in-page hash change, flashes the element matching the URL hash so
 * attention is drawn to it — useful when a link from another page jumps
 * straight into the middle of a long page.
 */
export function AnchorHighlight() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) flash(hash)

    function onHashChange() {
      const h = window.location.hash.slice(1)
      if (h) flash(h)
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return null
}
