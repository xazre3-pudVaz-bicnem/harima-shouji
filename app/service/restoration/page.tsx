import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import FaqAccordion from '@/app/v2/faq/_components/FaqAccordion'

export const metadata: Metadata = {
  title: '原状回復工事 | 店舗退去・テナント原状回復 東京・関東',
  description:
    '店舗・テナントの原状回復工事は播磨商事へ。退去立会い代行・クロス補修・床復旧・設備復旧・解体まで一括対応。複数店舗の退去を一元管理し、費用の適正化をサポートします。東京・埼玉・千葉・神奈川対応。現地調査無料。',
  keywords: [
    '原状回復工事',
    '店舗 原状回復',
    '店舗退去 原状回復',
    'テナント 原状回復',
    '原状回復工事 東京',
    '多店舗 原状回復',
    '退去立会い 代行',
    '原状回復 費用',
  ],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/restoration' },
  openGraph: {
    title: '原状回復工事 | 店舗退去・テナント原状回復 | 株式会社播磨商事',
    description:
      '退去立会い代行・クロス補修・床復旧・設備復旧まで一括対応。複数店舗の退去スケジュールを一元管理します。',
    url: 'https://harima-shouji.co.jp/service/restoration',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const restorationFaq = [
  {
    category: '費用・見積りについて',
    items: [
      {
        q: '現地調査・見積りは無料ですか？',
        a: 'はい、現地調査・見積りはすべて無料です。退去物件の住所・退去期限・契約書の概要をお知らせいただければ、スケジュールを調整の上ご訪問します。',
      },
      {
        q: '管理会社から提示された見積りが高すぎると感じています。相談できますか？',
        a: 'はい、独自の見積りを作成し、管理会社の見積りと比較できるようサポートします。原状回復義務の範囲は契約書と国土交通省ガイドラインに基づいて判断するため、過剰請求の可能性がある項目を明確にします。',
      },
      {
        q: '原状回復の費用相場はどのくらいですか？',
        a: '物件の広さ・築年数・工事範囲によって大きく異なります。10〜30坪の店舗で50万〜200万円程度が目安ですが、現地調査なしでの概算はお伝えが難しいため、まずはご相談ください。',
      },
    ],
  },
  {
    category: '工事範囲・スケジュールについて',
    items: [
      {
        q: '退去期限まで時間がありません。急ぎで対応できますか？',
        a: 'はい、退去期限に合わせたスケジュールで対応します。夜間・休日施工にも対応していますので、退去期限と物件の状況をお知らせください。',
      },
      {
        q: '複数店舗の退去が同時期に重なっています。対応できますか？',
        a: 'はい、複数店舗の同時退去管理を得意としています。各物件の退去期限・工事範囲をまとめて管理し、担当者様の窓口を1つに集約します。',
      },
      {
        q: '原状回復の工事範囲はどこまでが対象ですか？',
        a: '賃貸借契約書の原状回復特約の内容と物件の状況によって異なります。国土交通省の原状回復ガイドラインも参照しながら、契約上の義務範囲を現地調査の上お伝えします。',
      },
    ],
  },
]

export default function RestorationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '原状回復工事',
    alternateName: ['店舗 原状回復', 'テナント 原状回復', '原状回復工事 東京'],
    provider: {
      '@type': 'LocalBusiness',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
      telephone: '080-4724-0713',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'JP',
        addressRegion: '東京都',
      },
    },
    description:
      '退去立会い代行・解体・クロス補修・床復旧・設備復旧まで一括対応。複数店舗の退去スケジュール一元管理と費用の適正化サポートを提供。',
    areaServed: ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県'],
    serviceType: '原状回復工事',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: restorationFaq.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp/' },
      { '@type': 'ListItem', position: 2, name: 'サービス', item: 'https://harima-shouji.co.jp/service' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '原状回復工事',
        item: 'https://harima-shouji.co.jp/service/restoration',
      },
    ],
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        label="RESTORATION"
        title="原状回復工事"
        subtitle="テナント退去から内装復旧まで。費用の適正化・複数店舗の退去スケジュールを一元管理します。"
        image="/LINE_ALBUM_2026.6.10_260610_19.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'サービス', href: '/service' },
          { label: '原状回復工事', href: '/service/restoration' },
        ]}
      />

      {/* What — 原状回復工事とは */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}
            className="grid-cols-1 lg:grid-cols-2"
          >
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_18.jpg"
                alt="店舗原状回復工事の施工例"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 700,
                  letterSpacing: '0.32em',
                  color: '#9CA3AF',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                WHAT IS RESTORATION
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '1.75rem',
                }}
              >
                店舗・テナントの<br />
                原状回復工事とは
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2, marginBottom: '1.5rem' }}>
                原状回復工事とは、賃貸借契約終了時に借主が物件を入居前の状態に戻す工事のことです。店舗・テナントの場合は住宅と異なり、造作物の撤去・内装の解体・設備の復旧まで幅広い工事が対象になることがあります。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>
                播磨商事では退去立会いの代行から、クロス補修・床復旧・設備復旧・解体撤去まで一括で対応します。契約書と国土交通省の原状回復ガイドラインに基づき、適正な工事範囲と費用を明示します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems — 退去時に起きやすい課題 */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            COMMON CHALLENGES
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            退去時に起きやすい課題
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, marginBottom: '4rem', maxWidth: '640px' }}>
            店舗・テナントの退去では、住宅とは異なる複雑な問題が生じやすくなります。
          </p>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            {[
              {
                num: '01',
                title: '費用の不透明さ・管理会社との交渉',
                body: '管理会社や指定業者からの見積りが相場より高いケースがあります。独自の見積りを取ることで費用の妥当性を確認し、交渉をサポートします。',
              },
              {
                num: '02',
                title: '複数店舗の退去が重なる',
                body: '多店舗展開企業やFC本部では、複数拠点の退去が同時期に集中することがあります。各物件の工事・立会い・スケジュールを1社で一括管理します。',
              },
              {
                num: '03',
                title: '工期が短い・夜間対応が必要',
                body: '退去期限が迫っている場合や、営業中の近隣店舗への配慮から夜間・休日施工が求められるケースにも柔軟に対応します。',
              },
              {
                num: '04',
                title: '原状回復範囲の解釈トラブル',
                body: '契約書の原状回復特約の範囲と、管理会社の要求が食い違うトラブルが起きやすい領域です。契約書とガイドラインに基づいた適正範囲を明確にします。',
              },
            ].map((item) => (
              <div key={item.num} style={{ background: '#FFFFFF', padding: '3rem 2.5rem' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#F0EFEC',
                    letterSpacing: '-0.05em',
                    marginBottom: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.85 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope — 対応工事の範囲 */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            WORK SCOPE
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '4rem',
            }}
          >
            対応工事の範囲
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: '01',
                title: 'クロス補修・張替え',
                body: '壁紙（クロス）の汚れ・剥がれ・穴などを補修し、必要に応じて全面張替えを行います。契約書の原状回復条件に合わせた対応です。',
              },
              {
                label: '02',
                title: '床材補修・復旧',
                body: 'フローリング・タイル・カーペットなど床材の傷・汚れの補修および復旧。部分補修から全面張替えまで対応します。',
              },
              {
                label: '03',
                title: '設備復旧',
                body: '電気設備・空調・給排水など設備の復旧工事に対応します。入居時の状態への回復を基本として、適正な工事範囲をご提案します。',
              },
              {
                label: '04',
                title: '解体・撤去工事',
                body: '造作物・間仕切り・什器・看板などの解体と撤去を行います。廃材の分別・適切な廃棄処理も含みます。',
              },
              {
                label: '05',
                title: '清掃・ハウスクリーニング',
                body: '工事完了後の清掃・ハウスクリーニングにも対応します。引き渡し前の状態に仕上げて完了します。',
              },
              {
                label: '06',
                title: '退去立会い代行',
                body: '管理会社・オーナーとの退去立会いを代行します。費用の適正化交渉・原状回復範囲の確認もサポートします。',
              },
            ].map((item) => (
              <div key={item.label} style={{ background: '#F5F4F0', padding: '3rem 2.5rem' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#E8E6E2',
                    letterSpacing: '-0.05em',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.85 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — 多店舗展開企業・FC本部向けメリット */}
      <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            FOR MULTI-STORE / FC
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            多店舗展開企業・FC本部向け<br />
            一括管理のメリット
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 2,
              marginBottom: '4rem',
              maxWidth: '580px',
            }}
          >
            複数店舗の退去が重なる時期、担当者のリソースは限界を超えます。播磨商事に一括委託することで、管理コストを大幅に削減できます。
          </p>
          <div style={{ display: 'grid', gap: '1px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: '01',
                title: '窓口を1社に集約',
                body: '複数物件の退去対応をすべて播磨商事1社で受付。担当者の連絡先・報告先を一本化します。',
              },
              {
                num: '02',
                title: 'スケジュールの一元管理',
                body: '各店舗の退去期限・工事日程・立会い日をまとめて管理。進捗をリアルタイムで報告します。',
              },
              {
                num: '03',
                title: '費用の適正化',
                body: '管理会社・指定業者の見積りに対して独自見積りを提示。過剰請求の防止と費用削減をサポートします。',
              },
              {
                num: '04',
                title: '全国エリア対応',
                body: '関東・東海・近畿の7都府県に対応。多店舗展開エリアをカバーし、エリアをまたいだ退去管理も可能です。',
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  padding: '2.5rem 2rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.2)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.85 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow — 依頼の流れ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            FLOW
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '4rem',
            }}
          >
            依頼の流れ
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
            {[
              {
                step: '01',
                title: 'お問い合わせ・物件情報共有',
                body: '退去物件の住所・退去期限・賃貸借契約書の内容をお知らせください。複数店舗の場合はまとめてご共有いただけます。',
              },
              {
                step: '02',
                title: '現地調査・見積り（無料）',
                body: '現地を確認した上で原状回復の工事範囲と費用を算出します。現地調査・見積りは無料です。管理会社の見積りと比較検討も可能です。',
              },
              {
                step: '03',
                title: '退去立会い・工事スケジュール確定',
                body: '管理会社・オーナーとの退去立会いを代行します。費用交渉のサポートも行い、工事スケジュールを確定します。',
              },
              {
                step: '04',
                title: '原状回復工事・完了報告',
                body: '確定した工事範囲で解体・補修・復旧を実施します。進捗を随時報告し、工事完了後は完了報告書を提出・鍵の返却をサポートします。',
              },
            ].map((item, i, arr) => (
              <li
                key={item.step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '4rem 1px 1fr',
                  gap: '0 2rem',
                  paddingBottom: i < arr.length - 1 ? '3rem' : 0,
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#9CA3AF',
                    letterSpacing: '0.1em',
                    paddingTop: '0.25rem',
                    textAlign: 'right',
                  }}
                >
                  {item.step}
                </div>
                <div style={{ position: 'relative', width: '1px', background: '#E5E3DF' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.25rem',
                      left: '-3px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#0A0A0A',
                    }}
                  />
                </div>
                <div style={{ paddingBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.85 }}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            GALLERY
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            施工事例
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, marginBottom: '3rem' }}>
            <Link
              href="/works"
              style={{ color: '#0A0A0A', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              施工事例一覧はこちら
            </Link>
          </p>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-2 lg:grid-cols-4">
            {[
              '/LINE_ALBUM_2026.6.10_260610_18.jpg',
              '/LINE_ALBUM_2026.6.10_260610_19.jpg',
              '/LINE_ALBUM_2026.6.10_260610_21.jpg',
              '/LINE_ALBUM_2026.6.10_260610_14.jpg',
            ].map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                <Image
                  src={src}
                  alt={`原状回復工事 施工事例 ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '3rem',
            }}
          >
            よくある質問
          </h2>
          <FaqAccordion faqs={restorationFaq} />
        </div>
      </section>

      {/* Related Links */}
      <section style={{ background: '#F5F4F0', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              fontSize: '0.5625rem',
              fontWeight: 700,
              letterSpacing: '0.32em',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            SEE ALSO
          </div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: '店舗内装工事', href: '/service/shop-interior', note: '新規出店・改装・夜間施工' },
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ本部の施工管理' },
              { label: 'ジム内装工事', href: '/industry/gym-interior', note: 'フィットネス・パーソナルジム' },
              { label: 'サロン内装工事', href: '/industry/salon-interior', note: '美容室・エステ・ネイル' },
              { label: '施工実績', href: '/works', note: '原状回復・内装・改装の実績' },
              { label: 'お問い合わせ', href: '/contact', note: '現地調査・見積りは無料' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}
              >
                <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading={'店舗・テナントの原状回復工事\nご相談ください'}
        subtext="退去立会い代行・費用の適正化・複数店舗の一括管理に対応します。現地調査・見積りは無料です。"
        primaryLabel="無料相談・お問い合わせ"
        primaryHref="/contact"
      />
    </div>
  )
}
