import type { Metadata } from 'next'
import { Noto_Sans_JP, Shippori_Mincho, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/app/v2/_components/Header'
import Footer from '@/app/v2/_components/Footer'
import JsonLd from '@/components/ui/JsonLd'
import { SITE_URL } from '@/data/company'
import { showDrafts } from '@/lib/content-status'
import { HOME_DESCRIPTION, HOME_TITLE } from '@/lib/site-copy'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const shipporiMincho = Shippori_Mincho({
  weight: ['500', '600'],
  variable: '--font-serif-jp',
  display: 'swap',
  preload: false,
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif-en',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: HOME_TITLE,
    template: '%s | 株式会社播磨商事',
  },
  description: HOME_DESCRIPTION,
  keywords: [
    '店舗内装工事',
    'サロン 内装工事',
    'ジム 内装工事',
    'ピラティス 内装工事',
    'フランチャイズ 内装工事',
    '店舗 原状回復',
    '多店舗 施工管理',
    'FC本部 施工パートナー',
    '原状回復工事 東京',
  ],
  metadataBase: new URL(SITE_URL),
  // og:image / twitter:image は app/opengraph-image.jpg・app/twitter-image.jpg（ファイル規約）で
  // 全ルートに継承させる。個別ページが openGraph.images を指定した場合はそちらが優先される。
  openGraph: {
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社播磨商事',
  },
  twitter: { card: 'summary_large_image' },
  // 下書きを表示する確認用ビルド（SHOW_DRAFTS=true）は検索エンジンに登録させない
  robots: showDrafts ? { index: false, follow: false } : { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <body className="min-h-full flex flex-col" style={{ background: 'var(--paper)' }}>
        {/* サイト共通の構造化データ（全ページ） */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
