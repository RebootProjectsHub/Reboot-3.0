import Image from "next/image"

const team = [
  {
    name: "Henrik Moberg",
    role: "Utvikler / daglig leder",
    email: "henrik@reboot.no",
    phone: "97 67 58 48",
    tel: "+4797675848",
    photo: "/henrik-dev4.jpg",
  },
  {
    name: "Maria Reinlie",
    role: "Rådgiver / koordinator",
    email: "maria@reboot.no",
    phone: "99 59 35 06",
    tel: "+4799593506",
    photo: "/Maria-3.png",
  },
  {
    name: "Evgeniia Zhavoronkova",
    role: "Utvikler",
    email: "evgeniia@reboot.no",
    phone: "48 63 09 05",
    tel: "+4748630905",
    photo: "/Evgeniia-dev1.png",
  },
  {
    name: "Silje Walmann",
    role: "Designer",
    email: "silje@reboot.no",
    phone: "46 95 06 27",
    tel: "+4746950627",
    photo: "/silje-design4.jpg",
  },
]

export function AboutTeamGrid() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-11 max-w-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
            Møt teamet
          </span>
          <h2 className="mt-4 text-balance font-heading text-[clamp(30px,3.8vw,48px)] font-normal leading-[1.06] tracking-[-0.02em] text-foreground">
            Menneskene bak nettsidene
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[22px]">
          {team.map((member) => (
            <article
              key={member.email}
              className="flex flex-col overflow-hidden rounded-[26px] border-[1.5px] border-border bg-card transition-colors duration-[280ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:border-brand"
            >
              <div className="relative mx-auto mt-[26px] size-[90px] overflow-hidden rounded-full bg-secondary">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="150px"
                />
              </div>

              <div className="flex flex-col items-center gap-1 px-[22px] pb-[26px] pt-[22px] text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-brand">
                  {member.role}
                </span>
                <h3 className="mb-3 mt-0.5 font-heading text-[19px] font-normal leading-[1.2] tracking-[-0.01em] text-foreground">
                  {member.name}
                </h3>
                <a
                  href={`mailto:${member.email}`}
                  className="text-[15px] font-medium text-foreground transition-colors hover:text-brand"
                >
                  {member.email}
                </a>
                <a
                  href={`tel:${member.tel}`}
                  className="text-[15px] text-foreground/70 transition-colors hover:text-brand"
                >
                  {member.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
