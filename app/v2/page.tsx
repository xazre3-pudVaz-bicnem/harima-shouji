import type { Metadata } from 'next'
import Loading from './_components/sections/Loading'
import Hero from './_components/sections/Hero'
import Service from './_components/sections/Service'
import WhyHarima from './_components/sections/WhyHarima'
import Area from './_components/sections/Area'
import Flow from './_components/sections/Flow'
import Message from './_components/sections/Message'
import Contact from './_components/sections/Contact'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'フランチャイズ本部・多店舗展開企業の施工パートナー',
  description:
    'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。東京・関東圏を中心に7都府県対応。',
  alternates: { canonical: 'https://harima-shouji.co.jp/v2' },
}

export default function V2HomePage() {
  return (
    <>
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
