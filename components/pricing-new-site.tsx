import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "Komplett nettside",
  "Webdesign & webutvikling",
  "Responsivt på alle enheter",
  "Redigeringstilgang",
  "Brandguide, fargepalett, typografi",
]

export function PricingNewSite() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 rounded-[26px] border border-border bg-card px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-14 lg:py-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
              Ny nettside
            </span>
            <h2 className="mt-4 text-balance font-heading text-[clamp(28px,3.4vw,40px)] font-normal leading-[1.15] tracking-[-0.02em] text-foreground">
              Har du en hjemmeside som trenger nytt design?
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.65] text-foreground/70">
              Vi gir ditt nettsted et nytt liv ved å fornye den helt fra kildekoden i
              bunn til den visuelle presentasjonen på nettsiden. Ved å kombinere
              estetiske forbedringer og tekniske oppdateringer holder nettsiden din
              seg responsiv, moderne og profesjonell.
            </p>

            <ul className="mt-7 space-y-[11px]">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-[10px]">
                  <Check className="size-[17px] shrink-0 text-brand" strokeWidth={2.5} />
                  <span className="text-[14.5px] text-foreground/85">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="font-heading text-[40px] font-normal leading-none text-foreground">
                29 900,-
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
              >
                Kontakt oss
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
            <Image
              src="/nettside-priser-laptop.jpg"
              alt="Utvikler som jobber med kode på en bærbar datamaskin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
