import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../_components/PageHero'

export const metadata: Metadata = {
  title: '店舗内装工事',
  description: '新規出店・改装・リノベーション。クロス・床・設備まで、店舗内装工事を一括対応します。FC本部・多店舗展開企業向け。',
}

const features = [
  { number: '01', title: '新規出店・改装・リノベーション', note: 'スケルトンからの新規出店、既存店舗の部分改装・全面リノベーションまで対応します。' },
  { number: '02', title: '内装全般（クロス・床・天井）', note: '壁紙・フロア・天井の素材選定から施工まで一括してお任せください。' },
  { number: '03', title: '設備・空調・厨房まわり', note: '内装に付随する設備工事も同時対応。専門業者との連携で工期を短縮します。' },
  { number: '04', title: '夜間・短工期対応', note: '翌朝完了が必要な急ぎ案件、閉店後施工もご相談ください。' },
  { number: '05', title: '複数店舗の同時進行', note: 'エリアをまたいだ同時並行施工に対応。工程管理の窓口を一本化します。' },
]

const works = [
  '/LINE_ALBUM_2026.6.10_260610_6.jpg',
  '/LINE_ALBUM_2026.6.10_260610_9.jpg',
  '/LINE_ALBUM_2026.6.10_260610_12.jpg',
  '/LINE_ALBUM_2026.6.10_260610_17.jpg',
]

const steps = [
  { number: '01', title: 'お問い合わせ', note: 'フォームまたはお電話でご連絡ください。' },
  { number: '02', title: '現地調査（無料）', note: '店舗に伺い、工事内容・スケジュールを確認します。' },
  { number: '03', title: 'お見積り・ご提案', note: '調査内容をもとに、最適な施工プランをご提案します。' },
  { number: '04', title: '施工・引き渡し', note: '工程管理を徹底し、完了後に検収・引き渡しを行います。' },
]

export default function InteriorPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>

      <PageHero
        label="SERVICE 01"
        title="店舗内装工事"
        subtitle="新規出店から改装・リノベーションまで。施工管理をまとめてお任せください。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/v2' },
          { label: 'サービス', href: '/v2#service' },
          { label: '店舗内装工事', href: '/v2/service/interior' },
        ]}
      />

      {/* Overview */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '5rem', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2rem' }}>
                店舗の内装工事を<br />ワンストップで
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2, marginBottom: '1.5rem' }}>
                クロス張替え・床材・天井・設備まわりなど内装に関わる工事を一括して承ります。現地調査・ヒアリングから施工・引き渡しまで一貫対応し、スムーズな開業・改装をサポートします。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>
                FC本部・チェーン店本部のパートナーとして、複数店舗を横断した品質統一と進捗管理を行います。本部担当者様の連絡先は一つで完結します。
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_6.jpg"
                alt="店舗内装工事の様子"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>FEATURES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '4rem' }}>
            対応内容
          </h2>
          <div>
            {features.map((f) => (
              <div
                key={f.number}
                style={{
                  display: 'flex',
                  gap: '2.5rem',
                  alignItems: 'flex-start',
                  padding: '2rem 0',
                  borderBottom: '1px solid #DDD8CE',
                }}
              >
                <span style={{ flexShrink: 0, fontSize: '0.625rem', fontWeight: 700, color: '#B5B0A4', letterSpacing: '0.08em', paddingTop: '0.25rem', minWidth: '2rem' }}>{f.number}</span>
                <div>
                  <div style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', marginBottom: '0.5rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#8F8B82', lineHeight: 1.85 }}>{f.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works gallery */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>WORKS</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '3rem' }}>
            施工事例
          </h2>
          <div style={{ display: 'grid', gap: '4px' }} className="grid-cols-2 lg:grid-cols-4">
            {works.map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                <Image
                  src={src}
                  alt={`施工事例 ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>FLOW</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '4rem' }}>
            ご依頼の流れ
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  background: '#FFFFFF',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '1rem',
                    fontSize: '5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: '#EDEAE2',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem', background: '#0A0A0A', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>{step.number}</span>
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', marginBottom: '0.75rem' }}>{step.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#8F8B82', lineHeight: 1.9 }}>{step.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#101014' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>CONTACT</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2rem' }}>
            まずはお気軽に<br />ご相談ください
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2, marginBottom: '3rem' }}>
            複数店舗のまとめてのご相談も歓迎します。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/v2/contact"
              style={{ display: 'inline-block', padding: '1rem 3rem', background: '#FFFFFF', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}
            >
              お問い合わせ
            </Link>
            <a
              href="tel:080-4724-0713"
              style={{ display: 'inline-block', padding: '1rem 3rem', background: 'transparent', color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              080-4724-0713
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
