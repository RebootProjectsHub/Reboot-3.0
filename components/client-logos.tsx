const clients = [
  { name: "OBOS", src: "/logos/obos.svg", width: 850, height: 180 },
  { name: "Höegh Evi", src: "/logos/hoegh-evi.svg", width: 111.55, height: 19.34 },
  { name: "Oslo City Legesenter", src: "/logos/osloc.svg", width: 481.41, height: 50 },
  { name: "NAF", src: "/naf1.png", width: 162, height: 232, heightClass: "h-9 md:h-7 lg:h-8 xl:h-11" },
  { name: "Ditt Apotek", src: "/logos/ditt-apotek.png", width: 775, height: 175 },
  { name: "Runner's World", src: "/logos/runners-world.svg", width: 700.91, height: 129.16 },
  { name: "Akademikerne pluss", src: "/logos/akademikerne-pluss.svg", width: 481.41, height: 60.7 },
]

function ClientLogo({
  client,
  sizeClassName,
}: {
  client: (typeof clients)[number]
  sizeClassName?: string
}) {
  if (!client.src) {
    return (
      <span className="text-[14.5px] font-semibold tracking-[0.02em] text-foreground">
        {client.name}
      </span>
    )
  }

  return (
    <span
      role="img"
      aria-label={client.name}
      className={`inline-block bg-foreground ${sizeClassName ?? client.heightClass ?? "h-5 md:h-4 lg:h-5 xl:h-6"}`}
      style={{
        aspectRatio: `${client.width} / ${client.height}`,
        WebkitMaskImage: `url(${client.src})`,
        maskImage: `url(${client.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  )
}

/** Small screens only — NAF centered between Oslo City Legesenter and Ditt Apotek, wide logos capped. */
export function ClientLogosMobile() {
  return (
    <div className="px-4 py-10 sm:px-6 md:hidden">
      <div className="mx-auto max-w-[1360px]">
        <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.12em] text-foreground/70">
          Noen av våre kunder
        </p>
        <div className="flex flex-col items-center gap-y-5">
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-8">
            <ClientLogo client={clients[0]} sizeClassName="h-5 max-w-[120px]" />
            <ClientLogo client={clients[1]} sizeClassName="h-5 max-w-[120px]" />
          </div>

          <div className="flex items-center gap-x-8">
            <ClientLogo client={clients[2]} sizeClassName="relative -left-3 h-5 max-w-[130px]" />
            <ClientLogo client={clients[3]} sizeClassName="h-7" />
            <ClientLogo client={clients[4]} sizeClassName="h-5 max-w-[100px]" />
          </div>

          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-8">
            <ClientLogo client={clients[5]} sizeClassName="h-5 max-w-[120px]" />
            <ClientLogo client={clients[6]} sizeClassName="h-5 max-w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/** Medium screens and up — all logos in a single row overlaid on the hero, NAF pinned to true center with even flanking gaps. */
export function ClientLogosDesktop() {
  return (
    <div className="hidden px-4 sm:px-6 md:absolute md:inset-x-0 md:bottom-[34px] md:block lg:px-10">
      <div className="mx-auto flex max-w-[1360px] items-center">
        <div className="flex flex-1 items-center justify-end gap-x-3 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-12">
          {clients
            .filter((client) => client.name !== "NAF")
            .slice(0, 3)
            .map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
        </div>

        <div className="mx-3 flex shrink-0 items-center lg:mx-6 xl:mx-10 2xl:mx-12">
          <ClientLogo client={clients.find((client) => client.name === "NAF")!} />
        </div>

        <div className="flex flex-1 items-center justify-start gap-x-3 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-12">
          {clients
            .filter((client) => client.name !== "NAF")
            .slice(3)
            .map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
        </div>
      </div>
    </div>
  )
}
