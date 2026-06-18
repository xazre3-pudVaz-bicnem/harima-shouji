import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import ServiceLink from '@/components/ui/ServiceLink'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'サービス一覧 | 店舗内装工事・原状回復工事 | 株式会社播磨商事',
  description:
    'FC本部・多店舗展開企業向けの2つのサービス。店舗内装工事（新規出店・改装・FC仕様統一施工）と原状回復工事（退去・解体・内装復旧）を一括で対応します。',
  alternates: { canonical: 'https://harima-shouji.co.jp/service' },
  openGraph: {
    title: 'サービス一覧 | 株式会社播磨商事',
    url: 'https://harima-shouji.co.jp/service',
  },
}

const services = [
  {
    title: '店舗内装工事',
    description:
      'FC本部・多店舗展開企業の担当者様向けに、新規出店・改装・FC仕様統一施工を一括対応。工程管理・品質統一・夜間施工まで、まとめてお任せください。',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    href: '/service/shop-interior',
    label: 'INTERIOR',
    items: ['新規出店・改装・リノベーション', 'FC仕様統一施工', '複数店舗の同時進行管理', '夜間・短工期対応'],
  },
  {
    title: '原状回復工事',
    description:
      '退去後の解体・内装復旧・クロス補修・設備復旧を一括対応。複数店舗の退去スケジュール管理もお任せください。適正費用での原状回復をサポートします。',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    href: '/service/restoration',
    label: 'RESTORATION',
    items: ['退去・解体・内装復旧', 'クロス補修・床補修', '設備復旧・クリーニング', '複数店舗の退去管理'],
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
            <h1
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              2つのサービス
            </h1>
            <p className="text-gray-400 leading-relaxed" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              店舗内装工事と原状回復工事。<br className="hidden md:block" />
              播磨商事の2つの専門領域で、FC本部・多店舗企業様の施工課題をまとめて解決します。
            </p>
          </div>
        </div>
      </div>

      {/* Services — alternating layout */}
      <section className="bg-white">
        {services.map((service, index) => (
          <div key={service.title} className="divider-line">
            <div
              className={`relative group/card grid grid-cols-1 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Invisible stretched link */}
              <Link
                href={service.href}
                className="absolute inset-0 z-[1]"
                tabIndex={-1}
                aria-hidden="true"
              />

              {/* Photo */}
              <div
                className={`relative overflow-hidden bg-gray-100 ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                style={{ minHeight: '60vh' }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-8 left-8">
                  <span
                    className="font-bold tracking-[0.3em] text-amber-400/80 uppercase"
                    style={{ fontSize: '0.625rem' }}
                  >
                    {service.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 xl:px-20 xl:py-28 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="text-xs font-bold text-gray-300 tracking-[0.2em] mb-5 uppercase">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2
                  className="font-bold text-gray-900 mb-7 leading-tight"
                  style={{
                    fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-gray-500 mb-10 leading-relaxed"
                  style={{ fontSize: '1.0625rem', lineHeight: '2' }}
                >
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-12">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 bg-gray-50 border border-gray-100 px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ServiceLink href={service.href} className="relative z-[2]" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTABanner />
    </>
  )
}
