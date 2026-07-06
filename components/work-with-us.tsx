import Image from "next/image"

export function WorkWithUs() {
  return (
    <section id="eventer" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[var(--radius)] border border-border">
            <Image
              src="/team-meeting.jpg"
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

        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Hva koster en nettside?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Vi mener prising skal være enkelt og forutsigbart. Våre skreddersydde og SEO-optimaliserte nettsider har en fastpris på <strong>29 900,-</strong> og de fleste som tar kontakt med oss havner nettopp der. Har du enklere eller mer omfattende behov, tilpasser vi løsningen og prisen deretter.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/80">
            Ta kontakt, så finner vi riktig løsning for deg.
          </p>
          <div className="mt-8">
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-base font-normal text-ink-foreground transition-transform hover:-translate-y-0.5"
            >
              Få et tilbud
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
