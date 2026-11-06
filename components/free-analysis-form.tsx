"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

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

// The three required fields sit inside a sentence, so they are styled as
// underlined blanks rather than boxed inputs.
const blankClass =
  "inline-block max-w-full border-0 border-b-2 border-ink-foreground/50 bg-transparent px-1.5 pb-0.5 align-baseline leading-[1.15] font-light italic text-brand outline-none transition-colors placeholder:italic placeholder:text-ink-foreground/35 focus:border-brand aria-invalid:border-brand"

export function FreeAnalysisForm() {
  const router = useRouter()
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
    if (!name.trim()) nextErrors.name = "Fyll inn navnet ditt."
    if (!website.trim()) nextErrors.website = "Fyll inn adressen til nettsiden."
    else if (!URL_RE.test(website.trim()))
      nextErrors.website = "Sjekk at adressen er riktig, f.eks. www.dinbedrift.no."
    if (!email.trim()) nextErrors.email = "Fyll inn e-posten din."
    else if (!EMAIL_RE.test(email.trim()))
      nextErrors.email = "Ugyldig e-postadresse."

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
  const errorList = [errors.name, errors.website, errors.email].filter(Boolean)

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-8 rounded-[var(--radius)] bg-ink px-6 py-8 text-ink-foreground sm:p-10 lg:px-16 lg:py-14"
    >
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

      {/* The form as a sentence. Labels are visually hidden; the sentence
          itself tells the reader what each blank is for. */}
      <p className="font-heading text-[length:clamp(24px,3vw,42px)] font-light leading-[1.75] tracking-[-0.01em] text-ink-foreground">
        Hei, jeg heter{" "}
        <label htmlFor="name" className="sr-only">
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
          className={`${blankClass} min-w-[160px] md:min-w-[260px]`}
          placeholder="ditt navn"
        />{" "}
        og vil ha en gratis analyse av{" "}
        <label htmlFor="website" className="sr-only">
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
          className={`${blankClass} min-w-[220px] md:min-w-[360px]`}
          placeholder="www.dinbedrift.no"
        />{" "}
        Send rapporten til{" "}
        <label htmlFor="email" className="sr-only">
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
          className={`${blankClass} min-w-[200px] md:min-w-[320px]`}
          placeholder="navn@epost.no"
        />
      </p>

      {errorList.length > 0 && (
        <ul className="-mt-3 grid gap-1 text-sm text-brand" role="alert">
          {errorList.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-[60px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brand px-9 text-lg font-normal text-[var(--white)] transition-colors hover:bg-[#DD2A2C] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sender …" : "Send meg analysen"}
            <ArrowRight className="size-[18px]" aria-hidden />
          </button>
          {formError ? (
            <p className="text-sm text-brand" role="alert">
              {formError}
            </p>
          ) : (
            <p className="text-sm text-ink-foreground/60">
              Ingen forpliktelser. Vi deler aldri e-posten din.
            </p>
          )}
      </div>
    </form>
  )
}
