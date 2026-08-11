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
    image: "/referanser/obos.webp",
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
    image: "/referanser/runners-world.webp",
  },
  {
    name: "Ved På Døra",
    caseSlug: "ved-pa-dora",
    image: "/referanser/ved-pa-dora.avif",
  },
  {
    name: "Oslo City Legesenter",
    caseSlug: "oslo-city-legesenter",
    image: "/referanser/oslo-city-legesenter.webp",
  },
  {
    name: "Mad Goats",
    caseSlug: "mad-goats",
    image: "/referanser/mad-goats.webp",
  },
  {
    name: "Ditt Apotek",
    caseSlug: "ditt-apotek-opera",
    image: "/referanser/ditt-apotek.webp",
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
    image: "/referanser/romerikes-raeste.webp",
  },
  {
    name: "FAM",
    url: "https://fam.no/",
    image: "/referanser/fam.png",
  },
  {
    name: "Ability Media",
    caseSlug: "ability-media",
    image: "/referanser/ability-media.webp",
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
  },
  {
    name: "Økern Bilpleie",
    url: "https://okernbilpleie.no/",
    image: "/referanser/okern-bilpleie.webp",
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
    image: "/referanser/Reboot-CKBN.png",
  },
  {
    name: "Tekpartner",
    url: "https://tekpartner.org/",
    image: "/referanser/tekpartner.webp",
  },
  {
    name: "SNU",
    url: "https://snuorg.no/",
    image: "/referanser/SNU-Reboot.webp",
  },
  {
    name: "Bekkestua Kjøkkenstudio",
    url: "https://www.bekkestuaks.no/",
    image: "/referanser/Reboot-BKS.webp",
  },
  {
    name: "Certnor",
    url: "https://certnor.no/",
    image: "/referanser/Certnor-Reboot.webp",
  },
  {
    name: "NAF",
    url: "https://jobb.naf.no/",
    image: "/referanser/NAF-ledige-stillinger.webp",
  },
]
