import type { QaImage } from "@/sporsmal/types"

// Hero photos from Unsplash (Unsplash License), one per page.
function unsplash(
  slug: string,
  alt: string,
  photographer: string,
  username: string,
  photoId: string,
): QaImage {
  const utm = "utm_source=reboot&utm_medium=referral"
  return {
    src: `/sporsmal/${slug}.webp`,
    thumb: `/sporsmal/${slug}-thumb.webp`,
    alt,
    photographer,
    profileUrl: `https://unsplash.com/@${username}?${utm}`,
    photoUrl: `https://unsplash.com/photos/${photoId}?${utm}`,
  }
}

export const qaImages: Record<string, QaImage> = {
  "trenger-jeg-driftsavtale": unsplash(
    "trenger-jeg-driftsavtale",
    "Ryddig verktøyvegg i et verksted med høvler, stemjern og sager på hyller i tre",
    "Barn Images",
    "barnimages",
    "t5YUoHW6zRo",
  ),
  "hva-koster-en-nettside": unsplash(
    "hva-koster-en-nettside",
    "Bærbar PC, kaffekopp, notatblokk og mobil på et skrivebord i tre ved et vindu",
    "Andrew Neel",
    "andrewtneel",
    "cckf4TsHAuw",
  ),
  "sammenligne-tilbud-nettside": unsplash(
    "sammenligne-tilbud-nettside",
    "Glasskule, tørket blomst og en liten treform side om side på en grå flate",
    "nilufar nattaq",
    "nillufar",
    "Nie9aM_s5Oc",
  ),
  "kontaktskjema-epost-i-soppelpost": unsplash(
    "kontaktskjema-epost-i-soppelpost",
    "Tre røde postkasser fra Posten ved siden av hverandre i en gate",
    "Gunnar Ridderström",
    "gunnarridder",
    "gfqCIOs4UGs",
  ),
  "hvorfor-er-nettsiden-treg": unsplash(
    "hvorfor-er-nettsiden-treg",
    "Jernbanespor i snø med rødt signallys og kjøreledninger som strekker seg mot horisonten",
    "Daniel Stiel",
    "danielstiel",
    "1KQBao_SC3E",
  ),
  "wordpress-oppdateringer-og-sarbarheter": unsplash(
    "wordpress-oppdateringer-og-sarbarheter",
    "Nøkkelknippe som ligger på et bord i mørkt tre",
    "Filip Szalbot",
    "fess0",
    "PxiAc1aElFQ",
  ),
  "kan-jeg-redigere-nettsiden-selv": unsplash(
    "kan-jeg-redigere-nettsiden-selv",
    "Hender som skriver på tastaturet til en bærbar PC på et trebord",
    "Christin Hume",
    "christinhumephoto",
    "hBuwVLcYTnA",
  ),
  "hvor-lang-tid-tar-det-a-lage-nettside": unsplash(
    "hvor-lang-tid-tar-det-a-lage-nettside",
    "Byggekraner i silhuett mot en blå kveldshimmel",
    "Nicolas Beuret",
    "galerieseven",
    "8i19Rm2EFUM",
  ),
  "synlig-i-chatgpt-og-ai-sok": unsplash(
    "synlig-i-chatgpt-og-ai-sok",
    "Hender som holder en mobil med en chattesamtale på skjermen",
    "Asterfolio",
    "asterfolio",
    "PjoJga8EovQ",
  ),
  "trenger-jeg-seo-liten-bedrift": unsplash(
    "trenger-jeg-seo-liten-bedrift",
    "Liten butikkfasade med markise og krittavler i en gate i Oslo",
    "Eirik Skarstein",
    "eskarstein",
    "bRU8UP_Y4bM",
  ),
}
