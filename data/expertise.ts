// 専門分野・対応範囲・予算の目安の定義。
// トップページ・サービスページ・費用ページ（/price）・構造化データの共通ソース。
import { companyInfo, serviceAreaShortText } from './company'

/** 会社の専門分野・対応範囲の紹介文（2026-10-26 播磨商事様に確認済みの文面。エリアは data/company.ts から差し込む） */
export const specialtyStatement = [
  `株式会社播磨商事は、${companyInfo.address.prefecture}${companyInfo.address.city}の店舗内装工事の専門会社です。`,
  'サロン・ジム・ピラティススタジオなどの店舗内装を、個人での初めての出店からFC・多店舗展開まで請け負います。',
  `${serviceAreaShortText}で施工に対応し、物件契約前の内見同行から現地調査・見積もり・施工・現場管理まで一貫してお任せいただけます。`,
  '退去時の原状回復にも対応しています。',
]

export const specialtyStatementText = specialtyStatement.join('')

/** 紹介文の要点。AI・検索エンジンが「何の会社か」を読み取りやすいよう定義リストで表示する */
export const specialtyFacts = [
  { label: '専門分野', value: 'サロン・ジム・ピラティススタジオなどの店舗内装' },
  { label: '対応エリア', value: serviceAreaShortText },
  { label: '一貫対応', value: '物件契約前の内見同行／現地調査／見積もり／施工／現場管理' },
  { label: 'そのほか', value: 'FC・多店舗展開の内装工事／退去時の原状回復' },
]

export type IndustryServed = {
  name: string
  detail: string
  href?: string
}

/** 対応業種 */
export const industriesServed: IndustryServed[] = [
  { name: 'サロン', detail: '美容室・エステサロン・ネイルサロン・アイラッシュサロンなど', href: '/industry/salon-interior' },
  { name: 'ジム', detail: 'パーソナルジム・フィットネスジムなど', href: '/industry/gym-interior' },
  { name: 'ピラティススタジオ', detail: 'スタジオの新規開業・移転・改装' },
  { name: 'FC・多店舗展開', detail: '加盟店の新規出店・改装、複数店舗の同時進行', href: '/franchise' },
  { name: 'そのほかの店舗', detail: '飲食店・クリニック・物販店など', href: '/industry' },
]

export type WorkScopeGroup = {
  title: string
  items: string[]
}

/** 工事内容（契約前から引き渡しまでの流れ順） */
export const workScopes: WorkScopeGroup[] = [
  { title: '契約前・計画', items: ['物件契約前の内見同行', '現地調査', 'お見積もり・工程のご提案'] },
  { title: '内装工事', items: ['床・壁・天井の仕上げ', '受付カウンター・棚などの造作', '照明工事', '間仕切り・個室づくり'] },
  { title: '設備・性能', items: ['給排水（シャンプー台・洗面など）', '電気容量の確認・増設', '空調・換気', '防音・防振'] },
  { title: '現場管理', items: ['工程管理・職人の手配', 'ビル・管理会社との調整', '写真付きの完了報告'] },
  { title: '小規模工事・退去時', items: ['壁紙（クロス）の張替え・部分補修', '原状回復・退去立会い', '解体・撤去'] },
]

export type BudgetGuide = {
  /** /price#[id] のアンカー */
  id: string
  /** 業種・工事の例 */
  example: string
  /** 坪数・規模 */
  size: string
  /** 工事内容 */
  scope: string
  /** 費用の目安。播磨商事の実際の案件から確認できた金額だけを入れる（例: '280万〜350万円'）。空欄の行は本番に表示しない */
  price: string
  /** 工期の目安（例: '約3週間'） */
  duration: string
}

/** 店舗内装の費用の目安（修正指示書 /price の表） */
export const budgetGuides: BudgetGuide[] = [
  { id: 'esthetic-inuki', example: 'エステサロン（居抜き）', size: '10坪', scope: '壁・床・照明、個室2室', price: '', duration: '' },
  { id: 'esthetic-skeleton', example: 'エステサロン（スケルトン）', size: '10坪', scope: '内装一式、給排水', price: '', duration: '' },
  { id: 'nail', example: 'ネイルサロン', size: '5坪', scope: '壁・床・照明・電源', price: '', duration: '' },
  { id: 'personal-gym', example: 'パーソナルジム', size: '15坪', scope: '防音・防振床、鏡、シャワー', price: '', duration: '' },
  { id: 'pilates', example: 'ピラティススタジオ', size: '20坪', scope: '床・鏡・更衣室・空調', price: '', duration: '' },
  { id: 'private-room', example: '個室の追加', size: '1室', scope: '間仕切り壁＋ドア', price: '', duration: '' },
  { id: 'wallpaper-floor', example: '壁紙・床の張り替えのみ', size: '10坪', scope: 'クロス・床材', price: '', duration: '' },
  { id: 'restoration', example: '店舗の原状回復', size: '10坪', scope: '解体・撤去・復旧', price: '', duration: '' },
]

export type BudgetPlan = {
  id: string
  /** 見出し（例: '予算200万円でできること'） */
  title: string
  /** 箇条書き。確認済みの内容だけを入れる。空の場合は本番に表示しない */
  items: string[]
}

/** 「予算○万円でできること」 */
export const budgetPlans: BudgetPlan[] = [
  { id: 'budget-200', title: '予算200万円でできること', items: [] },
  { id: 'budget-300', title: '予算300万円でできること', items: [] },
]

/** 費用の目安の前提条件。金額を掲載するときは source と tax を必ず入力する */
export const budgetBasis = {
  /** 金額の根拠（例: '2024年1月〜2026年9月に播磨商事が施工した案件の実績から算出'） */
  source: '',
  /** 税込・税別の別（例: '税込'） */
  tax: '',
  /** 共通の注意書き */
  note: '物件の状態（スケルトン・居抜き）、設備工事の有無、工事範囲によって費用は変わります。正式な金額は現地調査のうえでお見積もりします。',
}

export const publishedBudgetGuides = budgetGuides.filter((b) => b.price !== '')
export const publishedBudgetPlans = budgetPlans.filter((p) => p.items.length > 0)

// 根拠・税区分・工期のない金額は掲載させない（ビルド時に止める）
if (publishedBudgetGuides.length > 0 && (!budgetBasis.source || !budgetBasis.tax)) {
  throw new Error('[expertise] 費用の目安を掲載するには budgetBasis.source（金額の根拠）と budgetBasis.tax（税込・税別）を入力してください')
}
for (const b of publishedBudgetGuides) {
  if (!b.duration) throw new Error(`[expertise] 費用の目安「${b.example}」の工期（duration）を入力してください`)
}
