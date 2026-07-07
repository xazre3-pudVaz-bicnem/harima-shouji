import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '../../_components/PageHero'

export const metadata: Metadata = {
  title: '原状回復工事',
  description: '退去立会い・解体・内装復旧まで。複数店舗の退去スケジュールを一元管理します。FC本部・多店舗展開企業向け。',
}

const features = [
  { number: '01', title: '退去立会い・原状確認', note: 'オーナー・管理会社との立会いを代行。過剰な費用請求の適正化をサポートします。' },
  { number: '02', title: '解体・撤去工事', note: '内装材・造作物・設備の解体から廃材処理まで一括対応します。' },
  { number: '03', title: 'クロス・床・設備の復旧', note: '原状回復に必要な内装工事をすべてお任せいただけます。' },
  { number: '04', title: '複数店舗の退去スケジュール管理', note: '多店舗の退去を一元管理し、担当者の負担を大幅に軽減します。' },
  { number: '05', title: 'オーナー・管理会社との調整', note: '費用面・工事内容の交渉をサポートし、適正な原状回復を実現します。' },
]

const works = [
  '/LINE_ALBUM_2026.6.10_260610_18.jpg',
  '/LINE_ALBUM_2026.6.10_260610_19.jpg',
  '/LINE_ALBUM_2026.6.10_260610_20.jpg',
  '/LINE_ALBUM_2026.6.10_260610_21.jpg',
]

const steps = [
  { number: '01', title: 'お問い合わせ', note: '退去店舗数・スケジュールをお聞かせください。' },
  { number: '02', title: '退去立会い・調査', note: 'オーナー・管理会社との立会いを代行します。' },
  { number: '03', title: '解体・復旧工事', note: '解体から内装復旧まで一括で進めます。' },
  { number: '04', title: '完了・引き渡し', note: '検収後、引き渡し。追加サポートも対応可能です。' },
]

export default function RestorationPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>

      <PageHero
        label="SERVICE 02"
        title="原状回復工事"
        subtitle="退去立会いから解体・内装復旧まで。退去管理の負担を一社にまとめてください。"
        image="/LINE_ALBUM_2026.6.10_260610_14.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/v2' },
          { label: 'サービス', href: '/v2#service' },
          { label: '原状回復工事', href: '/v2/service/restoration' },
        ]}
      />

      {/* Overview */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '5rem', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2rem' }}>
                退去管理の煩雑さを<br />ゼロにする
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2, marginBottom: '1.5rem' }}>
                複数店舗を抱えるフランチャイズ本部・多店舗展開企業にとって、退去時の原状回復は大きな負担です。オーナー・管理会社との調整、立会い代行、解体・内装復旧まですべてを一括してお任せいただけます。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2.2 }}>
                複数店舗の退去スケジュールを一元管理することで、担当者様が個別に追う手間をなくします。
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_18.jpg"
                alt="原状回復工事の様子"
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
                style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', padding: '2rem 0', borderBottom: '1px solid #DDD8CE' }}
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
                <Image src={src} alt={`施工事例 ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#EDEAE2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>FLOW</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '4rem' }}>ご依頼の流れ</h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: '0.75rem', right: '1rem', fontSize: '5rem', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1, color: '#EDEAE2', userSelect: 'none' }}>{step.number}</div>
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
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2rem' }}>まずはお気軽に<br />ご相談ください</h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2, marginBottom: '3rem' }}>複数店舗の退去スケジュールのご相談も歓迎します。</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/v2/contact" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#FFFFFF', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}>
              お問い合わせ
            </Link>
            <a href="tel:080-4724-0713" style={{ display: 'inline-block', padding: '1rem 3rem', background: 'transparent', color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              080-4724-0713
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
