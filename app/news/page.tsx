import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { news, categoryLabels } from '@/data/news'
import type { NewsCategory } from '@/data/news'

export const metadata: Metadata = {
  title: 'ニュース・お知らせ',
  description: '株式会社播磨商事のニュース・お知らせ一覧です。新着情報、施工情報、メディア掲載、採用・会社情報をご確認いただけます。',
  keywords: ['播磨商事 お知らせ', '播磨商事 ニュース', '店舗内装 施工情報'],
  alternates: { canonical: 'https://harima-shouji.co.jp/news' },
  openGraph: {
    title: 'ニュース・お知らせ | 株式会社播磨商事',
    description: '株式会社播磨商事のニュース・お知らせ一覧です。',
    url: 'https://harima-shouji.co.jp/news',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
    { '@type': 'ListItem', position: 2, name: 'ニュース・お知らせ', item: 'https://harima-shouji.co.jp/news' },
  ],
}

const ALL_CATEGORIES: Array<{ value: NewsCategory | 'all'; label: string }> = [
  { value: 'all', label: '全て' },
  { value: 'news', label: categoryLabels.news },
  { value: 'media', label: categoryLabels.media },
  { value: 'works', label: categoryLabels.works },
  { value: 'company', label: categoryLabels.company },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

type SearchParams = { category?: string }

export default async function NewsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { category } = await searchParams
  const activeCategory = category as NewsCategory | 'all' | undefined

  const filteredNews =
    !activeCategory || activeCategory === 'all'
      ? news
      : news.filter((n) => n.category === activeCategory)

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        label="NEWS"
        title="ニュース・お知らせ"
        subtitle="播磨商事からの最新情報をお届けします。"
        image="/fc-05.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ニュース・お知らせ', href: '/news' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '6rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Category tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              flexWrap: 'wrap',
              borderBottom: '1px solid #E7E3DA',
              marginBottom: '4rem',
            }}
          >
            {ALL_CATEGORIES.map(({ value, label }) => {
              const isActive = (!activeCategory && value === 'all') || activeCategory === value
              return (
                <Link
                  key={value}
                  href={value === 'all' ? '/news' : `/news?category=${value}`}
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? '#0A0A0A' : '#8F8B82',
                    textDecoration: 'none',
                    borderBottom: isActive ? '2px solid #0A0A0A' : '2px solid transparent',
                    marginBottom: '-1px',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* News list */}
          {filteredNews.length === 0 ? (
            <p style={{ fontSize: '0.9375rem', color: '#8F8B82', textAlign: 'center', padding: '4rem 0' }}>
              該当するお知らせはありません。
            </p>
          ) : (
            <div>
              {filteredNews.map((item, i) => (
                <div
                  key={item.slug}
                  style={{
                    borderTop: i === 0 ? '1px solid #E7E3DA' : 'none',
                    borderBottom: '1px solid #E7E3DA',
                  }}
                >
                  <Link
                    href={`/news/${item.slug}`}
                    style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 1.75rem)', alignItems: 'center', padding: '2rem 0', textDecoration: 'none' }}
                  >
                    <div style={{ position: 'relative', width: 'clamp(96px, 26vw, 200px)', aspectRatio: '4/3', flexShrink: 0, overflow: 'hidden', borderRadius: '4px', background: '#EDEAE2' }}>
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fill
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 26vw, 200px"
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <time
                        dateTime={item.date}
                        style={{ fontSize: '0.75rem', color: '#8F8B82', fontVariantNumeric: 'tabular-nums' }}
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
                          padding: '0.25rem 0.75rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        lineHeight: 1.6,
                        marginBottom: '0.625rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: '#6B675F',
                        lineHeight: 1.8,
                        marginBottom: '1rem',
                      }}
                    >
                      {item.excerpt}
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#0A0A0A',
                        textTransform: 'uppercase',
                      }}
                    >
                      <svg width="14" height="5" viewBox="0 0 14 5" fill="none">
                        <path d="M0 2.5H12M12 2.5L9.5 1M12 2.5L9.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Read more
                    </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        heading={'施工管理について\nご相談ください'}
        subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。"
      />
    </div>
  )
}
