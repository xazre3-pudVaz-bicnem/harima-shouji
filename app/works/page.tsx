import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_URL } from '@/data/company'
import { visibleWorks, indexableWorks, workCategoryLabels } from '@/data/works'
import type { WorkCategory, WorkData } from '@/data/works'
import { publishedAchievements, achievementsNote } from '@/data/achievements'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '施工実績｜店舗内装・原状回復工事の実績',
  description:
    'サロン・ジム・ピラティススタジオ・FC店舗など、播磨商事の店舗内装工事・原状回復工事の施工事例。業種・エリア・坪数・費用の帯・工期・施工前後の写真を掲載しています。',
  keywords: ['施工実績', '店舗内装工事 実績', 'サロン 内装 施工事例', 'ジム 内装 施工事例', '原状回復工事 実績'],
  openGraph: {
    title: '施工実績｜店舗内装・原状回復工事の実績 株式会社播磨商事',
    description: 'サロン・ジム・ピラティススタジオ・FC店舗など、播磨商事の店舗内装工事・原状回復工事の施工事例。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: `${SITE_URL}/works` },
}

const categoryStyle: Record<WorkCategory, { bg: string; color: string }> = {
  'shop-interior': { bg: '#E7E3DA', color: '#1C1C1C' },
  restoration: { bg: '#E8EBF0', color: '#1C1C1C' },
  salon: { bg: '#F0EBF0', color: '#1C1C1C' },
  gym: { bg: '#EBF0EB', color: '#1C1C1C' },
  pilates: { bg: '#EEF0EB', color: '#1C1C1C' },
}

const filterTabs = [
  { label: '全て', active: true },
  { label: '店舗内装工事', active: false },
  { label: '原状回復工事', active: false },
  { label: 'サロン内装', active: false },
  { label: 'ジム内装', active: false },
]

const internalLinks = [
  { label: 'フランチャイズ本部向けサービス', href: '/franchise', note: 'FC本部・チェーン店の施工管理を一本化' },
  { label: '店舗内装工事', href: '/service/shop-interior', note: '新規出店・改装・リノベーション対応' },
  { label: '原状回復工事', href: '/service/restoration', note: '退去立会い代行・費用適正化サポート' },
]

/** 一覧カードに出す項目（入力されているものだけ） */
function cardMeta(w: WorkData) {
  return [
    { label: 'AREA', value: w.area },
    w.tsubo !== undefined && { label: 'SIZE', value: `${w.tsubo}坪` },
    w.cost && { label: 'COST', value: `${w.cost.range}（${w.cost.tax}）` },
    { label: 'DURATION', value: w.duration },
  ].filter((m): m is { label: string; value: string } => Boolean(m))
}

export default function WorksPage() {
  const realCount = visibleWorks.filter((w) => !w.isIllustration).length
  const illustrationCount = visibleWorks.length - realCount

  return (
    <div style={{ background: '#F6F4EF' }}>
      <JsonLd data={breadcrumbSchema([{ name: 'TOP', url: '/' }, { name: '施工実績', url: '/works' }])} />
      {indexableWorks.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '施工実績一覧',
            url: `${SITE_URL}/works`,
            numberOfItems: indexableWorks.length,
            itemListElement: indexableWorks.map((w, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: w.title,
              url: `${SITE_URL}/works/${w.slug}`,
            })),
          }}
        />
      )}

      <PageHero
        label="WORKS"
        title="施工実績"
        subtitle="サロン・ジム・ピラティススタジオ・FC店舗まで。業種・エリア・坪数・費用の帯・工期とあわせてご紹介します。"
        image="/store-01.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '施工実績', href: '/works' },
        ]}
      />

      {/* 実績件数（集計時点・集計対象が確認できたものだけ） */}
      {publishedAchievements.length > 0 && (
        <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E7E3DA' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem 4rem', alignItems: 'baseline' }}>
              {publishedAchievements.map((a) => (
                <div key={a.id}>
                  <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {a.en}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', color: '#57544D' }}>{a.label}</span>
                    <span className="mono" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 500, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1 }}>
                      {a.count}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#57544D' }}>{a.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#8F8B82', lineHeight: 1.8 }}>※ {achievementsNote}</p>
          </div>
        </section>
      )}

      {/* Filter tabs */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E7E3DA', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                style={{
                  flexShrink: 0,
                  padding: '1.125rem 1.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: tab.active ? 700 : 400,
                  color: tab.active ? '#0A0A0A' : '#8F8B82',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: tab.active ? '2px solid #0A0A0A' : '2px solid transparent',
                  cursor: 'default',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works grid */}
      <section style={{ paddingTop: '5rem', paddingBottom: '7rem', background: '#F6F4EF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              ALL WORKS
            </div>
            <p style={{ fontSize: '0.875rem', color: '#8F8B82', marginBottom: '1rem' }}>
              {[realCount > 0 && `施工事例 ${realCount}件`, illustrationCount > 0 && `施工イメージ ${illustrationCount}件`].filter(Boolean).join('／')}
            </p>
            {illustrationCount > 0 && (
              <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 1.9, background: '#EDEAE2', borderRadius: '4px', padding: '0.875rem 1.25rem', display: 'inline-block' }}>
                ※「施工イメージ」と表示しているものは、実際の施工実績ではなく、対応できる工事の参考例です。実際の施工事例は準備が整い次第、順次公開してまいります。
              </p>
            )}
          </div>

          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visibleWorks.map((work) => {
              const style = categoryStyle[work.category]
              return (
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', overflow: 'hidden' }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#E7E3DA' }}>
                    <Image
                      src={work.imageUrl}
                      alt={work.isIllustration ? `${workCategoryLabels[work.category]}の施工イメージ` : work.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {work.isIllustration && (
                      <span style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(10,10,10,0.72)', color: 'rgba(255,255,255,0.88)', fontSize: '0.6875rem', letterSpacing: '0.04em', padding: '0.35rem 0.8rem' }}>
                        施工イメージ
                      </span>
                    )}
                    {work.status === 'draft' && (
                      <span style={{ position: 'absolute', top: 0, left: 0, background: '#C25E7F', color: '#FFFFFF', fontSize: '0.6875rem', padding: '0.35rem 0.8rem' }}>
                        下書き（本番非表示）
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.04em', background: style.bg, color: style.color }}>
                        {workCategoryLabels[work.category]}
                      </span>
                      {work.industry && (
                        <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.6875rem', fontWeight: 600, color: '#57544D', border: '1px solid #E7E3DA' }}>
                          {work.industry}
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {work.title}
                    </h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', marginBottom: '1.25rem' }}>
                      {cardMeta(work).map((m) => (
                        <div key={m.label}>
                          <div style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', color: '#B5B0A4', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                            {m.label}
                          </div>
                          <div style={{ fontSize: '0.8125rem', color: '#6B675F' }}>{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0A0A0A', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      詳しく見る
                      <span style={{ fontSize: '0.75rem' }}>→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            SERVICES
          </div>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.025em', marginBottom: '3rem' }}>
            関連サービス
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-3">
            {internalLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', marginBottom: '0.625rem' }}>{link.label}</div>
                <div style={{ fontSize: '0.8125rem', color: '#8F8B82', lineHeight: 1.8, marginBottom: '1.25rem' }}>{link.note}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A', letterSpacing: '0.04em' }}>詳しく見る →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading={'施工のご相談は\nお気軽にどうぞ'}
        subtext="現地調査・見積もり無料。複数店舗のまとめてのご相談も歓迎します。"
        primaryLabel="お問い合わせ"
        primaryHref="/contact"
      />
    </div>
  )
}
