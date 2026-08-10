"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

type NavChild = { number: string; label: string; href: string }
type NavLink = { label: string; href: string; children?: NavChild[] }

const navLinks: NavLink[] = [
  {
    label: "Våre tjenester",
    href: "/tjenester",
    // Short labels per the header submenu; hrefs match components/services.tsx.
    children: [
      { number: "01", label: "Ny nettside", href: "/tjenester/skreddersydd-nettside" },
      { number: "02", label: "SEO", href: "/tjenester/seo-og-ai-svar" },
      { number: "03", label: "AI-rådgivning", href: "/tjenester/ai-radgivning" },
    ],
  },
  { label: "Priser", href: "/nettside-priser" },
  { label: "Kundecaser", href: "/referanser" },
  { label: "Om oss", href: "/om-oss" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(true)
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
            {navLinks.map((link) =>
              link.children ? (
                // Opens on hover and on keyboard focus (focus-within), so it
                // works for mouse, touch-after-tap and keyboard alike. The
                // parent link still navigates to the /tjenester overview.
                <div key={link.label} className="group relative flex items-center">
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-brand group-hover:text-brand group-focus-within:text-brand"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden
                      className="size-4 transition-transform duration-200 group-hover:-rotate-180 group-focus-within:-rotate-180"
                    />
                  </a>

                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="min-w-[264px] rounded-2xl border border-border bg-background p-2 shadow-[0_24px_54px_-28px_rgba(74,18,32,0.5)]">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                        >
                          <span className="w-5 shrink-0 font-mono text-[0.72rem] font-bold text-muted-foreground">
                            {child.number}
                          </span>
                          <span className="text-[0.95rem] font-medium text-foreground transition-colors group-hover/item:text-brand">
                            {child.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-normal text-ink-foreground transition-opacity hover:opacity-85"
            >
              <span aria-hidden="true" className="doodle-sparkle text-brand">
                <span className="doodle-star">✦︎</span>
                <span className="doodle-dot doodle-dot-1" />
                <span className="doodle-dot doodle-dot-2" />
              </span>
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
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="flex items-center">
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-2xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary"
                      >
                        {link.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubOpen((v) => !v)}
                        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary"
                        aria-label={subOpen ? "Skjul undermeny" : "Vis undermeny"}
                        aria-expanded={subOpen}
                      >
                        <ChevronDown
                          aria-hidden
                          className={`size-5 transition-transform duration-200 ${subOpen ? "-rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {subOpen && (
                      <div className="mb-1 ml-4 flex flex-col gap-0.5 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3.5 rounded-xl px-4 py-2.5 transition-colors hover:bg-secondary"
                          >
                            <span className="w-5 shrink-0 font-mono text-[0.72rem] font-bold text-muted-foreground">
                              {child.number}
                            </span>
                            <span className="text-[0.95rem] font-medium text-foreground/85">
                              {child.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ),
              )}
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
