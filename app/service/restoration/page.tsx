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
  title: '原状回復工事 東京 | 店舗・テナントの退去・解体・復旧 | 株式会社播磨商事',
  description:
    '東京・関東圏の店舗原状回復工事。退去立会い代行・解体・内装復旧・オーナーとの交渉サポートまで一括対応。複数店舗の退去スケジュール管理も承ります。過剰な原状回復費用の適正化もサポート。見積無料。',
  keywords: ['原状回復工事 東京', '店舗 原状回復', '退去立会い 代行', '店舗 解体工事', '原状回復 費用 適正化'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/restoration' },
}

const problems = [
  '退去立会いに担当者が対応する時間・人手がない',
  'オーナーから過剰な原状回復費用を請求されて困っている',
  '複数店舗の退去が重なり、スケジュール管理が煩雑になっている',
  '退去後の解体・クロス復旧・クリーニングを一括依頼できる業者がいない',
  '原状回復の範囲・費用について、オーナーと交渉する知識・時間がない',
]

const reasons = [
  { title: '退去立会い代行で担当者負担を軽減', description: '退去立会いに担当者が立ち会う必要がなくなります。' },
  { title: '過剰費用の適正化をサポート', description: '過剰な原状回復費用の請求に対して交渉サポートを行います。' },
  { title: '複数店舗の退去を一元管理', description: '複数店舗の退去スケジュールを工程表にまとめて一元管理します。' },
  { title: '解体から復旧まで一括対応', description: '内装解体・撤去・クロス復旧・クリーニングまで一括でお引き受けします。' },
]

const scopeItems = [
  '退去立会い代行',
  'オーナー・管理会社との交渉サポート',
  '原状回復費用の適正化',
  '内装解体・撤去工事',
  'クロス・壁紙の復旧',
  '床材の復旧・張替え',
  '天井の復旧',
  '設備・機器の撤去',
  '廃材処分・産廃処理',
  '店舗クリーニング（引渡し前）',
  '複数店舗の退去スケジュール管理',
  '工事完了報告書の作成',
]

const steps = [
  { number: '01', title: 'お問い合わせ', description: 'お電話またはメールフォームよりご連絡ください。' },
  { number: '02', title: '現地調査・ヒアリング', description: '対象店舗に伺い、現況確認と原状回復範囲のヒアリングを行います。' },
  { number: '03', title: '見積・工程提案', description: '原状回復費用の見積書と工程表をご提出します。' },
  { number: '04', title: '退去立会い（代行）', description: '退去立会いを代行し、オーナー・管理会社との確認・交渉をサポートします。' },
  { number: '05', title: '原状回復工事', description: '解体・撤去・クロス復旧・クリーニングを実施し、完了後に報告書を提出します。' },
]

const faqs = [
  { q: '退去立会い代行とはどのようなサービスですか？', a: '退去立会いにご担当者様が立ち会う代わりに、播磨商事の担当者がオーナー・管理会社との立会いに同席します。原状回復の確認・費用交渉のサポートも行い、担当者様の負担を大幅に軽減します。' },
  { q: '複数店舗の退去をまとめて依頼できますか？', a: 'はい、対応可能です。複数店舗の退去スケジュールを工程表にまとめて管理します。退去日が重なる場合でも対応できますので、まずはご相談ください。' },
  { q: '原状回復費用の相場を知りたいのですが？', a: '店舗の状況・工事内容・面積によって異なります。現地調査後に詳細な見積書をご提出しますので、オーナーからの見積と比較・検討していただけます。' },
  { q: '退去立会い後に工事も依頼できますか？', a: 'はい、退去立会い代行と原状回復工事をセットでご依頼いただくことが可能です。立会い後すぐに工事を開始でき、スムーズな引き渡しをサポートします。' },
  { q: '工事完了の証明書や報告書は出ますか？', a: '工事完了後に完了写真・報告書を提出します。オーナーへの提出書類としてもご活用いただけます。' },
  { q: 'オーナーからの原状回復費用の請求が高すぎます。相談できますか？', a: 'はい、ご相談ください。原状回復費用の内訳を確認し、過剰な請求があれば交渉サポートを行います。退去立会い代行・工事・クリーニングと合わせてお任せいただくことも可能です。' },
  { q: '退去立会いの日程が急に決まりました。対応できますか？', a: '可能な限り対応します。お早めにご連絡いただければ、スケジュールを確認した上でご対応します。' },
  { q: '複数店舗の退去をまとめて依頼できますか？', a: 'はい、複数店舗の退去対応を一括してお任せいただけます。各店舗の退去スケジュールを整理し、立会い・原状回復工事・クリーニングをまとめて管理します。' },
]

const related = [
  { title: '店舗内装工事', href: '/service/shop-interior', description: '新規出店・改装・FC仕様統一施工' },
]

export default function RestorationPage() {
  const structured = [
    breadcrumbSchema([
      { name: 'サービス一覧', url: '/service' },
      { name: '原状回復工事', url: '/service/restoration' },
    ]),
    serviceSchema('原状回復工事', '退去立会い代行・解体・内装復旧・オーナーとの交渉サポートまで一括対応。', '/service/restoration'),
  ]

  return (
    <>
      {structured.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_19.jpg" alt="原状回復工事" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: '原状回復工事' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">RESTORATION</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>原状回復工事</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              退去立会い代行から解体・内装復旧まで一括対応。過剰な原状回復費用の適正化サポートで、
              担当者様の負担と費用を同時に削減します。複数店舗の退去管理もまとめてお任せください。
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">退去から原状回復まで、<br />ワンストップで対応</h2>
              <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>店舗・テナントの退去時には、退去立会い・原状回復の確認・費用調整など、多くの対応が必要です。特にフランチャイズ本部様や多店舗運営会社様にとって、複数店舗の退去対応は大きな負担となります。</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="/LINE_ALBUM_2026.6.10_260610_19.jpg" alt="原状回復工事" fill className="object-cover" sizes="50vw" />
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

      <ProcessSection steps={steps} bg="stone" />

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

      <CTABanner title="原状回復工事・退去対応のご相談はこちら" description="退去立会いの無料相談も対応しています。まずはお気軽にご連絡ください。" />
    </>
  )
}
