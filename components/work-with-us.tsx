import Image from "next/image"

export function WorkWithUs() {
  return (
    <section id="eventer" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-3">
          <div className="relative lg:col-span-2">
                <div className="overflow-hidden rounded-[var(--radius)] border border-border">
            <Image
              src="/Felles5.webp"
              alt="Teamet i Reboot i et møte rundt et bord"
              width={1200}
              height={900}
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-3 -right-3 hidden text-[46px] leading-none text-brand md:block"
          >
            ✦
          </span>
        </div>

        <div className="max-w-xl lg:pl-8">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.18em] text-brand">
            Velkommen
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Sving innom for en kaffe
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Vi holder til i Nydalen og tar gjerne en prat, uansett om du har et konkret prosjekt eller bare en idé.
          </p>
          <div className="mt-8">
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-base font-normal text-ink-foreground transition-opacity hover:opacity-85"
            >
              Send melding
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
