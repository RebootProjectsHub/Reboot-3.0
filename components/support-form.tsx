"use client"

import { useState } from "react"

// Same Web3Forms key as the contact form — submissions land in hallo@reboot.no.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ce2a0da5-a6a0-4eaf-a24b-ee0b678235db"

const CATEGORIES = [
  "Noe fungerer ikke",
  "Endring eller oppdatering",
  "Spørsmål",
  "Annet",
]

const PRIORITIES = [
  { value: "Lav", label: "Lav – ingen hast" },
  { value: "Normal", label: "Normal" },
  { value: "Haster", label: "Haster – nettsiden er nede eller kritisk feil" },
]

const inputClass =
  "w-full rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"

export function SupportForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [category, setCategory] = useState(CATEGORIES[0])
  const [priority, setPriority] = useState("Normal")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle")
  const [formError, setFormError] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError("")

    // Honeypot — real users never fill this; silently ignore bots.
    const botField = (e.currentTarget.elements.namedItem(
      "botcheck",
    ) as HTMLInputElement | null)
    if (botField?.checked) return

    setStatus("submitting")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Support${priority === "Haster" ? " – HASTER" : ""}] ${category}${website.trim() ? ` – ${website.trim()}` : ""}`,
          from_name: "Reboot support",
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          bedrift_nettside: website.trim(),
          type: category,
          hastegrad: priority,
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("sent")
      } else {
        throw new Error()
      }
    } catch {
      setStatus("error")
      setFormError(
        "Noe gikk galt da saken skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no.",
      )
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius)] border border-border bg-card p-7 text-center sm:p-9"
      >
        <span className="font-mono text-sm uppercase tracking-[0.18em] text-brand">
          Mottatt
        </span>
        <h2 className="mt-3 mb-4 font-heading text-[clamp(28px,3vw,36px)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          Takk, vi er på saken
        </h2>
        <p className="mx-auto max-w-[440px] text-pretty text-[17px] leading-[1.6] text-foreground/70">
          Vi har mottatt henvendelsen din og svarer så snart vi kan – vanligvis
          innen én arbeidsdag.
        </p>
      </div>
    )
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Ditt navn"
            />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="navn@epost.no"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="website" className="text-sm font-medium text-foreground">
            Bedrift / nettside
          </label>
          <input
            id="website"
            name="website"
            type="text"
            autoComplete="organization"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={inputClass}
            placeholder="F.eks. dinbedrift.no"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="category" className="text-sm font-medium text-foreground">
              Hva gjelder det?
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="priority" className="text-sm font-medium text-foreground">
              Hastegrad
            </label>
            <select
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={inputClass}
            >
              {PRIORITIES.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Beskrivelse
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-y`}
            placeholder="Beskriv saken"
          />
        </div>

        {formError && (
          <p className="text-sm text-foreground/70" role="alert">
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-1 inline-flex w-fit cursor-pointer items-center justify-center justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-normal text-[var(--white)] transition-colors hover:bg-[#DD2A2C] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sender …" : "Send supportsak"}
        </button>
      </div>
    </form>
  )
}
