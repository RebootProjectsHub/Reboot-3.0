"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    oaiq?: (command: string, ...args: unknown[]) => void
  }
}

/** Event names the oaiq SDK accepts. */
export type OpenAiPixelEvent =
  | "appointment_scheduled"
  | "checkout_started"
  | "contents_viewed"
  | "items_added"
  | "lead_created"
  | "order_created"
  | "page_viewed"
  | "registration_completed"
  | "subscription_created"
  | "trial_started"

export function trackOpenAiPixelEvent(event: OpenAiPixelEvent) {
  // Undefined in dev, where the init script is not rendered.
  window.oaiq?.("event", event)
}

/**
 * The oaiq SDK does not track page views by itself — "init" only sets up the
 * queue — so each route change has to be reported explicitly.
 */
export function OpenAiPixelPageViews() {
  const pathname = usePathname()

  useEffect(() => {
    trackOpenAiPixelEvent("page_viewed")
  }, [pathname])

  return null
}
