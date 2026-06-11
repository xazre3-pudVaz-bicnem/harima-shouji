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
  title: '店舗解体・撤去工事 | 内装解体・スケルトン工事・廃材処分 | 株式会社播磨商事',
  description:
    '東京・関東圏の店舗解体・撤去工事。内装解体からスケルトン復旧・廃材処分まで対応。退去立会い・原状回復との同時依頼可能。複数店舗の一括解体も承ります。見積無料。',
  keywords: ['店舗 解体工事', '内装 解体', 'スケルトン 解体', '店舗 撤去工事', '内装解体 東京'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/demolition' },
}

const problems = [
  '退去時の内装解体・撤去工事を短期間で依頼できる業者が見つからない',
  '解体工事と廃材処分・産廃処理を別々の業者に発注していて手間がかかる',
  '複数店舗の解体工事が重なり、個別に業者を手配するのが難しい',
  'スケルトン状態に戻すための解体範囲・費用の見積が不明確',
  '原状回復工事と解体工事をまとめて依頼できる業者を探している',
]

const reasons = [
  { title: '解体から廃材処分まで一括対応', description: '内装解体・設備撤去・廃材処分・産廃処理まで一括してお引き受けします。複数業者への手配が不要になります。' },
  { title: '短工期・夜間施工に対応', description: '退去日程に合わせた短工期施工・深夜施工にも対応しています。引き渡しスケジュールに間に合わせます。' },
  { title: 'スケルトン工事の実績多数', description: '内装を完全にスケルトン状態に戻す解体工事の実績が豊富です。次の入居者のための適切な解体を行います。' },
  { title: '複数店舗の一括解体に対応', description: '複数店舗の解体工事を一括手配し、工程管理から廃材処分まで統一対応します。FC本部様の退去管理を効率化します。' },
]

const scopeItems = [
  '内装解体工事一式',
  'スケルトン（居抜き）復旧工事',
  '設備・機器の撤去',
  '間仕切り・壁の撤去',
  '天井の解体・撤去',
  '床材の撤去',
  '電気設備の撤去',
  '給排水設備の撤去',
  '廃材処分・産廃処理',
  '残置物の撤去・処分',
  '複数店舗の一括解体',
  '解体後の清掃',
]

const steps = [
  { number: '01', title: 'ご相談・ヒアリング', description: '解体範囲・退去日程・スケジュール要件をお聞きします。退去立会い代行も合わせてご相談いただけます。' },
  { number: '02', title: '現地調査・見積', description: '対象店舗に伺い、解体範囲を確認します。廃材処分費用を含む詳細な見積書を提出します。' },
  { number: '03', title: '工程確認・着工準備', description: '退去日程に合わせた工程表を作成します。近隣への配慮・養生計画も確認します。' },
  { number: '04', title: '解体・撤去工事', description: '工程表に沿って解体を進めます。廃材は適切に分別・処分します。' },
  { number: '05', title: '最終清掃・引き渡し', description: '解体完了後に清掃・確認を行い、写真付き報告書を提出します。' },
]

const galleryPhotos = [
  { src: '/LINE_ALBUM_2026.6.10_260610_4.jpg', alt: '解体工事 施工事例1' },
  { src: '/LINE_ALBUM_2026.6.10_260610_19.jpg', alt: '解体工事 施工事例2' },
  { src: '/LINE_ALBUM_2026.6.10_260610_8.jpg', alt: '解体工事 施工事例3' },
  { src: '/LINE_ALBUM_2026.6.10_260610_14.jpg', alt: '解体工事 施工事例4' },
]

const faqs = [
  { q: '解体工事の期間はどのくらいかかりますか？', a: '規模・解体範囲によって異なりますが、一般的な店舗（30〜80坪）で3〜10日程度です。スケルトン工事や設備撤去が多い場合は長くなります。詳細は現地調査後にお伝えします。' },
  { q: 'スケルトン状態に戻す工事もできますか？', a: 'はい、内装をすべて撤去してスケルトン状態に戻す工事に対応しています。次の入居者が改装しやすい状態への復旧も承ります。' },
  { q: '廃材処分・産廃処理は含まれますか？', a: 'はい、解体工事に廃材処分・産廃処理費用を含めた見積をご提出します。分別・マニフェスト発行も対応しています。' },
  { q: '退去立会い・原状回復工事と合わせて依頼できますか？', a: 'はい、退去立会い代行・解体・クロス復旧・クリーニングまでセットでご依頼いただけます。一括依頼で工期短縮と費用削減が可能です。' },
  { q: '夜間・短工期での解体は可能ですか？', a: 'はい、退去日程が迫っている場合でも夜間施工・短工期対応が可能です。まずは退去予定日をお伝えいただき、対応可否を確認します。' },
]

const related = [
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の内装全体の復旧' },
  { title: '退去立会いサポート', href: '/service/exit-support', description: '退去立会い代行・費用交渉' },
  { title: '店舗クリーニング', href: '/service/cleaning', description: '解体後・引渡し前の清掃' },
]

export default function DemolitionPage() {
  const structured = [
    breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }, { name: '解体・撤去工事', url: '/service/demolition' }]),
    serviceSchema('解体・撤去工事', '内装解体・スケルトン復旧・廃材処分まで一括対応。退去立会い・原状回復工事との同時依頼可能。', '/service/demolition'),
  ]
  return (
    <>
      {structured.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_4.jpg" alt="解体・撤去工事" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: '解体・撤去工事' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">DEMOLITION</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>解体・撤去工事</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              内装解体からスケルトン復旧・廃材処分まで一括対応。退去立会い・原状回復工事との同時依頼で
              退去の手間と費用を同時に削減します。
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">解体・撤去・産廃処理まで<br />ワンストップで対応</h2>
              <div className="space-y-5 text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>
                <p>退去時の内装解体は、解体業者・産廃業者への個別発注が必要なケースが多く、スケジュール管理や費用確認に時間がかかります。特に複数店舗の退去が重なる時期は、担当者への負担が集中します。</p>
                <p>播磨商事では、内装解体・設備撤去・廃材処分・産廃処理を一括してお引き受けし、退去日程に合わせたスムーズな工程管理を行います。退去立会い代行・原状回復工事・クリーニングとのセット依頼も可能です。</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="/LINE_ALBUM_2026.6.10_260610_19.jpg" alt="解体工事施工" fill className="object-cover" sizes="50vw" />
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

      <ScopeSection items={scopeItems} title="対応工事内容" />

      <ProcessSection steps={steps} bg="stone" />

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="mb-14"><div className="section-label mb-5">GALLERY</div><h2 className="text-4xl md:text-5xl font-bold text-gray-900">施工事例</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden bg-gray-100">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <CTABanner title="解体・撤去工事のご相談はこちら" description="退去日程に合わせた短工期対応・複数店舗の一括依頼も承ります。見積無料です。" />
    </>
  )
}
