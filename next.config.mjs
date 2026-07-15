/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for hosting on GitHub Pages (no Node server).
  output: "export",
  // Trailing slashes emit /path/index.html, which GitHub Pages serves cleanly
  // and lets old non-slash URLs 301 to the canonical slashed version.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static export can't use it.
    unoptimized: true,
  },
}

export default nextConfig
