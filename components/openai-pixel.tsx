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

export function measureOpenAiPixelEvent(
  event: OpenAiPixelEvent,
  options?: { event_id: string },
) {
  // Undefined in dev, where the init script is not rendered.
  const data = { type: EVENT_TYPES[event] }
  if (options) window.oaiq?.("measure", event, data, options)
  else window.oaiq?.("measure", event, data)
}

const OPENAI_PIXEL_ID = "XW21DTQw698Emg3CaaF6P7"

/** Raw values as typed into a form. Leave out anything the form doesn't collect. */
export type OpenAiLeadUser = {
  email?: string
  phone?: string
  /** Full name from a single "Navn" field; split into first/last before hashing. */
  name?: string
}

const normalizeEmail = (v: string) => v.trim().toLowerCase()

// Lowercase, drop whitespace and ASCII punctuation, keep letters like æøå.
const normalizeName = (v: string) =>
  v.toLowerCase().replace(/[\s!-/:-@[-`{-~]/g, "")

// Digits only (drops spaces, punctuation, "+"), no leading zeros, and the
// Norwegian country code 47 prepended to bare 8-digit numbers.
function normalizePhone(v: string) {
  const digits = v.replace(/\D/g, "").replace(/^0+/, "")
  return digits.length === 8 ? `47${digits}` : digits
}

async function sha256Hex(value: string) {
  const bytes = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  )
  return Array.from(new Uint8Array(bytes), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("")
}

async function hashUser(user: OpenAiLeadUser) {
  const hashed: Record<string, string> = { country: "NO" }
  const add = async (key: string, normalized: string | undefined) => {
    if (normalized) hashed[key] = await sha256Hex(normalized)
  }

  await add("email_sha256", user.email && normalizeEmail(user.email))
  await add("phone_number_sha256", user.phone && normalizePhone(user.phone))

  const parts = (user.name ?? "").trim().split(/\s+/).filter(Boolean)
  await add("first_name_sha256", parts[0] && normalizeName(parts[0]))
  if (parts.length > 1) {
    await add("last_name_sha256", normalizeName(parts[parts.length - 1]))
  }
  return hashed
}

function newEventId() {
  return typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

/**
 * Call only after a lead submission has succeeded. Re-inits the pixel with
 * SHA-256 hashed user data (raw values never leave the browser), then fires
 * lead_created with a per-submission event_id. Never throws, so a tracking
 * failure can't block the form's own success flow.
 */
export async function measureOpenAiLead(user: OpenAiLeadUser) {
  if (!window.oaiq) return
  try {
    const hashed = await hashUser(user)
    window.oaiq("init", { pixelId: OPENAI_PIXEL_ID, user: hashed })
  } catch {
    // crypto.subtle is missing outside secure contexts; still count the lead.
  }
  measureOpenAiPixelEvent("lead_created", { event_id: newEventId() })
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
