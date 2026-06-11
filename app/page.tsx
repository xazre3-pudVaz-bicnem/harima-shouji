import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import WorkScope from '@/components/sections/WorkScope'
import WhyFCSection from '@/components/sections/WhyFCSection'
import StatsStrip from '@/components/sections/StatsStrip'
import AreaSection from '@/components/sections/AreaSection'
import Process from '@/components/sections/Process'
import ContactSection from '@/components/sections/ContactSection'
import { organizationSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'
import { faqItems } from '@/data/faq'

export const metadata: Metadata = {
  title: 'フランチャイズ・多店舗向け内装工事 | 株式会社播磨商事',
  description:
    'FC本部・多店舗展開企業の内装工事をまとめてお任せください。クロス張替え・原状回復・店舗クリーニング・退去立会いまで一括対応。東京・関東圏で複数店舗の施工管理を一元化。現地調査・見積無料。',
  alternates: { canonical: 'https://harima-shouji.co.jp' },
  openGraph: {
    title: 'フランチャイズ・多店舗向け内装工事 | 株式会社播磨商事',
    description: 'FC本部・多店舗展開企業の内装工事をまとめてお任せください。クロス張替え・原状回復・店舗クリーニング・退去立会いまで一括対応。',
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
      <StatsStrip />
      <Problems />
      <ServicesShowcase />
      <WorkScope />
      <WhyFCSection />
      <AreaSection />
      <Process />
      <ContactSection />
    </>
  )
}
