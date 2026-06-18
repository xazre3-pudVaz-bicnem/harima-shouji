import type { Metadata } from 'next'
import V2Shell from './_components/V2Shell'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'フランチャイズ本部・多店舗展開企業の施工パートナー | 株式会社播磨商事',
    template: '%s | 株式会社播磨商事',
  },
  description:
    'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。東京・関東圏を中心に7都府県対応。',
  keywords: ['フランチャイズ 内装工事', '店舗 内装工事', '店舗 原状回復', '多店舗 施工管理', 'FC本部 施工パートナー'],
  metadataBase: new URL('https://harima-shouji.co.jp'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社播磨商事',
  },
}

export default function V2RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <V2Shell>
      <Header />
      <main>{children}</main>
      <Footer />
    </V2Shell>
  )
}
