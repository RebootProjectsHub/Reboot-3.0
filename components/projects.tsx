import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Project = {
  kicker: string
  title: string
  image: string
  href: string
  video?: string
  logo?: string
  external?: boolean
}

const projects: Project[] = [
  {
    kicker: "OBOS",
    title: "Bookingportal og Vipps-betaling for OBOS",
    image: "/work-obos.png",
    href: "/ny-nettside/obos",
  },
  {
    kicker: "Höegh EVI",
    title: "Hosting, drift og Wordpress nettside for Höegh Evi",
    image: "/work-hoegh.png",
    href: "/ny-nettside/hoegh-evi",
  },
  {
    kicker: "Ditt Apotek",
    title: "Shopify nettbutikk med Vipps og BankID for Ditt Apotek",
    image: "/work-apotek.png",
    href: "/ny-nettside/ditt-apotek-opera",
  },
  {
    kicker: "NAF",
    title: "Nettside med karriereportal for NAF",
    image: "/NAF-hero.jpg",
    logo: "/NAF-logo.jpeg",
    href: "https://jobb.naf.no",
    external: true,
  },
]

export function Projects() {
  return (
    <section id="kundecaser" className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground md:text-5xl">
            Noen av våre leveranser
          </h2>
          <a
            href="/referanser"
            className="hidden w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            Se flere prosjekter
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const cardClass =
              "group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-colors hover:border-brand"
            const cardContent = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  {project.video ? (
                    <video
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.image as string}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                  {project.logo && (
                    <div className="absolute bottom-3 left-3 flex size-10 items-center justify-center overflow-hidden bg-card shadow-md">
                      <Image
                        src={project.logo}
                        alt={`${project.kicker} logo`}
                        width={28}
                        height={28}
                        className="size-10 object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-brand">
                    {project.kicker}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-normal leading-snug text-foreground">
                    {project.title}
                  </h3>
                </div>
              </>
            )

            if (project.external) {
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {cardContent}
                </a>
              )
            }

            return (
              <Link key={project.title} href={project.href} className={cardClass}>
                {cardContent}
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="/referanser"
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-secondary"
          >
            Se flere prosjekter
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
