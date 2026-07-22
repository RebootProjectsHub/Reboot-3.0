import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/mad-goats"

export const caseStudy: CaseStudy = {
  slug: "mad-goats",
  name: "Mad Goats",
  tagline: "Friskere og mer moderne design, med forbedret Google-rangering",
  metaTitle: "Mad Goats – redesign med bedre ytelse og SEO",
  metaDescription:
    "Friskere og mer moderne design for Mad Goats, med raskere lastetid, forbedret Google-rangering og en nettside de enkelt oppdaterer selv.",
  url: "https://madgoats.no",
  services: ["WordPress", "Moderne redesign", "Økt ytelse", "SEO", "Enkel redigering av innhold"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Mad Goats",
  gallery: [
    { src: `${IMG}/skjerm-2.jpg`, alt: "Forsiden til madgoats.no" },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Madgoats.no på mobil", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Madgoats.no på mobil, alternativ side", portrait: true },
    { src: `${IMG}/skjerm-5.jpg`, alt: "Madgoats.no på mobil, produktside", portrait: true },
    { src: `${IMG}/skjerm-6.jpg`, alt: "Mad Goats" },
  ],
  content: (
    <>
      <p>
        Mad Goats ønsket å oppgradere deres nettside med et friskere og mer moderne
        design, samtidig som de bevarte sin høye rangering på Google. De var ute
        etter å revitalisere nettsidens estetikk og funksjonalitet.
      </p>

      <h2>Raskere, enklere, bedre</h2>
      <p>
        Reboot utviklet et nytt og moderne nettsted basert på eksisterende innhold,
        men med forbedret brukervennlighet og design skapt i Adobe XD.
        Implementeringen ble gjort i et WordPress-utviklingsmiljø. For å øke
        ytelsen, ble hosting flyttet til en raskere leverandør, og avansert
        caching-teknologi ble implementert. SEO-analyser har blitt gjennomført og
        vi fortsetter SEO-arbeidet for å sikre at nettsiden fortsetter å rangere
        høyt på Google.
      </p>

      <h2>Et kontinuerlig samarbeid</h2>
      <p>
        En kontinuerlig og åpen kommunikasjon mellom Reboot og Mad Goats var
        nøkkelen til å møte deres behov og forventninger effektivt. Dette
        samarbeidet sikret en smidig overgang til den nye plattformen. Vi ser frem
        til å fortsette dette partnerskapet for å videreutvikle og optimalisere
        nettstedet basert på brukerfeedback og teknologiske fremskritt.
      </p>

      <h2>Design som fanger interessen</h2>
      <p>
        Mad Goats fikk en betydelig oppgradert nettside som laster raskere, ser
        bedre ut og er enklere å håndtere. Vi jobber kontinuerlig med å forbedre
        deres SEO-posisjon. Den nye nettsiden har forbedret brukeropplevelsen,
        spesielt med det nye videoinnholdet og det responsive designet. De fleste
        av deres kunder er på mobil, og det nye designet er spesialtilpasset for
        dette.
      </p>
    </>
  ),
}
