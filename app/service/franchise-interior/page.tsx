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
  title: 'フランチャイズ本部向け内装工事 | FC本部・チェーン店の施工パートナー | 株式会社播磨商事',
  description:
    'FC本部・チェーン店の内装工事をまとめて一括管理。加盟店の新規出店・改装・原状回復・退去立会いまで一元対応。複数店舗の施工品質統一・工程管理・本部担当者との一元窓口を実現します。東京・関東圏対応。見積無料。',
  keywords: ['フランチャイズ 内装工事', 'FC本部 内装工事', 'チェーン店 内装工事', '多店舗 内装工事', '加盟店 施工管理'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/franchise-interior' },
  openGraph: {
    title: 'フランチャイズ本部向け内装工事 | 株式会社播磨商事',
    url: 'https://harima-shouji.co.jp/service/franchise-interior',
  },
}

const problems = [
  '加盟店ごとに異なる業者に発注していて、施工品質がバラついている',
  '本部担当者が各店舗の工事進捗を個別確認しなければならず、負担が大きい',
  '退去立会い・原状回復・クリーニングまでまとめて依頼できる業者がいない',
  '夜間工事・短工期に対応できる業者が見つからず、開店スケジュールに影響している',
  '発注先が多すぎて管理コストと事務負担が増加している',
]

const reasons = [
  { title: '複数店舗の施工品質を統一', description: 'FC本部様の仕様・基準に沿って加盟店ごとの施工品質を統一します。' },
  { title: '本部担当者との窓口を一本化', description: '担当者を一名に固定し、複数店舗の工程・進捗・完了報告をまとめて管理します。' },
  { title: '複数店舗の同時並行施工対応', description: '複数店舗の工事を同時進行で進めることが可能です。' },
  { title: '夜間・短工期・急ぎ案件も対応', description: '夜間施工・短工期が必要な案件も柔軟に対応します。' },
  { title: '内装から退去立会いまで一括対応', description: '内装工事からクリーニング・原状回復・退去立会いまで一社でお引き受けします。' },
  { title: '現地調査から完了報告まで一貫担当', description: '調査・見積・施工・完了確認まで一貫して担当します。' },
]

const scopeItems = [
  '新規出店・内装工事全般',
  '既存店舗の改装・リノベーション',
  'クロス・壁紙の張替え（部分補修から全面）',
  '床材張替え（フローリング・タイル・Pタイル）',
  '天井・照明工事',
  '設備・機器の取付・入替',
  '厨房まわりの補修・工事',
  '空調・ダクトまわりの工事',
  '退去時の内装解体・撤去',
  '退去立会い代行',
  'オーナー・管理会社との交渉サポート',
  '原状回復費用の適正化',
  '店舗クリーニング（退去・開業前・改装後）',
  '廃材処分・産廃処理',
]

const steps = [
  { number: '01', title: 'お問い合わせ', description: 'お電話またはメールフォームよりお気軽にご連絡ください。' },
  { number: '02', title: 'ヒアリング・現地調査', description: '工事内容・スケジュール・ご予算・店舗数など詳しくヒアリングします。' },
  { number: '03', title: '見積・工程提案', description: '現地調査の結果をもとに詳細な見積書と工程表をご提出します。' },
  { number: '04', title: '施工・進捗報告', description: '承認後、施工を開始し、定期的な進捗報告と写真報告を行います。' },
  { number: '05', title: '完了確認・引き渡し', description: '施工完了後にご確認いただき、完了写真・報告書を提出します。' },
  { number: '06', title: 'アフターフォロー', description: '引き渡し後も継続サポートします。' },
]

const faqs = [
  { q: '複数店舗をまとめて依頼できますか？', a: 'はい、対応可能です。FC加盟店10店舗以上の一括管理実績もございます。工程表・進捗報告・完了報告をまとめて対応しますので、本部担当者様の管理負担を大幅に削減できます。' },
  { q: '全国展開していますが対応できますか？', a: '現在は東京・関東圏を中心に対応しております。対象エリア外の案件についても内容によっては対応可能な場合がありますので、まずはお気軽にご相談ください。' },
  { q: '施工品質はどのように担保されますか？', a: '施工前のヒアリングでFC本部様の仕様・基準を確認した上で施工に入ります。施工中は定期的な進捗報告と写真報告を行い、完了後に確認検査を実施します。品質に不満がある場合は速やかに対応します。' },
  { q: '夜間工事・短工期は対応できますか？', a: 'はい、対応可能です。深夜施工・翌朝完了が必要な改装案件も対応しています。ご依頼時にスケジュールをお聞かせいただければ、対応可否を確認いたします。' },
  { q: '退去立会いや原状回復もまとめて依頼できますか？', a: 'はい、退去立会い代行・オーナーとの交渉サポート・原状回復工事・クリーニングまで一括してお受けします。複数店舗の退去スケジュールの管理もお任せください。' },
  { q: '見積は無料ですか？', a: '現地調査・お見積りは完全無料です。費用が発生するのは工事ご依頼後からとなります。まずはお気軽にご相談ください。' },
  { q: 'FC加盟店の内装仕様書に合わせた施工は可能ですか？', a: 'はい、可能です。フランチャイズ本部様の仕様書・設計図面をご共有いただければ、それに沿った施工品質で対応します。加盟店ごとの仕様統一もサポートします。' },
  { q: '工事中の進捗報告はありますか？', a: '定期的な進捗報告・写真報告を行います。本部担当者様が現場に立ち合わなくても状況を把握できる体制で対応します。複数店舗の進捗もまとめてご報告します。' },
  { q: '急な出店スケジュール変更にも対応できますか？', a: '可能な限り対応します。工程の前倒し・スケジュール変更が生じた場合も、柔軟にご相談ください。' },
]

const related = [
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の解体・撤去・内装復旧' },
  { title: '店舗クリーニング', href: '/service/cleaning', description: '退去・開業前の専門クリーニング' },
  { title: '退去立会いサポート', href: '/service/exit-support', description: '立会い代行・費用適正化' },
]

const galleryPhotos = [
  { src: '/LINE_ALBUM_2026.6.10_260610_22.jpg', alt: '複数人での店舗内装施工' },
  { src: '/LINE_ALBUM_2026.6.10_260610_4.jpg', alt: '内装工事施工中' },
  { src: '/LINE_ALBUM_2026.6.10_260610_8.jpg', alt: '施工中の様子' },
  { src: '/LINE_ALBUM_2026.6.10_260610_9.jpg', alt: '店舗内装仕上がり' },
]


export default function FranchiseInteriorPage() {
  const structured = [
    breadcrumbSchema([
      { name: 'サービス一覧', url: '/service' },
      { name: 'フランチャイズ本部向け内装工事', url: '/service/franchise-interior' },
    ]),
    serviceSchema(
      'フランチャイズ本部向け内装工事',
      'FC本部・チェーン店の内装工事をまとめて一括管理。加盟店の新規出店・改装・原状回復を一元対応。',
      '/service/franchise-interior'
    ),
  ]

  return (
    <>
      {structured.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* Hero */}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/LINE_ALBUM_2026.6.10_260610_22.jpg"
            alt="フランチャイズ本部向け内装工事"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb
            items={[
              { label: 'サービス一覧', href: '/service' },
              { label: 'フランチャイズ本部向け内装工事' },
            ]}
          />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">FRANCHISE INTERIOR</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>
              フランチャイズ本部向け<br />内装工事
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              FC加盟店の新規出店・改装・原状回復を一括管理。複数店舗の施工品質統一と工程管理で、
              本部担当者様の管理コストを大幅に削減します。退去立会い・クリーニングまで一社完結で対応します。
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white relative overflow-hidden">
        <div className="absolute top-8 left-8 text-[8rem] font-black text-gray-100 select-none leading-none pointer-events-none" aria-hidden="true">01</div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase mb-4">OVERVIEW</div>
              <h2 className="font-bold text-gray-900 mb-8 leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
                FC本部・チェーン店の内装工事を、<br />まとめて任せられる施工パートナー
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>
                  フランチャイズ本部様・チェーン店本部様にとって、加盟店や直営店の内装工事管理は大きな負担となっています。
                  店舗ごとに異なる業者に発注する手間、施工品質のバラつき、退去時の原状回復対応——
                  こうした課題をまとめて解決するのが播磨商事の「フランチャイズ本部向け内装工事サービス」です。
                </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_4.jpg"
                alt="フランチャイズ店舗の内装工事"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-[#071322] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="text-[12rem] font-black text-white/3 leading-none">課題</span>
        </div>
        <div className="container relative">
          <div className="mb-14">
            <div className="section-label-light mb-5">PROBLEMS</div>
            <h2 className="section-title-light">こんなお悩みありませんか？</h2>
          </div>
          <div className="divide-y divide-white/8">
            {problems.map((p, i) => (
              <div key={p} className="flex items-center gap-10 py-8 group">
                <span className="text-[11px] font-bold text-amber-500/40 tracking-[0.3em] shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-white/60 group-hover:text-white/90 transition-colors leading-relaxed" style={{ fontSize: '1.25rem' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReasonsSection reasons={reasons} />

      <ProcessSection steps={steps} />

      {/* Gallery */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-[#071322]">
        <div className="container">
          <div className="mb-12">
            <div className="section-label-light mb-5">GALLERY</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">施工写真</h2>
          </div>
          {/* Mosaic: first photo large, then 3 below */}
          <div className="space-y-2">
            <div className="relative w-full overflow-hidden bg-gray-800" style={{ aspectRatio: '16/7' }}>
              <Image
                src={galleryPhotos[0].src}
                alt={galleryPhotos[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-bold text-white/70 tracking-widest uppercase">CONSTRUCTION WORK</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {galleryPhotos.slice(1).map((photo) => (
                <div key={photo.src} className="relative overflow-hidden bg-gray-800" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-white/60 tracking-widest uppercase">DETAIL</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection faqs={faqs} />

      <ScopeSection items={scopeItems} />

      {/* Related Services */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }} className="bg-white">
        <div className="container">
          <div className="section-label mb-8">RELATED SERVICES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group flex items-center justify-between border border-gray-100 p-6 hover:border-amber-200 transition-colors">
                <div>
                  <div className="text-base font-bold text-gray-900 mb-1">{r.title}</div>
                  <div className="text-sm text-gray-500">{r.description}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="フランチャイズ本部・多店舗展開のご担当者様へ"
        description="複数店舗の内装工事をまとめてご相談ください。現地調査・お見積りは無料です。"
      />
    </>
  )
}
