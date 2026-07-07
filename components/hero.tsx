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
          Moderne nettsider med fokus på synlighet på Google og i AI-søk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[26px]">
          <a
            href="#tjenester"
            className="inline-flex items-center rounded-full bg-brand px-[30px] py-4 text-base font-light text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#E8432F]"
          >
            Se våre tjenester
          </a>
          <a
            href="https://www.google.com/search?sca_esv=ba3772bf42af157a&biw=2558&bih=1278&sxsrf=APpeQnuIEwonI31ZKeHHVr4XLJ_QrK5ZLw:1783265273798&q=reboot.no&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zq0F6Vz7EO5Ce7ptsEaaSkpqSdDQQjCmTN3o6t3o_ccmZAyTcZfl7BqqPKlW0Of1ZaOcyE%3D&uds=AJ5uw192rzALllUuaB2bJuLcuxCmjJGG65AhJl-lsIFqyOyceAlYkVNMWIZPkiU4-MydBzAWv_LcSnk0kXKGtNYAx7uyCI467Xa_3qrGq7RRtxgG_G5innM&sa=X&ved=2ahUKEwik_Lzp7LuVAxV-GBAIHQfFBukQ3PALegQIGxAE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="5,0 av 5 stjerner på Google – se anmeldelsene"
            className="group inline-flex items-center gap-3.5 text-left"
          >
            <span className="flex flex-col items-center gap-[3px] text-center sm:items-start sm:text-left">
              <span aria-hidden className="text-[20px] leading-none tracking-[2px] text-brand">
                5.0 ★★★★★ 
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
