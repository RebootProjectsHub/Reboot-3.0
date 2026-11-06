import type { Post } from "@/posts/types"
import { PostImage } from "@/components/post-image"
import { PostCta } from "@/components/post-cta"

const IMG = "/posts/nettside-med-ai-hvorfor-finner-ingen-den"

export const post: Post = {
  slug: "nettside-med-ai-hvorfor-finner-ingen-den",
  title: "Nettsiden er klar på en time. Hvorfor finner ingen den?",
  metaTitle: "Nettsiden er klar på en time. Hvorfor finner ingen den?",
  category: "SEO",
  date: "6. november 2026",
  dateISO: "2026-11-06",
  excerpt: "AI lager nettsiden på en time, men gjør den ikke synlig. Slik blir du funnet i Google, lokale søk og AI-svar som ChatGPT, og når det er lurt å bygge selv.",
  image: `${IMG}/featured.webp`,
  thumbnail: `${IMG}/thumb.webp`,
  imageAlt: "Laptop på et trebord ved et vindu med snødekt skog utenfor. Foto: Justin Kauffman / Unsplash",
  content: (
    <>
      <p>
        Nettsiden blir ikke funnet fordi AI-verktøyet som lagde den, aldri fikk i
        oppgave å gjøre den synlig. Det bygde det du ba om: en forside, noen
        tjenestesider og et kontaktskjema, og det gjorde det på en time. Å dukke opp
        når noen googler eller spør ChatGPT, er et annet arbeid med andre spørsmål, og
        det er det arbeidet denne artikkelen handler om. Vi går gjennom hva
        AI-verktøyene faktisk er gode til, hva som må være på plass for at kundene skal
        finne deg i Google og i AI-svar, og når det er fornuftig å bygge selv.
      </p>

      <h2>Hva AI-verktøyene faktisk gjør bra</h2>
      <p>
        La oss være ærlige først: AI-verktøyene er gode. Beskriv en frisør i Sandvika
        eller en fysioterapeut i Tromsø, og du får en nettside med fornuftig struktur,
        lesbar tekst, bilder og kontaktskjema før kaffen er kald. Designet er ofte
        ryddigere enn mange sider vi har overtatt fra eldre leverandører, og terskelen
        for å komme i gang har aldri vært lavere. Vi bruker disse verktøyene selv, og vi
        har skrevet om hvordan vi{" "}
        <a href="https://reboot.no/trender/vi-hjelper-deg-med-lovable/">
          hjelper bedrifter som har startet i Lovable
        </a>{" "}
        med å komme videre. Det er ikke her problemet ligger.
      </p>

      <h3>Hvorfor ser nettsiden ferdig ut før den er det?</h3>
      <p>
        Problemet er at et godt førsteutkast ser ut som et ferdig produkt. Alt som er
        synlig på skjermen er på plass, og det er lett å tenke at jobben er gjort. Men
        det kundene dine ser, er bare én del av nettsiden. Den andre delen er det Google
        og AI-modellene ser: hvordan sidene er bygget opp, hvilke spørsmål innholdet
        faktisk svarer på, hvor raskt siden laster, og om bedriften din finnes andre
        steder på nettet enn på sin egen forside. Den delen får ingen oppmerksomhet når
        du ber et verktøy om «en moderne nettside for en rørlegger», rett og slett fordi
        du ikke ba om den.
      </p>

      <PostImage src="/nettside-priser-laptop.webp" alt="Bærbar PC på et trebord ved siden av en hvit kontorstol" />

      <h2>Hva skjer når noen googler dere?</h2>
      <p>
        Når en potensiell kunde søker etter «elektriker Hamar» eller «regnskapsfører for
        enkeltpersonforetak», ser Google etter sider den forstår, stoler på og kan vise
        til med god samvittighet. En AI-generert nettside kan ha alt dette, men den har
        det sjelden ved et tilfeldig sammentreff. Den må bygges for det.
      </p>

      <h3>Google må kunne lese og forstå sidene</h3>
      <p>
        Det starter med det tekniske grunnlaget: beskrivende sidetitler, én tydelig
        overskrift per side, en logisk struktur der hver tjeneste har sin egen side, og
        en hastighet som holder også på en vanlig mobil utenfor sentrum. Mange
        AI-verktøy leverer sider der all tekst ligger på forsiden, der tjenestene er
        samlet i én lang rull, og der sidetittelen rett og slett heter «Hjem». For en
        besøkende fungerer det greit. For Google betyr det at «takrenser i Asker» aldri
        får en side å rangere, og dermed heller ikke blir funnet av dem som søker etter
        akkurat det.
      </p>

      <h3>Lokale søk avgjøres ofte utenfor nettsiden</h3>
      <p>
        For de fleste små bedrifter i Norge kommer de viktigste henvendelsene fra lokale
        søk, og der er nettsiden bare én av flere kilder. Google Bedriftsprofil,
        konsistente opplysninger om navn, adresse og telefonnummer på tvers av nettet,
        omtaler og lokale omtaler i andre nettsteder avgjør hvem som vises i kartet og
        øverst i resultatene. Ingen AI-verktøy setter opp dette for deg, og en nettside
        som ikke henger sammen med bedriftsprofilen, kan faktisk svekke tilliten Google
        har til begge.
      </p>

      <PostImage src="/SEO-Reboot-1.webp" alt="Mobil som viser et Google-søk" />

      <h2>Hva skjer når noen spør ChatGPT?</h2>
      <p>
        Her blir forskjellen enda tydeligere, fordi et AI-svar ikke viser en liste, men
        velger for brukeren. Modellene henter anbefalingene sine fra nettsider de
        forstår og fra kilder som omtaler bedriften likt på tvers av nettet, og en
        AI-generert side med generell tekst og én samleside for alle tjenester gir dem
        lite å gå på. «Vi leverer kvalitet og god service» forteller verken Google eller
        ChatGPT hva du gjør, hvor du gjør det, eller hvorfor noen skulle velge deg
        fremfor naboen. Det som trengs, er konkrete svar på konkrete spørsmål i en
        struktur som er lett å hente ut, og en bedrift som finnes andre steder enn på
        sin egen forside. Hvordan vi jobber med akkurat dette, steg for steg, har vi
        beskrevet i artikkelen om{" "}
        <a href="https://reboot.no/trender/synlighet-i-ai-svar/">synlighet i AI-svar</a>.
        Her nøyer vi oss med poenget: det er arbeid ingen nettsidebygger gjør for deg.
      </p>

      <h2>Et eksempel: rørleggeren i Bærum</h2>
      <p>
        Tenk deg en rørlegger med tre ansatte i Bærum som bygger nettsiden selv med et
        AI-verktøy en søndag kveld. Mandag morgen har han en pen forside, en side som
        heter «Tjenester» med rørleggerarbeid, bad og varmepumpe i samme avsnitt, en om
        oss-side og et kontaktskjema. Han er fornøyd, og det bør han være. Men når en
        huseier på Bekkestua googler «rørlegger akutt Bærum» tre uker senere, dukker han
        ikke opp, fordi ingen side på nettstedet handler om akutte oppdrag,
        bedriftsprofilen på Google er ikke knyttet til nettsiden, og de to omtalene han
        har, ligger hos et firma med et litt annet navn. Når naboen spør ChatGPT om en
        rørlegger som gjør bad i Bærum, nevnes to andre, fordi de har egne sider om
        baderom, forklarer prosessen og nevnes hos byggevarehandelen de samarbeider med.
      </p>
      <p>
        Med det samme utgangspunktet, men med synlighet som mål, ville vi ha gitt
        akuttoppdrag og baderom hver sin side med tydelige svar på pris, område og
        responstid, koblet bedriftsprofilen til nettsiden og ryddet i navn og adresse
        overalt, lagt inn strukturerte data slik at både Google og AI-modellene forstår
        at dette er en rørlegger i Bærum med disse tjenestene, og jobbet systematisk med
        omtaler og lokal omtale. Nettsiden ser kanskje ikke veldig annerledes ut for en
        besøkende. Forskjellen er at den nå blir funnet.
      </p>

      <h2>Hvem følger opp etter lansering?</h2>
      <p>
        Synlighet er ikke noe du setter opp én gang. Google endrer hvordan den vurderer
        sider, konkurrentene publiserer nytt innhold, og kontaktskjemaet som fungerte i
        mars, slutter stille å sende e-post i august. Den som bygger selv, må også være
        den som oppdager at henvendelsene har stoppet, at siden har blitt tregere etter
        at noen la inn en video, eller at en ny tjeneste trenger en egen side og ikke
        bare et avsnitt nederst på forsiden. Det er sjelden evne som mangler. Det som
        mangler er tid, og en rutine for å sjekke det ingen ser før det er for sent.
      </p>

      <h2>Når er det fornuftig å bygge selv?</h2>
      <p>
        Skal du teste en idé, lage en enkel side for et arrangement eller presentere et
        enkeltpersonforetak der kundene uansett kommer via nettverk, er et AI-verktøy et
        godt valg, og vi vil ikke anbefale noe annet. Det samme gjelder om du har tid og
        interesse for å lære hva Google og AI-modellene ser etter, og faktisk følger det
        opp. Mange av våre beste kunder har startet akkurat slik, med en side de har
        laget selv, og kommet til oss først når de merket at siden fantes, men ikke ble
        funnet.
      </p>
      <p>
        Et byrå er verdt pengene når nettsiden er en viktig kilde til salg, når flere
        tjenester skal forklares tydelig for både mennesker og maskiner, eller når ingen
        i bedriften har tid til å følge opp. Og uansett hvem du velger, bør du stille de
        samme spørsmålene: Hvordan finner dere ut hva kundene våre faktisk søker etter?
        Hva gjør dere for at vi dukker opp i lokale søk og i AI-svar, ikke bare på
        Google? Hvordan måler dere det, og hvem følger opp etter lansering? Et svar som
        bare handler om design, forteller deg at synlighet ikke er en del av leveransen.
      </p>

      <h2>Nettsiden er starten. Å bli funnet er jobben.</h2>
      <p>
        Det er ikke noe galt i å lage nettsiden med AI. Det er bare ikke der verdien
        ligger lenger. Når hvem som helst kan få en pen side på en time, er det
        synligheten som skiller bedriftene som får henvendelser fra dem som ikke gjør
        det. Derfor jobber vi i Reboot med{" "}
        <a href="https://reboot.no/tjenester/seo-og-ai-svar/">
          SEO og synlighet i AI-svar
        </a>{" "}
        som én tjeneste: teknisk grunnarbeid og innhold som løfter deg i Google, lokal
        synlighet og bedriftsprofil, og generativ søkeoptimalisering som gjør at
        ChatGPT, Claude og Gemini forstår og anbefaler bedriften din. Vi har gjort dette
        for norske bedrifter siden 2022, og vi vet at det virker. Som Arild Ramberg i
        Ability Media sier det: «Vi dukker opp der vi skal nå og flere nye kunder har
        sagt at de fant oss via ChatGPT.»
      </p>
      <p>
        Har du allerede en nettside, enten du har bygget den selv eller fått den laget,
        kan du starte med å finne ut hvor du står. Vi tilbyr en{" "}
        <a href="https://reboot.no/gratis-analyse/">gratis synlighetsanalyse</a> der vi
        sjekker hvordan bedriften din ligger an i Google-søk, lokale søk og AI-svar, og
        sender deg en kort rapport med de tre viktigste grepene. Helt uforpliktende, og
        ofte det første tydelige svaret på hvorfor nettsiden finnes, men ikke blir
        funnet.
      </p>
      <PostCta
        eyebrow="SEO / AI-svar"
        title="Bli anbefalt når kundene spør AI"
        text="Se hva som inngår i Light, Medium og Komplett, eller start med en gratis synlighetsanalyse av bedriften din."
        primary={{ href: "/tjenester/seo-og-ai-svar#priser", label: "Se pakker og priser" }}
        secondary={{ href: "/gratis-analyse/", label: "Få gratis analyse" }}
      />
    </>
  ),
}
