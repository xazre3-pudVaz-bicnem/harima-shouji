import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'
import RelatedColumns from '@/app/v2/_components/RelatedColumns'

export const metadata: Metadata = {
  title: '店舗内装工事 | FC本部・多店舗展開企業向け',
  description: 'FC本部・多店舗展開企業の店舗内装工事を一括管理。新規出店・改装・夜間施工に対応。ブランド仕様の統一施工で全店品質を均一化。現地調査・見積無料。',
  keywords: ['店舗内装工事', 'フランチャイズ 内装工事', '多店舗 内装工事', 'FC本部 内装工事'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/shop-interior' },
  openGraph: { title: '店舗内装工事 | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/service/shop-interior' },
}

const interiorFaq = [
  {
    category: '施工について',
    items: [
      { q: '夜間・休日施工に対応していますか？', a: 'はい、閉店後の夜間施工に対応しています。翌日の営業開始に間に合うスケジュールでの対応実績があります。' },
      { q: '複数店舗を同時に進めることはできますか？', a: 'はい、複数案件の同時進行管理を得意としています。担当者様の窓口を1つに集約して進捗管理します。' },
      { q: 'フランチャイズ仕様書に基づいた施工はできますか？', a: 'はい、本部から支給された仕様書・VI基準に基づいて施工します。仕様の確認から施工完了報告まで一貫して対応します。' },
      { q: '工期の目安を教えてください。', a: '標準的な店舗（30〜50坪）で2〜4週間が目安です。物件の状態・工事範囲・夜間施工の可否によって変わります。詳細はご相談ください。' },
    ],
  },
  {
    category: '費用・見積り',
    items: [
      { q: '見積りは無料ですか？', a: 'はい、現地調査・見積りは無料です。物件の図面やお持ちの情報があれば概算をお伝えすることも可能です。' },
      { q: '予算内に収まるか相談できますか？', a: 'はい、工事範囲の調整やコスト最適化の提案を行っています。まずはご要件とご予算をお聞かせください。' },
    ],
  },
]

export default function ShopInteriorPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '店舗内装工事',
    provider: { '@type': 'LocalBusiness', name: '株式会社播磨商事' },
    description: 'FC本部・多店舗展開企業向けの店舗内装工事。新規出店・改装・夜間施工対応。',
    areaServed: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県',
  }

  return (
    <div style={{ background: '#F6F4EF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        label="INTERIOR WORKS"
        title="店舗内装工事"
        subtitle="FC本部・多店舗展開企業の出店・改装施工をまとめてサポート。担当者の管理工数を削減します。"
        image="/store-03.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'サービス', href: '/service' },
          { label: '店舗内装工事', href: '/service/shop-interior' },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                施工管理を<br />本部担当者一人に<br />集約する体制
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, marginBottom: '2rem' }}>
                加盟店ごとに施工業者が異なると、品質のばらつき・コスト管理の煩雑さ・担当者の対応負荷が生まれます。播磨商事は、FC本部・多店舗展開企業を主要取引先として、出店・改装施工の窓口を一本化します。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
                本部仕様書に基づいた統一施工・夜間施工対応・複数案件の同時進行管理により、担当者の管理工数を大幅に削減します。
              </p>
            </div>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image
                src="/store-02.png"
                alt="店舗内装工事の施工イメージ"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#EDEAE2', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FEATURES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            対応内容
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '01', title: '新規出店施工', body: '物件引き渡し後の内装仕上げ全般。クロス・床・天井・照明・造作工事まで対応します。' },
              { label: '02', title: '改装・リノベーション', body: '既存店舗のブランドリニューアル・設備更新・部分改装。営業を続けながらの段階施工にも対応します。' },
              { label: '03', title: 'ブランド仕様の統一施工', body: 'FC本部から支給された仕様書・VI基準に基づいて施工。全店品質を均一化します。' },
              { label: '04', title: '夜間・短工期対応', body: '閉店後の夜間施工で翌日の営業に影響を与えません。タイトなオープンスケジュールにも対応します。' },
              { label: '05', title: '複数店舗の同時進行', body: '複数案件が同時に動いている状況でも、担当者の窓口を1つに集約して進捗管理します。' },
              { label: '06', title: '施工完了報告', body: '写真・チェックリスト付きの完了報告書を提出。本部担当者の確認・承認業務を効率化します。' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#FFFFFF', padding: '3rem 2.5rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E7E3DA', letterSpacing: '-0.05em', marginBottom: '0.5rem', lineHeight: 1 }}>{item.label}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FLOW</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            ご依頼の流れ
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
            {[
              { step: '01', title: 'お問い合わせ・物件情報共有', body: '施工物件の概要・希望工期・仕様書などをお知らせください。' },
              { step: '02', title: '現地調査・見積り', body: '現地を確認した上で詳細な見積りを提出します。現地調査・見積りは無料です。' },
              { step: '03', title: '施工計画の確認', body: '工期・作業範囲・仕様を確認します。本部担当者様との情報共有フローを整えます。' },
              { step: '04', title: '施工', body: '確定した計画に基づいて施工します。進捗は担当者様に定期報告します。' },
              { step: '05', title: '完了確認・引き渡し', body: '施工完了後、写真・完了報告書を提出します。本部確認後に鍵をお渡しします。' },
            ].map((item, i, arr) => (
              <li key={item.step} style={{ display: 'grid', gridTemplateColumns: '4rem 1px 1fr', gap: '0 2rem', paddingBottom: i < arr.length - 1 ? '3rem' : 0 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8F8B82', letterSpacing: '0.1em', paddingTop: '0.25rem', textAlign: 'right' }}>{item.step}</div>
                <div style={{ position: 'relative', width: '1px', background: '#DDD8CE' }}>
                  <div style={{ position: 'absolute', top: '0.25rem', left: '-3px', width: '7px', height: '7px', borderRadius: '50%', background: '#0A0A0A' }} />
                </div>
                <div style={{ paddingBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: '#EDEAE2', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>GALLERY</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>施工イメージ</h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-2 lg:grid-cols-4">
            {[
              '/store-04.png',
              '/store-05.png',
              '/store-06.png',
              '/store-07.png',
            ].map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                <Image src={src} alt={`店舗内装工事の施工イメージ ${i + 1}`} fill loading="lazy" style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            よくある質問
          </h2>
          <FaqAccordion faqs={interiorFaq} />
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#EDEAE2', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ本部の施工管理' },
              { label: 'サロン内装工事', href: '/industry/salon-interior', note: '美容室・エステ・ネイル' },
              { label: 'ジム内装工事', href: '/industry/gym-interior', note: 'フィットネス・パーソナルジム' },
              { label: '原状回復工事', href: '/service/restoration', note: '退去・解体・内装復旧' },
              { label: '施工実績', href: '/works', note: '内装・原状回復の実績' },
              { label: 'お問い合わせ', href: '/contact', note: '現地調査・見積りは無料' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedColumns categorySlugs={['store-development', 'fc-headquarters', 'cost-reduction', 'industry']} background="var(--paper)" />

      <CtaSection heading={'店舗内装工事について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。現地調査・見積無料。" />
    </div>
  )
}
