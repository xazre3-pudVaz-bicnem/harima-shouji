import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '原状回復工事',
  description: '退去立会い・解体・内装復旧まで。複数店舗の退去スケジュールを一元管理します。',
}

const features = [
  { title: '退去立会い・原状確認', note: 'オーナー・管理会社との立会いを代行' },
  { title: '解体・撤去工事', note: '内装材・造作物・設備の解体から廃材処理まで' },
  { title: 'クロス・床・設備の復旧', note: '原状回復に必要な内装工事を一括対応' },
  { title: '複数店舗の退去スケジュール管理', note: '多店舗の退去を一元管理し担当者の負担を軽減' },
  { title: 'オーナー・管理会社との調整', note: '過剰な費用請求の適正化サポート' },
]

export default function RestorationPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_10.jpg"
          alt="原状回復工事"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,8,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>SERVICE 02</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              原状回復工事
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'grid', gap: '5rem', alignItems: 'start' }} className="lg:grid-cols-[1fr_1fr]">
          <div>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 2.2, marginBottom: '3rem' }}>
              退去時の原状回復工事を迅速・適正に対応いたします。オーナー・管理会社との交渉立会い、退去立会い、解体・内装復旧まで一括してお任せいただけます。複数店舗の退去スケジュールを一元管理し、ご担当者様の負担を大幅に軽減します。
            </p>
            <Link
              href="/v2#contact"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: '#0A0A0A',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
              }}
            >
              お問い合わせ
            </Link>
          </div>

          <div>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem 0',
                  borderBottom: '1px solid #E5E3DF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.375rem',
                }}
              >
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em' }}>{f.title}</div>
                <div style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
