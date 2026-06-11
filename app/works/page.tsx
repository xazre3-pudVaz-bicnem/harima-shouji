import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import { breadcrumbSchema } from '@/lib/structured-data'
import WorksClient from './WorksClient'

export const metadata: Metadata = {
  title: '施工実績 | 店舗内装工事・原状回復・クロス張替えの実績',
  description:
    '株式会社播磨商事の施工実績。フランチャイズ本部様向け内装工事・原状回復・クロス張替え・店舗クリーニングなど、東京・関東圏の施工事例をご紹介します。',
  alternates: { canonical: 'https://harima-shouji.co.jp/works' },
}

export default function WorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: '施工実績', url: '/works' }])),
        }}
      />

      {/* Page Header */}
      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-16 md:py-20">
          <Breadcrumb items={[{ label: '施工実績' }]} />
          <div className="mt-5 max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">WORKS</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">施工実績</h1>
            <p className="text-gray-400 text-base leading-relaxed">
              フランチャイズ本部様・多店舗展開企業様からのご依頼を中心に、東京・関東圏の店舗工事を手がけております。
            </p>
          </div>
        </div>
      </div>

      <WorksClient />

      <CTABanner title="施工についてのご相談はこちら" description="現地調査・お見積りは無料です。お気軽にご連絡ください。" />
    </>
  )
}
