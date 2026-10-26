import { Fragment } from "react"
import { PrintChecklistButton } from "@/components/print-checklist-button"

// Built-in visuals for three of the /sporsmal/ pages. Everything is real text
// (no images) so search engines and AI answer engines can read it.

const checklistRows = [
  "Hvem eier siden, innholdet og domenet?",
  "Hva er inkludert i oppsettet?",
  "Hva koster det per måned, og hva dekker det?",
  "Timepris og minstetid for endringer?",
  "Hvilken plattform?",
  "Får du en kopi av siden hvis du sier opp?",
  "Leveringsdato?",
  "Hvem snakker du med?",
]

function Blank() {
  return <span aria-hidden className="block h-7 border-b border-dashed border-foreground/30" />
}

/** sammenligne-tilbud-nettside: a printable checklist with blank answer cells. */
export function OfferChecklist() {
  return (
    <section id="sjekkliste" className="mx-auto my-12 max-w-[720px]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-[17px] text-foreground/80">Ta med denne når du sammenligner tilbud.</p>
        <PrintChecklistButton />
      </div>
      <div className="mt-4 rounded-[26px] border-[1.5px] border-border bg-card px-4 py-5 sm:px-7 sm:py-6">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/60">
              <th scope="col" className="w-1/2 pb-3 pr-3 font-normal sm:w-[40%]">
                Spørsmål
              </th>
              <th scope="col" className="pb-3 pr-3 font-normal">
                Tilbud A
              </th>
              <th scope="col" className="pb-3 pr-3 font-normal">
                Tilbud B
              </th>
              <th scope="col" className="hidden pb-3 font-normal md:table-cell print:table-cell">
                Tilbud C
              </th>
            </tr>
          </thead>
          <tbody>
            {checklistRows.map((question, i) => (
              <tr key={question} className="border-t border-foreground/10 align-bottom">
                <th scope="row" className="py-3 pr-3 text-[14.5px] font-normal leading-snug text-foreground sm:text-[15.5px]">
                  <span className="mr-1.5 font-mono text-[12px] text-brand">{i + 1}.</span>
                  {question}
                </th>
                <td className="py-3 pr-3">
                  <Blank />
                </td>
                <td className="py-3 pr-3">
                  <Blank />
                </td>
                <td className="hidden py-3 md:table-cell print:table-cell">
                  <Blank />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

const mailSteps = [
  "Kontaktskjema",
  "Nettsiden sender e-post",
  "Gmail / Outlook sjekker avsenderen",
  "Innboks eller søppelpost",
]

/** kontaktskjema-epost-i-soppelpost: the path a form e-mail takes. */
export function MailDeliveryFlow() {
  return (
    <figure className="mx-auto my-12 max-w-[720px]">
      <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-start">
        {mailSteps.map((step, i) => (
          <Fragment key={step}>
            {i > 0 && (
              <li aria-hidden className="flex items-center justify-center text-brand sm:h-[88px] sm:w-5 sm:shrink-0">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </li>
            )}
            <li className="sm:flex-1">
              <div
                className={`flex min-h-[64px] items-center justify-center rounded-[18px] border-[1.5px] px-3 py-3 text-center text-[14.5px] leading-snug sm:h-[88px] ${
                  i === 2 ? "border-brand bg-card text-foreground" : "border-border bg-card text-foreground"
                }`}
              >
                {step}
              </div>
              {i === 2 && (
                <ul className="mt-3 flex justify-center gap-1.5">
                  {["SMTP", "SPF", "DKIM"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.08em] text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
      <figcaption className="mt-4 text-center text-[14.5px] text-foreground/70">
        Mangler én av disse, havner e-posten ofte i søppelpost.
      </figcaption>
    </figure>
  )
}

// Column classes are written out in full so Tailwind can see them.
const phases = [
  { name: "Oppstart", weeks: "Uke 1", cols: "md:col-start-1 md:col-end-2 md:row-start-1" },
  { name: "Skisse", weeks: "Uke 2 til 3", cols: "md:col-start-2 md:col-end-4 md:row-start-2" },
  { name: "Bygging", weeks: "Uke 3 til 5", cols: "md:col-start-3 md:col-end-6 md:row-start-3" },
  { name: "Gjennomgang", weeks: "Uke 6", cols: "md:col-start-6 md:col-end-7 md:row-start-4" },
  { name: "Lansering", weeks: "Uke 7", cols: "md:col-start-7 md:col-end-8 md:row-start-5" },
]

/** hvor-lang-tid-tar-det-a-lage-nettside: the seven-week plan. */
export function ProjectTimeline() {
  return (
    <figure className="mx-auto my-12 max-w-[720px] rounded-[26px] border-[1.5px] border-border bg-card px-4 py-5 md:px-6 md:py-6">
      <div
        aria-hidden
        className="hidden grid-cols-7 gap-1 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground/60 md:grid"
      >
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className="border-l border-foreground/15 pl-1.5">
            Uke {i + 1}
          </span>
        ))}
      </div>
      <ol className="space-y-2 md:grid md:grid-cols-7 md:gap-x-1 md:gap-y-2 md:space-y-0">
        {phases.map((phase, i) => (
          <li
            key={phase.name}
            className={`flex items-center justify-between gap-3 rounded-full px-4 py-2 text-[14.5px] md:justify-center md:px-1 md:text-center md:text-[12px] md:tracking-[-0.01em] ${phase.cols} ${
              i === phases.length - 1 ? "bg-brand text-white" : "bg-ink text-ink-foreground"
            }`}
          >
            <span>{phase.name}</span>
            <span className="shrink-0 font-mono text-[12px] opacity-75 md:sr-only">{phase.weeks}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}

/** Which visual goes on which page, inserted right before the given H2. */
export const qaVisuals: Record<string, { beforeHeading: string; Visual: () => React.JSX.Element }> = {
  "sammenligne-tilbud-nettside": { beforeHeading: "Et enkelt regnestykke", Visual: OfferChecklist },
  "kontaktskjema-epost-i-soppelpost": {
    beforeHeading: "Tre symptomer på at dette er problemet",
    Visual: MailDeliveryFlow,
  },
  "hvor-lang-tid-tar-det-a-lage-nettside": {
    beforeHeading: "Hva skjer i de sju ukene?",
    Visual: ProjectTimeline,
  },
}
