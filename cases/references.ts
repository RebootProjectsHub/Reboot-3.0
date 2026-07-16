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
    image: "/referanser/obos.jpg",
  },
  {
    name: "Höegh Evi",
    caseSlug: "hoegh-evi",
    video: "/referanser/hoegh-evi.mp4",
  },
  {
    name: "Akademikerne Pluss",
    url: "https://akademikernepluss.no/",
    image: "/referanser/getty-images-OVHhgc0Y8nU-unsplash-scaled.jpg",
  },
  {
    name: "Runner's World",
    caseSlug: "runners-world",
    image: "/referanser/runners-world.jpg",
  },
  {
    name: "Ved På Døra",
    caseSlug: "ved-pa-dora",
    image: "/referanser/ved-pa-dora.avif",
  },
  {
    name: "Oslo City Legesenter",
    caseSlug: "oslo-city-legesenter",
    image: "/referanser/oslo-city-legesenter.png",
  },
  {
    name: "Mad Goats",
    caseSlug: "mad-goats",
    image: "/referanser/mad-goats.jpg",
  },
  {
    name: "Ditt Apotek",
    caseSlug: "ditt-apotek-opera",
    image: "/referanser/ditt-apotek.jpg",
  },
  {
    name: "VBKU Studio",
    url: "https://studio.vbku.no/",
    video: "/referanser/vbku-studio.mp4",
  },
  {
    name: "Romerikes Råeste",
    url: "https://xn--romerikesreste-uib.no/",
    urlLabel: "romerikesræste.no",
    image: "/referanser/romerikes-raeste.png",
  },
  {
    name: "FAM",
    url: "https://fam.no/",
    image: "/referanser/fam.png",
  },
  {
    name: "Ability Media",
    caseSlug: "ability-media",
    image: "/referanser/ability-media.jpg",
  },
  {
    name: "Insignis",
    url: "https://insignis.no/",
    image: "/referanser/insignis.png",
  },
  {
    name: "Messecup",
    caseSlug: "messecup",
    image: "/referanser/messecup.jpg",
  },
  {
    name: "OG Smil",
    url: "https://ogsmil.no/",
    image: "/referanser/ogsmil.png",
  },
  {
    name: "Crazy Race",
    url: "https://crazyrace.no/",
    image: "/referanser/crazy-race.png",
  },
  {
    name: "Fjellveterinæren",
    caseSlug: "fjellveterinaeren",
    image: "/referanser/fjellveterinaeren.png",
  },
  {
    name: "Økern Bilpleie",
    url: "https://okernbilpleie.no/",
    image: "/referanser/okern-bilpleie.png",
  },
  {
    name: "Tannkunsten",
    url: "https://tannkunsten.no/",
    image: "/referanser/tannkunsten.png",
  },
  {
    name: "Vikapsykologene",
    url: "https://www.vikapsykologene.no/",
    image: "/referanser/vikapsykologene.webp",
  },
  {
    name: "TekPartner",
    url: "https://tekpartner.org/",
    image: "/referanser/tekpartner.png",
  },
  {
    name: "Bekkestua Kjøkkenstudio",
    url: "https://www.bekkestuaks.no/",
    image: "/referanser/bekkestua.png",
  },
]
