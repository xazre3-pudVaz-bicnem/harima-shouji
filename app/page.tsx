import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyFCSection from '@/components/sections/WhyFCSection'
import AreaSection from '@/components/sections/AreaSection'
import Process from '@/components/sections/Process'
import CEOMessage from '@/components/sections/CEOMessage'
import CTABanner from '@/components/sections/CTABanner'
import { organizationSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'
import { faqItems } from '@/data/faq'

export const metadata: Metadata = {
  title: 'フランチャイズ本部・多店舗展開企業の施工パートナー | 株式会社播磨商事',
  description:
    'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。東京・関東圏を中心に静岡・大阪・兵庫まで対応。現地調査・見積無料。',
  alternates: { canonical: 'https://harima-shouji.co.jp' },
  openGraph: {
    title: 'フランチャイズ本部・多店舗展開企業の施工パートナー | 株式会社播磨商事',
    description: 'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。',
    url: 'https://harima-shouji.co.jp',
  },
}

export default function HomePage() {
  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    faqSchema(faqItems.slice(0, 6)),
  ]

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyFCSection />
      <AreaSection />
      <Process />
      <CEOMessage />
      <CTABanner />
    </>
  )
}
