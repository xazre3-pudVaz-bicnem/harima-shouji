import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import ScopeSection from '@/components/sections/ScopeSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ReasonsSection from '@/components/sections/ReasonsSection'
import ServiceFaqSection from '@/components/sections/ServiceFaqSection'
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '店舗内装工事 東京 | 新規出店・改装リノベーション | 株式会社播磨商事',
  description:
    '東京・関東圏の店舗内装工事。新規出店・改装リノベーションから、フランチャイズ仕様統一施工まで対応。複数店舗の工程管理・短工期施工・夜間施工可能。見積無料。',
  keywords: ['店舗内装工事 東京', '店舗 リノベーション', '店舗 改装工事', '新規出店 内装', '複数店舗 内装工事'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/shop-interior' },
}

const problems = [
  '新規出店・改装工事を複数の業者に分割発注しており、管理コストが高い',
  'フランチャイズの仕様に合わせた内装工事を一括で依頼できる業者がいない',
  'オープン日までの短工期・夜間施工に対応できる施工会社が見つからない',
  '内装工事の品質にばらつきがあり、ブランドの統一感が保てていない',
  '内装工事の費用・工期が読みづらく、出店計画が立てにくい',
]

const reasons = [
  { title: 'FC仕様統一施工に対応', description: 'フランチャイズ本部の仕様書・設計図面をもとに、複数店舗の施工品質を統一します。' },
  { title: '短工期・夜間施工に対応', description: 'オープン日が決まっている新規出店でも、夜間・短工期施工で対応します。' },
  { title: '設計から施工まで一括対応', description: '内装デザイン・設計・施工・設備工事まで一括してご依頼いただけます。' },
  { title: '複数店舗の工程管理', description: '複数店舗の内装工事を同時進行で管理し、工程表を共有します。' },
  { title: '東京・関東圏全域対応', description: '東京23区をはじめ、関東圏全域で施工対応しています。' },
  { title: '施工後のアフターサポート', description: 'オープン後の不具合対応・追加工事・原状回復まで長期サポートします。' },
]

const scopeItems = [
  '新規出店の内装工事一式',
  '改装・リノベーション工事',
  'フランチャイズ仕様統一施工',
  '内装デザイン・設計提案',
  '軽量鉄骨・木工下地工事',
  'クロス・壁紙工事',
  '床材工事（タイル・CF・フローリング）',
  '天井工事',
  '建具・造作工事',
  '電気・照明工事',
  '設備工事（給排水）',
  '空調・換気工事',
  'サイン・看板工事',
  '廃材処分・産廃処理',
]

const steps = [
  { number: '01', title: 'ご相談・ヒアリング', description: '店舗の業態・コンセプト・予算・工期のご要望をお聞きします。FC仕様の確認も行います。' },
  { number: '02', title: '現地調査・設計提案', description: '対象物件を調査し、内装設計・仕様・材料のご提案を行います。' },
  { number: '03', title: '見積・工程提出', description: '詳細な見積書と工程表を提出します。ご要望に合わせて調整します。' },
  { number: '04', title: '施工', description: '工程表に沿って施工を進め、品質確認・進捗報告を定期的に行います。' },
  { number: '05', title: '竣工・引き渡し', description: '施工完了後の確認・清掃を経て、引き渡しを行います。アフターサポートも継続します。' },
]

const galleryPhotos = [
  { src: '/LINE_ALBUM_2026.6.10_260610_22.jpg', alt: '店舗内装工事 施工事例1' },
  { src: '/LINE_ALBUM_2026.6.10_260610_4.jpg', alt: '店舗内装工事 施工事例2' },
  { src: '/LINE_ALBUM_2026.6.10_260610_8.jpg', alt: '店舗内装工事 施工事例3' },
  { src: '/LINE_ALBUM_2026.6.10_260610_9.jpg', alt: '店舗内装工事 施工事例4' },
]

const faqs = [
  { q: '新規出店の内装工事はどのくらいの期間がかかりますか？', a: '工事内容・規模によって異なりますが、標準的な店舗（50〜100坪）で2〜6週間程度です。スケルトン状態からのフルスクラッチ施工か、居抜き物件の改装かによっても変わります。詳細はお問い合わせください。' },
  { q: 'フランチャイズ本部の仕様書に対応できますか？', a: 'はい、FC本部の内装仕様書・設計図面をもとに施工します。既存の施工実績や承認業者との連携経験もありますので、ご相談ください。' },
  { q: '複数店舗の出店工事をまとめて依頼できますか？', a: 'はい、複数店舗の内装工事を一括してご依頼いただけます。各店舗の工程を統一管理し、品質と工期を管理します。' },
  { q: '営業中の店舗の改装も対応できますか？', a: 'はい、閉店後・深夜施工で営業への影響を最小化しながら進めることができます。仮営業が必要な場合のご相談も対応します。' },
  { q: '施工後の保証はありますか？', a: '施工完了後1年間の施工保証を提供しています。施工に起因する不具合は無償で対応いたします。' },
  { q: 'フランチャイズ仕様書がある場合、それに合わせた施工は可能ですか？', a: 'はい、可能です。本部からの仕様書・設計図面をご共有いただければ、それに沿った内装工事を実施します。加盟店ごとの品質統一をサポートします。' },
  { q: '既存店舗の改装中に営業を続けることは可能ですか？', a: '改装の内容によりますが、夜間・休日施工を組み合わせることで、営業への影響を最小限に抑えながら改装することが可能です。まずはご相談ください。' },
  { q: '小さなテナントの内装工事でも対応できますか？', a: 'はい、規模を問わず対応可能です。小型テナントから大型店舗まで、実際の店舗を確認した上でご提案します。' },
]

const related = [
  { title: 'フランチャイズ本部向け内装工事', href: '/service/franchise-interior', description: 'FC本部の施工パートナー' },
  { title: 'クロス張替え工事', href: '/service/cross-wallpaper', description: '壁紙の補修・全面張替え' },
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の内装復旧' },
]

export default function ShopInteriorPage() {
  const structured = [
    breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }, { name: '店舗内装工事', url: '/service/shop-interior' }]),
    serviceSchema('店舗内装工事', '新規出店・改装リノベーションからFC仕様統一施工まで。複数店舗の工程管理も対応。', '/service/shop-interior'),
  ]
  return (
    <>
      {structured.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}

      {/* Hero */}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_22.jpg" alt="店舗内装工事" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: '店舗内装工事' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">SHOP INTERIOR</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>店舗内装工事</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              新規出店・改装リノベーションからFC仕様統一施工まで、店舗の内装工事全般を対応。
              複数店舗の工程管理・短工期・夜間施工も承ります。
            </p>
          </div>
        </div>
      </div>

      {/* Overview — image LEFT, text RIGHT, with pull quote */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 order-1 lg:order-none">
              <Image src="/LINE_ALBUM_2026.6.10_260610_4.jpg" alt="店舗内装工事施工" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">出店・改装の内装工事を<br />ワンストップで管理</h2>
              <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>フランチャイズ本部様や多店舗展開企業様にとって、店舗ごとの内装工事を個別に発注する手間は大きな負担です。業者選定・工程管理・品質確認を繰り返すことで、事業展開のスピードが落ちてしまうケースも少なくありません。</p>
            </div>
          </div>
        </div>
      </section>

      <ScopeSection items={scopeItems} title="対応工事内容" />

      {/* Problems */}
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

      {/* Gallery — 2x2 grid with aspect-[4/3] */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="mb-14"><div className="section-label mb-5">GALLERY</div><h2 className="text-4xl md:text-5xl font-bold text-gray-900">施工事例</h2></div>
          <div className="grid grid-cols-2 gap-3">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection steps={steps} bg="stone" />

      <ServiceFaqSection faqs={faqs} bg="white" />

      {/* Related Services */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }} className="bg-white">
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

      <CTABanner title="店舗内装工事のご相談はこちら" description="新規出店・改装・FC本部様の複数店舗対応まで。まずはお気軽にご連絡ください。" />
    </>
  )
}
