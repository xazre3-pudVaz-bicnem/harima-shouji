import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/sections/LoadingScreen'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'フランチャイズ・多店舗向け内装工事 | 株式会社播磨商事',
    template: '%s | 株式会社播磨商事',
  },
  description:
    'FC本部・多店舗展開企業の内装工事をまとめてお任せください。クロス張替え・原状回復・店舗クリーニング・退去立会いまで一括対応。東京・関東圏で複数店舗の施工管理を一元化します。',
  keywords: [
    'フランチャイズ 内装工事',
    '店舗 内装工事',
    '店舗 原状回復',
    '店舗 クロス張替え',
    '店舗 クリーニング',
    '退去立会い 代行',
    '原状回復工事 東京',
    '多店舗 内装工事',
    'チェーン店 内装工事',
    'FC本部 内装工事',
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
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
