// Re-encodes oversized raster images in public/ to WebP.
//
// The site is a static export (next.config.mjs sets images.unoptimized), so
// Next's image optimizer never runs — whatever is committed to public/ is what
// mobile users download. This script does the resizing/compression up front.
//
//   node scripts/optimize-images.mjs --dry    list what would change
//   node scripts/optimize-images.mjs          write .webp next to the originals
//
// It only writes the .webp files. Updating the references and deleting the
// originals is done separately so the diff stays reviewable.
import sharp from "sharp"
import { readdirSync, statSync, existsSync } from "node:fs"
import { join } from "path"

// Nothing on the site renders wider than the 1360px content column, and mobile
// (the form factor we score worst on) never needs more than ~750 CSS px at 2x.
const MAX_WIDTH = 1600
const QUALITY = 80
const MIN_BYTES = 150 * 1024

const dry = process.argv.includes("--dry")

const files = []
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) walk(p)
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(p)
  }
}
walk("public")

let before = 0
let after = 0
const rows = []

for (const file of files) {
  const bytes = statSync(file).size
  if (bytes < MIN_BYTES) continue

  const meta = await sharp(file).metadata()
  const target = file.replace(/\.(png|jpe?g)$/i, ".webp")
  if (existsSync(target) && target !== file) {
    console.log("skip (webp already exists): " + file)
    continue
  }

  const pipeline = sharp(file).webp({ quality: QUALITY })
  if (meta.width > MAX_WIDTH) pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })

  const buf = await pipeline.toBuffer()
  if (!dry) await sharp(buf).toFile(target)

  before += bytes
  after += buf.length
  rows.push({
    file: file.split("\\").join("/"),
    from: Math.round(bytes / 1024),
    to: Math.round(buf.length / 1024),
    dim: meta.width + "x" + meta.height,
  })
}

rows.sort((a, b) => b.from - a.from)
for (const r of rows) {
  const saved = Math.round((1 - r.to / r.from) * 100)
  console.log(
    String(r.from).padStart(5) + " KB -> " + String(r.to).padStart(4) + " KB  (-" +
      String(saved).padStart(2) + "%)  " + r.dim.padEnd(11) + " " + r.file
  )
}
console.log(
  "\n" + rows.length + " files: " + (before / 1024 / 1024).toFixed(1) + " MB -> " +
    (after / 1024 / 1024).toFixed(1) + " MB" + (dry ? "  (dry run)" : "")
)
