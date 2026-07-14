import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/runners-world"

export const caseStudy: CaseStudy = {
  slug: "runners-world",
  name: "Runner's World",
  tagline: "Utvikling og oppsett av ny nettside",
  services: ["WordPress", "Woocommerce", "Woocommerce Memberships", "Woocommerce Subscriptions"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Runner's World Norge",
  quote: {
    text: "Det er supert å samarbeide med Reboot - de er løsningsorienterte og utrolig kjapt på ballen.",
    author: "Sara Skarabot Pedersen, Runner's World Norge",
  },
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Runner's World Norge" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Forsiden til runnersworld.no" },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Runnersworld.no på mobil", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Runner's World Norge-magasinet i Issuu", portrait: true },
    { src: `${IMG}/skjerm-5.jpg`, alt: "Artikkelside på runnersworld.no", portrait: true },
  ],
  content: (
    <>
      <p>
        Runner's World er et globalt sirkulert månedsmagasin med digitale artikler
        for løpere av alle ferdighetssett. Vi samarbeider med Runner's World Norge
        for håndtering av deres nettside med integrasjoner, kontostyring og
        bestillingsprosess.
      </p>

      <h2>Bygget for fremtiden</h2>
      <p>
        Ved å ta i bruk standardiserte verktøy fra WordPress har vi sørget for en
        kostnadsbesparende vei videre for Runner's World. Med strømlinjede
        prosesser kan nettsiden nå levere samme funksjonalitet til sine besøkende
        til en brøkdel av utviklingskostnaden.
      </p>

      <h2>Intuitiv redigering</h2>
      <p>
        Ved å definere brukergrensesnittet etter grundige analyser av effektiv UX
        kan nå både nybegynnere og profesjonelle enkelt redigere innholdet på
        nettsiden.
      </p>
    </>
  ),
}
