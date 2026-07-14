import type { CaseStudy } from "@/cases/types"
import { BeforeAfterSlider } from "@/components/before-after-slider"

const IMG = "/ny-nettside/fjellveterinaeren"

export const caseStudy: CaseStudy = {
  slug: "fjellveterinaeren",
  name: "Fjellveterinæren",
  tagline: "Ny visuell profil og nettside for veterinærklinikk",
  url: "https://fjellveterinæren.no",
  services: [
    "Visuell profil",
    "Mobilvennlig nettside",
    "SEO-optimalisering",
    "Facebook-integrasjon",
  ],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Fjellveterinæren",
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Demo av nye fjellveterinæren.no", portrait: true },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Demo av nye fjellveterinæren.no, forside", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Hvem er Fjellveterinæren-siden", portrait: true },
    { src: `${IMG}/brandguide.jpg`, alt: "Fjellveterinærens brand guide" },
  ],
  content: (
    <>
      <h2>En varm og innbydende profil</h2>
      <p>
        For å gi Fjellveterinæren en helhetlig oppgradering, utviklet vi en ny
        designmanual med tilpasset logo, typografi og fargepalett. Den visuelle
        profilen består av lyse, myke pasteller med rosa og blå aksenter – en
        vennlig og omsorgsfull estetikk som skaper trygghet og tillit hos kundene.
      </p>
      <p>
        Nettsiden er 100&nbsp;% responsiv, med en designstruktur som sikrer enkel
        navigasjon på både mobil og nettbrett. Store trykkvennlige knapper,
        lettleste fonter og en logisk meny gjør det enkelt for kundene å finne
        informasjon og bestille time – uansett enhet.
      </p>

      <h3>Se før og etter</h3>
      <BeforeAfterSlider
        before={`${IMG}/for.jpg`}
        after={`${IMG}/etter.jpg`}
        beforeAlt="Gamle fjellveterinæren.no"
        afterAlt="Nye fjellveterinæren.no"
      />

      <h2>En ny nettside tilpasset dagens behov</h2>
      <p>
        Den nye nettsiden ble utviklet i WordPress, med et intuitivt og
        brukervennlig oppsett som gjør det enkelt for Fjellveterinæren å oppdatere
        innhold selv.
      </p>
      <p>
        I tillegg har vi optimalisert siden for SEO og ytelse, slik at den både
        lastes raskt og rangerer bedre i Google-søk.
      </p>
      <ul>
        <li>Kontaktskjema for enkel kommunikasjon</li>
        <li>Automatisk Facebook-feed, slik at nye innlegg vises direkte på nettsiden</li>
        <li>Kalender for åpningstider og kommende arrangementer</li>
        <li>Brukervennlig navigasjon for enkel tilgang til informasjon</li>
      </ul>
      <p>
        Gjennom hele prosessen hadde vi en tett dialog med Fjellveterinæren, med
        møter både digitalt og fysisk for å sikre at sluttresultatet ble akkurat
        slik de ønsket. Videre har vi inngått en driftsavtale for vedlikehold og
        SEO-optimalisering, slik at nettsiden forblir rask, sikker og oppdatert i
        fremtiden.
      </p>
    </>
  ),
}
