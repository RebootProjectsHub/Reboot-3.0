"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Våre tjenester", href: "/tjenester" },
  { label: "Priser", href: "/nettside-priser" },
  { label: "Kundecaser", href: "/referanser" },
  { label: "Om oss", href: "/om-oss" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let raf = 0
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const currentY = window.scrollY
        setHidden(currentY > 80 && currentY > lastScrollY.current)
        lastScrollY.current = currentY
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transform-gpu bg-background transition-transform duration-300 ease-in-out lg:translate-y-0 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <a href="/" className="flex items-center" aria-label="Reboot forside">
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
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-normal text-ink-foreground transition-opacity hover:opacity-85"
            >
              Kontakt oss
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="/kontakt"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary"
            >
              Kontakt oss
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
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
            </nav>
          </div>
        )}
      </header>
      {/* Reserves the header's space in normal flow, since the header
          itself is fixed (not sticky) and out of document flow. */}
      <div className="h-20" aria-hidden />
    </>
  )
}
