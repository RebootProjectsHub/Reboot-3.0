import Image from "next/image"

const columns = [
  {
    title: "Våre tjenester",
    links: [
      { label: "Ny nettside", href: "/tjenester" },
      { label: "Redesign", href: "/tjenester" },
      { label: "SEO og AI-søk", href: "/tjenester" },
      { label: "Hosting & support", href: "/tjenester#vedlikehold-og-support" },
    ],
  },
  {
    title: "Bli kjent med oss",
    links: [
      { label: "Kundecaser", href: "/referanser" },
      { label: "Om oss", href: "/om-oss" },
      { label: "Aktuelt", href: "/trender" },
      { label: "Ta kontakt", href: "/kontakt" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-10 lg:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/Reboot-cream.svg"
              alt="Reboot"
              width={150}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-6 max-w-xs leading-relaxed text-ink-foreground/70">
              Moderne nettsider med fokus på synlighet på Google og i AI-søk.
            </p>
            <a
              href="mailto:hallo@reboot.no"
              className="mt-5 block font-normal text-ink-foreground underline-offset-4 hover:underline"
            >
              hallo@reboot.no
            </a>
            <a
              href="tel:+4797675848"
              className="block font-normal text-ink-foreground underline-offset-4 hover:underline"
            >
              +47 97 67 58 48
            </a>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-xs font-normal text-ink-foreground/60">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ink-foreground/85 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 font-mono text-xs text-ink-foreground/60 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p>Reboot Norge AS </p>
            <p>Business Village Nydalen, Sandakerveien 138, 0484 Oslo</p>
            <p>Org.nr. 929 57 8139</p>
          </div>
          <p>Designet og utviklet i Nydalen, Oslo</p>
        </div>
      </div>
    </footer>
  )
}
