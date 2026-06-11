import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import FAQSection from '@/components/sections/FAQSection'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { faqItems } from '@/data/faq'

export const metadata: Metadata = {
  title: 'よくある質問 | 店舗内装工事・原状回復・クロス張替え',
  description:
    '株式会社播磨商事のよくある質問。フランチャイズ本部向け内装工事・原状回復・クロス張替え・退去立会いサポートについてのよくあるご質問をまとめています。',
  alternates: { canonical: 'https://harima-shouji.co.jp/faq' },
}

export default function FAQPage() {
  const structured = [
    faqSchema(faqItems),
    breadcrumbSchema([{ name: 'よくある質問', url: '/faq' }]),
  ]

  return (
    <>
      {structured.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-14">
          <Breadcrumb items={[{ label: 'よくある質問' }]} />
          <div className="mt-4">
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">FAQ</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5">よくある質問</h1>
            <p className="text-gray-300 text-base leading-relaxed">
              フランチャイズ本部様・多店舗展開企業様からよくいただくご質問をまとめました。
              解決しない場合はお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      <FAQSection limit={faqItems.length} />

      <CTABanner title="その他のご質問はお気軽にどうぞ" description="解決しないご質問は直接お問い合わせください。担当者が丁寧にご回答します。" />
    </>
  )
}
