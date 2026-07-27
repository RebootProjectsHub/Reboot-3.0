import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function WorkWithUs() {
  return (
    <section id="eventer" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-2">
        <div className="relative">
                <div className="overflow-hidden rounded-[var(--radius)] border border-border">
            <Image
              src="/Felles5.webp"
              alt="Teamet i Reboot i et møte rundt et bord"
              width={1200}
              height={900}
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-3 -right-3 hidden text-[46px] leading-none text-brand md:block"
          >
            ✦
          </span>
        </div>

        <div className="max-w-xl lg:pl-8">
<svg
  aria-hidden="true"
  viewBox="0 0 40 44"
  className="h-9 w-8 text-brand"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* steam */}
  <path d="M15 11 C12 8, 18 6, 15 3" strokeWidth="1.75" />
  <path d="M23 11 C20 8, 26 6, 23 3" strokeWidth="1.75" />
  {/* coffee surface */}
  <path
    d="M9 19 H29 V20 C29 22, 24 23, 19 23 C14 23, 9 22, 9 20 Z"
    fill="currentColor"
    fillOpacity="0.25"
    stroke="none"
  />
  <path d="M9 20 C9 22, 14 23, 19 23 C24 23, 29 22, 29 20" strokeWidth="1.5" />
  {/* cup body */}
  <path d="M7 17 H31 V27 C31 32, 27 35, 22 35 H16 C11 35, 7 32, 7 27 Z" />
  {/* handle */}
  <path d="M31 20 H34 C37 20, 37 27, 34 27 H31" />
  {/* saucer */}
  <path d="M5 40 H33" />
</svg>
          <h2 className="mt-4 text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Sving innom for en kaffe
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
            Vi holder til i Nydalen og tar gjerne en prat, uansett om du har et konkret prosjekt eller bare en idé.
          </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-base font-normal text-ink-foreground transition-opacity hover:opacity-85"
            >
              Send melding
            </a>
                    <a
            href="tel:+4797675848"
            className="inline-flex items-center gap-2 text-base font-medium text-brand transition-[gap] duration-200 hover:gap-3.5"
          >
            97 67 58 48
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
