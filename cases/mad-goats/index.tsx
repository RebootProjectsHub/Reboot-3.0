import type { CaseStudy } from "@/cases/types"

const IMG = "/ny-nettside/mad-goats"

export const caseStudy: CaseStudy = {
  slug: "mad-goats",
  name: "Mad Goats",
  tagline: "Ny nettside på et raskere teknisk fundament, bygget for synlighet i Google",
  metaTitle: "Mad Goats – raskere nettside med fokus på SEO",
  metaDescription:
    "Ny WordPress-løsning for Mad Goats: mobilscore fra 37 til 97, forsiden fra 31 MB til 0,3 MB, og en SEO-struktur som bygger videre på rangeringen de har.",
  url: "https://madgoats.no",
  services: ["WordPress", "SEO-migrering", "Hastighet", "Hosting og drift", "Flerspråklig nettside"],
  image: `${IMG}/hero.webp`,
  imageAlt: "Kajakkpadlere på Akerselva under en bro i Oslo",
  gallery: [
    { src: `${IMG}/skjerm-1.webp`, alt: "Forsiden til nye madgoats.no" },
    { src: `${IMG}/skjerm-2.webp`, alt: "Forsiden på mobil", portrait: true },
    { src: `${IMG}/skjerm-3.webp`, alt: "Oslo-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-4.webp`, alt: "Sjoa-siden på mobil", portrait: true },
    { src: `${IMG}/skjerm-6.webp`, alt: "Mad Goats på Akerselva" },
  ],
  content: (
    <>
      <p>
        Mad Goats driver kajakk, packraft, SUP, rafting og badstue i Oslo og på
        Sjoa. Nettsiden har mye innhold som allerede rangerer godt i Google, og
        de fleste kundene kommer fra mobil. Vi bygget første versjon av
        nettsiden i 2024. Nå var det tid for et sterkere teknisk fundament, i stedet for å
        fortsette å optimalisere det gamle oppsettet bit for bit.
      </p>

      <h2>To destinasjoner, tydelig struktur</h2>
      <p>
        Forsiden gir et enkelt valg mellom Oslo og Sjoa. Hver destinasjon har sin
        egen side med de viktigste aktivitetene og booking, og derfra går man
        videre til hver aktivitet. Private arrangementer er samlet på én side.
        Nettsiden er på engelsk, med norske versjoner av de viktigste sidene.
      </p>
      <p>
        Den nye løsningen er bygget i WordPress med Gutenberg-editoren, uten
        sidebygger. Det gir mindre kode på hver side, og Mad Goats redigerer
        sider og innlegg som før.
      </p>

      <h2>Synligheten i Google flyttet med</h2>
      <p>
        Mad Goats har bygget opp sterke plasseringer i Google over flere år, og
        den nye nettsiden skulle bygge videre på dem. Før vi flyttet noe, målte
        vi rangering, trafikk og indekserte sider for hele nettstedet.
      </p>
      <ul>
        <li>Over 450 gamle adresser ble gjennomgått, og alle med verdi fikk en direkte videresending</li>
        <li>Sidetitler, beskrivelser og språkkoblinger mellom engelsk og norsk ble ført videre</li>
        <li>2 206 adresser ble testet på lanseringsdagen, uten feil</li>
        <li>Rangering og indeksering følges tett de første ukene etter lansering</li>
      </ul>

      <h2>Fra 37 til 97 på mobil</h2>
      <p>
        Den gamle forsiden lastet en video på 28 MB ved første visning, og
        tunge skript fra temaet og eksterne widgets bremset alle sider. Nettsiden
        er nå flyttet fra delt webhotell til en egen skyserver hos Google Cloud,
        med caching på serveren og egen cache for mobil.
      </p>
      <ul>
        <li>Mobilscore i Google Lighthouse på forsiden: fra 37 til 97</li>
        <li>Tid til største innhold vises på mobil: fra 17 sekunder til 1,9 sekunder</li>
        <li>Forsiden veier rundt 0,3 MB, mot 31 MB før</li>
        <li>100 i tilgjengelighet på alle sidene vi målte</li>
      </ul>
      <p>
        Bilder lagres i AVIF og lastes først når de trengs. Anmeldelser og
        sosiale medier vises uten tunge tredjeparts-widgets, og
        samtykkebanneret er bygget inn i temaet.
      </p>

      <h2>Booking, nyhetsbrev og sporing</h2>
      <p>
        Bookingknappene går til BookSpot, nyhetsbrevet til Mailchimp, og Google
        Analytics og Google Ads er satt opp med samtykke, slik at Mad Goats ser
        hvilke klikk som fører til bookinger.
      </p>

      <h2>Videre SEO-arbeid</h2>
      <p>
        Vi fortsetter med SEO etter lansering, med fokus på Oslo, Sjoa og de
        viktigste aktivitetssøkene. Sider som dekker samme tema slås sammen til
        én sterkere side, og blogginnleggene oppdateres fortløpende. Vi jobber
        også med synlighet utenfor nettsiden, siden stadig flere søk skjer i
        AI-verktøy.
      </p>
    </>
  ),
}
