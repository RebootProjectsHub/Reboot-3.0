import type { CaseStudy } from "@/cases/types"
import { BeforeAfterSlider } from "@/components/before-after-slider"

const IMG = "/ny-nettside/oslo-city-legesenter"

export const caseStudy: CaseStudy = {
  slug: "oslo-city-legesenter",
  name: "Oslo City Legesenter",
  tagline: "Implementering av ny nettside for legesenter",
  url: "https://www.oslocitylegesenter.no/",
  services: [
    "Tydelig struktur og enkel navigasjon",
    "Mobiltilpasset løsning",
    "Klart og forståelig innhold",
    "Enkel administrasjon av innhold",
  ],
  image: `${IMG}/banner.jpg`,
  imageAlt: "Oslo City Legesenter",
  gallery: [
    { src: `${IMG}/skjerm-1.png`, alt: "Forsiden til nye oslocitylegesenter.no" },
    { src: `${IMG}/skjerm-2.png`, alt: "Om oss-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.png`, alt: "Om oss-siden på mobil, alternativ visning", portrait: true },
    { src: `${IMG}/skjerm-4.png`, alt: "Smakirurgi-siden på mobil", portrait: true },
    { src: `${IMG}/footer.jpg`, alt: "Oslo City Legesenter" },
  ],
  content: (
    <>
      <p>
        Oslo City Legesenter ønsket å oppdatere nettsiden for å gjøre informasjonen
        mer tilgjengelig og enklere å bruke for pasientene. Behovene hadde endret
        seg over tid, særlig med økt bruk av mobil og høyere forventninger til
        oversikt og tilgjengelighet.
      </p>

      <h2>En mer brukervennlig nettside</h2>
      <p>
        For Oslo City Legesenter handlet arbeidet om å rydde i struktur og innhold,
        og gjøre nettsiden enklere å bruke i praksis. Vi tok utgangspunkt i
        eksisterende uttrykk og la vekt på tydelig informasjonsflyt, logisk
        oppbygning og klare valg for pasientene.
      </p>
      <p>
        Nettsiden er tilpasset bruk på mobil og mindre skjermer, med bedre
        lesbarhet og enklere navigasjon. Viktig informasjon er samlet og gjort
        lettere tilgjengelig. Pasienter finner raskt det de trenger, enten det
        gjelder åpningstider, tjenester eller kontakt.
      </p>

      <h3>Se før og etter</h3>
      <BeforeAfterSlider
        before={`${IMG}/for.png`}
        after={`${IMG}/etter.png`}
        beforeAlt="Gamle oslocitylegesenter.no"
        afterAlt="Nye oslocitylegesenter.no"
      />

      <h2>Raskere vei til riktig behandling</h2>
      <p>
        Oslo City Legesenter er en privat klinikk i Oslo sentrum, med time på dagen
        og uten krav om henvisning. De tilbyr både allmennlege og flere
        spesialisttjenester, blant annet gynekologi, hudlege og nevrologi, i
        tillegg til vaksinasjon, attester, ultralyd og videokonsultasjoner.
      </p>
      <p>
        I arbeidet vårt handlet det derfor om å gjøre pasientreisen rask og
        friksjonsfri. Vi bygget opp nettsiden i WordPress med Elementor. Strukturen
        gjør det enkelt å velge riktig tjeneste, forstå hva som passer for eget
        behov og gå videre til timebestilling eller kontakt.
      </p>
    </>
  ),
}
