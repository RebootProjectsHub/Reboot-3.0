import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/ability-media"

export const caseStudy: CaseStudy = {
  slug: "ability-media",
  name: "Ability Media",
  tagline: "Nettside for konseptet Oppdragstorget",
  metaTitle: "Ability Media – nettside for Oppdragstorget",
  metaDescription:
    "Visuell profil og ny nettside for Ability Medias tjeneste Oppdragstorget – en responsiv og intuitiv løsning som gjør tjenestene enkle å navigere.",
  image: `${IMG}/hero.jpg`,
  imageAlt: "Håndverker på jobb",
  quote: {
    text: "Reboot bygget nettsiden vår, med alt fra implementering og teknisk oppsett til brand guide og visuell profil. Vi er fornøyde med deres evne til å lytte til våre behov og visjoner og skape et produkt vi er stolte av.",
    author: "Arild Ramberg, Ability Media",
  },
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Forsiden til Oppdragstorget" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Oppdragstorget på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Oppdragstorget på mobil, alternativ side", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Oppdragstorget på mobil, tjenesteoversikt", portrait: true },
    { src: `${IMG}/skjerm-5.jpg`, alt: "Nettportalen til Oppdragstorget" },
  ],
  content: (
    <>
      <p>
        Ability Media trengte en nettside for deres konsept, Oppdragstorget. Vår
        oppgave var å skape en visuell profil for tjenesten og utvikle et
        dynamisk, intuitivt og brukervennlig nettsted.
      </p>

      <h2>En moderne nettsted-løsning</h2>
      <p>
        Ved å bruke moderne webteknologier, sikret vi at nettstedet var
        responsivt og tilgjengelig på alle enheter. Samarbeidet vårt startet med
        å få en dyp forståelse av deres forretningsmål og brukerbehov. Resultatet
        ble en skreddersydd nettside som fremhevet plattformens unike funksjoner
        og gjorde det enkelt for brukerne å navigere mellom ulike tjenester.
      </p>

      <h2>Tilpasset layout for alle enheter</h2>
      <p>
        I utformingen av nettstedet la vi stor vekt på responsivitet for å sikre
        en optimal brukeropplevelse på tvers av alle enheter. Vi utviklet et
        fleksibelt grensesnitt som automatisk tilpasser seg ulike
        skjermstørrelser og oppløsninger, fra stasjonære maskiner til mobile
        enheter. Dette sikrer at brukere får en konsistent og sømløs opplevelse,
        uavhengig av hvordan de velger å få tilgang til plattformen. Vår
        tilnærming til responsiv design betyr at nettsiden er lett tilgjengelig,
        funksjonelt og visuelt tiltalende på enhver enhet.
      </p>
    </>
  ),
}
