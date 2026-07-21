"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// Web3Forms access key — get a free one at https://web3forms.com (just enter
// hallo@reboot.no). It is public by design (it ships in the page), so it's fine
// to commit. Can also be provided via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ce2a0da5-a6a0-4eaf-a24b-ee0b678235db"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Errors = { name?: string; email?: string; message?: string }

export function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle")
  const [formError, setFormError] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError("")

    // Honeypot — real users never fill this; silently ignore bots.
    const botField = (e.currentTarget.elements.namedItem(
      "botcheck",
    ) as HTMLInputElement | null)
    if (botField?.checked) return

    const nextErrors: Errors = {}
    if (!name.trim()) nextErrors.name = "Vennligst fyll inn navn."
    if (!email.trim()) nextErrors.email = "Vennligst fyll inn e-post."
    else if (!EMAIL_RE.test(email.trim()))
      nextErrors.email = "Ugyldig e-postadresse."
    if (message.trim().length < 5)
      nextErrors.message = "Skriv en kort melding (minst 5 tegn)."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error")
      setFormError(
        "Skjemaet er ikke satt opp ennå. Send oss gjerne en e-post på hallo@reboot.no i mellomtiden.",
      )
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Ny henvendelse fra ${name.trim()}`,
          from_name: "Reboot nettside",
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        // Redirect to the confirmation page (keep the button in its
        // submitting state until the navigation completes).
        router.push("/takk-for-meldingen/")
      } else {
        setStatus("error")
        setFormError(
          "Noe gikk galt da meldingen skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no.",
        )
      }
    } catch {
      setStatus("error")
      setFormError(
        "Noe gikk galt da meldingen skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no.",
      )
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
        {/* Honeypot — hidden from users, catches bots. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Navn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="Ditt navn"
          />
          {errors.name && <p className="text-sm text-brand">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="navn@epost.no"
          />
          {errors.email && <p className="text-sm text-brand">{errors.email}</p>}
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            className="resize-none rounded-[var(--radius-xs)] border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="Fortell oss kort om hva vi kan hjelpe deg med"
          />
          {errors.message && (
            <p className="text-sm text-brand">{errors.message}</p>
          )}
        </div>

        {formError && (
          <p className="text-sm text-brand" role="alert">
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-1 inline-flex w-fit cursor-pointer items-center justify-center justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-normal text-[var(--white)] transition-colors hover:bg-[#DD2A2C] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sender …" : "Send melding"}
        </button>
      </div>
    </form>
  )
}
