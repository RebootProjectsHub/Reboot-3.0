import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export function ServicesTeamBand() {
  return (
    <section className="px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-10 lg:pb-4 lg:pt-28">
      <div className="relative mx-auto max-w-[1280px]">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[26px] sm:aspect-auto sm:h-[clamp(420px,42vw,620px)]">
          <Image
            src="/Felles5.webp"
            alt="Teamet i Reboot i et møte rundt et bord"
            fill
            className="size-full object-cover"
          />
        </div>

        <span
          aria-hidden
          className="absolute -bottom-3 -left-2 hidden text-[46px] leading-none text-foreground/70 md:block"
        >
          ✦
        </span>
        <span
          aria-hidden
          className="absolute right-8 -top-4 hidden text-[36px] leading-none text-brand/70 md:block"
        >
          〜
        </span>

        <div className="relative mt-6 hidden max-w-[540px] rounded-[22px] bg-background p-[34px] shadow-[0_30px_60px_-30px_rgba(74,18,32,0.5)] md:absolute md:bottom-11 md:right-11 md:mt-0 md:block">
          <div className="mb-[18px] flex items-center justify-between gap-4">
            <div className="flex gap-[3px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-[18px] fill-brand text-brand" />
              ))}
            </div>
          </div>

          <blockquote className="mb-[18px] font-heading text-[21px] font-medium leading-[1.35] text-foreground">
            «Vi er utrolig fornøyd med Reboot! Flere av hjemmesidene våre, blant annet
            Nannestad idrettslag og Romerikes Råeste, har fått et skikkelig oppløft.
            Kjempe fint og bra samarbeid!»
          </blockquote>

          <div className="flex items-center justify-between gap-4 border-t border-border pt-[18px]">
            <div>
              <p className="text-[14.5px] font-bold text-foreground">Ninette Olsen</p>
              <p className="mt-0.5 text-[13px] text-foreground/70">Nannestad IL</p>
            </div>
            <a
              href="/referanser"
              className="inline-flex items-center gap-2 whitespace-nowrap text-[14.5px] font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
            >
              Se referanser
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
