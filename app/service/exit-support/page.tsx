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
  title: '退去立会いサポート | 店舗テナントの退去立会い代行・原状回復費用の適正化 | 株式会社播磨商事',
  description:
    '店舗・テナントの退去立会い代行。オーナー・管理会社との交渉サポート、過剰な原状回復費用の適正化をサポート。複数店舗の退去管理も一括対応。東京・関東圏。現地調査・相談無料。',
  keywords: ['退去立会い 代行', '原状回復 費用 適正化', '店舗 退去 サポート', 'テナント 退去', '退去立会い FC本部'],
  alternates: { canonical: 'https://harima-shouji.co.jp/service/exit-support' },
}

const problems = [
  '退去立会いに担当者が対応できず、店舗の引き渡しが遅れている',
  'オーナーから高額な原状回復費用を請求されて対応に困っている',
  '複数店舗の退去が重なり、個別対応が追いつかない',
  '退去に関する法律・慣例を理解した上で交渉できる担当者がいない',
  '退去後の原状回復工事もまとめて依頼できる業者を探している',
]

const reasons = [
  { title: '退去立会いに代わりに対応', description: 'ご担当者様が立ち会えない場合でも、播磨商事の担当者がオーナー・管理会社との立会いに対応します。' },
  { title: '過剰請求への交渉サポート', description: 'オーナーからの原状回復費用請求が適正かどうかを確認し、過剰な請求に対しては交渉サポートを行います。' },
  { title: '複数店舗の退去を一元管理', description: '複数店舗の退去予定をまとめて管理し、スケジュール表を作成します。各店舗の状況を個別に追う必要がなくなります。' },
  { title: '退去後の工事もまとめて依頼', description: '退去立会い後の原状回復工事・クロス復旧・クリーニングまで、そのままご依頼いただけます。' },
]

const scopeItems = [
  '退去立会い代行',
  'オーナー・管理会社との交渉サポート',
  '原状回復費用の適正化',
  '退去後の内装解体・撤去工事',
  'クロス・床の復旧工事',
  '退去前クリーニング',
  '複数店舗の退去スケジュール管理',
  '退去に関するご相談（無料）',
  '引き渡し書類の確認サポート',
  '工事完了後の写真・報告書提出',
]

const faqs = [
  { q: '退去立会い代行はどのような流れになりますか？', a: 'まずはお問い合わせいただき、退去予定日・店舗状況をヒアリングします。立会い日にオーナー・管理会社と一緒に店舗を確認し、原状回復の範囲・費用について確認・交渉します。' },
  { q: 'オーナーとの費用交渉もお願いできますか？', a: 'はい、立会い時にオーナー・管理会社からの費用請求の内容を確認し、過剰な請求に対して適正化の交渉サポートを行います。' },
  { q: '退去立会い後に原状回復工事も依頼できますか？', a: 'はい、退去立会い後の原状回復工事・クロス復旧・クリーニングまでそのままご依頼いただけます。立会い時に確認した工事内容で見積を作成します。' },
  { q: '複数店舗の退去をまとめて依頼できますか？', a: 'はい、対応可能です。複数店舗の退去予定をまとめて管理し、スケジュール調整を行います。担当者様の個別対応を大幅に削減できます。' },
  { q: '相談だけでも無料ですか？', a: 'はい、退去立会いに関するご相談は無料です。まずは退去予定日・店舗状況をお伝えいただければ、対応可否と費用感についてお伝えします。' },
]

const related = [
  { title: '原状回復工事', href: '/service/restoration', description: '退去後の内装全体の復旧' },
  { title: '店舗クリーニング', href: '/service/cleaning', description: '退去前の専門クリーニング' },
  { title: 'フランチャイズ本部向け内装工事', href: '/service/franchise-interior', description: 'FC本部の施工パートナー' },
]

export default function ExitSupportPage() {
  const structured = [
    breadcrumbSchema([{ name: 'サービス一覧', url: '/service' }, { name: '退去立会いサポート', url: '/service/exit-support' }]),
    serviceSchema('退去立会いサポート', '退去立会い代行・オーナーとの交渉サポート・原状回復費用の適正化。', '/service/exit-support'),
  ]
  return (
    <>
      {structured.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}
      <div className="relative bg-gray-950 overflow-hidden" style={{ paddingTop: '10rem', minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <Image src="/LINE_ALBUM_2026.6.10_260610_24.jpg" alt="退去立会いサポート" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
        <div className="container relative z-10 py-10 md:py-16">
          <Breadcrumb items={[{ label: 'サービス一覧', href: '/service' }, { label: '退去立会いサポート' }]} />
          <div className="mt-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">EXIT SUPPORT</div>
            <h1 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}>退去立会いサポート</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              退去立会い代行・オーナーとの交渉サポートで、過剰な原状回復費用を適正化します。
              担当者様に代わって退去対応のすべてをサポートします。
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }} className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">退去時の手間と費用負担を<br />最小化するサービス</h2>
              <div className="space-y-5 text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '2.1' }}>
                <p>店舗・テナントの退去時には、オーナーや管理会社との立会い・原状回復の確認・費用の調整など多くの対応が必要です。特に複数店舗を管理するご担当者様にとって、これらの対応は大きな負担となります。</p>
                <p>播磨商事では退去立会いの代行サービスを提供しており、オーナー・管理会社との立会いに同席し、過剰な原状回復費用の請求を適正に交渉・調整いたします。退去後の工事もそのままお任せいただけます。</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src="/LINE_ALBUM_2026.6.10_260610_25.jpg" alt="退去立会いの打ち合わせ" fill className="object-cover" sizes="50vw" />
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

      <ScopeSection items={scopeItems} title="対応サービス" />

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
      <CTABanner title="退去立会い・原状回復のご相談はこちら" description="退去立会いの無料相談も対応しております。複数店舗のまとめてのご依頼も歓迎です。" />
    </>
  )
}
