/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old blog category archives -> new articles hub
      {
        source: "/trender/category/:slug*",
        destination: "/aktuelt",
        permanent: true,
      },
      // Old blog posts -> new article pages
      {
        source: "/trender/:slug",
        destination: "/aktuelt/:slug",
        permanent: true,
      },
      // Old blog hub -> new articles hub
      {
        source: "/trender",
        destination: "/aktuelt",
        permanent: true,
      },
      // Old "request a quote" page -> contact
      {
        source: "/tilbud",
        destination: "/kontakt",
        permanent: true,
      },
      // Renamed case
      {
        source: "/ny-nettside/ditt-apotek",
        destination: "/ny-nettside/ditt-apotek-opera",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
