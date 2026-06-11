import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import ScopeSection from '@/components/sections/ScopeSection'
import ReasonsSection from '@/components/sections/ReasonsSection'
import ServiceFaqSection from '@/components/sections/ServiceFaqSection'
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '店舗クリーニング | 退去・開業前・改装後の専門清掃 | 株式会社播磨商事',
  description:
    '店舗の退去時・開業前・改装後の専門クリーニング。厨房・ダクト・エアコンの専門清掃も対応。原状回復工事との同時対応でコスト削減。複数店舗の一括手配も承ります。東京・関東圏対応。',
  keywords: ['店舗 クリーニング', '店舗 清掃', '退去 清掃', '厨房 クリーニング', '開業前 清掃'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/cleaning' },
}

const problems = [
  '退去清掃と原状回復工事を別々の業者に発注していて、工程が複雑になっている',
  '厨房・ダクト・エアコンの専門クリーニングに対応できる業者が見つからない',
  '複数店舗の開業前クリーニングを同時期に手配するのが大変',
  '引き渡しまでのスケジュールが短く、清掃業者の確保が間に合わない',
  'クリーニングの品質基準をFC本部として統一したい',
]

const reasons = [
  { title: '退去・開業前・改装後すべてに対応', description: '退去時の引き渡し前クリーニング、新規出店前の開業前清掃、改装後の清掃まで、あらゆる場面に対応します。' },
  { title: '厨房・ダクト専門クリーニング', description: '厨房機器の専門クリーニング、排気ダクトの清掃、エアコンの専門洗浄まで、専門知識を持ったスタッフが対応します。' },
  { title: '原状回復工事との同時対応', description: 'クロス張替え・床復旧などの原状回復工事と同時にクリーニングを実施でき、工期短縮とコスト削減を実現します。' },
  { title: '複数店舗の一括手配', description: '複数店舗のクリーニングをまとめてご依頼いただけます。スケジュール管理から品質確認まで一元管理します。' },
]

const scopeItems = [
  '退去・引き渡し前クリーニング',
  '開業前・開店準備クリーニング',
  '改装後のクリーニング',
  '厨房専門クリーニング',
  'ダクト専門クリーニング',
  'エアコン専門クリーニング',
  '床材の洗浄・ワックス',
  '壁面・窓ガラスの洗浄',
  'トイレ・水まわりの清掃',
  'グリストラップ清掃',
  '複数店舗の一括手配',
  '定期清掃の対応',
]

const faqs = [
  { q: '退去清掃と原状回復工事を同時に依頼できますか？', a: 'はい、原状回復工事（解体・クロス復旧など）とクリーニングをセットでご依頼いただけます。同時施工で工期を短縮し、費用も節約できます。' },
  { q: '厨房の専門クリーニングにも対応していますか？', a: 'はい、厨房機器の内部清掃・排気ダクトの清掃・グリストラップの清掃など、厨房の専門クリーニングに対応しています。' },
  { q: '夜間・短工期での清掃は可能ですか？', a: 'はい、営業終了後の深夜清掃や、翌朝の開店に間に合わせる短工期清掃にも対応しています。' },
  { q: '複数店舗のクリーニングをまとめて依頼できますか？', a: 'はい、複数店舗のクリーニングを一括してご依頼いただけます。各店舗のスケジュール・仕様を整理し、工程管理表を作成します。' },
  { q: 'クリーニング後の引き渡しに問題があった場合は？', a: 'クリーニング完了後に確認を行います。引き渡し後にオーナーからの指摘があった場合も、速やかに対応します。' },
]

const related = [
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の内装復旧工事' },
  { title: '退去立会いサポート', href: '/service/exit-support', description: '退去立会い代行・費用交渉' },
  { title: 'クロス張替え工事', href: '/service/cross-wallpaper', description: '壁紙・クロスの復旧' },
]

export default function CleaningPage() {
  const structured = [
    breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }, { name: '店舗クリーニング', url: '/service/cleaning' }]),
    serviceSchema('店舗クリーニング', '退去・開業前・改装後の専門クリーニング。原状回復工事との同時対応も可能。', '/service/cleaning'),
  ]
  return (
    <>
      {structured.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_12.jpg" alt="店舗クリーニング" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: '店舗クリーニング' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">CLEANING</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>店舗クリーニング</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              退去時・開業前・改装後の店舗クリーニングを専門対応。厨房・ダクトの専門清掃から複数店舗の一括手配まで承ります。
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">店舗の状態に合わせた<br />専門クリーニング</h2>
              <div className="space-y-5 text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>
                <p>店舗の退去時・開業前・改装後など、さまざまな場面でクリーニングが必要となります。播磨商事では、通常の清掃から厨房・ダクト・エアコンなどの専門クリーニングまで対応しております。</p>
                <p>原状回復工事と合わせてご依頼いただくことで、工期短縮とコスト削減が実現できます。複数店舗のクリーニングを一括手配したい場合もお気軽にご相談ください。</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="/LINE_ALBUM_2026.6.10_260610_16.jpg" alt="店舗クリーニング施工" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-[#071322]">
        <div className="container">
          <div className="mb-14"><div className="section-label-light mb-5">PROBLEMS</div><h2 className="section-title-light">こんなお悩みありませんか？</h2></div>
          <div className="divide-y divide-white/8">
            {problems.map((p, i) => (
              <div key={p} className="flex items-center gap-10 py-7 group">
                <span className="text-[11px] font-bold text-amber-500/40 tracking-[0.3em] shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-white/60 group-hover:text-white/90 transition-colors" style={{ fontSize: '1.125rem' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReasonsSection reasons={reasons} />

      <ScopeSection items={scopeItems} title="対応クリーニング内容" />

      <ServiceFaqSection faqs={faqs} />

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="section-label mb-8">RELATED SERVICES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group flex items-center justify-between border border-gray-100 p-6 hover:border-amber-200 transition-colors">
                <div><div className="text-base font-bold text-gray-900 mb-1">{r.title}</div><div className="text-sm text-gray-500">{r.description}</div></div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="店舗クリーニングのご相談はこちら" description="原状回復工事との同時依頼も承ります。まずはお気軽にご連絡ください。" />
    </>
  )
}
