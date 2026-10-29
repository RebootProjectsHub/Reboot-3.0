// In-article CTA card. Lives inside the post body, so it uses divs rather than
// h2/p (the post-layout prose selectors would restyle those) and overrides the
// prose link colour/underline on its buttons.
export function PostCta({
  eyebrow,
  title,
  text,
  primary,
  secondary,
}: {
  eyebrow?: string
  title: string
  text: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <div className="relative my-10 overflow-hidden rounded-[var(--radius)] bg-ink px-6 py-9 text-ink-foreground sm:px-10 sm:py-11">
      <span
        aria-hidden
        className="absolute right-7 top-6 hidden text-[28px] leading-none text-brand/50 sm:block"
      >
        ✳
      </span>
      {eyebrow && (
        <div className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand">
          {eyebrow}
        </div>
      )}
      <div className="text-balance font-heading text-[clamp(26px,3vw,34px)] font-normal leading-[1.15] tracking-[-0.02em]">
        {title}
      </div>
      <div className="mt-4 max-w-[52ch] text-pretty text-[17px] leading-[1.6] text-ink-foreground/80">
        {text}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={primary.href}
          className="inline-flex items-center rounded-full bg-brand px-[26px] py-3.5 text-base font-light !text-white transition-colors duration-200 hover:bg-[#E8432F] hover:!no-underline"
        >
          {primary.label}
        </a>
        {secondary && (
          <a
            href={secondary.href}
            className="inline-flex items-center rounded-full border border-ink-foreground/30 px-[26px] py-3.5 text-base font-light !text-ink-foreground transition-colors duration-200 hover:border-ink-foreground/60 hover:!no-underline"
          >
            {secondary.label}
          </a>
        )}
      </div>
    </div>
  )
}
