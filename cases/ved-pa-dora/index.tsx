import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/ved-pa-dora"

export const caseStudy: CaseStudy = {
  slug: "ved-pa-dora",
  name: "Ved På Døra",
  tagline: "Design og oppsett av nettside med nettbutikk",
  url: "https://vedpadora.no",
  services: ["Nettbutikk", "Webdesign", "Integrasjoner"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Bjørkeved stablet til tørking",
  quote: {
    text: "Med Reboot på laget har vi gått fra å være en parentes i bransjen til en stor og etablert aktør.",
    author: "Ved På Døra",
  },
  gallery: [
    { src: `${IMG}/skjerm-2.png`, alt: "Kjøp ved — produktside" },
    { src: `${IMG}/skjerm-1.jpg`, alt: "Forsiden til vedpadora.no", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Prisside på vedpadora.no", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Inspirasjonsside på vedpadora.no" },
  ],
  content: (
    <>
      <p>
        Vi startet vårt samarbeid med Ved På Døra i 2019 og jobber fremdeles tett med
        dem som partner. Gjennom vårt arbeid har de nå en 100&nbsp;% responsiv side,
        med analyseverktøy og integrasjoner til essensielle systemer, som Google
        Shopping og Ads, Vipps, Mailchimp og Prisjakt for å maksimere
        konverteringsraten på nettsiden.
      </p>

      <h2>Harmonisk design</h2>
      <p>
        Vår designmetode forener estetiske illustrasjoner og materialer med
        vektorgrafikk og tekstelementer. Dette resulterer i et godt balansert
        brukergrensesnitt med nøye plasserte CTA-knapper for å drive frem
        kjøpsprosessen.
      </p>
    </>
  ),
}
