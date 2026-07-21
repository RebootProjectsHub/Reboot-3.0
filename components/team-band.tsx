import Image from "next/image"
import { ArrowRight, ArrowUpRight, Star } from "lucide-react"

export function TeamBand() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-[1360px]">
        <div className="aspect-[1966/1002] overflow-hidden rounded-[28px] sm:aspect-auto sm:h-[clamp(420px,42vw,620px)]">
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

        <div className="relative mt-6 hidden max-w-[540px] rounded-[22px] bg-background p-[34px] shadow-[0_30px_60px_-30px_rgba(74,18,32,0.5)] md:absolute md:bottom-11 md:left-11 md:mt-0 md:block">
          <div className="mb-[18px] flex items-center justify-between gap-4">
            <div className="flex gap-[3px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-[18px] fill-brand text-brand" />
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/Reboot/@59.9518411,10.764818,17z/data=!4m16!1m9!3m8!1s0x46416fc89415ba1d:0xecc903e104a3ec0c!2sReboot!8m2!3d59.9518411!4d10.7673929!9m1!1b1!16s%2Fg%2F11tfnf4p8w!3m5!1s0x46416fc89415ba1d:0xecc903e104a3ec0c!8m2!3d59.9518411!4d10.7673929!16s%2Fg%2F11tfnf4p8w?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[13px] font-medium text-foreground hover:text-brand"
            >
              5.0
			  {/*<ArrowUpRight className="size-3.5" aria-hidden />*/}
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
