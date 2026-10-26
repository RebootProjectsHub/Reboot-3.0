import type { QaPage } from "@/sporsmal/types"
import { page as trengerJegDriftsavtale } from "@/sporsmal/trenger-jeg-driftsavtale"
import { page as hvaKosterEnNettside } from "@/sporsmal/hva-koster-en-nettside"
import { page as sammenligneTilbud } from "@/sporsmal/sammenligne-tilbud-nettside"
import { page as kontaktskjemaSoppelpost } from "@/sporsmal/kontaktskjema-epost-i-soppelpost"
import { page as hvorforErNettsidenTreg } from "@/sporsmal/hvorfor-er-nettsiden-treg"
import { page as wordpressOppdateringer } from "@/sporsmal/wordpress-oppdateringer-og-sarbarheter"
import { page as redigereSelv } from "@/sporsmal/kan-jeg-redigere-nettsiden-selv"
import { page as hvorLangTid } from "@/sporsmal/hvor-lang-tid-tar-det-a-lage-nettside"
import { page as synligIChatgpt } from "@/sporsmal/synlig-i-chatgpt-og-ai-sok"
import { page as trengerJegSeo } from "@/sporsmal/trenger-jeg-seo-liten-bedrift"

export const qaPages: QaPage[] = [
  trengerJegDriftsavtale,
  hvaKosterEnNettside,
  sammenligneTilbud,
  kontaktskjemaSoppelpost,
  hvorforErNettsidenTreg,
  wordpressOppdateringer,
  redigereSelv,
  hvorLangTid,
  synligIChatgpt,
  trengerJegSeo,
]

export function getQaPage(slug: string) {
  return qaPages.find((p) => p.slug === slug)
}
