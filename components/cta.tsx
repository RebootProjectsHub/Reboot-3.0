import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export function Cta() {
  return (
    <section id="kontakt" className="relative scroll-mt-40 px-4 py-12 sm:px-6 lg:px-10 lg:py-24">
      <span
        aria-hidden
        className="absolute right-[8%] top-16 hidden text-[42px] leading-none text-foreground/20 lg:block"
      >
        ✳
      </span>

      <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Vi hører gjerne fra deg
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Vi har lang erfaring med alt fra små bedrifter til store organisasjoner. Send oss en melding, så svarer vi i løpet av dagen. 
          </p>
          <div className="mt-8 text-foreground/80">
            <dl className="space-y-3 text-lg">
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">E-post:</dt>
                <dd>
                  <a href="mailto:hallo@reboot.no" className="hover:text-brand">
                    hallo@reboot.no
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Telefon:</dt>
                <dd>97 67 58 48</dd>
              </div>
            </dl>

            <div className="hidden md:block">
              <Image
                src="/Progress.svg"
                alt=""
                aria-hidden
                width={622}
                height={25}
                className="my-6 h-1.5 w-28"
              />

              <dl className="space-y-3">
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Adresse:</dt>
                  <dd>Reboot Norge AS <br /><i>Business Village Nydalen</i> <br />Sandakerveien 138 <br />0484 Oslo</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Org.nr.:</dt>
                  <dd>929 57 8139</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
