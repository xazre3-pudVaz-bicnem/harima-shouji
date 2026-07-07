import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { getPostBySlug, getPosts, getFeaturedImageUrl, getCategories, formatDate } from '@/lib/wordpress'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: '記事が見つかりません' }

  const imageUrl = getFeaturedImageUrl(post)
  return {
    title: `${post.title.rendered} | 播磨商事ブログ`,
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

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120),
    datePublished: post.date,
    author: { '@type': 'Organization', name: '株式会社播磨商事' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事' },
    image: imageUrl || undefined,
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />

      <PageHero
        label="BLOG"
        title={post.title.rendered}
        image={imageUrl || '/LINE_ALBUM_2026.6.10_260610_3.jpg'}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ブログ', href: '/blog' },
          { label: post.title.rendered.slice(0, 20) + (post.title.rendered.length > 20 ? '...' : ''), href: `/blog/${slug}` },
        ]}
      />

      <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #E7E3DA' }}>
            {categories.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {categories.map((cat) => (
                  <span key={cat} style={{ fontSize: '0.6875rem', color: '#8F8B82', background: '#E7E3DA', padding: '0.375rem 1rem', fontWeight: 600 }}>
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <time dateTime={post.date} style={{ fontSize: '0.8125rem', color: '#8F8B82' }}>{formatDate(post.date)}</time>
          </div>

          {/* Featured Image */}
          {imageUrl && (
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
              <Image
                src={imageUrl}
                alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="wp-content"
            style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2 }}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Related Services */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#EDEAE2' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>RELATED SERVICES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: '/service/shop-interior', label: '店舗内装工事' },
                { href: '/service/restoration', label: '原状回復工事' },
              ].map((s) => (
                <Link key={s.href} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none' }}>
                  <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
                    <path d="M0 3H14M14 3L11 1M14 3L11 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to list */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/blog" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>
              ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </article>

      <CtaSection heading="施工管理について\nご相談ください" subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
