import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactSection from '@/components/sections/ContactSection'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'お問い合わせ | 無料相談・見積依頼',
  description:
    '株式会社播磨商事へのお問い合わせ。店舗内装工事・原状回復・クロス張替え・退去立会いなど、現地調査・お見積りは無料です。複数店舗のまとめてのご相談も歓迎。',
  alternates: { canonical: 'https://harima-shouji.co.jp/contact' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: 'お問い合わせ', url: '/contact' }])),
        }}
      />

      {/* Page Header */}
      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-16 md:py-20">
          <Breadcrumb items={[{ label: 'お問い合わせ' }]} />
          <div className="mt-5">
            <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">CONTACT</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">お問い合わせ</h1>
            <p className="text-gray-400 text-base leading-relaxed">
              現地調査・お見積りは無料です。複数店舗のまとめてのご相談も歓迎しております。
              お気軽にご連絡ください。
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  )
}
