import Image from "next/image"
import { ArrowRight, ArrowUpRight, Star } from "lucide-react"

export function TeamBand() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-[1360px]">
        <div className="h-[clamp(420px,42vw,620px)] overflow-hidden rounded-[28px]">
          <Image
            src="/team-band.jpg"
            alt="Reboot-teamet i et møte"
            width={1966}
            height={1002}
            className="size-full object-cover"
          />
        </div>

        <span
          aria-hidden
          className="absolute -left-2 -top-2 hidden text-[54px] leading-none text-foreground md:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute right-[34px] top-2.5 hidden text-[32px] font-bold leading-none text-brand md:block"
        >
          +
        </span>

        <div className="relative mt-6 max-w-[540px] rounded-[22px] bg-background p-[34px] shadow-[0_30px_60px_-30px_rgba(74,18,32,0.5)] md:absolute md:bottom-11 md:left-11 md:mt-0">
          <div className="mb-[18px] flex items-center justify-between gap-4">
            <div className="flex gap-[3px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-[18px] fill-brand text-brand" />
              ))}
            </div>
            <a
              href="https://www.google.com/search?sca_esv=ba3772bf42af157a&biw=2558&bih=1278&sxsrf=APpeQnuIEwonI31ZKeHHVr4XLJ_QrK5ZLw:1783265273798&q=reboot.no&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zq0F6Vz7EO5Ce7ptsEaaSkpqSdDQQjCmTN3o6t3o_ccmZAyTcZfl7BqqPKlW0Of1ZaOcyE%3D&uds=AJ5uw192rzALllUuaB2bJuLcuxCmjJGG65AhJl-lsIFqyOyceAlYkVNMWIZPkiU4-MydBzAWv_LcSnk0kXKGtNYAx7uyCI467Xa_3qrGq7RRtxgG_G5innM&sa=X&ved=2ahUKEwik_Lzp7LuVAxV-GBAIHQfFBukQ3PALegQIGxAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[13px] font-medium text-foreground hover:text-brand"
            >
              5,0 på Google
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>

          <blockquote className="mb-[18px] font-heading text-[21px] font-medium leading-[1.35] text-foreground">
            «Vi er veldig fornøyde med vår nye nettside, anbefales på det varmeste!»
          </blockquote>

          <div className="flex items-center justify-between gap-4 border-t border-border pt-[18px]">
            <div>
              <p className="text-[14.5px] font-bold text-foreground">
                Kristine Jørstad Bock
              </p>
              <p className="mt-0.5 text-[13px] text-foreground/70">OBOS</p>
            </div>
            <a
              href="#kundecaser"
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
