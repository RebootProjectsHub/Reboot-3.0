import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/messecup"

export const caseStudy: CaseStudy = {
  slug: "messecup",
  name: "Messecup",
  tagline: "Ny nettside for Tønsberg Turns håndballturnering",
  image: `${IMG}/hero.jpg`,
  imageAlt: "Håndballturnering",
  quote: {
    text: "Veldig fornøyd, nettsiden de satt opp for oss ble kjempe bra! De forstod kjapt hva vi så for oss. Kjapp respons og god service!",
    author: "Tina Madeleine Akerholdt, Tønsberg Turn",
  },
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Forsiden til Messecup" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Messecup på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Messecup på mobil, alternativ side", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Messecup på mobil, påmelding", portrait: true },
    { src: `${IMG}/skjerm-5.jpeg`, alt: "Håndballhall" },
  ],
  content: (
    <>
      <p>
        Messecup, en håndballturnering for barn arrangert av Tønsberg Turn, trengte
        en effektiv og moderne nettside for å fremme sin årlige begivenhet. Vårt
        samarbeid sentrerte seg rundt å skape en intuitiv, brukervennlig og visuelt
        tiltalende nettside som reflekterer turneringens energi og samhold.
      </p>

      <h2>Lettbeint og oversiktlig layout</h2>
      <p>
        Målet med prosjektet var å skape en responsiv og brukervennlig nettside som
        gjør det enkelt for deltakere å registrere seg og for arrangører å håndtere
        turneringen effektivt. Implementerte av et påmeldingssystem som er sømløst
        integrert med nettsiden tillater en effektiv og problemfri registrering for
        lag, og hjelper arrangørene med å organisere turneringen på en mer effektiv
        måte.
      </p>

      <h2>Fokus på brukeropplevelse</h2>
      <p>
        Ved å velge levende og dynamiske farger som reflekterer Messecups barnlige
        energi og ånd, har vi forbedret brukeropplevelsen. Dette, kombinert med en
        intuitiv navigasjonsstruktur, sikrer at besøkende finner informasjonen de
        trenger med letthet.
      </p>
    </>
  ),
}
