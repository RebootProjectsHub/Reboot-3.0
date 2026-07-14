import type { Post } from "@/posts/types"
import { post as designAvKnapper } from "@/posts/design-av-knapper-pa-nettsider"
import { post as animasjonerPaNettsider } from "@/posts/animasjoner-pa-nettsider"
import { post as hvordanKonverterende } from "@/posts/hvordan-gjore-en-nettside-mer-konverterende"
import { post as aeoSeo } from "@/posts/aeo-seo-for-ai-drevne-sokeresultater"
import { post as nettsideMedVipps } from "@/posts/nettside-med-vipps-betaling"
import { post as brukerpersonas } from "@/posts/brukerpersonas-innen-webdesign"
import { post as viHjelperLovable } from "@/posts/vi-hjelper-deg-med-lovable"
import { post as morgendagensUx } from "@/posts/morgendagens-ux-design"
import { post as web3Webdesign } from "@/posts/web3-webdesign-som-bygger-tillit"
import { post as hvordanKiVirker } from "@/posts/hvordan-ki-egentlig-virker"
import { post as nettsideLayout } from "@/posts/nettside-layout-som-fungerer"
import { post as viktighetenAvMerkevare } from "@/posts/viktigheten-av-merkevare"
import { post as hvordanVelgeWebbyra } from "@/posts/hvordan-velge-riktig-webbyra"
import { post as brukAvBakgrunner } from "@/posts/bruk-av-bakgrunner-pa-nettsider"
import { post as sitemapHjelper } from "@/posts/sitemap-som-hjelper-brukere-og-sokemotorer"
import { post as hvordanBrukeKi } from "@/posts/hvordan-bruke-ki-i-webdesign"
import { post as hvaInngarDriftsavtale } from "@/posts/hva-inngar-egentlig-i-en-driftsavtale"
import { post as slikErVarDesignprosess } from "@/posts/slik-er-var-designprosess"
import { post as hvorMyeKosterNettside } from "@/posts/hvor-mye-koster-en-ny-nettside-i-2025"
import { post as forskjellenWebdesignGrafisk } from "@/posts/forskjellen-mellom-webdesign-og-grafisk-design"
import { post as hvaErProduktdesigner } from "@/posts/hva-er-en-produktdesigner"
import { post as brukervennlighetIDesign } from "@/posts/brukervennlighet-i-design"
import { post as seoOgWebdesign } from "@/posts/seo-og-webdesign"
import { post as slikSkaperVarigMerkevarestyrke } from "@/posts/slik-skaper-du-varig-merkevarestyrke"
import { post as verdienAvUxUndersokelser } from "@/posts/verdien-av-ux-undersokelser"
import { post as utformingNettsideFooter } from "@/posts/utforming-av-en-nettside-footer"
import { post as hvaGjorEtDesignbyra } from "@/posts/hva-gjor-et-designbyra"
import { post as moderneBrukergrensesnittFlatt } from "@/posts/moderne-brukergrensesnitt-med-flatt-design"
import { post as narDuTrengerNyLogo } from "@/posts/nar-du-trenger-en-ny-logo"
import { post as enLuftigNettside } from "@/posts/en-luftig-nettside"
import { post as viktighetenAvBrandguide } from "@/posts/viktigheten-av-en-brandguide"
import { post as myterInnenWebdesign } from "@/posts/myter-innen-webdesign"
import { post as hvordanSkapeIntuitivtNettsted } from "@/posts/hvordan-skape-et-intuitivt-og-brukervennlig-nettsted"
import { post as veienTilABliWebdesigner } from "@/posts/veien-til-a-bli-webdesigner-enkle-steg-innsikt-og-rad"
import { post as introduksjonInteraksjonsdesign } from "@/posts/en-introduksjon-til-interaksjonsdesign"
import { post as responsivtWebdesign } from "@/posts/responsivt-webdesign-hvordan-fungerer-det-og-hvorfor-er-det-sa-viktig"
import { post as minimalistiskWebdesign } from "@/posts/minimalistisk-webdesign-enkelt-design-med-stor-effekt"
import { post as geometriskBranding } from "@/posts/geometrisk-branding-vitenskapen-bak-logodesign"
import { post as hvordanBliDyktigUxDesigner } from "@/posts/hvordan-bli-en-dyktig-ui-ux-designer"
import { post as riktigTypografi } from "@/posts/riktig-typografi-styrker-brukervennlighet"
import { post as prototypingensRolle } from "@/posts/prototypingens-rolle-i-webutvikling"
import { post as iaasForstaBegrepet } from "@/posts/iaas-forsta-begrepet"
import { post as fargerIWebdesign } from "@/posts/farger-i-webdesign"
import { post as nostalgiIWebdesign } from "@/posts/nostalgi-i-webdesign"
import { post as sosialeMedierStrategi } from "@/posts/sosiale-medier-strategi"
import { post as skeuomorfismeIWebdesign } from "@/posts/skeuomorfisme-i-webdesign"
import { post as nettsiderStemmestyringVr } from "@/posts/nettsider-med-stemmestyring-og-vr"
import { post as gjorScrollingSpennende } from "@/posts/gjor-scrolling-til-noe-mer-spennende"
import { post as gamificationIWebdesign } from "@/posts/gamification-i-webdesign"
import { post as effektiveSeoStrategier2024 } from "@/posts/effektive-seo-strategier-for-2024"
import { post as figmaForvandlerWebdesign } from "@/posts/figma-forvandler-webdesign"
import { post as hjemmesideGuideSmaBedrifter } from "@/posts/hjemmeside-guide-for-sma-bedrifter"
import { post as digitaliseringensDilemma } from "@/posts/digitaliseringens-dilemma-i-offentlig-sektor"
import { post as riktigeBeslutningerData } from "@/posts/riktige-beslutninger-basert-pa-data"
import { post as maksimalismeNarMerErMer } from "@/posts/maksimalisme-nar-mer-er-mer"
import { post as aiSomEtVerktoyIWebdesign } from "@/posts/ai-som-et-verktoy-i-webdesign"
import { post as webdesignTips2024 } from "@/posts/webdesign-tips-for-2024"
import { post as hvordan5gForandrer } from "@/posts/hvordan-5g-forandrer-det-norske-markedet"
import { post as draNytteAvBigData } from "@/posts/dra-nytte-av-big-data-for-a-drive-vekst"
import { post as shopifyVsWoocommerce2024 } from "@/posts/shopify-vs-woocommerce-i-2024"
import { post as digitaliseringDetaljhandelen } from "@/posts/digitalisering-av-detaljhandelen-i-norge"
import { post as fjernarbeidetsFremtid } from "@/posts/fjernarbeidets-fremtid-hvordan-teknologi-pavirker-norske-arbeidsplasser"
import { post as digitalModerniseringKommuner } from "@/posts/digital-modernisering-i-norske-kommuner-hvordan-teknologi-fornyer-offentlige-tjenester"
import { post as trenderIWebdesign2024 } from "@/posts/trender-i-webdesign-for-2024-hva-du-kan-forvente-og-hvordan-forberede-deg"
import { post as baerekraftIDigitaltDesign } from "@/posts/baerekraft-i-digitalt-design-hvordan-gronn-it-og-miljovennlig-webdesign-pavirker-merkevaren-din"
import { post as mikromomenterForbrukerensKjopsreise } from "@/posts/mikromomenter-i-forbrukerens-kjopsreise-hvordan-fange-oppmerksomheten-i-en-oppdelt-digital-verden"
import { post as kunstigIntelligensForvandlerMarkedsforing } from "@/posts/kunstig-intelligens-forvandler-digital-markedsforing"
import { post as brukeropplevelseUxVsUi } from "@/posts/brukeropplevelse-ux-vs-brukergrensesnitt-ui-forsta-forskjellene"
import { post as hvordanPriserPaNettsider } from "@/posts/hvordan-priser-pa-nettsider-reflekterer-kvalitet-og-verdiskaping"
import { post as innovativeDesignlosninger } from "@/posts/innovative-designlosninger-for-moderne-nettsider"
import { post as skapeEngasjerendeInnhold } from "@/posts/skape-engasjerende-innhold-i-en-digital-aera"
import { post as optimaliseringNettsiderSokemotorer } from "@/posts/optimalisering-av-nettsider-for-sokemotorer-var-guide"
import { post as smarteAutomatiseringsteknikker } from "@/posts/smarte-automatiseringsteknikker-for-din-bedrift"
import { post as navigeringDigitalModernisering } from "@/posts/navigering-gjennom-digital-modernisering-en-guide-for-sma-bedrifter"
import { post as slikSkaperLandingssider } from "@/posts/slik-skaper-du-landingssider-som-konverterer-besokende"
import { post as integreringKunstigIntelligens } from "@/posts/integrering-av-kunstig-intelligens-maksimer-din-digitale-strategi"
import { post as utviklingAvMobilapper } from "@/posts/utvikling-av-mobilapper-en-nokkel-til-styrket-kundelojalitet"
import { post as nettstedTilgjengelighet } from "@/posts/nettsted-tilgjengelighet-gjor-din-hjemmeside-tilgjengelig-for-alle"
import { post as redesignAvNettstedet } from "@/posts/redesign-av-nettstedet-nar-er-det-tid-for-en-digital-oppussing"
import { post as lokalSeoNettbutikk } from "@/posts/lokal-seo-hvordan-optimalisere-din-nettbutikk-for-lokale-sok"
import { post as hvordanProfesjonellNettside } from "@/posts/hvordan-en-profesjonell-nettside-kan-lofte-din-bedrift"
import { post as hvordanChatbotsOkeKundetilfredshet } from "@/posts/hvordan-chatbots-kan-oke-kundetilfredshet-og-effektivisere-kundeservice"
import { post as effektivtInnholdSkriveTekster } from "@/posts/effektivt-innhold-skrive-tekster-som-konverterer-besokende-til-kunder"
import { post as byggeBrukervennligNettbutikkWoocommerce } from "@/posts/a-bygge-en-brukervennlig-nettbutikk-med-woocommerce"

/**
 * Every post, unordered. Add new posts here — the list is sorted by date
 * (newest first) automatically below.
 */
const allPosts: Post[] = [
  designAvKnapper,
  animasjonerPaNettsider,
  hvordanKonverterende,
  aeoSeo,
  nettsideMedVipps,
  brukerpersonas,
  viHjelperLovable,
  morgendagensUx,
  web3Webdesign,
  hvordanKiVirker,
  nettsideLayout,
  viktighetenAvMerkevare,
  hvordanVelgeWebbyra,
  brukAvBakgrunner,
  sitemapHjelper,
  hvordanBrukeKi,
  hvaInngarDriftsavtale,
  slikErVarDesignprosess,
  hvorMyeKosterNettside,
  forskjellenWebdesignGrafisk,
  hvaErProduktdesigner,
  brukervennlighetIDesign,
  seoOgWebdesign,
  slikSkaperVarigMerkevarestyrke,
  verdienAvUxUndersokelser,
  utformingNettsideFooter,
  hvaGjorEtDesignbyra,
  moderneBrukergrensesnittFlatt,
  narDuTrengerNyLogo,
  enLuftigNettside,
  viktighetenAvBrandguide,
  myterInnenWebdesign,
  hvordanSkapeIntuitivtNettsted,
  veienTilABliWebdesigner,
  introduksjonInteraksjonsdesign,
  responsivtWebdesign,
  minimalistiskWebdesign,
  geometriskBranding,
  hvordanBliDyktigUxDesigner,
  riktigTypografi,
  prototypingensRolle,
  iaasForstaBegrepet,
  fargerIWebdesign,
  nostalgiIWebdesign,
  sosialeMedierStrategi,
  skeuomorfismeIWebdesign,
  nettsiderStemmestyringVr,
  gjorScrollingSpennende,
  gamificationIWebdesign,
  effektiveSeoStrategier2024,
  figmaForvandlerWebdesign,
  hjemmesideGuideSmaBedrifter,
  digitaliseringensDilemma,
  riktigeBeslutningerData,
  maksimalismeNarMerErMer,
  aiSomEtVerktoyIWebdesign,
  webdesignTips2024,
  hvordan5gForandrer,
  draNytteAvBigData,
  shopifyVsWoocommerce2024,
  digitaliseringDetaljhandelen,
  fjernarbeidetsFremtid,
  digitalModerniseringKommuner,
  trenderIWebdesign2024,
  baerekraftIDigitaltDesign,
  mikromomenterForbrukerensKjopsreise,
  kunstigIntelligensForvandlerMarkedsforing,
  brukeropplevelseUxVsUi,
  hvordanPriserPaNettsider,
  innovativeDesignlosninger,
  skapeEngasjerendeInnhold,
  optimaliseringNettsiderSokemotorer,
  smarteAutomatiseringsteknikker,
  navigeringDigitalModernisering,
  slikSkaperLandingssider,
  integreringKunstigIntelligens,
  utviklingAvMobilapper,
  nettstedTilgjengelighet,
  redesignAvNettstedet,
  lokalSeoNettbutikk,
  hvordanProfesjonellNettside,
  hvordanChatbotsOkeKundetilfredshet,
  effektivtInnholdSkriveTekster,
  byggeBrukervennligNettbutikkWoocommerce,
]

export const posts: Post[] = [...allPosts].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
)

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
