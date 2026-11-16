import type { Reference } from "@/cases/types"

/**
 * All references shown on /referanser, in display order (matches the old site).
 * Entries with `caseSlug` link to their case page under /ny-nettside/<slug>;
 * the rest link out to the client's live website.
 */
export const references: Reference[] = [
  {
    name: "OBOS",
    caseSlug: "obos",
    image: "/work-obos.webp",
    fill: true,
  },
  {
    name: "Höegh Evi",
    caseSlug: "hoegh-evi",
    video: "/referanser/hoegh-evi.mp4",
    fill: true,
  },
  {
    name: "Akademikerne Pluss",
    caseSlug: "akademikerne-pluss",
    image: "/ny-nettside/akademikerne-pluss/hero.webp",
    fill: true,
  },
  {
    name: "Runner's World",
    caseSlug: "runners-world",
    image: "/ny-nettside/runners-world/hero.webp",
    fill: true,
  },
  {
    name: "Ved På Døra",
    caseSlug: "ved-pa-dora",
    image: "/referanser/ved-pa-dora.avif",
    fill: true,
  },
  {
    name: "Oslo City Legesenter",
    caseSlug: "oslo-city-legesenter",
    image: "/ny-nettside/oslo-city-legesenter/banner.webp",
    fill: true,
  },
  {
    name: "Mad Goats",
    caseSlug: "mad-goats",
    image: "/ny-nettside/mad-goats/hero.webp",
    fill: true,
  },
  {
    name: "Ditt Apotek",
    caseSlug: "ditt-apotek-opera",
    image: "/ny-nettside/ditt-apotek-opera/hero.webp",
    fill: true,
  },
  {
    name: "Studio Pietra",
    url: "https://studio.vbku.no/",
    video: "/referanser/studio-pietra.mp4",
    poster: "/referanser/studio-pietra-poster.webp",
  },
  {
    name: "Romerikes Råeste",
    url: "https://xn--romerikesreste-uib.no/",
    urlLabel: "romerikesræste.no",
    image: "/referanser/romerikes-raeste.webp",
  },
  {
    name: "FAM",
    url: "https://fam.no/",
    image: "/referanser/fam.webp",
  },
  {
    name: "Ability Media",
    caseSlug: "ability-media",
    image: "/referanser/ability-media.webp",
    fill: true,
  },
  {
    name: "Insignis",
    url: "https://insignis.no/",
    image: "/referanser/insignis.webp",
  },
  {
    name: "Messecup",
    caseSlug: "messecup",
    image: "/referanser/messecup.webp",
    fill: true,
  },
  {
    name: "OG Smil",
    url: "https://ogsmil.no/",
    image: "/referanser/ogsmil.webp",
  },
  {
    name: "Crazy Race",
    url: "https://crazyrace.no/",
    image: "/referanser/crazy-race.webp",
  },
  {
    name: "Fjellveterinæren",
    caseSlug: "fjellveterinaeren",
    image: "/referanser/fjellveterinaeren.webp",
    fill: true,
  },
  {
    name: "Økern Bilpleie",
    url: "https://okernbilpleie.no/",
    image: "/referanser/okern-bilpleie.webp",
  },
  {
    name: "Vitalis Apotek",
    url: "https://vitalisapotek.no/",
    image: "/referanser/vitalis-apotek.webp",
  },
  {
    name: "Tannkunsten",
    url: "https://tannkunsten.no/",
    image: "/referanser/tannkunsten.webp",
  },
  {
    name: "Vikapsykologene",
    url: "https://www.vikapsykologene.no/",
    image: "/referanser/vikapsykologene.webp",
  },
  {
    name: "CK Bygg Nor",
    url: "https://byggsoker.no/",
    image: "/referanser/ck-bygg-nor.webp",
  },
  {
    name: "Tekpartner",
    url: "https://tekpartner.org/",
    image: "/referanser/tekpartner.webp",
  },
  {
    name: "SNU",
    url: "https://snuorg.no/",
    image: "/referanser/snu.webp",
  },
  {
    name: "Bekkestua Kjøkkenstudio",
    url: "https://www.bekkestuaks.no/",
    image: "/referanser/bekkestua.webp",
  },
  {
    name: "Certnor",
    url: "https://certnor.no/",
    image: "/referanser/certnor.webp",
  },
  {
    name: "NAF",
    url: "https://jobb.naf.no/",
    image: "/referanser/naf.webp",
  },
  {
    name: "Kaffehuset",
    url: "https://www.kaffehusetas.no/",
    image: "/referanser/kaffehuset.webp",
  },
  {
    name: "Frysja 33",
    url: "https://frysja33.no/",
    image: "/referanser/frysja-33.webp",
  },
]
