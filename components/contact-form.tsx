"use client"

import { useActionState, useState } from "react"
import { submitContact } from "@/app/actions/contact"
import { initialContactState } from "@/lib/contact-types"

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  )
  // Controlled so the user's input survives React 19's post-action form reset
  // (otherwise a single validation error would wipe every field).
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  if (state.status === "success") {
    return (
      <div className="flex min-h-[280px] flex-col items-start justify-center rounded-[var(--radius)] border border-border bg-card p-7 sm:p-9">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-brand">
          Takk!
        </span>
        <h3 className="mt-3 font-heading text-2xl font-normal leading-snug text-foreground">
          Meldingen er sendt
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-foreground/70">
          Takk for at du tok kontakt. Vi svarer deg vanligvis i løpet av dagen.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-[var(--radius)] border border-border bg-card p-7 sm:p-9"
    >
      <div className="grid gap-5">
        {/* Honeypot — hidden from users, catches bots. */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">Bedrift (la stå tom)</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
            aria-invalid={state.errors?.name ? true : undefined}
            className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="Ditt navn"
          />
          {state.errors?.name && (
            <p className="text-sm text-brand">{state.errors.name}</p>
          )}
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
            aria-invalid={state.errors?.email ? true : undefined}
            className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="navn@epost.no"
          />
          {state.errors?.email && (
            <p className="text-sm text-brand">{state.errors.email}</p>
          )}
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
            aria-invalid={state.errors?.message ? true : undefined}
            className="resize-none rounded-[var(--radius-xs)] border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
            placeholder="Fortell oss kort om hva vi kan hjelpe med"
          />
          {state.errors?.message && (
            <p className="text-sm text-brand">{state.errors.message}</p>
          )}
        </div>

        {state.formError && (
          <p className="text-sm text-brand" role="alert">
            {state.formError}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-1 inline-flex w-fit items-center justify-center justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-normal text-[var(--white)] transition-colors hover:bg-[#DD2A2C] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sender …" : "Send melding"}
        </button>
      </div>
    </form>
  )
}
