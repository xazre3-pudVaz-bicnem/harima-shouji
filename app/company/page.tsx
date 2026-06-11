import type { Metadata } from 'next'
import Image from 'next/image'
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
    description: '内装工事・原状回復・クリーニング・退去立会いまで、複数の業者に分けることなく一括でお任せいただけます。発注先を一本化することで、管理コストの削減と施工品質の統一を実現します。',
  },
  {
    title: '法人向けコミュニケーション',
    description: '担当者様との進捗報告・工程管理を重視。複数店舗を抱える法人様の「まとめたい」ニーズにお応えします。工程表の共有や定期的な進捗報告など、本部担当者様が管理しやすい体制を整えます。',
  },
  {
    title: 'スピードと品質の両立',
    description: '夜間・短工期・急ぎ案件にも柔軟に対応。スケジュールを守りながら、一定品質の施工をご提供します。特にFC加盟店の新規出店・退去対応では、スケジュール管理が重要です。',
  },
  {
    title: '適正な費用提案',
    description: '過剰な原状回復費用の適正化サポートや、コストを抑えた見積提案で、担当者様の負担を軽減します。退去立会いでのオーナー交渉サポートにより、過剰な原状回復費用の適正化も支援します。',
  },
]

const staff = [
  {
    name: '播磨 龍樹',
    role: '代表取締役',
    image: '/LINE_ALBUM_2026.6.10_260610_1.jpg',
    comment: '法人のお客様、特にフランチャイズ本部様・多店舗展開企業様に安心してお任せいただける施工パートナーを目指しています。複数店舗の管理コストを減らし、担当者様の業務負担を軽減することが私たちの役割だと考えています。内装工事から原状回復・退去立会いまで、まずはお気軽にご相談ください。',
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
              株式会社播磨商事は、FC本部・多店舗展開企業向けの内装工事・原状回復を専門とする施工パートナーです。東京・関東圏の店舗工事を一括管理し、担当者様の業務負担を軽減します。
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl">
            {staff.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-7">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="text-[10px] text-gray-400 tracking-[0.22em] uppercase mb-1.5">{member.role}</div>
                <div className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{member.name}</div>
                <div className="h-px bg-gray-100 mb-4" />
                <p className="text-sm text-gray-500 leading-relaxed" style={{ lineHeight: '2' }}>{member.comment}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-3xl">
            <p className="text-base text-gray-600 leading-relaxed">
              フランチャイズ本部様・多店舗展開企業様が抱える工事管理の課題を、ひとつの窓口でまとめて解決することが播磨商事の使命です。内装工事・原状回復・退去立会いまで、担当者様が個別対応する手間を省き、店舗ライフサイクル全体をサポートします。まずはお気軽にご相談ください。
            </p>
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
