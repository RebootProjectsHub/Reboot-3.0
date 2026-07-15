// Generates static redirect stubs in public/ for the few old URLs that don't
// map 1:1 to a new route. On GitHub Pages there is no server to redirect, so we
// emit tiny meta-refresh pages (with a canonical for SEO consolidation).
// Run: node scripts/gen-redirect-stubs.mjs
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const BASE = "https://reboot.no"

// from (old path, no trailing slash) -> to (new path)
const redirects = {
  "/tilbud": "/kontakt",
  "/ny-nettside/ditt-apotek": "/ny-nettside/ditt-apotek-opera",
  "/trender/category/webdesign": "/trender",
  "/trender/category/seo": "/trender",
  "/trender/category/ux-ui": "/trender",
  "/trender/category/moderne-webdesign": "/trender",
  "/trender/category/kjopsreise": "/trender",
  "/trender/category/integrering-av-kunstig-intelligens": "/trender",
}

function stub(target) {
  return `<!doctype html>
<html lang="no">
<head>
<meta charset="utf-8">
<title>Omdirigerer …</title>
<link rel="canonical" href="${BASE}${target}/">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${target}/">
<script>location.replace("${target}/")</script>
</head>
<body>Omdirigerer til <a href="${target}/">${target}</a> …</body>
</html>
`
}

for (const [from, to] of Object.entries(redirects)) {
  const dir = path.join(ROOT, "public", from.replace(/^\//, ""))
  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, "index.html"), stub(to))
  console.log(`stub  ${from}  ->  ${to}`)
}
