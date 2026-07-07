import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: 'FC本部・フランチャイズ店舗内装工事',
  description: 'フランチャイズ・チェーン店の内装工事・原状回復を一括管理。FC本部の施工品質統一・窓口一本化・コスト管理を支援。関東・東海・近畿 7都府県対応。',
  keywords: [
    'FC本部 内装工事',
    'フランチャイズ 内装工事',
    'フランチャイズ 店舗工事',
    '多店舗 内装工事',
    'チェーン店 内装工事',
    'フランチャイズ 施工管理',
    'FC本部 原状回復',
    'フランチャイズ 出店工事',
  ],
  alternates: { canonical: 'https://harima-shouji.co.jp/franchise' },
  openGraph: {
    title: 'FC本部・フランチャイズ店舗内装工事 | 株式会社播磨商事',
    description: 'フランチャイズ・チェーン店の内装工事・原状回復を一括管理。FC本部の施工品質統一・窓口一本化・コスト管理を支援。',
    url: 'https://harima-shouji.co.jp/franchise',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const faqItems = [
  {
    q: 'フランチャイズ本部として、複数の加盟店の内装工事を一括で依頼できますか？',
    a: 'はい、可能です。FC本部様向けに施工管理の一括対応を行っています。加盟店ごとに異なる施工業者を使う必要がなく、本部仕様書に基づいた統一品質で全店に対応します。出店・改装・退店まで一社で完結します。',
  },
  {
    q: '店舗ごとに仕上がりのばらつきを防ぐことはできますか？',
    a: 'はい。本部様から仕様書・施工マニュアルをご提供いただき、すべての加盟店で同一基準の施工を実施します。写真・チェックリスト付きの完了報告書を提出するため、本部担当者様がリモートで品質確認いただけます。',
  },
  {
    q: '対応エリアはどこですか？',
    a: '東京都・神奈川県・埼玉県・千葉県・静岡県・大阪府・兵庫県に対応しています。関東を中心としたFC展開から、東海・近畿エリアへの広域展開まで、1社で対応可能です。',
  },
  {
    q: '退去時の原状回復も対応してもらえますか？',
    a: 'はい、対応しています。退去立会い代行・解体・クロス補修・床復旧・設備復旧まで一括で承ります。複数店舗の退去スケジュールの一元管理も可能なため、担当者様の管理工数を大幅に削減できます。',
  },
  {
    q: 'まずは相談だけでも受け付けてもらえますか？',
    a: 'もちろんです。現在の施工管理体制の課題をお聞きし、対応できる範囲をご提案します。加盟店数・対応エリア・出退店頻度などを教えていただければ、具体的なご提案が可能です。お電話・フォームどちらからでもお気軽にご連絡ください。',
  },
]

export default function FranchisePage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'FC本部向け内装工事・施工管理サービス',
    provider: {
      '@type': 'LocalBusiness',
      name: '株式会社播磨商事',
      url: 'https://harima-shouji.co.jp',
    },
    description:
      'フランチャイズ・チェーン店舗の内装工事・原状回復工事を一括管理。FC本部の施工品質統一・窓口一本化・コスト管理を支援します。',
    areaServed: '東京都・神奈川県・埼玉県・千葉県・静岡県・大阪府・兵庫県',
    serviceType: ['店舗内装工事', '原状回復工事', 'フランチャイズ施工管理'],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOP', item: 'https://harima-shouji.co.jp/' },
      { '@type': 'ListItem', position: 2, name: 'FC本部向けサービス', item: 'https://harima-shouji.co.jp/franchise' },
    ],
  }

  return (
    <div style={{ background: '#FAFAF8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. Hero */}
      <PageHero
        label="FRANCHISE"
        title={`フランチャイズ・チェーン店の\n内装工事を一本化`}
        subtitle="FC本部の施工管理負担を解消。加盟店の出店・改装・退店を、1社・1窓口・統一品質で対応します。"
        image="/fc-01.png"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'FC本部向けサービス', href: '/franchise' },
        ]}
      />

      {/* 2. Problem — FC本部が抱える課題 */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            THE PROBLEM
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1rem' }}>
            FC本部が抱える課題
          </h2>
          <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, marginBottom: '4rem', maxWidth: '560px' }}>
            店舗数が増えるほど、施工管理の複雑さは増します。担当者1人に集中する負担が、拡大の足を引っ張ります。
          </p>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            {[
              {
                number: '01',
                title: '店舗ごとに施工品質がばらつく',
                body: '加盟店が独自に施工業者を選ぶと、同じ仕様書でも仕上がりに差が生まれます。ブランドの均一性が損なわれ、顧客体験にまで影響します。',
              },
              {
                number: '02',
                title: '業者・工程管理が担当者の負担になっている',
                body: '出店のたびに施工業者の選定・見積り確認・工程調整が発生。店舗数が増えるほど、担当者1人では回せなくなります。',
              },
              {
                number: '03',
                title: 'ブランド仕様が現場に伝わらない',
                body: '仕様書を渡しても解釈がバラバラ。現場で確認・是正を繰り返すうちに、工期とコストが膨らんでいきます。',
              },
              {
                number: '04',
                title: '退去時の原状回復費用が不透明',
                body: 'オーナーから高額請求が来ても、内容の妥当性を判断できない。複数店舗の退去が重なると、対応が追いつかなくなります。',
              },
            ].map((item) => (
              <div key={item.number} style={{ background: '#F5F4F0', padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1.5rem',
                    fontSize: '5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: 'rgba(0,0,0,0.04)',
                    userSelect: 'none',
                  }}
                >
                  {item.number}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem', letterSpacing: '-0.02em', position: 'relative' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.9, position: 'relative' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What we can do — 播磨商事ができること */}
      <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            WHAT WE DO
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1rem' }}>
            播磨商事ができること
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2, marginBottom: '5rem', maxWidth: '560px' }}>
            内装工事と原状回復を一社でまとめて対応。FC本部の施工管理を仕組みとして引き受けます。
          </p>

          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 lg:grid-cols-2">
            {/* Shop interior */}
            <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
              <Image
                src="/fc-03.png"
                alt="フランチャイズ店舗の内装工事イメージ"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  INTERIOR WORKS
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  店舗内装工事
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  新規出店・改装・リノベーション。本部仕様書に基づいた統一施工を実施。夜間工事・複数店舗同時進行に対応します。
                </p>
                <Link
                  href="/service/shop-interior"
                  style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '2px' }}
                >
                  サービス詳細
                </Link>
              </div>
            </div>

            {/* Restoration */}
            <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
              <Image
                src="/resto-02.png"
                alt="フランチャイズ店舗の原状回復工事のイメージ"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  RESTORATION
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  原状回復工事
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  退去立会い代行・解体・クロス補修・床復旧・設備復旧まで一括対応。複数店舗の退去スケジュールを一元管理します。
                </p>
                <Link
                  href="/service/restoration"
                  style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#FFFFFF', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '2px' }}
                >
                  サービス詳細
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature cards */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            FEATURES
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            選ばれる4つの理由
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: '施工品質の統一',
                body: '本部仕様書を現場に徹底。写真・チェックリスト付きの完了報告書で、リモートからでも品質確認できます。',
              },
              {
                number: '02',
                title: '窓口を1つに集約',
                body: '出店・改装・退店のすべてを1社が担当。業者探し・見積り・調整の手間がゼロになります。',
              },
              {
                number: '03',
                title: '夜間・短工期施工',
                body: '営業終了後の夜間施工に対応。複数店舗の同時進行も可能で、FC展開のスピードを落としません。',
              },
              {
                number: '04',
                title: '退去・原状回復まで',
                body: '退去立会い代行から解体・復旧まで一括管理。不透明な費用請求の適正化もサポートします。',
              },
            ].map((item) => (
              <div key={item.number} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
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
                    color: '#F5F4F0',
                    userSelect: 'none',
                  }}
                >
                  {item.number}
                </div>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2rem',
                      height: '2rem',
                      background: '#0A0A0A',
                      marginBottom: '2rem',
                    }}
                  >
                    <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>{item.number}</span>
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', marginBottom: '0.75rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.9 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Works link + internal links */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                WORKS
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                フランチャイズ・<br />チェーン店の施工事例
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, marginBottom: '2.5rem' }}>
                飲食・小売・サービス業など、業種を問わず対応実績があります。本部仕様書に基づいた統一施工の事例をご覧ください。
              </p>
              <Link
                href="/works"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2.5rem',
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                施工事例を見る
              </Link>
            </div>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image
                src="/fc-05.png"
                alt="フランチャイズ店舗の内装施工イメージ"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            HOW IT WORKS
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            ご依頼の流れ
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '01', title: 'お問い合わせ', note: '加盟店数・対応エリア・出退店頻度をお聞かせください。現状の課題もお気軽にご相談ください。' },
              { number: '02', title: '管理体制のご提案', note: '現状に合わせた施工管理の仕組みをご提案。窓口の一本化フローをすり合わせます。' },
              { number: '03', title: '施工・管理の開始', note: '仕様書に基づき施工を実施。進捗・完了報告を本部担当者様へ共有します。' },
              { number: '04', title: '継続サポート', note: '出店・改装・退店のいずれも継続対応。FC拡大フェーズに合わせて体制を柔軟に調整します。' },
            ].map((step) => (
              <div key={step.number} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
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
                    color: '#F5F4F0',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2rem',
                      height: '2rem',
                      background: '#0A0A0A',
                      marginBottom: '2rem',
                    }}
                  >
                    <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em' }}>{step.number}</span>
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.015em', marginBottom: '0.75rem' }}>{step.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.9 }}>{step.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section style={{ background: '#0D1117', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            よくあるご質問
          </h2>
          <div>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ flexShrink: 0, fontSize: '0.625rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', paddingTop: '0.2rem', minWidth: '1.25rem' }}>Q</span>
                  <p style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.6, letterSpacing: '-0.01em' }}>{item.q}</p>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, fontSize: '0.625rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', paddingTop: '0.2rem', minWidth: '1.25rem' }}>A</span>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>{item.a}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ background: '#FFFFFF', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: '店舗内装工事', href: '/service/shop-interior', note: 'フランチャイズ出店・改装' },
              { label: '原状回復工事', href: '/service/restoration', note: '退去立会い・解体・復旧' },
              { label: '施工事例', href: '/works', note: 'チェーン店・多店舗実績' },
              { label: 'お問い合わせ', href: '/contact', note: 'まずはご相談ください' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ display: 'block', padding: '2rem', background: '#F5F4F0', textDecoration: 'none' }}
              >
                <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CtaSection
        heading={`FC本部の施工管理について\nご相談ください`}
        subtext="加盟店数・対応エリア・課題をお聞かせください。最適な管理体制をご提案します。"
        primaryLabel="無料相談する"
        primaryHref="/contact"
      />
    </div>
  )
}
