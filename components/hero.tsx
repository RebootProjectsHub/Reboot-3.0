import { Star } from "lucide-react"
import { ClientLogosDesktop } from "@/components/client-logos"

export function Hero() {
  return (
    <div id="top" className="relative">
	<section className="relative mx-auto flex max-w-[1360px] flex-col items-center justify-center overflow-hidden px-6 py-14 text-center sm:min-h-[700px] sm:px-10 sm:pb-20 lg:px-[90px] lg:pb-[90px] lg:pt-0">
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
          Moderne nettsider med fokus på synlighet på Google og i AI-svar.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[26px]">
          <a
            href="#tjenester"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-colors duration-200 hover:bg-[#E8432F]"
          >
            Se våre tjenester
          </a>
          <a
            href="https://www.google.com/maps/place/Reboot/@59.9518411,10.764818,17z/data=!4m16!1m9!3m8!1s0x46416fc89415ba1d:0xecc903e104a3ec0c!2sReboot!8m2!3d59.9518411!4d10.7673929!9m1!1b1!16s%2Fg%2F11tfnf4p8w!3m5!1s0x46416fc89415ba1d:0xecc903e104a3ec0c!8m2!3d59.9518411!4d10.7673929!16s%2Fg%2F11tfnf4p8w?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="5,0 av 5 stjerner på Google – se anmeldelsene"
            className="group inline-flex items-center gap-3.5 text-left"
          >
            <span className="flex flex-col items-center gap-[3px] text-center sm:items-start sm:text-left">
              <span aria-hidden className="flex items-center gap-1.5 text-[20px] leading-none text-brand">
                5.0
                <span className="relative flex gap-[2px]">
                  <span className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-[16px] fill-brand text-brand" />
                    ))}
                  </span>
                  <span className="star-sweep-overlay absolute inset-0 flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-[16px] fill-white text-white" />
                    ))}
                  </span>
                </span>
              </span>
              <span className="text-[13px] font-medium leading-[1.2] text-foreground/70">
                Se anmeldelsene på Google
              </span>
            </span>
          </a>
        </div>
	</section>

      <ClientLogosDesktop />
    </div>
  )
}
