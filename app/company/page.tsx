import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '会社概要 | 株式会社播磨商事',
  description:
    '株式会社播磨商事の会社概要・代表挨拶。FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事を専門とする施工パートナー。東京都練馬区。代表：播磨龍樹。',
  alternates: { canonical: 'https://harima-shouji.co.jp/company' },
}

const companyData = [
  { label: '会社名', value: '株式会社播磨商事' },
  { label: '代表者', value: '播磨 龍樹' },
  { label: '所在地', value: '東京都練馬区関町南2丁目2-4 山一ビル' },
  { label: '電話番号', value: '080-4724-0713' },
  { label: 'メール', value: 'naisou@harima-shouji.co.jp' },
  { label: '事業内容', value: '店舗内装工事・原状回復工事' },
  { label: '対応エリア', value: '東京都・埼玉県・千葉県・神奈川県・静岡県・大阪府・兵庫県' },
]

const strengths = [
  {
    title: 'ワンストップ対応',
    description: '内装工事・原状回復を一社でまとめて対応。発注先を一本化することで、管理コストの削減と施工品質の統一を実現します。',
  },
  {
    title: '法人向けコミュニケーション',
    description: '複数店舗を抱える担当者様が管理しやすい体制を整えています。工程表の共有・定期的な進捗報告で、個別確認の手間を削減します。',
  },
  {
    title: 'スピードと品質の両立',
    description: '夜間・短工期・急ぎ案件にも対応。FC加盟店の新規出店・退去対応では、スケジュール管理を最優先にしています。',
  },
  {
    title: '適正な費用提案',
    description: '過剰な原状回復費用の適正化サポートや、コストを抑えた見積提案で、担当者様の負担を軽減します。',
  },
]

export default function CompanyPage() {
  const structured = [
    organizationSchema,
    localBusinessSchema,
    breadcrumbSchema([{ name: '会社概要', url: '/company' }]),
  ]

  return (
    <>
      {structured.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* Page Header */}
      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-16 md:py-20">
          <Breadcrumb items={[{ label: '会社概要' }]} />
          <div className="mt-5">
            <div className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">COMPANY</div>
            <h1
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              会社概要
            </h1>
          </div>
        </div>
      </div>

      {/* Company Philosophy + CEO */}
      <section className="bg-white" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-label mb-10">PHILOSOPHY</div>
            <blockquote className="mb-14">
              <p
                className="font-bold text-gray-900 leading-relaxed"
                style={{
                  fontSize: 'clamp(1.5rem, 2.6vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.65',
                }}
              >
                フランチャイズ本部・多店舗展開企業の担当者様が、
                施工管理に時間をとられることなく
                店舗運営に集中できる環境をつくること。
                それが私たちの使命です。
              </p>
            </blockquote>

            <div className="flex items-center gap-5 pt-8 border-t border-gray-100">
              <div className="relative w-14 h-14 overflow-hidden bg-gray-100 shrink-0 rounded-full">
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                  alt="代表取締役 播磨龍樹"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div
                  className="font-bold tracking-[0.22em] uppercase mb-1"
                  style={{ fontSize: '0.6rem', color: '#9ca3af' }}
                >
                  Representative Director
                </div>
                <div
                  className="font-bold text-gray-900"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
                >
                  播磨 龍樹
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="mb-14">
            <div className="section-label mb-4">STRENGTHS</div>
            <h2 className="section-title mb-5">播磨商事の強み</h2>
            <p className="body-text">
              FC本部・多店舗運営企業の担当者様が、本当に求めていることを理解した対応をご提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {strengths.map((item, index) => (
              <div key={item.title} className="group relative bg-white p-10 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="font-bold text-gray-100 mb-5 transition-colors duration-300 group-hover:text-amber-50"
                  style={{ fontSize: '3.5rem', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="section-padding bg-gray-950">
        <div className="container">
          <div className="max-w-5xl">
            <div className="section-label-light mb-4">COMPANY INFO</div>
            <h2 className="section-title-light mb-12">会社概要</h2>
            <div className="divide-y divide-gray-800/50">
              {companyData.map((row) => (
                <div key={row.label} className="py-7 sm:flex sm:gap-10">
                  <dt className="text-sm font-semibold text-gray-500 tracking-[0.1em] w-36 shrink-0 mb-2 sm:mb-0 uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-base text-gray-300 leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-label mb-5">CONTACT</div>
          <h2 className="section-title mb-14">連絡先</h2>
          <div className="max-w-5xl border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <a
                href="tel:080-4724-0713"
                className="py-10 md:pr-12 border-b md:border-b-0 md:border-r border-gray-100 group"
              >
                <div className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase mb-4">TEL</div>
                <div className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1 tracking-tight">
                  080-4724-0713
                </div>
                <div className="text-xs text-gray-400">平日 9:00〜18:00</div>
              </a>
              <a
                href="mailto:naisou@harima-shouji.co.jp"
                className="py-10 md:px-12 border-b md:border-b-0 md:border-r border-gray-100 group"
              >
                <div className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase mb-4">EMAIL</div>
                <div className="text-base font-semibold text-gray-700 group-hover:text-amber-600 transition-colors break-all">
                  naisou@harima-shouji.co.jp
                </div>
              </a>
              <div className="py-10 md:pl-12">
                <div className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase mb-4">ADDRESS</div>
                <div className="text-base font-semibold text-gray-700">東京都練馬区関町南2丁目2-4</div>
                <div className="text-sm text-gray-400 mt-1">山一ビル</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
