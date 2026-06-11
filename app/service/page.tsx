import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import ServiceLink from '@/components/ui/ServiceLink'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'サービス一覧 | 店舗内装工事・原状回復・クロス張替え',
  description:
    '株式会社播磨商事のサービス一覧。フランチャイズ本部向け内装工事・店舗内装工事・クロス張替え・店舗クリーニング・原状回復・退去立会いサポートなど、店舗に関わる工事をワンストップで提供します。',
  alternates: { canonical: 'https://harima-shouji.co.jp/service' },
  openGraph: {
    title: 'サービス一覧 | 株式会社播磨商事',
    url: 'https://harima-shouji.co.jp/service',
  },
}

const mainServices = [
  {
    id: 'franchise-interior',
    title: 'フランチャイズ本部向け内装工事',
    href: '/service/franchise-interior',
    description:
      'フランチャイズ本部様の施工パートナーとして、加盟店の新規出店・改装・原状回復を一括管理。複数店舗を横断した工程管理と施工品質の統一をサポートします。',
    features: ['加盟店ごとの施工品質統一', '複数店舗の同時進行対応', '本部担当者との一元管理', '夜間・短工期対応'],
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    label: 'FC・多店舗',
  },
  {
    id: 'shop-interior',
    title: '店舗内装工事',
    href: '/service/shop-interior',
    description:
      '新規出店・既存店舗の改装・部分リノベーションまで対応。内装全般（クロス・床・天井）から設備・厨房まわりまで、一括してお任せいただけます。',
    features: ['新規出店・改装・リノベーション', '内装全般の施工', '設備・厨房まわり', '小規模から大型店舗まで'],
    image: '/LINE_ALBUM_2026.6.10_260610_4.jpg',
    label: '内装工事',
  },
  {
    id: 'restoration',
    title: '原状回復工事',
    href: '/service/restoration',
    description:
      '退去時の原状回復工事を迅速・適正に対応。オーナー・管理会社との調整サポート、解体・内装復旧まで一括してお任せいただけます。',
    features: ['退去立会い・原状確認', '解体・撤去工事', 'オーナーとの調整サポート', '複数店舗の退去スケジュール管理'],
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    label: '原状回復',
  },
  {
    id: 'cross-wallpaper',
    title: 'クロス張替え工事',
    href: '/service/cross-wallpaper',
    description:
      '店舗の壁紙・クロスの張替えに特化。部分補修から全面張替えまで、短工期・夜間施工にも対応し、営業への影響を最小限に抑えます。',
    features: ['部分補修から全面張替え', '短工期・夜間施工対応', '複数店舗の一括手配', '豊富な素材選択'],
    image: '/LINE_ALBUM_2026.6.10_260610_14.jpg',
    label: 'クロス張替え',
  },
  {
    id: 'cleaning',
    title: '店舗クリーニング',
    href: '/service/cleaning',
    description:
      '退去時・開業前・改装後の専門クリーニング。厨房・ダクト・エアコンの専門クリーニングにも対応し、原状回復工事との同時対応でコストを削減します。',
    features: ['退去・引き渡し前クリーニング', '厨房・ダクト専門クリーニング', '原状回復工事との同時対応', '複数店舗の一括手配'],
    image: '/LINE_ALBUM_2026.6.10_260610_12.jpg',
    label: 'クリーニング',
  },
  {
    id: 'exit-support',
    title: '退去立会いサポート',
    href: '/service/exit-support',
    description:
      '退去立会い代行・オーナーとの交渉サポートで、過剰な原状回復費用を適正化。退去後の工事もそのまま一括してご依頼いただけます。',
    features: ['退去立会い代行', 'オーナーとの交渉サポート', '原状回復費用の適正化', '退去工事も一括対応'],
    image: '/LINE_ALBUM_2026.6.10_260610_24.jpg',
    label: '退去立会い',
  },
]

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }])) }}
      />

      {/* Page Header */}
      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-16 md:py-20">
          <Breadcrumb items={[{ label: 'サービス一覧' }]} />
          <div className="mt-5">
            <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">SERVICES</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">サービス一覧</h1>
            <p className="text-gray-400 text-base leading-relaxed">
              店舗内装工事から原状回復・クリーニング・退去立会いまで、
              店舗に関わる工事をワンストップでご提供します。
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`relative group/card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Invisible stretched link — makes entire card area clickable */}
                <Link
                  href={service.href}
                  className="absolute inset-0 z-[1]"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Photo */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="block relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gray-900/10 group-hover/card:bg-gray-900/25 transition-colors duration-500" />
                    <div className="absolute top-5 left-5">
                      <span className="text-xs font-semibold text-white bg-gray-900/60 backdrop-blur-sm px-3 py-1 tracking-wide">
                        {service.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="text-xs font-bold text-gray-300 tracking-[0.2em] mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed mb-7">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-600 bg-gray-50 border border-gray-100 px-4 py-2 tracking-wide"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ServiceLink href={service.href} className="relative z-[2]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
