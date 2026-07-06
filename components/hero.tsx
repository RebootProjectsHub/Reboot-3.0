import { ArrowRight } from "lucide-react"
import { ClientLogos } from "@/components/client-logos"

export function Hero() {
  return (
    <div id="top" className="relative">
	<section className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1360px] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-14 text-center sm:min-h-[700px] sm:px-10 sm:pb-20 lg:px-[90px] lg:pb-[90px] lg:pt-0">
        {/*<span
          aria-hidden
          className="absolute left-[11%] top-[19%] hidden text-[44px] leading-none text-foreground/45 md:block"
        >
          ✳
        </span>
        <span
          aria-hidden
          className="absolute right-[14%] top-[17%] hidden text-[30px] leading-none text-brand/80 md:block"
        >
          +
        </span>
        <span
          aria-hidden
          className="absolute bottom-[30%] left-[18%] hidden text-[38px] leading-none text-foreground/30 md:block"
        >
          ✦
        </span>
        <span
          aria-hidden
          className="absolute bottom-[33%] right-[15%] hidden text-[52px] leading-none text-foreground/35 md:block"
        >
          〜
        </span>*/}

        <span className="mb-[26px] inline-flex items-center rounded-full bg-secondary px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-foreground">
          Nydalen, Oslo
        </span>

        <h1 className="mb-6 max-w-[900px] text-balance font-heading text-[clamp(40px,7vw,78px)] font-normal leading-none tracking-[-0.02em] text-foreground">
          Én partner for alt innen nettsider
        </h1>

        <p className="mb-[34px] max-w-[660px] text-pretty text-[19px] leading-[1.55] text-foreground/70">
          Moderne nettsider med fokus på synlighet på Google og i AI-søk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[22px]">
          <a
            href="#tjenester"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#E8432F]"
          >
            Se våre tjenester
          </a>
          <a
            href="#tjenester"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground transition-[gap] duration-200 hover:gap-3.5"
          >
            Våre referanser
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
	</section>

      <ClientLogos />
    </div>
  )
}
