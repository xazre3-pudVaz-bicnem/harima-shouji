import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'

export const metadata: Metadata = {
  title: '原状回復工事 | 多店舗展開企業・FC本部向け',
  description: '退去立会い代行・解体・クロス補修・床復旧・設備復旧まで。複数店舗の退去スケジュールを一元管理します。費用の適正化サポートも対応。現地調査無料。',
  keywords: ['原状回復工事', '店舗 原状回復', '多店舗 原状回復', '退去立会い 代行'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/restoration' },
  openGraph: { title: '原状回復工事 | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/service/restoration' },
}

const restorationFaq = [
  {
    category: '退去・立会いについて',
    items: [
      { q: '退去立会いの代行は依頼できますか？', a: 'はい、管理会社・オーナーとの立会いを代行します。費用の適正化交渉もサポートします。' },
      { q: '退去期限まで時間がありません。急ぎで対応できますか？', a: 'はい、スケジュールに合わせて対応します。退去期限・現状の物件状況をお知らせください。' },
      { q: '複数店舗の退去が同時期に重なっています。対応できますか？', a: 'はい、複数店舗の同時退去管理を得意としています。スケジュールと各物件の状況をまとめてご相談ください。' },
    ],
  },
  {
    category: '工事範囲・費用について',
    items: [
      { q: '管理会社の見積りが高すぎると思っています。相談できますか？', a: 'はい、費用の妥当性確認サポートを行っています。独自見積りを取ることで、費用の比較検討が可能です。' },
      { q: '原状回復の範囲はどこまでが対象ですか？', a: '契約書の内容と物件の状況によって異なります。現地調査の上、適正な工事範囲をお伝えします。' },
      { q: '見積りは無料ですか？', a: 'はい、現地調査・見積りは無料です。まずはお気軽にご相談ください。' },
    ],
  },
]

export default function RestorationPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '原状回復工事',
    provider: { '@type': 'LocalBusiness', name: '株式会社播磨商事' },
    description: '退去立会い代行・解体・内装復旧・クロス補修・設備復旧まで一括対応。',
    areaServed: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県',
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        label="RESTORATION"
        title="原状回復工事"
        subtitle="退去立会いから解体・内装復旧まで。複数店舗の退去スケジュールを一元管理します。"
        image="/LINE_ALBUM_2026.6.10_260610_19.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'サービス', href: '/service' },
          { label: '原状回復工事', href: '/service/restoration' },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_18.jpg"
                alt="原状回復工事の施工例"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>OVERVIEW</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                退店管理の<br />工数を最小化する<br />一括サポート
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2, marginBottom: '2rem' }}>
                多店舗展開企業・FC本部にとって、複数店舗の退去が重なる時期は担当者の対応負荷が集中します。退去立会いの代行・工事スケジュールの管理・費用の適正化まで、窓口を一本化して対応します。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>
                解体・クロス補修・床復旧・設備復旧まで一括で施工します。管理会社との費用交渉サポートも行い、過剰請求を防ぎます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FEATURES</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            対応内容
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '01', title: '退去立会い代行', body: '管理会社・オーナーとの立会いを代行します。費用の適正化交渉もサポートします。' },
              { label: '02', title: '解体・撤去工事', body: '造作物・設備・什器の撤去から解体工事まで対応します。廃材の適切な処理も含みます。' },
              { label: '03', title: 'クロス・床の補修・復旧', body: '壁紙（クロス）の張替え・床材の補修・復旧を行います。契約書の原状回復条件に合わせて対応します。' },
              { label: '04', title: '設備の復旧', body: '電気・空調・水回りなど設備の復旧・原状回復工事に対応します。' },
              { label: '05', title: '複数店舗の退去一括管理', body: '複数店舗の退去スケジュールをまとめて管理します。担当者の窓口を1つに集約します。' },
              { label: '06', title: '費用の適正化サポート', body: '管理会社の見積りに対して独自の見積りを提示します。費用の妥当性確認・適正化をサポートします。' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#FFFFFF', padding: '3rem 2.5rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#F0EFEC', letterSpacing: '-0.05em', marginBottom: '0.5rem', lineHeight: 1 }}>{item.label}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FLOW</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            ご依頼の流れ
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
            {[
              { step: '01', title: 'お問い合わせ・物件情報共有', body: '退去物件の概要・退去期限・契約書の内容などをお知らせください。' },
              { step: '02', title: '現地調査・見積り', body: '現地を確認した上で原状回復の範囲と費用を見積ります。現地調査・見積りは無料です。' },
              { step: '03', title: '退去立会い（代行対応）', body: '管理会社・オーナーとの立会いを代行します。費用交渉のサポートも行います。' },
              { step: '04', title: '原状回復工事', body: '確定した範囲で解体・補修・復旧工事を行います。進捗は担当者様に報告します。' },
              { step: '05', title: '鍵の返却・完了報告', body: '工事完了後、管理会社・オーナーへの鍵返却をサポートします。完了報告書を提出します。' },
            ].map((item, i, arr) => (
              <li key={item.step} style={{ display: 'grid', gridTemplateColumns: '4rem 1px 1fr', gap: '0 2rem', paddingBottom: i < arr.length - 1 ? '3rem' : 0 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.1em', paddingTop: '0.25rem', textAlign: 'right' }}>{item.step}</div>
                <div style={{ position: 'relative', width: '1px', background: '#E5E3DF' }}>
                  <div style={{ position: 'absolute', top: '0.25rem', left: '-3px', width: '7px', height: '7px', borderRadius: '50%', background: '#0A0A0A' }} />
                </div>
                <div style={{ paddingBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8 }}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>GALLERY</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>施工事例</h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-2 lg:grid-cols-4">
            {[
              '/LINE_ALBUM_2026.6.10_260610_18.jpg',
              '/LINE_ALBUM_2026.6.10_260610_19.jpg',
              '/LINE_ALBUM_2026.6.10_260610_21.jpg',
              '/LINE_ALBUM_2026.6.10_260610_14.jpg',
            ].map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                <Image src={src} alt={`施工事例 ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            よくある質問
          </h2>
          <FaqAccordion faqs={restorationFaq} />
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#F5F4F0', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: '店舗内装工事', href: '/service/shop-interior', note: '新規出店・改装・夜間施工' },
              { label: '多店舗展開企業向け', href: '/multi-store', note: '複数店舗の一括管理' },
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ本部の施工管理' },
              { label: '対応エリア', href: '/area', note: '関東・東海・近畿 7都府県' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="原状回復工事について\nご相談ください" subtext="退去立会い代行・費用の適正化サポートも対応します。まずはお気軽にご相談ください。" />
    </div>
  )
}
