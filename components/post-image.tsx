import Image from "next/image"

export function PostImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="my-9">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 720px) 100vw, 720px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[12px] uppercase tracking-[0.08em] text-foreground/50">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
