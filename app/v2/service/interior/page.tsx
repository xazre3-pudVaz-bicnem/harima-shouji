import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '店舗内装工事',
  description: '新規出店・改装・リノベーション。クロス・床・設備まで内装工事を一括対応します。',
}

const features = [
  { title: '新規出店・改装・リノベーション', note: 'スケルトンからの新規出店、既存店舗の改装まで対応' },
  { title: '内装全般（クロス・床・天井）', note: '素材選定から施工まで一括でお任せください' },
  { title: '設備・空調・厨房まわり', note: '内装に付随する設備工事も同時対応可能' },
  { title: '夜間・短工期対応', note: '翌朝完了が必要な急ぎ案件もご相談ください' },
  { title: '複数店舗の同時進行', note: 'エリアをまたいだ同時並行施工に対応' },
]

export default function InteriorPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_3.jpg"
          alt="店舗内装工事"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,8,0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>SERVICE 01</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              店舗内装工事
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'grid', gap: '5rem', alignItems: 'start' }} className="lg:grid-cols-[1fr_1fr]">
          <div>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 2.2, marginBottom: '3rem' }}>
              新規出店・既存店舗の改装・部分リノベーションまで幅広く対応いたします。クロス張替え・床材・設備工事・厨房まわりなど内装に関わる工事を一括して承ります。現地調査・ヒアリングから施工・引き渡しまで一貫して対応し、スムーズな開業・改装をサポートします。
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
