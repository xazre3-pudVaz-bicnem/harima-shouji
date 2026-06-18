import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: 'FC本部向けサービス | フランチャイズ店舗内装・原状回復工事',
  description: 'フランチャイズ本部の施工管理負担を解消。加盟店の出店・改装・退店施工を一括管理。担当者の窓口を1つに集約し、品質統一・コスト管理・管理工数削減をサポートします。',
  keywords: ['FC本部 内装工事', 'フランチャイズ 施工管理', 'フランチャイズ 出店工事', 'FC本部 原状回復'],
  alternates: { canonical: 'https://harima-shouji.co.jp/franchise' },
  openGraph: { title: 'FC本部向けサービス | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/franchise' },
}

export default function FranchisePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'FC本部向け施工管理サービス',
    provider: { '@type': 'LocalBusiness', name: '株式会社播磨商事' },
    description: 'フランチャイズ本部の施工管理を一括サポート。出店・改装・退店まで対応。',
    areaServed: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県',
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        label="FOR FRANCHISE HQ"
        title="FC本部向けサービス"
        subtitle="加盟店の施工管理を一本化。担当者1人の負担を、仕組みで解決します。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'FC本部向け', href: '/franchise' },
        ]}
      />

      {/* Problem statement */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>THE PROBLEM</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            加盟店が増えるほど、<br />施工管理の課題は複雑になる
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: '品質のばらつき', body: '加盟店ごとに施工業者が異なると、同じ仕様書でも仕上がりに差が出ます。ブランドイメージの均一性が損なわれます。' },
              { title: '担当者の管理工数', body: '店舗数が増えるほど、施工業者・加盟店・本部間の連絡調整が複雑になります。担当者1人で管理できる限界があります。' },
              { title: 'コスト管理の困難', body: 'エリアごとに異なる施工業者では、コストのパターン把握や予算管理が難しくなります。' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#F5F4F0', padding: '2.5rem 2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>SOLUTION</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            播磨商事が提供する<br />3つの解決策
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
            {[
              { number: '01', title: '品質の統一', body: '本部仕様書に基づいた施工を全店で実施。仕上がりのばらつきをなくし、ブランド品質を統一します。' },
              { number: '02', title: '管理窓口の一本化', body: '担当者の連絡先を1つに集約。出店・改装・退店まで、すべての施工管理を1つの体制で対応します。' },
              { number: '03', title: 'コスト可視化', body: '案件ごとの費用を統一フォーマットで管理。コストパターンの把握と適正化を継続的にサポートします。' },
            ].map((item) => (
              <div key={item.number} style={{ background: 'rgba(255,255,255,0.04)', padding: '3rem 2.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '1rem' }}>{item.number}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>SERVICES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            対応サービス
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 lg:grid-cols-2">
            {[
              {
                label: 'INTERIOR WORKS',
                title: '店舗内装工事',
                body: '新規出店・改装・リノベーション。夜間施工・複数店舗同時進行に対応。ブランド仕様書に基づいた統一施工を実現します。',
                href: '/service/shop-interior',
                image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
              },
              {
                label: 'RESTORATION',
                title: '原状回復工事',
                body: '退去立会い代行・解体・クロス補修・床復旧・設備復旧まで一括対応。複数店舗の退去スケジュールを一元管理します。',
                href: '/service/restoration',
                image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
              },
            ].map((item) => (
              <div key={item.label} style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{item.body}</p>
                  <Link href={item.href} style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '2px' }}>
                    詳しく見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>WHY HARIMA</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                FC本部に選ばれる<br />理由
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
                {[
                  { title: '出店から退店まで一貫対応', body: '新規出店・改装・退店まで、施工のライフサイクル全体を1社でカバーします。施工会社の切り替えコストが生まれません。' },
                  { title: '関東・東海・近畿対応', body: '関東7都市に加え、静岡・大阪・兵庫にも対応。FC展開の広域エリアをカバーします。' },
                  { title: '完了報告書の標準提出', body: '写真・チェックリスト付きの完了報告書を提出。本部担当者の確認・承認業務を効率化します。' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#0A0A0A', marginTop: '0.75rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8 }}>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image src="/LINE_ALBUM_2026.6.10_260610_9.jpg" alt="FC本部向けサービス" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
            {[
              { label: '多店舗展開企業向け', href: '/multi-store', note: '複数店舗の一括管理' },
              { label: '店舗開発担当者向け', href: '/store-development', note: '出店から退店まで' },
              { label: '対応エリア', href: '/area', note: '関東・東海・近畿 7都府県' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2rem', background: '#F5F4F0', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="FC本部の施工管理について\nご相談ください" subtext="加盟店の施工管理を一本化。まずはご状況をお聞かせください。" />
    </div>
  )
}
