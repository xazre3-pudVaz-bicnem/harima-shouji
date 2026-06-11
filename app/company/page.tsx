import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '会社概要・代表挨拶 | 株式会社播磨商事',
  description:
    '株式会社播磨商事の会社概要・代表挨拶・スタッフ紹介。フランチャイズ本部・多店舗展開企業向けの内装工事・原状回復・クロス張替え・退去立会いサポートを提供。東京都練馬区。代表：播磨龍樹。',
  alternates: { canonical: 'https://harima-shouji.co.jp/company' },
}

const companyData = [
  { label: '会社名', value: '株式会社播磨商事' },
  { label: '代表者', value: '播磨 龍樹' },
  { label: '所在地', value: '東京都練馬区関町南2丁目2-4 山一ビル' },
  { label: '電話番号', value: '080-4724-0713' },
  { label: 'メール', value: 'naisou@harima-shouji.co.jp' },
  { label: '事業内容', value: '店舗内装工事・原状回復工事・クロス張替え・店舗クリーニング・退去立会いサポート・解体工事' },
  { label: '対応エリア', value: '東京都・神奈川県・千葉県・埼玉県・茨城県・群馬県・栃木県（関東圏）' },
]

const strengths = [
  {
    title: 'ワンストップ対応',
    description: '内装工事・原状回復・クリーニング・退去立会いまで、複数の業者に分けることなく一括でお任せいただけます。',
  },
  {
    title: '法人向けコミュニケーション',
    description: '担当者様との進捗報告・工程管理を重視。複数店舗を抱える法人様の「まとめたい」ニーズにお応えします。',
  },
  {
    title: 'スピードと品質の両立',
    description: '夜間・短工期・急ぎ案件にも柔軟に対応。スケジュールを守りながら、一定品質の施工をご提供します。',
  },
  {
    title: '適正な費用提案',
    description: '過剰な原状回復費用の適正化サポートや、コストを抑えた見積提案で、担当者様の負担を軽減します。',
  },
]

const staff = [
  {
    name: '播磨 龍樹',
    role: '代表取締役',
    image: '/LINE_ALBUM_2026.6.10_260610_1.jpg',
    comment: '法人のお客様が安心して任せられる施工パートナーを目指しています。まずはお気軽にご相談ください。',
  },
  {
    name: '現場管理スタッフ',
    role: '施工・現場管理',
    image: '/LINE_ALBUM_2026.6.10_260610_2.jpg',
    comment: '丁寧な施工と迅速な対応を心がけています。現場でお会いした際はお気軽にお声がけください。',
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">会社概要</h1>
            <p className="text-gray-400 text-base leading-relaxed">
              株式会社播磨商事は、FC本部・多店舗展開企業向けの内装工事・原状回復を専門とする施工パートナーです。
            </p>
          </div>
        </div>
      </div>

      {/* CEO Greeting */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                  alt="代表取締役 播磨龍樹"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden lg:block w-32 h-32 border border-gray-200" />
            </div>

            {/* Text */}
            <div>
              <div className="section-label mb-5">GREETING</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
                代表挨拶
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  株式会社播磨商事は、フランチャイズ本部様・多店舗展開企業様の店舗内装工事、
                  原状回復、クロス張替え、クリーニング、退去立会いなどを一括でサポートしています。
                </p>
                <p>
                  店舗運営では、スピード、品質、連絡のしやすさ、現場対応力が重要です。
                  担当者様の手間を減らし、「この会社に任せれば大丈夫」と安心していただける
                  施工パートナーを目指しています。
                </p>
                <p>
                  複数の業者に連絡を取る手間、スケジュール調整の煩雑さ、施工品質のばらつき——
                  そうした課題をまとめて解決できる体制を整えております。
                  現地調査・お見積りは無料ですので、まずはお気軽にご相談ください。
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">Representative Director</div>
                <div className="text-xl font-bold text-gray-900 tracking-wide">播磨 龍樹</div>
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
              フランチャイズ本部・多店舗運営企業の担当者様が、
              本当に求めていることを理解した対応をご提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {strengths.map((item, index) => (
              <div key={item.title} className="bg-white p-10 border border-gray-100">
                <div className="text-3xl font-bold text-gray-100 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-14">
            <div className="section-label mb-4">TEAM</div>
            <h2 className="section-title mb-5">現場を支えるスタッフ</h2>
            <p className="body-text">
              清潔感と誠実さを大切に、一現場・一現場に丁寧に向き合います。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {staff.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="text-sm text-gray-400 tracking-widest uppercase mb-1">{member.role}</div>
                <div className="text-xl font-bold text-gray-900 mb-3">{member.name}</div>
                <p className="text-base text-gray-500 leading-relaxed">{member.comment}</p>
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
          <div>
            <div className="section-label mb-4">CONTACT</div>
            <h2 className="section-title mb-10">連絡先</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
              <a
                href="tel:080-4724-0713"
                className="flex flex-col items-center gap-4 p-10 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all text-center group"
              >
                <div className="w-14 h-14 bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2 tracking-wide">電話番号</div>
                  <div className="text-base font-bold text-gray-900">080-4724-0713</div>
                </div>
              </a>
              <a
                href="mailto:naisou@harima-shouji.co.jp"
                className="flex flex-col items-center gap-4 p-10 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all text-center group"
              >
                <div className="w-14 h-14 bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2 tracking-wide">メール</div>
                  <div className="text-sm font-semibold text-gray-900 break-all">naisou@harima-shouji.co.jp</div>
                </div>
              </a>
              <div className="flex flex-col items-center gap-4 p-10 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-gray-900 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2 tracking-wide">所在地</div>
                  <div className="text-sm font-semibold text-gray-900">東京都練馬区関町南<br />2丁目2-4 山一ビル</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
