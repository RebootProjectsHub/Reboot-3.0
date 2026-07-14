import sharp from "sharp"
import { readFileSync, writeFileSync } from "node:fs"

const raw = readFileSync("public/Reboot-cream.svg").toString()
// Extract inner markup (defs + paths), recolor cream -> dark maroon
const inner = raw
  .replace(/<\?xml[^>]*>/, "")
  .replace(/<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .replace(/#f4ece3/gi, "#4a1522")

const W = 1200, H = 630
// Logo native viewBox is 622 x 197.71. Scale to ~360 wide => 360/622 = 0.5787
const scale = 0.5787

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#f4ece3"/>
  <g transform="translate(96,110) scale(${scale})">${inner}</g>
  <text x="98" y="400" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#4a1522">Én partner for alt</text>
  <text x="98" y="470" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#4a1522">innen nettsider</text>
  <rect x="98" y="520" width="64" height="6" rx="3" fill="#ff5747"/>
  <text x="178" y="529" font-family="monospace" font-size="25" fill="#7c5460">reboot.no · Nydalen, Oslo</text>
</svg>`

writeFileSync("scripts/og-preview.svg", svg)
await sharp(Buffer.from(svg)).png().toFile("public/og-image.png")
const meta = await sharp("public/og-image.png").metadata()
console.log("wrote public/og-image.png", meta.width + "x" + meta.height)
