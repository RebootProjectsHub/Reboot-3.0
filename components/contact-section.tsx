import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <dl className="space-y-3 text-lg text-foreground/80">
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
              <dd>
                <a href="tel:+4797675848" className="hover:text-brand">
                  97 67 58 48
                </a>
              </dd>
            </div>
          </dl>

          <Image
            src="/Progress.svg"
            alt=""
            aria-hidden
            width={622}
            height={25}
            className="my-6 h-1.5 w-28"
          />

          <dl className="space-y-3 text-lg text-foreground/80">
            <div className="flex gap-2">
              <dt className="font-semibold text-foreground">Adresse:</dt>
              <dd>
                Reboot Norge AS <br />
                <i>Business Village Nydalen</i> <br />
                Sandakerveien 138 <br />
                0484 Oslo
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-foreground">Org.nr.:</dt>
              <dd>929 57 8139</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
