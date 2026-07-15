// Usage: node scripts/import-post.mjs <slug>
// Fetches https://reboot.no/trender/<slug>, extracts the article, downloads its
// images into public/posts/<slug>/, and writes posts/<slug>/index.tsx.
import { writeFile, mkdir, rm } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"

const slug = process.argv[2]
if (!slug) {
  console.error("slug required")
  process.exit(1)
}

const ROOT = path.resolve(import.meta.dirname, "..")
const MONTHS = [
  "januar", "februar", "mars", "april", "mai", "juni",
  "juli", "august", "september", "oktober", "november", "desember",
]

function decode(s) {
  return s
    .replace(/&#8220;|&#8221;|&#822[01];/g, "«")
    .replace(/&#8221;/g, "»")
    .replace(/&#8217;|&#8216;|&#039;|&#39;/g, "'")
    .replace(/&#8211;|&#8212;/g, "–")
    .replace(/&#8230;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
}

// Correct « » pairing: the entity 8220 -> «, 8221 -> »
function fixQuotes(s) {
  return s.replace(/&#8220;/g, "«").replace(/&#8221;/g, "»")
}

async function main() {
  const url = `https://reboot.no/trender/${slug}`
  const html = fixQuotes(await (await fetch(url)).text())

  const title = decode((html.match(/<title>([^<]+)<\/title>/i)?.[1] || "").replace(/\s*\|\s*Reboot\s*$/i, "").trim())
  const category = decode((html.match(/"articleSection":\["?([^"\]]+)"?\]/i)?.[1] || html.match(/"articleSection":"([^"]+)"/i)?.[1] || "Aktuelt").trim())
  const iso = html.match(/article:published_time" content="(\d{4}-\d{2}-\d{2})/i)?.[1] || ""
  const [y, m, d] = iso.split("-")
  const dateNo = `${parseInt(d, 10)}. ${MONTHS[parseInt(m, 10) - 1]} ${y}`
  const ogImage = html.match(/og:image" content="([^"]+)"/i)?.[1] || ""

  // Body region: from <h1 ... to the "You May Also Like" / related section.
  const h1i = html.search(/<h1/i)
  const endi = (() => {
    const yalu = html.search(/You May Also Like|>Relaterte/i)
    return yalu > h1i ? yalu : html.length
  })()
  let body = html.slice(h1i, endi)

  // Drop the <h1> itself (title shown in hero).
  body = body.replace(/<h1[\s\S]*?<\/h1>/i, "")

  // Walk block elements in order.
  const blockRe = /<(h2|h3|p|figure|img)\b[^>]*>([\s\S]*?)<\/\1>|<img\b[^>]*>/gi
  const images = [] // {origUrl, local}
  let imgN = 0
  const out = []
  let match
  // Use a tokenizer over h2/h3/p and standalone img/figure.
  const tokenRe = /<h2\b[^>]*>([\s\S]*?)<\/h2>|<h3\b[^>]*>([\s\S]*?)<\/h3>|<p\b[^>]*>([\s\S]*?)<\/p>|<img\b[^>]*>/gi
  while ((match = tokenRe.exec(body))) {
    const [full, h2, h3, p] = match
    if (h2 != null) {
      const t = clean(h2)
      if (t) out.push(`<h2>${t}</h2>`)
    } else if (h3 != null) {
      const t = clean(h3)
      if (t) out.push(`<h3>${t}</h3>`)
    } else if (p != null) {
      const t = cleanInline(p)
      const plain = t.replace(/<[^>]+>/g, "").trim()
      // Skip the author bio paragraph and empty/tiny paragraphs.
      if (plain.length < 25) continue
      if (/^Reboot er et webbyrå/i.test(plain)) continue
      out.push(`<p>${t}</p>`)
    } else {
      // standalone <img>
      const url = imgUrl(full)
      if (!url) continue
      // Skip the featured image if it also appears inline.
      if (stripSize(url) === stripSize(ogImage)) continue
      imgN++
      const ext = path.extname(new URL(url).pathname).toLowerCase() || ".jpg"
      const local = `/posts/${slug}/${imgN}${ext}`
      images.push({ origUrl: url, local })
      const rawAlt = decode((full.match(/alt="([^"]*)"/i)?.[1] || "").trim())
      const alt = escAttr(rawAlt || title)
      out.push(`<figure><img src="${local}" alt="${alt}" loading="lazy" /></figure>`)
    }
  }

  const firstP = (out.find((b) => b.startsWith("<p>")) || "").replace(/<[^>]+>/g, "").trim()
  let excerpt = firstP
  if (firstP.length > 165) {
    const cut = firstP.slice(0, 165)
    excerpt = cut.slice(0, cut.lastIndexOf(" ")).replace(/[,–-]\s*$/, "").trim() + " …"
  }
  excerpt = excerpt || title

  // Featured image: download og:image as featured.
  const featExt = path.extname(new URL(ogImage).pathname).toLowerCase() || ".jpg"
  const featLocal = `/posts/${slug}/featured${featExt}`

  // Download everything.
  const pubDir = path.join(ROOT, "public", "posts", slug)
  await rm(pubDir, { recursive: true, force: true })
  await mkdir(pubDir, { recursive: true })
  await download(ogImage, path.join(ROOT, "public", featLocal.replace(/^\//, "")))
  for (const im of images) {
    await download(stripSize(im.origUrl), path.join(ROOT, "public", im.local.replace(/^\//, "")))
  }

  const contentHtml = out.join("\n")

  const tsx = `import type { Post } from "@/posts/types"

export const post: Post = {
  slug: ${JSON.stringify(slug)},
  title: ${JSON.stringify(title)},
  category: ${JSON.stringify(category)},
  date: ${JSON.stringify(dateNo)},
  dateISO: ${JSON.stringify(iso)},
  excerpt: ${JSON.stringify(excerpt)},
  image: ${JSON.stringify(featLocal)},
  imageAlt: ${JSON.stringify(title)},
  contentHtml: ${backtick(contentHtml)},
}
`
  const postDir = path.join(ROOT, "posts", slug)
  await mkdir(postDir, { recursive: true })
  await writeFile(path.join(postDir, "index.tsx"), tsx)
  console.log(`OK  ${slug}  | ${category} | ${dateNo} | ${images.length} inline img | ${out.length} blocks`)

  // Report external + internal links for visibility
  const links = [...contentHtml.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
  if (links.length) console.log("    links:", links.join("  "))
}

function clean(s) {
  return decode(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim()
}

// Keep inline <a>/<strong>/<em>/<code>, rewrite links, decode entities.
function cleanInline(s) {
  // rewrite <a href>, preserving whitespace that sat inside the anchor text
  s = s.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, txt) => {
    const raw = decode(txt.replace(/<[^>]+>/g, ""))
    const lead = /^\s/.test(raw) ? " " : ""
    const trail = /\s$/.test(raw) ? " " : ""
    const label = raw.replace(/\s+/g, " ").trim()
    let h = href.trim()
    const internal = /^https?:\/\/reboot\.no\/trender\//i.test(h) || /^\/trender\//i.test(h)
    let anchor
    if (internal) {
      const s2 = h.replace(/^https?:\/\/reboot\.no\/trender\//i, "").replace(/^\/trender\//i, "").replace(/\/$/, "")
      anchor = `<a href="/trender/${s2}">${label}</a>`
    } else if (/^https?:\/\/reboot\.no\//i.test(h)) {
      // other internal reboot links -> keep relative (portfolio pages etc.)
      anchor = `<a href="${h.replace(/^https?:\/\/reboot\.no/i, "")}">${label}</a>`
    } else {
      anchor = `<a href="${h}" target="_blank" rel="noopener noreferrer">${label}</a>`
    }
    return lead + anchor + trail
  })
  // strip other tags except allowed inline
  s = s.replace(/<(?!\/?(a|strong|em|b|i|code)\b)[^>]+>/gi, "")
  s = decode(s)
  return s.replace(/[ \t]+/g, " ").trim()
}

function imgUrl(tag) {
  const cand =
    tag.match(/data-src="([^"]+)"/i)?.[1] ||
    tag.match(/src="([^"]+)"/i)?.[1] ||
    ""
  if (!/wp-content\/uploads/.test(cand)) return null
  if (/cropped-Reboot|Cover-v2|\/svg|\.svg|data:image/i.test(cand)) return null
  return cand
}

function stripSize(u) {
  return u.replace(/-\d+x\d+(\.[a-z]+)$/i, "$1")
}

function escAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function backtick(s) {
  // Safe for a JS template literal: escape backticks and ${.
  return "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`"
}

async function download(url, dest) {
  if (!url) return
  const res = await fetch(url)
  if (!res.ok) {
    console.warn(`    ! ${res.status} ${url}`)
    return
  }
  const buf = Buffer.from(await res.arrayBuffer())
  await mkdir(path.dirname(dest), { recursive: true })
  await writeFile(dest, buf)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
