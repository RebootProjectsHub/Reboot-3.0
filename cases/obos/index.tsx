import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/obos"

export const caseStudy: CaseStudy = {
  slug: "obos",
  name: "OBOS",
  tagline: "Design og utvikling av nettside med bookingsystem",
  services: ["Bookingsystem", "WooCommerce", "Vipps"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "OBOS-bygg sett nedenfra",
  quote: {
    text: "Hele prosessen med oppsett og administrasjon har vært en effektiv og produktiv opplevelse, og vi er veldig fornøyde med samarbeidet med vår driftspartner.",
    author: "Kristine Jørstad Bock, OBOS Nyegaardskvartalet",
  },
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Bookingoversikt for administratorer" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Gjesteleilighet — produktside", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Checkout med Vipps", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Min konto — oversikt over reservasjoner", portrait: true },
  ],
  content: (
    <>
      <p>
        Vi samarbeider med OBOS for å bygge deres interne nettportal for booking av
        leilighetene deres. Målet var å modernisere et gammelt og utdatert system med
        en veldesignet og brukervennlig nettside med automatisering av arbeid
        forbundet med reservasjoner.
      </p>

      <h2>Modernisering &amp; automatisering</h2>
      <p>
        OBOS sitt gamle bookingsystem var tungvint for kundene og tidkrevende å
        administrere. Med vår løsning i form av en nettside bygget rundt WooCommerce
        Bookings og Vipps Hurtigkasse kunne vi levere en langt smidigere
        brukeropplevelse.
      </p>

      <h2>Gjesteleiligheter til beboere</h2>
      <p>
        For sameier er det nå enkelt å leie ut sine gjesteleiligheter til deres
        beboere. Enkel brukerregistrering med Vipps og oversiktlig håndtering av
        reservasjoner for administratorer. Ta kontakt med oss dersom du har et
        borettslag eller sameie som ønsker en bookingløsning.
      </p>

      <h2>Typografi &amp; visuelt uttrykk</h2>
      <p>
        Valg av rett typografi og implementering av en ny fargepalett har forbedret
        brukeropplevelsen ytterligere. Dette inkluderer bruk av karakteristiske
        primær- og sekundærfarger for å fremheve riktige fokusområder som bidrar til
        en mer positiv brukeropplevelse.
      </p>
    </>
  ),
}
