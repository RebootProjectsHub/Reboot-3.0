"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { measureOpenAiLead } from "@/components/openai-pixel"

// Same Web3Forms key as the contact form, submissions land in hallo@reboot.no.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ce2a0da5-a6a0-4eaf-a24b-ee0b678235db"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Light check: no spaces and at least one dot, with or without http(s)://.
const URL_RE = /^(https?:\/\/)?[^\s/]+\.[^\s]{2,}$/i

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

type UtmKey = (typeof UTM_KEYS)[number]
type Errors = { website?: string; email?: string; name?: string }

const SUBMIT_ERROR =
  "Noe gikk galt da forespørselen skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no."

const inputClass =
  "rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"

export function FreeAnalysisForm() {
  const router = useRouter()
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [notes, setNotes] = useState("")
  const [utm, setUtm] = useState<Partial<Record<UtmKey, string>>>({})
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle")
  const [formError, setFormError] = useState("")

  // Static export: read UTM params on the client after mount.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const found: Partial<Record<UtmKey, string>> = {}
    for (const key of UTM_KEYS) {
      const value = params.get(key)
      if (value) found[key] = value
    }
    setUtm(found)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError("")

    // Honeypot: real users never fill this; silently ignore bots.
    const botField = e.currentTarget.elements.namedItem(
      "botcheck",
    ) as HTMLInputElement | null
    if (botField?.checked) return

    const nextErrors: Errors = {}
    if (!website.trim()) nextErrors.website = "Fyll inn adressen til nettsiden."
    else if (!URL_RE.test(website.trim()))
      nextErrors.website = "Sjekk at adressen er riktig, f.eks. www.dinbedrift.no."
    if (!email.trim()) nextErrors.email = "Fyll inn e-post."
    else if (!EMAIL_RE.test(email.trim()))
      nextErrors.email = "Ugyldig e-postadresse."
    if (!name.trim()) nextErrors.name = "Fyll inn navn."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Gratis analyse: ${website.trim()}`,
          from_name: "Reboot nettside",
          nettside: website.trim(),
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          message: notes.trim() || "(ingen)",
          ...utm,
        }),
      })
      const data = await res.json()
      if (data.success) {
        await measureOpenAiLead({ name, email })
        router.push("/gratis-analyse/takk/")
      } else {
        setStatus("error")
        setFormError(SUBMIT_ERROR)
      }
    } catch {
      setStatus("error")
      setFormError(SUBMIT_ERROR)
    }
  }

  const pending = status === "submitting"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[var(--radius)] border border-border bg-card p-7 sm:p-9"
    >
      <div className="grid gap-5">
        {/* Honeypot: hidden from users, catches bots. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        {UTM_KEYS.map((key) => (
          <input key={key} type="hidden" name={key} value={utm[key] ?? ""} />
        ))}

        <div className="grid gap-2">
          <label htmlFor="website" className="text-sm font-medium text-foreground">
            Nettside
          </label>
          <input
            id="website"
            name="nettside"
            type="text"
            inputMode="url"
            autoComplete="url"
            required
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            aria-invalid={errors.website ? true : undefined}
            className={inputClass}
            placeholder="www.dinbedrift.no"
          />
          {errors.website && <p className="text-sm text-brand">{errors.website}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            className={inputClass}
            placeholder="navn@epost.no"
          />
          {errors.email && <p className="text-sm text-brand">{errors.email}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Navn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            className={inputClass}
            placeholder="Ditt navn"
          />
          {errors.name && <p className="text-sm text-brand">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="notes" className="text-sm font-medium text-foreground">
            Noe vi bør vite?{" "}
            <span className="font-normal text-foreground/50">(valgfritt)</span>
          </label>
          <textarea
            id="notes"
            name="message"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={`resize-none ${inputClass}`}
            placeholder="F.eks. hvem dere vil nå, eller hva dere er mest usikre på"
          />
        </div>

        {formError && (
          <p className="text-sm text-brand" role="alert">
            {formError}
          </p>
        )}

        <div className="mt-1 grid gap-3">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-fit cursor-pointer items-center justify-center justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-normal text-[var(--white)] transition-colors hover:bg-[#DD2A2C] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sender …" : "Send meg analysen"}
          </button>
          <p className="text-sm text-foreground/60">
            Ingen forpliktelser. Vi deler aldri e-posten din.
          </p>
        </div>
      </div>
    </form>
  )
}
