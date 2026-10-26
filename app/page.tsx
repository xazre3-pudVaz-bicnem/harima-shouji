import type { Metadata } from 'next'
import Loading from '@/app/v2/_components/sections/Loading'
import Hero from '@/app/v2/_components/sections/Hero'
import Marquee from '@/app/v2/_components/sections/Marquee'
import Stats from '@/app/v2/_components/sections/Stats'
import Service from '@/app/v2/_components/sections/Service'
import Scope from '@/app/v2/_components/sections/Scope'
import WorksPreview from '@/app/v2/_components/sections/WorksPreview'
import WhyHarima from '@/app/v2/_components/sections/WhyHarima'
import Industries from '@/app/v2/_components/sections/Industries'
import Area from '@/app/v2/_components/sections/Area'
import Flow from '@/app/v2/_components/sections/Flow'
import Message from '@/app/v2/_components/sections/Message'
import NewsPreview from '@/app/v2/_components/sections/NewsPreview'
import Contact from '@/app/v2/_components/sections/Contact'
import { SITE_URL } from '@/data/company'
import { HOME_DESCRIPTION, HOME_TITLE } from '@/lib/site-copy'

export const metadata: Metadata = {
  // layout.tsx の title.template は同じ階層の page には適用されないため、社名まで含めて指定する
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: ['店舗内装工事', 'サロン 内装', 'エステサロン 内装', 'ネイルサロン 内装', 'パーソナルジム 内装', 'ピラティス 内装', 'FC 内装工事', '原状回復'],
  alternates: { canonical: SITE_URL },
  openGraph: {
    images: ['/og-image.jpg'],
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
  },
}

// 会社の構造化データ（GeneralContractor）は layout.tsx が全ページで出力する。
// 以前ここで出していた FAQPage は、ページに表示していない質問だったため削除した（/faq などで出力）。
export default function HomePage() {
  return (
    <>
      <Loading />
      <Hero />
      <Marquee />
      <Stats />
      <Service />
      <Scope />
      <WorksPreview />
      <WhyHarima />
      <Industries />
      <Area />
      <Flow />
      <Message />
      <NewsPreview />
      <Contact />
    </>
  )
}
