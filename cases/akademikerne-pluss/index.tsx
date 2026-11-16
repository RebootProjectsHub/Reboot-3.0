import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/akademikerne-pluss"

export const caseStudy: CaseStudy = {
  slug: "akademikerne-pluss",
  name: "Akademikerne Pluss",
  tagline: "Implementering av nytt design i WordPress for medlemsfordeler",
  metaTitle: "Akademikerne Pluss – nytt design i WordPress",
  metaDescription:
    "Vi implementerte nytt design fra Figma i den eksisterende WordPress-siden til Akademikerne Pluss, med maler og landingssider bygget mobil først.",
  url: "https://akademikernepluss.no/",
  services: [
    "WordPress",
    "Elementor",
    "Implementering fra Figma",
    "Mobil først",
  ],
  image: `${IMG}/hero.webp`,
  imageAlt: "Kvinne som bruker mobilen i Bjørvika i Oslo",
  gallery: [
    { src: `${IMG}/skjerm-1.webp`, alt: "Forsiden til akademikernepluss.no" },
    { src: `${IMG}/skjerm-2.webp`, alt: "Medlemsbevis-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.webp`, alt: "Bli medlem-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-4.webp`, alt: "A+ appen-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-5.webp`, alt: "Landingssiden for A+ Arbeidslivsmestring" },
  ],
  content: (
    <>
      <p>
        Akademikerne Pluss forhandler frem medlemsfordeler for 10 fagforeninger
        tilknyttet Akademikerne, med over 118&nbsp;000 medlemmer. På nettsiden
        finner medlemmene fordelene sine, henter medlemsbeviset og laster ned
        A+ appen.
      </p>
      <p>
        Akademikerne Pluss hadde jobbet frem et nytt design i Figma sammen med
        en UX-designer. Vår oppgave var å bygge det i WordPress.
      </p>

      <h2>Videreutvikle i stedet for å bygge på nytt</h2>
      <p>
        Vi vurderte først å bygge siden på nytt. Den eksisterende
        WordPress-siden var i god stand og hadde en del spesialfunksjonalitet,
        så en flytting ville blitt unødvendig tidkrevende og dyr. Vi valgte
        derfor å bygge videre på den, med Elementor.
      </p>
      <p>
        Det gjorde det også mulig å ta i bruk nye sider underveis, uten å vente
        på at alt var ferdig. Vi jobbet på en egen testside, og
        Akademikerne Pluss kunne følge med og gi tilbakemeldinger fortløpende.
      </p>

      <h2>Mobil først</h2>
      <p>
        Over 80&nbsp;% av trafikken til nettsiden kommer fra mobil. Derfor
        prioriterte vi mobilvisningen på hver side, før nettbrett og desktop.
      </p>
      <p>Oppdraget omfattet:</p>
      <ul>
        <li>2 maler for artikkelsider og kampanjesider</li>
        <li>9 landingssider, blant annet Medlemsbevis, Bli medlem og A+ appen</li>
        <li>Rådgivning innen WordPress og Elementor</li>
      </ul>
      <p>
        Vi implementerte sidene i takt med at UX-designeren ble ferdig med
        dem, og bygget på de faste komponentene i designfilen. Der
        Akademikerne Pluss skulle lage egne elementer, som spørsmål og svar og
        enkelte deler av forsiden, satte vi av plass slik at de kunne legge dem
        inn selv.
      </p>

      <h2>Ny landingsside på få dager</h2>
      <p>
        Høsten 2025 trengte Akademikerne Pluss en landingsside for tilbudet A+
        Arbeidslivsmestring, med kort frist. Utgangspunktet var et halvferdig
        design. Vi satte opp siden i Elementor og leverte et første utkast
        innen fristen, med egne plasser for widgetene de lager selv.
      </p>
    </>
  ),
}
