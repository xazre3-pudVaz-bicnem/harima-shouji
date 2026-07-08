import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columns, getColumn } from '@/data/columns'
import { getBlogPosts, getBlogPost } from '@/lib/blog'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return [
    ...getBlogPosts().map((p) => ({ slug: p.slug })),
    ...columns.map((col) => ({ slug: col.slug })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params

  const post = getBlogPost(slug)
  if (post) {
    return {
      title: `${post.title} | 播磨商事コラム`,
      description: post.description,
      keywords: post.tags,
      alternates: { canonical: `https://harima-shouji.co.jp/column/${slug}` },
      openGraph: {
        title: `${post.title} | 株式会社播磨商事`,
        description: post.description,
        url: `https://harima-shouji.co.jp/column/${slug}`,
        images: [{ url: post.image, width: 1200, height: 630 }],
        type: 'article',
      },
    }
  }

  const col = getColumn(slug)
  if (!col) return {}

  return {
    title: `${col.title} | 播磨商事コラム`,
    description: col.description,
    keywords: col.keywords,
    alternates: { canonical: `https://harima-shouji.co.jp/column/${slug}` },
    openGraph: {
      title: `${col.title} | 株式会社播磨商事`,
      description: col.description,
      url: `https://harima-shouji.co.jp/column/${slug}`,
      images: [{ url: col.image, width: 1200, height: 630 }],
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

/* すべてのコラム（md + 静的）から「他の記事」を選ぶ */
function moreColumns(currentSlug: string) {
  return [
    ...getBlogPosts().map((p) => ({ slug: p.slug, title: p.title, category: p.category, date: p.date })),
    ...columns.map((c) => ({ slug: c.slug, title: c.title, category: c.category, date: c.date })),
  ]
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3)
}

function MoreColumnsSection({ slug }: { slug: string }) {
  return (
    <section style={{ background: 'var(--surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="eyebrow-plain" style={{ marginBottom: '2rem' }}>MORE COLUMNS</div>
        <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
          {moreColumns(slug).map((c) => (
            <Link key={c.slug} href={`/column/${c.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', padding: '2rem' }}>
              <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#C25E7F', marginBottom: '0.625rem', textTransform: 'uppercase' }}>{c.category}</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6 }}>{c.title}</div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/column" className="mono" style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid #0A0A0A', paddingBottom: '3px' }}>
            コラム一覧へ →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default async function ColumnDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  /* ———— 自動生成コラム（Markdown） ———— */
  const post = getBlogPost(slug)
  if (post) {
    const articleStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: '株式会社播磨商事', url: 'https://harima-shouji.co.jp' },
      publisher: { '@type': 'Organization', name: '株式会社播磨商事', url: 'https://harima-shouji.co.jp' },
      image: `https://harima-shouji.co.jp${post.image}`,
      mainEntityOfPage: `https://harima-shouji.co.jp/column/${slug}`,
    }

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
        { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://harima-shouji.co.jp/column' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://harima-shouji.co.jp/column/${slug}` },
      ],
    }

    return (
      <div style={{ background: 'var(--paper)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        <PageHero
          label="COLUMN"
          title={post.title}
          image={post.image}
          breadcrumb={[
            { label: 'TOP', href: '/' },
            { label: 'コラム', href: '/column' },
            { label: post.title.slice(0, 20) + (post.title.length > 20 ? '...' : ''), href: `/column/${slug}` },
          ]}
        />

        <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)', flexWrap: 'wrap' }}>
              <span className="mono" style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', background: 'var(--accent-soft)', padding: '0.375rem 1rem', textTransform: 'uppercase' }}>{post.category}</span>
              <time dateTime={post.date} className="mono" style={{ fontSize: '0.75rem', color: '#8F8B82', letterSpacing: '0.06em' }}>{formatDate(post.date)}</time>
            </div>

            {/* Cover image */}
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem', background: 'var(--surface)' }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 800px) 100vw, 800px" priority />
            </div>

            {/* Body */}
            <div className="md-article" dangerouslySetInnerHTML={{ __html: post.html }} />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '0.75rem', color: '#57544D', border: '1px solid var(--line-2)', padding: '0.3rem 0.875rem', letterSpacing: '0.03em' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Related services */}
            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--surface)' }}>
              <div className="eyebrow-plain" style={{ marginBottom: '1.5rem' }}>RELATED SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: '店舗内装工事について', href: '/service/shop-interior' },
                  { label: '原状回復工事について', href: '/service/restoration' },
                  { label: 'お問い合わせ（現地調査・見積り無料）', href: '/contact' },
                ].map((s) => (
                  <Link key={s.href} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none' }}>
                    <span aria-hidden style={{ color: '#C25E7F' }}>→</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        <MoreColumnsSection slug={slug} />

        <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
      </div>
    )
  }

  /* ———— 静的コラム（data/columns.ts） ———— */
  const col = getColumn(slug)
  if (!col) notFound()

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.date,
    author: { '@type': 'Organization', name: '株式会社播磨商事' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事' },
    image: `https://harima-shouji.co.jp${col.image}`,
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <PageHero
        label={col.category.toUpperCase()}
        title={col.title}
        image={col.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
          { label: col.title.slice(0, 20) + (col.title.length > 20 ? '...' : ''), href: `/column/${slug}` },
        ]}
      />

      {/* Article */}
      <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontSize: '0.6875rem', color: '#8F8B82', background: 'var(--line)', padding: '0.375rem 1rem', fontWeight: 600 }}>{col.category}</span>
            <time dateTime={col.date} style={{ fontSize: '0.8125rem', color: '#8F8B82' }}>{formatDate(col.date)}</time>
          </div>

          {/* Cover image */}
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '4rem' }}>
            <Image src={col.image} alt={col.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 800px) 100vw, 800px" priority />
          </div>

          {/* Sections */}
          {col.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #0A0A0A' }}>
                {section.heading}
              </h2>
              <div>
                {section.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2, marginBottom: '1.25rem' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Related services */}
          {col.relatedService.length > 0 && (
            <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--surface)' }}>
              <div className="eyebrow-plain" style={{ marginBottom: '1.5rem' }}>RELATED SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.relatedService.map((s) => (
                  <Link key={s.href} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none' }}>
                    <span aria-hidden style={{ color: '#C25E7F' }}>→</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <MoreColumnsSection slug={slug} />

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
