import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { news, getNews, categoryLabels } from '@/data/news'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const item = getNews(slug)
  if (!item) return {}

  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `https://harima-shouji.co.jp/news/${slug}` },
    openGraph: {
      title: `${item.title} | 株式会社播磨商事`,
      description: item.excerpt,
      url: `https://harima-shouji.co.jp/news/${slug}`,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const item = getNews(slug)

  if (!item) notFound()

  const relatedNews = news.filter((n) => n.slug !== slug).slice(0, 3)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'ニュース・お知らせ', item: 'https://harima-shouji.co.jp/news' },
      { '@type': 'ListItem', position: 3, name: item.title, item: `https://harima-shouji.co.jp/news/${slug}` },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.excerpt,
    datePublished: item.date,
    dateModified: item.date,
    image: `https://harima-shouji.co.jp${item.imageUrl}`,
    author: { '@type': 'Organization', name: '株式会社播磨商事', url: 'https://harima-shouji.co.jp' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事', url: 'https://harima-shouji.co.jp' },
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHero
        label={categoryLabels[item.category].toUpperCase()}
        title={item.title}
        image={item.imageUrl}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ニュース・お知らせ', href: '/news' },
          { label: item.title.length > 20 ? item.title.slice(0, 20) + '…' : item.title, href: `/news/${slug}` },
        ]}
      />

      {/* Article */}
      <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'center',
              marginBottom: '3rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid #E7E3DA',
            }}
          >
            <time
              dateTime={item.date}
              style={{ fontSize: '0.8125rem', color: '#8F8B82', fontVariantNumeric: 'tabular-nums' }}
            >
              {formatDate(item.date)}
            </time>
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#6B675F',
                background: '#EDEAE2',
                padding: '0.3rem 0.875rem',
              }}
            >
              {categoryLabels[item.category]}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              lineHeight: 1.45,
              marginBottom: '3rem',
            }}
          >
            {item.title}
          </h1>

          {/* Body paragraphs */}
          <div>
            {item.body.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: '0.9375rem',
                  color: '#3A3A3A',
                  lineHeight: 2,
                  marginBottom: '1.5rem',
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #E7E3DA' }}>
            <Link
              href="/news"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#0A0A0A',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              <svg width="14" height="5" viewBox="0 0 14 5" fill="none" style={{ transform: 'scaleX(-1)' }}>
                <path d="M0 2.5H12M12 2.5L9.5 1M12 2.5L9.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      {/* Related news */}
      {relatedNews.length > 0 && (
        <section style={{ background: '#EDEAE2', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
            <div
              style={{
                fontSize: '0.5625rem',
                fontWeight: 700,
                letterSpacing: '0.32em',
                color: '#8F8B82',
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
              }}
            >
              OTHER NEWS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {relatedNews.map((n, i) => (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  style={{
                    display: 'block',
                    padding: '1.75rem 0',
                    textDecoration: 'none',
                    borderTop: i === 0 ? '1px solid #E5E4E0' : 'none',
                    borderBottom: '1px solid #E5E4E0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <time
                      dateTime={n.date}
                      style={{ fontSize: '0.6875rem', color: '#8F8B82' }}
                    >
                      {n.date}
                    </time>
                    <span
                      style={{
                        fontSize: '0.5625rem',
                        fontWeight: 700,
                        color: '#8F8B82',
                        background: '#FFFFFF',
                        padding: '0.2rem 0.625rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {categoryLabels[n.category]}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      lineHeight: 1.55,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {n.title}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link
                href="/news"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#0A0A0A',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #0A0A0A',
                  paddingBottom: '2px',
                }}
              >
                ニュース一覧へ
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaSection
        heading={'施工管理について\nご相談ください'}
        subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。"
      />
    </div>
  )
}
