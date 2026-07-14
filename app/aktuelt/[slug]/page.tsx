import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { PostLayout } from "@/components/post-layout"
import { SiteFooter } from "@/components/site-footer"
import { getPost, posts } from "@/posts"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const path = `/aktuelt/${post.slug}`
  const image = post.image || "/og-image.png"
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "nb_NO",
      siteName: "Reboot",
      url: path,
      title: `${post.title} | Reboot`,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [{ url: image, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Reboot`,
      description: post.excerpt,
      images: [image],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PostLayout post={post} />
      <SiteFooter />
    </main>
  )
}
