import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/hoegh-evi"

export const caseStudy: CaseStudy = {
  slug: "hoegh-evi",
  name: "Höegh Evi",
  tagline: "Utvikling av teknisk arkitektur for ny nettside",
  metaTitle: "Höegh Evi – nettside, teknisk arkitektur og drift",
  metaDescription:
    "Vi utviklet den tekniske arkitekturen bak Höegh Evis nye nettside, og står for hosting og løpende drift. Bygget i WordPress for enkel redigering.",
  url: "https://hoeghevi.com/",
  services: [
    "Sikkerhetsarkitektur",
    "Cloud-optimalisering",
    "Plattformintegrasjon",
    "Hosting",
  ],
  image: `${IMG}/hero.webp`,
  imageAlt: "Nettsiden til Höegh Evi på ulike enheter",
  quote: {
    text: "Takk for utmerket arbeid. Reboot har vært gjennomgående positive og løsningsorienterte!",
    author: "Per Øystein Feet, IT Services and Change Manager, Höegh Evi",
  },
  gallery: [
    { src: `${IMG}/promo.mp4`, alt: "Promovideo for hoeghevi.com", video: true },
    { src: `${IMG}/skjerm-1.jpg`, alt: "Forsiden til hoeghevi.com" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Nettsiden til Höegh Evi", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Undersider på hoeghevi.com", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Innholdssider på hoeghevi.com", portrait: true },
  ],
  content: (
    <>
      <p>
        Höegh Evi, med en lang historie innen maritim energiinfrastruktur, har vært
        gjennom en omfattende rebranding og trengte i den forbindelse en moderne
        plattform for å sikre effektiv håndtering av deres nye nettside. Dette
        inkluderte oppsett av sikkerhetsinfrastruktur og vedlikeholdstjenester som
        omhandlet alt fra databaser til brukerstøtte, for å møte både nåværende og
        fremtidige behov.
      </p>

      <h2>Vår løsning</h2>
      <p>
        For å støtte Höegh Evis behov for en robust digital plattform, utviklet
        Reboot en teknisk arkitektur over flere faser. I innledende fase ble en
        utviklingsplattform satt opp med sikkerhetsprotokoller, inkludert SSL og TLS
        for stabil dataflyt. Vi implementerte en skalerbar database og konfigurerte
        systemet for dynamisk innholdshåndtering, samt en cache-løsning for rask
        henting av data og en stabil brukeropplevelse.
      </p>
      <p>
        Etter dette fokuserte vi på å opprette et staging-miljø som gjenspeilte
        utviklingsplattformen, men med tilleggsfunksjoner, bl.a. automatiske
        synkroniseringstjenester. Dette inkluderte en kontinuerlig
        publiseringsintegrasjon der kodeendringer ble automatisk publisert på staging
        for testing før lansering og kvalitetssikring.
      </p>

      <h2>Samarbeidet fortsetter</h2>
      <p>
        Gjennom tett dialog med Höegh Evi har vi kunnet tilpasse løsningen slik at vi
        kan levere pålitelig og effektiv drift av deres nettside. God
        kommunikasjonsflyt har vært en viktig faktor til suksess og vi ser frem til å
        fortsette dette gode samarbeidet.
      </p>
    </>
  ),
}
