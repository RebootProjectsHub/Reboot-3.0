import Image from "next/image"

export function Cta() {
  return (
    <section id="kontakt" className="relative px-4 py-12 sm:px-6 lg:px-10 lg:py-24">
      <span
        aria-hidden
        className="absolute right-[8%] top-16 hidden text-[42px] leading-none text-foreground/20 lg:block"
      >
        ✳
      </span>

      <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Vi hører gjerne fra deg
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Vi har lang erfaring med alt fra små bedrifter til store organisasjoner. Send oss en melding, så svarer vi i løpet av dagen. 
          </p>
          <div className="mt-8 text-foreground/80">
            <dl className="space-y-3 text-lg">
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">E-post:</dt>
                <dd>
                  <a href="mailto:hallo@reboot.no" className="hover:text-brand">
                    hallo@reboot.no
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Telefon:</dt>
                <dd>97 67 58 48</dd>
              </div>
            </dl>

            <div className="hidden md:block">
              <Image
                src="/Progress.svg"
                alt=""
                aria-hidden
                width={622}
                height={25}
                className="my-6 h-1.5 w-28"
              />

              <dl className="space-y-3">
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Adresse:</dt>
                  <dd>Reboot Norge AS <br /><i>Business Village Nydalen</i> <br />Sandakerveien 138 <br />0484 Oslo</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Org.nr.:</dt>
                  <dd>929 57 8139</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <form className="rounded-[var(--radius)] border border-border bg-card p-7 sm:p-9">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Navn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
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
                required
                className="rounded-xs border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
                placeholder="navn@epost.no"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="resize-none rounded-[var(--radius-xs)] border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-brand"
                placeholder="Fortell oss kort om hva vi kan hjelpe med"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex w-fit items-center justify-center justify-self-start rounded-full bg-brand px-7 py-3.5 text-base font-normal text-[var(--white)] transition-transform hover:-translate-y-0.5"
            >
              Send melding
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
