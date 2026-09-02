"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    oaiq?: (command: string, ...args: unknown[]) => void
  }
}

/**
 * The events the oaiq SDK documents, each mapped to the data object type it
 * requires. The SDK validates `data.type` against this exact mapping and
 * silently drops the event on a mismatch, so keep the pairs together.
 */
const EVENT_TYPES = {
  appointment_scheduled: "customer_action",
  checkout_started: "contents",
  contents_viewed: "contents",
  items_added: "contents",
  lead_created: "customer_action",
  order_created: "contents",
  page_viewed: "contents",
  registration_completed: "customer_action",
  subscription_created: "plan_enrollment",
  trial_started: "plan_enrollment",
} as const

export type OpenAiPixelEvent = keyof typeof EVENT_TYPES

export function measureOpenAiPixelEvent(event: OpenAiPixelEvent) {
  // Undefined in dev, where the init script is not rendered.
  window.oaiq?.("measure", event, { type: EVENT_TYPES[event] })
}

/**
 * The SDK does not track page views by itself — "init" only sets up the
 * queue — so each route change has to be measured explicitly.
 */
export function OpenAiPixelPageViews() {
  const pathname = usePathname()

  useEffect(() => {
    measureOpenAiPixelEvent("page_viewed")
  }, [pathname])

  return null
}
