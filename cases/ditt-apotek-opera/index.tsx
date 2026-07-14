import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/ditt-apotek-opera"

export const caseStudy: CaseStudy = {
  slug: "ditt-apotek-opera",
  name: "Ditt Apotek",
  tagline: "Nettbutikk bygget for et stort produktvolum",
  services: ["Webdesign", "Shopify", "BankID", "Vipps"],
  image: `${IMG}/hero.jpg`,
  imageAlt: "Ditt Apotek sin fysiske butikk ved Operaen i Bjørvika",
  gallery: [
    { src: `${IMG}/skjerm-1.jpg`, alt: "Forsiden til Ditt Apotek sin nettbutikk" },
    { src: `${IMG}/skjerm-2.jpg`, alt: "Produktvisning på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.jpg`, alt: "Handlekurv på mobil", portrait: true },
    { src: `${IMG}/skjerm-4.jpg`, alt: "Checkout på mobil", portrait: true },
  ],
  content: (
    <>
      <p>
        Med et økende behov for digitalisering satte Ditt Apotek seg et ambisiøst
        mål: å øke omsetningen deres ved å tilgjengeliggjøre produktene deres på nett
        og nå ut til et større publikum gjennom en ny nettbutikkløsning.
        Utfordringene var likevel betydelige. Med en stor mengde produkter å
        håndtere, var nøkkelen å skape en nettbutikk som ikke bare var brukervennlig,
        men også rask og effektiv.
      </p>

      <h2>Innovative løsninger for en positiv kundeopplevelse</h2>
      <p>
        For å takle utfordringene, valgte vi å benytte Shopify som rammeverk for
        nettbutikken, kjent for sin robusthet og skalerbarhet. Integreringen av
        Vipps betalingsløsning sikret en sømløs og trygg transaksjonsprosess for
        kundene, mens skreddersydd koding i JavaScript og Ruby ble implementert for
        å møte spesifikke behov og forbedre brukeropplevelsen ytterligere. Denne
        kombinasjonen av teknologier tillot oss å skape en skreddersydd løsning som
        effektivt kunne håndtere et stort produktvolum, samtidig som det var enkelt
        for kundene å navigere og utføre kjøp.
      </p>

      <h2>Rustet for fremtiden</h2>
      <p>
        Gjennom å kombinere avansert teknologi med en dyp forståelse av kundenes
        behov, har vi skapt en nettbutikkløsning for Ditt Apotek som setter nye
        standarder for tilgjengelighet og brukervennlighet i apotekbransjen. Vår
        reise sammen med Ditt Apotek er et bevis på kraften i overgang til digitale
        plattformer, og vi ser frem til de neste kapitlene i denne
        suksesshistorien.
      </p>

      <h2>Målbare resultater og kundetilfredshet</h2>
      <p>
        Lanseringen av nettbutikken har allerede vist lovende resultater, med en
        merkbar økning i salg og kundetilfredshet. Disse tidlige
        suksessindikatorene bekrefter at tilnærmingen ikke bare møtte de
        opprinnelige målene, men også overgikk forventningene. Med Shopify i bunn
        er det i tillegg enkelt for de ansatte å håndtere produkter og ordre, og
        samtidig hente ut detaljert statistikk for videre forbedring av
        nettbutikken.
      </p>

      <h2>Kontinuerlig forbedring og utvikling</h2>
      <p>
        Å bygge en nettbutikk er imidlertid bare begynnelsen. I tett samarbeid med
        Ditt Apotek, fortsetter vi å videreutvikle løsningen for å sikre at den
        henger med på de nyeste teknologiske fremskritt og samtidig kundenes
        forventninger. Dette partnerskapet er sentralt i vår strategi for
        kontinuerlig forbedring, hvor vi sammen utforsker nye muligheter for
        innovasjon og tilrettelegger for fremtidig vekst.
      </p>
    </>
  ),
}
