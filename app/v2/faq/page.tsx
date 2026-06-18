import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../_components/PageHero'
import FaqAccordion from './_components/FaqAccordion'

export const metadata: Metadata = {
  title: 'よくある質問',
  description: '店舗内装工事・原状回復工事に関するよくある質問。対応エリア・費用・工期・退去立会いについてご確認いただけます。',
}

const faqs = [
  {
    category: 'サービスについて',
    items: [
      {
        q: '対応しているサービスを教えてください。',
        a: '店舗内装工事と原状回復工事の2つを主なサービスとして提供しています。新規出店・改装・リノベーションから、退去立会い・解体・内装復旧まで一括してお任せいただけます。',
      },
      {
        q: '複数店舗をまとめて依頼できますか？',
        a: 'はい、対応しています。複数店舗の同時施工・工程管理はむしろ得意としているところです。担当者様の窓口を一本化し、まとめてご相談いただけます。',
      },
      {
        q: '1店舗だけでも依頼できますか？',
        a: 'もちろんです。1店舗の小規模案件から多店舗の大型案件まで柔軟に対応しています。',
      },
    ],
  },
  {
    category: '対応エリア・工期',
    items: [
      {
        q: '対応エリアを教えてください。',
        a: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県の7都府県に対応しています。上記エリア外のご相談もお気軽にお問い合わせください。',
      },
      {
        q: '夜間施工・短工期に対応していますか？',
        a: '対応しています。翌朝完了が必要な急ぎ案件や、閉店後の夜間施工もご相談ください。スケジュールによっては対応できない場合もありますので、早めのご相談をおすすめします。',
      },
      {
        q: '工事にかかる期間はどれくらいですか？',
        a: '工事内容・規模によって異なります。クロス張替え等の小規模な補修は1〜2日、店舗全体の改装は1〜2週間が目安です。現地調査後に具体的な工期をご提案します。',
      },
    ],
  },
  {
    category: 'お見積り・費用',
    items: [
      {
        q: '現地調査・見積りは無料ですか？',
        a: 'はい、無料です。まずはお気軽にお問い合わせください。',
      },
      {
        q: '費用の目安を教えてください。',
        a: '工事内容・規模・エリア・工期によって異なるため、一律のご案内が難しい状況です。現地調査後に詳細なお見積りを無料でご提出します。',
      },
      {
        q: '見積り後にキャンセルできますか？',
        a: 'はい、見積り後のキャンセルは可能です。お見積り・現地調査の費用は一切かかりません。',
      },
    ],
  },
  {
    category: '原状回復について',
    items: [
      {
        q: '退去立会いの代行も依頼できますか？',
        a: 'はい、対応しています。オーナー・管理会社との退去立会いを代行し、過剰な原状回復費用の請求の適正化もサポートします。',
      },
      {
        q: '退去工事と立会いをセットで依頼できますか？',
        a: 'はい、立会い代行から解体・内装復旧・クリーニングまで一括してお任せいただけます。まとめてご依頼いただくことでコスト削減にもつながります。',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>

      <PageHero
        label="FAQ"
        title="よくある質問"
        image="/LINE_ALBUM_2026.6.10_260610_8.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/v2' },
          { label: 'FAQ', href: '/v2/faq' },
        ]}
      />

      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#F5F4F0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, marginBottom: '2rem' }}>
            こちらに記載のない内容は、お気軽にお問い合わせください。
          </p>
          <Link
            href="/v2/contact"
            style={{ display: 'inline-block', padding: '1rem 3rem', background: '#0A0A0A', color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}
          >
            お問い合わせ
          </Link>
        </div>
      </section>

    </div>
  )
}
