import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/ved-pa-dora"

export const caseStudy: CaseStudy = {
  slug: "ved-pa-dora",
  name: "Ved På Døra",
  tagline: "Design og oppsett av nettside med nettbutikk",
  metaTitle: "Ved På Døra – nettbutikk med Vipps og integrasjoner",
  metaDescription:
    "Nettbutikk for Ved På Døra med Vipps, Google Shopping, Prisjakt og Mailchimp. Vi har vært partneren deres siden 2019 med design, drift og utvikling.",
  url: "https://vedpadora.no",
  services: ["WordPress", "WooCommerce", "Webdesign", "Integrasjoner"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Bjørkeved stablet til tørking",
  quote: {
    text: "Anbefales på det sterkeste! Ved på Døra har samarbeidet tett med Reboot siden 2019, og de har de virkelig løftet nettsiden vår til nye høyder. Nettsiden er nå 100% responsiv, med smarte verktøy og systemer som virkelig gir resultater.",
    author: "Christina Håland, Ved På Døra",
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
