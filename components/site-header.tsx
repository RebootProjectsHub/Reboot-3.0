"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Dette gjør vi", href: "#tjenester" },
  { label: "Kundecaser", href: "#kundecaser" },
  { label: "Aktuelt", href: "#aktuelt" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Ta kontakt", href: "#kontakt" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="Reboot forside">
          <Image
            src="/Reboot3.svg"
            alt="Reboot"
            width={200}
            height={52}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hovedmeny">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-normal text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            Kontakt oss
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4" aria-label="Mobilmeny">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-base font-normal text-ink-foreground"
            >
              Kontakt oss
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
