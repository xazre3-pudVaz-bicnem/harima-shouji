// お客様の質問と回答（5分野×10問）。
// 分野別ページ（/faq/[category]）・個別の解説ページ（/faq/[category]/[slug]）・/start・/price はすべてここから生成する。
//
// 掲載の手順:
//   1. 各分野のファイル（salon.ts など）で、【要確認】の箇所を確認済みの数値・内容に書き換える
//   2. status を 'published' にし、updatedAt に確認日を入れる
//   【要確認】が残ったまま 'published' にするとビルドが止まる（誤って未確認の数値を公開しないため）
import { serviceAreaText, outsideAreaNote } from '@/data/company'
import { publishedBudgetGuides, publishedBudgetPlans } from '@/data/expertise'
import { hasPendingMark, showDrafts } from '@/lib/content-status'
import { costQa } from './cost'
import { fcMultiStoreQa } from './fc-multi-store'
import { gymPilatesQa } from './gym-pilates'
import { restorationQa } from './restoration'
import { salonQa } from './salon'
import type { BasicQa, QaCategory, QaCategorySlug, QaHome, QaItem } from './types'

export type { BasicQa, QaCategory, QaCategorySlug, QaHome, QaItem } from './types'

export const qaCategories: QaCategory[] = [
  {
    slug: 'salon',
    name: 'サロン',
    title: 'サロン内装のよくある質問',
    description:
      'エステ・ネイルサロンの内装費用、10坪の費用、予算200万円でできる工事、マンションの一室や居抜き物件での開業など、サロン内装のよくある質問に播磨商事がお答えします。',
    lead: 'エステサロン・ネイルサロン・美容室など、サロンの内装について費用・物件・工期のご質問にお答えします。',
    image: '/salon-03.png',
    cta: '播磨商事では、サロンの内装を物件契約前の内見同行から施工・現場管理まで一貫して承っています。',
    related: [
      { label: 'サロン内装工事', href: '/industry/salon-interior' },
      { label: '美容室の内装工事', href: '/industry/beauty-salon-interior' },
    ],
  },
  {
    slug: 'gym-pilates',
    name: 'ジム・ピラティス',
    title: 'ジム・ピラティススタジオ内装のよくある質問',
    description:
      'パーソナルジム・ピラティススタジオの内装費用、下の階への音・振動対策、床の強度、契約前の物件チェック、工期など、よくある質問に播磨商事がお答えします。',
    lead: 'パーソナルジム・ピラティススタジオの内装について、費用・防音・物件選び・工期のご質問にお答えします。',
    image: '/gym-01.png',
    cta: '播磨商事では、ジム・ピラティススタジオの内装を、物件選びから床・鏡・防音まで一貫して承っています。',
    related: [{ label: 'ジム内装工事', href: '/industry/gym-interior' }],
  },
  {
    slug: 'cost',
    name: '費用・業者選び',
    title: '店舗内装の費用・業者選びのよくある質問',
    description:
      '店舗内装の相談先、見積もりの見方、追加料金を防ぐ方法、壁紙・床だけの小さな工事、看板の依頼など、費用と業者選びのよくある質問に播磨商事がお答えします。',
    lead: '店舗内装の相談先の選び方から、見積もりの見方、追加料金を防ぐ方法まで、費用と業者選びのご質問にお答えします。',
    image: '/store-02.png',
    cta: '播磨商事では、小さな工事から店舗一式の内装まで、現地調査・お見積もりを無料で承っています。',
    related: [
      { label: '初めて店舗を出店する方へ', href: '/start' },
      { label: '店舗内装工事', href: '/service/shop-interior' },
    ],
  },
  {
    slug: 'fc-multi-store',
    name: 'FC・多店舗',
    title: 'FC・多店舗展開の内装工事のよくある質問',
    description:
      '多店舗展開の内装をまとめて依頼する方法、品質と費用をそろえる進め方、関東・近畿・東海での施工体制など、FC本部・多店舗展開企業様のよくある質問にお答えします。',
    lead: 'FC本部・多店舗展開企業様から多いご質問に、施工体制と進め方の面からお答えします。',
    image: '/fc-01.png',
    cta: '播磨商事では、FC・多店舗展開の内装工事を、出店から改装、退店時の原状回復まで同じ窓口で承っています。',
    related: [
      { label: 'FC本部向けサービス', href: '/franchise' },
      { label: '多店舗展開企業向け', href: '/multi-store' },
    ],
  },
  {
    slug: 'restoration',
    name: '原状回復',
    title: '店舗の原状回復のよくある質問',
    description:
      '退去立会いから原状回復工事までの流れ、費用、壁紙の部分補修、管理会社様からの継続依頼など、店舗の原状回復のよくある質問に播磨商事がお答えします。',
    lead: '店舗の退去・原状回復について、流れ・費用・工事範囲のご質問にお答えします。',
    image: '/resto-01.png',
    cta: '播磨商事では、退去立会いから原状回復工事まで、まとめて承っています。',
    related: [{ label: '原状回復工事', href: '/service/restoration' }],
  },
]

const itemsByCategory: Record<QaCategorySlug, QaItem[]> = {
  salon: salonQa,
  'gym-pilates': gymPilatesQa,
  cost: costQa,
  'fc-multi-store': fcMultiStoreQa,
  restoration: restorationQa,
}

export type QaEntry = QaItem & { category: QaCategorySlug }

export const allQa: QaEntry[] = qaCategories.flatMap((c) =>
  itemsByCategory[c.slug].map((q) => ({ ...q, category: c.slug })),
)

// ── 公開前チェック（ビルド時に実行） ──
for (const q of allQa) {
  if (allQa.filter((other) => other.category === q.category && other.slug === q.slug).length > 1) {
    throw new Error(`[qa] slug が重複しています: ${q.category}/${q.slug}`)
  }
  if (q.status !== 'published') continue
  const texts = [
    q.question,
    q.answer,
    q.cta,
    ...(q.facts ?? []).flatMap((f) => [f.label, f.value]),
    ...(q.detail ?? []).flatMap((s) => [s.heading, ...s.body]),
  ]
  if (hasPendingMark(...texts)) {
    throw new Error(`[qa] 公開中の質問に【要確認】が残っています: ${q.category}/${q.slug}`)
  }
}

export const homeOf = (q: QaItem): QaHome => q.home ?? 'category'
export const isVisibleQa = (q: QaItem) => q.status === 'published' || showDrafts

/** 表示対象（本番は公開済みのみ、開発時は下書きも含む） */
export const visibleQa = allQa.filter(isVisibleQa)

export function getQaCategory(slug: string): QaCategory | undefined {
  return qaCategories.find((c) => c.slug === slug)
}

export function qaInCategory(slug: QaCategorySlug): QaEntry[] {
  return visibleQa.filter((q) => q.category === slug)
}

export function getQa(category: string, slug: string): QaEntry | undefined {
  return visibleQa.find((q) => q.category === category && q.slug === slug)
}

/** 回答を掲載しているページ（ページ内リンク付き） */
export function qaAnswerHref(q: QaEntry): string {
  switch (homeOf(q)) {
    case 'start':
      return `/start#${q.slug}`
    case 'price':
      return `/price#${q.slug}`
    default:
      return `/faq/${q.category}#${q.slug}`
  }
}

export const qaHomeLabel: Record<QaHome, string> = {
  category: 'よくある質問',
  start: '初めて店舗を出店する方へ',
  price: '店舗内装の費用の目安',
}

/** 個別の解説ページ（本文があるときだけ） */
export function qaDetailHref(q: QaEntry): string | undefined {
  return q.detail && q.detail.length > 0 ? `/faq/${q.category}/${q.slug}` : undefined
}

/** 分野別ページを出すのは、その分野で回答を掲載する質問が1件以上あるときだけ */
export const visibleQaCategories = qaCategories.filter((c) =>
  visibleQa.some((q) => q.category === c.slug && homeOf(q) === 'category'),
)

export const detailQa = visibleQa.filter((q) => qaDetailHref(q) && visibleQaCategories.some((c) => c.slug === q.category))

// /start の掲載順（修正指示書の原稿の順）
const startOrder = [
  'cost/who-to-consult',
  'salon/before-contract',
  'cost/no-image-yet',
  'cost/compare-estimates',
  'cost/over-budget',
  'cost/avoid-extra-cost',
  'cost/flow',
  'cost/lead-time',
]

const orderIndex = (q: QaEntry) => {
  const i = startOrder.indexOf(`${q.category}/${q.slug}`)
  return i === -1 ? startOrder.length : i
}

export const startQa = visibleQa.filter((q) => homeOf(q) === 'start').sort((a, b) => orderIndex(a) - orderIndex(b))
export const priceQa = visibleQa.filter((q) => homeOf(q) === 'price')

export const startPageVisible = startQa.length > 0
export const pricePageVisible =
  showDrafts || publishedBudgetGuides.length > 0 || publishedBudgetPlans.length > 0 || priceQa.length > 0

// ── /faq の「基本的なご質問」（従来の /faq の内容） ──
export const basicQa: { category: string; items: BasicQa[] }[] = [
  {
    category: 'サービスについて',
    items: [
      {
        q: '対応しているサービスを教えてください。',
        a: 'サロン・ジム・ピラティススタジオなどの店舗内装工事を専門に、FC・多店舗展開の内装工事、退去時の原状回復工事に対応しています。物件契約前の内見同行から、現地調査・見積もり・施工・現場管理まで一貫してお任せいただけます。',
      },
      {
        q: '複数店舗をまとめて依頼できますか？',
        a: 'はい、対応しています。複数店舗の同時施工・工程管理はむしろ得意としているところです。担当者様の窓口を一本化し、まとめてご相談いただけます。',
        supersededBy: 'fc-multi-store/bulk-order',
      },
      { q: '1店舗だけでも依頼できますか？', a: 'もちろんです。1店舗の小規模案件から多店舗の大型案件まで柔軟に対応しています。' },
    ],
  },
  {
    category: '対応エリア・工期',
    items: [
      { q: '対応エリアを教えてください。', a: `${serviceAreaText}で施工に対応しています。${outsideAreaNote}` },
      {
        q: '夜間施工・短工期に対応していますか？',
        a: '対応しています。翌朝完了が必要な急ぎ案件や、閉店後の夜間施工もご相談ください。スケジュールによっては対応できない場合もありますので、早めのご相談をおすすめします。',
      },
      {
        q: '工事にかかる期間はどれくらいですか？',
        a: '工事内容・規模によって異なります。クロス張替え等の小規模な補修は1〜2日、店舗全体の改装は1〜2週間が目安です。現地調査後に具体的な工期をご提案します。',
      },
    ],
  },
  {
    category: 'お見積り・費用',
    items: [
      { q: '現地調査・見積りは無料ですか？', a: 'はい、無料です。まずはお気軽にお問い合わせください。' },
      {
        q: '費用の目安を教えてください。',
        a: '工事内容・規模・エリア・工期によって異なるため、一律のご案内が難しい状況です。現地調査後に詳細なお見積りを無料でご提出します。',
      },
      { q: '見積り後にキャンセルできますか？', a: 'はい、見積り後のキャンセルは可能です。お見積り・現地調査の費用は一切かかりません。' },
    ],
  },
  {
    category: '原状回復について',
    items: [
      {
        q: '退去立会いの代行も依頼できますか？',
        a: 'はい、対応しています。オーナー・管理会社との退去立会いを代行し、過剰な原状回復費用の請求の適正化もサポートします。',
        supersededBy: 'restoration/move-out-to-restoration',
      },
      {
        q: '退去工事と立会いをセットで依頼できますか？',
        a: 'はい、立会い代行から解体・内装復旧・クリーニングまで一括してお任せいただけます。まとめてご依頼いただくことでコスト削減にもつながります。',
        supersededBy: 'restoration/move-out-to-restoration',
      },
    ],
  },
]

const isPublished = (key: string) => allQa.some((q) => `${q.category}/${q.slug}` === key && q.status === 'published')

/** 分野別の質問として公開済みのものを除いた「基本的なご質問」 */
export const visibleBasicQa = basicQa
  .map((group) => ({ ...group, items: group.items.filter((it) => !it.supersededBy || !isPublished(it.supersededBy)) }))
  .filter((group) => group.items.length > 0)
