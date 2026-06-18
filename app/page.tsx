import type { Metadata } from 'next'
import Loading from '@/app/v2/_components/sections/Loading'
import Hero from '@/app/v2/_components/sections/Hero'
import Service from '@/app/v2/_components/sections/Service'
import WhyHarima from '@/app/v2/_components/sections/WhyHarima'
import Area from '@/app/v2/_components/sections/Area'
import Flow from '@/app/v2/_components/sections/Flow'
import Message from '@/app/v2/_components/sections/Message'
import Contact from '@/app/v2/_components/sections/Contact'
import { organizationSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'
import { faqItems } from '@/data/faq'

export const metadata: Metadata = {
  title: 'フランチャイズ本部・多店舗展開企業の施工パートナー | 株式会社播磨商事',
  description:
    'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。東京・関東圏を中心に7都府県対応。',
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
      <Loading />
      <Hero />
      <Service />
      <WhyHarima />
      <Area />
      <Flow />
      <Message />
      <Contact />
    </>
  )
}
