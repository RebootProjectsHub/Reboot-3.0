import { Fragment } from "react"
import Link from "next/link"

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ label: "Forside", href: "/" }, ...items]

  return (
    <nav
      aria-label="Brødsmulesti"
      className="mx-auto flex max-w-[1280px] items-center gap-2.5 px-4 pt-8 text-[14.5px] font-medium sm:px-6 lg:px-10"
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1
        return (
          <Fragment key={crumb.label}>
            {isLast || !crumb.href ? (
              <span aria-current={isLast ? "page" : undefined} className="font-semibold text-foreground">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-muted-foreground transition-colors duration-200 hover:text-brand"
              >
                {crumb.label}
              </Link>
            )}
            {!isLast && (
              <span aria-hidden className="text-border">
                /
              </span>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
