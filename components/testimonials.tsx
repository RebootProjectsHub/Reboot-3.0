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
              href="https://www.google.com/search?sa=X&sca_esv=ba3772bf42af157a&sxsrf=APpeQnsXDry-b4d9A8A_6udRT-vBckqlFQ:1783773227916&q=Reboot+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDcwMzI0N7I0sjAyNTAyNDQ2MdjAyPiKkS8oNSk_v0QhKLUsM7W8eBErmgAAvsa6BD0AAAA&rldimm=17062172928250211340&tbm=lcl&hl=en-NO&ved=2ahUKEwix8O-M0cqVAxVdBxAIHSlwA-4Q9fQKegQIURAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm font-medium text-brand underline-offset-4 hover:underline"
            >
              5,0 på Google
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-[var(--radius)] border border-border bg-card p-7 sm:w-auto sm:shrink sm:snap-align-none"
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
