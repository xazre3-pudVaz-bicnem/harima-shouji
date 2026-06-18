import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import {
  getPostBySlug,
  getPosts,
  getFeaturedImageUrl,
  getCategories,
  formatDate,
} from '@/lib/wordpress'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: '記事が見つかりません' }

  const imageUrl = getFeaturedImageUrl(post)
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120),
    alternates: { canonical: `https://harima-shouji.co.jp/blog/${slug}` },
    openGraph: {
      title: post.title.rendered,
      url: `https://harima-shouji.co.jp/blog/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts(50)
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const imageUrl = getFeaturedImageUrl(post)
  const categories = getCategories(post)

  const structured = [
    articleSchema({
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120),
      url: `/blog/${slug}`,
      datePublished: post.date,
      imageUrl: imageUrl || undefined,
    }),
    breadcrumbSchema([
      { name: 'ブログ', url: '/blog' },
      { name: post.title.rendered, url: `/blog/${slug}` },
    ]),
  ]

  return (
    <>
      {structured.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <div className="pt-20 bg-gray-950">
        <div className="container py-10">
          <Breadcrumb
            items={[
              { label: 'ブログ', href: '/blog' },
              { label: post.title.rendered },
            ]}
          />
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {categories.map((cat) => (
                    <span key={cat} className="text-xs text-amber-600 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
              )}
              <h1
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
            </header>

            {/* Featured Image */}
            {imageUrl && (
              <div className="mb-8 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                  width={900}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-sm max-w-none text-gray-700 leading-relaxed
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3
                prose-p:mb-4 prose-p:leading-relaxed
                prose-ul:pl-5 prose-ul:mb-4
                prose-li:mb-1
                prose-a:text-gray-900 prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Related Services */}
            <div className="mt-14 pt-8 border-t border-gray-100">
              <h2 className="text-base font-bold text-gray-900 mb-4">関連サービス</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: '/service/shop-interior', label: '店舗内装工事' },
                  { href: '/service/restoration', label: '原状回復工事' },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-gray-700 border border-gray-100 p-3 hover:border-gray-300 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  )
}
