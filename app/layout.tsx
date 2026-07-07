import type { Metadata } from 'next'
import { Noto_Sans_JP, Shippori_Mincho, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/app/v2/_components/Header'
import Footer from '@/app/v2/_components/Footer'

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
    default: 'フランチャイズ本部・多店舗展開企業の施工パートナー | 株式会社播磨商事',
    template: '%s | 株式会社播磨商事',
  },
  description:
    'FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事。施工管理の負担を軽減します。東京・関東圏を中心に7都府県対応。現地調査・見積無料。',
  keywords: [
    'フランチャイズ 内装工事',
    '店舗 内装工事',
    '店舗 原状回復',
    '多店舗 施工管理',
    'FC本部 施工パートナー',
    '原状回復工事 東京',
  ],
  metadataBase: new URL('https://harima-shouji.co.jp'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社播磨商事',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '株式会社播磨商事 - フランチャイズ・多店舗向け内装工事',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <body className="min-h-full flex flex-col" style={{ background: 'var(--paper)' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
