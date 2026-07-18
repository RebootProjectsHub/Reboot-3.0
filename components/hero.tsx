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
            href="https://www.google.com/search?sa=X&sca_esv=ba3772bf42af157a&sxsrf=APpeQnsXDry-b4d9A8A_6udRT-vBckqlFQ:1783773227916&q=Reboot+Anmeldelser&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDcwMzI0N7I0sjAyNTAyNDQ2MdjAyPiKkS8oNSk_v0QhKLUsM7W8eBErmgAAvsa6BD0AAAA&rldimm=17062172928250211340&tbm=lcl&hl=en-NO&ved=2ahUKEwix8O-M0cqVAxVdBxAIHSlwA-4Q9fQKegQIURAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
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
