"use server"

import { Resend } from "resend"
import type { ContactState } from "@/lib/contact-types"

// Recipient inbox (Google Workspace). Override with CONTACT_TO if needed.
const TO = process.env.CONTACT_TO || "hallo@reboot.no"
// Must be an address on a domain verified in Resend. Once reboot.no is verified,
// e.g. "Reboot <skjema@reboot.no>". Override with CONTACT_FROM.
const FROM = process.env.CONTACT_FROM || "Reboot nettside <skjema@reboot.no>"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field. Silently accept bots.
  if ((formData.get("company") || "").toString().trim() !== "") {
    return { status: "success" }
  }

  const name = (formData.get("name") || "").toString().trim()
  const email = (formData.get("email") || "").toString().trim()
  const message = (formData.get("message") || "").toString().trim()

  const errors: ContactState["errors"] = {}
  if (!name) errors.name = "Vennligst fyll inn navn."
  if (!email) errors.email = "Vennligst fyll inn e-post."
  else if (!EMAIL_RE.test(email)) errors.email = "Ugyldig e-postadresse."
  if (message.length < 5) errors.message = "Skriv en kort melding (minst 5 tegn)."

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — cannot send email.")
    return {
      status: "error",
      formError:
        "Skjemaet er ikke satt opp ennå. Send oss gjerne en e-post på hallo@reboot.no i mellomtiden.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      text: [
        `Navn:   ${name}`,
        `E-post: ${email}`,
        "",
        message,
      ].join("\n"),
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return {
        status: "error",
        formError:
          "Noe gikk galt da meldingen skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no.",
      }
    }
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err)
    return {
      status: "error",
      formError:
        "Noe gikk galt da meldingen skulle sendes. Prøv igjen, eller send en e-post til hallo@reboot.no.",
    }
  }

  return { status: "success" }
}
