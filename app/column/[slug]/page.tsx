import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { columns, getColumn } from '@/data/columns'
import { getBlogPosts, getBlogPost } from '@/lib/blog'
import { getRelatedColumns } from '@/lib/columns'
import { categorySlugFromLabel, getCategory } from '@/data/column-categories'

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

/* 目次 */
function Toc({ items }: { items: { id: string; text: string }[] }) {
  if (items.length < 3) return null
  return (
    <nav aria-label="目次" style={{ background: 'var(--surface)', padding: '1.75rem 2rem', marginBottom: '3.5rem' }}>
      <div className="eyebrow-plain" style={{ marginBottom: '1.25rem' }}>目次</div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', counterReset: 'toc' }}>
        {items.map((it) => (
          <li key={it.id} style={{ display: 'flex', gap: '0.875rem', alignItems: 'baseline' }}>
            <span className="mono" style={{ fontSize: '0.625rem', color: '#C25E7F', flexShrink: 0 }}>#</span>
            <a href={`#${it.id}`} style={{ fontSize: '0.875rem', color: '#3A3A3A', textDecoration: 'none', lineHeight: 1.6 }}>{it.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* 関連コラム */
function RelatedColumnsSection({ slug, categorySlug }: { slug: string; categorySlug: string | undefined }) {
  const related = getRelatedColumns(slug, categorySlug, 3)
  if (related.length === 0) return null
  return (
    <section style={{ background: 'var(--surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="eyebrow-plain" style={{ marginBottom: '2rem' }}>関連コラム</div>
        <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
          {related.map((c) => (
            <Link key={c.slug} href={`/column/${c.slug}`} className="row-link" style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', padding: '2rem' }}>
              <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#C25E7F', marginBottom: '0.625rem', textTransform: 'uppercase' }}>{c.categoryLabel}</div>
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

const RELATED_SERVICES = [
  { label: '店舗内装工事について', href: '/service/shop-interior' },
  { label: '原状回復工事について', href: '/service/restoration' },
  { label: 'FC本部向けサービス', href: '/franchise' },
  { label: 'お問い合わせ（現地調査・見積り無料）', href: '/contact' },
]

function RelatedServices() {
  return (
    <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--surface)' }}>
      <div className="eyebrow-plain" style={{ marginBottom: '1.5rem' }}>RELATED SERVICES</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {RELATED_SERVICES.map((s) => (
          <Link key={s.href} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none' }}>
            <span aria-hidden style={{ color: '#C25E7F' }}>→</span>
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default async function ColumnDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  /* ———— 自動・大量生成コラム（Markdown） ———— */
  const post = getBlogPost(slug)
  if (post) {
    const categorySlug = categorySlugFromLabel(post.category)
    const cat = categorySlug ? getCategory(categorySlug) : undefined

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
      articleSection: post.category,
      keywords: post.tags.join(', '),
    }

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
        { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://harima-shouji.co.jp/column' },
        ...(cat ? [{ '@type': 'ListItem', position: 3, name: cat.label, item: `https://harima-shouji.co.jp/column/category/${cat.slug}` }] : []),
        { '@type': 'ListItem', position: cat ? 4 : 3, name: post.title, item: `https://harima-shouji.co.jp/column/${slug}` },
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
            ...(cat ? [{ label: cat.short, href: `/column/category/${cat.slug}` }] : []),
            { label: post.title.slice(0, 16) + (post.title.length > 16 ? '…' : ''), href: `/column/${slug}` },
          ]}
        />

        <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {cat && (
                <Link href={`/column/category/${cat.slug}`} className="mono" style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', background: 'var(--accent-soft)', padding: '0.375rem 1rem', textTransform: 'uppercase', textDecoration: 'none' }}>{post.category}</Link>
              )}
              <time dateTime={post.date} className="mono" style={{ fontSize: '0.75rem', color: '#8F8B82', letterSpacing: '0.06em' }}>{formatDate(post.date)}</time>
              <span className="mono" style={{ fontSize: '0.75rem', color: '#B5B0A4' }}>約{post.toc.length > 0 ? Math.max(3, Math.round(post.html.replace(/<[^>]+>/g, '').length / 500)) : 5}分で読めます</span>
            </div>

            {/* Description lead */}
            <p style={{ fontSize: '1rem', color: '#57544D', lineHeight: 2, marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--line)' }}>
              {post.description}
            </p>

            {/* Cover image */}
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '3.5rem', background: 'var(--surface)' }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 800px) 100vw, 760px" priority />
            </div>

            {/* TOC */}
            <Toc items={post.toc} />

            {/* Body */}
            <div className="md-article" dangerouslySetInnerHTML={{ __html: post.html }} />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '0.75rem', color: '#57544D', border: '1px solid var(--line-2)', padding: '0.3rem 0.875rem', letterSpacing: '0.03em' }}>#{tag}</span>
                ))}
              </div>
            )}

            <RelatedServices />
          </div>
        </article>

        <RelatedColumnsSection slug={slug} categorySlug={categorySlug} />

        <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事をまとめてサポートします。現地調査・お見積りは無料です。" />
      </div>
    )
  }

  /* ———— 手書きの構造化コラム（data/columns.ts） ———— */
  const col = getColumn(slug)
  if (!col) notFound()

  const categorySlug = categorySlugFromLabel(col.category)
  const cat = categorySlug ? getCategory(categorySlug) : undefined
  const toc = col.sections.map((s, i) => ({ id: `sec-${i}`, text: s.heading }))

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.date,
    author: { '@type': 'Organization', name: '株式会社播磨商事' },
    publisher: { '@type': 'Organization', name: '株式会社播磨商事' },
    image: `https://harima-shouji.co.jp${col.image}`,
    articleSection: col.category,
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp' },
      { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://harima-shouji.co.jp/column' },
      { '@type': 'ListItem', position: 3, name: col.title, item: `https://harima-shouji.co.jp/column/${slug}` },
    ],
  }

  return (
    <div style={{ background: 'var(--paper)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <PageHero
        label="COLUMN"
        title={col.title}
        image={col.image}
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'コラム', href: '/column' },
          ...(cat ? [{ label: cat.short, href: `/column/category/${cat.slug}` }] : []),
          { label: col.title.slice(0, 16) + (col.title.length > 16 ? '…' : ''), href: `/column/${slug}` },
        ]}
      />

      <article style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)', flexWrap: 'wrap' }}>
            {cat && (
              <Link href={`/column/category/${cat.slug}`} className="mono" style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#C25E7F', background: 'var(--accent-soft)', padding: '0.375rem 1rem', textTransform: 'uppercase', textDecoration: 'none' }}>{col.category}</Link>
            )}
            <time dateTime={col.date} className="mono" style={{ fontSize: '0.75rem', color: '#8F8B82' }}>{formatDate(col.date)}</time>
          </div>

          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '3.5rem', background: 'var(--surface)' }}>
            <Image src={col.image} alt={col.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 800px) 100vw, 760px" priority />
          </div>

          <Toc items={toc} />

          {/* Sections */}
          {col.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '3.25rem' }}>
              <h2 id={`sec-${i}`} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.5, marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #0A0A0A' }}>
                {section.heading}
              </h2>
              <div>
                {section.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: '0.9375rem', color: '#3A3A3A', lineHeight: 2.1, marginBottom: '1.25rem' }}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          {col.relatedService.length > 0 && (
            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--surface)' }}>
              <div className="eyebrow-plain" style={{ marginBottom: '1.5rem' }}>RELATED SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
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

      <RelatedColumnsSection slug={slug} categorySlug={categorySlug} />

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事をまとめてサポートします。現地調査・お見積りは無料です。" />
    </div>
  )
}
