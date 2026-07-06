import { ArrowUpRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Vi er veldig fornøyde med vår nye nettside og partner for drift og vedlikehold. Profesjonaliteten og oppfølgingen anbefales på det varmeste!",
    name: "Kristine Jørstad Bock",
    role: "OBOS",
  },
  {
    quote:
      "Takk for utmerket arbeid. Reboot har vært gjennomgående positive og løsningsorienterte!",
    name: "Per Øystein Feet",
    role: "Global Operations & Infrastructure, Höegh Evi",
  },
  {
    quote:
      "Det er supert å samarbeide med Reboot – de er løsningsorienterte og utrolig kjapt på ballen.",
    name: "Sara Skarabot Pedersen",
    role: "Ansvarlig redaktør, Runner's World",
  },
  {
    quote:
      "Vi er utrolig fornøyd med Reboot! Flere av hjemmesidene våre, blant annet Nannestad idrettslag og Romerikes Råeste, har fått et skikkelig oppløft. Kjempe fint og bra samarbeid!",
    name: "Ninette Olsen",
    role: "Nannestad IL",
  },
  {
    quote:
      "Reboot gir deg ikke bare arbeid av høy kvalitet, men leverer det også raskt. Personalet er vennlig, tilgjengelig og svært kompetent.",
    name: "Tony Madsen",
    role: "OgSmil AS",
  },
  {
    quote:
      "De redesignet både nettbutikk og blogg og migrerte alt til ny CMS-løsning. Vi følte vi fikk veldig mye igjen for investeringen. Kan anbefales!",
    name: "Julian Opedal",
    role: "SMRT AS",
  },
]

export function Testimonials() {
  return (
    <section id="omtaler" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-[1280px]">
        <span
          aria-hidden
          className="absolute -top-7 right-[6%] hidden text-[30px] font-bold leading-none text-brand/20 md:block"
        >
          ✺
        </span>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Dette sier kundene våre
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-brand text-brand" />
              ))}
            </div>
            <a
              href="https://www.google.com/search?sca_esv=ba3772bf42af157a&biw=2558&bih=1278&sxsrf=APpeQnuIEwonI31ZKeHHVr4XLJ_QrK5ZLw:1783265273798&q=reboot.no&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zq0F6Vz7EO5Ce7ptsEaaSkpqSdDQQjCmTN3o6t3o_ccmZAyTcZfl7BqqPKlW0Of1ZaOcyE%3D&uds=AJ5uw192rzALllUuaB2bJuLcuxCmjJGG65AhJl-lsIFqyOyceAlYkVNMWIZPkiU4-MydBzAWv_LcSnk0kXKGtNYAx7uyCI467Xa_3qrGq7RRtxgG_G5innM&sa=X&ved=2ahUKEwik_Lzp7LuVAxV-GBAIHQfFBukQ3PALegQIGxAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm font-medium text-brand underline-offset-4 hover:underline"
            >
              5,0 på Google
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[var(--radius)] border border-border bg-card p-7"
            >
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
