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
  title: '店舗クロス張替え工事 | 壁紙の部分補修・全面張替え・夜間対応 | 株式会社播磨商事',
  description:
    '店舗の壁紙・クロス張替えを部分補修から全面張替えまで対応。短工期・夜間施工可能で営業への影響を最小化。複数店舗の一括手配も承ります。東京・関東圏の店舗クロス工事は株式会社播磨商事にご相談ください。',
  keywords: ['店舗 クロス張替え', '壁紙 張替え 店舗', '店舗 クロス工事', 'クロス 夜間施工', '複数店舗 クロス'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/cross-wallpaper' },
}

const problems = [
  '複数店舗のクロス張替えを個別に発注していて管理が大変',
  '夜間・営業時間外に施工できる業者が見つからない',
  '部分補修から全面張替えまで一括で依頼できる業者がいない',
  '原状回復工事とクロス張替えを別々に発注する手間が発生している',
  '店舗のクロスが汚れてきたが、営業を止めずに張替えたい',
]

const reasons = [
  { title: '夜間・短工期施工に対応', description: '深夜施工・翌朝完了が必要な案件も対応しています。閉店後の施工で翌朝オープンに間に合わせることも可能です。' },
  { title: '部分補修から全面張替えまで', description: '壁の一部だけの補修から、店舗全体のクロス全面張替えまで規模を問わず対応します。' },
  { title: '豊富な素材・カラーから選択', description: '店舗のコンセプトに合わせたクロス素材・カラーをご提案します。サンプルをご確認いただいた上でお選びいただけます。' },
  { title: '複数店舗の一括手配', description: '複数店舗のクロス張替えをまとめてご依頼いただけます。工程管理から品質確認まで一元管理します。' },
]

const scopeItems = [
  '壁紙・クロスの部分補修',
  '店舗全体のクロス張替え',
  '天井クロスの張替え',
  '廊下・共用部のクロス',
  '原状回復のためのクロス復旧',
  '防汚・防カビクロスへの変更',
  '夜間・営業時間外施工',
  '短工期対応',
  '複数店舗の一括手配',
  '施工後のアフターフォロー',
]

const faqs = [
  { q: '営業しながらクロス張替えはできますか？', a: '閉店後・深夜の施工が可能です。翌朝オープンに間に合わせるスケジュールにも対応しています。ご希望の施工時間帯をお伝えください。' },
  { q: '部分的な補修だけでも依頼できますか？', a: 'はい、1箇所からの補修でも対応します。傷・汚れ・剥がれなど、気になる箇所のみの補修も承ります。' },
  { q: 'クロスのサンプルは確認できますか？', a: 'はい、施工前にサンプルをご確認いただけます。店舗の雰囲気に合わせた素材・カラーをご提案します。' },
  { q: '複数店舗まとめて依頼できますか？', a: 'はい、複数店舗のクロス張替えをまとめてご依頼いただけます。工程表を作成し、各店舗の施工日程を調整します。' },
  { q: '原状回復と合わせて依頼できますか？', a: 'はい、退去時の原状回復工事の一環としてのクロス張替えも対応しています。解体・クリーニングとのセット依頼も承ります。' },
]

const related = [
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の内装全体の復旧' },
  { title: '店舗内装工事', href: '/service/shop-interior', description: '内装リノベーション全般' },
  { title: '店舗クリーニング', href: '/service/cleaning', description: '張替え後の専門清掃' },
]

export default function CrossWallpaperPage() {
  const structured = [
    breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }, { name: 'クロス張替え工事', url: '/service/cross-wallpaper' }]),
    serviceSchema('クロス張替え工事', '店舗の壁紙・クロスの部分補修から全面張替えまで対応。夜間・短工期施工可能。', '/service/cross-wallpaper'),
  ]
  return (
    <>
      {structured.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_14.jpg" alt="クロス張替え工事" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: 'クロス張替え工事' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">CROSS WALLPAPER</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>クロス張替え工事</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              壁紙・クロスの部分補修から全面張替えまで対応。夜間・短工期施工で営業への影響を最小化し、
              複数店舗の一括手配も承ります。
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">店舗の印象を左右するクロス工事を、<br />迅速に対応</h2>
              <div className="space-y-5 text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>
                <p>壁紙・クロスは店舗の印象を大きく左右します。汚れや傷みが目立つクロスはお客様・従業員の心証に影響します。播磨商事では、部分的な補修から店舗全体の張替えまで、ご要望に合わせて柔軟に対応いたします。</p>
                <p>短工期・夜間施工にも対応しており、営業時間外での施工が可能です。複数店舗のクロス張替えを一括手配したいご要望にもお応えします。原状回復工事の一環としてのクロス張替えから、開店前のリフレッシュ工事まで幅広く対応しています。</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="/LINE_ALBUM_2026.6.10_260610_7.jpg" alt="クロス張替え施工" fill className="object-cover" sizes="50vw" />
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

      <ScopeSection items={scopeItems} title="対応サービス内容" />

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
      <CTABanner title="クロス張替えのご相談はこちら" description="部分補修・全面張替え・夜間施工など、まずはお気軽にご相談ください。見積無料です。" />
    </>
  )
}
